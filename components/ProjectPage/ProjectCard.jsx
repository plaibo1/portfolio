import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PrimaryButton } from '../Buttons/Buttons'

import { TbArrowRightBar } from 'react-icons/tb'

const ProjectCard = ({project}) => {

  const {projectImg, slug, title, techs} = project.fields

  return (
    <div className='relative w-full p-4 rounded-xl border-2 
      border-slate-700 bg-white z-10'>
      
      <div className='border flex justify-center items-center 
        rounded-lg overflow-hidden mb-4'>
        <Image 
          width={projectImg.fields.file.details.image.width}
          height={projectImg.fields.file.details.image.height}
          src={`https:${projectImg.fields.file.url}`}
        />
      </div>

      <div className='text-3xl font-bold mb-5'>
        {title}
      </div>

      <div className='mb-6 h-auto sm:h-[85px]'>
        <ol className='flex flex-wrap relative'>
          {techs.map(tech => {
            return (
              <li key={tech} className='py-1 px-3 border-2 rounded-full mr-1 mb-2 text-sm bg-white'>{tech}</li>
            )
          })}
        </ol>
      </div>

      <div className='w-[95%] mx-auto'>
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
