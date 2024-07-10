import React, { useState } from 'react'
import {
  PlusIcon,
  MinusIcon
} from '@heroicons/react/24/solid'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
interface AccordionSecondaryProps {

}

const AccordionSecondary: React.FC<AccordionSecondaryProps> = ({ }) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <Disclosure as="div" className="w-full border-b border-gray-300" onChange={() => setIsOpen(!isOpen)}>
      <DisclosureButton className="w-full  pb-2 flex items-center justify-between">
        <h2 className='text-3xl text-blue-900 font-semibold'>
          Personalised Instruction in Private, Virtual Classrooms
        </h2>
        {isOpen ? (
          <MinusIcon className="h-8 w-8" aria-hidden="true" />
        ) : (
          <PlusIcon className="h-8 w-8" aria-hidden="true" />
        )}

      </DisclosureButton>
      <div className="overflow-hidden py-2">
        <DisclosurePanel
          transition
          className="origin-top transition duration-300 px-3 pb-5 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
        >
          <p className='text-xl text-blue-900 tracking-wide leading-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eligendi repellendus nostrum, accusantium harum, sunt voluptates, nemo enim doloribus ullam hic odit cum eveniet itaque fugiat? Debitis ut obcaecati facilis.

          </p>

        </DisclosurePanel>
      </div>
    </Disclosure>
  )
}

export default AccordionSecondary