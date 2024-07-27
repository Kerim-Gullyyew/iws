'use client'
import React, { useState } from 'react'
import PhoneNumber from '../form/PhoneNumber'
import Dropdown from '../form/Dropdown'
import * as Yup from 'yup';
import axios from 'axios'
import { useRouter } from 'next/navigation';
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
  const router = useRouter()

  const [loading, setLoading] = useState<boolean>(false);

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
    setLoading(true);
    try {
      await validationSchema.validate({
        firstName,
        lastName,
        email,
        phoneNumber,
        country,
        message,
      }, { abortEarly: false });
      try {
        const response = await axios.post('https://api.main.iwsonlineschool.co.uk/iws-contact', {
          firstName,
          lastName,
          email,
          phone_number: phoneNumber,
          country,
          message
        });
        router.push('/thank-you');
      } catch (error) {
        console.error('Payment Error:', error);
      }
    } catch (err) {
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
    setLoading(false);
  };


  return (

    <div className='flex flex-col gap-5 max-w-4xl w-full'>

      <p className={`text-p  text-left`}>
        Simply fill out the form below, and one of our friendly team members will get back to you as soon as possible. Let’s start your journey with IWS Online School together!
      </p>


      <div className="mt-1 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <input
            value={firstName}
            onChange={handleFirstName}
            type="text"
            name="first-name"
            id="first-name"
            placeholder='First Name *'
            autoComplete="given-name"
            className="block w-full rounded-md border-0 py-3  shadow-sm ring-1 ring-inset ring-[#E4E4E4] placeholder:text-gray-400 sm:text-base bg-[#ebecee] sm:leading-6 outline-none px-4"
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
            className="block w-full rounded-md border-0 py-3  shadow-sm ring-1 ring-inset ring-[#E4E4E4] placeholder:text-gray-400 sm:text-base bg-[#ebecee] sm:leading-6 outline-none px-4"
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
            className="block w-full rounded-md border-0 py-3  shadow-sm ring-1 ring-inset ring-[#E4E4E4] placeholder:text-gray-400 sm:text-base bg-[#ebecee] sm:leading-6 outline-none px-4"
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
          <div className="mt-1">
            <textarea
              value={message}
              onChange={handleMessage}
              id="message"
              name="message"
              rows={6}
              placeholder='Write your message here...'
              className="block w-full rounded-md border-0 py-3  shadow-sm ring-1 ring-inset ring-[#E4E4E4] placeholder:text-gray-400 sm:text-base bg-[#ebecee] sm:leading-6 outline-none px-4"

            />
            {
              validationErrors.message && (
                <p className='text-red-600 text-sm italic'>{validationErrors.message}</p>
              )
            }
          </div>
        </div>

      </div>

      <div className="mt-1 flex items-center justify-center md:justify-end gap-x-6">
        {
          loading ? (
            <button
              type="submit"
              // className="rounded-md flex flex-3 font-[26px] items-center justify-center bg-indigo-600 px-3 py-4 text-2xl  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              className='bg-[#4366F6] rounded-xl px-7 py-3 text-white hover:bg-[#2C50C7] transition-all duration-300  text-lg'
            >
              Loading
            </button>
          ) : (
            <button
              type="submit"
              onClick={handleSubmit}
              // className="rounded-md flex flex-3 font-[26px] items-center justify-center bg-indigo-600 px-3 py-4 text-2xl  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              className='bg-[#4366F6] rounded-xl px-7 py-3 text-white hover:bg-[#2C50C7] transition-all duration-300  text-lg'
            >
              Send a Message
            </button>
          )
        }

      </div>

    </div>
  )
}

export default TabSection