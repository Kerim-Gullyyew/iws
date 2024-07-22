import React from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion'

interface AccordionProps { }

const Accordion: React.FC<AccordionProps> = ({ }) => {
  return (
    <Disclosure as="div" className="w-full border-b border-gray-300">
      {({ open }) => (
        <>
          <DisclosureButton className="w-full pb-2 flex items-center justify-between focus:outline-none">
            <h3 className=" font-bold">
            Why us?
            </h3>
            {open ? (
              <MinusIcon className="h-8 w-8" aria-hidden="true" />
            ) : (
              <PlusIcon className="h-8 w-8" aria-hidden="true" />
            )}
          </DisclosureButton>
          <div className="overflow-hidden py-2">
            <AnimatePresence>
              {open && (
                <DisclosurePanel
                  static
                  as={motion.div}
                  initial={{ opacity: 0, y: -24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition
                  className="origin-top transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
                >
                  <p className="text-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, autem tempore delectus accusantium dolor et numquam necessitatibus odit veritatis fugit earum, doloribus soluta quae aspernatur recusandae eos! Officia, harum voluptatum.</p>
                </DisclosurePanel>
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </Disclosure>
  );
}

export default Accordion;
