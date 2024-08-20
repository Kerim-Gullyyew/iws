"use client"
import React from 'react'
import {
  PlusIcon,
  MinusIcon
} from '@heroicons/react/24/solid'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
interface AccordionSecondaryProps {
  title?: string;
  children: React.ReactNode;
}

const AccordionSecondary: React.FC<AccordionSecondaryProps> = ({ title, children }) => {

  return (
    <Disclosure as="div" className="w-full border-b border-gray-300">
      {({ open }) => (
        <>
          <DisclosureButton className="w-full pb-2 flex items-center justify-between focus:outline-none">
            <h3 className="text-[1.5em]">
              {title}
            </h3>
            {open ? (
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
              {children}
            </DisclosurePanel>
          </div>
        </>
      )}
    </Disclosure>
  )
}

export default AccordionSecondary