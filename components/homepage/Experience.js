import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { AnimatePresence, motion as m } from 'framer-motion'
import Foyer from './Foyer'

const Experience = () => {

    return (
        <AnimatePresence>
            <m.div
                className='canvas'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.1, duration: 2 } }}
                >
                <Canvas
                    shadows dpr={[1, 2]}
                    camera={{
                        position: [0, 15, 35],
                        fov: 22 }}
                    >
                    {/* <fog attach="fog" args={['#07032E', 1, 120]} /> */}
                    <Suspense fallback={null}>
                        <Foyer />
                    </Suspense>
                </Canvas>
            </m.div>
        </AnimatePresence>
    )
}

export default Experience