import React from 'react'
import ProjectCard from '../ProjectPage/ProjectCard'

const ProjectsGrid = ({ projects }) => {
  return (
    <div className='container max-w-7xl mx-auto relative py-[100px]'>
      <div className='flex '>
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