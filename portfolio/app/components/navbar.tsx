import CustomLink from './individual/customlink';

export default function NavBar() {
  return (
    <header className='fixed top-8 left-1/2 transform -translate-x-1/2 z-2'>
      <nav>
        <ul className='flex border border-gray-400/25 rounded-full backdrop-blur-xs bg-gray-400/10'>
          <li className='hover:bg-gray-400/10 p-4 min-w-28 text-center rounded-full'><CustomLink href='#about'>Home</CustomLink></li>
          <li className='hover:bg-gray-400/10 p-4 min-w-28 text-center rounded-full'><CustomLink href='#projects'>Projects</CustomLink></li>
          <li className='hover:bg-gray-400/10 p-4 min-w-28 text-center rounded-full'><CustomLink href='#skills'>Skills</CustomLink></li>
          <li className='hover:bg-gray-400/10 p-4 min-w-28 text-center rounded-full'><CustomLink href='#experience'>Experience</CustomLink></li>
        </ul>
      </nav>
    </header>
  );
}