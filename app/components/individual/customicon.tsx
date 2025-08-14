import Link from 'next/link';
import React from 'react';

interface SocialProps {
  href: string,
  children: React.ReactNode,
  target?: string,
  rel?: string
}

export default function CustomIcon({href, children, target, rel}: SocialProps) {
  const isExternal = href.startsWith('http') || href.endsWith('.pdf');
  if (isExternal) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className='text-amber-50 hover:text-amber-100 hover:scale-103 transition-all duration-200'
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className='text-amber-50 hover:text-amber-100 hover:scale-103 transition-all duration-200'>
      {children}
    </Link>
  );
}