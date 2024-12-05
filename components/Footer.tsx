'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-12 flex-wrap items-center justify-center">
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <a
          className=""
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            className="invert"
            src="/instagram.png"
            alt="Instagram icon"
            width={25}
            height={25}
          />
        </a>
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <a
          className=""
          href="https://youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            className="invert"
            src="/youtube.png"
            alt="X icon"
            width={25}
            height={25}
          />
        </a>
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <a
          className=""
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            className="invert"
            src="/facebook.png"
            alt="Facebook icon"
            width={25}
            height={25}
          />
        </a>
      </motion.div>
    </footer>
  )
}

export default Footer
