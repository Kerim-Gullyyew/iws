"use client"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
import { KeyStageProps } from '@/app/data/keystage'
interface SchoolFeeCardProps {
  keystage: KeyStageProps;
  index: number;
}
const SchoolFeeCard: React.FC<SchoolFeeCardProps> = ({ keystage, index }) => {
  const router = useRouter()
  return (
    <div className="flex justify-between gap-4 flex-col h-full">
      <div className="flex flex-col gap-10">
        <div onClick={() => router.push(keystage.url)} className="flex flex-col gap-8">
          <h3
            className={`text-[24px] ${index === 0 && "text-sky-500"}  ${index === 1 && "text-green-500"} ${index === 2 && "text-orange-500"} ${index === 3 && "text-red-500"}`}
          >
            {keystage.name}
          </h3>

          <div className=" flex flex-wrap gap-5 items-end">
            <h4 className="text-[32px] ">£{keystage.price}</h4>
            <h4 className="text-gray-400 ">/year</h4>
          </div>

          <p className="text-[16px]">{keystage.description}</p>
        </div>

        <div className="flex flex-col gap-5">
          <h5 className="border-b-[0.5px]   pb-2  border-gray-600">
            Included subjects
          </h5>
          <div className="flex flex-wrap gap-2 items-center">
            {keystage.includedSubjects.map((subject, index) => (
              <Link
                key={index}
                href={subject.url}
                className="px-3.5 bg-blue-600 rounded-lg py-1.5"
              >
                <h6 className="text-white text-[12px]">
                  {subject.subject_name2}
                </h6>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h5 className="border-b-[0.5px] pb-2 border-gray-600">
            Additional subjects
          </h5>
          <div className="flex flex-wrap gap-2 items-center">
            {keystage.additionalSubjects.map((subject, index) => (
              <Link
                key={index}
                href={subject.url}
                className="px-3.5 border border-gray-300 bg-gray-200 rounded-lg py-1.5"
              >
                <h6 className="text-gray-600 text-[12px]">
                  {subject.subject_name2}
                </h6>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Link
          href={"https://iws-register.iwsonlineschool.co.uk/"}
          className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white py-3 rounded-lg overflow-hidden"
        >
          Enrol Now
        </Link>
      </div>
    </div>
  )
}

export default SchoolFeeCard