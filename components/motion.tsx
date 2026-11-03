'use client';
import { useEffect } from 'react';

/* Page motion, all in one place so it can be tuned (or switched off) in one file.
   - [data-reveal]: one rise-and-fade per section when it enters the viewport. Without JS the
     content is simply visible (the styles only apply under html.js).
   - [data-parallax]: photo moves at ~85% of scroll speed. Writes a CSS variable, no layout work.
   - body.nav-hidden / body.scrolled: the nav hides on scroll down, returns on scroll up.
   Everything is skipped when the visitor prefers reduced motion. */
export function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('js');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Reveals
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    let io: IntersectionObserver | null = null;
    if (reduce) revealEls.forEach((el) => el.classList.add('is-in'));
    else {
      io = new IntersectionObserver((entries) => {
        for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-in'); io?.unobserve(e.target); }
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });
      revealEls.forEach((el) => io!.observe(el));
    }

    // Parallax + nav
    const px = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
    let lastY = window.scrollY, ticking = false;
    const frame = () => {
      ticking = false;
      const y = window.scrollY, vh = window.innerHeight;
      if (!reduce) {
        for (const el of px) {
          const r = el.getBoundingClientRect();
          if (r.bottom < -200 || r.top > vh + 200) continue;
          const offset = (r.top + r.height / 2 - vh / 2) * -0.15;
          el.style.setProperty('--py', `${offset.toFixed(1)}px`);
        }
      }
      document.body.classList.toggle('scrolled', y > 80);
      document.body.classList.toggle('nav-hidden', y > lastY && y > 160);
      lastY = y;
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } };
    frame();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { io?.disconnect(); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);
  return null;
}
