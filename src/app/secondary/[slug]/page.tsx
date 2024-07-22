import { courses, Secondary } from "../../data/secondary";

export default function Page({ params }: { params: { slug: string } }) {
  const course = courses.find((course: Secondary) => {
    return course.url === params.slug;
  });

  if (!course) {
    return <div>Course not found</div>;
  }

  return <div>My course: {course.description}</div>;
}