'use client';
import { useEffect, useState } from 'react';

export default function SplashScreen({ onFinished }: { onFinished: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show splash screen for 2.5 seconds, then start fade out
    const timeout = setTimeout(() => {
      setFadeOut(true);
      // Wait for fade animation to complete before removing from DOM
      setTimeout(onFinished, 500); 
    }, 2500);

    return () => clearTimeout(timeout);
  }, [onFinished]);

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <h1 className="animate-pulse text-4xl font-bold text-white">TholeOS</h1>
      <p className="mt-2 text-gray-400">Booting up...</p>
    </div>
  );
}