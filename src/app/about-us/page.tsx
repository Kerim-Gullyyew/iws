"use client"
import React from "react";
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
import TabSection from "../components/ui/TabSection";
interface pageProps { }

const page: React.FC<pageProps> = ({ }) => {
  return (
    <div className=" container pt-3 pb-24">
      <div className="pt-16 pb-14 bg-asset-3 px-6 bg-cover bg-no-repeat bg-center bg-blue-500 flex items-center justify-center bg-blend-soft-light overflow-hidden rounded-[40px] w-full ">
        <div className="flex flex-col justify-center items-center max-w-[700px]">
          <h1 className="text-center text-white ">We are a revolution</h1>
          <div className="pt-8">
            <p className="text-center text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia error a cum ratione harum quaerat ab similique repudiandae ducimus quidem? At culpa veritatis in placeat voluptatum omnis aut voluptates corrupti.
            </p>

          </div>
          <div className="pt-6">
            <p className="text-center text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quidem maiores vitae aliquid expedita fuga nisi ipsum labore repellat. Et maiores rerum facere excepturi quidem quia praesentium quasi, qui fugiat.
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
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam sed sint sapiente, fugit quisquam facilis porro mollitia eaque modi alias, odio tempore numquam quos temporibus. Recusandae repellendus enim cum ipsam!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos atque nihil quo, pariatur doloribus facere quaerat corrupti molestiae culpa vero unde deleniti laboriosam maxime non veniam laudantium. Voluptas, quam sit.</p>
          </div>
        </div>


        <div className="w-full flex flex-col lg:flex-row gap-10 border-t-4 pt-6 border-blue-400">
          <div className="lg:w-5/12">
            <h2 className=" leading-tight ">
              Our Approach To Teaching and Learning
            </h2>
          </div>
          <div className="flex flex-col gap-4 lg:w-7/12 lg:pr-6">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam sed sint sapiente, fugit quisquam facilis porro mollitia eaque modi alias, odio tempore numquam quos temporibus. Recusandae repellendus enim cum ipsam!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos atque nihil quo, pariatur doloribus facere quaerat corrupti molestiae culpa vero unde deleniti laboriosam maxime non veniam laudantium. Voluptas, quam sit.</p>
          </div>
        </div>
      </div>

      <div className="py-14 mt-20 px-6 bg-center bg-blue-500 flex items-center justify-center bg-blend-soft-light overflow-hidden rounded-[40px] w-full ">
        <div className="max-w-[700px]">
          <p className="text-white text-center text-[26px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur impedit dolorem cumque obcaecati ratione odio nesciunt maiores saepe veritatis beatae..</p>

        </div>
      </div>


      <div className="mt-20 space-y-24">
        <div className="w-full flex flex-col lg:flex-row gap-10 border-t-4 pt-6 border-blue-400">
          <div className="lg:w-5/12">
            <h2 className=" leading-tight ">
              FAQs
            </h2>
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
          </div>
        </div>


        <div className="w-full flex flex-col lg:flex-row gap-10 border-t-4 pt-6 border-blue-400">
          <div className="lg:w-5/12">
            <h2 className=" leading-tight ">
              Contact Us
            </h2>
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
