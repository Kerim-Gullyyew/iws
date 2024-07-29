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
    subject_name: "Primary Mathematics",
    url: "mathematics",
    image_url: "",
    icon: "/subjects/Math.webp",
    description: "Online programme transforms primary students into proficient mathematicians.",
    description2: "Boost analytical thinking with our foundational Primary Mathematics curriculum. Foster keen interest and essential concepts for young minds. Explore our engaging approach to enhance your child's Maths skills.",
    key_objective: [
      "Explore our Cambridge Primary Maths Curriculum with comprehensive guides, assessments, and 24/7 access to recorded lessons for in-depth understanding and special needs support. Engage in international Maths competitions, nurturing skills and boosting self-esteem, encouraging continuous improvement.",
      "",
    ],
    what_learn: [
      {
        id: "1",
        title: "In-Depth Understanding and Functional Skills",
        description: "The Cambridge Primary Mathematics curriculum equips students with a profound understanding of Mathematics, enabling them to develop functional skills."
      },
      {
        id: "2",
        title: "Proficiency in Arithmetic Operations",
        description: "Mastery of complex arithmetic: place value, integers, and decimals. Enhance fluency in addition, subtraction, multiplication, and division for advanced computational skills.        "
      },
      {
        id: "3",
        title: "Critical Thinking and Problem-Solving",
        description: "Expert teachers nurture critical thinking and problem-solving. Curriculum fosters analytical skills, connecting concepts for holistic learning."
      },
      {
        id: "4",
        title: "Preparation for Secondary School",
        description: "Advance into algebra and geometry, ensuring seamless secondary school transition. Solid foundation for higher-level Maths, readying students for academic challenges ahead."
      },
    ]
  },
  {
    id: "2",
    subject_name: "Primary English",
    url: "english",
    image_url: "",
    icon: "/subjects/English.webp",
    description: "Enhancing the Literacy and Communication Abilities of Children.",
    description2: "Elevate language skills with our tailored English Curriculum, empowering confident communicators and skilled writers. Expert British instructors support first and second language learners, ensuring proficiency and inclusivity.",
    key_objective: [
      "At IWS Online School, we nurture a lifelong love for reading, writing, and speaking. Our integrated approach, diverse activities, and engaging platforms like debate clubs empower students, fostering exceptional skills and confidence. With reading and writing competitions and extracurricular activities, we ignite a deep passion for English language learning.",
      "",
    ],
    what_learn: [
      {
        id: "1",
        title: "Language Mastery and Communication Skills",
        description: "Master English skills with us! Develop clear communication through proficient reading, writing, listening, and speaking abilities."
      },
      {
        id: "2",
        title: "Vocabulary Enrichment and Grammar Proficiency",
        description: "Unleash creativity through writing! Engage with inspiring stories, craft narratives, and explore innovative ideas for expressive, imaginative writing."
      },
      {
        id: "3",
        title: "Cultivation of Creativity and Imagination",
        description: "Expert teachers nurture critical thinking and problem-solving. Curriculum fosters analytical skills, connecting concepts for holistic learning."
      },
      {
        id: "4",
        title: "Active Participation and Critical Thinking",
        description: "Encourage active learning with role-playing, debates, and discussions. Develop critical thinking and deep understanding through engaging, interactive activities."
      },
    ]
  },
  {
    id: "3",
    subject_name: "Primary Science",
    url: "science",
    image_url: "",
    icon: "/subjects/Physics.webp",
    description: "A creative approach for high school students to explore their natural surroundings.",
    description2: "Embark on an explorative learning journey at IWS Online School, exploring the world and beyond. Our international school uses Cambridge Science curriculum, sparking curiosity through detailed discussions and engaging activities for middle education students.",
    key_objective: [
      "IWS Online School offers flexible learning, encouraging questions and independent study. Tailored for all, it supports special needs and promotes real-world application via STEM projects and international science competitions, fostering problem-solving and sustainability habits in young learners.",
      "",
    ],
    what_learn: [
      {
        id: "1",
        title: "Comprehensive Understanding of Scientific Fundamentals",
        description: "Explore chemical matter, energy, human anatomy, and more at IWS Online School. Grasp core scientific concepts, building a strong foundation for advanced studies.        "
      },
      {
        id: "2",
        title: "Interactive Digital Experiments and Enquiry Skills",
        description: "Active engagement in online experiments hones structured enquiry skills at IWS Online School. Hands-on experiences with models enhance understanding of scientific principles."
      },
      {
        id: "3",
        title: "Critical Thinking and Scientific Methodology",
        description: "IWS nurtures scientific thinking, honing critical analysis and evaluation skills. Students grasp methodologies behind experiments, enhancing their scientific understanding."
      },
      {
        id: "4",
        title: "Preparation for I/GCSE Courses",
        description: "Essential stepping stone for future education at IWS. Prepares students for I/GCSE, empowering them with knowledge and skills for advanced scientific studies."
      },
    ]
  },
  {
    id: "4",
    subject_name: "Primary Computing",
    url: "computing",
    image_url: "",
    icon: "/subjects/Computer.webp",
    description: "Empowering students with in-depth computer knowledge.",
    description2: "Cambridge Primary Computing Curriculum sharpens coding skills and explores computer components. Master visual programming, empowering students for advanced education.",
    key_objective: [
      "Explore computer decision-making and outputs through hands-on activities at our school. Engaging lessons and teacher feedback enhance learning, reinforced by recorded sessions. Extracurricular activities and international contests foster healthy competition, deepening students' understanding and interest in the subject.",
      "",
    ],
    what_learn: [
      {
        id: "1",
        title: "Computational Problem-Solving",
        description: "Students master the art of creating solutions using algorithms and logic, honing their computational thinking skills to tackle diverse problems effectively.        "
      },
      {
        id: "2",
        title: "Programming Constructs and Computer Scientists' Impact",
        description: "Master programming basics and appreciate tech's impact on society. Understand the role of computer scientists in shaping our digital world."
      },
      {
        id: "3",
        title: "Data Management and Analysis",
        description: "Explore data storage and analysis, understanding computers' vast information processing. Enhance skills in effective data management."
      },
      {
        id: "4",
        title: "Network Dynamics and Communication Protocols",
        description: "Dive into networks, understanding computer communication and connections. Gain insights into hardware and data transmission protocols for modern communication systems."
      },
    ]
  },
  {
    id: "5",
    subject_name: "Primary Global Perspectives",
    url: "global-perspectives",
    image_url: "",
    icon: "/subjects/Global.webp",
    description: "Promoting a sense of unity and equality among students.",
    description2: "Prepare for Cambridge I/GCSE with our skill-based programme, integrating personal, local, and international perspectives. Enhance understanding of core primary subjects, ensuring a smooth transition for students.",
    key_objective: [
      "At IWS Online School, teachers nurture observation, analysis, and reflection skills, fostering diverse perspectives and understanding. Structured curriculum offers consistency, timetabled and recorded lessons ensure convenience. Engaging activities, course materials, and clubs promote global perspective learning, enhancing social skills and academic performance. Encourages students to explore interests for future studies.",
      "",
    ],
    what_learn: [
      {
        id: "1",
        title: "Interdisciplinary Skill Development",
        description: "The curriculum adopts an interdisciplinary approach, nurturing essential educational and practical skills vital for students' growth and development."
      },
      {
        id: "2",
        title: "Critical Thinking and Research Skills",
        description: "Explore global topics, encouraging critical thinking and research skills. Develop effective communication by evaluating diverse perspectives and arguments."
      },
      {
        id: "3",
        title: "Empowering Student-Led Learning",
        description: "Empower students to address global issues, connecting learning to real-world events. Enhance understanding and engagement across subjects."
      },
      {
        id: "4",
        title: "Seamless Integration with Core Subjects",
        description: "Apply Global Perspective skills to core subjects, enriching learning in Science, Maths, and languages. Foster a well-rounded educational foundation through integration."
      },
    ]
  },
  {
    id: "6",
    subject_name: "Primary French as 2nd Language",
    url: "french-as-2nd-language",
    image_url: "",
    icon: "/subjects/Sociology.webp",
    description: "Embark on a French Adventure: Primary Level Homeschooling Course.",
    description2: "Our Primary French is an engaging, interactive programme designed not only to teach a new language but also to immerse your child in the rich tapestry of French culture. Whether starting from Level 1 or beyond, this course cultivates confidence and proficiency in French language skills.",
    key_objective: [
      "This course empowers students to use learned vocabulary for everyday communication. They also master essential grammar rules. Cultural appreciation and language skills are enriched through interactive activities. Beyond language acquisition, students gain deeper cultural understanding and valuable communication abilities. This programme offers a dynamic entry into the world of French language and culture.",
      "",
    ],
    what_learn: [
      {
        id: "1",
        title: "French Language Fundamentals",
        description: "This module introduces essential French vocabulary and phrases, focusing on listening and speaking skills. Develop a foundational understanding of French language elements."
      },
      {
        id: "2",
        title: "Exploring Everyday Life in French",
        description: "Students learn to describe various aspects of daily life, from family and colours to days of the week and weather, using appropriate vocabulary and grammar."
      },
      {
        id: "3",
        title: "Grammar and Language Structure",
        description: "This section delves into elements like verbs, prepositions, and articles, providing a solid grasp of French language mechanics."
      },
      {
        id: "4",
        title: "Cultural Immersion Through Language",
        description: "The course incorporates French songs, enhancing listening skills and offering cultural insights. Additionally, online resources, quizzes, and comprehension exercises deepen language proficiency."
      },
    ]
  },
  {
    id: "7",
    subject_name: "Primary Spanish as 2nd Language",
    url: "spanish-as-2nd-language",
    image_url: "",
    icon: "/subjects/English.webp",
    description: "A Multifaceted Spanish Language Adventure for Young Learners (Ages 7-11).",
    description2: "Our Primary Spanish as a Second Language course provides an interactive and engaging learning experience, establishing a solid foundation in Spanish language skills. Through a blend of immersive activities and structured lessons, students embark on an enriching linguistic journey.",
    key_objective: [
      "This programme empowers young learners to communicate confidently in daily life. It ensures mastery of vital grammar for precise expression, fosters cultural appreciation, and enables practical language use. Proficiency in both listening comprehension and spoken communication is emphasised. Beyond language acquisition, students develop cultural awareness and vital communication skills. This course offers an engaging introduction to the rich world of Spanish language and culture.",
      "",
    ],
    what_learn: [
      {
        id: "1",
        title: "Foundational Vocabulary and Expressions",
        description: "This module introduces essential Spanish vocabulary and everyday expressions, enabling students to initiate conversations and convey their thoughts effectively."
      },
      {
        id: "2",
        title: "Grammar Fundamentals and Sentence Structure",
        description: "Students dive into fundamental Spanish grammar rules and sentence construction, establishing a framework for clear and accurate communication."
      },
      {
        id: "3",
        title: "Cultural Exploration and Language Integration",
        description: "The course integrates cultural insights and interactive activities, immersing students in Spanish traditions and customs. This enables them to use the language in real-world contexts."
      },
      {
        id: "4",
        title: "Listening and Speaking Proficiency",
        description: "Special emphasis is placed on developing listening and speaking skills, allowing students to engage in conversations, understand spoken Spanish, and express themselves fluently."
      },
    ]
  },
  {
    id: "8",
    subject_name: "Primary German as 2nd Language",
    url: "german-as-2nd-language",
    image_url: "",
    icon: "/subjects/English.webp",
    description: "Engaging Primary German programme for Young Learners (Ages 7-11).",
    description2: "Our Primary German as a Second Language course offers an engaging and interactive learning experience, fostering a strong foundation in German language skills. Through a blend of fun activities and structured lessons, students embark on an enriching linguistic journey.",
    key_objective: [
      "This programme equips young learners to communicate effectively in various situations, ensuring accurate expression through mastered grammar concepts. It fosters cultural appreciation and context-based language use. Proficiency in both listening comprehension and spoken communication is emphasised. Beyond language acquisition, students develop cultural awareness and vital communication skills. This course offers a lively introduction to the rich world of German language and culture.",
      "",
    ],
    what_learn: [
      {
        id: "1",
        title: "Vibrant Vocabulary and Basic Phrases",
        description: "This module introduces essential German vocabulary and everyday phrases, enabling students to initiate conversations and express themselves."
      },
      {
        id: "2",
        title: "Grammar Essentials and Language Structure",
        description: "Students dive into fundamental German grammar rules and language structure, laying the groundwork for coherent communication."
      },
      {
        id: "3",
        title: "Cultural Exploration and Language Integration",
        description: "The course integrates cultural insights and interactive activities, enhancing language learning by immersing students in German traditions and customs."
      },
      {
        id: "4",
        title: "Listening and Speaking Proficiency",
        description: "Special emphasis is placed on honing listening and speaking skills, allowing students to engage in conversations, understand spoken German, and express themselves fluently."
      },
    ]
  },

];