"use client";
import React from "react";
import Image from "next/image";
import { keyStages } from "../data/keystage";
import EnrollButton from "../components/buttons/EnrollButton";
import ContactButton from "../components/buttons/ContactButton";
import {
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/24/solid";
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
            <h4 className="  text-blue-600">Ages from 16 - 19</h4>
            <h1 className="  text-blue-900">Cambridge Online A Level Course</h1>
            <p className="  ">
              A Levels at IWS Online School hold global recognition from esteemed
              universities and leading employers, significantly enhancing our
              students’ prospects of gaining admission to their desired
              institutions and securing positions in top organisations. We deliver
              top-quality A Level Online teaching to successfully prepare students
              to achieve their academic goals.
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
            <h2 className=" text-center ">Explore Our A Level Subjects</h2>
            <p className="  text-center">
              Maximise your academic potential with IWS Online School. Explore our
              A Level subjects here and combine current studies with IWS courses
              for exam preparation or distance learning.
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

        <div className="pt-20 flex flex-col gap-14">
          <div className="container flex flex-col gap-5">
            <h2 className="text-center">
              Supporting the Transition From IGCSE to A Levels and Helping
              Students Succeed
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
                  Elevate Your Distance Learning Journey
                </h3>
                <p className="  text-blue-600">
                  A Level 6th Form Excellence at IWS Online School
                </p>
                <p className="  text-gray-800 pt-4">
                  Experience a seamless transition from I/GCSE to A Level with our
                  flexible online studies. Our dedicated teachers foster
                  independent learning in small class settings, ensuring every
                  student reaches their full potential.
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
                <h3 className="  ">Empowering Your Future</h3>
                <p className=" text-green-600">
                  Comprehensive Online A Level Support at IWS Online School
                </p>
                <p className="  text-gray-800">
                  Benefit from 24/7 access to resources for A Level revision and
                  exam preparations. Our recorded classes allow for personalised
                  pacing, while after-school clubs offer opportunities for social
                  and intellectual growth.
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
                            <p className=" ">
                              Our British online school revolutionises remote
                              education. With an easy-to-use platform, flexible
                              academic programmes, and adaptable schedules, we
                              provide a learning experience that can often exceed
                              that of traditional schools.
                            </p>
                            <p className=" ">
                              Globally, schools are embracing technology to meet
                              evolving educational standards. It is anticipated
                              that within the next few decades, online education
                              will become commonplace. At IWS, we lead by
                              prioritising online teaching.
                            </p>
                            <p className=" ">
                              Our teachers are adept at delivering Live Online
                              Lessons with great enthusiasm and proficiency. We
                              also employ sophisticated and reliable technology to
                              ensure our virtual classrooms meet every need of our
                              pupils, including round-the-clock access to recorded
                              lessons to support independent study.
                            </p>
                            <p className=" ">
                              In this respect, we are advancing faster than many
                              educational institutions that are just beginning to
                              embark on this digital transition.
                            </p>
                            <p className=" ">
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
                            <p className=" ">
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
          <h2 className="text-center">Cambridge A Level Course Tuition Fees</h2>
          <p className="text-center  ">
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
