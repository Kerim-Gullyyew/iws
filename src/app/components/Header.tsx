"use client"
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'
import EnrollButton from './buttons/EnrollButton'

const products = [
  {
    name: 'Analytics1',
    description: 'Get a better understanding where your traffic is coming from',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers with our engagement tool',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  {
    name: 'Integrations',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: SquaresPlusIcon,
  },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
  { name: 'View all products', href: '#', icon: RectangleGroupIcon },
]


function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}


interface HeaderProps {

}

const Header: React.FC<HeaderProps> = ({ }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full isolate z-50 bg-white shadow-sm">
      <nav className="mx-auto container flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link className="-m-1.5 p-1.5" href={"/"} >
            <span className="sr-only">IWS Online School</span>
            <Image priority={true} width={1000} height={1000} className="h-[3rem] w-auto" src="/IWS_Logo.webp" alt="IWS Online School Icon" />
          </Link>
        </div>
        <div className="flex lg:hidden sm:items-center sm:gap-4">
          <div className="hidden sm:flex">
            <EnrollButton />
          </div>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-1">
          <Link className=' leading-6 hover:bg-[#E6F4FE] px-6 py-2 rounded-lg transition duration-300 text-[18px] ' href={"/cambridge-primary/"} >
            Primary
          </Link>
          <Link className=' leading-6 hover:bg-[#E6F4FE] px-6 py-2 rounded-lg transition duration-300 text-[18px] ' href={"/cambridge-secondary/"} >
            Secondary
          </Link>
          <Link className=' leading-6 hover:bg-[#E6F4FE] px-6 py-2 rounded-lg transition duration-300 text-[18px] ' href={"/cambridge-igcse/"} >
            I/GCSE
          </Link>
          <Link className=' leading-6 hover:bg-[#E6F4FE] px-6 py-2 rounded-lg transition duration-300 text-[18px] ' href={"/cambridge-a-level/"} >
            A Level
          </Link>
          <Link className=' leading-6 hover:bg-[#E6F4FE] px-6 py-2 rounded-lg transition duration-300 text-[18px] ' href={"/school-fees/"} >
            School Fees
          </Link>
          <Link className=' leading-6 hover:bg-[#E6F4FE] px-6 py-2 rounded-lg transition duration-300 text-[18px] ' href={"/contact-us/"} >
            Contact Us
          </Link>


        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <div className='flex'> */}
          <EnrollButton />

          {/* </div> */}

        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link onClick={() => setMobileMenuOpen(false)} href={"/"} className="-m-1.5 p-1.5">
              <span className="sr-only">IWS Online School</span>
              <Image width={1000} height={1000}
                className="h-8 w-auto"
                src="/IWS_Logo.webp" alt="IWS Online School Icon"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="pt-[60px] flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base  leading-7 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm  leading-7  hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure> */}

                <Link onClick={() => setMobileMenuOpen(false)} href={"/cambridge-primary/"} className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7  hover:bg-gray-50"> Primary</Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href={"/cambridge-secondary/"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7  hover:bg-gray-50"
                >
                  Middle
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href={"/cambridge-igcse/"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7  hover:bg-gray-50"
                >
                  I/GCSE
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href={"/cambridge-a-level/"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7  hover:bg-gray-50"
                >
                  A Level
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href={"/school-fees/"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7  hover:bg-gray-50"
                >
                  School Fees
                </Link>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base  leading-7  hover:bg-gray-50"
                >
                  Enrol Now
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Header