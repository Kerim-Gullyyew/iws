import React from 'react'
import { useRouter } from 'next/navigation'
interface ContactButtonProps {

}

const ContactButton: React.FC<ContactButtonProps> = ({ }) => {
  const router = useRouter()
  return (
    <button onClick={() => router.push('/contact-us')} className=" border-blue-600 hover:text-white hover:bg-blue-600 transition-all duration-300 border-[3px] rounded-lg px-6 py-2 text-gray-900 font-semibold text-lg">Contact Us</button>
  )
}

export default ContactButton