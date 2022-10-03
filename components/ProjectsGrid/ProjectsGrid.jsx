import React from 'react'
import ProjectCard from '../ProjectPage/ProjectCard'

const ProjectsGrid = ({ projects }) => {
  return (
    <div className='container max-w-7xl mx-auto relative py-9 md:py-[80px] xl:py-[90px] px-4'>
      <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:gap-10 my-lg:grid-cols-3 '>
        {
          projects.map(project => {
            return (
              <div key={project.sys.id}>
                <ProjectCard
                  project={project}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProjectsGrid