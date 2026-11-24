import { NextResponse } from 'next/server';

/* Enquiry endpoint. Validates, logs a copy (Vercel logs, as a backup), then delivers by the first option set:
   1. RESEND_API_KEY  → emails via Resend (needs the domain verified there; optional upgrade).
   2. ENQUIRY_WEBHOOK → POSTs the JSON to any URL (Make, Zapier, a CRM).
   3. default         → FormSubmit (formsubmit.co), sent from the visitor's browser by the form: emails the
                        enquiry to ENQUIRY_TO (default agorasotogrande@gmail.com) with Reply going to the
                        sender. No account or key; the very first enquiry triggers a one-time
                        "Activate Form" email to that inbox. */

const esc = (v: unknown) => String(v ?? '').replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch] as string));

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false }, { status: 400 }); }
  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return NextResponse.json({ ok: false }, { status: 422 });
  if (String(body.website ?? '')) return NextResponse.json({ ok: true }); // honeypot filled by a bot: pretend success

  const payload = { ...body, receivedAt: new Date().toISOString(), source: 'agorasotogrande.com' };
  console.log('[enquiry]', JSON.stringify(payload)); // backup copy in Vercel logs
  const fields: [string, unknown][] = [
    ['Name', body.name], ['Email', body.email], ['Phone', body.phone], ['Type of event', body.type],
    ['Date', body.date], ['Guests', body.guests], ['Budget', body.budget], ['Message', body.message], ['Language', body.locale],
  ];

  if (process.env.RESEND_API_KEY) {
    const to = process.env.ENQUIRY_TO ?? 'agorasotogrande@gmail.com';
    const from = process.env.ENQUIRY_FROM ?? 'Ágora Web <onboarding@resend.dev>';
    const subject = `Enquiry: ${String(body.type ?? 'event')} · ${name}${body.date ? ` · ${body.date}` : ''}`;
    const html = `<h2 style="font-family:sans-serif">New enquiry from agorasotogrande.com</h2>
      <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">${fields
        .filter(([, v]) => v !== undefined && v !== '')
        .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666">${k}</td><td style="padding:4px 0">${esc(v).replace(/\n/g, '<br>')}</td></tr>`)
        .join('')}</table>`;
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'content-type': 'application/json' },
      body: JSON.stringify({ from, to: to.split(',').map((s) => s.trim()), reply_to: email, subject, html }),
    });
    if (!r.ok) { console.error('[enquiry] resend failed', r.status, await r.text()); return NextResponse.json({ ok: false }, { status: 502 }); }
    return NextResponse.json({ ok: true });
  }

  const hook = process.env.ENQUIRY_WEBHOOK;
  if (hook) {
    const r = await fetch(hook, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(payload) });
    if (!r.ok) return NextResponse.json({ ok: false }, { status: 502 });
    return NextResponse.json({ ok: true });
  }

  // Default: FormSubmit → agorasotogrande@gmail.com. FormSubmit only accepts submissions sent from a
  // visitor's browser (server requests get 403), so the browser sends it after this check and log.
  const to = process.env.ENQUIRY_TO ?? 'agorasotogrande@gmail.com';
  return NextResponse.json({ ok: true, deliver: 'formsubmit', to });
}
