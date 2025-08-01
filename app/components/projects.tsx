import Link from 'next/link';
import ProjectCard from './individual/projectcard';
import ProjectSkill from './individual/projectskill';
import { FaArrowRight } from 'react-icons/fa6';

export default function Projects() {
  return (
    <section id='projects' className='my-8 bg-gray-400/30 p-2 rounded-[12px]'>
      <div className='w-[60vw]'>
        <h2 className='text-3xl mb-2 font-extrabold'>Projects</h2>
        <div className='grid grid-cols-3 gap-4'>
          <ProjectCard
            img='/liveable.png'
            title='Liveable'
            desc='A job salary and mortgage affordability web app based on the Affor-db database.'
            projectLink='https://github.com/BryOliveira/live-able'
          >
            <div className='flex flex-wrap gap-1'>
              <ProjectSkill skill='TypeScript'/>
              <ProjectSkill skill='React'/>
              <ProjectSkill skill='Next.js'/>
              <ProjectSkill skill='HTML'/>
              <ProjectSkill skill='CSS'/>
              <ProjectSkill skill='PrismaORM'/>
              <ProjectSkill skill='MySQL'/>
            </div>
          </ProjectCard>

          <ProjectCard
            img='/comeback.png'
            title='Comeback'
            desc='An E-commerce platform site built with a RESTful API backend.'
            projectLink='https://github.com/BryOliveira/cs132-boliveir/tree/main/final-project'
          >
            <div className='flex flex-wrap gap-1'>
              <ProjectSkill skill='JavaScript'/>
              <ProjectSkill skill='Node.js'/>
              <ProjectSkill skill='Express'/>
              <ProjectSkill skill='HTML'/>
              <ProjectSkill skill='CSS'/>
            </div>
          </ProjectCard>

          <ProjectCard
            img='/languages.png'
            title='Languages Galore API'
            desc='RESTful API for getting information about different programming languages.'
            projectLink='https://github.com/BryOliveira/cs132-boliveir/tree/main/cp4'
          >
            <div className='flex flex-wrap gap-1'>
              <ProjectSkill skill='JavaScript'/>
              <ProjectSkill skill='Node.js'/>
              <ProjectSkill skill='Express'/>
              <ProjectSkill skill='HTML'/>
              <ProjectSkill skill='CSS'/>
            </div>
          </ProjectCard>
          
          <ProjectCard
            img='/tour.png'
            title='Tour &apos;Round the World'
            desc='Site built using the REST Countries API to filter through countries by language, continent, etc.'
            projectLink='https://github.com/BryOliveira/cs132-boliveir/tree/main/cp4'
          >
            <div className='flex flex-wrap gap-1'>
              <ProjectSkill skill='JavaScript'/>
              <ProjectSkill skill='HTML'/>
              <ProjectSkill skill='CSS'/>
            </div>
          </ProjectCard>

          <ProjectCard
            img='/pexels-photo-330771.jpeg'
            title='Affor-db'
            desc='Python CLI app that uses a MySQL database to search through job salary and house affordability metrics.'
            projectLink='https://github.com/BryOliveira/affor-db'
          >
            <div className='flex flex-wrap gap-1'>
              <ProjectSkill skill='Python'/>
              <ProjectSkill skill='MySQL'/>
            </div>
          </ProjectCard>
          
          <div className='pointer-events-none'>
            <ProjectCard
              img='/leggies.png'
              title='Leggies'
              desc='Collaboratively created C-based game using a built-from-scratch physics engine and SDL.'
              projectLink=''
            >
              <div className='flex flex-wrap gap-1'>
                <ProjectSkill skill='C'/>
                <ProjectSkill skill='SDL2'/>
              </div>
            </ProjectCard>
          </div>

          <ProjectCard
            img='/thumbnail.png'
            title='Wii-rd Bowling'
            desc='Demade version of Wii Bowling using an AdaFruit microcontroller.'
            projectLink='https://www.youtube.com/watch?v=KUHvjdcYEo4&ab_channel=AmerElsana'
          >
            <div className='flex flex-wrap gap-1'>
              <ProjectSkill skill='Python'/>
              <ProjectSkill skill='CircuitPython'/>
              <ProjectSkill skill='Embedded Systems'/>
            </div>
          </ProjectCard>

          <ProjectCard
            img='/goodboy.png'
            title='Chrome Critter'
            desc='A Hackathon Project for the county-wide MoCoHacks, intended to increase productivity with a Chrome extension.'
            projectLink='https://github.com/BryOliveira/ChromeCritter/tree/main'
          >
            <div className='flex flex-wrap gap-1'>
              <ProjectSkill skill='JavaScript'/>
              <ProjectSkill skill='HTML'/>
              <ProjectSkill skill='CSS'/>
              <ProjectSkill skill='Chrome API'/>
            </div>
          </ProjectCard>
        </div>
      </div>
    </section>
  );
}