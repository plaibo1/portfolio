import { AnimatePresence, motion } from 'framer-motion'
import NextNProgress from 'nextjs-progressbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {

  return <>
    <NextNProgress
      color="#2b3cff"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      showOnShallow={true}
    />
    
    <AnimatePresence mode='wait'>
      <motion.div 
        key={router.route} 
        exit={{opacity: 0, overflow: 'hidden'}}
        initial={{opacity: 0, translateY: -100}}
        animate={{opacity: 1, translateY: 0}}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  </>
}

export default MyApp
