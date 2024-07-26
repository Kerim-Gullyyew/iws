"use client";
import React from "react";
import Testimonial from "../components/ui/Testimonial";
import Image from "next/image";
import ContactUsSection from "../components/sections/ContactUsSection";
import Link from "next/link";
import { keyStages } from "../data/keystage";
interface pageProps {}

const page: React.FC<pageProps> = ({}) => {
  return (
    <div className="py-14 lg:py-24 container animate-fade-in">
      <h1 className="text-center   text-[#349AFE]">School Fees</h1>
      <p className="text-center font-semibold  mt-9">
        Give your child the best education at the most reasonable rates at IWS.
      </p>
      <p className="text-center  mt-5">
        Our initial meeting is free. If you decide to enrol, our flexible fee
        structure includes a £200 one-time registration fee. This covers tests
        to assess your child’s abilities and interests, shaping their education
        for success.
      </p>

      <div className="pt-10 sm:pt-20 grid grid-cols-1 md:grid-cols-2 gap-5 xl:grid-cols-4">
        {keyStages.map((keystage, index) => (
          <Link
            key={index}
            href={"/cambridge-primary"}
            className="w-full bg-[#f4f4f4] border-[#f4f4f4] border-2 hover:border-2 hover:border-red-600 transition duration-300  overflow-hidden rounded-lg px-5 pt-10 py-6"
          >
            <div className="flex justify-between gap-4 flex-col h-full">
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-8">
                  <h3
                    className={`text-[24px] ${index === 0 && "text-sky-500"}  ${index === 1 && "text-green-500"} ${index === 2 && "text-orange-500"} ${index === 3 && "text-red-500"}`}
                  >
                    {keystage.name}
                  </h3>

                  <div className=" flex flex-wrap gap-5 items-end">
                    <h4 className="text-[32px] ">£{keystage.price}</h4>
                    <h4 className="text-gray-400 ">/year</h4>
                  </div>

                  <p className="text-[16px]">{keystage.description}</p>
                </div>

                <div className="flex flex-col gap-5">
                  <h5 className="border-b-[0.5px]   pb-2  border-gray-600">
                    Included subjects
                  </h5>
                  <div className="flex flex-wrap gap-2 items-center">
                    {keystage.includedSubjects.map((subject) => (
                      <Link
                        href={subject.url}
                        className="px-3.5 bg-blue-600 rounded-lg py-1.5"
                      >
                        <h6 className="text-white text-[12px]">
                          {subject.subject_name}
                        </h6>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-5">
                  <h5 className="border-b-[0.5px]   pb-2  border-gray-600">
                    Additional subjects
                  </h5>
                  <div className="flex flex-wrap gap-2 items-center">
                    {keystage.additionalSubjects.map((subject) => (
                      <Link
                        href={subject.url}
                        className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5"
                      >
                        <h6 className="text-gray-600 text-[12px]">
                          {subject.subject_name}
                        </h6>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white py-3 rounded-lg overflow-hidden">
                  <p className="text-center ">Enrol Now</p>
                </div>
              </div>
            </div>
          </Link>
        ))}

        {/* 

        <div className="w-full bg-[#f4f4f4] border-[#f4f4f4] border-2 hover:border-2 hover:border-red-600 transition duration-300  overflow-hidden rounded-lg px-5 pt-10 py-6">
          <div className="flex justify-between gap-4 flex-col h-full">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-8">
                <h3 className=" text-[24px] text-sky-500">Secondary School</h3>

                <div className=" flex flex-wrap gap-5 items-end">
                  <h4 className="text-[32px] ">£6000</h4>
                  <h4 className="text-gray-400 ">/year</h4>
                </div>

                <p className="text-[16px]">
                  At IWS Online School, Middle Education starts at age 11, leading
                  to the Cambridge I/GCSE exams over five years—three years of
                  Middle Education followed by two years of I/GCSE. Graduates are
                  ready for A-Level studies.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <h5 className="border-b-[0.5px]   pb-2  border-gray-600">
                  Included subjects
                </h5>
                <div className="flex flex-wrap gap-2 items-center">
                  <div className="px-3.5 bg-blue-600 rounded-lg py-1.5">
                    <h6 className="text-white text-[12px]">English</h6>
                  </div>
                  <div className="px-3.5 bg-blue-600 rounded-lg py-1.5">
                    <h6 className="text-white text-[12px]">Mathematics</h6>
                  </div>
                  <div className="px-3.5 bg-blue-600 rounded-lg py-1.5">
                    <h6 className="text-white text-[12px]">Science</h6>
                  </div>
                  <div className="px-3.5 bg-blue-600 rounded-lg py-1.5">
                    <h6 className="text-white text-[12px]">Computing</h6>
                  </div>
                  <div className="px-3.5 bg-blue-600 rounded-lg py-1.5">
                    <h6 className="text-white text-[12px]">Global Perspectives</h6>
                  </div>
                </div>
              </div>


              <div className="flex flex-col gap-5">
                <h5 className="border-b-[0.5px]   pb-2  border-gray-600">
                  Additional subjects
                </h5>
                <div className="flex flex-wrap gap-2 items-center">
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">French</h6>
                  </div>
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">Spanish</h6>
                  </div>
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">German</h6>
                  </div>
                </div>
              </div>

            </div>
            <div>
              <div className="w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white py-3 rounded-lg overflow-hidden">
                <p className="text-center ">Enrol Now</p>
              </div>

            </div>

          </div>
        </div>
        <div className="w-full bg-[#f4f4f4] border-[#f4f4f4] border-2 hover:border-2 hover:border-red-600 transition duration-300  overflow-hidden rounded-lg px-5 pt-10 py-6">
          <div className="flex justify-between gap-4 flex-col h-full">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-8">
                <h3 className=" text-[24px] text-sky-500">I/GCSE</h3>

                <div className=" flex flex-wrap gap-5 items-end">
                  <h4 className="text-[32px] ">£7200</h4>
                  <h4 className="text-gray-400 ">/year</h4>
                </div>

                <p className="text-[16px]">
                  Enrol in our two-year program for globally recognised Cambridge
                  certifications, accepted by top universities and employers
                  worldwide, enhancing your academic and career prospects globally.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <h5 className="border-b-[0.5px]   pb-2  border-gray-600">
                  Included subjects
                </h5>
                <div className="flex flex-wrap gap-2 items-center">
                  <div className="px-3.5 bg-blue-600 rounded-lg py-1.5">
                    <h6 className="text-white text-[12px]">English – First Language</h6>
                  </div>
                  <div className="px-3.5 bg-blue-600 rounded-lg py-1.5">
                    <h6 className="text-white text-[12px]">Mathematics</h6>
                  </div>
                  <div className="px-3.5 bg-blue-600 rounded-lg py-1.5">
                    <h6 className="text-white text-[12px]">Computer Science</h6>
                  </div>
                  <div className="px-3.5 bg-blue-600 rounded-lg py-1.5">
                    <h6 className="text-white text-[12px]">Business Studies</h6>
                  </div>
                  <div className="px-3.5 bg-blue-600 rounded-lg py-1.5">
                    <h6 className="text-white text-[12px]">Biology</h6>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <h5 className="border-b-[0.5px]   pb-2  border-gray-600">
                  Additional subjects
                </h5>
                <div className="flex flex-wrap gap-2 items-center">
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">Chemistry</h6>
                  </div>
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">Economics</h6>
                  </div>
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">Physics</h6>
                  </div>
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">History</h6>
                  </div>
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">
                      English – Literature in English
                    </h6>
                  </div>
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">
                      English (as an Additional Language)
                    </h6>
                  </div>
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">Geography</h6>
                  </div>
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">Global Perspectives</h6>
                  </div>
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">Mathematics – Additional</h6>
                  </div>
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">Sociology</h6>
                  </div>
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">Spanish</h6>
                  </div>
                </div>
              </div>

            </div>
            <div>
              <div className="w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white py-3 rounded-lg overflow-hidden">
                <p className="text-center ">Enrol Now</p>
              </div>

            </div>

          </div>
        </div>
        <div className="w-full bg-[#f4f4f4] border-[#f4f4f4] border-2 hover:border-2 hover:border-red-600 transition duration-300  overflow-hidden rounded-lg px-5 pt-10 py-6">
          <div className="flex justify-between gap-4 flex-col h-full">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-8">
                <h3 className=" text-[24px] text-sky-500">A Level</h3>

                <div className=" flex flex-wrap gap-5 items-end">
                  <h4 className="text-[32px] ">£7500</h4>
                  <h4 className="text-gray-400 ">/year</h4>
                </div>

                <p className="text-[16px]">
                  The A-Levels we offer hold global recognition from esteemed
                  universities and leading employers, significantly enhancing our
                  students’ prospects of gaining admission to their desired
                  institutions and securing positions in top organisations.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <h5 className="border-b-[0.5px]   pb-2  border-gray-600">
                  Included subjects
                </h5>
                <div className="flex flex-wrap gap-2 items-center">
                  <div className="px-3.5 bg-blue-600 rounded-lg py-1.5">
                    <h6 className="text-white text-[12px]">Biology</h6>
                  </div>
                  <div className="px-3.5 bg-blue-600 rounded-lg py-1.5">
                    <h6 className="text-white text-[12px]">Business</h6>
                  </div>
                  <div className="px-3.5 bg-blue-600 rounded-lg py-1.5">
                    <h6 className="text-white text-[12px]">Chemistry</h6>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <h5 className="border-b-[0.5px]   pb-2  border-gray-600">
                  Additional subjects
                </h5>
                <div className="flex flex-wrap gap-2 items-center">
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">Computer Science</h6>
                  </div>
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">Economics</h6>
                  </div>
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">English – Literature</h6>
                  </div>
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">English Language</h6>
                  </div>
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">Geography</h6>
                  </div>
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">History</h6>
                  </div>
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">Mathematics</h6>
                  </div>
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">Mathematics – Further</h6>
                  </div>
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">Media Studies</h6>
                  </div>
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">Physics</h6>
                  </div>
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">Psychology</h6>
                  </div>
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">Sociology</h6>
                  </div>
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">Law</h6>
                  </div>
                  <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                    <h6 className="text-gray-600 text-[12px]">
                      Global Perspectives & Research
                    </h6>
                  </div>
                </div>
              </div>

            </div>
            <div>
              <div className="w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white py-3 rounded-lg overflow-hidden">
                <p className="text-center ">Enrol Now</p>
              </div>

            </div>

          </div>
        </div> */}
      </div>

      <div className="pt-8 sm:pt-20 flex flex-col md:flex-row lg:flex-row-reverse gap-5">
        <Image
          width={1000}
          height={1000}
          className=" object-cover md:w-1/2"
          src="/IWS_fees_1.webp"
          alt=""
        />
        <div className="flex flex-col gap-5 justify-center">
          <h2 className=" text-[#349AFE]">What our fees include</h2>

          <div className="flex flex-col gap-5">
            <p className="">
              Our school fees cover courses, career advice, assemblies,
              workshops, one-on-one sessions with Success Coaches, and
              year-round access to online materials. Students can also view
              recorded lessons any time via our online portal.
            </p>
            <p className="">
              There may be occasional additional fees including (but not limited
              to): extracurricular activities, social events, trips, excursions,
              camps, and external examination fees. Wherever possible, all such
              additional fees will be communicated to you well in advance.
            </p>
            <p className="">
              A student is presumed to be enrolled for the next academic year or
              term if adequate notification is not received in writing by the
              school. Please refer to our Withdrawal section for details on
              notice periods.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-20">
        <div className="relative">
          <div className="relative w-full py-20 sm:py-28">
            <div className="absolute inset-0 bg-asset-2 bg-cover bg-center opacity-20"></div>
            <div className="relative z-30 self-center sm:container">
              <Testimonial />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20">
        <ContactUsSection />
      </div>
    </div>
  );
};

export default page;
