import React from 'react'
import { useRouter } from 'next/navigation'

interface ContactButtonProps {
  textColor?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ textColor = '' }) => {
  const router = useRouter()
  return (
    <button
      onClick={() => router.push('/contact-us')}
      className={`border-[#4366F6] hover:text-white hover:bg-[#3867FF] transition-all duration-300 border-[3px] rounded-xl px-7 py-2.5 ${textColor}  text-lg box-border`}
    >
      Contact Us
    </button>
  )
}

export default ContactButton
