"use client"
import { useEffect } from "react";
import Link from "next/link";

export default function Custom404() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-7 justify-center items-center text-center container h-[80vh]">
        <video width="640" height="360" loop autoPlay muted>
          <source src="/404.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <h1>Ooops! Page Not Found</h1>
        <p>
          {"This page doesn't exist or was removed! Redirecting you to the home page..."}
        </p>
        <Link
          className="px-8 py-3 bg-blue-600 text-white rounded-full w-fit"
          href="/"
        >
          Back to Home Page
        </Link>
      </div>
    </>
  );
}
