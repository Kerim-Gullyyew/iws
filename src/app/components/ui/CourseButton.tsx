'use client'
import React from "react";
import { useRouter } from "next/navigation";
interface CourseButtonProps {}

const CourseButton: React.FC<CourseButtonProps> = ({}) => {
  const router = useRouter();

  return (
    <div className="flex items-center gap-x-5">
      <button
        onClick={() =>
          router.push("/apply")
        }
        className="bg-white px-6 py-2 rounded-lg cursor-pointer text-blue-600 hover:bg-gray-100 "
      >
        Apply now
      </button>
      <button
        onClick={() =>
          router.push("/contact-us")
        }
        className="bg-white px-6 py-2 rounded-lg cursor-pointer text-blue-600 hover:bg-gray-100 "
      >
        Contact us
      </button>
    </div>
  );
};

export default CourseButton;
