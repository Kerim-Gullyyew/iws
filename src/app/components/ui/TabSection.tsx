"use client";
import React, { useState } from "react";
import PhoneNumber from "../form/PhoneNumber";
import Dropdown from "../form/Dropdown";
import * as Yup from "yup";
import axios from "axios";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import DropdownCustomData from "../form/DropdownCustomData";
interface TabSectionProps {}

export interface CountryData {
  label: string;
  value: string;
}
interface ValidationErrors {
  parentFirstName?: string;
  parentLastName?: string;
  parentEmail?: string;
  parentPhoneNumber?: string;
  studentFirstName?: string;
  studentLastName?: string;
  studentDOB?: string;
  keystage?: string;
  country?: string;
  message?: string;
}

const TabSection: React.FC<TabSectionProps> = ({}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const fullUrl = `${pathname}?${searchParams.toString()}`;
  const [parentFirstName, setParentFirstName] = useState<string>("");
  const [parentLastName, setParentLastName] = useState<string>("");
  const [parentEmail, setParentEmail] = useState<string>("");
  const [parentPhoneNumber, setParentPhoneNumber] = useState<string>("44");
  const [country, setCountry] = useState<string | number>("");
  const [keystage, setKeystage] = useState<string | number>("");
  const [studentFirstName, setStudentFirstName] = useState<string>("");
  const [studentLastName, setStudentLastName] = useState<string>("");
  const [studentDOB, setStudentDOB] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    parentFirstName: Yup.string().required("Parent's first name is required"),
    parentLastName: Yup.string().required("Parent's last name is required"),
    parentEmail: Yup.string().email("Invalid email").required("Email is required"),
    parentPhoneNumber: Yup.string().required("Phone number is required"),
    studentFirstName: Yup.string().required("Student's first name is required"),
    studentLastName: Yup.string().required("Student's last name is required"),
    studentDOB: Yup.string().required("Student's date of birth is required"),
    keystage: Yup.string().required("Keystage is required"),
    country: Yup.string().required("Country is required"),
    message: Yup.string().required("Your message is required"),
  });

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    event.preventDefault();
    setLoading(true);
    try {
      await validationSchema.validate(
        {
          parentFirstName,
          parentLastName,
          parentEmail,
          parentPhoneNumber,
          studentFirstName,
          studentLastName,
          studentDOB,
          keystage,
          country,
          message,
        },
        { abortEarly: false }
      );
      try {
        const response = await axios.post(
          "https://api.main.iwsonlineschool.co.uk/iws-contact",
          {
            parentFirstName,
            parentLastName,
            parentEmail,
            parentPhoneNumber,
            studentFirstName,
            studentLastName,
            studentDOB,
            keystage,
            country,
            message,
            fullUrl,
          }
        );
        router.push("/thank-you");
      } catch (error) {
        console.error("Submission Error:", error);
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = err.inner.reduce((acc, error) => {
          if (typeof error.path === "string") {
            return {
              ...acc,
              [error.path]: error.message,
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
    <div className="flex flex-col gap-5 max-w-4xl w-full">
      <p className={`text-p text-left`}>
        Simply fill out the form below, and one of our friendly team members
        will get back to you as soon as possible. Let’s start your educational
        journey with us today!
      </p>

      <p className="font-bold">Parent / Guardian Details</p>
      <div className="mt-1 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <input
            value={parentFirstName}
            onChange={(e) => setParentFirstName(e.target.value)}
            type="text"
            name="parent-first-name"
            id="parent-first-name"
            placeholder="Parent First Name *"
            className="block w-full rounded-md border-0 py-3 shadow-sm ring-1 ring-inset ring-[#E4E4E4] placeholder:text-gray-400 sm:text-base bg-[#ebecee] sm:leading-6 outline-none px-4"
          />
          {validationErrors.  parentFirstName && (
            <p className="text-red-600 text-sm italic">
              {validationErrors.parentFirstName}
            </p>
          )}
        </div>
        <div className="sm:col-span-3">
          <input
            value={parentLastName}
            onChange={(e) => setParentLastName(e.target.value)}
            type="text"
            name="parent-last-name"
            id="parent-last-name"
            placeholder="Parent Last Name *"
            className="block w-full rounded-md border-0 py-3 shadow-sm ring-1 ring-inset ring-[#E4E4E4] placeholder:text-gray-400 sm:text-base bg-[#ebecee] sm:leading-6 outline-none px-4"
          />
          {validationErrors.parentLastName && (
            <p className="text-red-600 text-sm italic">
              {validationErrors.parentLastName}
            </p>
          )}
        </div>

        <div className="sm:col-span-3">
          <input
            value={parentEmail}
            onChange={(e) => setParentEmail(e.target.value)}
            type="email"
            name="parent-email"
            id="parent-email"
            placeholder="Parent Email *"
            className="block w-full rounded-md border-0 py-3 shadow-sm ring-1 ring-inset ring-[#E4E4E4] placeholder:text-gray-400 sm:text-base bg-[#ebecee] sm:leading-6 outline-none px-4"
          />
          {validationErrors.parentEmail && (
            <p className="text-red-600 text-sm italic">
              {validationErrors.parentEmail}
            </p>
          )}
        </div>

        <div className="sm:col-span-3">
          <PhoneNumber
            value={parentPhoneNumber}
            onChange={setParentPhoneNumber}
          />
          {validationErrors.parentPhoneNumber && (
            <p className="text-red-600 text-sm italic">
              {validationErrors.parentPhoneNumber}
            </p>
          )}
        </div>

        <div className="sm:col-span-3">
          <Dropdown
            country={country}
            setCountry={setCountry}
            label={"Search your country"}
            isSearch={true}
          />
          {validationErrors.country && (
            <p className="text-red-600 text-sm italic">
              {validationErrors.country}
            </p>
          )}
        </div>
      </div>

      <p className="font-bold">Student Details</p>
      <div className="mt-1 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <input
            value={studentFirstName}
            onChange={(e) => setStudentFirstName(e.target.value)}
            type="text"
            name="student-first-name"
            id="student-first-name"
            placeholder="Student First Name *"
            className="block w-full rounded-md border-0 py-3 shadow-sm ring-1 ring-inset ring-[#E4E4E4] placeholder:text-gray-400 sm:text-base bg-[#ebecee] sm:leading-6 outline-none px-4"
          />
          {validationErrors.studentFirstName && (
            <p className="text-red-600 text-sm italic">
              {validationErrors.studentFirstName}
            </p>
          )}
        </div>
        <div className="sm:col-span-3">
          <input
            value={studentLastName}
            onChange={(e) => setStudentLastName(e.target.value)}
            type="text"
            name="student-last-name"
            id="student-last-name"
            placeholder="Student Last Name *"
            className="block w-full rounded-md border-0 py-3 shadow-sm ring-1 ring-inset ring-[#E4E4E4] placeholder:text-gray-400 sm:text-base bg-[#ebecee] sm:leading-6 outline-none px-4"
          />
          {validationErrors.studentLastName && (
            <p className="text-red-600 text-sm italic">
              {validationErrors.studentLastName}
            </p>
          )}
        </div>

        <div className="sm:col-span-3">
          <input
            value={studentDOB}
            onChange={(e) => setStudentDOB(e.target.value)}
            type="date"
            name="student-dob"
            id="student-dob"
            placeholder="Date of Birth"
            className="block w-full rounded-md border-0 py-3 shadow-sm ring-1 ring-inset ring-[#E4E4E4] placeholder:text-gray-400 sm:text-base bg-[#ebecee] sm:leading-6 outline-none px-4"
          />
          {validationErrors.studentDOB && (
            <p className="text-red-600 text-sm italic">
              {validationErrors.studentDOB}
            </p>
          )}
        </div>
      </div>

      <p className="font-bold">Enquiry Details</p>
      <div className="sm:col-span-3">
        <DropdownCustomData
          dropdown={keystage}
          setDropdown={setKeystage}
          label={"Select your Key Stage"}
          isSearch={false}
        />
        {validationErrors.keystage && (
          <p className="text-red-600 text-sm italic">
            {validationErrors.keystage}
          </p>
        )}
      </div>
      <div className="col-span-full">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          id="message"
          name="message"
          rows={6}
          placeholder="Write your message here..."
          className="block w-full rounded-md border-0 py-3 shadow-sm ring-1 ring-inset ring-[#E4E4E4] placeholder:text-gray-400 sm:text-base bg-[#ebecee] sm:leading-6 outline-none px-4"
        />
        {validationErrors.message && (
          <p className="text-red-600 text-sm italic">
            {validationErrors.message}
          </p>
        )}
      </div>

      <div className="mt-1 flex items-center justify-center md:justify-end gap-x-6">
        {loading ? (
          <button
            type="submit"
            className="bg-[#4366F6] rounded-xl px-7 py-3 text-white hover:bg-[#2C50C7] transition-all duration-300 text-lg"
          >
            Loading
          </button>
        ) : (
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#4366F6] rounded-xl px-7 py-3 text-white hover:bg-[#2C50C7] transition-all duration-300 text-lg"
          >
            Send a Message
          </button>
        )}
      </div>
    </div>
  );
};

export default TabSection;