import * as contentful from 'contentful';

import Head from 'next/head'
import { useEffect, useRef, useState } from 'react';
import MessageForm from '../components/MessageForm/MessageForm'
import { consoleJob } from '../utils/consoleJob';
import { AnimatePresence, motion } from 'framer-motion'

import { TbBrandTelegram } from 'react-icons/tb'
import { MdClose, MdPerson } from 'react-icons/md'
import { HiOutlineMail } from 'react-icons/hi'
import { FiGithub } from 'react-icons/fi'

import style from '../styles/indexName.module.css'
import { ButtonFire, LinkButtonFire, PrimaryButton } from '../components/Buttons/Buttons';
import ProjectsGrid from '../components/ProjectsGrid/ProjectsGrid';
import BoxCanvas from '../components/BoxCanvas/BoxCanvas';

export default function Home({projects}) {

  const [isShowMessageForm, setIsShowMessageForm] = useState(null);
  const [isZoom, setIsZoom] = useState(true);

  useEffect(() => {
    consoleJob() 
  }, [])

  return (
    <div>
      <Head>
        <title>Ilya Lyskov — Web-dev portfolio</title>
        <meta name="description" content="Web-dev junior react developer portfolio" />
        <link rel="icon" href="/fav.ico" />
      </Head>


      <div className='container mt-[120px] px-4 max-w-7xl mx-auto relative'>

        <div 
          className={`${isZoom ? 'w-[120px] h-[120px]' : 'w-[700px] h-[700px]' }`} 
          // onClick={() => setIsZoom(prev => prev = !prev)}
        >
          <BoxCanvas />
        </div>

        <div className='text-left text-slate-800 mb-16'>
          <h1 className={style.name}>Ilya Lyskov — personal portfolio</h1>
        </div>

        <div className='my-10 grid-cols-2 gap-4 grid md:grid-cols-4 md:justify-items-stretch md:gap-8'>

          <LinkButtonFire 
            linkTo={'https://resume-ia9n.vercel.app/'}
            name='Resume'
            icon={<MdPerson />}
          />

          <LinkButtonFire 
            linkTo={'https://github.com/plaibo1'}
            name='GitHub'
            icon={<FiGithub />}
          />
          
          <motion.div className='grid' layoutId={'showUpMessageForm'}>
            <ButtonFire
              click={() => setIsShowMessageForm('showUpMessageForm')}
              linkTo={'https://t.me/playbo1'}
              name='Send email'
              icon={<HiOutlineMail />}
            />
          </motion.div>
          
          <LinkButtonFire 
            linkTo={'https://t.me/playbo1'}
            name='Telegram'
            icon={<TbBrandTelegram />}
          />
         
        </div>

        <AnimatePresence>
          {
            isShowMessageForm && (
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setIsShowMessageForm(null)}
                className='fixed w-full h-screen left-0 top-0 flex z-[999] backdrop-blur-sm p-5 sm:p-0'
              >
                <motion.div
                  layoutId={'showUpMessageForm'}
                  className='relative inline-block m-auto'
                  onClick={(e) => e.stopPropagation()}
                >

                  <div className='w-full flex justify-end'>
                    <div
                      onClick={() => setIsShowMessageForm(null)}
                      className='text-3xl cursor-pointer'
                    >
                      <MdClose />
                    </div>
                  </div>

                  <MessageForm />
                  
                </motion.div>

              </motion.div>
            )
          }
        </AnimatePresence>

      </div>

      <ProjectsGrid
        projects={projects}
      />
     
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