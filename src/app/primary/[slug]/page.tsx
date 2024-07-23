"use client";
import React from "react";

import WhatAwait from "@/app/components/ui/WhatAwait";
import ContactUs from "@/app/components/ui/ContactUs";
import { courses } from "@/app/data/primary";
import CourseButton from "@/app/components/ui/CourseButton";
interface pageProps {
  params: {
    slug: string;
  };
}

const page: React.FC<pageProps> = ({ params }: { params: { slug: string } }) => {
  const course = courses.find((course) => course.url === params.slug);

  if (course) {
    return (
      <div className=" container pt-3 pb-24">
        <div className="pt-16 pb-14 bg-asset-3 px-6 bg-cover bg-no-repeat bg-center bg-blue-500 flex items-center justify-center bg-blend-soft-light overflow-hidden rounded-[40px] w-full ">
          <div className="flex flex-col justify-center items-center max-w-[700px]">
            <h1 className="text-center text-white ">{course?.subject_name}</h1>
            <div className="pt-8">
              <p className="text-center text-white">
                {
                  course.description && course.description
                }
              </p>

            </div>
            {
              course.description2 && (
                <div className="pt-6">
                  <p className="text-center text-white">
                    {
                      course.description2
                    }
                  </p>

                </div>
              )
            }

            <div className="pt-14">
              <CourseButton />
            </div>
          </div>
        </div>
        <div className="mt-20 space-y-24">
          <div className="w-full flex flex-col lg:flex-row gap-10 border-t-4 pt-6 border-blue-400">
            <div className="lg:w-5/12">
              <h2 className=" leading-tight ">
                What Will Students Learn?
              </h2>
            </div>
            <div className="flex flex-col gap-y-8 lg:w-7/12 lg:pr-6">
              <div className="space-y-3">
                <h4 className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius optio, id dolor rerum illo quia officia, excepturi tempora, magnam labore iusto eligendi nulla? Commodi cupiditate, totam inventore recusandae nesciunt consequuntur.</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius optio, id dolor rerum illo quia officia, excepturi tempora, magnam labore iusto eligendi nulla? Commodi cupiditate, totam inventore recusandae nesciunt consequuntur.</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius optio, id dolor rerum illo quia officia, excepturi tempora, magnam labore iusto eligendi nulla? Commodi cupiditate, totam inventore recusandae nesciunt consequuntur.</p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius optio, id dolor rerum illo quia officia, excepturi tempora, magnam labore iusto eligendi nulla? Commodi cupiditate, totam inventore recusandae nesciunt consequuntur.</p>
              </div>

            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-10 border-t-4 pt-6 border-blue-400">
            <div className="lg:w-5/12">
              <h2 className=" leading-tight ">
                Our Approach To Teaching and Learning
              </h2>
            </div>
            <div className="flex flex-col gap-4 lg:w-7/12 lg:pr-6">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam sed sint sapiente, fugit quisquam facilis porro mollitia eaque modi alias, odio tempore numquam quos temporibus. Recusandae repellendus enim cum ipsam!</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos atque nihil quo, pariatur doloribus facere quaerat corrupti molestiae culpa vero unde deleniti laboriosam maxime non veniam laudantium. Voluptas, quam sit.</p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <WhatAwait />
        </div>

        <div className="mt-20">
          <ContactUs />
        </div>

      </div>
    );
  } else {
    return (
      <div>
        404
      </div>
    )
  }

};

export default page;
