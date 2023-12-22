'use client';

import { useScrollDirection } from '../hooks/useScrollDirection';

export function Header() {
  const direction = useScrollDirection()
  return (
    <div
      className={`fixed fixed-header top-0 h-16 bg-black transition-all duration-500 header-${direction}`}
    >
      <div className={`p-5 font-bold text-white`}>Disappearing Header</div>
    </div>
  );
}
