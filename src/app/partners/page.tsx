"use client";
import {
  ArrowRightCircleIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

interface pageProps {}

const page: React.FC<pageProps> = ({}) => {
  return (
    <div className="container py-10 lg:py-10 animate-fade-in">
      <div className=" ">
        <h1 className="text-center text-[#4366F6] mb-7">Meet our global partners</h1>
        <p className="text-center mb-16">
          At IWS, collaboration drives our commitment to delivering world-class
          education. Our trusted partners enhance every aspect of our
          programmes, offering the best tools and resources to ensure a seamless
          and enriching learning experience for our students. Discover how our
          partnerships bring innovative education directly to you.
        </p>
        <div className="grid grid-cols-4 gap-5">
          <div className="border rounded-lg p-3 h-full">
            <div className="flex flex-col justify-between gap-9">
              <div className=" ">
                <Image
                  src="/Hero.webp"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
                <h2>CS Canary</h2>
                <p>
                  With a strong commitment to innovative educational solutions,
                  CS Canary enhances our curriculum, ensuring students are
                  equipped for academic success.
                </p>
              </div>
              <div className="bg-slate-200 rounded-xl flex justify-between px-4 py-2 items-center">
                <p className="font-semibold">Learn more</p>
                <ArrowRightCircleIcon
                  className="h-8 w-8 -rotate-45"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-3 h-full">
            <div className="flex flex-col justify-between gap-9">
              <div className=" ">
                <Image
                  src="/Hero.webp"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
                <h2>CS Canary</h2>
                <p>
                  With a strong commitment to innovative educational solutions,
                  CS Canary enhances our curriculum, ensuring students are
                  equipped for academic success.
                </p>
              </div>
              <div className="bg-slate-200 rounded-xl flex justify-between px-4 py-2 items-center">
                <p className="font-semibold">Learn more</p>
                <ArrowRightCircleIcon
                  className="h-8 w-8 -rotate-45"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-3 h-full">
            <div className="flex flex-col justify-between gap-9">
              <div className=" ">
                <Image
                  src="/Hero.webp"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
                <h2>CS Canary</h2>
                <p>
                  With a strong commitment to innovative educational solutions,
                  CS Canary enhances our curriculum, ensuring students are
                  equipped for academic success.
                </p>
              </div>
              <div className="bg-slate-200 rounded-xl flex justify-between px-4 py-2 items-center">
                <p className="font-semibold">Learn more</p>
                <ArrowRightCircleIcon
                  className="h-8 w-8 -rotate-45"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-3 h-full">
            <div className="flex flex-col justify-between gap-9">
              <div className=" ">
                <Image
                  src="/Hero.webp"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
                <h2>CS Canary</h2>
                <p>
                  With a strong commitment to innovative educational solutions,
                  CS Canary enhances our curriculum, ensuring students are
                  equipped for academic success.
                </p>
              </div>
              <div className="bg-slate-200 rounded-xl flex justify-between px-4 py-2 items-center">
                <p className="font-semibold">Learn more</p>
                <ArrowRightCircleIcon
                  className="h-8 w-8 -rotate-45"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-9 bg-blue-600 rounded-2xl py-8">
          <h2 className="text-[3em] mb-8 text-white">Interested in becoming a partner?</h2>
          <button className="bg-[#4366F6] px-3 py-2 rounded-lg text-white">Partner with IWS</button>
        </div>
      </div>
    </div>
  );
};

export default page;
