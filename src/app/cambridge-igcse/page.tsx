'use client'
import React from 'react'
import TabSection from '../components/ui/TabSection'
import AccordionSecondary from '../components/ui/AccordionSecondary'
import Image from 'next/image'
import ContactButton from '../components/buttons/ContactButton'
import EnrollButton from '../components/buttons/EnrollButton'
interface pageProps {

}

const page: React.FC<pageProps> = ({ }) => {
  return (
    <div className='py-14 lg:py-24 animate-fade-in'>
      <div className='gap-10 container sm:gap-14 flex-col flex justify-center items-center lg:flex lg:flex-row'>
        <div className='flex flex-col gap-5'>
          <h3 className='text-h3 font-bold text-blue-600'>Ages from 14 - 16</h3>
          <h1 className='text-h1 font-bold text-blue-900'>
            Cambridge I/GCSE
          </h1>
          <p className='text-p leading-8 text-gray-900'>
            The two-year IWS Online School I/GCSE programme sets your child on the path to obtaining globally recognised and accredited Cambridge certifications. The I/GCSE is an esteemed qualification widely accepted by renowned universities and employers worldwide, serving as a powerful catalyst for both academic and professional advancement, ensuring future success on a global scale. Enrol in our I/GCSE online courses today!
          </p>

          <div className="flex flex-wrap gap-5">
            <EnrollButton />
            <ContactButton />
          </div>
        </div>
        <Image width={1000} height={1000} className="max-w-lg w-3/4 lg:w-[450px] xl:w-auto object-contain" src="/Hero.webp" alt="Hero Image width={1000} height={1000}" />

      </div>



      <div className='pt-20 flex flex-col gap-14'>
        <div className='container flex flex-col gap-5'>
          <h1 className='text-center text-h1 text-blue-900 font-bold tracking-tight'>Fulfilling Potential</h1>
          <h2 className='text-blue-900 text-h2 text-center'>{"Shaping Future Success: IWS Online School's I/GCSE Courses"}</h2>
        </div>


        <div className='bg-white lg:container'>
          <div className='bg-indigo-50 grid grid-cols-1 lg:grid-cols-5 lg:gap-10 '>
            <div className='lg:col-span-2'>
              <Image width={1000} height={1000} className='h-full object-cover' src="/igcse/Student_1-1.jpg" alt="igcse" />

            </div>
            <div className='container lg:col-span-3 flex flex-col gap-5 py-10 justify-center items-center'>
              <h1 className='text-h1 font-bold text-blue-900'>Personalised Instruction in Private, Virtual Classrooms</h1>
              <p className='text-p leading-10 text-gray-800'>Our unique I/GCSE programme offers private, virtual classrooms for live interactive lessons via our student portal. Highly skilled and experienced teachers work closely with students, helping to identify strengths and weaknesses and offering a customised curriculum that maximises learning capabilities. Together, we can unlock your potential!</p>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-20 flex flex-col justify-center items-center'>
        <TabSection />
      </div>

      <div className='pt-20'>

        <div className='bg-white lg:container'>
          <div className='bg-green-50 flex flex-col lg:flex-row-reverse lg:gap-10 '>
            <div className=' flex'>
              <Image width={1000} height={1000} className='h-full max-h-96 lg:max-h-full lg:h-full w-full object-cover lg:max-w-[900px]' src="/igcse/Student_2-1.jpg" alt="igcse" />

            </div>
            <div className='container flex flex-col gap-5 py-10 justify-center items-center'>
              <h1 className='text-h1 font-bold text-green-800'>Comprehensive I/GCSE Courses for Academic Excellence</h1>
              <p className='text-p leading-10 text-gray-800'>Our unique I/GCSE programme offers private, virtual classrooms for live interactive lessons via our student portal. Highly skilled and experienced teachers work closely with students, helping to identify strengths and weaknesses and offering a customised curriculum that maximises learning capabilities. Together, we can unlock your potential!</p>
            </div>
          </div>

        </div>
      </div>



      <div className='pt-20 container'>
        <div className='flex flex-col gap-6'>
          <h1 className='text-h1 text-center text-blue-900 font-bold'>
            I/GCSE Curriculum Packages
          </h1>
          <p className='text-p text-center text-blue-900 leading-10'>
            Find your perfect combination of I/GCSE online subjects.
          </p>
        </div>


        <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <Image width={1000} height={1000} className='max-w-20' src="/subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h4 className='text-h4 font-bold text-blue-900 text-nowrap'>English Literature</h4>

              <p className='text-p font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <Image width={1000} height={1000} className='max-w-20' src="/subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h4 className='text-h4 font-bold text-blue-900 text-nowrap'>English Literature</h4>

              <p className='text-p font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <Image width={1000} height={1000} className='max-w-20' src="/subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h4 className='text-h4 font-bold text-blue-900 text-nowrap'>Biology</h4>
              <p className='text-p font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <Image width={1000} height={1000} className='max-w-20' src="/subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h4 className='text-h4 font-bold text-blue-900 text-nowrap'>English Literature</h4>

              <p className='text-p font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <Image width={1000} height={1000} className='max-w-20' src="/subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h4 className='text-h4 font-bold text-blue-900 text-nowrap'>English Literature</h4>

              <p className='text-p font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <Image width={1000} height={1000} className='max-w-20' src="/subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h4 className='text-h4 font-bold text-blue-900 text-nowrap'>English Literature</h4>

              <p className='text-p font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <Image width={1000} height={1000} className='max-w-20' src="/subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h4 className='text-h4 font-bold text-blue-900 text-nowrap'>English Literature</h4>

              <p className='text-p font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <Image width={1000} height={1000} className='max-w-20' src="/subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h4 className='text-h4 font-bold text-blue-900 text-nowrap'>English Literature</h4>

              <p className='text-p font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>


          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <Image width={1000} height={1000} className='max-w-20' src="/subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h4 className='text-h4 font-bold text-blue-900 text-nowrap'>English Literature</h4>

              <p className='text-p font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <Image width={1000} height={1000} className='max-w-20' src="/subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h4 className='text-h4 font-bold text-blue-900 text-nowrap'>English Literature</h4>

              <p className='text-p font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <Image width={1000} height={1000} className='max-w-20' src="/subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h4 className='text-h4 font-bold text-blue-900 text-nowrap'>English Literature</h4>

              <p className='text-p font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <Image width={1000} height={1000} className='max-w-20' src="/subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h4 className='text-h4 font-bold text-blue-900 text-nowrap'>English Literature</h4>
              <p className='text-p font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>
        </div>



      </div>


      <div className='pt-20 container'>
        <div className='pt-8 sm:pt-12 flex flex-col gap-8'>

          <AccordionSecondary />
          <AccordionSecondary />

        </div>
      </div>

      <div className='pt-20 container flex flex-col gap-4'>
        <h1 className='text-center text-h1 text-blue-900 font-bold'>
          Cambridge I/GCSE Tuition Fees
        </h1>
        <p className='text-center text-p'>
          Our initial meeting is free with no obligations. If you decide to enroll, our flexible fee structure includes a £200 one-time fee covering comprehensive tests to tailor your child’s education. For pricing details, visit our tuition fees page.
        </p>

        <div className='mt-6'>
          <h3 className='border-b text-h3 font-semibold text-blue-900 border-blue-900 pb-3'>
            Accredited by
          </h3>

          <div className='grid grid-cols-1 gap-10 mt-5 sm:grid-cols-2 md:grid-cols-3 justify-center items-center'>
            <Image width={1000} height={1000} className='lg:max-w-60' src="/accredited/889-1536x670.webp" alt="" />
            <Image width={1000} height={1000} className='lg:max-w-60' src="/accredited/Asset-18@3x.webp" alt="" />
            <Image width={1000} height={1000} className='lg:max-w-60' src="/accredited/COBISLogo.webp" alt="" />
          </div>
        </div>

      </div>


    </div>
  )
}

export default page