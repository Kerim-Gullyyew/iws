import React from "react";
import { keyStages } from "@/app/data/keystage";
import CoursePage from "@/app/components/ui/CoursePage";
import type { Metadata, ResolvingMetadata } from 'next'

interface pageProps {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const findCourse = (slug: string) => {
  const keyStage = keyStages.find((keyStage) => keyStage.name === "Primary School");
  
  const allSubjects = [
    ...(keyStage?.includedSubjects || []),
    ...(keyStage?.additionalSubjects || [])
  ];
  return allSubjects.find((course) => course.url === "cambridge-primary/" + slug);
}

export async function generateMetadata(
  { params, searchParams }: pageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const course = findCourse(params.slug);

  if (course) {
    return {
      title: course.subject_name,
      description: course.description,
      abstract: course.description2,
    }
  } else {
    return {
      title: "Not Found"
    }
  }
}

const page: React.FC<pageProps> = ({ params, searchParams }) => {
  const course = findCourse(params.slug);
  
  return <CoursePage course={course} />
};

export default page;
