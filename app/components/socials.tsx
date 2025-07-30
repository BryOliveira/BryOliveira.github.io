import { SiGithub, SiGoogledocs, SiLinkedin } from 'react-icons/si';
import { TbMail } from 'react-icons/tb';
import CustomIcon from './individual/customicon';

export default function Socials() {
  return (
    <div className='relative grid grid-cols-2 gap-2 -top-12 -left-10 items-center z-0'>
      <CustomIcon href='https://www.linkedin.com/in/bryan-r-oliveira/'><SiLinkedin size={28} /></CustomIcon>
      <CustomIcon href='https://github.com/BryOliveira'><SiGithub size={28} /></CustomIcon>
      <CustomIcon href='mailto:boliveir@caltech.edu'><TbMail size={28} /></CustomIcon>
      <CustomIcon href=''><SiGoogledocs size={24}/></CustomIcon>
    </div>
  );
}