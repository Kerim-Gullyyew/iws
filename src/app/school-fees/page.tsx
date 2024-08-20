import React from "react";
import Testimonial from "../components/ui/Testimonial";
import Image from "next/image";
import ContactUsSection from "../components/sections/ContactUsSection";
import { keyStages } from "../data/keystage";
import SchoolFeeCard from "../components/ui/SchoolFeeCard";

interface pageProps {}

const Page: React.FC<pageProps> = ({}) => {
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
          <div
            key={index}
            className="w-full bg-[#f4f4f4] border-[#f4f4f4] cursor-pointer border-2 hover:border-2 hover:border-red-600 transition duration-300  overflow-hidden rounded-lg px-5 pt-10 py-6"
          >
            <SchoolFeeCard index={index} keystage={keystage} />
        
          </div>
        ))}
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
          <div className="relative w-full py-20 sm:py-28 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-asset-2 bg-[#EAEDFC] bg-cover bg-center opacity-20"></div>
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

export default Page;
