import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { MeModel } from '../MeModel/Model'
import Box from './Box'

const BoxCanvas = () => {
  return (
    <Canvas camera={{position: [0, 2, 5],  zoom: 20}}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      
      <Suspense fallback='loading...'>
        <Box />
      </Suspense>
    </Canvas>
  )
}

export default BoxCanvas