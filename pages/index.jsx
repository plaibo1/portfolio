import * as contentful from 'contentful';

import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react';
import MessageForm from '../components/MessageForm/MessageForm'
import { consoleJob } from '../utils/consoleJob';

export default function Home() {

  useEffect(() => {
    consoleJob() // bla bla
  }, [])

  return (
    <div>
      <Head>
        <title>Ilya Lyskov - Web-dev portfolio</title>
        <meta name="description" content="Web-dev junior react developer portfolio" />
        <link rel="icon" href="/fav.ico" />
      </Head>


      <div className='container mt-[120px] px-4 max-w-7xl mx-auto relative flex justify-between items-center'>
        
        <div className=''>
          <div className='text-left text-slate-800'>
            <h1 className='text-[7em] font-bold leading-[150px]'>Ilya Lyskov</h1>
            <h2 className='text-4xl font-semibold'>&quot;personal portfolio&quot;</h2>

            <Link href={'/projects'}>
              <a className='mt-10 inline-flex py-3 px-6 text-white rounded-lg bg-indigo-500'>explore projects</a>
            </Link>
          </div>
        </div>

        <MessageForm />

      </div>
     
    </div>
  )
}
