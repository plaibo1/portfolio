import Head from 'next/head'
import * as contentful from 'contentful';
import ProjectsGrid from '../../components/ProjectsGrid/ProjectsGrid';
import { useEffect } from 'react';
import { consoleJob } from '../../utils/consoleJob';



export default function Projects({projects}) {

  useEffect(() => {
    consoleJob()
  }, [])

  return (
    <div>
      <Head>
        <title>Ilya Lyskov | Projects</title>
        <meta name="description" content="Web-dev junior react developer portfolio projects" />
        <link rel="icon" href="/fav.ico" />
      </Head>

      <ProjectsGrid projects={projects} />
     
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

