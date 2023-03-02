import React, { Suspense, useRef} from 'react'
import Link from 'next/link'
import { Canvas } from '@react-three/fiber'
import { AnimatePresence, motion as m } from 'framer-motion'
import { EffectComposer, Noise, Scanline, Bloom, Vignette, Glitch } from '@react-three/postprocessing'

import Plane from './Plane'


const Experience = () => {
    return (
        <AnimatePresence>
            <section
                id="hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                >

                <m.h1
                    className="heading"
                    initial={{opacity: 0}}
                    animate={{ opacity: 1, transition: {delay: 3, duration: 2, ease: 'easeInOut'} }}
                    >Transforming <br /> the digital universe through code and creativity</m.h1>
                
                <m.h3
                    className="subheading"
                    initial={{opacity: 0}}
                    animate={{ opacity: 1, transition: {delay: 3.5, duration: 2, ease: 'easeInOut'} }}
                    >Fusing technology and imagination to create something truly unique</m.h3>
                
                <m.div
                    className="cta"
                    initial={{opacity: 0}}
                    animate={{ opacity: 1, transition: {delay: 4, duration: 2, ease: 'easeInOut'} }}
                    >
                    <Link href='#projects' scroll={false}><button>View my latest missions</button></Link>
                </m.div>
            </section>

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