'use client'
import React from 'react'
import TabSection from '../components/ui/TabSection'
import AccordionSecondary from '../components/ui/AccordionSecondary'
import Image from 'next/image'
import EnrollButton from '../components/buttons/EnrollButton'
import ContactButton from '../components/buttons/ContactButton'
interface pageProps {

}

const page: React.FC<pageProps> = ({ }) => {
  return (
    <div className='py-14 lg:py-24 animate-fade-in'>
      <div className='gap-10 container sm:gap-14 flex-col flex justify-center items-center lg:flex lg:flex-row'>
        <div className='flex flex-col gap-5'>
          <h3 className=' font-bold text-blue-600'>Ages from 16 - 19</h3>
          <h1 className=' font-bold text-blue-900'>
            Cambridge Online A Level Course
          </h1>
          <p className='text-p leading-8 '>
            A Levels at IWS Online School hold global recognition from esteemed universities and leading employers, significantly enhancing our students’ prospects of gaining admission to their desired institutions and securing positions in top organisations. We deliver top-quality A Level Online teaching  to successfully prepare students to achieve their academic goals.
          </p>

          <div className="flex flex-wrap gap-5">
            <EnrollButton />
            <ContactButton />
          </div>
        </div>
        <Image width={1000} height={1000} className="max-w-lg w-3/4 lg:w-[450px] lg:w-auto object-contain" src="/Hero2.webp" alt="" />

      </div>



      <div className='pt-20 flex flex-col gap-14'>
        <div className='container flex flex-col gap-5'>
          <h1 className='text-center  text-blue-900 font-bold tracking-tight'>Supporting the Transition From IGCSE to A Levels and Helping Students Succeed</h1>
        </div>


        <div className='bg-white lg:container'>
          <div className='bg-indigo-50 grid grid-cols-1 lg:grid-cols-5 lg:gap-10 '>
            <div className='lg:col-span-2'>
              <Image width={1000} height={1000} className='h-full object-cover' src="/igcse/Student_1-1.jpg" alt="igcse" />

            </div>
            <div className='container lg:col-span-3 flex flex-col gap-5 py-10 justify-center'>
              <h1 className=' font-bold text-blue-900'>Elevate Your Distance Learning Journey</h1>
              <p className='text-p text-blue-600'>A Level 6th Form Excellence at IWS Online School</p>
              <p className='text-p leading-10 text-gray-800 pt-4'>Experience a seamless transition from I/GCSE to A Level with our flexible online studies. Our dedicated teachers foster independent learning in small class settings, ensuring every student reaches their full potential.</p>
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
            <div className='container flex flex-col gap-5 py-10 justify-center'>
              <h1 className=' font-bold '>Empowering Your Future</h1>
              <h2 className=' text-green-600'>
                Comprehensive Online A Level Support at IWS Online School
              </h2>
              <p className='text-p leading-10 text-gray-800'>Benefit from 24/7 access to resources for A Level revision and exam preparations. Our recorded classes allow for personalised pacing, while after-school clubs offer opportunities for social and intellectual growth.</p>
            </div>
          </div>

        </div>
      </div>



      <div className='pt-20 container'>
        <div className='flex flex-col gap-6'>
          <p className='text-p text-center text-blue-900 leading-10'>
            Maximise your academic potential with IWS Online School. Explore our A Level subjects here and combine current studies with IWS courses for exam preparation or distance learning.
          </p>
          <h1 className=' text-center text-blue-900 font-bold'>
            Study A Level Online Subjects
          </h1>
        </div>


        <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-6'>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <Image width={1000} height={1000} className='max-w-20' src="/subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h4 className=' font-bold text-blue-900 text-nowrap'>English Literature</h4>

              <p className='text-p font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <Image width={1000} height={1000} className='max-w-20' src="/subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h4 className=' font-bold text-blue-900 text-nowrap'>English Literature</h4>

              <p className='text-p font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <Image width={1000} height={1000} className='max-w-20' src="/subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h4 className=' font-bold text-blue-900 text-nowrap'>Biology</h4>
              <p className='text-p font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <Image width={1000} height={1000} className='max-w-20' src="/subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h4 className=' font-bold text-blue-900 text-nowrap'>English Literature</h4>

              <p className='text-p font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <Image width={1000} height={1000} className='max-w-20' src="/subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h4 className=' font-bold text-blue-900 text-nowrap'>English Literature</h4>

              <p className='text-p font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <Image width={1000} height={1000} className='max-w-20' src="/subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h4 className=' font-bold text-blue-900 text-nowrap'>English Literature</h4>

              <p className='text-p font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <Image width={1000} height={1000} className='max-w-20' src="/subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h4 className=' font-bold text-blue-900 text-nowrap'>English Literature</h4>

              <p className='text-p font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <Image width={1000} height={1000} className='max-w-20' src="/subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h4 className=' font-bold text-blue-900 text-nowrap'>English Literature</h4>

              <p className='text-p font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>


          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <Image width={1000} height={1000} className='max-w-20' src="/subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h4 className=' font-bold text-blue-900 text-nowrap'>English Literature</h4>

              <p className='text-p font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <Image width={1000} height={1000} className='max-w-20' src="/subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h4 className=' font-bold text-blue-900 text-nowrap'>English Literature</h4>

              <p className='text-p font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <Image width={1000} height={1000} className='max-w-20' src="/subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h4 className=' font-bold text-blue-900 text-nowrap'>English Literature</h4>

              <p className='text-p font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <Image width={1000} height={1000} className='max-w-20' src="/subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h4 className=' font-bold text-blue-900 text-nowrap'>English Literature</h4>
              <p className='text-p font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>
        </div>



      </div>


      <div className='pt-20 container'>
        <div className='pt-8 sm:pt-12 flex flex-col gap-8'>

          <AccordionSecondary title='sdfsdjfkl'>
            <p className='text-p text-blue-900 tracking-wide leading-8'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eligendi repellendus nostrum, accusantium harum, sunt voluptates, nemo enim doloribus ullam hic odit cum eveniet itaque fugiat? Debitis ut obcaecati facilis.
            </p>
          </AccordionSecondary>
          <AccordionSecondary title='sdfsdjfkl'>
            <p className='text-p text-blue-900 tracking-wide leading-8'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eligendi repellendus nostrum, accusantium harum, sunt voluptates, nemo enim doloribus ullam hic odit cum eveniet itaque fugiat? Debitis ut obcaecati facilis.
            </p>
          </AccordionSecondary>

        </div>
      </div>

      <div className='pt-20 container flex flex-col gap-4'>
        <h1 className='text-center  text-blue-900 font-bold'>
          Cambridge A Level
          Course Tuition Fees
        </h1>
        <p className='text-center text-p'>
          Our initial meeting is free with no obligations. If you decide to enroll, our flexible fee structure includes a £200 one-time fee covering comprehensive tests to tailor your child’s education. For pricing details, visit our tuition fees page.
        </p>

        <div className='mt-6'>
          <h3 className='border-b  font-semibold text-blue-900 border-blue-900 pb-3'>
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