"use client";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import React from "react";
interface pageProps { }
const page: React.FC<pageProps> = ({ }) => {
  return (
    <div className="container py-10 lg:py-10 animate-fade-in">

      <h1 className="text-[#4366F6] mb-7 text-center">Meet our global partners</h1>
      <p className="text-center mb-16 max-w-4xl mx-auto">
        At IWS, collaboration drives our commitment to delivering world-class
        education. Our trusted partners enhance every aspect of our
        programmes, offering the best tools and resources to ensure a seamless
        and enriching learning experience for our students. Discover how our
        partnerships bring innovative education directly to you.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-16">
        <div className="border w-full rounded-xl p-3 space-y-6 h-full flex flex-col justify-between">
          <div className="space-y-5">
            <div className="w-full bg-blue-600 h-52"></div>
            <div className="space-y-3">
              <h4 className="font-bold">Lorem ipsum dolor.</h4>
              <p className=" leading-snug">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, neque maiores? Recusandae repudiandae nulla natus aspernatur, blanditiis atque autem officia rerum iure totam deserunt dolorum iusto eveniet corporis voluptatum nesciunt.</p>
            </div>
          </div>

          <div className="bg-cardback rounded-full flex justify-between items-center py-2 px-3">
            <h4 className="font-semibold">Learn more</h4>
            <div className="bg-black w-7 h-7 min-w-7 min-h-7 p-1 rounded-full flex items-center justify-center">
              <ArrowUpRightIcon color="white" />
            </div>
          </div>
        </div>

        <div className="border w-full rounded-xl p-3 space-y-6 h-full flex flex-col justify-between">
          <div className="space-y-5">
            <div className="w-full bg-blue-600 h-52"></div>
            <div className="space-y-3">
              <h4 className="font-bold">Lorem ipsum dolor.</h4>
              <p className=" leading-snug">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, neque maiores? Recusandae repudiandae nulla natus aspernatur, blanditiis atque autem officia rerum iure totam deserunt dolorum iusto eveniet corporis voluptatum nesciunt.</p>
            </div>
          </div>

          <div className="bg-cardback rounded-full flex justify-between items-center py-2 px-3">
            <h4 className="font-semibold">Learn more</h4>
            <div className="bg-black w-7 h-7 min-w-7 min-h-7 p-1 rounded-full flex items-center justify-center">
              <ArrowUpRightIcon color="white" />
            </div>
          </div>
        </div>

        <div className="border w-full rounded-xl p-3 space-y-6 h-full flex flex-col justify-between">
          <div className="space-y-5">
            <div className="w-full bg-blue-600 h-52"></div>
            <div className="space-y-3">
              <h4 className="font-bold">Lorem ipsum dolor.</h4>
              <p className=" leading-snug">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, neque maiores? Recusandae repudiandae nulla natus aspernatur, blanditiis atque autem officia rerum iure totam deserunt dolorum iusto eveniet corporis voluptatum nesciunt.</p>
            </div>
          </div>

          <div className="bg-cardback rounded-full flex justify-between items-center py-2 px-3">
            <h4 className="font-semibold">Learn more</h4>
            <div className="bg-black w-7 h-7 min-w-7 min-h-7 p-1 rounded-full flex items-center justify-center">
              <ArrowUpRightIcon color="white" />
            </div>
          </div>
        </div>

        <div className="border w-full rounded-xl p-3 space-y-6 h-full flex flex-col justify-between">
          <div className="space-y-5">
            <div className="w-full bg-blue-600 h-52"></div>
            <div className="space-y-3">
              <h4 className="font-bold">Lorem ipsum dolor.</h4>
              <p className=" leading-snug">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, neque maiores? Recusandae repudiandae nulla natus aspernatur, blanditiis atque autem officia rerum iure totam deserunt dolorum iusto eveniet corporis voluptatum nesciunt.</p>
            </div>
          </div>

          <div className="bg-cardback rounded-full flex justify-between items-center py-2 px-3">
            <h4 className="font-semibold">Learn more</h4>
            <div className="bg-black w-7 h-7 min-w-7 min-h-7 p-1 rounded-full flex items-center justify-center">
              <ArrowUpRightIcon color="white" />
            </div>
          </div>
        </div>

      </div>

      <div className="bg-asset-2 mb-16 bg-no-repeat bg-cover bg-center rounded-3xl bg-blue-900 bg-blend-multiply flex items-center flex-col gap-12 pb-14 pt-20">
        <h1 className="text-white">Interested in becoming a partner?</h1>
        <button className="bg-blue-600 px-5 py-2 rounded-lg text-white">Partner with IWS</button>
      </div>

    </div>
  );
};

export default page;
