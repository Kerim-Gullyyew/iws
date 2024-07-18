'use client'
import React from 'react'
import Image from 'next/image'
interface pageProps {

}

const page: React.FC<pageProps> = ({ }) => {
  return (
    <div>
      <div className='relative h-[calc(100vh-90px)] overflow-hidden flex items-center justify-center w-full'>
        <div className='absolute z-20 flex flex-col gap-5 max-w-xl'>
          <h1 className='text-h1 font-bold text-center text-white'>
            About Us
          </h1>
          <p className='text-center text-p text-white leading-5'>
            IWS Online School – Your compass in the digital realm of learning. Discover new horizons, Create lasting memories, and Lead the future with our live lessons.
          </p>

        </div>
        <Image height={1000} width={1000} className='object-cover h-full' src="./about.png" alt="about page" />
        <div className='absolute inset-0 bg-primary opacity-70'></div>

      </div>
    </div>
  )
}

export default page