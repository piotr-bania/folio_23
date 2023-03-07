import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useControls } from 'leva'
import * as THREE from 'three'
import { useHelper, OrbitControls, Environment, Lightformer } from '@react-three/drei'
import { PointLightHelper, SpotLightHelper } from 'three'

function Foyer() {

    // const { scale } = useControls({ scale: 1 })
    // const { position } = useControls({ position: [0, -2.5, 0] })
    // const { rotation } = useControls({ rotation: [0, -0.79, 0] })

    const foyer = useLoader(GLTFLoader, '/models/foyer/foyer_entrance.glb')
    const foyerRef = useRef()

    const pointL = useRef()
    // useHelper(pointL, PointLightHelper, 1, '#EA2FFA')

    return (
        <>
            <OrbitControls
                rotateSpeed={0.12}
                enableZoom={true}
                minDistance={13}
                maxDistance={60}     
                minAzimuthAngle={-Math.PI / 4}
                maxAzimuthAngle={Math.PI / 4}
                minPolarAngle={Math.PI / 90}
                maxPolarAngle={Math.PI - Math.PI / 2}
            />

            {/* <ambientLight /> */}
            {/* <hemisphereLight /> */}
            {/* <directionalLight /> */}
            {/* <pointLight /> */}
            {/* <spotLight /> */}
            {/* <rectAreaLight /> */}

            {/* <ambientLight intensity={0.05} />
            <directionalLight intensity={0.05} /> */}
            {/* <pointLight ref={pointL} intensity={1} position={[-8, 0, 0]}color={'#FB6C3F'} distance={6} decay={2.5}  />
            <pointLight ref={pointL} intensity={1} position={[8, 0.5, 0]}color={'#FB6C3F'} distance={6} decay={2.5}  />
            <pointLight ref={pointL} intensity={1} position={[ 0, 1, -7]}color={'#5DA1A2'} distance={6} decay={2.5}  />
            <pointLight ref={pointL} intensity={1} position={[ 0, 2, 9]}color={'#F8FA57'} distance={6} decay={2.5} />
            <pointLight ref={pointL} intensity={3} position={[ 4.5, 1.5, -3.5]}color={'#FFFFFF'} distance={5} decay={3.5} /> */}

            <Environment files='./environments/brown_photostudio_02_1k.hdr' />

            <mesh
                ref={foyerRef}
                scale={1}
                position={[0, -2.5, 0]}
                rotation={[0, -0.79, 0]}
                castShadow
                receiveShadow
                >
                <primitive object={foyer.scene}/>
            </mesh>
        </>
    )
}

export default Foyer