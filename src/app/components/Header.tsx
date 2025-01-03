"use client";
import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import EnrollButton from "./buttons/EnrollButton";
import InfiniteCarousel from "../components/InfiniteCarousel";
import { usePathname } from "next/navigation";
import Tooltip from "../components/Tooltip";
interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed z-50 w-full bg-white shadow-sm isolate">
      {/* This is announcement */}
      {/* <div className="bg-[#4366F6] ">
        <div className="container flex justify-between py-2 text-white sm:flex-row">
          <div className="w-[70%]">
            <InfiniteCarousel />
          </div>
          <Link href="/scholarship" className="underline">
            Learn more
          </Link>
        </div>
      </div> */}
      <nav
        className="container flex items-center justify-between p-6 mx-auto lg:px-8"
        aria-label="Global"
      >
        <div className="flex ">
          <Link className="-m-1.5 p-1.5" href={"/"}>
            <span className="sr-only">IWS Online School</span>
            <Image
              priority={true}
              width={1000}
              height={1000}
              className="h-[3rem] w-auto"
              src="/logo.webp"
              alt="IWS Online School Icon"
            />
          </Link>
        </div>
        <div className="flex gap-4 lg:hidden sm:items-center sm:gap-9">
          {/* <div className=" sm:flex">
            <Tooltip text="Enroll Now">
              <EnrollButton />
            </Tooltip>
          </div> */}
          <div className=" sm:flex">
            <Tooltip text="Enquire">
              <Link
                href="/contact-us"
                className="bg-[#FF8D00] rounded-xl px-6 py-3 text-white hover:bg-[#b2892f] transition-all duration-300 text-lg"
              >
                Enquire now
              </Link>
            </Tooltip>
          </div>
          <div className="hidden sm:flex lg:hidden">
            <Tooltip text="Enroll Now">
              <Link
                href="/apply"
                className="bg-[#4366F6] rounded-xl px-7 py-3 text-white hover:bg-[#2C50C7] transition-all duration-300 text-lg"
              >
                Apply now
              </Link>
            </Tooltip>
          </div>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-8 h-8" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-1">
          {
            <>
              <Link
                className=" leading-6 hover:bg-[#E6F4FE] px-6 py-2 rounded-lg transition duration-300 text-[18px] "
                href={"/cambridge-primary/"}
              >
                Primary
              </Link>
              <Link
                className=" leading-6 hover:bg-[#E6F4FE] px-6 py-2 rounded-lg transition duration-300 text-[18px] "
                href={"/cambridge-secondary/"}
              >
                Secondary
              </Link>
              <Link
                className=" leading-6 hover:bg-[#E6F4FE] px-6 py-2 rounded-lg transition duration-300 text-[18px] "
                href={"/cambridge-igcse/"}
              >
                I/GCSE
              </Link>
              <Link
                className=" leading-6 hover:bg-[#E6F4FE] px-6 py-2 rounded-lg transition duration-300 text-[18px] "
                href={"/online-a-levels/"}
              >
                A Levels
              </Link>
              <Link
                className=" leading-6 hover:bg-[#E6F4FE] px-6 py-2 rounded-lg transition duration-300 text-[18px] "
                href={"/school-fees/"}
              >
                School Fees
              </Link>
              {/* <Link
                className=" leading-6 hover:bg-[#E6F4FE] px-6 py-2 rounded-lg transition duration-300 text-[18px] "
                href={"/contact-us/"}
              >
                Contact Us
              </Link> */}
            </>
          }
        </Popover.Group>
        <div className="hidden lg:flex  lg:justify-end lg:gap-6">
          <div className=" ">
            <Tooltip text="Enquire">
              <Link
                href="/contact-us"
                className="bg-[#FF8D00] rounded-xl px-7 py-3 text-white hover:bg-[#b2892f] transition-all duration-300 text-lg"
              >
                Enquire now
              </Link>
            </Tooltip>
          </div>
          <div className="">
            <Tooltip text="Enroll Now">
              <Link
                href="/apply"
                className="bg-[#4366F6] rounded-xl px-7 py-3 text-white hover:bg-[#2C50C7] transition-all duration-300 text-lg"
              >
                Apply now
              </Link>
            </Tooltip>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link
              onClick={() => setMobileMenuOpen(false)}
              href={"/"}
              className="-m-1.5 p-1.5"
            >
              <span className="sr-only">IWS Online School</span>
              <Image
                width={1000}
                height={1000}
                className="w-auto h-8"
                src="/logo.webp"
                alt="IWS Online School Icon"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              a<span className="sr-only">Close menu</span>
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="pt-[60px] flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6 space-y-2">
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href={"/cambridge-primary/"}
                  className="block px-3 py-2 -mx-3 text-base leading-7 rounded-lg hover:bg-gray-50"
                >
                  {" "}
                  Primary
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href={"/cambridge-secondary/"}
                  className="block px-3 py-2 -mx-3 text-base leading-7 rounded-lg hover:bg-gray-50"
                >
                  Secondary
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href={"/cambridge-igcse/"}
                  className="block px-3 py-2 -mx-3 text-base leading-7 rounded-lg hover:bg-gray-50"
                >
                  I/GCSE
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href={"/online-a-levels/"}
                  className="block px-3 py-2 -mx-3 text-base leading-7 rounded-lg hover:bg-gray-50"
                >
                  A Levels
                </Link>
              </div>
              <div className="py-6">
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href={"/school-fees/"}
                  className="block px-3 py-2 -mx-3 text-base leading-7 rounded-lg hover:bg-gray-50"
                >
                  School Fees
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href={"/about-us/"}
                  className="block px-3 py-2 -mx-3 text-base leading-7 rounded-lg hover:bg-gray-50"
                >
                  About us
                </Link>
                {/* <Link
                  href={"https://iws-register.iwsonlineschool.co.uk/"}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base  leading-7  hover:bg-gray-50"
                >
                  Apply Now
                </Link> */}
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/apply"
                  className="bg-[#4366F6] rounded-xl px-7 py-3 text-white hover:bg-[#2C50C7] transition-all duration-300 text-lg"
                >
                  Apply now
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
