import ProfilePicture from './pfp';
import Socials from './socials';
import { FaMapPin } from 'react-icons/fa';

export default function About() {
  return (
    <section id='home' className='flex gap-8 mt-8 items-center'>
      <ProfilePicture />
      <div>
        <h1 className='text-5xl mt-2 mb-2 text-center font-medium'>Bryan Oliveira</h1>
        <p>Caltech Undergraduate <br />Software Engineer</p>
        <div className='flex gap-4 text-gray-600 mb-4 justify-between'>
          <span className='flex gap-1 items-center'>
          <FaMapPin 
            size={16} 
            className='fill-amber-50 hover:fill-amber-100 hover:scale-105 
                       transition-all duration-200'
          />
          <p>Maryland</p>
          </span>
          <Socials />
        </div>
      </div>
    </section>
  );
}