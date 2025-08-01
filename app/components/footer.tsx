import Link from 'next/link';

export default function Footer() {
  return (
    <div className='w-[50vw] py-4 my-8 bg-gray-400/50 p-2 rounded-[12px] justify-items-center'>
      <div className='flex justify-between gap-32'>
        <ul>
          <li>Built with React, Next.js, and TailwindCSS</li>
          <li>&copy; 2025 Bryan Oliveira</li>
          <li>All rights reserved.</li>
        </ul>
        <ul className='text-indigo-800'>
          <li className='hover:text-indigo-500 transition-colors duration-200'><Link href='https://www.linkedin.com/in/bryan-r-oliveira/'>LinkedIn</Link></li>
          <li className='hover:text-indigo-500 transition-colors duration-200'><Link href='https://github.com/BryOliveira'>GitHub</Link></li>
          <li className='hover:text-indigo-500 transition-colors duration-200'><Link href='mailto:boliveir@caltech.edu'>Email</Link></li>
        </ul>
      </div>
    </div>
  );
}