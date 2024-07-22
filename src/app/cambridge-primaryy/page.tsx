"use client";

import React from "react";
import { courses, Primary } from "../data/primary";
import Image from "next/image";
import Link from "next/link";

interface PageProps {}

const Page: React.FC<PageProps> = ({}) => {
  return (
    <div>
      <h1>IGCSE Courses</h1>
      <div className="courses">
        {courses.map((course: Primary) => (
          <div key={course.id} className="course">
            <Link href={"primary/" + course.url}>
              <Image width="500" height="500" src={course.image_url} alt={course.subject_name} />
              <h2>{course.subject_name}</h2>
              <p>{course.description}</p>
            </Link>
          </div>
        ))}
      </div>
      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          background-color: #f9f9f9;
          margin: 0;
          padding: 20px;
        }
        .courses {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        .course {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          width: calc(33.333% - 40px);
          box-sizing: border-box;
          transition: transform 0.2s;
        }
        .course:hover {
          transform: scale(1.05);
        }
        .course img {
          max-width: 100%;
          border-radius: 8px;
        }
        .course h2 {
          margin-top: 0;
        }
        .course a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default Page;
