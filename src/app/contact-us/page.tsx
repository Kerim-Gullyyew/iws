import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
interface pageProps {

}

const page: React.FC<pageProps> = ({ }) => {
  return (
    <div>
      <div className='flex justify-center items-center py-14 lg:py-24'>
        <TabGroup>
          <TabList className={"border"}>
            <Tab>Get In Touch</Tab>
            <Tab>Book a Call</Tab>
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