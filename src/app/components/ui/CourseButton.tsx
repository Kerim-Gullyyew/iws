import React from 'react'

interface CourseButtonProps {

}

const CourseButton: React.FC<CourseButtonProps> = ({ }) => {
  return (
    <div className="flex items-center gap-x-5">
      <button className="bg-white px-6 py-2 rounded-lg cursor-pointer text-blue-600 hover:bg-gray-100 ">
        Enroll now
      </button>
      <button className="bg-white px-6 py-2 rounded-lg cursor-pointer text-blue-600 hover:bg-gray-100 ">
        Contact us
      </button>
    </div>
  )
}

export default CourseButton