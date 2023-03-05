import React, { Suspense, useRef} from 'react'
import Link from 'next/link'
import { Canvas } from '@react-three/fiber'
import { AnimatePresence, motion as m } from 'framer-motion'
import { EffectComposer, Noise, Scanline, Bloom, Vignette, Glitch } from '@react-three/postprocessing'
import gsap from 'gsap'
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
                    shadows
                    camera={{
                        position: [0, 0, 20],
                        fov: 45 }}
                    >

                    <Suspense fallback={null}>
                        <Foyer />
                    </Suspense>

                    {/* <EffectComposer>
                        <Scanline density={2.5} opacity={0.25}/>
                        <Noise opacity={0.15} />
                        <Vignette eskil={false} offset={0.25} darkness={0.25} />
                        <Glitch
                        delay={[0.05, 5]}
                        duration={[0.005, 0.05]}
                        strength={[0.01, 0.05]}
                        ratio={0.95}
                        />
                    </EffectComposer> */}
                </Canvas>
            </m.div>
        </AnimatePresence>
    )
}

export default Experience