import React from 'react'
import { useRouter } from 'next/navigation'
interface EnrollButtonProps {

}

const EnrollButton: React.FC<EnrollButtonProps> = ({ }) => {
  const router = useRouter();
  return (
    <button onClick={() => router.push('https://iws-register.iwsonlineschool.co.uk/')} className="bg-blue-600 rounded-xl px-7 py-3 text-white hover:bg-blue-700 transition-all duration-300 font-semibold text-lg">
      Enrol Now
    </button>
  )
}

export default EnrollButton