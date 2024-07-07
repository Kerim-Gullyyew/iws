import React, { useState } from 'react'
import {
  PlusIcon,
  MinusIcon
} from '@heroicons/react/24/solid'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
interface AccordionProps {

}

const Accordion: React.FC<AccordionProps> = ({ }) => {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <Disclosure as="div" className="w-full" onChange={() => setIsOpen(!isOpen)}>
      <DisclosureButton className="w-full border-b border-gray-300 pb-2 flex items-center justify-between">
        <h2 className='text-2xl font-bold'>
          Is team pricing available?

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
          className="origin-top transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eligendi repellendus nostrum, accusantium harum, sunt voluptates, nemo enim doloribus ullam hic odit cum eveniet itaque fugiat? Debitis ut obcaecati facilis.
        </DisclosurePanel>
      </div>
    </Disclosure>
  )
}

export default Accordion