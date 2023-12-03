import Link from 'next/link'
import React from 'react'
import hero from '@/app/assets/images/illustration-working.svg'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex justify-between md:flex-row flex-col-reverse items-center gap-x-10 md:px-28 px-3 md:py-10 py-2'>
        <section className='flex md:justify-start justify-center md:items-start items-center flex-col gap-y-3 md:mt-0 mt-20'>
            <h1 className='font-extrabold md:text-7xl text-4xl md:text-start text-center text-darkBlue'>More than just <br className='md:block hidden'/>shorter links</h1>
            <p className='text-grayish md:text-start text-center'>Build your brand&#39;s recognition and get detailed <br className='md:block hidden'/>insights on how your links are performing.</p>
            <Link href='/' className='md:py-2 py-3 px-10 font-bold bg-cyan text-white rounded-full hover:bg-opacity-50'>Get Started</Link>
        </section>
        <Image src={hero} alt='hero' className=''/>
    </div>
  )
}

export default Hero