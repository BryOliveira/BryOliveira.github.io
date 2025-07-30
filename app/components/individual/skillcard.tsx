import React from 'react';

interface SkillProps {
  skill: string,
  color: 'red' | 'blue' | 'green' | 'orange',
  children: React.ReactNode | null
}

const colorMap = {
  blue: 'bg-blue-100/60',
  green: 'bg-emerald-100/60',
  red: 'bg-red-100/60',
  orange: 'bg-yellow-100/60'
}

const textMap = {
  blue: 'text-blue-800/80',
  green: 'text-emerald-800/80',
  red: 'text-red-700/80',
  orange: 'text-yellow-700/80'
}

const hoverBgMap = {
  blue: 'hover:bg-blue-100/80',
  green: 'hover:bg-emerald-100/80',
  red: 'hover:bg-red-100/80',
  orange: 'hover:bg-yellow-100/80'
}

const hoverTxMap = {
  blue: 'hover:text-blue-800/90',
  green: 'hover:text-emerald-800/90',
  red: 'hover:text-red-700/90',
  orange: 'hover:text-yellow-700/90'
}

export default function SkillCard({ skill, color, children }: SkillProps) {
  return (
    <div className={`flex text-sm gap-2 items-center px-2 py-1 
                     rounded-full ${colorMap[color]} ${textMap[color]}
                     ${hoverBgMap[color]} ${hoverTxMap[color]} transition-all 
                     duration-200`}>
      {children} {skill}
    </div>
  );
}