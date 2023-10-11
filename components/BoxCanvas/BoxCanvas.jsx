import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { MeModel } from '../MeModel/Model'
import Box from './Box'

const BoxCanvas = () => {
  return (
    <Canvas camera={{position: [0, 1, 5],  zoom: 1}}>

      <ambientLight />
      <pointLight position={[14, 15, 5]} />
      
      <Suspense fallback='loading...'>
        <Box />
      </Suspense>
    </Canvas>
  )
}

export default BoxCanvas