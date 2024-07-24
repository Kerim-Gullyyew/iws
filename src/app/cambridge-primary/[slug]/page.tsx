"use client";
import React from "react";
import { courses } from "@/app/data/primary";
import CoursePage from "@/app/components/ui/CoursePage";
interface pageProps {
  params: {
    slug: string;
  };
}

const page: React.FC<pageProps> = ({ params }: { params: { slug: string } }) => {
  console.log("slug", params.slug);

  const course = courses.find((course) => course.url === params.slug);

  return <CoursePage course={course} />

};

export default page;
