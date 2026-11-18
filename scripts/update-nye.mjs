#!/usr/bin/env node
/* Refresh the New Year's Eve release data shown in the pop-up (lib/nye-data.json).

   Opens the public FourVenues event page in a headless browser, the same page a visitor sees,
   and reads the ticket list that page loads: each release's name, price and whether it is sold
   out, plus the VIP pass. Writes lib/nye-data.json only when something changed.

   Usage:  node scripts/update-nye.mjs           -> prints the result, writes if changed
           node scripts/update-nye.mjs --dry-run -> prints only
   Exit codes: 0 ok (changed or not), 2 page/data not readable (nothing written).
   Run twice a day by a scheduled task until 31 Dec; that task commits and pushes when the file changes. */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = path.join(ROOT, 'lib', 'nye-data.json');
const dry = process.argv.includes('--dry-run');

const current = JSON.parse(fs.readFileSync(DATA, 'utf8'));
const EVENT_URL = `https://site.fourvenues.com/en/iframe/agora-sotogrande/${current.eventHash}?theme=dark`;

async function loadPlaywright() {
  const candidates = ['playwright', 'playwright-core', '/home/claude/.npm-global/lib/node_modules/playwright/index.mjs', '/opt/node22/lib/node_modules/playwright/index.mjs'];
  for (const c of candidates) {
    try { return await import(c); } catch { /* try next */ }
  }
  throw new Error('Playwright not found. Install it with: npm i --no-save playwright');
}

async function readTicketTypes() {
  const { chromium } = await loadPlaywright();
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    let types = null;
    page.on('response', async (r) => {
      if (r.url().includes('/tickets-types')) { try { types = (await r.json())?.data ?? null; } catch { /* ignore */ } }
    });
    await page.goto(EVENT_URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
    for (let i = 0; i < 30 && !types; i++) await page.waitForTimeout(1000);
    return types;
  } finally {
    await browser.close();
  }
}

const types = await readTicketTypes().catch((e) => { console.error('read failed:', e.message); return null; });
if (!Array.isArray(types) || types.length === 0) {
  console.error('No ticket data found on the event page; nothing written.');
  process.exit(2);
}

const isVip = (t) => /vip/i.test(t.name);
const general = types.filter((t) => !isVip(t) && /release/i.test(t.name)).sort((a, b) => a.price - b.price);
const vips = types.filter(isVip).sort((a, b) => a.price - b.price);
if (general.length === 0) { console.error('No general releases found; nothing written.'); process.exit(2); }

let seenOn = false;
const releases = general.map((t, i) => {
  let status = 'next';
  if (t.isSoldOut) status = 'sold';
  else if (!seenOn) { status = 'on'; seenOn = true; }
  return { n: i + 1, name: t.name, price: t.price, status, ...(/final/i.test(t.name) ? { final: true } : {}), ...(t.areFewLeft && !t.isSoldOut ? { fewLeft: true } : {}) };
});
const vipOpen = vips.find((t) => !t.isSoldOut);
const vip = vipOpen ? { price: vipOpen.price, fewLeft: !!vipOpen.areFewLeft, soldOut: false } : { price: vips[0]?.price ?? null, fewLeft: false, soldOut: vips.length > 0 };

const next = { ...current, releases, vip };
const changed = JSON.stringify({ r: current.releases, v: current.vip }) !== JSON.stringify({ r: releases, v: vip });
next.checked = new Date().toISOString();

console.log(releases.map((r) => `${r.n}. ${r.name} €${r.price} ${r.status}${r.fewLeft ? ' (few left)' : ''}`).join('\n'));
console.log(`VIP: ${vip.soldOut ? 'sold out' : `€${vip.price}${vip.fewLeft ? ' few left' : ''}`}`);
console.log(changed ? 'CHANGED' : 'UNCHANGED');

if (changed && !dry) {
  fs.writeFileSync(DATA, JSON.stringify(next, null, 2) + '\n');
  console.log('Wrote', path.relative(ROOT, DATA));
}
