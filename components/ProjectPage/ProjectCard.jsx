import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectCard = ({project}) => {

  const {projectImg, slug, title} = project.fields

  console.log(projectImg)

  return (
    <div className='relative w-full p-5 bg-white shadow-lg rounded-xl border-4 border-slate-700'>
      
      <div className='w-full h-[300px] overflow-hidden border-[3px] border-slate-700 rounded-2xl'>
        <Image 
          width={projectImg.fields.file.details.image.width}
          height={projectImg.fields.file.details.image.height}
          src={`https:${projectImg.fields.file.url}`}
        />
      </div>

      <div className='text-4xl font-bold mb-7'>
        {title}
      </div>
      <div className='w-full flex justify-end'>
        <Link href={`/projects/${slug}`}>
          <a className='bg-indigo-500 p-3 px-5 rounded-lg text-white'>Learn more</a>
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
