export interface Secondary {
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

export const courses: Secondary[] = [
  {
    id: "1",
    subject_name: "Secondary Mathematics",
    url: "mathematics",
    image_url: "",
    icon: "/subjects/Math.webp",
    description: "Igniting the Spark of Mathematical Passion in Middle School Students.",
    description2: "At IWS, our STEM programmes foster a love for Math through engaging online activities. Tailored to middle level students, our Cambridge Mathematics Curriculum inspires critical thinking and curiosity.",
    key_objective: [
      "Explore advanced Maths topics with engaging activities at IWS. Recorded lessons offer flexibility, aiding students at their pace, including those with special needs. We provide a strong mathematical foundation and problem-solving skills for STEM success.",
      "",
    ],
    what_learn: [
      {
        id: "1",
        title: "Comprehensive Middle School Mathematics Curriculum",
        description: "Explore advanced Maths topics online: algebra, Geometry, Statistics, Ratio, and Probability. Thorough, well-rounded education for middle level students."
      },
      {
        id: "2",
        title: "Practical Application Through Engaging Activities",
        description: "Boost learning with interactive activities, applying critical thinking to real-world scenarios. Develop problem-solving skills and deep mathematical understanding."
      },
      {
        id: "3",
        title: "Flexible Learning with Recorded Lessons",
        description: "Access recorded Maths lessons for flexible learning and concept revision. Beneficial for special needs students, enabling learning at an individual pace."
      },
      {
        id: "4",
        title: "Empowering Through International Math Competitions",
        description: "Boost confidence with international Maths competitions at IWS. Regular updates aid student preparation for enhanced experience and self-esteem."
      },
    ]
  },
  {
    id: "2",
    subject_name: "Secondary English",
    url: "english",
    image_url: "",
    icon: "/subjects/English.webp",
    description: "Embracing the Cambridge Curriculum for English Excellence.",
    description2: "At our international online school, we follow the Cambridge Middle English curriculum, prioritising self-expression and context-driven communication. We actively develop the core communication capabilities for effective language mastery.",
    key_objective: [
      "Students engage in a comprehensive language programme, targeting grammar, punctuation, vocabulary, creative writing, reading and listening comprehension, and inference, facilitating accurate self-expression. Coursework spans literary classics, world literature, non-fiction, and contemporary sources, with assessments including quizzes, tests, presentations, and group projects.",
      "",
    ],
    what_learn: [
      {
        id: "1",
        title: "Comprehensive Language programme",
        description: "Explore our online school's meticulous language programme featuring grammar, creative writing, and comprehension. Enhance self-expression with expertly crafted materials."
      },
      {
        id: "2",
        title: "Diverse Coursework Selection",
        description: "Diverse literary coursework covers classics, pre-'1914 works, world literature, non-fiction, and contemporary sources. Ensures a well-rounded literary education at our school."
      },
      {
        id: "3",
        title: "Innovative Teaching Techniques",
        description: "Educators use interactive methods for spoken and written language comprehension. Empower young learners in poetry and creative writing with engaging online lessons."
      },
      {
        id: "4",
        title: "Interactive Learning and Review Sessions",
        description: "Virtual lessons include Q&A sessions for recap and follow-up questions. Engage with recorded lessons for independent learning and reinforced understanding."
      },
    ]
  },
  {
    id: "3",
    subject_name: "Secondary Science",
    url: "science",
    image_url: "",
    icon: "/subjects/Physics.webp",
    description: "Explore natural wonders at IWS International Middle School.",
    description2: "IWS offers innovative science education with the Cambridge Science Curriculum. Explore natural and physical world concepts through in-depth discussions, real-life examples, and engaging activities.",
    key_objective: [
      "At our school, students grasp core scientific concepts, nurturing curiosity and critical thinking. Engage in online experiments and foster independent learning in a flexible environment. Our goal: equip students for academic success and future contributions to the scientific community.",
      "",
    ],
    what_learn: [
      {
        id: "1",
        title: "Engaging Online Learning",
        description: "Our educators use captivating digital resources for fundamental concept study. Explore chemical matter, energy types, the human body, and more, fostering scientific thinking."
      },
      {
        id: "2",
        title: "Hands-On Science ",
        description: "Gain practical experience with online experiments and scientific models. Build a solid academic foundation for progression into IGCSE courses."
      },
      {
        id: "3",
        title: "Flexible Learning Environment",
        description: "IW School offers flexible learning: ask questions, revisit lessons, and learn at your own pace. Promotes independent learning and supports special needs students."
      },
      {
        id: "4",
        title: "Empowering Future Innovators",
        description: "Inspire students with real-world STEM projects, science competitions, and environmental lessons. Enhance learning through engaging hands-on experiences."
      },
    ]
  },
  {
    id: "4",
    subject_name: "Secondary Computing",
    url: "computing",
    image_url: "",
    icon: "/subjects/Computer.webp",
    description: "Real-World Application: Discover Computing at Our Online UK School.",
    description2: "Gain core scientific understanding, fostering curiosity and critical thinking. Engage in online experiments and independent learning for academic success. Prepare for future scientific contributions in our flexible educational environment.",
    key_objective: [
      "Our programme fosters STEM foundations, curiosity, and creativity. Expert teachers refine verbal and visual instruction and sharpen logical problem-solving. We instil the significance of computers and data, encouraging future computer scientists. Ultimately, we aim to equip students for success in the digital, data-driven world.",
      "",
    ],
    what_learn: [
      {
        id: "1",
        title: "Comprehensive STEM Education",
        description: "Explore creative Computing at Middle level. Covering Computational Thinking, Programming, Data Management, and Networks for STEM understanding."
      },
      {
        id: "2",
        title: "Expert Guidance",
        description: "Expert educators guide secondary learners in computing. Develop precision and logical thinking for problem-solving with verbal and visual instruction sequences."
      },
      {
        id: "3",
        title: "Real-World Relevance",
        description: "Emphasising computer's vital role, inspire future scientists with hands-on logical thinking and programming skills for diverse industries."
      },
      {
        id: "4",
        title: "Qualified Educators",
        description: "IWS experts excel in programming, data management, and computational thinking. Master online education for global computing industry impact."
      },
    ]
  },
  {
    id: "5",
    subject_name: "Secondary Global Perspectives",
    url: "global-perspectives",
    image_url: "",
    icon: "/subjects/Global.webp",
    description: "Inclusive Inquiry: Empowering 11-14 Year-Olds at Our Online UK School.",
    description2: "Our online course fosters self-reflection, critical analysis, research, collaboration, and communication. We warmly welcome our middle level students, including those with special needs, encouraging them to explore diverse perspectives.",
    key_objective: [
      "Our programme enhances connections between English, Science, Maths, and ICT Starters, applying knowledge in real-world contexts. Engaging 'challenges' delve into global topics, fostering diverse perspectives. We promote extra-curriculars for personal growth. Timetabled and recorded lessons offer flexible learning. Our aim is to prepare students for I/GCSE success in today's globalised world.",
      "",
    ],
    what_learn: [
      {
        id: "1",
        title: "Integrated Middle Curriculum",
        description: "Integrate English, Science, Math, and ICT for cross-curricular skills at IWS. Prepares students for real-world application and Upper Secondary transition."
      },
      {
        id: "2",
        title: "Critical Thinking and Global Awareness",
        description: "Catalyst for breaking conventional thinking. Explore global issues, gain profound understanding with our online course."
      },
      {
        id: "3",
        title: "Holistic Development",
        description: "Boost academic growth with extracurricular activities. Enhance self-esteem and interpersonal skills for well-rounded, global individuals."
      },
      {
        id: "4",
        title: "Flexible Learning Environment",
        description: "Timetabled and recorded lessons offer flexible learning. Empower students with pace-adjustable, comprehensive understanding of coursework."
      },
    ]
  },
  {
    id: "6",
    subject_name: "Secondary French as 2nd Language",
    url: "french-as-2nd-language",
    image_url: "",
    icon: "/subjects/Sociology.webp",
    description: "Explore, Learn, and Communicate: Middle French Homeschooling Course.",
    description2: "Our Middle French course provides an excellent foundation for future I/GCSE French studies. Beyond language proficiency, this curriculum fosters cultural understanding and opens young minds to new perspectives.",
    key_objective: [
      "This course cultivates proficiency in expressing personal activities and exploring culinary culture in French. Students also build proficiency in discussing relationships, describing nature, school, hobbies, travel, home life, Paris, and global perspectives. Beyond language mastery, students gain a profound appreciation for French culture and society. They will emerge well-equipped for confident and effective communication in French.",
      "",
    ],
    what_learn: [
      {
        id: "1",
        title: "Personal Activities and Culinary Adventures",
        description: "Students delve into topics like personal interests and food, gaining practical linguistic skills in reading, writing, and speaking."
      },
      {
        id: "2",
        title: "Interpersonal Connections and Nature's Wonders",
        description: "This section explores relationships and the natural world, enhancing vocabulary and linguistic competence in various contexts."
      },
      {
        id: "3",
        title: "School Life, Hobbies, and Travel",
        description: "Students learn to express themselves regarding school, leisure activities, and travel plans, honing their linguistic abilities in diverse situations."
      },
      {
        id: "4",
        title: "Exploring Home, Paris, and the Global Community",
        description: "This segment covers topics ranging from one's living environment to the vibrant city of Paris and the broader world, providing a comprehensive linguistic experience."
      },
    ]
  },
  {
    id: "7",
    subject_name: "Secondary Spanish as 2nd Language",
    url: "spanish-as-2nd-language",
    image_url: "",
    icon: "/subjects/English.webp",
    description: "Unlock Opportunities with Middle Spanish Homeschooling Course.",
    description2: "Our Middle Spanish course is a stepping stone towards I/GCSE Spanish studies. This course not only acquaints your child with Spanish-speaking countries, but also delves into their cultures and societies. Learning Spanish broadens their perspectives, opening doors for travel and future international endeavors.",
    key_objective: [
      "This course covers self-introductions, greetings, personal activities, food, sports, celebrities, education, hobbies, travel, and urban/rural topics in Spanish. It fosters language skills and cultural understanding, empowering students to communicate confidently in Spanish at home and abroad.",
      "",
    ],
    what_learn: [
      {
        id: "1",
        title: "Personal Introduction, Greetings, Pets, and Activities",
        description: "This module focuses on self-expression, polite interactions, and personal pastimes, enhancing proficiency in reading, writing, and speaking."
      },
      {
        id: "2",
        title: "Culinary Delights, Health, and Spanish-Speaking Cuisine",
        description: "Students delve into topics related to food, nutrition, and culinary traditions in the Spanish-speaking world, expanding vocabulary and linguistic competence."
      },
      {
        id: "3",
        title: "Sports, Entertainment, and Cultural Icons",
        description: "This section explores sports, entertainment figures, and cultural luminaries, enhancing vocabulary and linguistic competence in various contexts."
      },
      {
        id: "4",
        title: "Education, Pastimes, Travel, and Living Environments",
        description: "Students learn to express themselves regarding school, leisure activities, travel plans, and living environments, honing their linguistic abilities in diverse situations."
      },
    ]
  },
  {
    id: "8",
    subject_name: "Secondary German as 2nd Language",
    url: "german-as-2nd-language",
    image_url: "",
    icon: "/subjects/English.webp",
    description: "Explore, Learn, and Connect: Middle German Homeschooling Course.",
    description2: "Studying our middle German not only prepares your child for I/GCSE German studies but also provides a gateway to understanding the German people and their rich culture. Learning German opens your child’s mind to fresh perspectives and novel ways of viewing the world.",
    key_objective: [
      "This course hones the ability to express personal experiences and describe family ties in German. It also achieves proficiency in discussing health, dining, and well-being. Furthermore, it builds skill in discussing relationships, as well as describing nature. Beyond language mastery, students develop a deep appreciation for German culture and society, emerging as confident and culturally-aware communicators in German.",
      "",
    ],
    what_learn: [
      {
        id: "1",
        title: "Personal Identity, Family, and Activities",
        description: "This module focuses on self-expression, family dynamics, and personal pastimes, enhancing proficiency in reading, writing, and speaking."
      },
      {
        id: "2",
        title: "Healthy Living, Dining Out, and Wellness",
        description: "Students delve into topics related to health, nutrition, and managing illness or accidents, expanding vocabulary and linguistic competence."
      },
      {
        id: "3",
        title: "Interpersonal Connections and Nature's Wonders",
        description: "This section explores relationships and the natural world, enhancing vocabulary and linguistic competence in various contexts."
      },
      {
        id: "4",
        title: "School Life, Hobbies, Travel, and Environment",
        description: "Students learn to express themselves regarding school, leisure activities, travel plans, and environmental concerns, honing their linguistic abilities in diverse situations."
      },
    ]
  },

];