import Image from 'next/image';
import React, { useState } from 'react'

import {AnimatePresence, motion} from 'framer-motion'



import Form from './Form';

const MessageForm = () => {

  const [isLoaded, setIsLoaded] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [isErrorEmail, setIsErrorEmail] = useState(false)


  return (
    <>
      {!isErrorEmail ?
        
        <Form 
          setIsErrorEmail={setIsErrorEmail}
          setIsSent={setIsSent}
          setIsLoaded={setIsLoaded}
          isLoaded={isLoaded}
        />

        :

        // if error
        <motion.div
          initial={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateX: -100 }}
          className='m-auto bg-red-500 border-2 p-5 border-slate-700 rounded-lg bg-red'
        >
          <div className='text-lg font-mono text-white'>
            <div>Oops! Sorry, this is a ERROR</div>
            <Image
              width={200}
              height={300}
              src={'/explosion.gif'}
            />
            <div>Just text me</div>
           <a href='https://t.me/playbo1' target='_blank' className='underline'>here</a>
          </div>
        </motion.div>
      }
      

      {/* messages */}
      {
          isSent &&
          <motion.div
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateX: -100 }}
            className='fixed w-full top-0 right-0 sm:w-auto sm:right-3 sm:top-3'
          >
            <div className='font-bold py-3 px-5 text-base shadow-lg bg-myGreen text-black 
              border-2 border-slate-700 font-mono rounded-lg inline-flex'>
              Your message was successfully delivered 🎉
            </div>
          </motion.div>
        }
      
    </>
  )
}

export default MessageForm