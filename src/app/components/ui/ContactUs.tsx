import React from 'react'
import TabSection from './TabSection'

interface ContactUsProps {

}

const ContactUs: React.FC<ContactUsProps> = ({ }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-10 border-t-4 pt-6 border-blue-400">
      <div className="lg:w-5/12">
        <h2 className=" leading-tight ">
          Contact Us
        </h2>
      </div>
      <div className="lg:w-7/12 lg:pr-6">
        <TabSection  />
      </div>
    </div>
  )
}

export default ContactUs