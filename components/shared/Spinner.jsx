import React from 'react'
import spinnerImg from "@/public/spinner.gif"
import Image from 'next/image'

const Spinner = () => {
  return <Image
    src={spinnerImg}
    alt='loading image'
    className='w-[100px] m-auto block'
   />
}

export default Spinner