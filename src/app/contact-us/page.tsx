"use client"
import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import ContactUsSection from '../components/sections/ContactUsSection'
import { InlineWidget } from "react-calendly";
interface pageProps {
}

const page: React.FC<pageProps> = ({ }) => {
  return (
    <div className='container py-14 lg:py-24 animate-fade-in'>

      <TabGroup defaultIndex={0} className={'w-full flex flex-col justify-center items-center gap-10'}>
        <TabList className={"w-full border-2 px-2 py-2 rounded-xl flex  justify-center gap-5 max-w-[500px]"}>
          <Tab className={'data-[selected]:bg-blue-800 transition duration-300 data-[selected]:animate-fade-in bg-white flex-1 px-3 py-3 rounded-xl text-black data-[selected]:text-white outline-none'}>Send a message</Tab>
          <Tab className={'data-[selected]:bg-blue-800 transition duration-300 data-[selected]:animate-fade-in bg-white flex-1 px-3 py-3 rounded-xl text-black data-[selected]:text-white outline-none'}>Book a Call</Tab>
        </TabList>
        <TabPanels className={'w-full'}>
          <TabPanel className={"animate-fade-in"}>
            <ContactUsSection />
          </TabPanel>
          <TabPanel className={" "}>

            <InlineWidget styles={{ height: '1030px' }} url="https://calendly.com/admissions-iws/book-a-call" />

          </TabPanel>
        </TabPanels>
      </TabGroup>

    </div>
  )
}

export default page