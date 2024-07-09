'use client'
import React, { useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import PhoneNumber from '../form/PhoneNumber'
import Dropdown from '../form/Dropdown'
import CalendarBook from './CalendarBook'
interface TabSectionProps {

}

export interface CountryData {
  label: string;
  value: string
}

const TabSection: React.FC<TabSectionProps> = ({ }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('44');

  return (
    <TabGroup className={"container justify-center items-center flex flex-col w-full"}>
      <TabList className={"border-2 border-gray-300 p-2 rounded-xl w-[450px] flex justify-center items-center gap-5 "}>
        <Tab className="data-[selected]:bg-blue-700 transition-colors duration-300 text-lg data-[selected]:text-white py-2 outline-none flex-1 rounded-lg">Send a message</Tab>
        <Tab className="data-[selected]:bg-blue-700 transition-colors duration-300 text-lg data-[selected]:text-white py-2 outline-none flex-1 rounded-lg">Book a call</Tab>
      </TabList>
      <TabPanels className={"mt-10 max-w-4xl w-full"}>
        <TabPanel >
          <div className='flex flex-col gap-5'>
            <h1 className='text-4xl text-center font-bold text-blue-900'>Would you like to send us a message?</h1>
            <p className='text-center text-xl text-gray-500'>Whether you have questions about our courses, need assistance with enrollment, or just want to say hello, we’re here to help!</p>

            <div className="space-y-12">


              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder='First Name *'
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-2.5 text-[#b1b1b1] shadow-sm ring-1 ring-inset ring-[#E4E4E4] placeholder:text-gray-400 sm:text-base bg-[#f4f4f4] sm:leading-6 outline-none px-4"
                  />
                </div>

                <div className="sm:col-span-3">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder='Last Name *'
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-2.5 text-[#b1b1b1] shadow-sm ring-1 ring-inset ring-[#E4E4E4] placeholder:text-gray-400 sm:text-base bg-[#f4f4f4] sm:leading-6 outline-none px-4"
                  />
                </div>


                <div className="sm:col-span-3">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder='Email'
                    className="block w-full rounded-md border-0 py-2.5 text-[#b1b1b1] shadow-sm ring-1 ring-inset ring-[#E4E4E4] placeholder:text-gray-400 sm:text-base bg-[#f4f4f4] sm:leading-6 outline-none px-4"
                  />
                </div>

                <div className="sm:col-span-3">
                  <PhoneNumber value={phoneNumber} onChange={setPhoneNumber} />
                </div>

                <div className="col-span-full">
                  <Dropdown label={"Search your country"} isSearch={true} />
                </div>

                <div className="col-span-full">
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={6}
                      placeholder='Write your message here...'
                      className="block w-full rounded-md border-0 py-2.5 text-[#b1b1b1] shadow-sm ring-1 ring-inset ring-[#E4E4E4] placeholder:text-gray-400 sm:text-base bg-[#f4f4f4] sm:leading-6 outline-none px-4"
                      defaultValue={''}
                    />
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">

              <button
                type="submit"
                className="rounded-md flex flex-1 items-center justify-center bg-indigo-600 px-3 py-5 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                SEND A MESSAGE
              </button>
            </div>
            <p className='text-center text-xl text-blue-900'>
              Simply fill out the form below, and one of our friendly team members will get back to you as soon as possible. Let’s start your journey with IWS Online School together!
            </p>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            asd
          </div>
          {/* <CalendarBook /> */}
        </TabPanel>
      </TabPanels>
    </TabGroup>
  )
}

export default TabSection