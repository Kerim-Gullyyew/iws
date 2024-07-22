export interface ALevel {
  id: string;
  subject_name: string;
  image_url: string;
  description: string;
  url: string;
}

export const courses: ALevel[] = [
  {
    id: "1",
    subject_name: "Mathematics",
    image_url: "/images/mathematics.jpg",
    description: "Mathematics covers a variety of topics including algebra, geometry, calculus, and statistics. It develops problem-solving skills and logical reasoning.",
    url: "mathematics"
  },
  {
    id: "2",
    subject_name: "Physics",
    image_url: "/images/physics.jpg",
    description: "Physics explores the fundamental concepts of matter, energy, and the forces of nature. It includes topics like mechanics, electricity, magnetism, and thermodynamics.",
    url: "physics"
  },
  {
    id: "3",
    subject_name: "Chemistry",
    image_url: "/images/chemistry.jpg",
    description: "Chemistry involves the study of substances, their properties, reactions, and the use of such reactions to form new substances. Topics include organic, inorganic, and physical chemistry.",
    url: "chemistry"
  },
  {
    id: "4",
    subject_name: "Biology",
    image_url: "/images/biology.jpg",
    description: "Biology focuses on the study of living organisms, their structure, function, growth, evolution, and ecology. It covers cell biology, genetics, physiology, and biodiversity.",
    url: "biology"
  },
  {
    id: "5",
    subject_name: "English Language",
    image_url: "/images/english_language.jpg",
    description: "English Language aims to develop reading, writing, speaking, and listening skills. It includes studying a variety of texts and improving language proficiency.",
    url: "english-language"
  },
  {
    id: "6",
    subject_name: "History",
    image_url: "/images/history.jpg",
    description: "History explores significant events, people, and societies from the past. It develops understanding of historical concepts and skills in research and analysis.",
    url: "history"
  },
  {
    id: "7",
    subject_name: "Geography",
    image_url: "/images/geography.jpg",
    description: "Geography examines the physical features of the Earth and human activity. Topics include climate, natural resources, population, and urban development.",
    url: "geography"
  },
  {
    id: "8",
    subject_name: "Computer Science",
    image_url: "/images/computer_science.jpg",
    description: "Computer Science covers the principles and practices of computing and information technology. Topics include programming, data structures, algorithms, and networks.",
    url: "computer-science"
  },
  {
    id: "9",
    subject_name: "Business Studies",
    image_url: "/images/business_studies.jpg",
    description: "Business Studies provides an understanding of business concepts, operations, and strategies. It covers topics like marketing, finance, human resources, and entrepreneurship.",
    url: "business-studies"
  },
  {
    id: "10",
    subject_name: "Economics",
    image_url: "/images/economics.jpg",
    description: "Economics studies how individuals, businesses, and governments make decisions about resource allocation. Topics include microeconomics, macroeconomics, and international trade.",
    url: "economics"
  }
];
