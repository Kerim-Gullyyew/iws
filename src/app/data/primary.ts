export interface Primary {
  id: string;
  subject_name: string;
  url: string;
  image_url: string;
  icon: string;
  description: string;
  description2?: string;
  key_objective: string[];
  what_learn: {
    id: string,
    title: string,
    description: string,
  }[]
}

export const courses: Primary[] = [
  {
    id: "1",
    subject_name: "Mathematics1",
    url: "mathematics1",
    image_url: "",
    icon: "",
    description: "Mathematics  dcdscx covers a variety of topics including algebra, geometry, calculus, and statistics. It develops problem-solving skills and logical reasoning.",
    key_objective: [
      "Lorem",
      "Lorem asfsdas as asf",
    ],
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
    url: "/primary/mathematics",
    image_url: "",
    icon: "",
    description: "Mathematics covers a variety of topics including algebra, geometry, calculus, and statistics. It develops problem-solving skills and logical reasoning.",
    key_objective: ["Lorem"],
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
    image_url: "",
    icon: "",
    description: "Mathematics covers a variety of topics including algebra, geometry, calculus, and statistics. It develops problem-solving skills and logical reasoning.",
    key_objective: ["Lorem"],
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
    image_url: "",
    icon: "",
    description: "Mathematics covers a variety of topics including algebra, geometry, calculus, and statistics. It develops problem-solving skills and logical reasoning.",
    key_objective: ["Lorem"],
    what_learn: [
      {
        id: "1",
        title: "name",
        description: "desciption"
      },
    ]
  },
];