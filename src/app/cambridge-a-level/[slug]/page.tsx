import React from "react";
import { courses } from "@/app/data/alevel";
import CoursePage from "@/app/components/ui/CoursePage";
import type { Metadata, ResolvingMetadata } from 'next'

interface pageProps {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: pageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const course = courses.find((course) => course.url === params.slug);

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
  if (course) {
    return {
      title: course.subject_name,
      description: course.description,
      abstract: course.description2,
      // openGraph: {
      //   images: ['/some-specific-page-image.jpg', ...previousImages],
      // },
    }
  } else {
    return {
      title: "Not Found"
      // openGraph: {
      //   images: ['/some-specific-page-image.jpg', ...previousImages],
      // },
    }
  }

}


const page: React.FC<pageProps> = ({ params, searchParams }) => {
  const course = courses.find((course) => course.url === params.slug);

  return <CoursePage course={course} />

};

export default page;
