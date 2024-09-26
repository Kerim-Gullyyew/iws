"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
interface EnrollButtonProps {
  light?: boolean
}

const EnrollButton: React.FC<EnrollButtonProps> = ({ light }) => {
  const router = useRouter();
  return (
    <button onClick={() => router.push('https://iws-register.iwsonlineschool.co.uk/')} className={`${light ? "bg-white rounded-full px-9 py-3 text-blue-600 font-semibold text-[18px]" : "bg-[#4366F6] rounded-xl px-7 py-3 text-white hover:bg-[#2C50C7] transition-all duration-300  text-lg"}`}>
      Apply now
    </button>

  )
}

export default EnrollButton