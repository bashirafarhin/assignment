'use client';

import Link from 'next/link';

const Logo = () => {
  return (
    <div className="text-2xl font-bold px-2 py-1 rounded-md bg-surface text-text hover:bg-hover transition-colors duration-300 cursor-pointer">
      <Link href="/">Logo</Link>
    </div>
  );
};

export default Logo;