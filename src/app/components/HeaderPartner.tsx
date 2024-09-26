"use client"
import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import EnrollButton from './buttons/EnrollButton'
import { PartnerProps } from '../data/partners'
interface HeaderPartnerProps {
  partner: PartnerProps
}

const HeaderPartner: React.FC<HeaderPartnerProps> = ({ partner }) => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="fixed -mt-[100px] w-full isolate z-50 bg-white shadow-sm">
      <nav className="mx-auto container flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link className="-m-1.5 p-1.5" href={"#"} >
            <span className="sr-only">IWS Online School</span>
            <Image priority={true} width={500} height={500} className="h-[3rem] w-auto object-contain" src={partner.image} alt={partner.title} />
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
          {
            <>
              <Link className=' leading-6 hover:bg-[#E6F4FE] px-6 py-2 rounded-lg transition duration-300 text-[18px] ' href={"#"} >
                About Us
              </Link>
              <Link className=' leading-6 hover:bg-[#E6F4FE] px-6 py-2 rounded-lg transition duration-300 text-[18px] ' href={"#"} >
                Programmes
              </Link>
              <Link className=' leading-6 hover:bg-[#E6F4FE] px-6 py-2 rounded-lg transition duration-300 text-[18px] ' href={"#"} >
                School Fees
              </Link>
            
            </>

          }

        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#contact-us" className={"bg-[#4366F6] rounded-xl px-7 py-3 text-white hover:bg-[#2C50C7] transition-all duration-300  text-lg"}>
            Contact Us
          </Link>
        </div>

      </nav>
      {/* <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
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
            >a
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="pt-[60px] flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">

                <Link onClick={() => setMobileMenuOpen(false)} href={"/cambridge-primary/"} className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7  hover:bg-gray-50"> Primary</Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href={"/cambridge-secondary/"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7  hover:bg-gray-50"
                >
                  Secondary
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

              </div>
              <div className="py-6">
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href={"/school-fees/"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7  hover:bg-gray-50"
                >
                  School Fees
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href={"/about-us/"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7  hover:bg-gray-50"
                >
                  About us
                </Link>
                <Link
                  href={"https://iws-register.iwsonlineschool.co.uk/"}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base  leading-7  hover:bg-gray-50"
                >
                  Enrol Now
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog> */}
    </div >
  )
}

export default HeaderPartner