"use client";
import Image from "next/image";
import React from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
interface FooterProps {}
const navigation = {
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/iwschoolonline",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/iwschoolonline/",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M7.738,17L7.738,17 c-0.697,0-1.262-0.565-1.262-1.262v-4.477C6.477,10.565,7.042,10,7.738,10h0C8.435,10,9,10.565,9,11.262v4.477 C9,16.435,8.435,17,7.738,17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2 S8.551,8.717,7.694,8.717z M16.779,17L16.779,17c-0.674,0-1.221-0.547-1.221-1.221v-2.605c0-1.058-0.651-1.174-0.895-1.174 s-1.058,0.035-1.058,1.174v2.605c0,0.674-0.547,1.221-1.221,1.221h-0.081c-0.674,0-1.221-0.547-1.221-1.221v-4.517 c0-0.697,0.565-1.262,1.262-1.262h0c0.697,0,1.262,0.565,1.262,1.262c0,0,0.282-1.262,2.198-1.262C17.023,10,18,10.977,18,13.174 v2.605C18,16.453,17.453,17,16.779,17z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/iwsonlineschool/",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://x.com/iwsonlineschool",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z" />
        </svg>
      ),
    },

    {
      name: "YouTube",
      href: "https://www.youtube.com/@iwsonlineschool",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};
const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="bg-[#f4f5f8] pt-12" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container py-5 flex flex-col justify-center items-center gap-8">
        <div className="w-full flex flex-col justify-center items-center gap-8 md:flex-row md:justify-between md:items-start">
          <div className="flex flex-col justify-center items-center gap-8 lg:items-start md:items-start">
            <Image
              width={1000}
              height={1000}
              className="w-52 object-contain"
              src="/IWS_Logo.webp"
              alt="logo"
            />

            <div className="flex w-full mt-5 flex-col gap-3 justify-center items-center lg:items-start md:items-start">
              <p className="text-[14px] text-gray-400">
                FOLLOW US ON SOCIAL MEDIA
              </p>
              <div className="flex justify-center space-x-4 md:order-2">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-[#593C97]"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-8 w-8" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col mt-3 md:w-1/2 lg:hidden">
            <div className="w-full border-b border-gray-300 ">
              <h4 className="">ACADEMICS</h4>
              <div className="overflow-hidden py-2">
                <div className="origin-top px-3 transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                  <ul className="space-y-2 pb-2">
                    <li className=" text-gray-600 cursor-pointer hover:">
                      <Link href={"/cambridge-primary"}>Primary School</Link>
                    </li>
                    <li className=" text-gray-600 cursor-pointer hover:">
                      <Link href={"/cambridge-secondary"}>
                        Secondary School
                      </Link>
                    </li>
                    <li className=" text-gray-600 cursor-pointer hover:">
                      <Link href={"/cambridge-igcse"}>I/GCSE</Link>
                    </li>
                    <li className=" text-gray-600 cursor-pointer hover:">
                      <Link href={"/cambridge-a-level"}>A Level</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full border-b border-gray-300 ">
              <h4 className="">ADMISSIONS</h4>
              <div className="overflow-hidden py-2">
                <div className="origin-top px-3 transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                  <ul className="space-y-2 pb-2">
                    <li className=" text-gray-600 cursor-pointer hover:">
                      <Link href={"/school-fees"}>School Fees</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full border-b border-gray-300 ">
              <h4 className="">ABOUT IWS</h4>
              <div className="overflow-hidden py-2">
                <div className="origin-top px-3 transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                  <ul className="space-y-2 pb-2">
                    <li className=" text-gray-600 cursor-pointer hover:">
                      <Link href={"/about-us"}>About IWS</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full border-b border-gray-300 ">
              <h4 className="">RESOURCES</h4>
              <div className="overflow-hidden py-2">
                <div className="origin-top px-3 transition duration-300 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0">
                  <ul className="space-y-2 pb-2">
                    <li className=" text-gray-600 cursor-pointer hover:">
                    <Link href={"/contact-us"}>Contact Us</Link>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden ml-5 lg:ml-36 lg:grid lg:grid-cols-4 lg:w-full ">
            <div>
              <h5 className="  text-gray-400 text-[14px]">ACADEMICS</h5>
              <ul className="mt-3 space-y-4">
                <li className="">
                  <Link href={"/cambridge-primary"}>Primary School</Link>
                </li>
                <li className="">
                  <Link href={"/cambridge-secondary"}>Secondary School</Link>
                </li>
                <li className="">
                  <Link href={"/cambridge-igcse"}>I/GCSE</Link>
                </li>
                <li className="">
                  <Link href={"/cambridge-a-level"}>A Level</Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="  text-gray-400 text-[14px]">ADMISSIONS</h5>
              <ul className="mt-3 space-y-4">
                <li className="">
                  <Link href={"/school-fees"}>School Fees</Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="  text-gray-400 text-[14px]">ABOUT IWS</h5>
              <ul className="mt-3 space-y-4">
                <li className="">
                  <Link href={"/about-us"}>About IWS</Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="  text-gray-400 text-[14px]">RESOURCES</h5>
              <ul className="mt-3 space-y-4">
                <li className="">
                  <Link href={"/contact-us"}>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" border-t border-gray-400 space-y-3 pt-5 mt-24 flex flex-col justify-center items-center w-full lg:grid lg:grid-cols-3 lg:space-y-0">
          <p className="text-p text-left">
            &copy; {2024} IWS Online School LTD
          </p>
          <p className="text-p text-left">All rights reserved</p>
          <p className="text-p text-left">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
