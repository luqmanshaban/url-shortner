import React from 'react'
import styles from './Form.module.css'

const Form = () => {
  return (
    <div className={`${styles.form} bg-darkViolet rounded-lg relative bottom-[-50px] md:mx-28 mx-3`}>
    <form className={`md:mt-20 mt-10 md:p-10 p-5 gap-y-5 md:px-14 flex md:flex-row flex-col items-center gap-x-3`} >
        <div className='flex-1 md:w-[80%] w-full'>
            <input type="text" name="link" id="link" className='md:py-2 w-full rounded-lg py-3 md:px-5 px-3' required placeholder='Shorten a linke here...'/>
        </div>
        <div className='md:w-[15%] w-full'>
            <button className='bg-cyan px-5 w-full hover:bg-opacity-70 transition ease-in-out duration-500 p-3 text-sm font-bold text-white rounded-lg'>Shorten it!</button>
        </div>
    </form>
    </div>
  )
}

export default Form