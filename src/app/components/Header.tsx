'use client';

import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <Navigation />
    </header>
  );
}
