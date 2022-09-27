import Head from 'next/head'
import * as contentful from 'contentful';
import ProjectCard from '../../components/ProjectPage/ProjectCard';



export default function Projects({projects}) {

  return (
    <div>
      <Head>
        <title>Ilya Lyskov | Projects</title>
        <meta name="description" content="Web-dev junior react developer portfolio projects" />
        <link rel="icon" href="/fav.ico" />
      </Head>


      <div className='container px-4 max-w-7xl mx-auto relative'>
        <div className='grid grid-cols-2 gap-10'>
          {
            projects.map(project => {
              return <ProjectCard
                key={project.sys.id}
                project={project}
              />
            })
          }
        </div>
      </div>
     
    </div>
  )
}

const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_API_ACCESS_TOKEN,
});

// get data from contentful
export async function getStaticProps() {

  try {
    const data = await client.getEntries({
      content_type: 'portfolio',
    })

    return {
      props: {
        projects: data.items
      }
    }
  }
  catch {
    return {
      props: {
        projects: null
      }
    }
  }

}

