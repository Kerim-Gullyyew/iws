"use client";
import React, { useState, useEffect } from "react";
import PhoneNumber from "../form/PhoneNumber";
import Dropdown from "../form/Dropdown";
import DropdownCustomData from "../form/DropdownCustomData";
import * as Yup from "yup";
import { usePathname, useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReCAPTCHA from "react-google-recaptcha";

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
  recaptcha?: string;
}

const TabSection: React.FC<TabSectionProps> = () => {
  const [parentFirstName, setParentFirstName] = useState("");
  const [parentLastName, setParentLastName] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [parentPhoneNumber, setParentPhoneNumber] = useState("44");
  const [country, setCountry] = useState<string | number>("");
  const [keystage, setKeystage] = useState<string | number>("");
  const [studentFirstName, setStudentFirstName] = useState("");
  const [studentLastName, setStudentLastName] = useState("");
  const [studentDOB, setStudentDOB] = useState<Date | null>(null);
  const [message, setMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [loading, setLoading] = useState(false);
  const [fullUrl, setFullUrl] = useState("");
  const [initialUrl, setInitialUrl] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const router = useRouter();
  const pathname = usePathname();

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
    parentFirstName: Yup.string().required("Parent's first name is required"),
    parentLastName: Yup.string().required("Parent's last name is required"),
    parentEmail: Yup.string().email("Invalid email").required("Email is required"),
    parentPhoneNumber: Yup.string().required("Phone number is required"),
    studentFirstName: Yup.string().required("Student's first name is required"),
    studentLastName: Yup.string().required("Student's last name is required"),
    studentDOB: Yup.date()
      .nullable()
      .required("Student's date of birth is required"),
    keystage: Yup.string().required("Keystage is required"),
    country: Yup.string().required("Country is required"),
    message: Yup.string().required("Your message is required"),
    recaptcha: Yup.string().required("Please complete the reCAPTCHA"),
  });

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

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
          recaptcha: recaptchaToken,
        },
        { abortEarly: false }
      );

      try {
        const response = await fetch("https://api.main.iwsonlineschool.co.uk/iws-contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            parentFirstName,
            parentLastName,
            parentEmail,
            parentPhoneNumber,
            studentFirstName,
            studentLastName,
            studentDOB: studentDOB?.toISOString().split("T")[0],
            keystage,
            country,
            message,
            fullUrl,
            initialUrl,
            recaptchaToken,
          }),
        });

        if (response.ok) {
          router.push("/thank-you");
        } else {
          const errorData = await response.json();
          console.error("Submission Error:", errorData);
        }
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
    <div className="flex flex-col gap-5 max-w-4xl w-full">
      <p className={`text-p text-left`}>
        Simply fill out the form below, and one of our friendly team members
        will get back to you as soon as possible. Let’s start your educational
        journey with us today!
      </p>

      <p className="font-bold">Parent / Guardian Details</p>
      <div className="mt-1 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-6">
        {/* Parent Details */}
        <div className="sm:col-span-3">
          <input
            value={parentFirstName}
            onChange={(e) => setParentFirstName(e.target.value)}
            type="text"
            placeholder="Parent First Name *"
            className="block w-full rounded-md border-0 py-3 shadow-sm ring-1 ring-inset ring-[#E4E4E4] placeholder:text-gray-400 sm:text-base bg-[#ebecee] sm:leading-6 outline-none px-4"
          />
          {validationErrors.parentFirstName && (
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
        {/* Student Details */}
        <div className="sm:col-span-3">
          <input
            value={studentFirstName}
            onChange={(e) => setStudentFirstName(e.target.value)}
            type="text"
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

      {/* reCAPTCHA */}
      <div className="sm:col-span-6">
        <ReCAPTCHA
          sitekey="6LednaoqAAAAAPvLwejTxX18h3W9Hj_u4G10zls7"
          onChange={handleRecaptchaChange}
        />
        {validationErrors.recaptcha && (
          <p className="text-red-600 text-sm italic">
            {validationErrors.recaptcha}
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
