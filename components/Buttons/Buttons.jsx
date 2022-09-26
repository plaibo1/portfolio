import Link from 'next/link'
import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'

export const PrimaryButton = ({text, linkTo, icon = null}) => {
  return (
    <Link href={linkTo}>
      <a
        className='bg-indigo-500 py-4 px-9 text-lg font-semibold text-white rounded-lg 
          border-4 inline-flex items-center border-slate-700'
      >
        <span className='mr-2'>{icon}</span>
        {text}
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
        bg-myYellow  relative rounded-xl  border-slate-800 border-4 group'
    >
      <div className='w-[105%] h-[110%] absolute bg-slate-800 left-0 top-0 rounded-xl 
        border-slate-800 border-4 -z-[1] -translate-x-3 -translate-y-2 
        group-hover:translate-x-0 group-hover:translate-y-0 transition'></div>

      Web-site 
      <BiLinkExternal className='ml-2' /> 
    </a>
  )
}
