'use client';
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react';

/* Hero background: the poster photo drifts (slow Ken Burns) while the video loads,
   then the video fades in over it. Phones get a 480p file (~1.6 MB), larger screens 720p (~3.3 MB);
   the video sits behind a slight blur, so more resolution would not show. With data saver on, or if
   the video never plays, the drifting poster stays and nothing looks broken. */
export function HeroVideo({ src, poster }: { src: { mobile: string; desktop: string }; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (saveData) return;
    const on = () => setPlaying(true);
    v.addEventListener('playing', on);
    v.src = window.matchMedia('(max-width: 767px)').matches ? src.mobile : src.desktop;
    v.play().catch(() => {});
    return () => v.removeEventListener('playing', on);
  }, [src.mobile, src.desktop]);
  return (
    <>
      <img src={poster} alt="" className={`drift absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${playing ? 'opacity-0' : 'opacity-100'}`} />
      <video ref={ref} className={`absolute inset-0 h-full w-full object-cover scale-[1.04] blur-[2px] transition-opacity duration-[1000ms] ${playing ? 'opacity-100' : 'opacity-0'}`} muted loop playsInline autoPlay preload="auto" />
    </>
  );
}
