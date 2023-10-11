import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function CubeModel(props) {
  const { nodes, materials } = useGLTF('/models/cubeModel/cube.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh 
        geometry={nodes['154377_23_01_06_17_55_06_1'].geometry} 
        material={materials['154377_23_01_06_17_55_06_1']} 
        position={[-2.3, 4.76, 2.04]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/cube.gltf')