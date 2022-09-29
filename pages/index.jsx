import * as contentful from 'contentful';

import Head from 'next/head'
import Link from 'next/link'
import MessageForm from '../components/MessageForm/MessageForm'


export default function Home() {


  return (
    <div>
      <Head>
        <title>Ilya Lyskov - Web-dev portfolio</title>
        <meta name="description" content="Web-dev junior react developer portfolio" />
        <link rel="icon" href="/fav.ico" />
      </Head>


      <div className='container px-4 max-w-7xl mx-auto relative'>
        
        <div className='mt-[120px]'>
          <div className='text-center text-slate-800'>
            <h1 className='text-[7em] font-bold'>Ilya Lyskov</h1>
            <h2 className='text-4xl font-semibold'>&quot;personal portfolio&quot;</h2>

            <Link href={'/projects'}>
              <a className='mt-10 inline-flex py-3 px-6 text-white rounded-lg bg-indigo-500'>explore projects</a>
            </Link>
          </div>
        </div>

        <div className='mt-[120px]'>
          <div className='w-[1000px] mx-auto p-6 rounded-2xl shadow-xl bg-myYellow'>
            
            <div className='dotsBg py-10 px-6'>
              <MessageForm />
            </div>

          </div>
        </div>

      </div>
     
    </div>
  )
}
