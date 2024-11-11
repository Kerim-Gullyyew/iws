import React from "react";

import Image from "next/image";
import ContactUsSection from "../components/sections/ContactUsSection";
import AccordionSecondary from "../components/ui/AccordionSecondary";
import Link from "next/link";

interface pageProps {}

const Page: React.FC<pageProps> = ({}) => {
  return (
    <>
      <div className="container text-white mt-10 py-9 bg-asset-2 mb-16 bg-no-repeat bg-cover bg-center rounded-3xl bg-blue-500 bg-blend-multiply flex items-center flex-col gap-5 pb-14 pt-20">
        <h1 className="text-center">Admission Process at IWS</h1>
        <p className="text-center">
          {"Here's how to get started with our Online Educational Programme:"}
        </p>
      </div>

      <div className="container mt-20">
        <div className="flex h-1 w-full">
          <div className="w-1/4 bg-blue-500"></div>
          <div className="w-3/4 bg-gray-400"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-5">
          <h2>
            <span className="text-blue-500">1. </span>Submit the Application
          </h2>
          <p>
            Complete the{" "}
            <Link
              className="text-blue-500"
              href="https://iws-register.iwsonlineschool.co.uk/"
            >
              {"application form "}
            </Link>
            to begin the enrolment process and take the first step towards
            joining IWS.
          </p>
        </div>
        <div className="flex h-1 w-full mt-9">
          <div className="w-2/4 bg-blue-500"></div>
          <div className="w-2/4 bg-gray-400"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-5">
          <h2>
            <span className="text-blue-500">2. </span>Assessment and Meeting
          </h2>
          <p>
            {
              "We'll arrange assessments and a meeting to review results, select subjects, and discuss your child's goals."
            }
          </p>
        </div>
        <div className="flex h-1 w-full mt-9">
          <div className="w-3/4 bg-blue-500"></div>
          <div className="w-1/4 bg-gray-400"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-5">
          <h2>
            <span className="text-blue-500">3. </span>Finalise Enrolment
          </h2>
          <p>
            {
              "Complete the required documentation to secure your chil's place in our educational community."
            }
          </p>
        </div>
        <div className="flex h-1 w-full bg-blue-500 mt-9"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-5">
          <h2>
            <span className="text-blue-500">4. </span>Begin Learning at IWS
          </h2>
          <p>
            {
              "Meet your teachers, receive your timetable, and get ready for an exciting learning journey with us at IWS."
            }
          </p>
        </div>
      </div>
      <div className="container mt-20">
        <h2 className="text-center ">Who can benefit from our school?</h2>
        <div className="flex justify-center pt-8 sm:pt-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 lg:gap-10 xl:gap-3">
            <div className="group max-w-[380px] relative bg-[#F4F5F8] flex justify-between flex-col cursor-pointer hover:bg-[#EBF0FE] rounded-xl overflow-hidden transition duration-500">
              <h4 className="z-20 px-4 py-6 leading-tight ">
                For those who are not satisfied with a regular school
              </h4>
              <div className="h-full">
                <Image
                  width={1000}
                  height={1000}
                  className="absolute bottom-0 object-cover w-full h-full pt-20 transition-opacity duration-500 ease-in-out opacity-100 group-hover:hidden"
                  src="/benefit/4_1.webp"
                  alt=""
                />

                <div className="relative inset-0 bottom-0 flex flex-col justify-between h-full gap-3 py-3 transition-opacity duration-500 ease-in-out opacity-0 px-9 sm:px-9 sm:pb-8 sm:py-8 sm:gap-10 group-hover:opacity-100">
                  <p className=" text-[16px] ">Is this about you?</p>
                  <ul className="flex flex-col justify-between flex-1 ml-10 list-disc">
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
              <h4 className="z-20 px-4 py-6 leading-tight ">
                For students who often miss school.
              </h4>
              <div className="h-full">
                <Image
                  width={1000}
                  height={1000}
                  className="absolute bottom-0 object-cover w-full h-full pt-20 transition-opacity duration-500 ease-in-out opacity-100 group-hover:hidden"
                  src="/benefit/4_2.webp"
                  alt=""
                />

                <div className="relative inset-0 bottom-0 flex flex-col justify-between h-full gap-3 py-3 transition-opacity duration-500 ease-in-out opacity-0 px-9 sm:px-9 sm:pb-8 sm:py-8 sm:gap-10 group-hover:opacity-100">
                  <p className=" text-[16px] ">Does this sound like you?</p>
                  <ul className="flex flex-col justify-between flex-1 ml-10 list-disc">
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
              <h4 className="z-20 px-4 py-6 leading-tight ">
                For those who live abroad or the family travels a lot
              </h4>
              <div className="h-full">
                <Image
                  width={1000}
                  height={1000}
                  className="absolute bottom-0 object-cover w-full h-full pt-20 transition-opacity duration-500 ease-in-out opacity-100 group-hover:hidden"
                  src="/benefit/4_3.webp"
                  alt=""
                />

                <div className="relative inset-0 bottom-0 flex flex-col justify-between h-full gap-3 py-3 transition-opacity duration-500 ease-in-out opacity-0 px-9 sm:px-9 sm:pb-8 sm:py-8 sm:gap-10 group-hover:opacity-100">
                  <p className=" text-[16px] ">Is this about you?</p>
                  <ul className="flex flex-col justify-between flex-1 ml-10 list-disc">
                    <li className=" text-[16px] font-normal">
                      Frequent relocation due to parental work or lifestyle
                      choices.
                    </li>
                    <li className=" text-[16px] font-normal">
                      Desire for continuity in education despite changing
                      locations.
                    </li>
                    <li className=" text-[16px] font-normal">
                      Need for a supportive learning environment that transcends
                      geographical boundaries.
                    </li>
                  </ul>
                  <p className=" text-[16px] ">
                    Then our school is right for you!
                  </p>
                </div>
              </div>
            </div>
            <div className="group max-w-[380px] relative bg-[#F4F5F8] flex justify-between flex-col cursor-pointer hover:bg-[#EBF0FE] rounded-xl overflow-hidden transition duration-500">
              <h4 className="z-20 px-4 py-6 leading-tight ">
                For students preparing to enter a prestigious university
              </h4>
              <div className="h-full">
                <Image
                  width={1000}
                  height={1000}
                  className="absolute bottom-0 object-cover w-full h-full pt-20 transition-opacity duration-500 ease-in-out opacity-100 group-hover:hidden"
                  src="/benefit/4_4.webp"
                  alt=""
                />

                <div className="relative inset-0 bottom-0 flex flex-col justify-between h-full gap-3 py-3 transition-opacity duration-500 ease-in-out opacity-0 px-9 sm:px-9 sm:pb-8 sm:py-8 sm:gap-10 group-hover:opacity-100">
                  <p className=" text-[16px] ">Is this about you?</p>
                  <ul className="flex flex-col justify-between flex-1 ml-10 list-disc">
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
      <div className="container mt-20">
        <h2 className="mt-4 text-center">
          We teach students from all over the world
        </h2>
        <div className="justify-center flex items-center mt-5">
          <Image
            width={1000}
            height={1000}
            className=""
            src="/IWS-Map.png"
            alt=""
          />
        </div>
      </div>
      <div className="container mt-20">
        <h2 className="text-center">FAQS</h2>
        <div className="flex flex-col gap-8 pt-8 sm:pt-12">
          <AccordionSecondary title="Why us?">
            <div className="space-y-5 ">
              <p className="text-p">
                Our British online school revolutionises remote education. With
                an easy-to-use platform, flexible academic programmes, and
                adaptable schedules, we provide a learning experience that can
                often exceed that of traditional schools.
              </p>
              <p className="text-p">
                Globally, schools are embracing technology to meet evolving
                educational standards. It is anticipated that within the next
                few decades, online education will become commonplace. At IWS,
                we lead by prioritising online teaching.
              </p>
              <p className="text-p">
                Our teachers are adept at delivering Live Online Lessons with
                great enthusiasm and proficiency. We also employ sophisticated
                and reliable technology to ensure our virtual classrooms meet
                every need of our pupils, including round-the-clock access to
                recorded lessons to support independent study.
              </p>
              <p className="text-p">
                In this respect, we are advancing faster than many educational
                institutions that are just beginning to embark on this digital
                transition.
              </p>
              <p className="text-p">
                IWS places great value on the educational experiences that occur
                beyond the classroom walls. Thus, we offer numerous
                opportunities for group interaction through a variety of clubs,
                extracurricular activities, and online social gatherings. This
                approach allows each student to connect with others across the
                globe, fostering a sense of belonging to a vibrant community
                that extends beyond the end of the school day.
              </p>
            </div>
          </AccordionSecondary>

          <AccordionSecondary title="Are you accredited?">
            <div className="space-y-5 ">
              <p className="text-p">
                Yes, we offer Cambridge Assessment International Education. We
                are registered as UK Learner Providers and are in the process of
                obtaining our membership with the Council of International
                Schools (CIS).
              </p>
            </div>
          </AccordionSecondary>

          <AccordionSecondary title="Where are you based?">
            <div className="space-y-5 ">
              <p className="text-p">
                We are based in the UK, our headquarters are registered at 31
                Long Acre Covent Garden, London England WC2E 9LA
              </p>
            </div>
          </AccordionSecondary>

          <AccordionSecondary title="How does your online school work?">
            <div className="space-y-5 ">
              <p className="text-p">
                Our trained teachers employ a range of teaching aids to support
                learning, such as high-quality video cameras, interactive
                whiteboards, screen sharing, live presentations, and lesson
                recordings. Students at IWS can join classes through a safe
                online link. Teachers use various methods and activities,
                including quizzes, presentations, and group work, in their
                lessons. The use of modern technology makes learning enjoyable
                for students and enhances their educational journey compared to
                conventional methods. This also boosts their learning as they
                study from home.
              </p>
            </div>
          </AccordionSecondary>
          <AccordionSecondary title="Does online learning isolate students from their peers?">
            <div className="space-y-5 ">
              <p className="text-p">
                Many parents worry about whether online learning will allow
                their child to socialise properly. At IWS, we encourage our
                international students to interact with one another by holding
                various clubs, social gatherings, and events throughout the
                school year. We also offer a summer camp, a student council, and
                additional activities for students to enjoy in their spare time.
                Furthermore, students enrolled in the same courses often work
                together on group tasks and projects. These collaborative
                efforts help develop communication skills and leadership
                abilities. All activities in our online classrooms are recorded
                and supervised to ensure the safety of our students online. We
                also provide training on how to use social media responsibly to
                maintain a safe environment for all student interactions.
              </p>
            </div>
          </AccordionSecondary>

          <AccordionSecondary title="I reside outside the UK; is this educational approach acknowledged in my country?">
            <div className="space-y-5 ">
              <p className="text-p">
                Every country has different rules about what kinds of education
                can take the place of traditional classroom learning. So, we
                suggest that parents check if homeschooling is allowed in the
                country where they plan to live or work before applying to our
                school. Please also remember that our lessons follow the
                standards of the English education system, and our staff are
                experts only in this system.
              </p>
            </div>
          </AccordionSecondary>

          <AccordionSecondary title="Are lessons taught in any other languages, other than English?">
            <div className="space-y-5 ">
              <p className="text-p">
                Currently, all our subjects are taught in English, in line with
                a British curriculum. We do, however, teach several foreign
                languages, including French, German, and Chinese, where teachers
                and students frequently engage in conversations in the language
                of study.
              </p>
            </div>
          </AccordionSecondary>
        </div>
      </div>
      <div className="my-20 container">
        <ContactUsSection />
      </div>
    </>
  );
};

export default Page;
