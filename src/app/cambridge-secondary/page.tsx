'use client'
import React from 'react'
import TabSection from '../components/ui/TabSection'
import AccordionSecondary from '../components/ui/AccordionSecondary'
interface pageProps {

}

const page: React.FC<pageProps> = ({ }) => {
  return (
    <div className='py-14 lg:py-24'>
      <div className='gap-10 container sm:gap-14 flex-col flex justify-center items-center lg:flex lg:flex-row'>
        <div className='flex flex-col gap-5'>
          <h3 className='text-lg font-bold text-blue-600'>Ages from 11 - 14</h3>
          <h1 className='text-5xl font-bold text-blue-900'>
            Cambridge Secondary
          </h1>
          <p className='text-lg leading-8 text-gray-900'>
            At IWS fOnline School, Middle level Education commences at age 11, culminating with students undertaking the prestigious Cambridge I/GCSE exams. This educational journey encompasses two distinct phases: Middle (spanning the initial three years) and I/GCSE (comprising two years). Upon successful completion, students will be well-prepared to embark on their A-Level studies.
          </p>

          <div className="flex flex-wrap gap-5">
            <button className=" border-blue-600 hover:text-white hover:bg-blue-600 transition-all duration-300 border-[3px] rounded-lg px-6 py-2 text-gray-900 font-semibold text-lg">Enrol now</button>
            <button className="bg-blue-600 rounded-lg px-6 py-2 text-white hover:bg-blue-700 transition-all duration-300 font-semibold text-lg">Contact Us</button>
          </div>
        </div>
        <img className="max-w-lg w-3/4 lg:w-[450px] xl:w-auto object-contain" src="./Hero2.webp" alt="Hero Image" />

      </div>



      <div className='pt-20 flex flex-col gap-14'>
        <div className='container flex flex-col gap-5'>
          <h1 className='text-center text-4xl text-blue-900 font-bold tracking-tight'>Guiding Students to Success: IWS Online School's Middle Cambridge Programme</h1>
        </div>


        <div className='bg-white lg:container'>
          <div className='bg-indigo-50 grid grid-cols-1 lg:grid-cols-5 lg:gap-10 '>
            <div className='lg:col-span-2'>
              <img className='h-full object-cover' src="./igcse/Student_1-1.jpg" alt="igcse" />

            </div>
            <div className='container lg:col-span-3 flex flex-col gap-5 py-10 justify-center'>
              <h1 className='text-4xl font-bold text-blue-900'>Structured Learning Journey from Age 11</h1>
              <p className='text-lg text-blue-600'>Cambridge Secondary at IWS Online School</p>
              <p className='text-xl leading-10 text-gray-800 pt-4'>Embark on a well-defined path of Middle Education, commencing at age 11 and culminating in the prestigious Cambridge I/GCSE examinations. This educational journey is divided into Middle (3 years) and I/GCSE (2 years).</p>
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
              <img className='h-full max-h-96 lg:max-h-full lg:h-full w-full object-cover lg:max-w-[900px]' src="./igcse/Student_2-1.jpg" alt="igcse" />

            </div>
            <div className='container flex flex-col gap-5 py-10 justify-center'>
              <h1 className='text-4xl font-bold text-gray-900'>Empowering Students for Academic Excellence</h1>
              <h2 className='text-lg text-green-600'>
                Comprehensive Secondary Support at IWS Online School
              </h2>
              <p className='text-xl leading-10 text-gray-800'>Our Middle Education program equips students with the knowledge and skills needed to excel in the Cambridge I/GCSE examinations. With a carefully crafted curriculum spanning both Middle and I/GCSE phases, students emerge well-prepared and confident for future academic endeavours.</p>
            </div>
          </div>

        </div>
      </div>



      <div className='pt-20 container'>
        <div className='flex flex-col gap-6'>
          <h1 className='text-3xl text-center text-blue-900 font-bold'>
            Secondary Subjects
          </h1>
          <p className='text-lg text-center text-blue-900 leading-10'>
            Maximise your academic potential with IWS Online School. Explore our Secondary subjects here and combine current studies with IWS courses for exam preparation or further study.
          </p>
        </div>


        <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <img className='max-w-20' src="./subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h3 className='text-xl font-bold text-blue-900 text-nowrap'>Biology</h3>
              <p className='text-base font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <img className='max-w-20' src="./subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h3 className='text-xl font-bold text-blue-900 text-nowrap'>English Literature</h3>
              <p className='text-base font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <img className='max-w-20' src="./subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h3 className='text-xl font-bold text-blue-900 text-nowrap'>Biology</h3>
              <p className='text-base font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <img className='max-w-20' src="./subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h3 className='text-xl font-bold text-blue-900 text-nowrap'>English Literature</h3>
              <p className='text-base font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>


          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <img className='max-w-20' src="./subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h3 className='text-xl font-bold text-blue-900 text-nowrap'>Biology</h3>
              <p className='text-base font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <img className='max-w-20' src="./subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h3 className='text-xl font-bold text-blue-900 text-nowrap'>English Literature</h3>
              <p className='text-base font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <img className='max-w-20' src="./subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h3 className='text-xl font-bold text-blue-900 text-nowrap'>Biology</h3>
              <p className='text-base font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <img className='max-w-20' src="./subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h3 className='text-xl font-bold text-blue-900 text-nowrap'>English Literature</h3>
              <p className='text-base font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>


          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <img className='max-w-20' src="./subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h3 className='text-xl font-bold text-blue-900 text-nowrap'>Biology</h3>
              <p className='text-base font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <img className='max-w-20' src="./subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h3 className='text-xl font-bold text-blue-900 text-nowrap'>English Literature</h3>
              <p className='text-base font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <img className='max-w-20' src="./subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h3 className='text-xl font-bold text-blue-900 text-nowrap'>Biology</h3>
              <p className='text-base font-semibold text-blue-600'>Learn more</p>
            </div>
          </div>

          <div className='flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-custom-color'>
            <div className='bg-[#DAE1FF] '>
              <img className='max-w-20' src="./subjects/Biology.webp" alt="Biology" />
            </div>
            <div className='bg-[#EBEFFF] flex flex-1 flex-col justify-center pl-6 gap-1'>
              <h3 className='text-xl font-bold text-blue-900 text-nowrap'>English Literature</h3>
              <p className='text-base font-semibold text-blue-600'>Learn more</p>
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
        <h1 className='text-center text-4xl text-blue-900 font-bold'>
          Cambridge Secondary Tuition Fees
        </h1>
        <p className='text-center text-xl'>
          Our initial meeting is free with no obligations. If you decide to enroll, our flexible fee structure includes a £200 one-time fee covering comprehensive tests to tailor your child’s education. For pricing details, visit our tuition fees page.
        </p>

        <div className='mt-6'>
          <h3 className='border-b text-xl font-semibold text-blue-900 border-blue-900 pb-3'>
            Accredited by
          </h3>

          <div className='grid grid-cols-1 gap-10 mt-5 sm:grid-cols-2 md:grid-cols-3 justify-center items-center'>
            <img className='lg:max-w-60' src="./accredited/889-1536x670.webp" alt="" />
            <img className='lg:max-w-60' src="./accredited/Asset-18@3x.webp" alt="" />
            <img className='lg:max-w-60' src="./accredited/COBISLogo.webp" alt="" />
          </div>
        </div>

      </div>


    </div>
  )
}

export default page