import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import Carousel from "../../components/ui/Carousel";
import Image from "next/image";
import Link from "next/link";
import ContactUsSection from "../../components/sections/ContactUsSection";
import AccordionSecondary from "../../components/ui/AccordionSecondary";
import SchoolFeeCard from "@/app/components/ui/SchoolFeeCard";
import { keyStages } from "@/app/data/keystage";
import { partners } from "@/app/data/partners";
import HeaderPartner from "@/app/components/HeaderPartner";
import FooterPartner from "@/app/components/FooterPartner";
import Header from "@/app/components/Header";

interface pageProps {
  // params: { slug: string };
  // searchParams: { [key: string]: string | string[] | undefined };
}

const page: React.FC<pageProps> = ({  }) => {
  // const { slug } = params;
  // const partner = partners.find((partner) => partner.slug === slug);

  // if (!partner) {
  //   return <div>Not Found</div>;
  // }

  const imagePath = "/partners/3_1.webp";

  return (
    <>
      {/* <Header /> */}
      <div className="py-14 lg:py-24 animate-fade-in">
        {/* <style>{`header { display:none; }`}</style>
        <style>{`footer { display:none; }`}</style> */}
        <div className="gap-10 container sm:gap-14 flex-col flex justify-center items-center lg:flex lg:flex-row">
          <div className="gap-10 sm:gap-14 flex-col flex justify-center">
            <div className="flex">
              <div className="relative bg-blue-200 text-blue-700 font-semibold text-lg sm:text-[24px] px-4 py-2 rounded-lg">
                IWS AND CS PARTNERSHIP
              </div>
            </div>

            <h1 className=" leading-[50px] lg:leading-[70px] text-[35px] lg:text-[50px] sm:text-[40px] ">
              Up to 40% Scholarship for Students in Bangladesh
            </h1>

            <p className="leading-[32px] text-[18px] sm:text-[24px]">
              {
                "Exclusive Opportunity for Students in Bangladesh! We've partnered with CS Meta Limited, supported by global CS Valley to bring up to a 40% scholarship to students in Bangladesh, making it easier to access world-class education through IWS Online School."
              }
            </p>

            <div className="flex items-center justify-center flex-wrap gap-5 sm:justify-start">
              <Link
                href={"#ready"}
                className={`border-[#4366F6] hover:text-white hover:bg-[#3867FF] transition-all duration-300 border-[3px] rounded-xl px-7 py-2.5 text-lg box-border`}
              >
                Enrol Now
              </Link>
              <Link
                href="#contact-us"
                className={
                  "bg-[#4366F6] rounded-xl px-7 py-3 text-white hover:bg-[#2C50C7] transition-all duration-300  text-lg"
                }
              >
                Contact Us
              </Link>
            </div>
          </div>

          <Image
            width={450}
            height={450}
            className="w-[300px] max-w-[90%] min-w-[280px] sm:w-[450px] sm:min-w-[50%] sm:flex lg:w-auto object-contain"
            src="/partners/1.webp"
            priority={true}
            sizes="(max-width: 576px) 40vw"
            alt=""
          />
        </div>

        <div
          id="programmes"
          className="mt-20 border-t-2 border-gray-200 pt-5 container"
        >
          <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
            <h2 className="font-semibold md:flex-1">What We Offer</h2>
            <p className="md:flex-1">
              {
                "Getting started with IWS Online School through our partnership withCS Group is simple and straightforward. Follow these steps to access high-quality education at a discounted rate, sponsored byCS Group."
              }
            </p>
          </div>

          <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-6 gap-y-14">
            <div
              // href={"/cambridge-primary"}
              className="relative  hover:-translate-y-2 transition-transform duration-300 bg-[#D9DFFB] flex flex-col justify-between rounded-xl"
            >
              <div className="relative">
                <div className="bg-white absolute bottom-4 left-4 px-8 py-2 rounded">
                  <p className="  ">Classes 1-5</p>
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

                {/* <div className="flex bg-gray-100 rounded-full px-5 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 justify-between items-center">
                  <p className="text-p tracking-wide ">Learn more</p>
                  <ArrowRightCircleIcon
                    className="h-10 w-10 -rotate-45"
                    aria-hidden="true"
                  />
                </div> */}
              </div>
            </div>

            <div
              // href={"/cambridge-secondary"}
              className="relative  hover:-translate-y-2 transition-transform duration-300 bg-[#E6F2DB] flex flex-col justify-between rounded-xl"
            >
              <div className="relative">
                <div className="bg-white absolute bottom-4 left-4 px-8 py-2 rounded">
                  <p className="  ">Classes 6-8</p>
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
                  <h3 className="text-[32px] font-[500]  ">Secondary School</h3>
                  <p className="text-p ">
                    Foster your child’s growth and academic success.
                  </p>
                </div>

                {/* <div className="flex  bg-gray-100 rounded-full px-5 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 justify-between items-center">
                  <p className="text-p tracking-wide ">Learn more</p>
                  <ArrowRightCircleIcon
                    className="h-10 w-10 -rotate-45"
                    aria-hidden="true"
                  />
                </div> */}
              </div>
            </div>

            <div
              // href={"/cambridge-igcse"}
              className="relative  hover:-translate-y-2 transition-transform duration-300 bg-[#FCE8D6] flex flex-col justify-between rounded-xl"
            >
              <div className="relative">
                <div className="bg-white absolute bottom-4 left-4 px-8 py-2 rounded">
                  <p className="  ">Classes 9-10</p>
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

                {/* <div className="flex bg-gray-100 rounded-full px-5 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 justify-between items-center">
                  <p className="text-p tracking-wide ">Learn more</p>
                  <ArrowRightCircleIcon
                    className="h-10 w-10 -rotate-45"
                    aria-hidden="true"
                  />
                </div> */}
              </div>
            </div>

            <div
              // href={"/cambridge-a-level"}
              className="relative  hover:-translate-y-2 transition-transform duration-300 bg-[#FBD9D5] flex flex-col justify-between rounded-xl"
            >
              <div className="relative">
                <div className="bg-white absolute bottom-4 left-4 px-8 py-2 rounded">
                  <p className="  ">Classes 11-12</p>
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

                {/* <div className="flex bg-gray-100 rounded-full px-5 py-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 justify-between items-center">
                  <p className="text-p tracking-wide ">Learn more</p>
                  <ArrowRightCircleIcon
                    className="h-10 w-10 -rotate-45"
                    aria-hidden="true"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div
          id="howwork"
          className="mt-20 border-t-2 border-gray-200 pt-5 container"
        >
          <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
            <h2 className="font-semibold md:flex-1">How It Works</h2>
            <p className="md:flex-1">
              {
                "Start your journey with IWS Online School through our partnership withCS Group and unlock access to premium education at an exclusive discounted rate."
              }
            </p>
          </div>

          <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-5 gap-y-14">
            <div
              // href={"/cambridge-primary"}
              className="relative py-4 px-2 hover:-translate-y-2 transition-transform duration-300 border-[3px] border-gray-100 flex flex-col justify-between rounded-xl"
            >
              <span className="text-center font-semibold text-sm text-blue-600">
                STEP 1
              </span>
              <Image
                width={1000}
                height={1000}
                className="max-w-lg w-11/12 object-contain self-center"
                src="/partners/2-1.webp"
                alt=""
              />

              <div className="bg-white flex-1 flex gap-10 justify-between flex-col m-[3px] p-3 rounded-b-xl">
                <div className="flex flex-col gap-4">
                  <h3 className="text-[20px] text-center font-[500] leading-7">
                  Contact the CS Team in Bangladesh
                  </h3>
                  <p className="text-p text-center leading-6">
                  Get started by connecting with our team in Bangladesh for a smooth enrolment process.
                  </p>
                </div>
              </div>
            </div>
            <div
              // href={"/cambridge-primary"}
              className="relative py-4 px-2 hover:-translate-y-2 transition-transform duration-300 border-[3px] border-gray-100 flex flex-col justify-between rounded-xl"
            >
              <span className="text-center font-semibold text-sm text-blue-600">
                STEP 2
              </span>
              <Image
                width={1000}
                height={1000}
                className="max-w-lg w-11/12 object-contain self-center"
                src="/partners/2-2.webp"
                alt=""
              />

              <div className="bg-white flex-1 flex gap-10 justify-between flex-col m-[3px] p-3 rounded-b-xl">
                <div className="flex flex-col gap-4">
                  <h3 className="text-[20px] text-center font-[500] leading-7">
                  Start the Enrolment Process
                  </h3>
                  <p className="text-p text-center leading-6">
                  Begin your journey with our step-by-step guidance on enrolment and scholarship applications.
                  </p>
                </div>
              </div>
            </div>
            <div
              // href={"/cambridge-primary"}
              className="relative py-4 px-2 hover:-translate-y-2 transition-transform duration-300 border-[3px] border-gray-100 flex flex-col justify-between rounded-xl"
            >
              <span className="text-center font-semibold text-sm text-blue-600">
                STEP 3
              </span>
              <Image
                width={1000}
                height={1000}
                className="max-w-lg w-11/12 object-contain self-center"
                src="/partners/2-3.webp"
                alt=""
              />

              <div className="bg-white flex-1 flex gap-10 justify-between flex-col m-[3px] p-3 rounded-b-xl">
                <div className="flex flex-col gap-4">
                  <h3 className="text-[20px] text-center font-[500] leading-7">
                  Get up to a 40% Scholarship
                  </h3>
                  <p className="text-p text-center leading-6">
                  Access up to a 40% scholarship, making quality British education more affordable for you.
                  </p>
                </div>
              </div>
            </div>
            <div
              // href={"/cambridge-primary"}
              className="relative py-4 px-2 hover:-translate-y-2 transition-transform duration-300 border-[3px] border-gray-100 flex flex-col justify-between rounded-xl"
            >
              <span className="text-center font-semibold text-sm text-blue-600">
                STEP 4
              </span>
              <Image
                width={1000}
                height={1000}
                className="max-w-lg w-11/12 object-contain self-center"
                src="/partners/2-4.webp"
                alt=""
              />

              <div className="bg-white flex-1 flex gap-10 justify-between flex-col m-[3px] p-3 rounded-b-xl">
                <div className="flex flex-col gap-4">
                  <h3 className="text-[20px] text-center font-[500] leading-7">
                    Learn from Anywhere
                  </h3>
                  <p className="text-p text-center leading-6">
                  Study from anywhere, with an adaptable online learning environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16"
          id="ready"
        >
          <div className=" ">
            <div>
              <h2>Ready to Apply?</h2>
            </div>
            <div className="pt-3 pb-5">
              <p>
                {
                  "Contact our Bangladesh representatives to start your journey."
                }
              </p>
            </div>
            <div>
              <p>
                {
                  "Reach out now to secure your up to 40% scholarship and begin your learning journey with IWS andCS Group."
                }
              </p>
            </div>
            <div className="mt-7">
              <p>
                Follow us on:{" "}
                <Link href="https://www.facebook.com/iwsonlinebangladesh/" className="underline">
                  Facebook
                </Link>
                ,{" "}
                <Link href="https://www.linkedin.com/company/iws-bangladesh/" className="underline">
                  LinkedIn
                </Link>
                ,{" "}
                <Link href="https://www.instagram.com/iwsbangladesh/" className="underline">
                  Instagram
                </Link>
                ,{" "}
                <Link href="https://x.com/iwsbangladesh" className="underline">
                  Twitter
                </Link>
                ,{" "}
              </p>
            </div>
          </div>
          <div>
            <div className="border-[3px] border-gray-100 rounded-lg px-5 flex flex-col sm:flex-row justify-between py-9">
              <div className="flex gap-6">
                <div>
                  <Image
                    width={500}
                    height={500}
                    className="w-20 h-20 max-w-20 max-h-20 rounded-full border border-gray-100"
                    src="/partners/3-2.webp"
                    alt=""
                  />
                </div>
                <div className=" flex flex-col">
                  <h4 className="text-blue-600 font-bold">Hussain Farhaan</h4>
                  <Link className="text-lg" href="tel:+8801727927497">+880 1727-927497</Link>
                  <Link className="text-lg" href="mailto:farhaan@iwschool.co.uk">farhaan@iwschool.co.uk</Link>
                </div>
              </div>
              <div className="flex sm:flex-col items-center gap-3">
                <Link
                  href="tel:+8801727927497"
                  className="bg-blue-600 text-lg text-white py-3 px-14 w-full rounded-md text-center"
                >
                  Call
                </Link>
                <Link
                  href="#contact-us"
                  className="bg-blue-600 text-lg text-white py-3 px-14 w-full rounded-md text-center"
                >
                  Email
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          id="ready"
          className="mt-20 border-t-2 border-gray-200 pt-5 container"
        >
          <div className="pt-20 flex flex-col md:flex-row md:justify-between gap-10">
            <div className="md:w-1/2 md:max-w-lg">
              <div>
                <h2>Ready to Apply?</h2>
              </div>
              <div className="pt-3 pb-5">
                <p>
                  {
                    "Contact our Bangladesh representatives to start your journey."
                  }
                </p>
              </div>
              <div>
                <p>
                  {
                    "Reach out now to secure your 25% scholarship and begin your learning journey with IWS andCS Group."
                  }
                </p>
              </div>
              <div className="mt-7">
                <p>
                  Follow us on:{" "}
                  <Link href="/" className="underline">
                    Facebook
                  </Link>
                  ,{" "}
                  <Link href="/" className="underline">
                    LinkedIn
                  </Link>
                  ,{" "}
                  <Link href="/" className="underline">
                    Instagram
                  </Link>
                  ,{" "}
                  <Link href="/" className="underline">
                    Twitter
                  </Link>
                  ,{" "}
                  <Link href="/" className="underline">
                    Youtube
                  </Link>
                </p>
              </div>
            </div>
            <div className="grid w-full grid-cols-1">
              <div className="border-[3px] border-gray-100 rounded-lg p-4">
                <div>
                  <Image
                    width={500}
                    height={500}
                    className="w-20 h-20 max-w-20 max-h-20 rounded-full"
                    src="/partners/3-1.webp"
                    alt=""
                  />
                </div>
                <div className="space-y-1 flex flex-col">
                  <h4 className="text-blue-600 font-bold">Jahan Shirin</h4>
                  <Link href="tel:+99361164656">+99361164656</Link>
                  <Link href="mailto:ssefsdf@sdfsd.com">ssefsdf@sdfsd.com</Link>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Link
                    href="tel:+99361164656"
                    className="bg-blue-600 text-sm text-white py-2 w-full rounded-md text-center"
                  >
                    Call
                  </Link>
                  <Link
                    href="#contact-us"
                    className="bg-blue-600 text-sm text-white py-2 w-full rounded-md text-center"
                  >
                    Email
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div
          className="mt-20 border-t-2 border-gray-200 pt-5 container"
          id="what-awaits"
        >
          <h2 className="  text-center ">
            What awaits you at IWS Online School partnered with CS?
          </h2>

          <div className="grid grid-cols-6 pt-8 gap-8 sm:gap-10 sm:pt-12 md:gap-8 lg:gap-6">
            <div className="overflow-hidden h-full justify-between gap-10 flex flex-col px-6 py-8 rounded-xl col-span-6 md:col-span-2 bg-[#F1F9EC]">
              <h3 className="   tracking-wide">
                Visionary Educators of IWS Online School
              </h3>
              <p className="text-p leading-6  ">
                Explore the difference our passionate and committed teachers
                make in every student’s learning journey.
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
                  Every child is unique. Our personalized assessments and
                  Success Coaching ensure tailored educational paths for every
                  student.
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
                  collaboration, and growth in academics and personal
                  development.
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
                  We prioritize holistic education, combining academic
                  excellence with skill development for a comprehensive learning
                  experience.
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

        <div className="mt-20 border-t-2 border-gray-200 pt-5 container">
          <h2 className="  text-center ">Who can benefit from our school?</h2>
          <div className="pt-8 sm:pt-12 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-10 xl:gap-3">
              <div className="group max-w-[380px] relative bg-[#F4F5F8] flex justify-between flex-col cursor-pointer hover:bg-[#EBF0FE] rounded-xl overflow-hidden transition duration-500">
                <h4 className=" px-4 py-6 z-20 leading-tight ">
                  For those who are not satisfied with a regular school
                </h4>
                <div className="h-full">
                  <Image
                    width={1000}
                    height={1000}
                    className="object-cover w-full pt-20 h-full transition-opacity absolute duration-500 ease-in-out opacity-100 group-hover:hidden bottom-0"
                    src="/benefit/4_1.webp"
                    alt=""
                  />

                  <div className="relative bottom-0 inset-0 flex h-full flex-col justify-between px-9 sm:px-9 py-3 sm:pb-8 sm:py-8 gap-3 sm:gap-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                    <p className=" text-[16px] ">Is this about you?</p>
                    <ul className="list-disc  flex-1 justify-between flex flex-col ml-10">
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

              <div className="group max-w-[380px] relative bg-[#F4F5F8] flex justify-between flex-col cursor-pointer hover:bg-[#EBF0FE] rounded-xl overflow-hidden transition duration-500">
                <h4 className=" px-4 py-6 z-20 leading-tight ">
                  For students who often miss school.
                </h4>
                <div className="h-full">
                  <Image
                    width={1000}
                    height={1000}
                    className="object-cover w-full pt-20 h-full transition-opacity absolute duration-500 ease-in-out opacity-100 group-hover:hidden bottom-0"
                    src="/benefit/4_2.webp"
                    alt=""
                  />

                  <div className="relative bottom-0 inset-0 flex h-full flex-col justify-between px-9 sm:px-9 py-3 sm:pb-8 sm:py-8 gap-3 sm:gap-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                    <p className=" text-[16px] ">Does this sound like you?</p>
                    <ul className="list-disc  flex-1 justify-between flex flex-col ml-10">
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
              <div className="group max-w-[380px] relative bg-[#F4F5F8] flex justify-between flex-col cursor-pointer hover:bg-[#EBF0FE] rounded-xl overflow-hidden transition duration-500">
                <h4 className=" px-4 py-6 z-20 leading-tight ">
                  For those who live abroad or the family travels a lot
                </h4>
                <div className="h-full">
                  <Image
                    width={1000}
                    height={1000}
                    className="object-cover w-full pt-20 h-full transition-opacity absolute duration-500 ease-in-out opacity-100 group-hover:hidden bottom-0"
                    src="/benefit/4_3.webp"
                    alt=""
                  />

                  <div className="relative bottom-0 inset-0 flex h-full flex-col justify-between px-9 sm:px-9 py-3 sm:pb-8 sm:py-8 gap-3 sm:gap-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                    <p className=" text-[16px] ">Is this about you?</p>
                    <ul className="list-disc  flex-1 justify-between flex flex-col ml-10">
                      <li className=" text-[16px] font-normal">
                        Frequent relocation due to parental work or lifestyle
                        choices.
                      </li>
                      <li className=" text-[16px] font-normal">
                        Desire for continuity in education despite changing
                        locations.
                      </li>
                      <li className=" text-[16px] font-normal">
                        Need for a supportive learning environment that
                        transcends geographical boundaries.
                      </li>
                    </ul>
                    <p className=" text-[16px] ">
                      Then our school is right for you!
                    </p>
                  </div>
                </div>
              </div>
              <div className="group max-w-[380px] relative bg-[#F4F5F8] flex justify-between flex-col cursor-pointer hover:bg-[#EBF0FE] rounded-xl overflow-hidden transition duration-500">
                <h4 className=" px-4 py-6 z-20 leading-tight ">
                  For students preparing to enter a prestigious university
                </h4>
                <div className="h-full">
                  <Image
                    width={1000}
                    height={1000}
                    className="object-cover w-full pt-20 h-full transition-opacity absolute duration-500 ease-in-out opacity-100 group-hover:hidden bottom-0"
                    src="/benefit/4_4.webp"
                    alt=""
                  />

                  <div className="relative bottom-0 inset-0 flex h-full flex-col justify-between px-9 sm:px-9 py-3 sm:pb-8 sm:py-8 gap-3 sm:gap-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                    <p className=" text-[16px] ">Is this about you?</p>
                    <ul className="list-disc  flex-1 justify-between flex flex-col ml-10">
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

        <div
          id="contact-us"
          className="mt-20 border-t-2 border-gray-200 pt-5 lg:container"
        >
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

        {/* <div className="mt-20 container">
          <h3 className="text-[#003372]   ">Partnered by</h3>
          <div className="h-[2px] my-10 w-full bg-blue-900"></div>
          <Carousel />
        </div> */}
      </div>
      {/* <FooterPartner partner={partner} /> */}
    </>
  );
};
export default page;
