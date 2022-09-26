import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

import {RiLoader4Line} from 'react-icons/ri' 

const MessageForm = () => {

  const [isLoaded, setIsLoaded] = useState(false)

  const { register, reset, handleSubmit, watch, formState:{ errors } } = useForm();
  const onSubmit = async (data)  => {

    setIsLoaded(true)

    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mailer`, {
        method: 'post',
        body: JSON.stringify(data),
      })
      .then(res => res.json())
      .then(res => {
        reset()
        setIsLoaded(false)
        console.log(res)
      })
    }
    catch(err) {
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
        {...register('email', { required: 'field is required'})}
        placeholder='playboi.2000@mail.ru'
        type="text"
        className='font-mono px-3 py-1 border-2 border-slate-600 w-full rounded-xl' />
      
      <p className='text-sm leading-1 h-5 ml-1 mb-2 text-red-400'>{errors.email?.message}</p>

      <textarea
        {...register('message', { required: 'field is required'})}
        type="text" className='p-3 bg-transparent w-full border-2 rounded-xl border-slate-600 font-mono' placeholder='send me message :)' />
      
      <p className='text-sm leading-1 h-5 ml-1 mb-2 text-red-400'>{errors.message?.message}</p>

      <button
        disabled={isLoaded}
        type='submit'
        className='w-full disabled:bg-indigo-300 bg-indigo-600 text-slate-50 py-3 text-lg font-semibold mt-3 rounded-lg'
      >
      {!isLoaded ? 'send' : <RiLoader4Line className='inline-block mx-auto text-xl rotateLoader'/>} 
      </button>
    </form>

    <div>
      <div>
        Your message was successfully delivered
      </div>
    </div>
    </>
  )
}

export default MessageForm