import React from 'react'
import TabSection from '../components/ui/TabSection'

interface pageProps {

}

const page: React.FC<pageProps> = ({ }) => {
  return (
    <div className='py-14 lg:py-24'>
      <div className='gap-10 container sm:gap-14 flex-col flex justify-center items-center lg:flex lg:flex-row'>
        <div className='flex flex-col gap-5'>
          <h3 className='text-lg font-bold text-blue-600'>Ages from 14 - 16</h3>
          <h1 className='text-3xl font-bold text-gray-900'>
            Cambridge I/GCSE
          </h1>
          <p className='text-lg leading-8 text-gray-900'>
            The two-year IWS Online School I/GCSE programme sets your child on the path to obtaining globally recognised and accredited Cambridge certifications. The I/GCSE is an esteemed qualification widely accepted by renowned universities and employers worldwide, serving as a powerful catalyst for both academic and professional advancement, ensuring future success on a global scale. Enrol in our I/GCSE online courses today!
          </p>

          <div className="flex flex-wrap gap-5">
            <button className=" border-blue-600 hover:text-white hover:bg-blue-600 transition-all duration-300 border-[3px] rounded-lg px-6 py-2 text-gray-900 font-semibold text-lg">Enrol now</button>
            <button className="bg-blue-600 rounded-lg px-6 py-2 text-white hover:bg-blue-700 transition-all duration-300 font-semibold text-lg">Contact Us</button>
          </div>
        </div>
        <img className="max-w-lg w-3/4 lg:w-[450px] xl:w-auto object-contain" src="./Hero.webp" alt="Hero Image" />

      </div>



      <div className='pt-20 flex flex-col gap-14'>
        <div className='container flex flex-col gap-5'>
          <h1 className='text-center text-4xl text-blue-900 font-bold tracking-tight'>Fulfilling Potential</h1>
          <h2 className='text-blue-900 text-3xl text-center'>Shaping Future Success: IWS Online School's I/GCSE Courses</h2>
        </div>


        <div className='bg-white lg:container'>
          <div className='bg-indigo-50 grid grid-cols-1 lg:grid-cols-5 lg:gap-10 '>
            <div className='lg:col-span-2'>
              <img className='h-full object-cover' src="./igcse/Student_1-1.jpg" alt="igcse" />

            </div>
            <div className='container lg:col-span-3 flex flex-col gap-5 py-10 justify-center items-center'>
              <h1 className='text-4xl font-bold text-blue-900'>Personalised Instruction in Private, Virtual Classrooms</h1>
              <p className='text-xl leading-10 text-gray-800'>Our unique I/GCSE programme offers private, virtual classrooms for live interactive lessons via our student portal. Highly skilled and experienced teachers work closely with students, helping to identify strengths and weaknesses and offering a customised curriculum that maximises learning capabilities. Together, we can unlock your potential!</p>
            </div>
          </div>

        </div>
      </div>


      <div className='pt-20 flex flex-col justify-center items-center'>
        <TabSection />
      </div>

    </div>
  )
}

export default page