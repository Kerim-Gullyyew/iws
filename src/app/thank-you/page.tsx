import React from "react";

interface pageProps {}

const page: React.FC<pageProps> = ({}) => {
  return (
    <div>
      <div className="bg-asset-3 bg-primary bg-center bg-cover bg-blend-luminosity">
        <div className="container py-24">
          <h1 className=" text-white leading-tight font-medium text-[46px]">
            Thank you for your interest in <br />
            the IWS Online School!
          </h1>
        </div>
      </div>

      <div className="container ">
        <div className="mt-8 flex flex-col gap-5 sm:w-8/12">
          <p className=" ">
            Thank you for reaching out! We’re thrilled to have you join our
            community and look forward to assisting you. We will review your
            request and someone from our team will contact you within the next
            48 hours to discuss the next steps.
          </p>
          <p className=" ">
            Thank you for choosing us to guide you on your educational journey!
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
