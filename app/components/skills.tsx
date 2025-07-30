import { RiJavascriptFill } from 'react-icons/ri';
import SkillCard from './individual/skillcard';
import { SiPython, SiCplusplus, SiC, SiTailwindcss, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiPrisma, SiGit, SiLinux, SiHtml5, SiCss3, SiGithub, SiNumpy, SiScikitlearn, SiPandas } from 'react-icons/si';
import { TbApi, TbSql } from 'react-icons/tb';
import { BiLogoJava, BiLogoTypescript } from 'react-icons/bi';
import { DiMysql } from 'react-icons/di';
import { MdScatterPlot } from 'react-icons/md';
import { BsNvidia } from 'react-icons/bs';


export default function Skills() {
  return (
    <section id='skills' className='my-8 bg-gray-400/30 p-2 rounded-[12px]'>
      <div className='w-[60vw]'>
        <h2 className='text-3xl mb-2 font-extrabold'>Skills</h2>
        <div className='mb-2'>
          <h3 className='text-lg mb-1 font-bold'>Languages</h3>
          <div className='flex flex-wrap gap-2'>
            <SkillCard color='blue' skill='JavaScript'><RiJavascriptFill size={22} /></SkillCard>
            <SkillCard color='blue' skill='TypeScript'><BiLogoTypescript size={22} /></SkillCard>
            <SkillCard color='blue' skill='Python'><SiPython size={20} /></SkillCard>
            <SkillCard color='blue' skill='C'><SiC size={16} /></SkillCard>
            <SkillCard color='blue' skill='C++'><SiCplusplus size={20} /></SkillCard>
            <SkillCard color='blue' skill='HTML'><SiHtml5 size={18} /></SkillCard>
            <SkillCard color='blue' skill='CSS'><SiCss3 size={18} /></SkillCard>
            <SkillCard color='blue' skill='Java'><BiLogoJava size={20} /></SkillCard>
            <SkillCard color='blue' skill='SQL'><TbSql size={20} /></SkillCard>
          </div>
        </div>
        <div className='mb-2'>
          <h3 className='text-lg mb-1 font-bold'>Frontend</h3>
          <div className='flex flex-wrap gap-2'>
            <SkillCard color='green' skill='Next.js'><SiNextdotjs size={20} /></SkillCard>
            <SkillCard color='green' skill='React'><SiReact size={20} /></SkillCard>
            <SkillCard color='green' skill='TailwindCSS'><SiTailwindcss size={20} /></SkillCard>
          </div>
        </div>
        <div className='mb-2'>
          <h3 className='text-lg mb-1 font-bold'>Backend</h3>
          <div className='flex flex-wrap gap-2'>
            <SkillCard color='red' skill='Node.js'><SiNodedotjs size={20} /></SkillCard>
            <SkillCard color='red' skill='Express'><SiExpress size={20} /></SkillCard>
            <SkillCard color='red' skill='PrismaORM'><SiPrisma size={20} /></SkillCard>
            <SkillCard color='red' skill='REST APIs'><TbApi size={22} /></SkillCard>
            <SkillCard color='red' skill='MySQL'><DiMysql size={22} /></SkillCard>
          </div>
        </div>
        <div>
          <h3 className='text-lg mb-1 font-bold'>DevOps & Libraries</h3>
          <div className='flex flex-wrap gap-2'>
            <SkillCard color='orange' skill='Git'><SiGit size={20} /></SkillCard>
            <SkillCard color='orange' skill='GitHub'><SiGithub size={20} /></SkillCard>
            <SkillCard color='orange' skill='Linux'><SiLinux size={20} /></SkillCard>
            <SkillCard color='orange' skill='NumPy'><SiNumpy size={18} /></SkillCard>
            <SkillCard color='orange' skill='scikit-learn'><SiScikitlearn size={18} /></SkillCard>
            <SkillCard color='orange' skill='Matplotlib'><MdScatterPlot size={18} /></SkillCard>
            <SkillCard color='orange' skill='pandas'><SiPandas size={18} /></SkillCard>
            <SkillCard color='orange' skill='pandas'><BsNvidia size={18} /></SkillCard>
          </div>
        </div>
      </div>
    </section>
  );
}