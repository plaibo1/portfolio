import React from 'react'
import ProjectCard from '../ProjectPage/ProjectCard'

const ProjectsGrid = ({ projects }) => {
  return (
    <div className='container px-4 max-w-7xl mx-auto relative p-[100px]'>
      <div className='flex flex-wrap justify-center lg:justify-start'>
        {
          projects.map(project => {
            return (
              <div key={project.sys.id}
                className='w-[98%] py-5 sm:w-[80%] lg:w-[50%] lg:p-4 lg:mb-0'
              >
                <div
                  className='relative lineBg rounded-xl border-2 border-slate-700'
                >
                  <ProjectCard
                    project={project}
                  />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProjectsGrid