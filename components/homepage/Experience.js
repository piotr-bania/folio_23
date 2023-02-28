import React, { Suspense, useRef} from 'react'
import { Canvas } from '@react-three/fiber'
import { AnimatePresence, motion as m } from 'framer-motion'

import Plane from './Plane'


const Experience = () => {
    return (
        <AnimatePresence>
            <m.div
                className='canvas'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.1, duration: 2 } }}
                >
                <Canvas
                    shadows
                    camera={{
                        position: [0, 0, 0],
                        lookAt: [0, 0, 0],
                        rotation: [0, 0, 0],
                        fov: 35 }}
                    >

                    <Suspense fallback={null}>
                        <Plane />
                    </Suspense>
                </Canvas>
            </m.div>
        </AnimatePresence>
    )
}

export default Experience