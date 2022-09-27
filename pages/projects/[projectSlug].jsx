import React, { useEffect, useState } from 'react'
import * as contentful from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Head from 'next/head'
import { PrimaryButton, ProjectLinkButton } from '../../components/Buttons/Buttons';

import { BsDoorOpen } from 'react-icons/bs'


const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_API_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'portfolio'
  })

  const paths = res.items.map(item => {
    return {
      params: { projectSlug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {

  const { items } = await client.getEntries({
    content_type: 'portfolio',
    'fields.slug': params.projectSlug,
  })


  return {
    props: {
      project: items[0]
    }
  }
}

const Slug = ({ project }) => {

  const { description, projectImg, projectVideo, title, slug, techs, projectUrl, aboutSmall } = project.fields

  return (
    <div>

      <Head>
        <title>{title} | Projects Ilya Lyskov</title>
        <meta name="description" content="Web-dev junior react developer portfolio" />
        <link rel="icon" href="/fav.ico" />
      </Head>

      <header className='w-full relative overflow-hidden'>
        <div className='container py-[100px] sm:py-[120px] lg:py-[200px] px-4 
        max-w-7xl mx-auto relative 
        flex flex-col lg:flex-row items-center'>

          {/* cubes bg */}
          <div className='cubesBg'>
            <div className='cubesBg__innerGradient'></div>
            <div className='cubesBg__innerCubes'></div>
          </div>

          <div className='cubesBg right'>
            <div className='cubesBg__innerGradient'></div>
            <div className='cubesBg__innerCubes'></div>
          </div>
          
          {/* text content */}
          <div className='mb-12 md:text-center lg:text-left lg:mb-0 lg:w-[35%] xl:w-1/2'>
            <h1 className='border-indigo-500 border-4 rounded-2xl 
              text-indigo-500 font-mono font-bold inline-flex px-6'>{title}</h1>

            <h2 className='text-5xl lg:text-6xl font-black mb-6 mt-5'>{aboutSmall}</h2>

            <div className='mb-6 md:mb-10 md:flex md:flex-col md:items-center lg:inline-block'>
              <span className='font-semibold mb-3 text-base flex'>Used technologies:</span>
              <ol className='flex flex-wrap relative'>
                {techs.map(tech => {
                  return (
                    <li key={tech} className='py-1 px-4 border-2 rounded-full mr-1 mb-2 text-sm bg-white'>{tech}</li>
                  )
                })}
              </ol>
            </div>

            <ProjectLinkButton
              linkTo={projectUrl}
            />
          </div>


          {/* video content */}
          <div className='relative ml-auto lg:w-[59%] xl:w-2/3'>
            <div className='w-full relative lineBg rounded-xl border-4 border-slate-700'>
              <video autoPlay={true} loop muted className='translate-x-3 translate-y-3 rounded-xl border-4 border-slate-700'>
                <source
                  src={`https:${projectVideo.fields.file.url}`}
                  type={projectVideo.fields.file.contentType}
                />
              </video>
            </div>
          </div>

        </div>
      </header>
      
      <div className='container py-[100px] px-4 max-w-7xl mx-auto relative'>
        <div className='prose prose-xl'>{documentToReactComponents(description)}</div>

        <PrimaryButton
          linkTo={'/projects'}
          text={'Back to projects'}
          icon={<BsDoorOpen />}
        />
      </div>      

    </div>
  )
}

export default Slug