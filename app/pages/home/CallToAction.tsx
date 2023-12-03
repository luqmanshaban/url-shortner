import React from 'react'
import styles from './CallToAction.module.css'

const CallToAction = () => {
  return (
    <div className={`${styles.CallToAction} bg-darkViolet md:py-20 py-10 flex justify-center items-center flex-col gap-y-10`}>
        <h1 className='text-3xl md:text-5xl font-bold text-white '>Boost your links today</h1>
        <button className='bg-cyan text-white font-bold text-lg py-3 px-10 hover:opacity-70 rounded-full'>Get Started</button>
    </div>
  )
}

export default CallToAction