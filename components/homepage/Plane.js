import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { useControls } from 'leva'
import * as THREE from 'three'
import { DirectionalLight } from 'three'

const Plane = () => {

    const { scale } = useControls({ scale: 0.3 })
    const { position } = useControls({ position: [0.3, 0, -1.5] })

    const planeRef = useRef()
    const cubeRef = useRef()

    useFrame((state, delta) => {
        cubeRef.current.rotation.x -= 0.001,
        cubeRef.current.rotation.y -= 0.00,
        cubeRef.current.rotation.z -= 0.003
    })

    const plane = useLoader(GLTFLoader, '/models/plane/plane.gltf')
    const model_1 = useLoader(GLTFLoader, '/models/cube.glb')

    return (
        <>
            {/* <ambientLight intensity={0.995} color={'#ffffff'} /> */}
            {/* <directionalLight color="#FFFFFF" intensity={0.5} position={[-4, 0, 0]} />
            <directionalLight color="#FFFFFF" castShadow intensity={0.5} position={[4, 0, 0]} />
            <directionalLight color="#FFFFFF" castShadow intensity={0.5} position={[0, 4, 1]} /> */}

            {/* <mesh ref={planeRef} castShadow receiveShadow scale={scale} position={position} >
                <primitive object={plane.scene}/>
                <meshStandardMaterial attach="material" />
            </mesh> */}


            <mesh ref={cubeRef} castShadow receiveShadow scale={scale} position={position} >
                <primitive object={model_1.scene}/>
            </mesh>
        </>
    )
}

export default Plane