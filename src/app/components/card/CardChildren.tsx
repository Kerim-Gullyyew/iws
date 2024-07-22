import Image from 'next/image'
import React from 'react'

interface CardChildrenProps {

}

const CardChildren: React.FC<CardChildrenProps> = ({ }) => {
  return (

    <div className="group relative w-[310px] h-[480px] bg-[#F4F5F8] cursor-pointer hover:bg-[#EBF0FE] rounded-xl overflow-hidden transition duration-500">
      <h3 className="text-h3 container pt-8 leading-tight font-bold">For those who are not satisfied with a regular school</h3>
      <div className="transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0 absolute bottom-0">
        <Image width={1000} height={1000} className=" object-cover" src="/benefit/4_1.webp" alt="" />
      </div>


      <div className="absolute bottom-0 inset-0 flex flex-col justify-end px-3 sm:px-9 py-4 sm:py-8 gap-3 sm:gap-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
        <div className="flex flex-col gap-2 sm:gap-3">
          <h4 className=" text-h4 font-semibold">Is this about you?</h4>
          <ul className="list-disc gap-2 sm:gap-3 flex flex-col ml-10">
            <li className=" text-base font-normal">Lorem ipsum dolor sit amet</li>
            <li className=" text-base font-normal">Lorem ipsum dolor sit amet</li>
            <li className=" text-base font-normal">Lorem ipsum dolor sit amet</li>
            <li className=" text-base font-normal">Lorem ipsum dolor sit amet</li>
          </ul>
          <h4 className=" text-h4 font-semibold">Then our school is right for you!</h4>
        </div>
      </div>
    </div>
  )
}

export default CardChildren