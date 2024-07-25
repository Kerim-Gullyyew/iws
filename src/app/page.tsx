"use client";
import {
  ArrowRightCircleIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/24/solid";
import Accordion from "./components/ui/Accordion";
import Carousel from "./components/ui/Carousel";
import Image from "next/image";
import Link from "next/link";
import EnrollButton from "./components/buttons/EnrollButton";
import ContactButton from "./components/buttons/ContactButton";
import CardChildren from "./components/card/CardChildren";
import TabSection from './components/ui/TabSection'
import ContactUsSection from './components/sections/ContactUsSection'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
export default function Home() {
  return (
    <div className="py-14 lg:py-24 animate-fade-in">
      <div className="gap-10 container sm:gap-14 flex-col flex justify-center items-center lg:flex lg:flex-row">
        <div className="gap-10 sm:gap-14 flex-col flex justify-center">
          <div className="flex">
            <div className="relative">
              <Image
                width={1000}
                height={1000}
                className="w-[300px] min-w-[250px] lg:w-[400px] object-contain lg:min-w-[250px]"
                src="/Tag.webp"
                alt="Tag photo"
              />
            </div>
          </div>

          <h1 className=" leading-[50px] lg:leading-[70px]  text-[42px] lg:text-[62px]  sm:text-[40px]  md:text-[40px]">
            Accredited, Holistic Online Schooling
          </h1>

          <p className="leading-[32px] text-[20px] lg:text-[1.5em]">
            IWS Online School – Your compass in the digital realm of learning.
            Discover new horizons, Create lasting memories, and Lead the future
            with our live lessons.
          </p>

          <div className="flex items-center justify-center flex-wrap gap-5 lg:justify-start">
            <EnrollButton />

            <ContactButton />
          </div>
        </div>

        <Image
          width={450}
          height={450}
          className="w-auto md:w-[450px] sm:flex lg:w-auto object-contain"
          src="/Hero.webp"
          alt=""
        />
      </div>

      <div className="pt-20 container">
        <h2 className="  text-center ">The right study programme for you</h2>


        <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-6 gap-y-14">
          <Link
            href={"/cambridge-primary"}
            className="relative cursor-pointer hover:-translate-y-2 transition-transform duration-300 bg-[#D9DFFB] flex flex-col justify-between rounded-xl"
          >
            <div className="relative">
              <div className="bg-white absolute bottom-4 left-4 px-8 py-2 rounded">
                <p className="  ">Ages 7-11</p>
              </div>
              <Image
                width={1000}
                height={1000}
                className="max-w-lg w-11/12 object-contain -mt-14 self-center"
                src="/programm/Primary@2x.webp"
                alt=""
              />
            </div>

            <div className="bg-white flex-1 flex gap-10 justify-between flex-col m-[3px] p-4 rounded-b-xl">
              <div className="flex flex-col gap-4">
                <h3 className="text-[32px] font-[500]">Primary School</h3>
                <p className="text-p ">
                  A strong foundation and a love for learning for your child.
                </p>
              </div>

              <div className="flex bg-gray-100 rounded-full px-5 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 justify-between items-center">
                <p className="text-p tracking-wide ">Learn more</p>
                <ArrowRightCircleIcon
                  className="h-10 w-10 -rotate-45"
                  aria-hidden="true"
                />
              </div>
            </div>
          </Link>

          <Link
            href={"/cambridge-secondary"}
            className="relative cursor-pointer hover:-translate-y-2 transition-transform duration-300 bg-[#E6F2DB] flex flex-col justify-between rounded-xl"
          >
            <div className="relative">
              <div className="bg-white absolute bottom-4 left-4 px-8 py-2 rounded">
                <p className="  ">Ages 11-14</p>
              </div>
              <Image
                width={1000}
                height={1000}
                className="max-w-lg w-11/12 object-contain -mt-14 self-center"
                src="/programm/Middle@2x.webp"
                alt=""
              />
            </div>

            <div className="bg-white flex-1 flex gap-10 justify-between flex-col m-[3px] p-4 rounded-b-xl">
              <div className="flex flex-col gap-4">
                <h3 className="text-[32px] font-[500]  ">Middle School</h3>
                <p className="text-p ">
                  Foster your child’s growth and academic success.
                </p>
              </div>

              <div className="flex  bg-gray-100 rounded-full px-5 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 justify-between items-center">
                <p className="text-p tracking-wide ">Learn more</p>
                <ArrowRightCircleIcon
                  className="h-10 w-10 -rotate-45"
                  aria-hidden="true"
                />
              </div>
            </div>
          </Link>

          <Link
            href={"/cambridge-igcse"}
            className="relative cursor-pointer hover:-translate-y-2 transition-transform duration-300 bg-[#FCE8D6] flex flex-col justify-between rounded-xl"
          >
            <div className="relative">
              <div className="bg-white absolute bottom-4 left-4 px-8 py-2 rounded">
                <p className="  ">Ages 14-16</p>
              </div>
              <Image
                width={1000}
                height={1000}
                className="max-w-lg w-11/12 object-contain -mt-14 self-center"
                src="/programm/IGCSE@2x.webp"
                alt=""
              />
            </div>

            <div className="bg-white flex-1 flex gap-10 justify-between flex-col m-[3px] p-4 rounded-b-xl">
              <div className="flex flex-col gap-4">
                <h3 className="text-[32px] font-[500]  ">I/GCSE</h3>
                <p className="text-p ">
                  Unlock your teen’s full potential and prepare for future
                  success.
                </p>
              </div>

              <div className="flex bg-gray-100 rounded-full px-5 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 justify-between items-center">
                <p className="text-p tracking-wide ">Learn more</p>
                <ArrowRightCircleIcon
                  className="h-10 w-10 -rotate-45"
                  aria-hidden="true"
                />
              </div>
            </div>
          </Link>

          <Link
            href={"/cambridge-a-level"}
            className="relative cursor-pointer hover:-translate-y-2 transition-transform duration-300 bg-[#FBD9D5] flex flex-col justify-between rounded-xl"
          >
            <div className="relative">
              <div className="bg-white absolute bottom-4 left-4 px-8 py-2 rounded">
                <p className="  ">Ages 16-18</p>
              </div>
              <Image
                width={1000}
                height={1000}
                className="max-w-lg w-11/12 object-contain -mt-14 self-center"
                src="/programm/A-Level@2x.webp"
                alt=""
              />
            </div>

            <div className="bg-white flex flex-1 gap-10 justify-between flex-col m-[3px] p-4 rounded-b-xl">
              <div className="flex flex-col gap-4">
                <h3 className="text-[32px] font-[500]  ">A Level</h3>
                <p className="text-p ">
                  Prepare teens for university with advanced studies.
                </p>
              </div>

              <div className="flex bg-gray-100 rounded-full px-5 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 justify-between items-center">
                <p className="text-p tracking-wide ">Learn more</p>
                <ArrowRightCircleIcon
                  className="h-10 w-10 -rotate-45"
                  aria-hidden="true"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="pt-20 container">
        <h2 className="  text-center ">
          What awaits you at IWS Online School?
        </h2>

        <div className="grid grid-cols-6 pt-8 gap-8 sm:gap-10 sm:pt-12 md:gap-8 lg:gap-6">
          <div className="overflow-hidden h-full justify-between gap-10 flex flex-col px-6 py-8 rounded-xl col-span-6 md:col-span-2 bg-[#F1F9EC]">
            <h3 className="   tracking-wide">
              Visionary Educators of IWS Online School
            </h3>
            <p className="text-p leading-6  ">
              Explore the difference our passionate and committed teachers make
              in every student’s learning journey.
            </p>
          </div>

          <div className="overflow-hidden gap-10 md:gap-0 flex flex-col md:flex-row-reverse md:items-center rounded-xl col-span-6 md:col-span-4 bg-[#EBF0FE]">
            <Image
              width={1000}
              height={1000}
              className="object-contain self-center md:w-3/5 max-w-sm"
              src="/await/2-1-1024x589.webp"
              alt=""
            />

            <div className="flex flex-col gap-6 h-full justify-between px-6 py-8">
              <h3 className="   tracking-wide">
                Our teachers are <br /> always in touch
              </h3>
              <p className="text-p leading-6  ">
                Our teachers and mentors are ready to help with lesson queries
                and platform guidance.
              </p>
            </div>
          </div>

          <div className="relative gap-10 flex flex-col px-6 py-8 rounded-xl col-span-6 md:col-span-2 bg-[#F5EDFF]">
            <Image
              width={1000}
              height={1000}
              className="absolute -top-10 w-56 md:w-28 md:right-0 object-contain z-30"
              src="/await/3.webp"
              alt=""
            />

            <div className="flex flex-col gap-6 h-full justify-between pt-44 md:pt-20 lg:pt-0">
              <h3 className="   tracking-wide lg:w-[250px]">
                Individual Programmes
              </h3>
              <p className="text-p leading-6  ">
                Every child is unique. Our personalized assessments and Success
                Coaching ensure tailored educational paths for every student.
              </p>
            </div>
          </div>

          <div className="relative gap-10 flex flex-col px-6 py-8 rounded-xl col-span-6 md:col-span-2 bg-[#FFF0FF]">
            <Image
              width={1000}
              height={1000}
              className="absolute -top-10 w-56 md:w-28 md:right-0 object-contain z-30"
              src="/await/4.webp"
              alt=""
            />

            <div className="flex flex-col gap-6 h-full justify-between pt-44 md:pt-20 lg:pt-0">
              <h3 className="   tracking-wide lg:w-[250px]">
                Dynamic Live Lessons
              </h3>
              <p className="text-p leading-6  ">
                Experience structured sessions for active participation,
                collaboration, and growth in academics and personal development.
              </p>
            </div>
          </div>

          <div className="relative gap-10 flex flex-col px-6 py-8 rounded-xl col-span-6 md:col-span-2 bg-[#FFE5E7]">
            <Image
              width={1000}
              height={1000}
              className="absolute -top-10 w-56 md:w-28 md:right-0 object-contain z-30"
              src="/await/5.webp"
              alt=""
            />

            <div className="flex flex-col h-full justify-between gap-6 pt-44 md:pt-20 lg:pt-0">
              <h3 className="   tracking-wide lg:w-[250px]">
                Accredited Curriculum
              </h3>
              <p className="text-p leading-6  ">
                We prioritize holistic education, combining academic excellence
                with skill development for a comprehensive learning experience.
              </p>
            </div>
          </div>

          <div className="overflow-hidden gap-10 md:gap-0 flex flex-col md:flex-row-reverse md:items-center rounded-xl col-span-6  bg-[#FDF6EB]">
            <Image
              width={1000}
              height={1000}
              className="object-contain self-center md:w-1/2"
              src="/await/6-1024x399.webp"
              alt=""
            />

            <div className="flex flex-col gap-6 h-full justify-between px-6 py-8 md:w-1/2">
              <h3 className="   tracking-wide lg:w-[250px]">
                Taking care of parents
              </h3>
              <p className="text-p leading-6">
                Our support specialists are always ready to assist, and our
                bi-weekly parent assemblies offer a platform to discuss any
                topic and connect with like-minded families worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20 container">
        <h2 className="  text-center ">Who can benefit from our school?</h2>
        <div className="pt-8 sm:pt-12">
          <div className="flex flex-wrap gap-5 justify-between">
            <div className="group relative w-auto sm:w-[310px] h-[500px] sm:h-[530px] bg-[#F4F5F8] cursor-pointer hover:bg-[#EBF0FE] rounded-xl overflow-hidden transition duration-500">
              <h4 className=" container pt-8 leading-tight ">
                For those who are not satisfied with a regular school
              </h4>
              <div className="transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0 absolute bottom-0">
                <Image
                  width={1000}
                  height={1000}
                  className=" object-cover"
                  src="/benefit/4_1.webp"
                  alt=""
                />
              </div>

              <div className="absolute bottom-0 inset-0 flex flex-col justify-end px-9 sm:px-9 py-3 sm:pb-8 sm:py-8 gap-3 sm:gap-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                <div className="flex flex-col gap-2 sm:gap-3">
                  <p className=" text-[16px] ">Is this about you?</p>
                  <ul className="list-disc gap-2 sm:gap-3 flex flex-col ml-10">
                    <li className=" text-[16px] font-normal">
                      Feeling uneasy in your current school environment?
                    </li>
                    <li className=" text-[15px] font-normal">
                      Facing ongoing conflicts with peers?
                    </li>
                    <li className=" text-[15px] font-normal">
                      Dissatisfied with nearby education options?
                    </li>
                    <li className=" text-[15px] font-normal">
                      Unable to attend traditional schools due to personal
                      beliefs?
                    </li>
                  </ul>
                  <p className=" text-[16px] ">
                    Then our school is right for you!
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative w-auto md:w-[310px] h-[530px] bg-[#F4F5F8] cursor-pointer hover:bg-[#EBF0FE] rounded-xl overflow-hidden transition duration-500">
              <h4 className=" container pt-8 leading-tight ">
                For students who often miss school.
              </h4>
              <div className="transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0 absolute bottom-0">
                <Image
                  width={1000}
                  height={1000}
                  className=" object-cover"
                  src="/benefit/4_2.webp"
                  alt=""
                />
              </div>

              <div className="absolute bottom-0 inset-0 flex flex-col justify-end px-3 sm:px-9 py-4 sm:py-8 gap-3 sm:gap-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                <div className="flex flex-col gap-2 sm:gap-3">
                  <p className=" text-[16px] ">Does this sound like you?</p>
                  <ul className="list-disc gap-2 sm:gap-3 flex flex-col ml-10">
                    <li className=" text-[16px] font-normal">
                      Struggling to balance school with extracurricular
                      activities?
                    </li>
                    <li className=" text-[16px] font-normal">
                      Feeling overwhelmed as difficulties in certain subjects
                      escalate?
                    </li>
                    <li className=" text-[16px] font-normal">
                      Frequently missing school due to illness?
                    </li>
                    <li className=" text-[16px] font-normal">
                      Finding some subjects challenging to understand?
                    </li>
                  </ul>
                  <p className=" text-[16px] ">
                    Then our school is right for you!
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative w-auto md:w-[310px] h-[530px] bg-[#F4F5F8] cursor-pointer hover:bg-[#EBF0FE] rounded-xl overflow-hidden transition duration-500">
              <h4 className=" container pt-8 leading-tight ">
                For those who live abroad or the family travels a lot
              </h4>
              <div className="transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0 absolute bottom-0">
                <Image
                  width={1000}
                  height={1000}
                  className=" object-cover"
                  src="/benefit/4_3.webp"
                  alt=""
                />
              </div>

              <div className="absolute bottom-0 inset-0 flex flex-col justify-end px-3 sm:px-9 py-4 sm:py-8 gap-3 sm:gap-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                <div className="flex flex-col gap-2 sm:gap-3">
                  <p className=" text-[16px] ">Is this about you?</p>
                  <ul className="list-disc gap-2 sm:gap-3 flex flex-col ml-10">
                    <li className=" text-[16px] font-normal">
                      Frequent relocation due to parental work or lifestyle
                      choices.
                    </li>
                    <li className=" text-[16px] font-normal">
                      Desire for continuity in education despite changing
                      locations.
                    </li>
                    <li className=" text-[16px] font-normal">
                      Need for a supportive learning environment that transcends
                      geographical boundaries.
                    </li>
                  </ul>
                  <p className=" text-[16px] ">
                    Then our school is right for you!
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative w-auto md:w-[310px] h-[530px] bg-[#F4F5F8] cursor-pointer hover:bg-[#EBF0FE] rounded-xl overflow-hidden transition duration-500">
              <h4 className=" px-5 pt-8 leading-tight">
                For students preparing to enter a prestigious university
              </h4>
              <div className="transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0 absolute bottom-0">
                <Image
                  width={1000}
                  height={1000}
                  className=" object-cover"
                  src="/benefit/4_4.webp"
                  alt=""
                />
              </div>

              <div className="absolute bottom-0 inset-0 flex flex-col justify-end px-3 sm:px-9 py-4 sm:py-8 gap-3 sm:gap-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                <div className="flex flex-col gap-2 sm:gap-3">
                  <p className=" text-[16px] ">Is this about you?</p>
                  <ul className="list-disc gap-2 sm:gap-3 flex flex-col ml-10">
                    <li className=" text-[16px] font-normal">
                      Aiming for top-tier university admissions.
                    </li>
                    <li className=" text-[16px] font-normal">
                      Seeking academic rigor and personalized exam prep.
                    </li>
                    <li className=" text-[16px] font-normal">
                      Craving extracurricular opportunities and leadership
                      development.
                    </li>
                    <li className=" text-[16px] font-normal">
                      Needing guidance for application processes.
                    </li>
                  </ul>
                  <p className=" text-[16px] ">
                    Then our school is right for you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="pt-20 container">
        <h2 className="  text-center ">Choose your education model</h2>
        <div className="pt-8 sm:pt-12 grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-5">
          <div className="relative gap-10 flex flex-col px-6 py-8 rounded-xl bg-[#F2F4F7]">
            <Image
              width={1000}
              height={1000}
              className="absolute -top-10 w-56 md:w-36 md:right-0 object-contain z-30"
              src="/await/3.webp"
              alt=""
            />
            <div className="flex h-full justify-between flex-col gap-14">
              <div className="flex flex-col gap-8 pt-44 md:pt-20 lg:pt-0">
                <h3 className="   tracking-wide lg:w-1/2 lg:text-4xl">
                  Hybrid Model
                </h3>
                <p className="text-p leading-6  ">
                  Blend online learning with hands-on experience.
                </p>
                <p className="text-p leading-6  ">
                  From September to June, students join live online classes,
                  then attend a 4-week summer camp in the UK.
                </p>
              </div>
              <div className="flex bg-white shadow-sm rounded-full px-6 py-1 cursor-pointer transition-colors duration-300 hover:bg-gray-200 justify-between items-center">
                <p className="text-p tracking-wide ">Learn more</p>
                <ArrowRightCircleIcon
                  className="h-12 w-12 -rotate-45"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div className="relative gap-10 flex flex-col px-6 py-8 rounded-xl bg-[#F2F4F7]">
            <Image
              width={1000}
              height={1000}
              className="absolute -top-10 w-56 md:w-36 md:right-0 object-contain z-30"
              src="/await/3.webp"
              alt=""
            />
            <div className="flex h-full justify-between flex-col gap-14">
              <div className="flex flex-col gap-8 pt-44 md:pt-20 lg:pt-0">
                <h3 className="   tracking-wide lg:w-1/2 lg:text-4xl">
                  Fully Online
                </h3>
                <p className="text-p leading-6  ">
                  From September to June with classes from 09:00 to 15:00 UK
                  time.
                </p>
                <p className="text-p leading-6  ">
                  {
                    "It's structured, flexible, and taught by qualified teachers to keep your child engaged and progressing."
                  }
                </p>
              </div>
              <div className="flex bg-white shadow-sm rounded-full px-6 py-1 cursor-pointer transition-colors duration-300 hover:bg-gray-200 justify-between items-center">
                <p className="text-p tracking-wide ">Learn more</p>
                <ArrowRightCircleIcon
                  className="h-12 w-12 -rotate-45"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div className="relative gap-10 flex flex-col px-6 py-8 rounded-xl bg-[#F2F4F7]">
            <Image
              width={1000}
              height={1000}
              className="absolute -top-10 w-56 md:w-36 md:right-0 object-contain z-30"
              src="/await/3.webp"
              alt=""
            />
            <div className="flex h-full justify-between flex-col gap-14">
              <div className="flex flex-col gap-8 pt-44 md:pt-20 lg:pt-0">
                <h3 className="   tracking-wide lg:w-1/2 lg:text-4xl">
                  Self Paced
                </h3>
                <p className="text-p leading-6  ">
                  Our Flexible Learning Model offers students the freedom to
                  learn at their own pace and schedule.
                </p>
                <p className="text-p leading-6  ">
                  This is ideal for independent learners or those with time
                  constraints.
                </p>
              </div>
              <div className="flex bg-white shadow-sm rounded-full px-6 py-1 cursor-pointer transition-colors duration-300 hover:bg-gray-200 justify-between items-center">
                <p className="text-p tracking-wide ">Learn more</p>
                <ArrowRightCircleIcon
                  className="h-12 w-12 -rotate-45"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="pt-20 container">
        <h2 className="  text-center ">FAQs</h2>
        <div className="pt-8 sm:pt-12 flex flex-col gap-8">
          <Disclosure as="div" className="w-full border-b border-gray-300">
            {({ open }) => (
              <>
                <DisclosureButton className="w-full pb-2 flex items-center justify-between focus:outline-none">
                  <h3 className=" ">Why us?</h3>
                  {open ? (
                    <MinusIcon className="h-8 w-8" aria-hidden="true" />
                  ) : (
                    <PlusIcon className="h-8 w-8" aria-hidden="true" />
                  )}
                </DisclosureButton>
                <div className="overflow-hidden py-2">
                  <AnimatePresence>
                    {open && (
                      <DisclosurePanel
                        static
                        as={motion.div}
                        initial={{ opacity: 0, y: -24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -24 }}
                        transition
                        className="origin-top transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
                      >
                        <div className=" space-y-5">
                          <p className="text-p">
                            Our British online school revolutionises remote
                            education. With an easy-to-use platform, flexible
                            academic programmes, and adaptable schedules, we
                            provide a learning experience that can often exceed
                            that of traditional schools.
                          </p>
                          <p className="text-p">
                            Globally, schools are embracing technology to meet
                            evolving educational standards. It is anticipated
                            that within the next few decades, online education
                            will become commonplace. At IWS, we lead by
                            prioritising online teaching.
                          </p>
                          <p className="text-p">
                            Our teachers are adept at delivering Live Online
                            Lessons with great enthusiasm and proficiency. We
                            also employ sophisticated and reliable technology to
                            ensure our virtual classrooms meet every need of our
                            pupils, including round-the-clock access to recorded
                            lessons to support independent study.
                          </p>
                          <p className="text-p">
                            In this respect, we are advancing faster than many
                            educational institutions that are just beginning to
                            embark on this digital transition.
                          </p>
                          <p className="text-p">
                            IWS places great value on the educational
                            experiences that occur beyond the classroom walls.
                            Thus, we offer numerous opportunities for group
                            interaction through a variety of clubs,
                            extracurricular activities, and online social
                            gatherings. This approach allows each student to
                            connect with others across the globe, fostering a
                            sense of belonging to a vibrant community that
                            extends beyond the end of the school day.
                          </p>
                        </div>
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </div>
              </>
            )}
          </Disclosure>

          <Disclosure as="div" className="w-full border-b border-gray-300">
            {({ open }) => (
              <>
                <DisclosureButton className="w-full pb-2 flex items-center justify-between focus:outline-none">
                  <h3 className=" ">Are you accredited?</h3>
                  {open ? (
                    <MinusIcon className="h-8 w-8" aria-hidden="true" />
                  ) : (
                    <PlusIcon className="h-8 w-8" aria-hidden="true" />
                  )}
                </DisclosureButton>
                <div className="overflow-hidden py-2">
                  <AnimatePresence>
                    {open && (
                      <DisclosurePanel
                        static
                        as={motion.div}
                        initial={{ opacity: 0, y: -24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -24 }}
                        transition
                        className="origin-top transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
                      >
                        <div className=" space-y-5">
                          <p className="text-p">
                            Yes, we offer Cambridge Assessment International
                            Education. We are registered as UK Learner Providers
                            and are in the process of obtaining our membership
                            with the Council of International Schools (CIS).
                          </p>
                        </div>
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </div>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="w-full border-b border-gray-300">
            {({ open }) => (
              <>
                <DisclosureButton className="w-full pb-2 flex items-center justify-between focus:outline-none">
                  <h3 className=" ">Are you accredited?</h3>
                  {open ? (
                    <MinusIcon className="h-8 w-8" aria-hidden="true" />
                  ) : (
                    <PlusIcon className="h-8 w-8" aria-hidden="true" />
                  )}
                </DisclosureButton>
                <div className="overflow-hidden py-2">
                  <AnimatePresence>
                    {open && (
                      <DisclosurePanel
                        static
                        as={motion.div}
                        initial={{ opacity: 0, y: -24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -24 }}
                        transition
                        className="origin-top transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
                      >
                        <div className=" space-y-5">
                          <p className="text-p">
                            Yes, we offer Cambridge Assessment International
                            Education. We are registered as UK Learner Providers
                            and are in the process of obtaining our membership
                            with the Council of International Schools (CIS).
                          </p>
                        </div>
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </div>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="w-full border-b border-gray-300">
            {({ open }) => (
              <>
                <DisclosureButton className="w-full pb-2 flex items-center justify-between focus:outline-none">
                  <h3 className=" ">Where are you based?</h3>
                  {open ? (
                    <MinusIcon className="h-8 w-8" aria-hidden="true" />
                  ) : (
                    <PlusIcon className="h-8 w-8" aria-hidden="true" />
                  )}
                </DisclosureButton>
                <div className="overflow-hidden py-2">
                  <AnimatePresence>
                    {open && (
                      <DisclosurePanel
                        static
                        as={motion.div}
                        initial={{ opacity: 0, y: -24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -24 }}
                        transition
                        className="origin-top transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
                      >
                        <div className=" space-y-5">
                          <p className="text-p">
                            We are based in the UK, our headquarters are
                            registered at 31 Long Acre Covent Garden, London
                            England WC2E 9LA
                          </p>
                        </div>
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </div>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="w-full border-b border-gray-300">
            {({ open }) => (
              <>
                <DisclosureButton className="w-full pb-2 flex items-center justify-between focus:outline-none">
                  <h3 className=" ">How does your online school work?</h3>
                  {open ? (
                    <MinusIcon className="h-8 w-8" aria-hidden="true" />
                  ) : (
                    <PlusIcon className="h-8 w-8" aria-hidden="true" />
                  )}
                </DisclosureButton>
                <div className="overflow-hidden py-2">
                  <AnimatePresence>
                    {open && (
                      <DisclosurePanel
                        static
                        as={motion.div}
                        initial={{ opacity: 0, y: -24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -24 }}
                        transition
                        className="origin-top transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
                      >
                        <div className=" space-y-5">
                          <p className="text-p">
                            Our trained teachers employ a range of teaching aids
                            to support learning, such as high-quality video
                            cameras, interactive whiteboards, screen sharing,
                            live presentations, and lesson recordings. Students
                            at IWS can join classes through a safe online link.
                            Teachers use various methods and activities,
                            including quizzes, presentations, and group work, in
                            their lessons. The use of modern technology makes
                            learning enjoyable for students and enhances their
                            educational journey compared to conventional
                            methods. This also boosts their learning as they
                            study from home.
                          </p>
                        </div>
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </div>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="w-full border-b border-gray-300">
            {({ open }) => (
              <>
                <DisclosureButton className="w-full pb-2 flex items-center justify-between focus:outline-none">
                  <h3 className=" ">
                    Does online learning isolate students from their peers?
                  </h3>
                  {open ? (
                    <MinusIcon className="h-8 w-8" aria-hidden="true" />
                  ) : (
                    <PlusIcon className="h-8 w-8" aria-hidden="true" />
                  )}
                </DisclosureButton>
                <div className="overflow-hidden py-2">
                  <AnimatePresence>
                    {open && (
                      <DisclosurePanel
                        static
                        as={motion.div}
                        initial={{ opacity: 0, y: -24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -24 }}
                        transition
                        className="origin-top transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
                      >
                        <div className=" space-y-5">
                          <p className="text-p">
                            Many parents worry about whether online learning
                            will allow their child to socialise properly. At
                            IWS, we encourage our international students to
                            interact with one another by holding various clubs,
                            social gatherings, and events throughout the school
                            year. We also offer a summer camp, a student
                            council, and additional activities for students to
                            enjoy in their spare time. Furthermore, students
                            enrolled in the same courses often work together on
                            group tasks and projects. These collaborative
                            efforts help develop communication skills and
                            leadership abilities. All activities in our online
                            classrooms are recorded and supervised to ensure the
                            safety of our students online. We also provide
                            training on how to use social media responsibly to
                            maintain a safe environment for all student
                            interactions.
                          </p>
                        </div>
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </div>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="w-full border-b border-gray-300">
            {({ open }) => (
              <>
                <DisclosureButton className="w-full pb-2 flex items-center justify-between focus:outline-none">
                  <h3 className="text-left ">
                    I reside outside the UK; is this educational approach
                    acknowledged in my country?
                  </h3>
                  {open ? (
                    <MinusIcon className="h-8 w-8" aria-hidden="true" />
                  ) : (
                    <PlusIcon className="h-8 w-8" aria-hidden="true" />
                  )}
                </DisclosureButton>
                <div className="overflow-hidden py-2">
                  <AnimatePresence>
                    {open && (
                      <DisclosurePanel
                        static
                        as={motion.div}
                        initial={{ opacity: 0, y: -24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -24 }}
                        transition
                        className="origin-top transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
                      >
                        <div className=" space-y-5">
                          <p className="text-p">
                            Every country has different rules about what kinds
                            of education can take the place of traditional
                            classroom learning. So, we suggest that parents
                            check if homeschooling is allowed in the country
                            where they plan to live or work before applying to
                            our school. Please also remember that our lessons
                            follow the standards of the English education
                            system, and our staff are experts only in this
                            system.
                          </p>
                        </div>
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </div>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="w-full border-b border-gray-300">
            {({ open }) => (
              <>
                <DisclosureButton className="w-full pb-2 flex items-center justify-between focus:outline-none">
                  <h3 className=" ">
                    Are lessons taught in any other languages, other than
                    English?
                  </h3>
                  {open ? (
                    <MinusIcon className="h-8 w-8" aria-hidden="true" />
                  ) : (
                    <PlusIcon className="h-8 w-8" aria-hidden="true" />
                  )}
                </DisclosureButton>
                <div className="overflow-hidden py-2">
                  <AnimatePresence>
                    {open && (
                      <DisclosurePanel
                        static
                        as={motion.div}
                        initial={{ opacity: 0, y: -24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -24 }}
                        transition
                        className="origin-top transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
                      >
                        <div className=" space-y-5">
                          <p className="text-p">
                            Currently, all our subjects are taught in English,
                            in line with a British curriculum. We do, however,
                            teach several foreign languages, including French,
                            German, and Chinese, where teachers and students
                            frequently engage in conversations in the language
                            of study.
                          </p>
                        </div>
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </div>
              </>
            )}
          </Disclosure>
        </div>
      </div>

      <div className="mt-20 lg:container">
      <ContactUsSection />
        {/* <div className=" bg-[#003372] lg:rounded-xl mt-8 flex flex-col md:flex-row">
          <div className="py-12 px-8 lg:px-16 flex flex-col gap-10">
            <h2 className="text-[62px] text-white/90 tracking-tighter  leading-[60px]">
              Looking to learn more?
            </h2>

            <p className="text-white text-p leading-9">
              To find out more about our fresh approach to global learning, talk
              to us today
            </p>

            <div className="flex items-center flex-wrap gap-5">
              <EnrollButton />

              <ContactButton textColor="text-white" />
            </div>
          </div>
          <Image
            width={1000}
            height={1000}
            className="object-contain md:w-1/2 self-end"
            src="/Brochure.webp"
            alt=""
          />
        </div> */}
      </div>


      <div className="mt-20 container">
        <h3 className="text-[#003372]   ">Partnered by</h3>
        <div className="h-[2px] my-10 w-full bg-blue-900"></div>
        <Carousel />
      </div>
    </div>
  );
}
