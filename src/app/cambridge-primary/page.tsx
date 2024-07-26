"use client";
import React from "react";
import Image from "next/image";
import ContactButton from "../components/buttons/ContactButton";
import EnrollButton from "../components/buttons/EnrollButton";
import { keyStages } from "../data/keystage";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import ContactUsSection from "../components/sections/ContactUsSection";
interface pageProps { }

const page: React.FC<pageProps> = ({ }) => {

  const course = keyStages.find((course) => course.name === "Primary School")

  if (course) {
    return (
      <div className="py-14 lg:py-24 animate-fade-in">
        <div className="gap-10 container sm:gap-14 flex-col flex justify-center items-center lg:flex lg:flex-row">
          <div className="flex flex-col gap-5">
            <h4 className="  text-blue-600">Ages from 7 - 11</h4>
            <h1 className=" text-blue-900">Cambridge Primary</h1>
            <p className=" ">
              Discover IWS Online School, your gateway to a comprehensive
              Cambridge Primary International Curriculum tailored for primary
              students. Our accredited UK-based virtual school is currently
              undergoing the authorization process with Cambridge Assessment
              International Education.
            </p>

            <div className="flex flex-wrap gap-5">
              <EnrollButton />
              <ContactButton />
            </div>
          </div>
          <Image
            width={1000}
            height={1000}
            className="max-w-lg w-full lg:w-auto object-contain"
            src="/Hero2.webp"
            alt=""
          />
        </div>

        <div className="pt-20 container">
          <div className="flex flex-col gap-6">
            <h2 className=" text-center ">Explore Our Primary Subjects</h2>
            <p className=" text-center">
              Maximise your academic potential with IWS Online School. Explore our
              Primary subjects here and combine current studies with IWS courses
              for exam preparation or further study.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {course.includedSubjects.map((course, index) => (
              <Link
                key={index}
                href={course.url}
                className="flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 border hover:shadow-custom-color"
              >
                <div className="bg-white border-r">
                  <Image
                    width={1000}
                    height={1000}
                    className="max-w-20"
                    src={course.icon}
                    alt={course.subject_name}
                  />
                </div>
                <div className="bg-white flex flex-1 flex-col justify-center pl-5 gap-1">
                  <h4 className="  text-blue-900 text-base font-semibold leading-1">
                    {course.subject_name}
                  </h4>

                  <p className=" text-sm  text-blue-600">Learn more</p>
                </div>
              </Link>
            ))}
            {course.additionalSubjects.map((course, index) => (
              <Link
                key={index}
                href={course.url}
                className="flex rounded-lg overflow-hidden cursor-pointer transition-shadow duration-300 border hover:shadow-custom-color"
              >
                <div className="bg-white border-r">
                  <Image
                    width={1000}
                    height={1000}
                    className="max-w-20"
                    src={course.icon}
                    alt={course.subject_name}
                  />
                </div>
                <div className="bg-white flex flex-1 flex-col justify-center pl-5 gap-1">
                  <h4 className="  text-blue-900 text-base font-semibold leading-1">
                    {course.subject_name}
                  </h4>

                  <p className=" text-sm  text-blue-600">Learn more</p>
                </div>
              </Link>
            ))}

          </div>
        </div>


        <div className="pt-20 container">
          <div className="relative w-full bg-blue-600 rounded-2xl">
            <div className="absolute left-1/2 sm:top-1/2 sm:left-0 transform -translate-x-1/2 rounded-full -translate-y-1/2 w-16 h-16 bg-white" />
            <div className="absolute left-1/2 sm:left-auto sm:top-1/2 sm:right-0 sm:-translate-y-1/2 sm:translate-x-1/2 bottom-0 transform -translate-x-1/2 rounded-full translate-y-1/2 w-16 h-16 bg-white" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 px-5 sm:px-10 py-14 sm:py-8">
              <div className="flex flex-col md:flex-row col-span-2 gap-10">
                <div className="w-full flex gap-3">
                  <div className="border-2 flex items-center justify-center border-white min-w-10 max-w-10 min-h-10 max-h-10 w-10 h-10 rounded-full">
                    <h3 className="text-white">1</h3>
                  </div>
                  <div className="space-y-3 mt-2">
                    <h3 className="text-white">Select core subjects</h3>
                    <p className="text-white leading-tight">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse culpa, minima, nostrum obcaecati qui commodi, quas quaerat quam enim velit </p>
                  </div>
                </div>
                <div className="w-full flex gap-3 col-span-1">
                  <div className="border-2 flex items-center justify-center border-white min-w-10 max-w-10 min-h-10 max-h-10 w-10 h-10 rounded-full">
                    <h3 className="text-white">1</h3>
                  </div>
                  <div className="space-y-3 mt-2">
                    <h3 className="text-white">Select core subjects</h3>
                    <p className="text-white leading-tight">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse culpa, minima, nostrum obcaecati qui commodi, quas quaerat quam enim velit </p>
                  </div>
                </div>

              </div>
              <div className="w-full border-t-2 sm:border-l-2 sm:border-t-0 border-dashed flex flex-col gap-5 py-5 items-center justify-center">
                <div className="flex gap-1 items-end sm:flex-col lg:flex-row">
                  <h2 className="text-white">$7500</h2>
                  <h4 className="text-white">/year</h4>
                </div>
                <button className="bg-white rounded-full px-6 py-2">
                  Enroll now
                </button>

              </div>
            </div>
          </div>
        </div>




        <div className="pt-20 flex flex-col gap-14">
          <div className="container flex flex-col gap-5">
            <h2 className="text-center">
              {
                "Empowering Young Minds: IWS Online School's Comprehensive Primary Curriculum"
              }
            </h2>
          </div>

          <div className="bg-white lg:container">
            <div className="bg-indigo-50 grid grid-cols-1 lg:grid-cols-5 lg:gap-10 ">
              <div className="lg:col-span-2">
                <Image
                  width={1000}
                  height={1000}
                  className="h-full object-cover"
                  src="/igcse/Student_1-1.jpg"
                  alt="igcse"
                />
              </div>
              <div className="container lg:col-span-3 flex flex-col gap-5 py-10 justify-center">
                <h3 className="  text-blue-900">
                  Accessible Quality Education for Every Child
                </h3>
                <p className=" text-blue-600">
                  Cambridge Primary at IWS Online School
                </p>
                <p className=" text-gray-800 pt-4">
                  IWS Online School is committed to providing high-quality primary
                  education that is accessible and affordable for all families. By
                  offering various budget-friendly options and eliminating
                  commuting costs through online learning, we ensure that quality
                  education is a right for every child.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-20">
          <div className="bg-white lg:container">
            <div className="bg-green-50 flex flex-col lg:flex-row-reverse lg:gap-10 ">
              <div className=" flex">
                <Image
                  width={1000}
                  height={1000}
                  className="h-full max-h-96 lg:max-h-full lg:h-full w-full object-cover lg:max-w-[900px]"
                  src="/igcse/Student_2-1.jpg"
                  alt="igcse"
                />
              </div>
              <div className="container flex flex-col gap-5 py-10 justify-center">
                <h3 className="  ">
                  Fostering Inquisitive, Globally-Aware Citizens
                </h3>
                <p className=" text-green-600">
                  Comprehensive Online A Level Support at IWS Online School
                </p>
                <p className=" text-gray-800">
                  Our holistic curriculum, featuring subjects like Mathematics,
                  English, Science, and more, is designed to produce well-rounded
                  global citizens. We prioritise learning experiences over grades,
                  emphasising the application of knowledge in real-world
                  scenarios. Our dedicated teachers empower students to excel
                  academically and prepare them for future educational challenges.
                </p>
              </div>
            </div>
          </div>
        </div>

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
                            <p className="">
                              Our British online school revolutionises remote
                              education. With an easy-to-use platform, flexible
                              academic programmes, and adaptable schedules, we
                              provide a learning experience that can often exceed
                              that of traditional schools.
                            </p>
                            <p className="">
                              Globally, schools are embracing technology to meet
                              evolving educational standards. It is anticipated
                              that within the next few decades, online education
                              will become commonplace. At IWS, we lead by
                              prioritising online teaching.
                            </p>
                            <p className="">
                              Our teachers are adept at delivering Live Online
                              Lessons with great enthusiasm and proficiency. We
                              also employ sophisticated and reliable technology to
                              ensure our virtual classrooms meet every need of our
                              pupils, including round-the-clock access to recorded
                              lessons to support independent study.
                            </p>
                            <p className="">
                              In this respect, we are advancing faster than many
                              educational institutions that are just beginning to
                              embark on this digital transition.
                            </p>
                            <p className="">
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
                    <h3 className=" text-left">Are you accredited?</h3>
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
                            <p className="">
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
          </div>
        </div>

        <div className="pt-20">
          <ContactUsSection />
        </div>

        <div className="pt-20 container flex flex-col gap-4">
          <h2 className="text-center   ">
            Cambridge Primary Course Tuition Fees
          </h2>
          <p className="text-center ">
            Our initial meeting is free with no obligations. If you decide to
            enroll, our flexible fee structure includes a £200 one-time fee
            covering comprehensive tests to tailor your child’s education. For
            pricing details, visit our tuition fees page.
          </p>

          <div className="mt-6">
            <h3 className="border-b   text-blue-900 border-blue-900 pb-3">
              Accredited by
            </h3>

            <div className="grid grid-cols-1 gap-10 mt-5 sm:grid-cols-2 md:grid-cols-3 justify-center items-center">
              <Image
                width={1000}
                height={1000}
                className="lg:max-w-60"
                src="/accredited/889-1536x670.webp"
                alt=""
              />
              <Image
                width={1000}
                height={1000}
                className="lg:max-w-60"
                src="/accredited/Asset-18@3x.webp"
                alt=""
              />
              <Image
                width={1000}
                height={1000}
                className="lg:max-w-60"
                src="/accredited/COBISLogo.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

};

export default page;
