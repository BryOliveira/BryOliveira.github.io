import Image from 'next/image';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Education from './components/education';
import Experience from './components/experience';

export default function Page() {
  return (
    <div>
      <About />
      <Projects />
      <Skills />
      <Education />
      <Experience />
    </div>
  );
}
