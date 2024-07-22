"use client";
import React from "react";
import Image from "next/image";
interface pageProps { }

const page: React.FC<pageProps> = ({ }) => {
  return (
    <div className=" container pt-3 pb-10">
      <div className="pt-16 pb-14 bg-asset-3 px-6 bg-cover bg-no-repeat bg-center bg-blue-500 flex items-center justify-center bg-blend-soft-light overflow-hidden rounded-[40px] w-full ">
        <div className="flex flex-col justify-center items-center max-w-[700px]">
          <h1 className="text-center text-white font-bold">We are a revolution</h1>
          <div className="pt-8">
            <p className="text-center text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia error a cum ratione harum quaerat ab similique repudiandae ducimus quidem? At culpa veritatis in placeat voluptatum omnis aut voluptates corrupti.
            </p>

          </div>
          <div className="pt-6">
            <p className="text-center text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quidem maiores vitae aliquid expedita fuga nisi ipsum labore repellat. Et maiores rerum facere excepturi quidem quia praesentium quasi, qui fugiat.
            </p>

          </div>

          <div className="pt-14">
            <button className="bg-white px-6 py-2 rounded-lg cursor-pointer text-blue-600 hover:bg-gray-100 ">
              Join our next event
            </button>
          </div>

        </div>
      </div>
      <div className="mt-20 space-y-24">
        <div className="w-full flex flex-col lg:flex-row gap-10 border-t-4 pt-6 border-blue-400">
          <div className="lg:w-5/12">
            <h2 className=" leading-tight font-bold">
              Our Approach To Teaching and Learning
            </h2>
          </div>
          <div className="flex flex-col gap-4 lg:w-7/12 lg:pr-6">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam sed sint sapiente, fugit quisquam facilis porro mollitia eaque modi alias, odio tempore numquam quos temporibus. Recusandae repellendus enim cum ipsam!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos atque nihil quo, pariatur doloribus facere quaerat corrupti molestiae culpa vero unde deleniti laboriosam maxime non veniam laudantium. Voluptas, quam sit.</p>
          </div>
        </div>


        <div className="w-full flex flex-col lg:flex-row gap-10 border-t-4 pt-6 border-blue-400">
          <div className="lg:w-5/12">
            <h2 className=" leading-tight font-bold">
              Our Approach To Teaching and Learning
            </h2>
          </div>
          <div className="flex flex-col gap-4 lg:w-7/12 lg:pr-6">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam sed sint sapiente, fugit quisquam facilis porro mollitia eaque modi alias, odio tempore numquam quos temporibus. Recusandae repellendus enim cum ipsam!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos atque nihil quo, pariatur doloribus facere quaerat corrupti molestiae culpa vero unde deleniti laboriosam maxime non veniam laudantium. Voluptas, quam sit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
