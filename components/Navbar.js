import React, { useState } from 'react'
import { AnimatePresence, motion as m } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {

    return (
        <section id='navbar'>
            <m.div
                className="wrapper"
                initial={{opacity: 0}}
                animate={{ opacity: 1, transition: {delay: 2, duration: 2, ease: 'easeInOut'} }}
                >
                <Link href="/">
                    <Image className='logo' src="/logo/logo.svg" alt="logo" width={60} height={60} />
                </Link>
                
                <nav className='horizontal_menu'>
                    <li>
                        <div className="menu">
                            <Link href="/">Home</Link>
                            <Link href="/about">About</Link>
                            <Link href="/portfolio">Portfolio</Link>
                            <Link href="/lab">Lab</Link>
                            <Link href="/skills">Skills</Link>
                            <Link href="/blog">Blog</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                    </li>
                    <Link href="/resume/Piotr_Bania_Resume.pdf" target="_blank">
                        <button className='button'>Download Resume</button>
                    </Link>
                </nav>
            </m.div>
        </section>
    )
}

export default Navbar