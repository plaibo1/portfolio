import React from 'react'
import { RiLoader4Line } from 'react-icons/ri'
import Image from 'next/image';
import { useForm } from 'react-hook-form';


const Form = ({setIsErrorEmail, setIsSent, setIsLoaded, isLoaded}) => {

  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {

    setIsLoaded(true)

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
          setTimeout(() => setIsSent(false), 4000)
        } else {
          setIsErrorEmail(true)
          console.log("err=====", res)
        }
      })

  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='bg-white w-full sm:w-[400px] relative p-4 shadow-xl rounded-xl border-2 border-slate-600'
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
        className='w-full relative group disabled:bg-indigo-300 bg-baseColor text-slate-50 py-3 text-lg font-semibold mt-3 rounded-lg'
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
            ${isLoaded ? 'opacity-100 block' : 'opacity-0 hidden'}`}
        >
          <Image
            width={300}
            height={120}
            src={'/speed.gif'}
          />
        </div>
      </button>
    </form>
  )
}

export default Form