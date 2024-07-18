'use client'
import React, { useState } from 'react'
import PhoneNumber from '../form/PhoneNumber'
import Dropdown from '../form/Dropdown'
import * as Yup from 'yup';
import axios from 'axios'
interface TabSectionProps {
}

export interface CountryData {
  label: string;
  value: string
}
interface ValidationErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  country?: string;
  message?: string;
}

const TabSection: React.FC<TabSectionProps> = ({ }) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('44');
  const [country, setCountry] = useState<string | number>('');
  const [message, setMessage] = useState<string>('');
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  }
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }
  const handleMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    country: Yup.string().required('Country is required'),
    message: Yup.string().required('Your message is required'),
  });

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault();
    try {
      await validationSchema.validate({
        firstName,
        lastName,
        email,
        phoneNumber,
        country,
        message,
      }, { abortEarly: false });
      const json = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone_number: phoneNumber,
        country: country,
        message: message
      }
      //send backend
      try {
        const response = await axios.post('https://api.main.iwsonlineschool.co.uk/iws-contact', {
          json: json
        });
        //Navigate to thank you page
      } catch (error) {
        console.error('Payment Error:', error);
      }


    } catch (err) {
      // Handle validation errors
      if (err instanceof Yup.ValidationError) {
        const errors = err.inner.reduce((acc, error) => {
          if (typeof error.path === 'string') {
            return {
              ...acc,
              [error.path]: error.message
            };
          }
          return acc;
        }, {});
        setValidationErrors(errors);
      }
    }
  };


  return (
    // <TabGroup className={"container justify-center items-center flex flex-col w-full"}>
    //   <TabList className={"border-2 border-gray-300 p-2 rounded-xl w-[450px] flex justify-center items-center gap-5 "}>
    //     <Tab className="data-[selected]:bg-blue-700 transition-colors duration-300 text-lg data-[selected]:text-white py-2 outline-none flex-1 rounded-lg">Send a message</Tab>
    //     <Tab className="data-[selected]:bg-blue-700 transition-colors duration-300 text-lg data-[selected]:text-white py-2 outline-none flex-1 rounded-lg">Book a call</Tab>
    //   </TabList>
    //   <TabPanels className={"mt-10 max-w-4xl w-full"}>
    //     <TabPanel >
    //       <div className='flex flex-col gap-5'>
    //         <h1 className='text-4xl text-center font-bold text-blue-900'>Would you like to send us a message?</h1>
    //         <p className='text-center text-xl text-gray-500'>Whether you have questions about our courses, need assistance with enrollment, or just want to say hello, we’re here to help!</p>

    //         <div className="space-y-12">


    //           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    //             <div className="sm:col-span-3">
    //               <input
    //                 type="text"
    //                 name="first-name"
    //                 id="first-name"
    //                 placeholder='First Name *'
    //                 autoComplete="given-name"
    //                 className="block w-full rounded-md border-0 py-2.5 text-[#b1b1b1] shadow-sm ring-1 ring-inset ring-[#E4E4E4] placeholder:text-gray-400 sm:text-base bg-[#f4f4f4] sm:leading-6 outline-none px-4"
    //               />
    //             </div>

    //             <div className="sm:col-span-3">
    //               <input
    //                 type="text"
    //                 name="last-name"
    //                 id="last-name"
    //                 placeholder='Last Name *'
    //                 autoComplete="family-name"
    //                 className="block w-full rounded-md border-0 py-2.5 text-[#b1b1b1] shadow-sm ring-1 ring-inset ring-[#E4E4E4] placeholder:text-gray-400 sm:text-base bg-[#f4f4f4] sm:leading-6 outline-none px-4"
    //               />
    //             </div>


    //             <div className="sm:col-span-3">
    //               <input
    //                 id="email"
    //                 name="email"
    //                 type="email"
    //                 autoComplete="email"
    //                 placeholder='Email'
    //                 className="block w-full rounded-md border-0 py-2.5 text-[#b1b1b1] shadow-sm ring-1 ring-inset ring-[#E4E4E4] placeholder:text-gray-400 sm:text-base bg-[#f4f4f4] sm:leading-6 outline-none px-4"
    //               />
    //             </div>

    //             <div className="sm:col-span-3">
    //               <PhoneNumber value={phoneNumber} onChange={setPhoneNumber} />
    //             </div>

    //             <div className="col-span-full">
    //               <Dropdown label={"Search your country"} isSearch={true} />
    //             </div>

    //             <div className="col-span-full">
    //               <div className="mt-2">
    //                 <textarea
    //                   id="about"
    //                   name="about"
    //                   rows={6}
    //                   placeholder='Write your message here...'
    //                   className="block w-full rounded-md border-0 py-2.5 text-[#b1b1b1] shadow-sm ring-1 ring-inset ring-[#E4E4E4] placeholder:text-gray-400 sm:text-base bg-[#f4f4f4] sm:leading-6 outline-none px-4"
    //                   defaultValue={''}
    //                 />
    //               </div>
    //             </div>

    //           </div>
    //         </div>

    //         <div className="mt-6 flex items-center justify-end gap-x-6">

    //           <button
    //             type="submit"
    //             className="rounded-md flex flex-1 items-center justify-center bg-indigo-600 px-3 py-5 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //           >
    //             SEND A MESSAGE
    //           </button>
    //         </div>
    //         <p className='text-center text-xl text-blue-900'>
    //           Simply fill out the form below, and one of our friendly team members will get back to you as soon as possible. Let’s start your journey with IWS Online School together!
    //         </p>
    //       </div>
    //     </TabPanel>
    //     <TabPanel>
    //       <div>
    //         asd
    //       </div>
    //       {/* <CalendarBook /> */}
    //     </TabPanel>
    //   </TabPanels>
    // </TabGroup>


    <div className='flex flex-col gap-5 mt-10 max-w-4xl w-full container'>
      <h1 className='text-h1 text-center font-bold text-blue-900'>Would you like to send us a message?</h1>
      <p className='text-center text-p text-gray-500'>Whether you have questions about our courses, need assistance with enrollment, or just want to say hello, we’re here to help!</p>


      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <input
            value={firstName}
            onChange={handleFirstName}
            type="text"
            name="first-name"
            id="first-name"
            placeholder='First Name *'
            autoComplete="given-name"
            className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-[#E4E4E4] placeholder:text-gray-400 sm:text-base bg-[#f4f4f4] sm:leading-6 outline-none px-4"
          />
          {
            validationErrors.firstName && (
              <p className='text-red-600 text-sm italic'>{validationErrors.firstName}</p>
            )
          }
        </div>
        <div className="sm:col-span-3">
          <input
            value={lastName}
            onChange={handleLastName}
            type="text"
            name="last-name"
            id="last-name"
            placeholder='Last Name *'
            autoComplete="family-name"
            className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-[#E4E4E4] placeholder:text-gray-400 sm:text-base bg-[#f4f4f4] sm:leading-6 outline-none px-4"
          />
          {
            validationErrors.lastName && (
              <p className='text-red-600 text-sm italic'>{validationErrors.lastName}</p>
            )
          }
        </div>

        <div className="sm:col-span-3">
          <input
            value={email}
            onChange={handleEmail}
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder='Email'
            className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-[#E4E4E4] placeholder:text-gray-400 sm:text-base bg-[#f4f4f4] sm:leading-6 outline-none px-4"
          />
          {
            validationErrors.email && (
              <p className='text-red-600 text-sm italic'>{validationErrors.email}</p>
            )
          }
        </div>

        <div className="sm:col-span-3">
          <PhoneNumber value={phoneNumber} onChange={setPhoneNumber} />
          {
            validationErrors.phoneNumber && (
              <p className='text-red-600 text-sm italic'>{validationErrors.phoneNumber}</p>
            )
          }
        </div>

        <div className="col-span-full">
          <Dropdown country={country} setCountry={setCountry} label={"Search your country"} isSearch={true} />
          {
            validationErrors.country && (
              <p className='text-red-600 text-sm italic'>{validationErrors.country}</p>
            )
          }
        </div>

        <div className="col-span-full">
          <div className="mt-2">
            <textarea
              value={message}
              onChange={handleMessage}
              id="message"
              name="message"
              rows={6}
              placeholder='Write your message here...'
              className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-[#E4E4E4] placeholder:text-gray-400 sm:text-base bg-[#f4f4f4] sm:leading-6 outline-none px-4"
              defaultValue={''}
            />
            {
              validationErrors.message && (
                <p className='text-red-600 text-sm italic'>{validationErrors.message}</p>
              )
            }
          </div>
        </div>

      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">

        <button
          type="submit"
          onClick={handleSubmit}
          className="rounded-md flex flex-1 items-center justify-center bg-indigo-600 px-3 py-5 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          SEND A MESSAGE
        </button>
      </div>
      <p className='text-center text-p text-blue-900'>
        Simply fill out the form below, and one of our friendly team members will get back to you as soon as possible. Let’s start your journey with IWS Online School together!
      </p>
    </div>
  )
}

export default TabSection