import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectCard = ({project}) => {

  const {projectImg, slug, title} = project.fields

  console.log(projectImg)

  return (
    <div className='relative w-full p-5 bg-white shadow-lg rounded-lg'>
      <Image 
        width={projectImg.fields.file.details.image.width}
        height={projectImg.fields.file.details.image.height}
        src={`https:${projectImg.fields.file.url}`}
      />
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
