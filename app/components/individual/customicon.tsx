import Link from 'next/link';
import React from 'react';

interface SocialProps {
  href: string,
  children: React.ReactNode
}

export default function CustomIcon({href, children}: SocialProps) {
  return (
    <Link 
      href={href} 
      className='text-amber-50 hover:text-amber-100
                 hover:scale-103 transition-all duration-200'
    >
      {children}
    </Link>
  );
}