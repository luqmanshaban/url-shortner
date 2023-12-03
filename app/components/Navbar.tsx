'use client'

import React, { useState } from 'react'
import logo from '@/app/assets/images/logo.svg'
import Image from 'next/image'

const Navbar = () => {
    const [active, setActive] = useState(false)

    const toggleActive = () => setActive(!active)
  return (
    <nav className='md:static fixed top-0 w-full flex justify-between items-center md:px-28 px-3 md:py-10 py-3 pr-5 z-10 bg-white'>
        <div className='flex items-center gap-x-10 w-full'>
            <Image src={logo} alt='logo' className='md:h-10 h-7 w-24 md:w-36 cursor-pointer'/>
            <div className={`${active ? 'top-20 right-4 left-2 ' : 'top-[-100%]'} md:static py-10 fixed flex justify-between md:flex-row flex-col items-center gap-y-10 md:p-0 p-5 md:rounded-none rounded-lg flex-1 md:bg-white bg-darkViolet`}>
                <ul className='flex justify-between md:flex-row flex-col items-center gap-y-5 gap-x-10 md:text-grayish text-white capitalize font-bold'>
                    <li className='cursor-pointer md:text-base text-xl hover:text-black transition ease-out duration-500'>Features</li>
                    <li className='cursor-pointer md:text-base text-xl hover:text-black transition ease-out duration-500'>Pricing</li>
                    <li className='cursor-pointer md:text-base text-xl hover:text-black transition ease-out duration-500'>Resources</li>
                </ul>
                <ul className='flex justify-between md:flex-row flex-col items-center gap-x-10 capitalize md:w-auto w-full'>
                    <li className='md:hidden w-full h[1px] block border-full border-b border-grayish relative'></li>
                    <li className='cursor-pointer md:text-base text-xl md:text-grayish text-white hover:text-black font-bold transition ease-out duration-500 md:my-0 my-5'>login</li>
                    <li className='cursor-pointer md:text-base text-xl md:w-32 w-full text-center bg-cyan hover:bg-opacity-50 font-bold py-2 px-4 rounded-full text-white transition ease-out duration-500'>sign up</li>
                </ul>
            </div>
        </div>
        <ul onClick={() => toggleActive()} className='md:hidden block'>
            <li className='h-[3px] w-6 bg-gray block'></li>
            <li className='h-[3px] w-6 bg-gray block my-1'></li>
            <li className='h-[3px] w-6 bg-gray block'></li>
        </ul>
    </nav>
  )
}

export default Navbar