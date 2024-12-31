"use client";
import React, { useState, useEffect } from "react";
import PhoneNumberHero from "../form/PhoneNumberHero";
import * as Yup from "yup";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";

interface TabSectionProps {}

export interface CountryData {
  label: string;
  value: string;
}

interface ValidationErrors {
  FullName?: string;
  Email?: string;
  contactPhoneNumber?: string;
  recaptcha?: string;
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
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

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
          FullName,
          Email,
          contactPhoneNumber,
          recaptcha: recaptchaToken,
        },
        { abortEarly: false }
      );

      try {
        const response = await fetch("https://api.main.iwsonlineschool.co.uk/iws-herocontact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            FullName,
            Email,
            contactPhoneNumber,
            fullUrl, // Current page URL
            initialUrl, // The initial URL from localStorage
            recaptchaToken, // reCAPTCHA token
          }),
        });

        if (response.ok) {
          router.push("/thank-you-hero");
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
    <div className="flex flex-col gap-5 max-w-4xl w-full bg-[#315BD9] rounded-3xl p-8 mt-9">
      <p className={`text-[20px] text-left text-white font-semibold`}>
        {"Let's study together"}
      </p>
      <div className="mt-0 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <input
            value={FullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
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

        <div className="sm:col-span-3">
          <p className="text-white text-[11px] leading-4">
            By clicking the button, you agree to the{" "}
            <Link className="text-orange-400 underline" href="/terms-conditions">
              terms of data processing
            </Link>{" "}
            in accordance with{" "}
            <Link className="text-orange-400 underline" href="/privacy-policy">
              the privacy policy
            </Link>
          </p>
        </div>
      </div>

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
            Get a free consultation
          </button>
        )}
      </div>
    </div>
  );
};

export default TabSection;
