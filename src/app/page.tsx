"use client";
import { ArrowRightCircleIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import Accordion from "./components/ui/Accordion";
import Carousel from "./components/ui/Carousel";
import Image from "next/image";
import Link from "next/link";
import EnrollButton from "./components/buttons/EnrollButton";
import ContactButton from "./components/buttons/ContactButton";
import CardChildren from "./components/card/CardChildren";

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion'
export default function Home() {
  return (
    <div className="py-14 lg:py-24 animate-fade-in">
      <div className="gap-10 container sm:gap-14 flex-col flex justify-center items-center lg:flex lg:flex-row">
        <div className="gap-10 sm:gap-14 flex-col flex justify-center">
          <div className="flex">
            <div className="relative">
              <img
                className="w-[400px] object-contain min-w-[250px]"
                src="/Tag.webp"
                alt="Tag photo"
              />
            </div>
          </div>

          <h1 className=" text-gray-900 text-[62px] font-bold">
            Accredited, Holistic Online Schooling
          </h1>

          <p className="leading-[26px] text-gray-900 font-semibold text-p">
            IWS Online School – Your compass in the digital realm of learning.
            Discover new horizons, Create lasting memories, and Lead the future
            with our live lessons.
          </p>

          <div className="flex items-center flex-wrap gap-5">
            <EnrollButton />

            <ContactButton />
          </div>
        </div>

        <Image
          width={1000}
          height={1000}
          className="max-w-lg hidden xs:flex w-3/4 lg:w-[450px] xl:w-auto object-contain"
          src="/Hero.webp"
          alt="Hero Image width={1000} height={1000}"
        />
      </div>

      <div className="pt-20 container">
        <h2 className="text-gray-900 text-h2 text-center font-bold">
          The right study programme for you
        </h2>

        <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-4 xl:gap-7 gap-y-14">
          <Link
            href={"/cambridge-primary"}
            className="relative cursor-pointer hover:-translate-y-2 transition-transform duration-300 bg-sky-100 flex flex-col justify-between rounded-xl"
          >
            <div className="relative">
              <div className="bg-white absolute bottom-4 left-4 px-8 py-2 rounded">
                <h4 className="text-h4 font-semibold text-gray-900">
                  Ages 7-11
                </h4>
              </div>
              <Image
                width={1000}
                height={1000}
                className="max-w-lg w-11/12 object-contain -mt-14 self-center"
                src="/programm/Primary@2x.webp"
                alt="Hero Image width={1000} height={1000}"
              />
            </div>

            <div className="bg-white flex-1 flex gap-10 justify-between flex-col m-1 p-4 rounded-b-xl">
              <div className="flex flex-col gap-4">
                <h3 className="text-[35px] text-gray-900 font-bold">
                  Primary School
                </h3>
                <p className="text-p font-semibold">
                  A strong foundation and a love for learning for your child.
                </p>
              </div>

              <div className="flex bg-gray-100 rounded-full px-5 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 justify-between items-center">
                <p className="text-p tracking-wide font-semibold">
                  Learn more
                </p>
                <ArrowRightCircleIcon
                  className="h-10 w-10 -rotate-45"
                  aria-hidden="true"
                />
              </div>
            </div>
          </Link>

          <Link
            href={"/cambridge-secondary"}
            className="relative cursor-pointer hover:-translate-y-2 transition-transform duration-300 bg-sky-100 flex flex-col justify-between rounded-xl"
          >
            <div className="relative">
              <div className="bg-white absolute bottom-4 left-4 px-8 py-2 rounded">
                <h4 className="text-h4 font-semibold text-gray-900">
                  Ages 11-14
                </h4>
              </div>
              <Image
                width={1000}
                height={1000}
                className="max-w-lg w-11/12 object-contain -mt-14 self-center"
                src="/programm/Middle@2x.webp"
                alt="Hero Image width={1000} height={1000}"
              />
            </div>

            <div className="bg-white flex-1 flex gap-10 justify-between flex-col m-1 p-4 rounded-b-xl">
              <div className="flex flex-col gap-4">
                <h3 className="text-[35px] text-gray-900 font-bold">
                  Middle School
                </h3>
                <p className="text-p font-semibold">
                  Foster your child’s growth and academic success.
                </p>
              </div>

              <div className="flex  bg-gray-100 rounded-full px-5 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 justify-between items-center">
                <p className="text-p tracking-wide font-semibold">
                  Learn more
                </p>
                <ArrowRightCircleIcon
                  className="h-10 w-10 -rotate-45"
                  aria-hidden="true"
                />
              </div>
            </div>
          </Link>

          <Link
            href={"/cambridge-igcse"}
            className="relative cursor-pointer hover:-translate-y-2 transition-transform duration-300 bg-sky-100 flex flex-col justify-between rounded-xl"
          >
            <div className="relative">
              <div className="bg-white absolute bottom-4 left-4 px-8 py-2 rounded">
                <h4 className="text-h4 font-semibold text-gray-900">
                  Ages 14-16
                </h4>
              </div>
              <Image
                width={1000}
                height={1000}
                className="max-w-lg w-11/12 object-contain -mt-14 self-center"
                src="/programm/IGCSE@2x.webp"
                alt="Hero Image width={1000} height={1000}"
              />
            </div>

            <div className="bg-white flex-1 flex gap-10 justify-between flex-col m-1 p-4 rounded-b-xl">
              <div className="flex flex-col gap-4">
                <h3 className="text-[35px] text-gray-900 font-bold">I/GCSE</h3>
                <p className="text-p font-semibold">
                  Unlock your teen’s full potential and prepare for future
                  success.
                </p>
              </div>

              <div className="flex bg-gray-100 rounded-full px-5 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 justify-between items-center">
                <p className="text-p tracking-wide font-semibold">
                  Learn more
                </p>
                <ArrowRightCircleIcon
                  className="h-10 w-10 -rotate-45"
                  aria-hidden="true"
                />
              </div>
            </div>
          </Link>

          <Link
            href={"/cambridge-a-level"}
            className="relative cursor-pointer hover:-translate-y-2 transition-transform duration-300 bg-sky-100 flex flex-col justify-between rounded-xl"
          >
            <div className="relative">
              <div className="bg-white absolute bottom-4 left-4 px-8 py-2 rounded">
                <h4 className="text-h4 font-semibold text-gray-900">
                  Ages 16-18
                </h4>
              </div>
              <Image
                width={1000}
                height={1000}
                className="max-w-lg w-11/12 object-contain -mt-14 self-center"
                src="/programm/A-Level@2x.webp"
                alt="Hero Image width={1000} height={1000}"
              />
            </div>

            <div className="bg-white flex flex-1 gap-10 justify-between flex-col m-1 p-4 rounded-b-xl">
              <div className="flex flex-col gap-4">
                <h3 className="text-[35px] text-gray-900 font-bold">A Level</h3>
                <p className="text-p font-semibold">
                  Prepare teens for university with advanced studies.
                </p>
              </div>

              <div className="flex bg-gray-100 rounded-full px-5 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 justify-between items-center">
                <p className="text-p tracking-wide font-semibold">
                  Learn more
                </p>
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
        <h2 className="text-gray-900 text-h2 text-center font-bold">
          What awaits you at IWS Online School?
        </h2>

        <div className="grid grid-cols-6 pt-8 gap-8 sm:gap-10 sm:pt-12 md:gap-8 lg:gap-6">
          <div className="overflow-hidden h-full justify-between gap-10 flex flex-col px-6 py-8 rounded-xl col-span-6 md:col-span-2 bg-green-100">
            <h2 className="text-h2 font-bold text-gray-900 tracking-wide">
              Visionary Educators of IWS Online School
            </h2>
            <p className="text-p leading-6 text-gray-900 font-semibold">
              Explore the difference our passionate and committed teachers make
              in every student’s learning journey.
            </p>
          </div>

          <div className="overflow-hidden gap-10 md:gap-0 flex flex-col md:flex-row-reverse md:items-center rounded-xl col-span-6 md:col-span-4 bg-sky-100">
            <Image
              width={1000}
              height={1000}
              className="object-contain self-center md:w-3/5 max-w-sm"
              src="/await/2-1-1024x589.webp"
              alt="Hero Image width={1000} height={1000}"
            />

            <div className="flex flex-col gap-6 h-full justify-between px-6 py-8">
              <h2 className="text-h2 font-bold text-gray-900 tracking-wide">
                Our teachers are always in touch
              </h2>
              <p className="text-p leading-6 text-gray-900 font-semibold">
                Our teachers and mentors are ready to help with lesson queries
                and platform guidance.
              </p>
            </div>
          </div>

          <div className="relative gap-10 flex flex-col px-6 py-8 rounded-xl col-span-6 md:col-span-2 bg-violet-100">
            <Image
              width={1000}
              height={1000}
              className="absolute -top-10 w-56 md:w-28 md:right-0 object-contain z-30"
              src="/await/3.webp"
              alt="Hero Image width={1000} height={1000}"
            />

            <div className="flex flex-col gap-6 h-full justify-between pt-44 md:pt-20 lg:pt-0">
              <h2 className="text-h2 font-bold text-gray-900 tracking-wide xl:w-[250px]">
                Individual Programmes
              </h2>
              <p className="text-p leading-6 text-gray-900 font-semibold">
                Every child is unique. Our personalized assessments and Success
                Coaching ensure tailored educational paths for every student.
              </p>
            </div>
          </div>

          <div className="relative gap-10 flex flex-col px-6 py-8 rounded-xl col-span-6 md:col-span-2 bg-pink-100">
            <Image
              width={1000}
              height={1000}
              className="absolute -top-10 w-56 md:w-28 md:right-0 object-contain z-30"
              src="/await/4.webp"
              alt="Hero Image width={1000} height={1000}"
            />

            <div className="flex flex-col gap-6 h-full justify-between pt-44 md:pt-20 lg:pt-0">
              <h2 className="text-h2 font-bold text-gray-900 tracking-wide xl:w-[250px]">
                Dynamic Live Lessons
              </h2>
              <p className="text-p leading-6 text-gray-900 font-semibold">
                Experience structured sessions for active participation,
                collaboration, and growth in academics and personal development.
              </p>
            </div>
          </div>

          <div className="relative gap-10 flex flex-col px-6 py-8 rounded-xl col-span-6 md:col-span-2 bg-amber-100">
            <Image
              width={1000}
              height={1000}
              className="absolute -top-10 w-56 md:w-28 md:right-0 object-contain z-30"
              src="/await/5.webp"
              alt="Hero Image width={1000} height={1000}"
            />

            <div className="flex flex-col h-full justify-between gap-6 pt-44 md:pt-20 lg:pt-0">
              <h2 className="text-h2 font-bold text-gray-900 tracking-wide xl:w-[250px]">
                Accredited Curriculum
              </h2>
              <p className="text-p leading-6 text-gray-900 font-semibold">
                We prioritize holistic education, combining academic excellence
                with skill development for a comprehensive learning experience.
              </p>
            </div>
          </div>

          <div className="overflow-hidden gap-10 md:gap-0 flex flex-col md:flex-row-reverse md:items-center rounded-xl col-span-6  bg-sky-100">
            <Image
              width={1000}
              height={1000}
              className="object-contain self-center md:w-1/2"
              src="/await/6-1024x399.webp"
              alt="Hero Image width={1000} height={1000}"
            />

            <div className="flex flex-col gap-6 h-full justify-between px-6 py-8 md:w-1/2">
              <h2 className="text-h2 font-bold text-gray-900 tracking-wide xl:w-[250px]">
                Taking care of parents
              </h2>
              <p className="text-p leading-6 text-gray-900 font-semibold">
                Our support specialists are always ready to assist, and our
                bi-weekly parent assemblies offer a platform to discuss any
                topic and connect with like-minded families worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20 container">
        <h2 className="text-gray-900 text-h2 text-center font-bold">
          Who can benefit from our school?
        </h2>
        <div className="pt-8 sm:pt-12">
          <div className="flex flex-wrap gap-5 justify-center ">
            <div className="group relative w-[310px] h-[530px] bg-[#F4F5F8] cursor-pointer hover:bg-[#EBF0FE] rounded-xl overflow-hidden transition duration-500">
              <h3 className="text-h3 container pt-8 leading-tight font-bold">
                For those who are not satisfied with a regular school
              </h3>
              <div className="transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0 absolute bottom-0">
                <Image
                  width={1000}
                  height={1000}
                  className=" object-cover"
                  src="/benefit/4_1.webp"
                  alt=""
                />
              </div>

              <div className="absolute bottom-0 inset-0 flex flex-col justify-end px-3 xs:px-9 py-4 xs:py-8 gap-3 xs:gap-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                <div className="flex flex-col gap-2 xs:gap-3">
                  <p className="text-gray-900 text-p font-semibold">
                    Is this about you?
                  </p>
                  <ul className="list-disc gap-2 xs:gap-3 flex flex-col ml-10">
                    <li className="text-gray-900 text-p font-normal">
                      Feeling uneasy in your current school environment?
                    </li>
                    <li className="text-gray-900 text-p font-normal">
                      Facing ongoing conflicts with peers?
                    </li>
                    <li className="text-gray-900 text-p font-normal">
                      Dissatisfied with nearby education options?
                    </li>
                    <li className="text-gray-900 text-p font-normal">
                      Unable to attend traditional schools due to personal
                      beliefs?
                    </li>
                  </ul>
                  <p className="text-gray-900 text-p font-semibold">
                    Then our school is right for you!
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative w-[310px] h-[530px] bg-[#F4F5F8] cursor-pointer hover:bg-[#EBF0FE] rounded-xl overflow-hidden transition duration-500">
              <h3 className="text-h3 container pt-8 leading-tight font-bold">
                For students who often miss school.
              </h3>
              <div className="transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0 absolute bottom-0">
                <Image
                  width={1000}
                  height={1000}
                  className=" object-cover"
                  src="/benefit/4_2.webp"
                  alt=""
                />
              </div>

              <div className="absolute bottom-0 inset-0 flex flex-col justify-end px-3 xs:px-9 py-4 xs:py-8 gap-3 xs:gap-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                <div className="flex flex-col gap-2 xs:gap-3">
                  <p className="text-gray-900 text-p font-semibold">
                    Does this sound like you?
                  </p>
                  <ul className="list-disc gap-2 xs:gap-3 flex flex-col ml-10">
                    <li className="text-gray-900 text-p font-normal">
                      Struggling to balance school with extracurricular
                      activities?
                    </li>
                    <li className="text-gray-900 text-p font-normal">
                      Feeling overwhelmed as difficulties in certain subjects
                      escalate?
                    </li>
                    <li className="text-gray-900 text-p font-normal">
                      Frequently missing school due to illness?
                    </li>
                    <li className="text-gray-900 text-p font-normal">
                      Finding some subjects challenging to understand?
                    </li>
                  </ul>
                  <p className="text-gray-900 text-p font-semibold">
                    Then our school is right for you!
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative w-[310px] h-[530px] bg-[#F4F5F8] cursor-pointer hover:bg-[#EBF0FE] rounded-xl overflow-hidden transition duration-500">
              <h3 className="text-h3 container pt-8 leading-tight font-bold">
                For those who live abroad or the family travels a lot
              </h3>
              <div className="transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0 absolute bottom-0">
                <Image
                  width={1000}
                  height={1000}
                  className=" object-cover"
                  src="/benefit/4_3.webp"
                  alt=""
                />
              </div>

              <div className="absolute bottom-0 inset-0 flex flex-col justify-end px-3 xs:px-9 py-4 xs:py-8 gap-3 xs:gap-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                <div className="flex flex-col gap-2 xs:gap-3">
                  <p className="text-gray-900 text-p font-semibold">
                    Is this about you?
                  </p>
                  <ul className="list-disc gap-2 xs:gap-3 flex flex-col ml-10">
                    <li className="text-gray-900 text-p font-normal">
                      Frequent relocation due to parental work or lifestyle
                      choices.
                    </li>
                    <li className="text-gray-900 text-p font-normal">
                      Desire for continuity in education despite changing
                      locations.
                    </li>
                    <li className="text-gray-900 text-p font-normal">
                      Need for a supportive learning environment that transcends
                      geographical boundaries.
                    </li>
                  </ul>
                  <p className="text-gray-900 text-p font-semibold">
                    Then our school is right for you!
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative w-[310px] h-[530px] bg-[#F4F5F8] cursor-pointer hover:bg-[#EBF0FE] rounded-xl overflow-hidden transition duration-500">
              <h3 className="text-h3 container pt-8 leading-tight font-bold">
                For students preparing to enter a prestigious university
              </h3>
              <div className="transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0 absolute bottom-0">
                <Image
                  width={1000}
                  height={1000}
                  className=" object-cover"
                  src="/benefit/4_4.webp"
                  alt=""
                />
              </div>

              <div className="absolute bottom-0 inset-0 flex flex-col justify-end px-3 xs:px-9 py-4 xs:py-8 gap-3 xs:gap-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                <div className="flex flex-col gap-2 xs:gap-3">
                  <p className="text-gray-900 text-p font-semibold">
                    Is this about you?
                  </p>
                  <ul className="list-disc gap-2 xs:gap-3 flex flex-col ml-10">
                    <li className="text-gray-900 text-p font-normal">
                      Aiming for top-tier university admissions.
                    </li>
                    <li className="text-gray-900 text-p font-normal">
                      Seeking academic rigor and personalized exam prep.
                    </li>
                    <li className="text-gray-900 text-p font-normal">
                      Craving extracurricular opportunities and leadership
                      development.
                    </li>
                    <li className="text-gray-900 text-p font-normal">
                      Needing guidance for application processes.
                    </li>
                  </ul>
                  <p className="text-gray-900 text-p font-semibold">
                    Then our school is right for you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20 container">
        <h2 className="text-gray-900 text-h2 text-center font-bold">
          Choose your education model
        </h2>
        <div className="pt-8 sm:pt-12 grid grid-cols-1 lg:grid-cols-3 gap-14 lg:gap-5">
          <div className="relative gap-10 flex flex-col px-6 py-8 rounded-xl bg-gray-50">
            {/* <Image
              width={1000}
              height={1000}
              className="absolute -top-10 w-56 md:w-36 md:right-0 object-contain z-30"
              src="/await/3.webp"
              alt="Hero Image width={1000} height={1000}"
            /> */}
            <div className="flex h-full justify-between flex-col gap-14">
              <div className="flex flex-col gap-8 pt-44 md:pt-20 lg:pt-0">
                <h3 className="text-h3 font-bold text-gray-900 tracking-wide lg:w-1/2 lg:text-4xl">
                  Hybrid Model
                </h3>
                <p className="text-p leading-6 text-gray-900 font-semibold">
                  Blend online learning with hands-on experience.
                </p>
                <p className="text-p leading-6 text-gray-900 font-semibold">
                  From September to June, students join live online classes,
                  then attend a 4-week summer camp in the UK.
                </p>
              </div>
              <div className="flex bg-white shadow-sm rounded-full px-6 py-1 cursor-pointer transition-colors duration-300 hover:bg-gray-200 justify-between items-center">
                <p className="text-p tracking-wide font-semibold">
                  Learn more
                </p>
                <ArrowRightCircleIcon
                  className="h-12 w-12 -rotate-45"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div className="relative gap-10 flex flex-col px-6 py-8 rounded-xl bg-gray-50">
            {/* <Image
              width={1000}
              height={1000}
              className="absolute -top-10 w-56 md:w-36 md:right-0 object-contain z-30"
              src="/await/3.webp"
              alt="Hero Image width={1000} height={1000}"
            /> */}
            <div className="flex h-full justify-between flex-col gap-14">
              <div className="flex flex-col gap-8 pt-44 md:pt-20 lg:pt-0">
                <h3 className="text-h3 font-bold text-gray-900 tracking-wide lg:w-1/2 lg:text-4xl">
                  Fully Online
                </h3>
                <p className="text-p leading-6 text-gray-900 font-semibold">
                  From September to June with classes from 09:00 to 15:00 UK
                  time.
                </p>
                <p className="text-p leading-6 text-gray-900 font-semibold">
                  {
                    "It's structured, flexible, and taught by qualified teachers to keep your child engaged and progressing."
                  }
                </p>
              </div>
              <div className="flex bg-white shadow-sm rounded-full px-6 py-1 cursor-pointer transition-colors duration-300 hover:bg-gray-200 justify-between items-center">
                <p className="text-p tracking-wide font-semibold">
                  Learn more
                </p>
                <ArrowRightCircleIcon
                  className="h-12 w-12 -rotate-45"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div className="relative gap-10 flex flex-col px-6 py-8 rounded-xl bg-gray-50">
            {/* <Image
              width={1000}
              height={1000}
              className="absolute -top-10 w-56 md:w-36 md:right-0 object-contain z-30"
              src="/await/3.webp"
              alt="Hero Image width={1000} height={1000}"
            /> */}
            <div className="flex h-full justify-between flex-col gap-14">
              <div className="flex flex-col gap-8 pt-44 md:pt-20 lg:pt-0">
                <h3 className="text-h3 font-bold text-gray-900 tracking-wide lg:w-1/2 lg:text-4xl">
                  Self Paced
                </h3>
                <p className="text-p leading-6 text-gray-900 font-semibold">
                  Our Flexible Learning Model offers students the freedom to
                  learn at their own pace and schedule.
                </p>
                <p className="text-p leading-6 text-gray-900 font-semibold">
                  This is ideal for independent learners or those with time
                  constraints.
                </p>
              </div>
              <div className="flex bg-white shadow-sm rounded-full px-6 py-1 cursor-pointer transition-colors duration-300 hover:bg-gray-200 justify-between items-center">
                <p className="text-p tracking-wide font-semibold">
                  Learn more
                </p>
                <ArrowRightCircleIcon
                  className="h-12 w-12 -rotate-45"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20 container">
        <h2 className="text-gray-900 text-h2 text-center font-bold">
          FAQs
        </h2>
        <div className="pt-8 sm:pt-12 flex flex-col gap-8">
          <Disclosure as="div" className="w-full border-b border-gray-300">
            {({ open }) => (
              <>
                <DisclosureButton className="w-full pb-2 flex items-center justify-between focus:outline-none">
                  <h3 className="text-h3 font-bold">
                    Why us?
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
                          <p className="text-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, autem tempore delectus accusantium dolor et numquam necessitatibus odit veritatis fugit earum, doloribus soluta quae aspernatur recusandae eos! Officia, harum voluptatum.</p>
                          <p className="text-p">
                            drgdfgdfg
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
                  <h3 className="text-h3 font-bold">
                    Why us?
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
                          <p className="text-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, autem tempore delectus accusantium dolor et numquam necessitatibus odit veritatis fugit earum, doloribus soluta quae aspernatur recusandae eos! Officia, harum voluptatum.</p>
                          <p className="text-p">
                            drgdfgdfg
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

        <div className=" bg-blue-900 lg:rounded-xl mt-8 flex flex-col md:flex-row">
          <div className="py-12 px-8 lg:px-16 flex flex-col gap-10">
            <h2 className="text-[62px] text-white/90 tracking-tighter font-bold leading-[60px]">
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
            alt="Hero Image width={1000} height={1000}"
          />
        </div>
      </div>

      <div className="mt-20 container">
        <h3 className="text-blue-900 font-semibold text-h3 ">Partnered by</h3>
        <div className="h-[2px] my-10 w-full bg-blue-900"></div>
        <Carousel />
      </div>
    </div>
  );
}
