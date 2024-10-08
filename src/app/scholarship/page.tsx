import Image from "next/image";
import Link from "next/link";
import ContactUsSection from "../components/sections/ContactUsSection";
import { partners } from "@/app/data/partners";
import AccordionSecondary from "../components/ui/AccordionSecondary";

interface pageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const page: React.FC<pageProps> = ({ params, searchParams }) => {
  const { slug } = params;
  const partner = partners.find((partner) => partner.slug === slug);

  return (
    <>
      <div className="py-14 lg:py-24 animate-fade-in">
        <div className="gap-10 container sm:gap-14 flex-col flex justify-center items-center lg:flex lg:flex-row">
          <div className="gap-10 sm:gap-14 flex-col flex justify-center">
            <h1 className=" leading-[50px] lg:leading-[70px] text-[35px] lg:text-[50px] sm:text-[40px] ">
            IWS Online School
            Scholarship Exam
            </h1>

            <p className="leading-[32px] text-[18px] sm:text-[24px]">
              {
                "Open to students from Year 3 to Year 13. Compete for a chance to win scholarships for IWS's online programs."
              }
            </p>

            <p className="leading-[32px]  text-[18px] sm:text-[24px]">
              Exam Date: November 25th
            </p>

            <div className="flex items-center justify-center flex-wrap gap-5 sm:justify-start">
              <Link
                href="#contact-us"
                className={
                  "bg-[#4366F6] rounded-xl px-7 py-3 text-white hover:bg-[#2C50C7] transition-all duration-300  text-lg"
                }>
                Register Now
              </Link>
              <Link
                href="/contact-us"
                className={
                  "bg-[#4366F6] rounded-xl px-7 py-3 text-white hover:bg-[#2C50C7] transition-all duration-300  text-lg"
                }>
                Contact Us
              </Link>
            </div>
          </div>

          <Image
            width={450}
            height={450}
            className="w-[300px] max-w-[90%] min-w-[280px] sm:w-[450px] sm:min-w-[50%] sm:flex lg:w-auto object-contain"
            src="/scholarship/Scholarship_1.webp"
            priority={true}
            sizes="(max-width: 576px) 40vw"
            alt=""
          />
        </div>

        <div
          id="howwork"
          className="mt-20 border-t-2 border-gray-200 pt-5 container">
          <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
            <h2 className="font-semibold md:flex-1">Exam Details at a Glance</h2>
            <p className="md:flex-1">
              {
                "Find essential information about the IWS Scholarship Exam, including wha can participate, the subjects covered, and how the exam will be structured."
              }
            </p>
          </div>

          <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-5 gap-y-14">
            <div className="relative py-4 px-2 hover:-translate-y-2 transition-transform duration-300 border-[3px] border-gray-100 flex flex-col justify-between rounded-xl">
              <Image
                width={1000}
                height={1000}
                className="max-w-lg w-11/12 object-contain self-center"
                src="/scholarship/2_1.webp"
                alt=""
              />

              <div className="bg-white flex-1 flex gap-10 justify-between flex-col m-[3px] p-3 rounded-b-xl">
                <div className="flex flex-col gap-4">
                  <h3 className="text-[20px] text-center font-[500] leading-7">
                  Date & Time
                  </h3>
                  <p className="text-p text-center leading-6">
                  The exam takes place on November 25th, with exact times based on your location.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative py-4 px-2 hover:-translate-y-2 transition-transform duration-300 border-[3px] border-gray-100 flex flex-col justify-between rounded-xl">
              <Image
                width={1000}
                height={1000}
                className="max-w-lg w-11/12 object-contain self-center"
                src="/scholarship/2_2.webp"
                alt=""
              />

              <div className="bg-white flex-1 flex gap-10 justify-between flex-col m-[3px] p-3 rounded-b-xl">
                <div className="flex flex-col gap-4">
                  <h3 className="text-[20px] text-center font-[500] leading-7">
                  Who Can Enter?
                  </h3>
                  <p className="text-p text-center leading-6">
                  Open to students from Year 3 to Year 13, competing within their year groups.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative py-4 px-2 hover:-translate-y-2 transition-transform duration-300 border-[3px] border-gray-100 flex flex-col justify-between rounded-xl">
              <Image
                width={1000}
                height={1000}
                className="max-w-lg w-11/12 object-contain self-center"
                src="/scholarship/2_3.webp"
                alt=""
              />

              <div className="bg-white flex-1 flex gap-10 justify-between flex-col m-[3px] p-3 rounded-b-xl">
                <div className="flex flex-col gap-4">
                  <h3 className="text-[20px] text-center font-[500] leading-7">
                  Exam Subjects
                  </h3>
                  <p className="text-p text-center leading-6">
                  {"The exam covers Maths and English, adjusted to each year's curriculum."}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative py-4 px-2 hover:-translate-y-2 transition-transform duration-300 border-[3px] border-gray-100 flex flex-col justify-between rounded-xl">
              <Image
                width={1000}
                height={1000}
                className="max-w-lg w-11/12 object-contain self-center"
                src="/scholarship/2_4.webp"
                alt=""
              />

              <div className="bg-white flex-1 flex gap-10 justify-between flex-col m-[3px] p-3 rounded-b-xl">
                <div className="flex flex-col gap-4">
                  <h3 className="text-[20px] text-center font-[500] leading-7">
                  Exam Format
                  </h3>
                  <p className="text-p text-center leading-6">
                    An online test with a mix of multiple-choice and short-answer questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="participate"
          className="mt-20 border-t-2 border-gray-200 pt-5 container">
          <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
            <h2 className="font-semibold md:flex-1">Why Participate</h2>
            <p className="md:flex-1">
              {
                "Understand the benefits of participating in the exam, including the chance to win scholarships and vouchers, while joining a prestigious online school."
              }
            </p>
          </div>

          <div className="pt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-5 gap-y-14">
            <div className="p-10 bg-blue-500 rounded-lg space-y-8">
              <h4 className="text-white font-bold text-center">
              {"Earn scholarships for IWS's accredited online programs"}
              </h4>

              <p className="text-white text-center text-sm">
              Top performers can win scholarships to cover part or all of their tuition fees.
              </p>
            </div>
            <div className="p-10 bg-green-500 rounded-lg space-y-8">
              <h4 className="text-white font-bold text-center">
              Gain a £50 voucher for participating
              </h4>

              <p className="text-white text-center text-sm">
              All participants receive a £50 voucher to use toward IWS services.
              </p>
            </div>
            <div className="p-10 bg-orange-500 rounded-lg space-y-8">
              <h4 className="text-white font-bold text-center">
              Be part of a globally recognized, Cambridge accredited school
              </h4>

              <p className="text-white text-center text-sm">
              Join an online school accredited by Cambridge and recognised worldwide.
              </p>
            </div>
          </div>
        </div>

        <div
          id="results"
          className="mt-20 border-t-2 border-gray-200 pt-5 container">
          <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
            <h2 className="font-semibold md:flex-1">Results and Awards</h2>
            <p className="md:flex-1">
              {
                "Find essential information about the IWS Scholarship Exam, including who can participate, the subjects covered, and how the exam will be structured"
              }
            </p>
          </div>

          <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-5 gap-y-14">
            <div className="relative p-4 hover:-translate-y-2 transition-transform duration-300 border-[3px] border-gray-100 flex flex-col  rounded-xl gap-10">
              <div className="bg-orange-400 py-3">
                <p className="text-white text-xl font-semibold text-center">
                  First Place
                </p>
              </div>

              <div className="flex-1 flex flex-col justify-center items-center">
                <p className="text-center text-8xl font-semibold">50%</p>
                <p className="text-center text-3xl font-semibold">
                  SCHOLARSHIP
                </p>
              </div>
            </div>

            <div className="relative p-4 hover:-translate-y-2 transition-transform duration-300 border-[3px] border-gray-100 flex flex-col  rounded-xl gap-10">
              <div className="bg-gray-400 py-3">
                <p className="text-white text-xl font-semibold text-center">
                Second Place
                </p>
              </div>

              <div className="flex-1 flex flex-col justify-center items-center">
                <p className="text-center text-8xl font-semibold">25%</p>
                <p className="text-center text-3xl font-semibold">
                  SCHOLARSHIP
                </p>
              </div>
            </div>

            <div className="relative p-4 hover:-translate-y-2 transition-transform duration-300 border-[3px] border-gray-100 flex flex-col  rounded-xl gap-10">
              <div className="bg-yellow-600 py-3">
                <p className="text-white text-xl font-semibold text-center">
                  Third Place
                </p>
              </div>

              <div className="flex-1 flex flex-col justify-center items-center">
                <p className="text-center text-8xl font-semibold">15%</p>
                <p className="text-center text-3xl font-semibold">
                  SCHOLARSHIP
                </p>
              </div>
            </div>

            <div className="relative p-4 hover:-translate-y-2 transition-transform duration-300 border-[3px] border-gray-100 flex flex-col  rounded-xl gap-10">
              <div className="bg-blue-500 py-3">
                <p className="text-white text-xl font-semibold text-center">
                  Participants
                </p>
              </div>

              <div className="flex-1 flex flex-col justify-center items-center">
                <p className="text-center text-8xl font-semibold">£50</p>
                <p className="text-center text-3xl font-semibold">
                  GIFT VOUCHER
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 container border-t-2 pt-5 border-gray-200">
          <h2>FAQs</h2>
          <div className="pt-8 sm:pt-12 flex flex-col gap-8">
            <AccordionSecondary title="Why us?">
              <div className=" space-y-5">
                <p className="text-p">
                  Our British online school revolutionises remote education.
                  With an easy-to-use platform, flexible academic programmes,
                  and adaptable schedules, we provide a learning experience that
                  can often exceed that of traditional schools.
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
                  IWS places great value on the educational experiences that
                  occur beyond the classroom walls. Thus, we offer numerous
                  opportunities for group interaction through a variety of
                  clubs, extracurricular activities, and online social
                  gatherings. This approach allows each student to connect with
                  others across the globe, fostering a sense of belonging to a
                  vibrant community that extends beyond the end of the school
                  day.
                </p>
              </div>
            </AccordionSecondary>

            <AccordionSecondary title="Are you accredited?">
              <div className=" space-y-5">
                <p className="text-p">
                  Yes, we offer Cambridge Assessment International Education. We
                  are registered as UK Learner Providers and are in the process
                  of obtaining our membership with the Council of International
                  Schools (CIS).
                </p>
              </div>
            </AccordionSecondary>

            <AccordionSecondary title="Where are you based?">
              <div className=" space-y-5">
                <p className="text-p">
                  We are based in the UK, our headquarters are registered at 31
                  Long Acre Covent Garden, London England WC2E 9LA
                </p>
              </div>
            </AccordionSecondary>

            <AccordionSecondary title="How does your online school work?">
              <div className=" space-y-5">
                <p className="text-p">
                  Our trained teachers employ a range of teaching aids to
                  support learning, such as high-quality video cameras,
                  interactive whiteboards, screen sharing, live presentations,
                  and lesson recordings. Students at IWS can join classes
                  through a safe online link. Teachers use various methods and
                  activities, including quizzes, presentations, and group work,
                  in their lessons. The use of modern technology makes learning
                  enjoyable for students and enhances their educational journey
                  compared to conventional methods. This also boosts their
                  learning as they study from home.
                </p>
              </div>
            </AccordionSecondary>
            <AccordionSecondary title="Does online learning isolate students from their peers?">
              <div className=" space-y-5">
                <p className="text-p">
                  Many parents worry about whether online learning will allow
                  their child to socialise properly. At IWS, we encourage our
                  international students to interact with one another by holding
                  various clubs, social gatherings, and events throughout the
                  school year. We also offer a summer camp, a student council,
                  and additional activities for students to enjoy in their spare
                  time. Furthermore, students enrolled in the same courses often
                  work together on group tasks and projects. These collaborative
                  efforts help develop communication skills and leadership
                  abilities. All activities in our online classrooms are
                  recorded and supervised to ensure the safety of our students
                  online. We also provide training on how to use social media
                  responsibly to maintain a safe environment for all student
                  interactions.
                </p>
              </div>
            </AccordionSecondary>

            <AccordionSecondary title="I reside outside the UK; is this educational approach acknowledged in my country?">
              <div className=" space-y-5">
                <p className="text-p">
                  Every country has different rules about what kinds of
                  education can take the place of traditional classroom
                  learning. So, we suggest that parents check if homeschooling
                  is allowed in the country where they plan to live or work
                  before applying to our school. Please also remember that our
                  lessons follow the standards of the English education system,
                  and our staff are experts only in this system.
                </p>
              </div>
            </AccordionSecondary>

            <AccordionSecondary title="Are lessons taught in any other languages, other than English?">
              <div className=" space-y-5">
                <p className="text-p">
                  Currently, all our subjects are taught in English, in line
                  with a British curriculum. We do, however, teach several
                  foreign languages, including French, German, and Chinese,
                  where teachers and students frequently engage in conversations
                  in the language of study.
                </p>
              </div>
            </AccordionSecondary>
          </div>
        </div>
      </div>
    </>
  );
};
export default page;
