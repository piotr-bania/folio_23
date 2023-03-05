import Link from 'next/link'
import { AnimatePresence, motion as m } from 'framer-motion'

const Hero = () => {
    return (
        <AnimatePresence>
            <section
                id="hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                exit={{ opacity: 0, transition: { duration: 1 } }}
                >

                <m.h1
                    className="name"
                    initial={{opacity: 0}}
                    animate={{ opacity: 1, transition: {delay: 1, duration: 2, ease: 'easeInOut'} }}
                    >Piotr Bania
                </m.h1>
                <m.h2
                    className="heading"
                    initial={{opacity: 0}}
                    animate={{ opacity: 1, transition: {delay: 3, duration: 2, ease: 'easeInOut'} }}
                    >Elevating Web Development to a New Dimension
                </m.h2>
                
                <m.h3
                    className="subheading"
                    initial={{opacity: 0}}
                    animate={{ opacity: 1, transition: {delay: 6, duration: 2, ease: 'easeInOut'} }}
                    >I build stunning websites with <br /> next.js, react-three-fiber and glsl</m.h3>
                
                <m.div
                    className="cta"
                    initial={{opacity: 0}}
                    animate={{ opacity: 1, transition: {delay: 6.1, duration: 2, ease: 'easeInOut'} }}
                    >
                    
                    <Link href='#projects' scroll={false}><button>View my latest missions</button></Link>
                </m.div>
            </section>

            <m.div
                className='canvas'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.1, duration: 2 } }}
                >

            </m.div>
        </AnimatePresence>
    )
}

export default Hero