import React from "react";
import Image from "next/image";
import ContactUsSection from "../components/sections/ContactUsSection";

interface pageProps {}

const Page: React.FC<pageProps> = ({}) => {
  return (
    <>
      <div className="container mt-10 py-9 bg-asset-2 mb-16 bg-no-repeat bg-cover bg-center rounded-3xl bg-blue-900 bg-blend-multiply flex items-center flex-col gap-12 pb-14 pt-20">
        <div className="grid grid-cols-1 px-5 text-white sm:grid-cols-2">
          <h1>Meet Our Senior Academic Team</h1>
          <div>
            <p>
              At IWS Online School, our dedicated and passionate educators are
              the heart of our community. We are committed to providing
              exceptional learning experiences and support to every student, and
              each of our team members plays a vital role in helping students
              achieve their academic goals.
            </p>
            <p className="mt-3">
              Get to know the incredible people who make IWS Online School a
              truly unique and supportive environment for all learners.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-14 py-9">
        <div className="sm:hidden">
          <Image
            width={1000}
            height={1000}
            className=" object-cover md:w-1/2"
            src="/IWS_fees_1.webp"
            alt=""
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 ">
          <div className="col-span-2">
            <p className="bg-blue-600 text-white w-fit px-3 py-1 rounded-md">
              Executive Head Teacher
            </p>
            <h2 className="mt-5">Matt Vickery</h2>
            <p className="mt-5">
              {
                "As the Executive Head Teacher at IWS Online School, Matt brings 28 years of teaching experience, including roles as Head Teacher in two traditional schools. He pioneered online education, making IWS the first registered Cambridge Assessment International Education online school. Matt's passion lies in understanding learning processes and integrating emerging technologies, starting from programming BBC computers in 1982 to teaching in the MetaVerse today."
              }
            </p>
          </div>
          <div className=" hidden sm:block">
            <Image
              width={1000}
              height={1000}
              className=" object-cover md:w-1/2"
              src="/IWS_fees_1.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="p-[1px] container bg-gray-200"></div>
      <div className="pt-20 container">
        <h2 className="text-center">Leadership Team</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div>
            <Image
              width={1000}
              height={1000}
              className=" object-cover md:w-1/2"
              src="/IWS_fees_1.webp"
              alt=""
            />
            <div>Title</div>
            <div>Jenna Nel</div>
          </div>
          <div>
            <Image
              width={1000}
              height={1000}
              className=" object-cover md:w-1/2"
              src="/IWS_fees_1.webp"
              alt=""
            />
            <div>Title</div>
            <div>Lori Cali</div>
          </div>
          <div>
            <Image
              width={1000}
              height={1000}
              className=" object-cover md:w-1/2"
              src="/IWS_fees_1.webp"
              alt=""
            />
            <div>Title</div>
            <div>Ozlem Ulusoy</div>
          </div>
        </div>
      </div>
      <div className="p-[1px] container bg-gray-200 mt-20"></div>
      <div className="pt-20 container">
        <h2 className="text-center">Our Expert Educators</h2>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-6">
          <div>
            <Image
              width={1000}
              height={1000}
              className=" object-cover md:w-1/2"
              src="/IWS_fees_1.webp"
              alt=""
            />
            <div>Alex Farmer</div>
            <div>Media Studies Teacher</div>
          </div>
          <div>
            <Image
              width={1000}
              height={1000}
              className=" object-cover md:w-1/2"
              src="/IWS_fees_1.webp"
              alt=""
            />
            <div>Danielle Roodt</div>
            <div>Business and Economics Teacher</div>
          </div>
          <div>
            <Image
              width={1000}
              height={1000}
              className=" object-cover md:w-1/2"
              src="/IWS_fees_1.webp"
              alt=""
            />
            <div>Darion</div>
            <div>Mathematics Teacher</div>
          </div>
          <div>
            <Image
              width={1000}
              height={1000}
              className=" object-cover md:w-1/2"
              src="/IWS_fees_1.webp"
              alt=""
            />
            <div>Deborah</div>
            <div>Chemistry Teacher</div>
          </div>
          <div>
            <Image
              width={1000}
              height={1000}
              className=" object-cover md:w-1/2"
              src="/IWS_fees_1.webp"
              alt=""
            />
            <div>James Broad</div>
            <div>Biology Teacher</div>
          </div>
          <div>
            <Image
              width={1000}
              height={1000}
              className=" object-cover md:w-1/2"
              src="/IWS_fees_1.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="p-[1px] mt-20 container bg-gray-200"></div>
      <div className="pt-20 container">
        <h2 className="text-center">Why Our Team Makes a Difference</h2>
        <p className="text-center mt-5">
          {
            "At IWS Online School, we believe in the power of collaboration and personalized care. Our team is united by a common goal: to make every student's educational experience enriching, fulfilling, and successful. Here's how they do it: "
          }
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 mt-5 gap-5">
          <div className="p-7 rounded-3xl border-2 border-yellow-200">
            <h3>Personalised Learning</h3>
            <p>
              {"Our teachers design lessons and support that cater to each students individual learning needs."}
            </p>
          </div>
          <div className="p-7 rounded-3xl border-2 border-green-200">
            <h3>Supportive Environment</h3>
            <p>
              {"From one-on-one mentorship to timely feedback, our team is always there to guide and encourage students."}
            </p>
          </div>
          <div className="p-7 rounded-3xl border-2 border-blue-200">
            <h3>Global Experience</h3>
            <p>
              {"Our team's diverse backgrounds enrich every lesson and interaction with a global perspective."}
            </p>
          </div>
        </div>
      </div>
      <div className="p-[1px] mt-20 container bg-gray-200"></div>
      <div className="py-20">
        <ContactUsSection />
      </div>
    </>
  );
};

export default Page;
