import React from 'react'
import logo from '@/app/assets/images/logo.svg'
import Image from 'next/image'
import { FaFacebookSquare } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-vDarkViolet py-10 px-20 flex justify-between items-center md:flex-row flex-col gap-y-5'>
        <h1 className='text-3xl md:text-5xl text-white font-bold'>Shortly</h1>
        <section className='flex flex-1 justify-evenly items-center md:flex-row flex-col gap-y-5'>
            <article className='flex flex-col md:items-start items-center gap-y-5'>
                <h1 className='font-bold text-2xl text-white md:my-6 my-5'>Features</h1>
                <p className='text-grayish font-bold'>Link Shortening</p>
                <p className='text-grayish font-bold'>Branded Links</p>
                <p className='text-grayish font-bold'>Analytics</p>
            </article>
            <article className='flex flex-col md:items-start items-center gap-y-5'>
                <h1 className='font-bold text-2xl text-white md:my-6 my-5'>Resources</h1>
                <p className='text-grayish font-bold'>Blog</p>
                <p className='text-grayish font-bold'>Developers</p>
                <p className='text-grayish font-bold'>Support</p>
            </article>
            <article className='flex flex-col md:items-start items-center gap-y-5'>
                <h1 className='font-bold text-2xl text-white md:my-6 my-5'>Company</h1>
                <p className='text-grayish font-bold'>About</p>
                <p className='text-grayish font-bold'>Our Team</p>
                <p className='text-grayish font-bold'>Careers</p>
            </article>
            
            <article className='flex md:items-start items-center gap-x-5 gap-y-5'>
                <p className='text-white'><FaFacebookSquare size={30}/></p>
                <p className='text-white'><CiTwitter size={30}/></p>
                <p className='text-white'><FaPinterestP size={30}/></p>
                <p className='text-white'><FaInstagram size={30}/></p>
            </article>
            
        </section>
    </footer>
  )
}

export default Footer