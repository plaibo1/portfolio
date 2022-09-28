import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PrimaryButton } from '../Buttons/Buttons'

import { TbArrowRightBar } from 'react-icons/tb'

const ProjectCard = ({project}) => {

  const {projectImg, slug, title, techs} = project.fields

  return (
    <div className='relative w-full p-5 bg-white shadow-lg rounded-xl border-2 border-slate-700 translate-x-2 translate-y-2'>
      
      <div className='w-full h-auto lg:h-[300px] overflow-hidden border-2 border-slate-700 rounded-2xl mb-5'>
        <Image 
          width={projectImg.fields.file.details.image.width}
          height={projectImg.fields.file.details.image.height}
          src={`https:${projectImg.fields.file.url}`}
        />
      </div>

      <div className='text-3xl font-bold mb-5'>
        {title}
      </div>

      <ol className='flex flex-wrap relative mb-6'>
        {techs.map(tech => {
          return (
            <li key={tech} className='py-1 px-4 border-2 rounded-full mr-1 mb-2 text-sm bg-white'>{tech}</li>
          )
        })}
      </ol>

      <div className='w-full flex justify-end'>
        <PrimaryButton 
          linkTo={`/projects/${slug}`}
          text={'Explore this project'} 
          icon={<TbArrowRightBar />}
        />
      </div>
    </div>
  )
}

export default ProjectCard
