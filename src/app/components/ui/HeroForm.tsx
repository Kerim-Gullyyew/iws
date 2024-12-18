"use client";
import React, { useState, useEffect } from "react";
import PhoneNumberHero from "../form/PhoneNumberHero";
import Dropdown from "../form/Dropdown";
import DropdownCustomData from "../form/DropdownCustomData";
import * as Yup from "yup";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";

interface TabSectionProps {}

export interface CountryData {
  label: string;
  value: string;
}

interface ValidationErrors {
  FullName?: string;
  Email?: string;
  contactPhoneNumber?: string;
}

const TabSection: React.FC<TabSectionProps> = () => {
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [contactPhoneNumber, setcontactPhoneNumber] = useState("44");
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );
  const [loading, setLoading] = useState(false);
  const [fullUrl, setFullUrl] = useState("");
  const [initialUrl, setInitialUrl] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  // Retrieve the initial URL from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = window.location.search;
      const fullUrl = `${pathname}${searchParams}`;
      setFullUrl(fullUrl);

      const savedInitialUrl = localStorage.getItem("initialUrl");
      if (savedInitialUrl) {
        setInitialUrl(savedInitialUrl);
      }
    }
  }, [pathname]);

  const validationSchema = Yup.object().shape({
    FullName: Yup.string().required("Full name is required"),
    Email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    contactPhoneNumber: Yup.string().required("Phone number is required"),
  });

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    event.preventDefault();
    setLoading(true);
    try {
      await validationSchema.validate(
        {
          FullName,
          Email,
          contactPhoneNumber
        },
        { abortEarly: false }
      );

      try {
        await axios.post("https://api.main.iwsonlineschool.co.uk/iws-herocontact", {
          FullName,
          Email,
          contactPhoneNumber,
          fullUrl, // Current page URL
          initialUrl, // The initial URL from localStorage
        });
        router.push("/thank-you");
      } catch (error) {
        console.error("Submission Error:", error);
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = err.inner.reduce((acc: ValidationErrors, error) => {
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
    <div className="flex flex-col gap-5 max-w-4xl w-full bg-[#315BD9] rounded-3xl p-8 mt-9">
      <p className={`text-[20px] text-left text-white font-semibold`}>
        {"Let's study together"}
      </p>

      {/* <p className="font-bold">Parent / Guardian Details</p> */}
      <div className="mt-0 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <input
            value={FullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            name="parent-first-name"
            id="parent-first-name"
            placeholder="Full Name"
            className="block w-full text-white rounded-full border-0 py-3 shadow-sm ring-0 ring-inset ring-[#E4E4E4] placeholder:text-gray-200 sm:text-base bg-[#3E69E0] sm:leading-6 outline-none px-4"
          />
          {validationErrors.FullName && (
            <p className="text-red-600 text-sm italic">
              {validationErrors.FullName}
            </p>
          )}
        </div>

        <div className="sm:col-span-3">
          <PhoneNumberHero
            value={contactPhoneNumber}
            onChange={setcontactPhoneNumber}
          />
          {validationErrors.contactPhoneNumber && (
            <p className="text-red-600 text-sm italic">
              {validationErrors.contactPhoneNumber}
            </p>
          )}
        </div>

        <div className="sm:col-span-3">
          <input
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="parent-email"
            id="parent-email"
            placeholder="Email address"
            className="block w-full text-white rounded-full border-0 py-3 shadow-sm ring-0 ring-inset ring-[#E4E4E4] placeholder:text-gray-200 sm:text-base bg-[#3E69E0] sm:leading-6 outline-none px-4"
          />
          {validationErrors.Email && (
            <p className="text-red-600 text-sm italic">
              {validationErrors.Email}
            </p>
          )}
        </div>

        <div className="sm:col-span-3">
          <p className="text-white text-[11px] leading-4">
            By clicking the button, you agree to the{" "}
            <Link
              className="text-orange-400 underline"
              href="/terms-conditions"
            >
              terms of data processing
            </Link>{" "}
            in accordance with{" "}
            <Link className="text-orange-400 underline" href="/privacy-policy">
              the privacy policy
            </Link>
          </p>
        </div>
      </div>
      {/* 
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
          <DatePicker
            selected={studentDOB}
            onChange={(date: Date | null) => setStudentDOB(date)}
            placeholderText="Date of Birth *"
            dateFormat="dd/MM/yyyy"
            maxDate={new Date()}
            showYearDropdown
            scrollableYearDropdown
            className="block w-full rounded-md border-0 py-3 shadow-sm ring-1 ring-inset ring-[#E4E4E4] placeholder-gray-400 sm:text-base bg-[#ebecee] sm:leading-6 outline-none px-4"
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
      </div> */}

      {/* <div className="mt-1 flex items-center justify-center md:justify-end gap-x-6"> */}
      <div className="mt-1">
        {loading ? (
          <button
            type="submit"
            className="bg-[#ad6c1d] rounded-xl px-7 py-3 text-white hover:bg-[#2C50C7] transition-all duration-300 text-lg"
          >
            Loading
          </button>
        ) : (
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#FF8D00] w-full rounded-xl px-7 py-3 text-white hover:bg-[#ad6c1d] transition-all duration-300 text-lg"
          >
            Get a consultation
          </button>
        )}
      </div>
    </div>
  );
};

export default TabSection;
