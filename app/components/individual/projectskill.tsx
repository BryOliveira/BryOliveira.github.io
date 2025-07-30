interface PSProp {
  skill: string
}

export default function ProjectSkill({ skill }: PSProp) {
  return(
    <div className='text-[8pt] px-1 bg-sky-600/70 text-amber-50 rounded-[4px]
                    hover:bg-sky-600/80 hover:text-amber-100 transition-all duration-200
                    hover:scale-120'>
      {skill}
    </div>
  );
}