import React from "react";

import Image from "next/image";
import Link from "next/link";

interface pageProps {}

const Page: React.FC<pageProps> = ({}) => {
  return (
    <>
      <div className="container mt-20 grid grid-cols-1 sm:grid-cols-2">
        <h1>Latest articles</h1>
        <p>
          {
            "Discover valuable insights, tips, and updates on Online Cambridge Education, Online Learning, and IWS Online School's curriculum. Stay informed and enhance your academic journey with our expert blog posts."
          }
        </p>
      </div>
      <div className="container mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
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
              <h2 className="text-3xl mb-2">
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
              <h2 className="text-3xl mb-2">
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
              <h2 className="text-3xl mb-2">
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
              <h2 className="text-3xl mb-2">
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
              <h2 className="text-3xl mb-2">
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
              <h2 className="text-3xl mb-2">
                Q&A: Headteacher Matt Vickery in The Hot Seat!
              </h2>
              <p className=" mt-auto">Continue reading -</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-20 flex justify-center ">
        <div className="border border-gray-300 px-4 py-2 rounded-md">Load more</div>
      </div>
    </>
  );
};

export default Page;
