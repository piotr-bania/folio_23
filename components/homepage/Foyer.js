import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useControls } from 'leva'
import * as THREE from 'three'
import { useHelper, OrbitControls, MeshReflectorMaterial } from '@react-three/drei'
import { PointLightHelper, SpotLightHelper } from 'three'

function Foyer() {

    const { scale } = useControls({ scale: 1 })
    const { position } = useControls({ position: [0, -2.5, 0] })
    const { rotation } = useControls({ rotation: [0, -0.79, 0] })

    const foyer = useLoader(GLTFLoader, '/models/foyer/foyer.glb')
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

            <ambientLight intensity={0.005} />
            <directionalLight intensity={0.005} />
            <pointLight ref={pointL} intensity={2} position={[-8, 0, 0]}color={'#7161F5'} distance={5} decay={1.5} />
            <pointLight ref={pointL} intensity={2} position={[8, 0.5, 0]}color={'#7161F5'} distance={5} decay={1.5} />
            <pointLight ref={pointL} intensity={2} position={[ 0, 1, -7]}color={'#61F570'} distance={5} decay={1.5} />
            <pointLight ref={pointL} intensity={2} position={[ 0, 2, 9]}color={'#61F570'} distance={5} decay={1.5} />
            <pointLight ref={pointL} intensity={2} position={[ 0, -2, 0]}color={'#FFFFFF'} distance={8} decay={1.5} />

            <mesh ref={foyerRef}
                scale={scale} position={position} rotation={rotation}
                castShadow
                receiveShadow
                >
                <primitive object={foyer.scene}/>
            </mesh>
        </>
    )
}

export default Foyer