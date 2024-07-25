"use client";
import React from "react";
import { courses } from "@/app/data/alevel";
import CoursePage from "@/app/components/ui/CoursePage";
import type { Metadata, ResolvingMetadata } from 'next'


interface pageProps {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}


const page: React.FC<pageProps> = ({ params, searchParams }) => {
  const course = courses.find((course) => course.url === params.slug);

  return <CoursePage course={course} />

};

export default page;
