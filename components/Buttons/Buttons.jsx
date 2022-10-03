import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'

export const PrimaryButton = ({text, linkTo, icon = null}) => {
  return (
    <Link href={linkTo}>
      <a
        className='bg-baseColor py-3 px-6 sm:px-9 text-sm sm:text-lg font-semibold text-white rounded-2xl 
          border-4 inline-flex items-center justify-between border-slate-700 relative group font-mono
          w-full'
      >
        <div className='w-[102%] h-[115%] absolute bg-slate-700 left-0 top-0 rounded-xl 
        border-slate-700 border-4 -z-[1] -translate-x-3 -translate-y-2 
        group-hover:translate-x-0 group-hover:translate-y-0 transition'></div>

        {text}
        <span className='ml-2'>{icon}</span>
      </a>
    </Link>
  )
}

export const ProjectLinkButton = ({linkTo}) => {
  return (
    <a 
      href={linkTo} 
      target="_blank"
      rel="noreferrer"
      className='px-10 py-3 inline-flex items-center font-mono font-semibold
        bg-myYellow  relative rounded-xl border-slate-800 border-4 group'
    >
      <div className='w-[105%] h-[110%] absolute bg-slate-800 left-0 top-0 rounded-xl 
        border-slate-800 border-4 -z-[1] -translate-x-3 -translate-y-2 
        group-hover:translate-x-0 group-hover:translate-y-0 transition'></div>

      Web-site 
      <BiLinkExternal className='ml-2' /> 
    </a>
  )
}


export const LinkButtonFire = ({ linkTo, name, icon }) => {
  return (
    <a href={linkTo} target='_blank'
      className='text-baseColor py-2 px-5 rounded-lg
             border-2 border-dashed relative group text-sm sm:text-base
             justify-between flex items-center font-mono
             hover:bg-baseColor hover:border-solid hover:border-baseColor hover:text-white'
    >
      <div className={`absolute left-1/2 -translate-x-[50%] w-full -top-[80px] sm:-top-[99px] h-[95px] sm:h-[120px]
            group-hover:opacity-100 group-hover:block pointer-events-none opacity-0
           `}
          >
            <Image
              layout="fill"
              src={'/speed.gif'}
            />
          </div>
      {name} {icon} 
    </a>
  )
}

export const ButtonFire = ({ click, name, icon }) => {
  return (
    <button
      onClick={click}
      className='text-baseColor py-2 px-5 rounded-lg
             border-2 border-dashed relative group text-sm sm:text-base
             justify-between flex items-center font-mono
             hover:bg-baseColor hover:border-solid hover:border-baseColor hover:text-white'
    >
      <div className={`absolute left-1/2 -translate-x-[50%] w-full -top-[80px] sm:-top-[99px] h-[95px] sm:h-[120px]
            group-hover:opacity-100 group-hover:block pointer-events-none opacity-0
           `}
          >
            <Image
              layout="fill"
              src={'/speed.gif'}
            />
          </div>
      {name} {icon} 
    </button>
  )
}

