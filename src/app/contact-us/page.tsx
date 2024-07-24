import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
interface pageProps {

}

const page: React.FC<pageProps> = ({ }) => {
  return (
    <div className='container'>
      <div className='flex w-full justify-center items-center py-14 lg:py-24'>
        <TabGroup className={''}>
          <TabList className={"border-2 px-4 py-2 rounded-xl flex items-center justify-center gap-5"}>
            <Tab className={'bg-blue-600 px-6 py-3 rounded-xl text-white outline-none'}>Send a message</Tab>
            <Tab className={'py-3 px-6 rounded-xl text-blue-900 outline-none'}>Book a Call</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>Content 1</TabPanel>
            <TabPanel>Content 2</TabPanel>
            <TabPanel>Content 3</TabPanel>
          </TabPanels>
        </TabGroup>

      </div>

    </div>
  )
}

export default page