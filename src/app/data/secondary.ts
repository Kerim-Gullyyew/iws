export interface Secondary {
  id: string;
  subject_name: string;
  url: string;
  image_url: string;
  icon: string;
  description: string;
  key_objective: string;
  what_learn: {
    id: string,
    title: string,
    description: string,
  }[]
}

export const courses: Secondary[] = [
  {
    id: "1",
    subject_name: "Mathematics",
    url: "mathematics",
    image_url: "/images/mathematics.jpg",
    icon: "/images/mathematics.jpg",
    description: "Mathematics covers a variety of topics including algebra, geometry, calculus, and statistics. It develops problem-solving skills and logical reasoning.",
    key_objective: "Lorem",
    what_learn: [
      {
        id: "1",
        title: "name",
        description: "desciption"
      },
    ]
  },
  {
    id: "2",
    subject_name: "Mathematics",
    url: "mathematics",
    image_url: "/images/mathematics.jpg",
    icon: "/images/mathematics.jpg",
    description: "Mathematics covers a variety of topics including algebra, geometry, calculus, and statistics. It develops problem-solving skills and logical reasoning.",
    key_objective: "Lorem",
    what_learn: [
      {
        id: "1",
        title: "name",
        description: "desciption"
      },
    ]
  },
  {
    id: "3",
    subject_name: "Mathematics",
    url: "mathematics",
    image_url: "/images/mathematics.jpg",
    icon: "/images/mathematics.jpg",
    description: "Mathematics covers a variety of topics including algebra, geometry, calculus, and statistics. It develops problem-solving skills and logical reasoning.",
    key_objective: "Lorem",
    what_learn: [
      {
        id: "1",
        title: "name",
        description: "desciption"
      },
    ]
  },
  {
    id: "4",
    subject_name: "Mathematics",
    url: "mathematics",
    image_url: "/images/mathematics.jpg",
    icon: "/images/mathematics.jpg",
    description: "Mathematics covers a variety of topics including algebra, geometry, calculus, and statistics. It develops problem-solving skills and logical reasoning.",
    key_objective: "Lorem",
    what_learn: [
      {
        id: "1",
        title: "name",
        description: "desciption"
      },
    ]
  },
];
