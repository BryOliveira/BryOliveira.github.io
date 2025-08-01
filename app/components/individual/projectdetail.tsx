import React from 'react';

interface projectProps {
  title: string,
  technologies: React.ReactElement,
  children: React.ReactNode
}

export default function DetailedProject({ title, technologies, children }: projectProps) {
  return (
    <div>
      <h2 className='text-2xl mb-2 font-extrabold'>{title}</h2>
      <div className='flex flex-wrap gap-2'>
        {technologies}
      </div>
      <ul className='list-disc ml-6'>
        {children}
      </ul>
    </div>
  );
}