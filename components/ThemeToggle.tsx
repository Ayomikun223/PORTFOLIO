'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = (stored as 'dark' | 'light') || (prefersDark ? 'dark' : 'light');
      setTheme(initial);
      document.documentElement.classList.toggle('dark', initial === 'dark');
    } catch (e) {
      // ignore
    }
  }, []);

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try {
      document.documentElement.classList.toggle('dark', next === 'dark');
      localStorage.setItem('theme', next);
    } catch (e) {
      // ignore
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="ml-3 inline-flex items-center rounded-full border border-[#6b3a49] bg-[#1a0b12] px-3 py-2 text-xs font-medium text-[#f5dfe7] transition hover:border-[#bf8397]"
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
}
