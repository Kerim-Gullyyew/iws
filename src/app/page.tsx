"use client"
import {
  ArrowRightCircleIcon
} from '@heroicons/react/24/solid'
import Accordion from './components/ui/Accordion';
import Carousel from './components/ui/Carousel';
import Image from 'next/image';
import Link from 'next/link';
import EnrollButton from './components/buttons/EnrollButton';
import ContactButton from './components/buttons/ContactButton';
export default function Home() {


  return (
    <div className="py-14 lg:py-24 ">
      <div className="gap-10 container sm:gap-14 flex-col flex justify-center items-center lg:flex lg:flex-row">

        <div className="gap-10 sm:gap-14 flex-col flex justify-center">
          <div className='flex'>
            <div className="relative">
              <h1 className="bg-blue-100 text-center text-nowrap text-h1 font-bold text-blue-600 px-2 py-1 -rotate-2">
                BRITISH ONLINE SCHOOL
              </h1>
              <h1 className="bg-yellow-200 text-center text-nowrap z-10 text-h1 font-bold text-amber-500 px-2 py-1">
                EDUCATION FOR EVERY STAGE
              </h1>
            </div>

          </div>

          <h1 className=" text-gray-900 text-h1 font-bold">Accredited, Holistic Online Schooling</h1>

          <p className="leading-[26px] text-gray-900 font-semibold text-p">
            IWS Online School – Your compass in the digital realm of learning. Discover new horizons, Create lasting memories, and Lead the future with our live lessons.
          </p>

          <div className="flex flex-wrap gap-5">
            <EnrollButton />
            <ContactButton />

          </div>

        </div>

        <Image width={1000} height={1000} className="max-w-lg w-3/4 lg:w-[450px] xl:w-auto object-contain" src="/Hero.webp" alt="Hero Image width={1000} height={1000}" />
      </div>

      <div className="pt-20 container">
        <h1 className="text-gray-900 text-h1 text-center xs:text-4xl sm:text-5xl font-bold">The right study programme for you</h1>

        <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-4 xl:gap-8 gap-y-14">

          <Link href={'#'} className='relative cursor-pointer hover:-translate-y-2 transition-transform duration-300 bg-sky-100 flex flex-col justify-between rounded-xl'>
            <div className='relative'>
              <div className='bg-white absolute bottom-4 left-4 px-8 py-2 rounded'>
                <h3 className='text-h3 font-semibold text-gray-900'>Ages 7-11</h3>

              </div>
              <Image width={1000} height={1000} className="max-w-lg w-11/12 object-contain -mt-14 self-center" src="/programm/Primary@2x.webp" alt="Hero Image width={1000} height={1000}" />
            </div>

            <div className="bg-white flex-1 flex gap-10 justify-between flex-col m-1 p-4 rounded-b-xl">
              <div className="flex flex-col gap-4">
                <h1 className="text-h1 text-gray-900 font-bold">Primary School</h1>
                <p className="text-p font-semibold">A strong foundation and a love for learning for your child.</p>

              </div>

              <div className="flex bg-gray-100 rounded-full px-5 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 justify-between items-center">
                <h2 className="text-h2 tracking-wide font-semibold">Learn more</h2>
                <ArrowRightCircleIcon className="h-10 w-10 -rotate-45" aria-hidden="true" />

              </div>

            </div>
          </Link>

          <Link href={'#'} className='relative cursor-pointer hover:-translate-y-2 transition-transform duration-300 bg-sky-100 flex flex-col justify-between rounded-xl'>

            <div className='relative'>
              <div className='bg-white absolute bottom-4 left-4 px-8 py-2 rounded'>
                <h3 className='text-h3 font-semibold text-gray-900'>Ages 11-14</h3>

              </div>
              <Image width={1000} height={1000} className="max-w-lg w-11/12 object-contain -mt-14 self-center" src="/programm/Primary@2x.webp" alt="Hero Image width={1000} height={1000}" />
            </div>

            <div className="bg-white flex-1 flex gap-10 justify-between flex-col m-1 p-4 rounded-b-xl">
              <div className="flex flex-col gap-4">
                <h1 className="text-h1 text-gray-900 font-bold">Middle School</h1>
                <p className="text-p font-semibold">Foster your child’s growth and academic success.</p>

              </div>

              <div className="flex  bg-gray-100 rounded-full px-5 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 justify-between items-center">
                <h2 className="text-h2 tracking-wide font-semibold">Learn more</h2>
                <ArrowRightCircleIcon className="h-10 w-10 -rotate-45" aria-hidden="true" />

              </div>

            </div>
          </Link>

          <Link href={'#'} className='relative cursor-pointer hover:-translate-y-2 transition-transform duration-300 bg-sky-100 flex flex-col justify-between rounded-xl'>
            <div className='relative'>
              <div className='bg-white absolute bottom-4 left-4 px-8 py-2 rounded'>
                <h3 className='text-h3 font-semibold text-gray-900'>Ages 14-16</h3>

              </div>
              <Image width={1000} height={1000} className="max-w-lg w-11/12 object-contain -mt-14 self-center" src="/programm/Primary@2x.webp" alt="Hero Image width={1000} height={1000}" />
            </div>

            <div className="bg-white flex-1 flex gap-10 justify-between flex-col m-1 p-4 rounded-b-xl">
              <div className="flex flex-col gap-4">
                <h1 className="text-h1 text-gray-900 font-bold">I/GCSE</h1>
                <p className="text-p font-semibold">Unlock your teen’s full potential and prepare for future success.</p>

              </div>

              <div className="flex bg-gray-100 rounded-full px-5 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 justify-between items-center">
                <h2 className="text-h2 tracking-wide font-semibold">Learn more</h2>
                <ArrowRightCircleIcon className="h-10 w-10 -rotate-45" aria-hidden="true" />

              </div>

            </div>
          </Link>

          <Link href={'#'} className='relative cursor-pointer hover:-translate-y-2 transition-transform duration-300 bg-sky-100 flex flex-col justify-between rounded-xl'>
            <div className='relative'>
              <div className='bg-white absolute bottom-4 left-4 px-8 py-2 rounded'>
                <h3 className='text-h3 font-semibold text-gray-900'>Ages 16-18</h3>

              </div>
              <Image width={1000} height={1000} className="max-w-lg w-11/12 object-contain -mt-14 self-center" src="/programm/Primary@2x.webp" alt="Hero Image width={1000} height={1000}" />
            </div>

            <div className="bg-white flex flex-1 gap-10 justify-between flex-col m-1 p-4 rounded-b-xl">
              <div className="flex flex-col gap-4">
                <h1 className="text-h1 text-gray-900 font-bold">A Level</h1>
                <p className="text-p font-semibold">Prepare teens for university with advanced studies.</p>

              </div>

              <div className="flex bg-gray-100 rounded-full px-5 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 justify-between items-center">
                <h2 className="text-h2 tracking-wide font-semibold">Learn more</h2>
                <ArrowRightCircleIcon className="h-10 w-10 -rotate-45" aria-hidden="true" />

              </div>

            </div>
          </Link>

        </div>

      </div>

      <div className='pt-20 container'>
        <h1 className="text-gray-900 text-h1 text-center font-bold">What awaits you at IWS Online School?</h1>

        <div className="grid grid-cols-6 pt-8 gap-8 sm:gap-10 sm:pt-12 md:gap-8 lg:gap-6">

          <div className="overflow-hidden h-full justify-between gap-10 flex flex-col px-6 py-8 rounded-xl col-span-6 md:col-span-2 bg-green-100">
            <h2 className='text-h2 font-bold text-gray-900 tracking-wide'>Visionary Educators of IWS Online School</h2>
            <p className='text-p leading-6 text-gray-900 font-semibold'>Explore the difference our passionate and committed teachers make in every student’s learning journey.</p>
          </div>

          <div className="overflow-hidden gap-10 md:gap-0 flex flex-col md:flex-row-reverse md:items-center rounded-xl col-span-6 md:col-span-4 bg-sky-100">
            <Image width={1000} height={1000} className="object-contain self-center md:w-3/5 max-w-sm" src="/await/2-1-1024x589.webp" alt="Hero Image width={1000} height={1000}" />

            <div className='flex flex-col gap-6 h-full justify-between px-6 py-8'>
              <h2 className='text-h2 font-bold text-gray-900 tracking-wide'>Our teachers are always in touch</h2>
              <p className='text-p leading-6 text-gray-900 font-semibold'>Our teachers and mentors are ready to help with lesson queries and platform guidance.</p>

            </div>
          </div>

          <div className="relative gap-10 flex flex-col px-6 py-8 rounded-xl col-span-6 md:col-span-2 bg-violet-100">
            <Image width={1000} height={1000} className="absolute -top-10 w-56 md:w-28 md:right-0 object-contain z-30" src="/await/3.webp" alt="Hero Image width={1000} height={1000}" />

            <div className='flex flex-col gap-6 h-full justify-between pt-44 md:pt-20 lg:pt-0'>
              <h2 className='text-h2 font-bold text-gray-900 tracking-wide xl:w-[250px]'>Individual
                Programmes</h2>
              <p className='text-p leading-6 text-gray-900 font-semibold'>Every child is unique. Our personalized assessments and Success Coaching ensure tailored educational paths for every student.</p>
            </div>
          </div>

          <div className="relative gap-10 flex flex-col px-6 py-8 rounded-xl col-span-6 md:col-span-2 bg-pink-100">
            <Image width={1000} height={1000} className="absolute -top-10 w-56 md:w-28 md:right-0 object-contain z-30" src="/await/4.webp" alt="Hero Image width={1000} height={1000}" />

            <div className='flex flex-col gap-6 h-full justify-between pt-44 md:pt-20 lg:pt-0'>
              <h2 className='text-h2 font-bold text-gray-900 tracking-wide xl:w-[250px]'>Dynamic Live Lessons</h2>
              <p className='text-p leading-6 text-gray-900 font-semibold'>Experience structured sessions for active participation, collaboration, and growth in academics and personal development.</p>
            </div>
          </div>

          <div className="relative gap-10 flex flex-col px-6 py-8 rounded-xl col-span-6 md:col-span-2 bg-amber-100">
            <Image width={1000} height={1000} className="absolute -top-10 w-56 md:w-28 md:right-0 object-contain z-30" src="/await/5.webp" alt="Hero Image width={1000} height={1000}" />

            <div className='flex flex-col h-full justify-between gap-6 pt-44 md:pt-20 lg:pt-0'>
              <h2 className='text-h2 font-bold text-gray-900 tracking-wide xl:w-[250px]'>Accredited Curriculum</h2>
              <p className='text-p leading-6 text-gray-900 font-semibold'>We prioritize holistic education, combining academic excellence with skill development for a comprehensive learning experience.</p>
            </div>
          </div>

          <div className="overflow-hidden gap-10 md:gap-0 flex flex-col md:flex-row-reverse md:items-center rounded-xl col-span-6  bg-sky-100">
            <Image width={1000} height={1000} className="object-contain self-center md:w-1/2" src="/await/6-1024x399.webp" alt="Hero Image width={1000} height={1000}" />

            <div className='flex flex-col gap-6 h-full justify-between px-6 py-8 md:w-1/2'>
              <h2 className='text-h2 font-bold text-gray-900 tracking-wide xl:w-[250px]'>Taking care of parents</h2>
              <p className='text-p leading-6 text-gray-900 font-semibold'>Our support specialists are always ready to assist, and our bi-weekly parent assemblies offer a platform to discuss any topic and connect with like-minded families worldwide.</p>

            </div>
          </div>

        </div>

      </div>


      {/* <div className='pt-20 container'>
        <h1 className="text-gray-900 text-3xl text-center xs:text-4xl sm:text-5xl font-bold">Who can benefit from our school?</h1>
        <div className='pt-8 sm:pt-12'>

          <div className="flex flex-wrap gap-5 justify-center ">

            <div className='group relative min-h-[560px] h-[560px] rounded-xl overflow-hidden bg-[#F4F5F8] w-[430px] cursor-pointer'>
              <div className='flex flex-col group-hover:hidden justify-between'>
                <div className='p-8'>
                  <h1 className="font-dmserif text-3xl font-bold text-gray-900">
                    For those who are not satisfied with a regular school
                  </h1>
                </div>
                <Image width={1000} height={1000} className="h-full w-full object-cover" src="/benefit/4_1.webp" alt="" />

              </div>

              <div className='hidden group-hover:flex group-hover:transition-all duration-300 z-20 absolute bg-[#EBF0FE] w-full h-full'>
                <h1 className='text-center'>
                  sdfsdf
                </h1>
              </div>

            </div>

            <div className="group cursor-pointer w-[430px] bg-[#F4F5F8] relative items-center justify-center overflow-hidden">
              <div className="">
                <Image width={1000} height={1000} className="h-full w-full object-cover" src="/benefit/4_1.webp" alt="" />
              </div>
              <div className=" absolute z-30 w-full h-full hidden bg-[#EBF0FE] group-hover:flex flex-col justify-center px-3 xs:px-9 py-4 xs:py-10 gap-3 xs:gap-10">
                <h1 className="font-dmserif text-xl font-bold text-gray-900">For those who are not satisfied with a regular school</h1>
                <div className='flex flex-col gap-2 xs:gap-5'>
                  <h3 className='text-gray-900 text-lg font-semibold'>Is this about you?</h3>

                  <ul className='list-disc gap-2 xs:gap-5 flex flex-col ml-10'>
                    <li className='text-gray-900 text-base font-normal'>Lorem ipsum dolor sit amet consectetur elit? </li>
                    <li className='text-gray-900 text-base font-normal'>Lorem ipsum dolor sit amet consectetur elit? </li>
                    <li className='text-gray-900 text-base font-normal'>Lorem ipsum dolor sit amet consectetur elit? </li>
                    <li className='text-gray-900 text-base font-normal'>Lorem ipsum dolor sit amet consectetur elit? </li>
                  </ul>

                  <h3 className='text-gray-900 text-lg font-semibold'>Then our school is right for you!</h3>

                </div>
              </div>
            </div>

            <div className="group w-[430px] relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="">
                <Image width={1000} height={1000} className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/benefit/4_2.webp" alt="" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-3/4 xs:translate-y-[70%] flex-col justify-center px-3 xs:px-9 py-4 xs:py-10 transition-all duration-500 group-hover:translate-y-0 gap-3 xs:gap-10">


                <h1 className="font-dmserif text-xl font-bold text-white">For those who are not satisfied with a regular school</h1>

                <div className='flex flex-col gap-2 xs:gap-5'>
                  <h3 className='text-white text-lg font-semibold'>Is this about you?</h3>

                  <ul className='list-disc gap-2 xs:gap-5 flex flex-col ml-10'>
                    <li className='text-white text-base font-normal'>Lorem ipsum dolor sit amet consectetur elit? </li>
                    <li className='text-white text-base font-normal'>Lorem ipsum dolor sit amet consectetur elit? </li>
                    <li className='text-white text-base font-normal'>Lorem ipsum dolor sit amet consectetur elit? </li>
                    <li className='text-white text-base font-normal'>Lorem ipsum dolor sit amet consectetur elit? </li>
                  </ul>

                  <h3 className='text-white text-lg font-semibold'>Then our school is right for you!</h3>

                </div>


              </div>
            </div>

            <div className="group w-[430px] relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="">
                <Image width={1000} height={1000} className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/benefit/4_3.webp" alt="" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-3/4 xs:translate-y-[70%] flex-col justify-center px-3 xs:px-9 py-4 xs:py-10 transition-all duration-500 group-hover:translate-y-0 gap-3 xs:gap-10">


                <h1 className="font-dmserif text-xl font-bold text-white">For those who are not satisfied with a regular school</h1>

                <div className='flex flex-col gap-2 xs:gap-5'>
                  <h3 className='text-white text-lg font-semibold'>Is this about you?</h3>

                  <ul className='list-disc gap-2 xs:gap-5 flex flex-col ml-10'>
                    <li className='text-white text-base font-normal'>Lorem ipsum dolor sit amet consectetur elit? </li>
                    <li className='text-white text-base font-normal'>Lorem ipsum dolor sit amet consectetur elit? </li>
                    <li className='text-white text-base font-normal'>Lorem ipsum dolor sit amet consectetur elit? </li>
                    <li className='text-white text-base font-normal'>Lorem ipsum dolor sit amet consectetur elit? </li>
                  </ul>

                  <h3 className='text-white text-lg font-semibold'>Then our school is right for you!</h3>

                </div>


              </div>
            </div>

            <div className="group w-[430px] relative items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="">
                <Image width={1000} height={1000} className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/benefit/4_1.webp" alt="" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-3/4 xs:translate-y-[70%] flex-col justify-center px-3 xs:px-9 py-4 xs:py-10 transition-all duration-500 group-hover:translate-y-0 gap-3 xs:gap-10">


                <h1 className="font-dmserif text-xl font-bold text-white">For those who are not satisfied with a regular school</h1>

                <div className='flex flex-col gap-2 xs:gap-5'>
                  <h3 className='text-white text-lg font-semibold'>Is this about you?</h3>

                  <ul className='list-disc gap-2 xs:gap-5 flex flex-col ml-10'>
                    <li className='text-white text-base font-normal'>Lorem ipsum dolor sit amet consectetur elit? </li>
                    <li className='text-white text-base font-normal'>Lorem ipsum dolor sit amet consectetur elit? </li>
                    <li className='text-white text-base font-normal'>Lorem ipsum dolor sit amet consectetur elit? </li>
                    <li className='text-white text-base font-normal'>Lorem ipsum dolor sit amet consectetur elit? </li>
                  </ul>

                  <h3 className='text-white text-lg font-semibold'>Then our school is right for you!</h3>

                </div>


              </div>
            </div>

          </div>

        </div>
      </div> */}


      <div className='pt-20 container'>
        <h1 className="text-gray-900 text-h1 text-center font-bold">Choose your education model</h1>
        <div className='pt-8 sm:pt-12 grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-5'>


          <div className="relative gap-10 flex flex-col px-6 py-8 rounded-xl bg-gray-50">
            <Image width={1000} height={1000} className="absolute -top-10 w-56 md:w-36 md:right-0 object-contain z-30" src="/await/3.webp" alt="Hero Image width={1000} height={1000}" />
            <div className='flex flex-col gap-14'>
              <div className='flex flex-col gap-8 pt-44 md:pt-20 lg:pt-0'>
                <h2 className='text-h2 font-bold text-gray-900 tracking-wide lg:w-1/2 lg:text-4xl'>Hybrid
                  Model</h2>
                <p className='text-p leading-6 text-gray-900 font-semibold'>
                  Blend online learning with hands-on experience.
                </p>
                <p className='text-p leading-6 text-gray-900 font-semibold'>From September to June, students join live online classes, then attend a 4-week summer camp in the UK.</p>
              </div>
              <div className="flex flex-1 bg-white shadow-sm rounded-full px-8 py-4 cursor-pointer transition-colors duration-300 hover:bg-gray-200 justify-between items-center">
                <h2 className="text-h2 tracking-wide font-semibold">Learn more</h2>
                <ArrowRightCircleIcon className="h-12 w-12 -rotate-45" aria-hidden="true" />

              </div>
            </div>
          </div>

          <div className="relative gap-10 flex flex-col px-6 py-8 rounded-xl bg-gray-50">
            <Image width={1000} height={1000} className="absolute -top-10 w-56 md:w-36 md:right-0 object-contain z-30" src="/await/3.webp" alt="Hero Image width={1000} height={1000}" />
            <div className='flex flex-col gap-14'>
              <div className='flex flex-col gap-8 pt-44 md:pt-20 lg:pt-0'>
                <h2 className='text-h2 font-bold text-gray-900 tracking-wide'>Hybrid
                  Model</h2>
                <p className='text-p leading-6 text-gray-900 font-semibold'>
                  Blend online learning with hands-on experience.
                </p>
                <p className='text-p leading-6 text-gray-900 font-semibold'>Every child is unique. Our personalized assessments and Success Coaching ensure tailored educational paths for every student.</p>
              </div>
              <div className="flex flex-1 bg-white shadow-sm rounded-full px-8 py-4 cursor-pointer transition-colors duration-300 hover:bg-gray-200 justify-between items-center">
                <h2 className="text-h2 tracking-wide font-semibold">Learn more</h2>
                <ArrowRightCircleIcon className="h-12 w-12 -rotate-45" aria-hidden="true" />

              </div>
            </div>
          </div>

          <div className="relative gap-10 flex flex-col px-6 py-8 rounded-xl bg-gray-50">
            <Image width={1000} height={1000} className="absolute -top-10 w-56 md:w-36 md:right-0 object-contain z-30" src="/await/3.webp" alt="Hero Image width={1000} height={1000}" />
            <div className='flex flex-col gap-14'>
              <div className='flex flex-col gap-8 pt-44 md:pt-20 lg:pt-0'>
                <h2 className='text-h2 font-bold text-gray-900 tracking-wide lg:w-1/2 lg:text-4xl'>Hybrid
                  Model</h2>
                <p className='text-p leading-6 text-gray-900 font-semibold'>
                  Blend online learning with hands-on experience.
                </p>
                <p className='text-p leading-6 text-gray-900 font-semibold'>Every child is unique. Our personalized assessments and Success Coaching ensure tailored educational paths for every student.</p>
              </div>
              <div className="flex flex-1 bg-white shadow-sm rounded-full px-8 py-4 cursor-pointer transition-colors duration-300 hover:bg-gray-200 justify-between items-center">
                <h2 className="text-h2 tracking-wide font-semibold">Learn more</h2>
                <ArrowRightCircleIcon className="h-12 w-12 -rotate-45" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className='pt-20 container'>
        <h1 className="text-gray-900 text-h1 text-center font-bold">Choose your education model</h1>
        <div className='pt-8 sm:pt-12 flex flex-col gap-8'>

          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
        </div>
      </div>

      <div className='mt-20 lg:container'>
        <h1 className="text-gray-900 container text-h1 text-center font-bold">Choose your education model</h1>
        <div className=' bg-blue-900 lg:rounded-xl mt-8 flex flex-col md:flex-row'>
          <div className='py-12 px-8 lg:px-16 flex flex-col gap-10'>
            <h1 className='text-h1 text-white/90 tracking-tighter font-bold leading-[60px]'>
              Looking to learn more?
            </h1>

            <p className='text-white text-p leading-9'>
              To find out more about our fresh approach to global learning, talk to us today
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="bg-blue-600 rounded-lg hover:border hover:border-inherit hover:border-blue-600 px-8 py-2 text-white hover:bg-blue-700 transition-colors duration-300 font-semibold text-lg">Book a Call</button>
              <button className=" border-blue-600  hover:bg-blue-600 transition-all duration-300 border-[3px] rounded-lg px-8 py-2 text-white font-semibold text-lg">Contact Us</button>
            </div>
          </div>
          <Image width={1000} height={1000} className="object-contain md:w-1/2 self-end" src="/Brochure.png" alt="Hero Image width={1000} height={1000}" />
        </div>
      </div>

      <div className='mt-20 container'>
        <h2 className='text-blue-900 font-semibold text-h2 '>
          Partnered by
        </h2>
        <div className='h-[2px] my-10 w-full bg-blue-900'></div>
        <Carousel />
      </div>
    </div>

  );
}
