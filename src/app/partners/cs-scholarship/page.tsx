import Image from "next/image";
import Link from "next/link";
// import ContactUsSection from "../components/sections/ContactUsSection";
import { partners } from "@/app/data/partners";
import AccordionSecondary from "../../components/ui/AccordionSecondary";
import ContactUsSection from "../../components/sections/ContactUsSection";

interface pageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const imagePath = "/scholarship/chart.png";

const page: React.FC<pageProps> = ({ params, searchParams }) => {
  const { slug } = params;
  const partner = partners.find((partner) => partner.slug === slug);

  return (
    <>
      <div className="py-14 lg:py-24 animate-fade-in">
        <div className="gap-10 container sm:gap-14 flex-col flex justify-center items-center lg:flex lg:flex-row">
          <div className="gap-10 sm:gap-7 flex-col flex justify-center">
            <h1 className=" leading-[50px] lg:leading-[70px] text-[35px] lg:text-[50px] sm:text-[40px] ">
              IWS Online School Scholarship Exam for Bangladesh
            </h1>

            <p className="leading-[32px] text-[18px] sm:text-[24px]">
              {
                "Exclusive Opportunity for Students in Bangladesh! Compete to earn a scholarship for IWS Online School programmes. Open to students from Year 3 to Year 13."
              }
            </p>
            <p className="leading-[32px] text-[18px] sm:text-[24px]">
              {
                "We've partnered with CS Meta Limited, supported by global CS Valley to bring up to a 40% scholarship to students in Bangladesh, making it easier to access world-class education through IWS Online School."
              }
            </p>

            <p className="leading-[32px]  text-[18px] sm:text-[24px]">
              Exam Date: 11th January 2025 at 07:00 PM
            </p>
            <p className="leading-[32px]  text-[18px] sm:text-[24px]">
              Deadline: 10th January 2025 at 11:50 PM
            </p>

            <div className="flex items-center justify-center flex-wrap gap-5 sm:justify-start">
              <Link
                href="https://www.bestys.co/default/competition/details?productId=110"
                className={
                  "bg-[#4366F6] rounded-xl px-7 py-3 text-white hover:bg-[#2C50C7] transition-all duration-300  text-lg"
                }
              >
                Register Now
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
          id="howwork"
          className="mt-20 border-t-2 border-gray-200 pt-5 container"
        >
          <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
            <h2 className="font-semibold md:flex-1">
              Exam Details at a Glance
            </h2>
            <p className="md:flex-1">
              {
                "Find essential information about the IWS Scholarship Exam, including eligible participants, the content of the exam and how the exam will be conducted."
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
                    The exam takes place 11th January 2025 at 07:00 PM your local
                    time.
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
                    Eligible Participants
                  </h3>
                  <p className="text-p text-center leading-6">
                    Students who are currently studying Year 3- Year 13.
                    Students will compete within their year group.
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
                    Exam Content
                  </h3>
                  <p className="text-p text-center leading-6">
                    {
                      "The exam covers topics in English and Maths from topics in the respective year group."
                    }
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
                    An online assessment with a mix of multiple choice and short
                    answer questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="participate"
          className="mt-20 border-t-2 border-gray-200 pt-5 container"
        >
          <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
            <h2 className="font-semibold md:flex-1">Why Participate</h2>
            <p className="md:flex-1">
              {
                "Benefits of participating in the IWS Online Scholarship Exam: The opportunity to join a prestigious online school by being awarded scholarships towards the academic tuition fees. Participate in an exam that informs you of your current knowledge and skills for your expected year group."
              }
            </p>
          </div>

          <div className="pt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 lg:gap-5 gap-y-14">
            <div className="p-10 bg-blue-500 rounded-lg space-y-8">
              <h4 className="text-white font-bold text-center">
                {"Receive scholarships for IWS's accredited online programmes"}
              </h4>

              <p className="text-white text-center text-sm">
                Top performers can be awarded partial or full scholarships for
                their academic tuition fees.
              </p>
            </div>
            <div className="p-10 bg-green-500 rounded-lg space-y-8">
              <h4 className="text-white font-bold text-center">
                Receive a 50 pounds voucher for participating in the IWS
                Scholarship Exam.
              </h4>

              <p className="text-white text-center text-sm">
                All participants receive a 50 pounds voucher to use towards IWS
                services.
              </p>
            </div>
            <div className="p-10 bg-orange-500 rounded-lg space-y-8">
              <h4 className="text-white font-bold text-center">
                Be part of a recognised Cambridge accredited school!
              </h4>

              <p className="text-white text-center text-sm">
                Join IWS Online School that provides world- class international
                education.
              </p>
            </div>
          </div>
        </div>

        <div
          id="results"
          className="mt-20 border-t-2 border-gray-200 pt-5 container"
        >
          <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
            <h2 className="font-semibold md:flex-1">Results and Awards</h2>
            {/* <p className="md:flex-1">
              {
                "Find essential information about the IWS Scholarship Exam, including who can participate, the subjects covered, and how the exam will be structured."
              }
            </p> */}
          </div>
          <h2 className="font-semibold pt-16">From Class 1 - 8</h2>

          <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-5 gap-y-14">
            <div className="relative p-4 hover:-translate-y-2 transition-transform duration-300 border-[3px] border-gray-100 flex flex-col  rounded-xl gap-10">
              <div className="bg-orange-400 py-3">
                <p className="text-white text-xl font-semibold text-center">
                  First Place
                </p>
              </div>

              <div className="flex-1 flex flex-col justify-center items-center">
                <p className="text-center text-8xl font-semibold">40%</p>
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
                <p className="text-center text-8xl font-semibold">35%</p>
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
                <p className="text-center text-8xl font-semibold">30%</p>
                <p className="text-center text-3xl font-semibold">
                  SCHOLARSHIP
                </p>
              </div>
            </div>

            {/* <div className="relative p-4 hover:-translate-y-2 transition-transform duration-300 border-[3px] border-gray-100 flex flex-col  rounded-xl gap-10">
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
            </div> */}
          </div>
          <h2 className="font-semibold pt-16">From Class 9 - A Levels </h2>

          <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-5 gap-y-14">
            <div className="relative p-4 hover:-translate-y-2 transition-transform duration-300 border-[3px] border-gray-100 flex flex-col  rounded-xl gap-10">
              <div className="bg-orange-400 py-3">
                <p className="text-white text-xl font-semibold text-center">
                  First Place
                </p>
              </div>

              <div className="flex-1 flex flex-col justify-center items-center">
                <p className="text-center text-8xl font-semibold">10%</p>
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
                <p className="text-center text-8xl font-semibold">5%</p>
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
                <p className="text-center text-8xl font-semibold">3%</p>
                <p className="text-center text-3xl font-semibold">
                  SCHOLARSHIP
                </p>
              </div>
            </div>

            {/* <div className="relative p-4 hover:-translate-y-2 transition-transform duration-300 border-[3px] border-gray-100 flex flex-col  rounded-xl gap-10">
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
            </div> */}
          </div>
        </div>

        <div className="mt-20 container border-t-2 pt-5 border-gray-200">
          <h2>FAQs</h2>
          <div className="pt-8 sm:pt-12 flex flex-col gap-8 text-left">
            <AccordionSecondary title="Can I use any device to access the exam questions and complete my exam?">
              <div className=" space-y-5">
                <p className="text-p">
                  {`Yes, the platform supports mobile phones and tablets. However, it is crucial to use a device with a functioning camera. Your camera must remain on at all times, and your face must be clearly visible throughout the exam. Failure to meet these requirements will result in the exam being invalid.`}
                </p>
              </div>
            </AccordionSecondary>

            <AccordionSecondary title="How do I register for the exam?">
              <div className=" space-y-5">
                <p className="text-p">
                  {`On the IWS scholarship exam page, click on the "Register for the Exam" button. You must complete the registration form and pay the exam fee at the latest one day before the exam. Registration will close at 11:50 PM your local time on 10th January 2025.`}
                </p>
              </div>
            </AccordionSecondary>

            <AccordionSecondary title="What is the format of the scholarship exam?">
              <div className=" space-y-5">
                <p className="text-p">
                  {
                    "The scholarship exam consists of two sections: Maths and English. Each section has 25 questions, a total of 50 questions. Both sections must be completed within 60 minutes."
                  }
                </p>
              </div>
            </AccordionSecondary>

            <AccordionSecondary title="Can students take a break between the English and Maths sections of the exam?">
              <div className=" space-y-5">
                <p className="text-p">
                  {
                    "No, Maths and English are part of the same exam. Students must finish the entire exam in one sitting within 60 minutes."
                  }
                </p>
              </div>
            </AccordionSecondary>

            <AccordionSecondary title="What happens if a student loses connection during the exam? Will they be able to resume where they left off, or will they have to restart the exam from the beginning?">
              <div className=" space-y-5 text-left">
                <p className="text-p">
                  {
                    "Students can rejoin from any device and continue where they left off, as long as the exam timer has not expired. The timer starts when the student begins the exam and continues running even if the student disconnects."
                  }
                </p>
              </div>
            </AccordionSecondary>
            <AccordionSecondary title="What time is the exam?">
              <div className=" space-y-5">
                <p className="text-p">
                  {
                    "The exam takes place on 11th January at 07:00 PM Bangladesh time. Please ensure that you are ready and online at that time, and make sure your device’s date and time are correctly set to your local time."
                  }
                </p>
              </div>
            </AccordionSecondary>

            <AccordionSecondary title="When will the results be announced?">
              <div className=" space-y-5">
                <p className="text-p">
                  {
                    "Results will be announced by 27th January on the Scholarship exam webpage. There will be three winners from each year group, from Year 3 to Year 13."
                  }
                </p>
              </div>
            </AccordionSecondary>

            <AccordionSecondary title="How will the winners be selected?">
              <div className=" space-y-5">
                <p className="text-p">
                  {
                    "Winners will be selected based on their performance in the scholarship exam. A conversion chart will be used to align grades with the appropriate year groups, ensuring fairness in the selection process."
                  }
                  <Link href="/scholarship/chart.png" className="text-blue-600">
                    {" "}
                    Grade Levels Conversion Chart
                  </Link>
                </p>
              </div>
            </AccordionSecondary>

            <AccordionSecondary title="Can students use calculators or any other tools during the exam?">
              <div className=" space-y-5">
                <p className="text-p">
                  {
                    "No, calculators and other external tools are not permitted in the exam. Students are expected to complete the exam using only the resources provided within the exam platform. Please note, the exam will be recorded via auto-proctoring (camera and screen recording) to ensure academic integrity and prevent any unauthorised assistance."
                  }
                </p>
              </div>
            </AccordionSecondary>

            <AccordionSecondary title="Is there any cost to take the scholarship exam?">
              <div className=" space-y-5">
                <p className="text-p">
                  {"No, the scholarship exam is free of charge."}
                </p>
              </div>
            </AccordionSecondary>

            <AccordionSecondary title="What should students do if they encounter technical issues during the exam?">
              <div className=" space-y-5">
                <p className="text-p">
                  {
                    "If a student faces any technical issues, they should attempt to rejoin the exam immediately from another device, if possible."
                  }
                </p>
              </div>
            </AccordionSecondary>

            <AccordionSecondary title="Can I use my scholarship award for any programmes or courses at IWS Online School?">
              <div className=" space-y-5">
                <p className="text-p">
                  {
                    "No, the scholarship award is exclusively valid for our Complete School Programme (full-time) and Hybrid Model Programme (part-time) starting in January 2025, for a duration of one year. It cannot be applied to other programs or courses"
                  }
                </p>
              </div>
            </AccordionSecondary>
            {/* 
            <AccordionSecondary title="Can I use any device to access the exam questions and complete my exam?">
              <div className=" space-y-5">
                <p className="text-p">
                  {
                    "Yes, the platform supports mobile phones and tablets. However, you must ensure that your camera is turned on, and your face remains visible to the camera at all times during the exam. Therefore, any device with a functioning camera will work."
                  }
                </p>
              </div>
            </AccordionSecondary>

            <AccordionSecondary title="What payment methods are available for the scholarship exam fee?">
              <div className=" space-y-5">
                <p className="text-p">
                  {
                    "For the scholarship exam fee, we accept payments via credit or debit card and PayPal. To pay by card, select the “Stripe” option at checkout. If you prefer to use PayPal, simply choose the “PayPal” option to complete your payment securely."
                  }
                </p>
              </div>
            </AccordionSecondary> */}
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
      </div>
    </>
  );
};
export default page;
