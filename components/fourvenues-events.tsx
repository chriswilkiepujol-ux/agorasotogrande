'use client';

import { useEffect, useRef, useState } from 'react';

/* FourVenues embed (upcoming events list or month calendar).
   - Their loader uses document.write to create #fourvenues-iframe, which only works during
     initial parse. We render the container ourselves, so the loader skips document.write.
   - The child frame posts a `toTop` message when it finishes loading and the loader answers
     with scrollIntoView(), which yanks the page to the calendar. We register a capturing
     message listener BEFORE their script and swallow `toTop` unless the section is already
     on screen (the user scrolled there), so background loading never moves the page.
   - The script is injected only when the section gets near the viewport.
   - view="events" is the list of upcoming events (home); view="calendar" is the month calendar
     (events page). Both use FourVenues' dark theme, which has a transparent background and light
     text, so it must sit on our dark background (a light frame makes the text unreadable).
   - A link like /events/#events/[event-slug] opens that event straight away (the loader reads the hash). */
const SRC = {
  events: 'https://www.fourvenues.com/assets/iframe/agora-sotogrande/events?theme=dark',
  calendar: 'https://www.fourvenues.com/assets/iframe/agora-sotogrande/calendar@?theme=dark',
};

export default function FourVenuesEvents({ view = 'events' }: { view?: keyof typeof SRC }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    let visible = false;
    // A deep link to one event (#events/...) loads straight away and brings the widget into view.
    const deep = /^#(events|calendar)/.test(window.location.hash);
    if (deep) { setReady(true); setTimeout(() => box.scrollIntoView({ block: 'start' }), 300); }
    // Loader: inject the script once the section is within 600px of the viewport.
    const loader = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) setReady(true);
    }, { rootMargin: '600px 0px' });
    loader.observe(box);
    // Visibility: no margin, so "visible" means the user can actually see the calendar.
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) visible = e.isIntersecting && e.intersectionRatio > 0.2;
    }, { threshold: [0, 0.2, 0.5] });
    io.observe(box);

    const guard = (ev: MessageEvent) => {
      let d: any = ev.data;
      if (typeof d === 'string' && d.startsWith('{')) { try { d = JSON.parse(d); } catch { return; } }
      if (d && typeof d === 'object' && d.key === 'toTop' && !visible && !deep) ev.stopImmediatePropagation();
    };
    window.addEventListener('message', guard, true);
    return () => { io.disconnect(); loader.disconnect(); window.removeEventListener('message', guard, true); };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const box = boxRef.current;
    if (!box) return;
    box.innerHTML = '';
    document.getElementById('fv_parent_script')?.remove();
    document.getElementById('fv_loader')?.remove();
    const s = document.createElement('script');
    s.id = 'fv_loader';
    s.src = SRC[view];
    s.async = true;
    document.body.appendChild(s);
    return () => {
      s.remove();
      document.getElementById('fv_parent_script')?.remove();
      if (box) box.innerHTML = '';
    };
  }, [ready, view]);

  return <div id="fourvenues-iframe" ref={boxRef} className="min-h-[320px] w-full" />;
}
