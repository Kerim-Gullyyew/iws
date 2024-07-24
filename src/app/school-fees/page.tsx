"use client";
import React from "react";
import Testimonial from "../components/ui/Testimonial";
import TabSection from "../components/ui/TabSection";
import Image from "next/image";
import ContactUsSection from "../components/sections/ContactUsSection";

interface pageProps { }

const page: React.FC<pageProps> = ({ }) => {
  return (
    <div className="py-14 lg:py-24 container animate-fade-in">
      <h1 className="text-center   text-sky-500">School Fees</h1>
      <h2 className="text-center   mt-14">
        Give your child the best education at the most reasonable rates at IWS.
      </h2>
      <p className="text-center   tracking-wide mt-5">
        Our initial meeting is free. If you decide to enrol, our flexible fee
        structure includes a £200 one-time registration fee. This covers tests
        to assess your child’s abilities and interests, shaping their education
        for success.
      </p>

      <div className="pt-20 grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-4">
        <div className="w-full bg-[#f4f4f4] border-[#f4f4f4] border-2 hover:border-2 hover:border-red-600 transition duration-300 grid grid-cols-1 overflow-hidden rounded-lg gap-14 px-8 pt-10 py-6">
          <div className="flex flex-col gap-8">
            <h3 className=" text-[24px] text-sky-500">Primary School</h3>

            <div className=" flex flex-wrap gap-5 items-end">
              <h4 className="text-[32px] ">£5000</h4>
              <h4 className="text-gray-400 ">/year</h4>
            </div>

            <p className="">
              IWS Online School offers the Cambridge Primary International
              Curriculum for primary students. Our UK-based online school is
              proudly accredited by Cambridge Assessment International
              Education.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h5 className="border-b-[0.5px]   pb-2  border-gray-600">
              Included subjects
            </h5>
            <div className="flex flex-wrap gap-2 items-center">
              <div className="px-3.5 bg-blue-600 rounded-lg py-1.5">
                <h6 className="text-white ">English</h6>
              </div>
              <div className="px-3.5 bg-blue-600 rounded-lg py-1.5">
                <h6 className="text-white ">English</h6>
              </div>
              <div className="px-3.5 bg-blue-600 rounded-lg py-1.5">
                <h6 className="text-white ">English</h6>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h5 className="border-b-[0.5px]   pb-2  border-gray-600">
              Additional subjects
            </h5>
            <div className="flex flex-wrap gap-2 items-center">
              <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                <h6 className="text-gray-600 ">French</h6>
              </div>
              <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                <h6 className="text-gray-600 ">French</h6>
              </div>
              <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                <h6 className="text-gray-600 ">French</h6>
              </div>
            </div>
          </div>

          <div className="w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white py-3 rounded-lg overflow-hidden">
            <p className="text-center ">Enrol Now</p>
          </div>
        </div>
        <div className="w-full bg-[#f4f4f4] border-[#f4f4f4] border-2 hover:border-2 hover:border-red-600 transition duration-300 grid grid-cols-1 overflow-hidden rounded-lg gap-14 px-8 pt-10 py-6">
          <div className="flex flex-col gap-8">
            <h3 className=" text-[24px] text-sky-500">Primary School</h3>

            <div className=" flex flex-wrap gap-5 items-end">
              <h4 className="text-[32px] ">£5000</h4>
              <h4 className="text-gray-400 ">/year</h4>
            </div>

            <p className="">
              IWS Online School offers the Cambridge Primary International
              Curriculum for primary students. Our UK-based online school is
              proudly accredited by Cambridge Assessment International
              Education.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h5 className="border-b-[0.5px]   pb-2  border-gray-600">
              Included subjects
            </h5>
            <div className="flex flex-wrap gap-2 items-center">
              <div className="px-3.5 bg-blue-600 rounded-lg py-1.5">
                <h6 className="text-white ">English</h6>
              </div>
              <div className="px-3.5 bg-blue-600 rounded-lg py-1.5">
                <h6 className="text-white ">English</h6>
              </div>
              <div className="px-3.5 bg-blue-600 rounded-lg py-1.5">
                <h6 className="text-white ">English</h6>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h5 className="border-b-[0.5px]   pb-2  border-gray-600">
              Additional subjects
            </h5>
            <div className="flex flex-wrap gap-2 items-center">
              <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                <h6 className="text-gray-600 ">French</h6>
              </div>
              <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                <h6 className="text-gray-600 ">French</h6>
              </div>
              <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                <h6 className="text-gray-600 ">French</h6>
              </div>
            </div>
          </div>

          <div className="w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white py-3 rounded-lg overflow-hidden">
            <p className="text-center ">Enrol Now</p>
          </div>
        </div>
        <div className="w-full bg-[#f4f4f4] border-[#f4f4f4] border-2 hover:border-2 hover:border-red-600 transition duration-300 grid grid-cols-1 overflow-hidden rounded-lg gap-14 px-8 pt-10 py-6">
          <div className="flex flex-col gap-8">
            <h3 className=" text-[24px] text-sky-500">Primary School</h3>

            <div className=" flex flex-wrap gap-5 items-end">
              <h4 className="text-[32px] ">£5000</h4>
              <h4 className="text-gray-400 ">/year</h4>
            </div>

            <p className="">
              IWS Online School offers the Cambridge Primary International
              Curriculum for primary students. Our UK-based online school is
              proudly accredited by Cambridge Assessment International
              Education.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h5 className="border-b-[0.5px]   pb-2  border-gray-600">
              Included subjects
            </h5>
            <div className="flex flex-wrap gap-2 items-center">
              <div className="px-3.5 bg-blue-600 rounded-lg py-1.5">
                <h6 className="text-white ">English</h6>
              </div>
              <div className="px-3.5 bg-blue-600 rounded-lg py-1.5">
                <h6 className="text-white ">English</h6>
              </div>
              <div className="px-3.5 bg-blue-600 rounded-lg py-1.5">
                <h6 className="text-white ">English</h6>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h5 className="border-b-[0.5px]   pb-2  border-gray-600">
              Additional subjects
            </h5>
            <div className="flex flex-wrap gap-2 items-center">
              <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                <h6 className="text-gray-600 ">French</h6>
              </div>
              <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                <h6 className="text-gray-600 ">French</h6>
              </div>
              <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                <h6 className="text-gray-600 ">French</h6>
              </div>
            </div>
          </div>

          <div className="w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white py-3 rounded-lg overflow-hidden">
            <p className="text-center ">Enrol Now</p>
          </div>
        </div>
        <div className="w-full bg-[#f4f4f4] border-[#f4f4f4] border-2 hover:border-2 hover:border-red-600 transition duration-300 grid grid-cols-1 overflow-hidden rounded-lg gap-14 px-8 pt-10 py-6">
          <div className="flex flex-col gap-8">
            <h3 className=" text-[24px] text-sky-500">Primary School</h3>

            <div className=" flex flex-wrap gap-5 items-end">
              <h4 className="text-[32px] ">£5000</h4>
              <h4 className="text-gray-400 ">/year</h4>
            </div>

            <p className="">
              IWS Online School offers the Cambridge Primary International
              Curriculum for primary students. Our UK-based online school is
              proudly accredited by Cambridge Assessment International
              Education.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h5 className="border-b-[0.5px]   pb-2  border-gray-600">
              Included subjects
            </h5>
            <div className="flex flex-wrap gap-2 items-center">
              <div className="px-3.5 bg-blue-600 rounded-lg py-1.5">
                <h6 className="text-white ">English</h6>
              </div>
              <div className="px-3.5 bg-blue-600 rounded-lg py-1.5">
                <h6 className="text-white ">English</h6>
              </div>
              <div className="px-3.5 bg-blue-600 rounded-lg py-1.5">
                <h6 className="text-white ">English</h6>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h5 className="border-b-[0.5px]   pb-2  border-gray-600">
              Additional subjects
            </h5>
            <div className="flex flex-wrap gap-2 items-center">
              <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                <h6 className="text-gray-600 ">French</h6>
              </div>
              <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                <h6 className="text-gray-600 ">French</h6>
              </div>
              <div className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5">
                <h6 className="text-gray-600 ">French</h6>
              </div>
            </div>
          </div>

          <div className="w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white py-3 rounded-lg overflow-hidden">
            <p className="text-center ">Enrol Now</p>
          </div>
        </div>
      </div>

      <div className="pt-20 flex flex-col md:flex-row lg:flex-row-reverse gap-5">
        <Image
          width={1000}
          height={1000}
          className=" object-cover md:w-1/2"
          src="/IWS_fees_1.webp"
          alt=""
        />
        <div className="flex flex-col gap-5 justify-center">
          <h2 className=" text-sky-500 ">What our fees include</h2>

          <div className="flex flex-col gap-8">
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
          <div className="relative w-full py-28">
            <div className="absolute inset-0 bg-asset-2 bg-cover bg-center opacity-20"></div>
            <div className="relative z-30 self-center container">
              <Testimonial />
            </div>
          </div>
        </div>
      </div>

      <div className='pt-20'>
        <ContactUsSection />

      </div>


    </div>
  );
};

export default page;
