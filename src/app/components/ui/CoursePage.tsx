import React from 'react'
import CourseButton from './CourseButton';
import WhatAwait from './WhatAwait';
import ContactUs from './ContactUs';

interface CoursePageProps {
  course: {
    id: string;
    subject_name: string;
    url: string;
    image_url: string;
    icon: string;
    description: string;
    description2?: string;
    key_objective: string[];
    what_learn: {
      id: string,
      title: string,
      description: string,
    }[]
  } | undefined
}

const CoursePage: React.FC<CoursePageProps> = ({ course }) => {
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
              {
                course.what_learn.map((learn, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="font-bold">{learn.title}</h4>
                    <p>{learn.description}</p>
                  </div>
                ))
              }


            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-10 border-t-4 pt-6 border-blue-400">
            <div className="lg:w-5/12">
              <h2 className=" leading-tight ">
                Key Learning Objectives
              </h2>
            </div>
            <div className="flex flex-col gap-4 lg:w-7/12 lg:pr-6">
              {
                course.key_objective.map((obj, index) => (
                  <p key={index}>{obj}</p>
                ))
              }
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
}

export default CoursePage