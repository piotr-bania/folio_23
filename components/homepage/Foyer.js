import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useControls } from 'leva'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'

function Foyer() {

    const { scale } = useControls({ scale: 1 })
    const { position } = useControls({ position: [0, -2.5, 0] })
    const { rotation } = useControls({ rotation: [0.3, -0.6, 0] })

    const foyer = useLoader(GLTFLoader, '/models/foyer/foyer.glb')
    const foyerRef = useRef()

    return (
        <>
            <OrbitControls />

            <ambientLight intensity={0.05} color={'#ffffff'} />
            <directionalLight intensity={0.75}/>

            <mesh ref={foyerRef} castShadow receiveShadow scale={scale} position={position} rotation={rotation}>
                <primitive object={foyer.scene}/>
                <meshStandardMaterial />
            </mesh>
        </>
    )
}

export default Foyer