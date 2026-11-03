'use client';
import { useEffect, useState } from 'react';

/* Title-font picker for Adolfo to compare options on the real pages.
   Shows only on the testing site (*.vercel.app, qa.*, localhost) or with ?font= in the URL.
   Choice is kept per browser so it survives navigation. Remove once a font is chosen. */
const options = [
  { id: 'didot', label: 'Didot' },
  { id: 'impact', label: 'Impact' },
  { id: 'helvetica', label: 'Helvetica Bold' },
] as const;
type Id = (typeof options)[number]['id'];
const KEY = 'agora-font';

function apply(id: Id) {
  document.documentElement.dataset.font = id;
  try { localStorage.setItem(KEY, id); } catch {}
}

export function FontPreview() {
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState<Id>('didot');
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const host = location.hostname;
    const param = new URLSearchParams(location.search).get('font') as Id | null;
    const testing = host.endsWith('.vercel.app') || host.startsWith('qa.') || host === 'localhost' || !!param;
    if (!testing) return;
    let saved: Id | null = null;
    try { saved = localStorage.getItem(KEY) as Id | null; } catch {}
    const id = (options.find((o) => o.id === param) ?? options.find((o) => o.id === saved))?.id ?? 'didot';
    apply(id);
    setCurrent(id);
    setShow(true);
  }, []);

  if (!show) return null;
  const pick = (id: Id) => { apply(id); setCurrent(id); };

  return (
    <div className="fixed bottom-4 left-4 z-[60] font-body text-[12px]">
      {open ? (
        <div className="flex items-center gap-1 rounded-full border border-white/15 bg-ink/90 p-1 shadow-xl backdrop-blur">
          <span className="px-3 font-semibold uppercase tracking-[0.2em] text-bone/60">Titles</span>
          {options.map((o) => (
            <button key={o.id} onClick={() => pick(o.id)}
              className={`rounded-full px-3 py-2 font-semibold transition ${current === o.id ? 'bg-bone text-ink' : 'text-bone hover:bg-white/10'}`}>
              {o.label}
            </button>
          ))}
          <button onClick={() => setOpen(false)} className="rounded-full px-3 py-2 text-bone/60 hover:text-bone" aria-label="Hide">×</button>
        </div>
      ) : (
        <button onClick={() => setOpen(true)} className="rounded-full border border-white/15 bg-ink/90 px-4 py-2 font-semibold uppercase tracking-[0.2em] text-bone/80 backdrop-blur">Aa</button>
      )}
    </div>
  );
}
