import { useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import { extend } from '@react-three/fiber'
import { MeModel } from '../MeModel/Model'
import { CubeModel } from '../MeModel/CubeModel'
import { Cubic } from '../CubicModel/Cubic'



export default function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.y += 0.01))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      // scale={active ? 1.5 : 1}
      // scale={}
      onClick={(event) => setActive(!active)}
      // onPointerOver={(event) => setHover(true)}
      // onPointerOut={(event) => setHover(false)}
    >

      <Cubic />

      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}