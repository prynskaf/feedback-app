'use client'
import Link from 'next/link'
import React from 'react'
import { FaQuestion } from 'react-icons/fa'


const AboutIconLink = () => {
  return (
    <div>
        <Link href='/about' passHref>
        <FaQuestion className="about-link mt-10 mb-10 hover:text-pink-500 transition-all duration-75"/>
        </Link>
    </div>
  )
}

export default AboutIconLink