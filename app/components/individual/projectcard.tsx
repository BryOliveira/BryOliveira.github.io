import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProjectProps {
  img: string,
  title: string,
  desc: string,
  projectLink: string,
  children: React.ReactNode
}

export default function ProjectCard({ img, title, desc, projectLink, children }: ProjectProps) {
  return (
    <Link href={projectLink}>
      <div className='pb-2 bg-gray-400/30 rounded-lg overflow-clip min-h-[290px]
                      hover:scale-102 transition-all duration-200'>
        <div className='relative w-full h-[180px]'> 
          <Image 
            src={img}
            alt={title}
            fill
            className='object-cover'
          />
        </div>
        <div className='mx-2'>
          <h2 className='font-bold mt-[4px] mb-[2px]'>{title}</h2>
          <p className='text-xs mb-[4px]'>{desc}</p>
          <div className='flex flex-wrap'>
            {children}
          </div>
        </div>
      </div>
    </Link>
  );
}