"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

interface EnrollButtonProps {
  light?: boolean;
}

const EnrollButton: React.FC<EnrollButtonProps> = ({ light }) => {
  const router = useRouter();

  const handleClick = () => {
    let newUrl = '/apply';

    if (typeof window !== 'undefined') {
      const initialUrl = localStorage.getItem('initialUrl');
      if (initialUrl) {
        try {
          const url = new URL(initialUrl);
          // Extract the path and query parameters
          const pathAndQuery = url.pathname + url.search;
          newUrl += pathAndQuery;
        } catch (error) {
          console.error('Invalid URL in localStorage:', initialUrl);
        }
      }
    }

    router.push(newUrl);
  };

  return (
    <button
      onClick={handleClick}
      className={`${
        light
          ? 'bg-white rounded-full px-9 py-3 text-blue-600 font-semibold text-[18px]'
          : 'bg-[#4366F6] rounded-xl px-7 py-3 text-white hover:bg-[#2C50C7] transition-all duration-300 text-lg'
      }`}
    >
      Apply now
    </button>
  );
};

export default EnrollButton;
