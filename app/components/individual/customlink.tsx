import Link from 'next/link';
import React from 'react';

interface LinkProps {
  href: string,
  children: React.ReactNode
}

export default function CustomLink({href, children}: LinkProps) {
  return (
    <Link href={href} className='text-indigo-600 hover:text-indigo-400 px-2 py-4 transition-colors duration-200'>{children}</Link>
  );
}