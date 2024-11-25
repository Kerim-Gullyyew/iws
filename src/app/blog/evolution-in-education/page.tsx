import React from "react";
import Image from "next/image";
import ContactUsSection from "../../components/sections/ContactUsSection";

interface pageProps {}

const Page: React.FC<pageProps> = ({}) => {
  return (
    <>
      <div className="container grid grid-cols-12 gap-4">
        <div className="col-span-10">
          <div className="container mt-12">
            <p>Back to Latest News</p>
          </div>
          <div className="container pt-5">
            
            <h1 className="text-[40px]">Evolution in education</h1>
            <p>
              {
                "Throughout the recent years, we have witnessed education transform, driven by technological advancements and the development of new learning styles. The most notable shift is the move from traditional in-person teaching to online learning. This evolution has altered the foundations of education, breaking down barriers of time and space. In this post we will dive into five key aspects of this revolution in education."
              }
            </p>
            <Image
              width={1000}
              height={1000}
              className="mt-9 object-contain self-center"
              src="/evo.png"
              alt=""
            />
            <p className="mt-9">1. Accessibility and Flexibility:</p>
            <p>
              {
                "With online learning students are no longer confined to a classroom to access quality education, knowledge can be consumed much more easily now than ever before. Through online courses and virtual classrooms, you can learn from anywhere, at your own pace and it is all depending on your schedule. The flexibility offered by online education provides a vast range of opportunities for lifelong learning, empowering people of all ages and backgrounds to pursue education without constraints."
              }
            </p>
            <p className="mt-9">1. Accessibility and Flexibility:</p>
            <p>
              {
                "With online learning students are no longer confined to a classroom to access quality education, knowledge can be consumed much more easily now than ever before. Through online courses and virtual classrooms, you can learn from anywhere, at your own pace and it is all depending on your schedule. The flexibility offered by online education provides a vast range of opportunities for lifelong learning, empowering people of all ages and backgrounds to pursue education without constraints."
              }
            </p>
            <p className="mt-9">1. Accessibility and Flexibility:</p>
            <p>
              {
                "With online learning students are no longer confined to a classroom to access quality education, knowledge can be consumed much more easily now than ever before. Through online courses and virtual classrooms, you can learn from anywhere, at your own pace and it is all depending on your schedule. The flexibility offered by online education provides a vast range of opportunities for lifelong learning, empowering people of all ages and backgrounds to pursue education without constraints."
              }
            </p>
            <p className="mt-9">1. Accessibility and Flexibility:</p>
            <p>
              {
                "With online learning students are no longer confined to a classroom to access quality education, knowledge can be consumed much more easily now than ever before. Through online courses and virtual classrooms, you can learn from anywhere, at your own pace and it is all depending on your schedule. The flexibility offered by online education provides a vast range of opportunities for lifelong learning, empowering people of all ages and backgrounds to pursue education without constraints."
              }
            </p>
            <Image
              width={1000}
              height={1000}
              className="mt-9 object-contain self-center"
              src="/evo.png"
              alt=""
            />
            <p className="mt-9">
              {
                "With online learning students are no longer confined to a classroom to access quality education, knowledge can be consumed much more easily now than ever before. Through online courses and virtual classrooms, you can learn from anywhere, at your own pace and it is all depending on your schedule. The flexibility offered by online education provides a vast range of opportunities for lifelong learning, empowering people of all ages and backgrounds to pursue education without constraints."
              }
            </p>
            <div className="mt-16 border border-gray-300"></div>
            <div className="mt-5 flex justify-between">
              <h2>Continue reading</h2>
              <div className="flex items-center border rounded-lg border-black px-9 py-2">
                View all
              </div>
            </div>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5 mb-9">
              <div className="rounded-xl overflow-hidden border border-gray-300">
                <div>
                  <Image
                    width={1000}
                    height={1000}
                    className=" "
                    src="/Screenshot 2024-11-11 at 6.32.51 PM.png"
                    alt=""
                  />
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <h2 className="text-2xl mb-2">
                    Q&A: Headteacher Matt Vickery in The Hot Seat!
                  </h2>
                  <p className=" mt-auto">Continue reading -</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-gray-300">
                <div>
                  <Image
                    width={1000}
                    height={1000}
                    className=" "
                    src="/Screenshot 2024-11-11 at 6.32.51 PM.png"
                    alt=""
                  />
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <h2 className="text-2xl mb-2">
                    Q&A: Headteacher Matt Vickery in The Hot Seat!
                  </h2>
                  <p className=" mt-auto">Continue reading -</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
