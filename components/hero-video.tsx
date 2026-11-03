'use client';
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react';

/* Hero background: the poster photo drifts (slow Ken Burns) while the video loads,
   then the video fades in over it. If the video never plays (data saver, old phone),
   the drifting poster stays and nothing looks broken. */
export function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const on = () => setPlaying(true);
    v.addEventListener('playing', on);
    v.play().catch(() => {});
    return () => v.removeEventListener('playing', on);
  }, []);
  return (
    <>
      <img src={poster} alt="" className={`drift absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${playing ? 'opacity-0' : 'opacity-100'}`} />
      <video ref={ref} className={`absolute inset-0 h-full w-full object-cover scale-[1.04] blur-[2px] transition-opacity duration-[1500ms] ${playing ? 'opacity-100' : 'opacity-0'}`} muted loop playsInline autoPlay preload="metadata">
        <source src={src} type="video/mp4" />
      </video>
    </>
  );
}
