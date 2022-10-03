import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import {AnimatePresence, motion} from 'framer-motion'


import { RiLoader4Line } from 'react-icons/ri'

const MessageForm = () => {

  const [isLoaded, setIsLoaded] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data) => {

    setIsLoaded(true)

    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mailer`, {
        method: 'post',
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(res => {
          if (res.status === 'ok') {
            reset()
            setIsLoaded(false)
            setIsSent(true)
            setTimeout(() => setIsSent(false), 3000)
          }
        })
    }
    catch (err) {
      console.log(err)
    }
  }


  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-white w-[400px] relative p-4 shadow-xl rounded-xl border-2 border-slate-600'
      >

        <input
          {...register('email', {
            required: 'field is required', pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address"
            }
          })}
          placeholder='playboi.2000@mail.ru'
          type="text"
          className='font-mono px-3 py-2 mb-4 border-2 border-slate-600 w-full rounded-xl' />

        <p className='text-sm leading-1 p-1 -mt-2 text-red-400'>{errors.email?.message}</p>

        <textarea
          {...register('message', { required: 'field is required' })}
          type="text" className='px-3 py-1 bg-transparent w-full border-2 mb-2
            rounded-xl border-slate-600 font-mono min-h-[90px]' placeholder='send me message :)' />

        <p className='text-sm leading-1 p-1 -mt-3 text-red-400'>{errors.message?.message}</p>

        <button
          disabled={isLoaded}
          type='submit'
          className='w-full relative group disabled:bg-indigo-300 bg-indigo-600 text-slate-50 py-3 text-lg font-semibold mt-3 rounded-lg'
        >
          {!isLoaded ?
            <>
              send
            </>
            :
            <>
              <RiLoader4Line className='inline-block mx-auto text-xl rotateLoader' />
            </>}

          <div className={`absolute left-1/2 -translate-x-[50%] w-[300px] -top-[99px]
            group-hover:opacity-100 group-hover:block pointer-events-none
            ${ isLoaded ? 'opacity-100 block' : 'opacity-0 hidden'}`}
          >
            <Image
              width={300}
              height={120}
              src={'/speed.gif'}
            />
          </div>
        </button>
      </form>

      {/* messages */}
      
      <AnimatePresence>
        {
          isSent && 
          <motion.div 
            initial={{opacity: 0, translateY: -50}}
            animate={{opacity: 1, translateY: 0}}
            exit={{opacity: 0, translateX: -100}}
            className='fixed w-full top-0 right-0 sm:w-auto sm:right-3 sm:top-3'
          >
            <div className='font-bold py-3 px-5 text-base shadow-lg bg-myGreen text-black 
              border-2 border-slate-700 font-mono rounded-lg inline-flex'>
              Your message was successfully delivered 🎉
            </div>
          </motion.div>
        }
      </AnimatePresence>
      
    </>
  )
}

export default MessageForm