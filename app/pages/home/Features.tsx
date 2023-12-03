import React from 'react'
import analytics from '@/app/assets/images/analytics.svg'
import records from '@/app/assets/images/records.svg'
import customize from '@/app/assets/images/customize.svg'
import Image from 'next/image'

const Features = () => {
  return (
    <div className='pt-20 relative h-auto md:pb-36'>
        <section className='flex justify-center items-center flex-col gap-y-5'>
            <h1 className='font-extrabold text-4xl my-5 text-black'>Advanced Statistics</h1>
            <p className='text-darkBlue text-center'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </section>
        <section className='mt-20 flex justify-center md:flex-row flex-col gap-y-20 gap-x-10 items-center'>
            <article className='md:block text-center md:text-start md:px-10 md:py-3 bg-white rounded-lg h-[220px] md:w-[25%]'>
                <h1 className='text-xl mt-14 my-3 font-bold'>Brand Recognition</h1>
                <p>Boost your brand recognition with each click. Generic links don&#39;t mean a thing. Branded links help instil confidence in your content</p>
                <div className='md:h-20 h-16 w-16 md:w-20 rounded-full bg-darkViolet flex justify-center items-center relative top-[-200px] md:right-[-80px] right-[-140px] md:top-[-250px]'>
                  <Image src={analytics} alt='analytics'/>
                </div>
                <div className='md:hidden block h-12 w-2 bg-cyan relative bottom-3 right-[-168px]'></div>
            </article>
            <article className='md:block text-center md:text-start md:px-10 md:py-3 bg-white rounded-lg md:h-[230px] h-auto md:w-[25%] md:relative top-14'>
                <div className='h-2 w-10 bg-cyan hidden md:block relative top-20 left-[-80px]'></div>
                <div className='h-2 w-10 bg-cyan hidden md:block relative top-28 right-[-300px]'></div>
                <h1 className='text-xl mt-14 my-3 font-bold'>Detailed Records</h1>
                <p>Gain insights on your links clicks. Knowing when and where people engage with your content helps inform better decisions.</p>
                <div className='md:h-20 h-16 w-16 md:w-20 p-3 rounded-full bg-darkViolet flex justify-center md:flex-row flex-col items-center relative top-[-200px] md:right-[-80px] right-[-140px] md:top-[-270px]'>
                  <Image src={records} alt='analytics' className='w-full'/>
                </div>
            </article>
            <article className='md:block text-center md:text-start md:px-10 md:py-3 bg-white rounded-lg h-[220px] md:w-[25%] md:relative top-28'>
                <div className='md:hidden block h-12 w-2 bg-cyan absolute bottom-[250px] right-[175px]'></div>
                <h1 className='text-xl mt-14 my-3 font-bold'>Fully Customizable</h1>
                <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                <div className='md:h-20 h-16 w-16 md:w-20 rounded-full bg-darkViolet flex justify-center items-center relative top-[-200px] md:right-[-80px] right-[-140px] md:top-[-250px]'>
                  <Image src={customize} alt='analytics'/>
                </div>
            </article>
        </section>
    </div>
  )
}

export default Features