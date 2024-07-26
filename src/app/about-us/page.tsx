"use client";
import React from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import TabSection from "../components/ui/TabSection";
interface pageProps {}

const page: React.FC<pageProps> = ({}) => {
  return (
    <div className=" container pt-3 pb-24 animate-fade-in">
      <div className="pt-16 pb-14 bg-asset-3 px-6 bg-cover bg-no-repeat bg-center bg-blue-500 flex items-center justify-center bg-blend-soft-light overflow-hidden rounded-[40px] w-full ">
        <div className="flex flex-col justify-center items-center max-w-[1000px]">
          <h1 className="text-center text-white ">
            We are a revolution in learning.
          </h1>
          <div className="pt-8">
            <p className="text-center text-white">
              IWS is a Cambridge Assessment International accredited online
              school. Our mission is to ofter a globally esteemed Cambridge
              education, making it accessible to remote learners with
              exceptional academic potential worldwide.
            </p>
          </div>
          <div className="pt-6">
            <p className="text-center text-white">
              Thereby creating a global community of ambitious learners who wish
              to achieve their full potential, both inside and outside of the
              classroom.
            </p>
          </div>

          <div className="pt-14">
            <button className="bg-white px-6 py-2 rounded-lg cursor-pointer text-blue-600 hover:bg-gray-100 ">
              Join our next event
            </button>
          </div>
        </div>
      </div>
      <div className="mt-20 space-y-24">
        <div className="w-full flex flex-col lg:flex-row gap-10 border-t-4 pt-6 border-blue-400">
          <div className="lg:w-5/12">
            <h2 className=" leading-tight ">
              Our Approach To Teaching and Learning
            </h2>
          </div>
          <div className="flex flex-col gap-4 lg:w-7/12 lg:pr-6">
            <p>
              At IWS Online School, we believe in harnessina the spirit of
              exploration, creativitv and leadership to embower our students for
              a world of limitless possibilities. Our mission is to provide a
              transformative educational experience, guiding them towards a
              future where they actively Discover, Create and Lead.
            </p>
            <p>
              {
                "Step into the world of Infinite Wisdom School, where the radiant blue compass serves as a powerful symbol of our ethos. More than a mere quide, it embodies our unwavering taith in each student's boundless potential and our dedication to illuminatina their briahtest oath. Here education transcends traditional boundaries, stretching horizons beyond imagination. At IWS, every student is not junst a learner, but a visionary, creator, and leader. We ignite flames of passion, fostering a realm where discovery, creation, and leadership intertwine seamlessly. This is more than education; it's an oaysseya aynamie aance of growin ana enigntenment."
              }
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-10 border-t-4 pt-6 border-blue-400">
          <div className="lg:w-5/12">
            <h2 className=" leading-tight ">Our Mission</h2>
          </div>
          <div className="flex flex-col gap-4 lg:w-7/12 lg:pr-6">
            <p>
              {
                "Discover - Beneath the boundless sky. at IWS, each student's vovage commences within. Pioneering assessments map strengths, passions, and potential, guiding them to their true north. Understanding their unique traits, we provide an invaluable compass for their educational journey."
              }
            </p>
            <p>
              {
                "Create - At IWS, armed with self-awareness, students embark on a journey of immense potential. They forge unique paths, conceiving innovative projects and orchestrating vibrant events. Here, knowledge and imagination merge, giving birth to a realm of endless creation"
              }
            </p>
            <p>
              {
                "Lead - Leadership is a harmonious blend of vision and action in IWS. Empowered with their voice, every student resonates in the world. Whether in clubs, Student Council, communities, or programmes like The Duke of Edinburgh, they shine as guiding lights, paving the way for others to follow."
              }
            </p>
          </div>
        </div>
      </div>

      <div className="py-14 mt-20 px-6 bg-center bg-blue-500 flex items-center justify-center bg-blend-soft-light overflow-hidden rounded-[40px] w-full ">
        <div className="max-w-[700px]">
          <p className="text-white text-center sm:text-[26px]">
            Regardless of geographic location, your child can access the
            renowned British education system through IWS, joining a close-knit
            community of global learners.
          </p>
        </div>
      </div>

      <div className="mt-20 space-y-24">
        <div className="w-full flex flex-col lg:flex-row gap-10 border-t-4 pt-6 border-blue-400">
          <div className="lg:w-5/12">
            <h2 className=" leading-tight ">FAQs</h2>
          </div>
          <div className="flex flex-col gap-4 lg:w-7/12 lg:pr-6">
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
                              provide a learning experience that can often
                              exceed that of traditional schools.
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
                              also employ sophisticated and reliable technology
                              to ensure our virtual classrooms meet every need
                              of our pupils, including round-the-clock access to
                              recorded lessons to support independent study.
                            </p>
                            <p className="text-p">
                              In this respect, we are advancing faster than many
                              educational institutions that are just beginning
                              to embark on this digital transition.
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
                              Education. We are registered as UK Learner
                              Providers and are in the process of obtaining our
                              membership with the Council of International
                              Schools (CIS).
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

        <div className="w-full flex flex-col lg:flex-row gap-10 border-t-4 pt-6 border-blue-400">
          <div className="lg:w-5/12">
            <h2 className=" leading-tight ">Contact Us</h2>
          </div>
          <div className="lg:w-7/12 lg:pr-6">
            <TabSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
