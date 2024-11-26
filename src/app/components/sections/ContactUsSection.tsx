import Image from 'next/image'
import React from 'react'
import TabSection from '../ui/TabSection'

interface ContactUsSectionProps {

}

const ContactUsSection: React.FC<ContactUsSectionProps> = ({ }) => {
  return (
    <div className='flex flex-col gap-10'>
      <div className=' flex flex-col gap-5'>
        <h2 className='text-center   tracking-tight'>{"Get in touch with us!"}</h2>
        <p className='text-center '>{"Whether you have questions about our courses, need assistance with enrollment, or just want to say hello, we're here to help!"}</p>
      </div>


      <div className='bg-white'>
        <div className='bg-[#f6f6f9] grid grid-cols-1 lg:grid-cols-5 lg:gap-10 gap-14 container py-9 rounded-lg'>
          <div className='lg:col-span-2'>
            <Image width={1200} height={1200} className='h-full w-full object-cover rounded-lg' src="/Student_16_1.webp" alt="igcse" />

          </div>
          <div className='lg:col-span-3 flex flex-col gap-5 justify-center lg:p-5'>
            <h3 className=''>Send Us a Message</h3>
            <TabSection />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ContactUsSection