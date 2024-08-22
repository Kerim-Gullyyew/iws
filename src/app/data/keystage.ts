export interface KeyStageProps {
  name: string;
  label: string;
  value: string;
  price: number;
  url: string;
  description: string;
  includedSubjects: SubjectModel[];
  additionalSubjects: SubjectModel[];
}
interface SubjectModel {
  id: string;
  subject_name: string;
  subject_name2: string;
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

export const keyStages: KeyStageProps[] = [
  {
    name: "Primary School",
    price: 5000,
    label: "Primary School",
    value: "Primary School",
    url: "cambridge-primary",
    description: "IWS Online School offers the Cambridge Primary International Curriculum for primary students. Our UK-based online school is proudly accredited by Cambridge Assessment International Education.",
    includedSubjects: [
      {
        id: "1",
        subject_name: "Primary Mathematics",
        subject_name2: "Mathematics",
        url: "cambridge-primary/mathematics",
        image_url: "",
        icon: "/subjects/Math@2x.png",
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
        subject_name2: "English",
        url: "cambridge-primary/english",
        image_url: "",
        icon: "/subjects/English@2x.png",
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
        subject_name2: "Science",
        url: "cambridge-primary/science",
        image_url: "",
        icon: "/subjects/Physics@2x.png",
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
        subject_name2: "Computing",
        url: "cambridge-primary/computing",
        image_url: "",
        icon: "/subjects/Computer@2x.png",
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
        subject_name2: "Global Perspectives",
        url: "cambridge-primary/global-perspectives",
        image_url: "",
        icon: "/subjects/Global@2x.png",
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
    ],
    additionalSubjects: [

      {
        id: "6",
        subject_name: "Primary French as 2nd Language",
        subject_name2: "French as 2nd Language",
        url: "cambridge-primary/french-as-2nd-language",
        image_url: "",
        icon: "/subjects/French@2x.png",
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
        subject_name2: "Spanish as 2nd Language",
        url: "cambridge-primary/spanish-as-2nd-language",
        image_url: "",
        icon: "/subjects/Spanish@2x.png",
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
        subject_name2: "German as 2nd Language",
        url: "cambridge-primary/german-as-2nd-language",
        image_url: "",
        icon: "/subjects/German@2x.png",
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
    ]
  },

  {
    name: "Secondary School",
    price: 6000,
    label: "Secondary School",
    value: "Secondary School",
    url: "cambridge-secondary",
    description: "At IWS Online School, Middle Education starts at age 11, leading to the Cambridge I/GCSE exams over five years—three years of Middle Education followed by two years of I/GCSE. Graduates are ready for A-Level studies.",
    includedSubjects: [
      {
        id: "1",
        subject_name: "Secondary Mathematics",
        subject_name2: "Mathematics",
        url: "cambridge-secondary/mathematics",
        image_url: "",
        icon: "/subjects/Math@2x.png",
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
        subject_name2: "English",
        url: "cambridge-secondary/english",
        image_url: "",
        icon: "/subjects/English@2x.png",
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
        subject_name2: "Science",
        url: "cambridge-secondary/science",
        image_url: "",
        icon: "/subjects/Physics@2x.png",
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
        subject_name2: "Computing",
        url: "cambridge-secondary/computing",
        image_url: "",
        icon: "/subjects/Computer@2x.png",
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
        subject_name2: "Global Perspectives",
        url: "cambridge-secondary/global-perspectives",
        image_url: "",
        icon: "/subjects/Global@2x.png",
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
    ],
    additionalSubjects: [
      {
        id: "6",
        subject_name: "Secondary French as 2nd Language",
        subject_name2: "French as 2nd Language",
        url: "cambridge-secondary/french-as-2nd-language",
        image_url: "",
        icon: "/subjects/French@2x.png",
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
        subject_name2: "Spanish as 2nd Language",
        url: "cambridge-secondary/spanish-as-2nd-language",
        image_url: "",
        icon: "/subjects/Spanish@2x.png",
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
        subject_name2: "German as 2nd Language",
        url: "cambridge-secondary/german-as-2nd-language",
        image_url: "",
        icon: "/subjects/German@2x.png",
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
    ]
  },

  {
    name: "I/GCSE",
    price: 7200,
    label: "I/GCSE",
    value: "I/GCSE",
    url: "cambridge-igcse",
    description: "Enrol in our two-year program for globally recognised Cambridge certifications, accepted by top universities and employers worldwide, enhancing your academic and career prospects globally.",
    includedSubjects: [
      {
        id: "1",
        subject_name: "I/GCSE Biology",
        subject_name2: "Biology",
        url: "cambridge-igcse/biology",
        image_url: "",
        icon: "/subjects/Biology@2x.png",
        description: "I/GCSE Biology students apply fundamental science concepts in the real world.",
        description2: "At IWS Online School, we use the Cambridge I/GCSE Biology (0610) syllabi to craft a structured curriculum. Students learn the importance of scientific theories and their relevance to human anatomy and the environment.",
        key_objective: [
          "IWS Online School updates parents of students in years 11-13 about board exam announcements. Teacher guides I/GCSE exam candidates in subject selection and assists in finding nearby exam centres. We provide fee structure advice and support applications for students with special needs, offering accommodations like extended time and laptop usage during exams.",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Mastering Scientific Concepts",
            description: "Students delve into basic scientific principles and terminologies, applying this knowledge to problem-solving through data collection and analysis."
          },
          {
            id: "2",
            title: "Practical Laboratory Skills",
            description: "Learners develop hands-on expertise by safely using laboratory equipment, enhancing their practical skills crucial for scientific experiments."
          },
          {
            id: "3",
            title: "Analytical Thinking and Applied Science",
            description: "IWS students master scientific data analysis, fostering critical thinking and understanding applied science benefits for human well-being and ecosystems."
          },
          {
            id: "4",
            title: "Comprehensive Understanding of Biology",
            description: "IWS course offers comprehensive bio-science knowledge, featuring individual attention, revision, and exam prep, laying a strong foundation for bio-science careers."
          },
        ]
      },
      {
        id: "2",
        subject_name: "I/GCSE Business Studies",
        subject_name2: "Business Studies",
        url: "cambridge-igcse/business-studies",
        image_url: "",
        icon: "/subjects/Business@2x.png",
        description: "I/GCSE course: Emphasises business creation, continuity, change, and innovation.",
        description2: "IWS Online School offers the Cambridge I/GCSE Business Studies (0450) course online to global students. Our experienced UK-qualified teachers provide engaging materials, preparing students for Cambridge International A-level studies and future careers in business.",
        key_objective: [
          "At IWS Online School, stay updated on Cambridge board exams with October notifications. Choose local exam centres and schedules effortlessly. We provide special accommodations like extra time and laptop use for learners with needs. Facilitating seamless exam preparation, our school ensures a supportive environment. Explore accommodations for enhanced exam experiences.",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Real-World Business Skills",
            description: "Acquire practical knowledge for careers in diverse business sectors, including marketing, banking, and insurance."
          },
          {
            id: "2",
            title: "Innovative Problem-Solving",
            description: "Enhance problem-solving with real-life business scenarios. Develop innovative abilities for practical applications."
          },
          {
            id: "3",
            title: "Understanding Economic Systems",
            description: "Explore global economic systems: capitalism, socialism, communism, and more. Gain valuable insights for informed analysis."
          },
          {
            id: "4",
            title: "Personalised Guidance",
            description: "Receive individualised support from teachers through online chat rooms and email, enhancing critical thinking and numeracy skills."
          },
        ]
      },
      {
        id: "3",
        subject_name: "I/GCSE Chemistry",
        subject_name2: "Chemistry",
        url: "cambridge-igcse/chemistry",
        image_url: "",
        icon: "/subjects/Chemistry@2x.png",
        description: "I/GCSE Chemistry: Blend of theory, experiments, and engaging lessons.",
        description2: "As a British online school, we align our curriculum with the Cambridge I/GCSE Chemistry (0620) course outline. Our focus is on providing students with top-notch learning resources and essential tools to enhance their scientific knowledge and skills.",
        key_objective: [
          "IWS informs parents of students in years 11-13 about board exam updates. Teachers assist in subject selection and choosing nearby exam centres. Special arrangements, like extended time and laptops, support students with special needs, ensuring fair exam conditions. Thoroughly evaluated applications guarantee necessary accommodations for all.",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Comprehensive Chemical Knowledge",
            description: "IWS students gain expertise in scientific terminology, chemical equations, and explore the periodic table, fostering a deep understanding of chemistry concepts."
          },
          {
            id: "2",
            title: "Biochemistry and Technological Applications",
            description: "IWS course explores biochemistry and technology in medical and industrial sectors, emphasising safe lab practices and scientific data evaluation."
          },
          {
            id: "3",
            title: "Environmental Chemistry and Problem-Solving",
            description: "IWS students study chemistry's environmental impact, applying it to address challenges from industrial practices, emphasising real-world applications."
          },
          {
            id: "4",
            title: "Enhanced Analytical and Technical Skills",
            description: "IWS curriculum hones analytical, reflective, and technical skills through scheduled classes, revisions, and interactive Q&A sessions, ensuring effective mastery of course material."
          },
        ]
      },
      {
        id: "4",
        subject_name: "I/GCSE Computer Science",
        subject_name2: "Computer Science",
        url: "cambridge-igcse/computer-science",
        image_url: "",
        icon: "/subjects/Computer@2x.png",
        description: "Digital awareness programme enhances I/GCSE students' digital literacy.",
        description2: "Our certified UK teachers utilise the Cambridge International I/GCSE Computer Science syllabus to create dynamic lesson plans, reinforcing middle school concepts and honing computational skills.",
        key_objective: [
          "IWS Online School notifies parents and guardians about the Cambridge board exam application process starting in October for I/GCSE students. Learners select local exam centres and preferred schedules. Access support is available for Sixth Form learners with special needs, including extra time, scribes, readers, enlarged papers, separate areas, supervised breaks, and laptop use during exams.",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Enhancing Computational and Analytical Skills",
            description: "Students will develop fundamental computational thinking and analytical abilities, essential for problem-solving in various technical scenarios."
          },
          {
            id: "2",
            title: "Mastering Computer Use and Problem Solving",
            description: "Learners will learn how to effectively use computers for deduction and problem-solving, empowering them with practical computational skills."
          },
          {
            id: "3",
            title: "Understanding Computer Systems and Cyber-security",
            description: "Students will explore the intricate interconnections within computer systems and gain awareness of cyber-security risks, ensuring secure online activities."
          },
          {
            id: "4",
            title: "Exploring Emerging Technologies",
            description: "This curriculum explores cutting-edge technologies like virtual reality, augmented reality, and artificial intelligence, offering insight to the development and functions."
          },
        ]
      },
      {
        id: "5",
        subject_name: "I/GCSE Economics",
        subject_name2: "Economics",
        url: "cambridge-igcse/economics",
        image_url: "",
        icon: "/subjects/Economics@2x.png",
        description: "Engaging I/GCSE course: Equips students with vital economic concepts for future careers.",
        description2: "Explore Cambridge I/GCSE Business Studies (0455) at IWS Online School. Delve into economic concepts like supply, demand, and opportunity cost. Our expert teachers help students understand global economic dynamics. Enrol for comprehensive learning!",
        key_objective: [
          "In this course, students will gain a practical understanding of economic theories, enhancing critical thinking skills for analysing real-world economic problems. They will learn to interpret data and graphs, apply mathematical tools to solve economic issues, and make informed decisions using economic reasoning.",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Mastering Economic Fundamentals",
            description: "Students will grasp essential economics terminologies, concepts, and principles, empowering them to analyse real-world economic challenges."
          },
          {
            id: "2",
            title: "Understanding Market Dynamics",
            description: "Explore the intricacies of markets, trade, and pricing mechanisms, gaining insights into the forces shaping economic activities."
          },
          {
            id: "3",
            title: "Macroeconomic Insight",
            description: "Delve into key macroeconomic topics, including unemployment, inflation, exchange rates, and interest rates, understanding their impact on national economies."
          },
          {
            id: "4",
            title: "Enhancing Critical Thinking",
            description: "Enhance critical thinking with economic models. Foster analytical skills for addressing complexities. Develop problem-solving abilities."
          },
        ]
      },
    ],
    additionalSubjects: [
      {
        id: "6",
        subject_name: "I/GCSE English",
        subject_name2: "English",
        url: "cambridge-igcse/english",
        image_url: "",
        icon: "/subjects/English@2x.png",
        description: "Exploring space and time through the magic of reading and imagination.",
        description2: "IWS Online School provides comprehensive I/GCSE English Literature. Diverse prose, poetry, and drama. Authorised Cambridge Curriculum for quality virtual lessons, preparing students for advanced studies.",
        key_objective: [
          "IWS Online School informs about the Cambridge board exam application for Years 11-13. Choose a local centre, preferred schedule with guidance. Pay fees for seating confirmation. Special support available for I/GCSE learners with needs: extra time, scribes, readers, enlarged papers, separate areas, supervised breaks, and laptop use.",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Cultivating Literary Appreciation",
            description: "Cultivate appreciation for diverse literary styles and languages. Explore creative expressions with renowned authors and poets globally."
          },
          {
            id: "2",
            title: "Analysing Impactful Literary Devices",
            description: "Learners will explore the use of literary devices and creative language, understanding their effects on emotions and conscience, enhancing critical thinking skills."
          },
          {
            id: "3",
            title: "Comparative Study of Literary Eras",
            description: "Compare classic to contemporary literary styles. Foster creativity and critical assessment in prose, poetry, and drama formats."
          },
          {
            id: "4",
            title: "Deepening Cultural Understanding",
            description: "Explore regional texts for cultural awareness. Foster intellectual growth for humanities fields."
          },
        ]
      },
      {
        id: "7",
        subject_name: "IGCSE English Literature",
        subject_name2: "English Literature",
        url: "cambridge-igcse/english-literature",
        image_url: "",
        icon: "/subjects/Literature@2x.png",
        description: "Elevated IGCSE English Literature Education.",
        description2: "Embark on a transformative educational journey with our IGCSE English Literature courses. Dive deep into literary texts following the Cambridge International English – Literature syllabus.",
        key_objective: [
          "Learners gain an understanding of the evolution of English literature from the Renaissance Age to the twentieth century, engaging in detailed discussions about the unique writing styles of authors, poets, and playwrights and their profound impact on readers. Additionally, students grasp how social and cultural norms shaped literary works in each era.",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Fostering a Passion for Literature",
            description: "Fuel a passion for reading with our English Literature courses. Immerse in texts, analyse meanings, and nurture a lifelong appreciation for literature."
          },
          {
            id: "2",
            title: "Cultivating Transferable Skills",
            description: "Students cultivate essential skills in research, analysis, and critical thinking, fostering a strong foundation for academic and professional pursuits."
          },
          {
            id: "3",
            title: "Delving into Literary Evolution",
            description: "Explore English literature's evolution from the Renaissance to the 20th century, delving into the unique styles and influential works of authors, poets, and playwrights."
          },
          {
            id: "4",
            title: "Unravelling Cultural and Social Contexts",
            description: "Gain insights into how societal and cultural norms influenced literary works, enhancing interpretations and deepening appreciation for historical context in texts."
          },
        ]
      },
      {
        id: "8",
        subject_name: "I/GCSE Geography",
        subject_name2: "Geography",
        url: "cambridge-igcse/geography",
        image_url: "",
        icon: "/subjects/Geography@2x.png",
        description: "Online I/GCSE Geography: Explores connections between individuals and locations.",
        description2: "IWS Online School employs the Cambridge I/GCSE Geography (0460) syllabus to create an enriching course, encouraging students' analytical thinking about societal changes and their geographical impact.",
        key_objective: [
          "Parents of students in years 11-13 receive exam instructions post-Cambridge schedule announcement. Teachers assist in subject selection; regulated exam centres with accommodations like extra time and modified papers are available based on needs. Administrative support provided upon request. Learn more about our student-focused approach!",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Exploring Landscapes and Urban Development",
            description: "Explore environmental cycles, study landscapes, and analyse urban development. Gain insights on local and global scales for informed environmental planning and research."
          },
          {
            id: "2",
            title: "Comparative Geography",
            description: "Identify and compare diverse topographical features globally. Contrast environmental landscapes with precision for valuable insights and research. "
          },
          {
            id: "3",
            title: "Human-Environment Interaction",
            description: "Explore community-environment interactions. Understand human impact on ecosystems. Gain insights with in-depth analysis."
          },
          {
            id: "4",
            title: "Economic and Environmental Dynamics",
            description: "Explore the impact of environmental variables on economic growth. Understand positive and negative influences for informed decisions. Dive deeper for valuable insights."
          },
        ]
      },
      {
        id: "9",
        subject_name: "I/GCSE History",
        subject_name2: "History",
        url: "cambridge-igcse/history",
        image_url: "",
        icon: "/subjects/History@2x.png",
        description: "Our online I/GCSE History courses analyse historical events from a critical perspective.",
        description2: "IWS Online School offers an engaging course based on the Cambridge I/GCSE History (0470) curriculum. Students explore significant global events from the 19th and 20th centuries, discussing their historical impact on the present day.",
        key_objective: [
          "IWS Online School informs parents and guardians about Cambridge board exam applications via email in October for students in Years 11-13. Students select exam centres and preferred schedules, with support provided for special needs, including extra time, scribes, readers, enlarged papers, separate rooms, supervised breaks, and laptop use.",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Effective Historical Analysis",
            description: "Enhance skills to analyse and express perspectives on historical events proficiently with IWS. Develop strong historical analysis abilities."
          },
          {
            id: "2",
            title: "Ideological Influences",
            description: "Explore ideologies shaping modern society and political landscapes at IWS. Gain insights into influential societal and political ideologies."
          },
          {
            id: "3",
            title: "Comparative Political Analysis",
            description: "Explore political decisions by world leaders: from economic policies to climate change initiatives. Understand global impacts and outcomes for informed analysis."
          },
          {
            id: "4",
            title: "Cause and Effect Mastery",
            description: "Unravel cause-and-effect of global events like WWI and WWII. Enhance historical knowledge, explore consequences, and understand crucial contexts for insightful analysis."
          },
        ]
      },
      {
        id: "10",
        subject_name: "I/GCSE Mathematics",
        subject_name2: "Mathematics",
        url: "cambridge-igcse/mathematics",
        image_url: "",
        icon: "/subjects/Math@2x.png",
        description: "Encouraging curiosity and mathematical proficiency as vital life skills.",
        description2: "At IWS Online School, we offer a dynamic online I/GCSE Mathematics course. Students can tackle diverse problems, engage in interactive quizzes, and enhance their calculating skills for logical solutions.",
        key_objective: [
          "IWS Online School supports parents of students in years 11-13 for upcoming Cambridge board exams. Our teachers assist in subject selection and finding nearest exam centres, with flexible regional pricing. Special needs students can apply for accommodations like extended time and scribes, with applications accepted until February, though processing takes up to 18 months.",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Comprehensive Mathematical Concepts",
            description: "Explore vital Maths topics: algebra, trigonometry, probability, and more. Master core techniques for advanced studies."
          },
          {
            id: "2",
            title: "Applied Problem Solving",
            description: "Emphasises applied Maths, integrating problem-solving in real-life scenarios. Prepares students for practical challenges."
          },
          {
            id: "3",
            title: "Transferable Skills for STEM Fields",
            description: "Develop transferable Maths skills for STEM fields. Strong foundation for future academic pursuits."
          },
          {
            id: "4",
            title: "Critical Thinking and Practical Application",
            description: "Gain profound mathematical understanding, think critically, apply knowledge practically, and analyse real-life problems with precision."
          },
        ]
      },
      {
        id: "11",
        subject_name: "I/GCSE Physics",
        subject_name2: "Physics",
        url: "cambridge-igcse/physics",
        image_url: "",
        icon: "/subjects/Physics@2x.png",
        description: "I/GCSE Physics online: Learn natural science fundamentals and universal laws' significance.",
        description2: "Our skilled educators develop detailed lesson plans adhering to Cambridge I/GCSE Physics (0625) standards. Our classes introduce intricate scientific concepts and practical learning, ensuring student engagement.",
        key_objective: [
          "IWS supports parents of students in years 11-13 with board exam preparation, providing essential details and subject selection assistance. We aid in choosing exam centres based on proximity and fees, offering support as needed. Special accommodations include extended exam time, scribes, enlarged print papers, and laptop usage, ensuring a fair exam experience.",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Mastering Scientific Fundamentals",
            description: "IWS students build a solid foundation in physics concepts, covering motion, forces, energy, waves, electricity, magnetism, thermal physics, nuclear reactions, and space physics."
          },
          {
            id: "2",
            title: "Understanding Universal Laws",
            description: "IWS learners explore universal laws governing the natural world, understanding their roles and impact on surroundings. Delve into nature's laws with IWS!"
          },
          {
            id: "3",
            title: "Applied Physics in Science and Technology",
            description: "Students explore the practical applications of physics, understanding how applied physics drives scientific and technological advancements."
          },
          {
            id: "4",
            title: "Enhancing Analytical and Communication Skills",
            description: "IWS course sharpens analytical skills, fostering effective communication and deep understanding of the physical world. Enhance scientific abilities with IWS!"
          },
        ]
      },
      {
        id: "12",
        subject_name: "I/GCSE Sociology",
        subject_name2: "Sociology",
        url: "cambridge-igcse/sociology",
        image_url: "",
        icon: "/subjects/Sociology@2x.png",
        description: "I/GCSE course: Analyse societal dynamics' impact through reflection.",
        description2: "Explore Cambridge I/GCSE Sociology (0495) with expert UK-qualified teachers on our online platform. Engaging materials enhance understanding of individual-community-institution dynamics. Join us for a comprehensive learning experience!",
        key_objective: [
          "IWS Online School provides timely Cambridge board exams updates for I/GCSE students, sent via email in October. Parents and students choose local exam centres with our assistance. Sixth Form learners receive special support, including extra time and laptop use, ensuring fair exam conditions. Explore accommodating exam environment options now!",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Sociological Theories and Concepts",
            description: "Dive into sociological theories and concepts for in-depth analysis of social phenomena and human behaviour. Explore fundamental principles for insightful understanding."
          },
          {
            id: "2",
            title: "Appreciating Cultural and Social Diversity",
            description: "Foster empathy in diverse contexts. Develop appreciation for cultural and social diversity, enhancing understanding. Explore now!"
          },
          {
            id: "3",
            title: "Influence of Social, Economic, and Political Factors",
            description: "Understand how social, economic, and political factors impact communities and individuals, shaping societal structures and norms."
          },
          {
            id: "4",
            title: "Application of Social Knowledge",
            description: "Apply acquired social knowledge practically, promoting critical thinking and empathetic understanding in real-life situations."
          },
        ]
      },
      {
        id: "13",
        subject_name: "I/GCSE Spanish as Second Language",
        subject_name2: "Spanish as Second Language",
        url: "cambridge-igcse/spanish",
        image_url: "",
        icon: "/subjects/Spanish@2x.png",
        description: "Inclusive Spanish course for effective communication skills.",
        description2: "Explore our Cambridge I/GCSE Spanish – Foreign Language (0530) course for comprehensive language learning. Develop critical thinking, grammar, and vocabulary skills. Build a strong foundation with expert teachers. Enrol now for immersive Spanish education!  ",
        key_objective: [
          "At IWS Online School, stay updated on Cambridge exam applications with October notifications for I/GCSE students. Parents assist in selecting local exam centres and schedules. We provide special support, such as extra time and laptop use, for comfortable testing experiences. Explore our supportive exam environment today!",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Language Proficiency",
            description: "Master Spanish vocabulary, grammar, and pronunciation. Immerse in Spanish culture with our comprehensive courses. Start learning today!"
          },
          {
            id: "2",
            title: "Confident Communication",
            description: "Fluent conversations, confident reading, and writing in Spanish. Enhance language skills with our immersive courses."
          },
          {
            id: "3",
            title: "Cultural Understanding",
            description: "Dive into Spanish-speaking cultures' customs and traditions. Explore cultural nuances with our engaging courses."
          },
          {
            id: "4",
            title: "Practical Application",
            description: "Apply language skills in practical situations. Demonstrate real-life proficiency with our interactive courses."
          },
        ]
      },
    ]
  },

  {
    name: "A Level",
    price: 7500,
    label: "A Level",
    value: "A Level",
    url: "cambridge-a-level",
    description: "The A-Levels we offer hold global recognition from esteemed universities and leading employers, significantly enhancing our students’ prospects of gaining admission to their desired institutions and securing positions in top organisations.",
    includedSubjects: [
      {
        id: "1",
        subject_name: "A Level Biology",
        subject_name2: "Biology",
        url: "cambridge-a-level/biology",
        image_url: "",
        icon: "/subjects/Biology@2x.png",
        description: "Comprehensive STEM Biology Lessons for AS and A-Level Students Online.",
        description2: "Explore comprehensive Cambridge International AS and A Level Biology (9700) lessons in our virtual classrooms. Ideal for STEM enthusiasts, bridging I/GCSE foundations to prepare students for biology-related careers in STEM fields.",
        key_objective: [
          "Explore cell complexities, viruses, reproductive cycles, modern genetics, ecosystems, biological molecules, and plant/animal biodiversity in our curriculum. Students analyse genetic variations, assess energy demands, and study real-world genetics applications. Delve deep into biology with our comprehensive programme.",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Interactive Learning Tools",
            description: "IWS sparks biology passion using dynamic curriculum, engaging learners with interactive tools, diagrams, virtual models, and online displays."
          },
          {
            id: "2",
            title: "Practical Assessments in Theory",
            description: "IWS combines practical assessments with theoretical discussions, ensuring students understand actions and underlying reasons comprehensively."
          },
          {
            id: "3",
            title: "Assessment Topics",
            description: "Our teachers assess key topics in biology, from cells to genetics and biodiversity, through formative and summative evaluations, ensuring comprehensive learning."
          },
          {
            id: "4",
            title: "Comprehensive Study Areas",
            description: "Our Sixth Form biology curriculum encompasses plant life, pathogens, and biotechnological applications, providing students a holistic grasp of biology in diverse contexts."
          },
        ]
      },
      {
        id: "2",
        subject_name: "A Level Business",
        subject_name2: "Business",
        url: "cambridge-a-level/business",
        image_url: "",
        icon: "/subjects/Business@2x.png",
        description: "Dynamic Business Studies for Sixth Formers.",
        description2: "Explore the dynamic world of business with our comprehensive course, immersing students in real-world scenarios and contemporary entrepreneurial trends. The Cambridge AS and A Level Business curriculum provides a solid understanding of business operations, fostering confidence for future studies in related disciplines.",
        key_objective: [
          "A solid foundation for further academic pursuits in the field of business studies, preparing students for a successful and impactful career in the business world. Our dedicated online business instructors facilitate a profound understanding of fundamental business concepts, fostering proficiency in areas like management, innovation, customer-centric approaches, strategy development, and value creation.",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Analysing Business Activities and Characteristics",
            description: "Acquire the proficiency to dissect the intricacies and attributes of various business organisations. Understand how different components work together to drive success and growth."
          },
          {
            id: "2",
            title: "Adaptation and Responsiveness in Business",
            description: "Explore how businesses navigate and adjust to the ever-changing business landscape. Gain insights into strategies that allow organisations to stay agile and competitive."
          },
          {
            id: "3",
            title: "Leadership Excellence and Superior Management",
            description: "Study the practices of successful leaders and managers in upholding exceptional product/service quality and delivering outstanding customer service. Learn how effective leadership is crucial for organisational success."
          },
          {
            id: "4",
            title: "Strategic Planning for Business Growth and Sustainability",
            description: "Delve into the realm of strategic planning and decision-making, pivotal for fostering business expansion, ensuring survival, and maintaining sustainability in a dynamic market environment."
          },
        ]
      },
      {
        id: "3",
        subject_name: "A Level Chemistry",
        subject_name2: "Chemistry",
        url: "cambridge-a-level/chemistry",
        image_url: "",
        icon: "/subjects/Chemistry@2x.png",
        description: "Embracing the Significance of Chemistry in Practical Contexts.",
        description2: "IWS provides a comprehensive Sixth Form Chemistry curriculum, following Cambridge International AS and A Level Chemistry (9701) syllabus. UK-qualified educators blend theoretical and practical lessons for holistic learning, aligning with educational objectives.",
        key_objective: [
          "Students learn to interpret, deduce, and apply data in scientific experiments, refining problem-solving skills. Safety and precision in experiments are paramount. This course is foundational for STEM careers, especially in fields like pharmaceuticals, manufacturing, and chemical industries requiring expertise in data analysis and reporting.",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "In-Depth Understanding of Key Concepts",
            description: "Advance from IGCSE foundations to explore topics like atomic structure, chemical bonding, and electrochemistry in our chemistry courses."
          },
          {
            id: "2",
            title: "Practical Application of Scientific Data",
            description: "Students gain hands-on experience in interpreting, deducing, and applying data, bridging theory to practical application."
          },
          {
            id: "3",
            title: "Safe and Effective Experimentation",
            description: "Critical curriculum focuses on safe experiment execution, equipping students with essential skills for successful laboratory work and understanding experiment functionality."
          },
          {
            id: "4",
            title: "Preparation for STEM-Related Professions",
            description: "Ideal for aspiring STEM professionals, our course hones data reporting and analysis skills, benefiting pharmaceutical, manufacturing, and chemical industries."
          },
        ]
      },
    ],
    additionalSubjects: [
      {
        id: "4",
        subject_name: "A Level Computer Science",
        subject_name2: "Computer Science",
        url: "cambridge-a-level/computer-science",
        image_url: "",
        icon: "/subjects/Computer@2x.png",
        description: "Empowering Computational Proficiency for the Digital Age.",
        description2: "IWS offers hands-on learning in Cambridge International AS and A Level Computer Science (9618) syllabus. Equip Sixth Form students with programming, problem-solving, and algorithm design skills for confident digital navigation.",
        key_objective: [
          "Learners delve into crucial concepts encompassing hardware, software, and programming, honing their analytical and programming skills through innovative approaches. Engaging in independent and group projects, students are challenged to devise inventive solutions, equipping them to surmount technical hurdles.",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Foundational Computational Thinking and Data Analysis Skills",
            description: "Nurture computational thinking and data analysis skills in our curriculum, laying a strong foundation for digital problem-solving."
          },
          {
            id: "2",
            title: "Comprehensive Understanding of Core Computer Systems",
            description: "Explore computer systems' functional utility, understanding hardware, software, and programming interrelationships for fundamental knowledge."
          },
          {
            id: "3",
            title: "Proficient Application of Structured programming and Algorithm Design",
            description: "Refine analytical and programming skills with hands-on projects, employing structured programming, software development, and algorithm design for effective problem-solving."
          },
          {
            id: "4",
            title: "Cybersecurity Proficiency and Threat Mitigation",
            description: "Our curriculum addresses cybersecurity concerns, training students to identify potential threats and equipping them with the skills to implement necessary safeguards."
          },
        ]
      },
      {
        id: "5",
        subject_name: "A Level Economics",
        subject_name2: "Economics",
        url: "cambridge-a-level/economics",
        image_url: "",
        icon: "/subjects/Economics@2x.png",
        description: "Empowering Economists of Tomorrow",
        description2: "The IWS Cambridge A Level Economics Curriculum empowers students to tackle complex economic issues with confidence. Anchored in the globally recognised Cambridge International AS and A Level Economics (9708) framework, it provides a profound understanding of economic principles, spanning topics from international trade to government intervention.",
        key_objective: [
          "Our programme delves into a diverse range of topics, including international trade, exchange rates, the price system, government intervention, employment, and inflation. Throughout the course, students master macroeconomic theory and policy, explore market failures, delve into the theory of the firm, and analyse economic growth and development.",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Market Mechanics",
            description: "Comprehend the intricacies of economic markets, gaining insight into the forces of supply and demand that drive economic transactions."
          },
          {
            id: "2",
            title: "Analysing Market Failures and Regulations",
            description: "Cultivate an in-depth understanding of the causes of market failures and the regulatory measures in place to rectify these deficiencies."
          },
          {
            id: "3",
            title: "Rational Decision-Making in Economics",
            description: "Explore the rational decision-making processes of economic agents, delving into the factors that influence their choices."
          },
          {
            id: "4",
            title: "Effective Economic Management",
            description: "Evaluate the strategies and policies employed in the management of a national economy, considering their impacts on key economic indicators."
          },
        ]
      },
      {
        id: "6",
        subject_name: "A Level English Literature",
        subject_name2: "English Literature",
        url: "cambridge-a-level/english-literature",
        image_url: "",
        icon: "/subjects/Literature@2x.png",
        description: "Elevated AS and A-Level English Literature Education.",
        description2: "Embark on a transformative educational journey with our AS and A-Level English Literature courses. Dive deep into literary texts following the Cambridge International AS and A Level English – Literature (9695) syllabus.",
        key_objective: [
          "Learners gain an understanding of the evolution of English literature from the Renaissance Age to the twentieth century, engaging in detailed discussions about the unique writing styles of authors, poets, and playwrights and their profound impact on readers. Additionally, students grasp how social and cultural norms shaped literary works in each era.",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Fostering a Passion for Literature",
            description: "Fuel a passion for reading with our English Literature courses. Immerse in texts, analyse meanings, and nurture a lifelong appreciation for literature."
          },
          {
            id: "2",
            title: "Cultivating Transferable Skills",
            description: "Students cultivate essential skills in research, analysis, and critical thinking, fostering a strong foundation for academic and professional pursuits."
          },
          {
            id: "3",
            title: "Delving into Literary Evolution",
            description: "Explore English literature's evolution from the Renaissance to the 20th century, delving into the unique styles and influential works of authors, poets, and playwrights."
          },
          {
            id: "4",
            title: "Unravelling Cultural and Social Contexts",
            description: "Gain insights into how societal and cultural norms influenced literary works, enhancing interpretations and deepening appreciation for historical context in texts."
          },
        ]
      },
      {
        id: "7",
        subject_name: "A Level English Language",
        subject_name2: "English Language",
        url: "cambridge-a-level/english",
        image_url: "",
        icon: "/subjects/English@2x.png",
        description: "Elevated English Language Online Courses for Emerging Leaders and Orators.",
        description2: "Elevate English proficiency with our AS-level and A-level programmes. Hone essential communication skills for fluent, impactful conversations. Prepare international students for academic and everyday English interactions.",
        key_objective: [
          "Elevate English communication skills with our comprehensive approach, enhancing reading, writing, listening, and speaking proficiency. Recognise language styles in various contexts and gain confidence in articulating ideas through purposeful writing and persuasive arguments. Our online teachers facilitate practical application through writing exercises, group activities, and presentations.",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Understanding Language Dynamics",
            description: "Explore language intricacies with UK-qualified instructors. Analyse fiction and non-fiction texts, understanding distinct writing styles and context-driven message delivery."
          },
          {
            id: "2",
            title: "English Language Proficiency",
            description: "Boost English proficiency with our curriculum, focusing on in-depth reading, critical analysis, and holistic communication skills in reading, writing, listening, and speaking."
          },
          {
            id: "3",
            title: "Practical Application of Knowledge",
            description: "Engage in practical learning with diverse tasks, including writing exercises, group activities, and presentations, ensuring effective application of theoretical concepts."
          },
          {
            id: "4",
            title: "Nurturing Communication Skills",
            description: "Elevate communication skills with our AS and A-level English language courses, preparing future leaders for clear and precise communication in everyday and academic contexts."
          },
        ]
      },
      {
        id: "8",
        subject_name: "A Level Geography",
        subject_name2: "Geography",
        url: "cambridge-a-level/geography",
        image_url: "",
        icon: "/subjects/Geography@2x.png",
        description: "Exploring Human-Physical Geography Dynamics in Depth.",
        description2: "At IWS, we explore the dynamic interplay of human and physical geography, guided by the Cambridge International AS and A Level Geography (9696) syllabus. Our Sixth Form curriculum emphasises how the environment influences socio economic progress. This course equips students with practical, analytical, and research skills for diverse academic and professional opportunities.",
        key_objective: [
          "The Cambridge International AS and A Level Geography syllabus serve as a springboard for advanced studies in areas like urban development, geopolitics, environmental studies, and tourism. Our dedicated educators equip students with practical, analytical, and research-oriented tools, preparing them for exciting academic and professional pursuits.",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Exploring Core Physical Geography Concepts (AS-level)",
            description: "In AS-level classes, students embark on an in-depth exploration of fundamental physical geography concepts, including the atmosphere and weather, weathering, rocks, hydrology, and fluvial geomorphology. This provides a solid foundation for understanding the intricacies of Earth's physical processes."
          },
          {
            id: "2",
            title: "Analysing Dynamics of Human Geography",
            description: "This objective focuses on comprehending the dynamics of human geography, delving into the causes and effects of migration, settlement patterns, and industrialization impacts on different regions. Students gain valuable insights into the intricate relationship between human societies and their environments."
          },
          {
            id: "3",
            title: "Environmental Focus: Different Environments (A-level)",
            description: "A-level courses zero in on specific environments, such as tropical, arid, coastal, or hazardous environments. This specialised approach allows students to gain a nuanced understanding of diverse ecological systems and their unique challenges."
          },
          {
            id: "4",
            title: "Exploring Human-Ecosystem Interactions (A-level)",
            description: "A-level lessons delve into the intricate relationship between humans and ecosystems. This involves studying various topics including global interdependence, economic transitions, and environmental management strategies. Students gain critical insights into sustainable practices and strategies for environmental stewardship."
          },
        ]
      },
      {
        id: "9",
        subject_name: "A Level Global Perspectives & Research",
        subject_name2: "Global Perspectives & Research",
        url: "cambridge-a-level/global-perspectives-research",
        image_url: "",
        icon: "/subjects/Global@2x.png",
        description: "Mastering Critical Thinking and Global Engagement with Cambridge A Level Global Perspectives & Research.",
        description2: "This dynamic course empowers learners to analyse and reflect on global issues, fostering critical thinking, research proficiency, and effective communication through the innovative 'Critical Path' approach. Engage in collaborative team projects, enhancing valuable collaborative skills for the challenges of the twenty-first century.",
        key_objective: [
          "Throughout this course, students will embark on a transformative educational journey. They will acquire the essential skills of critical analysis, research proficiency, and effective communication, preparing them for the complex demands of our rapidly changing global environment. Additionally, the collaborative projects will instil teamwork and problem-solving abilities, ensuring students are well-equipped for success in higher education and the professional world.",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Critical Analysis and Reflection",
            description: "Gain the ability to critically evaluate issues of global significance, broadening your perspective on complex global challenges."
          },
          {
            id: "2",
            title: "Research Proficiency",
            description: "Develop robust research skills essential for in-depth analysis and comprehensive understanding of diverse global topics."
          },
          {
            id: "3",
            title: "Effective Communication",
            description: "Hone your communication abilities, enabling you to articulate arguments and perspectives with clarity and precision."
          },
          {
            id: "4",
            title: "Collaborative Team Projects",
            description: "Enhance collaborative skills through engaging team projects, fostering effective teamwork and shared problem-solving."
          },
        ]
      },
      {
        id: "10",
        subject_name: "A Level History",
        subject_name2: "History",
        url: "cambridge-a-level/history",
        image_url: "",
        icon: "/subjects/History@2x.png",
        description: "Exploring Key Historical Events: AS and A-Level History Online.",
        description2: "Our British online school provides dynamic AS and A-Level History classes, following the Cambridge International AS and A Level History (9489) syllabus. Students explore key global events, with emphasis on American, European, and international politics, gaining a comprehensive understanding of their global impact.",
        key_objective: [
          "Exploring world history through American, European, and international politics offers a comprehensive understanding of global events. Access to diverse resources illuminates unique regional impacts. Enrolment in this course requires Sixth Form students at IWS to have completed IGCSE History or its equivalent from a recognised UK educational board.",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Comparative Analysis of World History Perspectives",
            description: "Students engage in a thorough examination of world history from unique viewpoints, including Modern Europe, American, and International contexts. This allows for a comprehensive understanding of global events and their multifaceted impacts."
          },
          {
            id: "2",
            title: "Application of Historical Concepts in Real-Life Scenarios",
            description: "Learners explore essential historical terms such as cause and effect, similarity and difference, continuity and change, among others, through real-life examples. This practice facilitates a deeper comprehension of how specific events have significantly shaped our society."
          },
          {
            id: "3",
            title: "Critical Evaluation of Historical Interpretations",
            description: "Students learn to discern the significance of different interpretations of historical events. They gain insights into how historians rely on a variety of resources to discern factual information from fictional narratives, honing their critical thinking skills."
          },
          {
            id: "4",
            title: "Development of Reflective Thinking Skills",
            description: "The course fosters a focus on reflective questions, enhancing students' intellectual capacities to draw connections between historical events and their contemporary relevance."
          },
        ]
      },
      {
        id: "11",
        subject_name: "A Level Law",
        subject_name2: "Law",
        url: "cambridge-a-level/law",
        image_url: "",
        icon: "/subjects/Law@2x.png",
        description: "Unlock the World of Law with Cambridge AS and A-Level Online Classes.",
        description2: "Join our dynamic online school and embark on a journey to explore the legal landscape that shaped modern society. Our British online school offers the esteemed Cambridge International A-Level Law programme, providing Sixth Form students with a flexible and comprehensive legal education.",
        key_objective: [
          "During our Cambridge A-Level Law programme, students will undergo a transformative educational experience. They will delve deeply into areas such as criminal law, the English legal system, and contract and tort law, gaining substantial legal knowledge. This will enable them to critically evaluate legal procedures and institutions. Additionally, they will enhance their communication abilities, becoming proficient in expressing legal interpretations, rationale, and analyses with lucidity and accuracy.",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Understanding the Legal System",
            description: "Delve into the intricacies of the English legal system, gaining insight into its structure, processes, and applications."
          },
          {
            id: "2",
            title: "Exploring Criminal Law",
            description: "Unravel the complexities of criminal law, examining key principles and cases that underpin this crucial area of legal practice."
          },
          {
            id: "3",
            title: "Law of Contract and Tort",
            description: "Dive into the foundational elements of contract and tort law, exploring rights, obligations, and liabilities in legal relationships."
          },
          {
            id: "4",
            title: "Analysis and Problem-Solving",
            description: "Develop critical analysis and problem-solving skills, essential for constructing robust legal arguments and solutions."
          },
        ]
      },
      {
        id: "12",
        subject_name: "A Level Mathematics",
        subject_name2: "Mathematics",
        url: "cambridge-a-level/mathematics",
        image_url: "",
        icon: "/subjects/Math@2x.png",
        description: "Elevated AS and A-Level English Literature Education.",
        description2: "Explore advanced Mathematics online courses for AS and A-level students, emphasising essential transferable skills. Aligned with the Cambridge International AS and A Level Mathematics (9709) framework, enhancing Sixth Form subject curriculum.",
        key_objective: [
          "At IWS, learners develop expertise in analysing and critiquing mathematical concepts for real-world applications. Emphasis on efficient selection and application of methods ensures a swift, effective approach. Gain proficiency in scrutinising formulae and techniques, preparing for diverse scenarios and success in exams and real-world challenges.",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Critical Assessment and Application of Methods",
            description: "IWS students master critical mathematical analysis, fostering versatile skills applicable across subjects and future pursuits."
          },
          {
            id: "2",
            title: "Utilising Mathematical Tools for Constructive Arguments",
            description: "Empower learners with essential mathematical tools, enabling them to construct robust arguments using logical deduction, graphs, diagrams, and symbols."
          },
          {
            id: "3",
            title: "Analysing and Applying Mathematical Concepts",
            description: "Enhance students' proficiency in dissecting mathematical formulae and techniques, enabling effective application to diverse real-world situations."
          },
          {
            id: "4",
            title: "Efficient Application of Mathematical Methods",
            description: "IWS students master swift and effective mathematical application, ensuring success in A-level exams and paving the way for excellence in STEM undergraduate degrees."
          },
        ]
      },
      {
        id: "13",
        subject_name: "A Level Further Mathematics",
        subject_name2: "Further Mathematics",
        url: "cambridge-a-level/further-mathematics",
        image_url: "",
        icon: "/subjects/MathFurther@2x.png",
        description: "Enhancing Comprehension in A-level Further Mathematics.",
        description2: "Elevate A-level Further Mathematics comprehension with our online course. Rooted in the Cambridge International AS and A Level Further Mathematics (9231) framework for a comprehensive Sixth Form curriculum.",
        key_objective: [
          "Students are guided in reinforcing their grasp of previously learned concepts from the A-level Mathematics course. They're also taught the art of constructing compelling arguments, employing tools such as diagrams, graphs, and mathematical formulas. Algebra and notation are utilised for precise expression of mathematical reasoning and proof, elevating proficiency in the subject.",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Comprehensive Comprehension and Application",
            description: "This course caters to students well-versed in the entire A-level Mathematics syllabus, targeting high achievers. It aims to deepen their understanding of previously learned concepts."
          },
          {
            id: "2",
            title: "Art of Constructing Persuasive Arguments",
            description: "Students will learn to build and articulate robust arguments, utilising diagrams, graphs, and mathematical formulas as supporting tools."
          },
          {
            id: "3",
            title: "Mastery of Algebraic Reasoning and Proof",
            description: "The curriculum emphasises the use of algebra and notation for precise mathematical reasoning and proof, enabling students to attain a higher level of proficiency in the subject."
          },
          {
            id: "4",
            title: "Preparation for Higher Education",
            description: "The course is tailored to equip students with the mastery required to excel in higher education, setting a strong foundation for advanced studies."
          },
        ]
      },
      {
        id: "14",
        subject_name: "A Level Media Studies",
        subject_name2: "Media Studies",
        url: "cambridge-a-level/media-studies",
        image_url: "",
        icon: "/subjects/Media@2x.png",
        description: "Unleash Your Creative Potential with Cambridge A Level Media Studies.",
        description2: "This course empowers learners to delve into the world of media through hands-on experiences. From planning to execution, students craft their own media creations, gaining a comprehensive understanding of production processes and technologies. They also dissect existing media examples, exploring their impact on society.",
        key_objective: [
          "Throughout the course, students will not only develop practical skills in media production but also gain a critical understanding of the role and impact of media in contemporary society. They will learn to create media content from inception to execution, while also analysing existing media examples. This dual approach equips students with a well-rounded perspective on the media landscape, preparing them for future endeavours in this dynamic field.",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Hands-On Media Production",
            description: "Dive into the creation process, from ideation to execution, as you craft your own media products, gaining practical skills and insights."
          },
          {
            id: "2",
            title: "Critical Analysis of Media Content",
            description: "Explore existing media examples, dissecting their production techniques and understanding their societal impact."
          },
          {
            id: "3",
            title: "Understanding Production Processes and Technologies",
            description: "Gain insights into the technologies and processes that drive media production, enhancing your comprehension of the industry."
          },
          {
            id: "4",
            title: "Effects of Media on Society",
            description: "Analyse the profound effects that media has on our daily lives, from shaping opinions to influencing behaviours."
          },
        ]
      },
      {
        id: "15",
        subject_name: "A Level Physics",
        subject_name2: "Physics",
        url: "cambridge-a-level/physics",
        image_url: "",
        icon: "/subjects/Physics@2x.png",
        description: "Engaging AS and A Level Physics Classes for Sixth Former.",
        description2: "Our online AS and A Level Physics courses provide a strong STEM foundation. This two-year programme adheres to global learning standards and is designed for students who have completed I/GCSE Physics, ensuring a smooth transition into advanced studies.",
        key_objective: [
          "Explore fundamental physics concepts, from kinematics to electromagnetic induction, gaining hands-on expertise in diverse measurement techniques for precise experiments. Our comprehensive curriculum ensures a holistic understanding of technical concepts, fostering a solid grasp of physics interconnections.",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Comprehensive Exploration of Physical Concepts",
            description: "Engage in a profound study of fundamental physical quantities and their intricate connections to the world around you."
          },
          {
            id: "2",
            title: "Diverse Topics Covered",
            description: "Delve into an array of critical subjects including kinematics, waves, laws of gravitation, electromagnetic induction, and more."
          },
          {
            id: "3",
            title: "Hands-on Experience in Measurement Techniques",
            description: "Acquire practical proficiency in employing various measurement techniques, essential for conducting precise and insightful physics experiments."
          },
          {
            id: "4",
            title: "Enhancing Problem-Solving Skills through Analysis",
            description: "Hone your problem-solving prowess through systematic research and data analysis, fostering a comprehensive approach to tackling physics challenges."
          },
        ]
      },
      {
        id: "16",
        subject_name: "A Level Psychology",
        subject_name2: "Psychology",
        url: "cambridge-a-level/psychology",
        image_url: "",
        icon: "/subjects/Psychology@2x.png",
        description: "Exploring Psychological Theories: A Comprehensive A-Level Course.",
        description2: "At IWS, our rigorous A-level Psychology course, based on the Cambridge International AS and A Level Psychology framework (9990), offers profound insights into psychological theories and research methodology. It empowers Sixth Form students to explore the intricacies of human behaviour and the mind.",
        key_objective: [
          "This course delves into the processes of perception and interpretation, gaining insights into how cognitive functions shape our outlook. Moreover, students explore the interplay between internal mental processes and the development of behaviour, fostering an in-depth understanding of behavioural growth across the lifespan. This course also equips students to scrutinise the origins and manifestations of mental disorders, from depression and anxiety to schizophrenia and phobias.",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Social Dynamics and Interactions",
            description: "Gain a profound understanding of the intricacies of social interactions, exploring how individuals engage with one another in various contexts. Delve into the nuances of human behaviour within societal frameworks."
          },
          {
            id: "2",
            title: "Perception and Interpretation",
            description: "Investigate the ways in which we perceive and interpret the world around us. Analyse the cognitive processes that influence our perspectives and shape our responses to external stimuli."
          },
          {
            id: "3",
            title: "Cognition and Behaviour Development",
            description: "Explore the intricate relationship between internal mental processes and the development of behaviour. Understand how cognitive functions contribute to the acquisition of new behaviours and skills."
          },
          {
            id: "4",
            title: "Developmental Psychology and Lifespan Changes",
            description: "Gain insight into the processes of human development and change across the lifespan. Study the factors and influences that contribute to personal growth and transformation."
          },
        ]
      },
      {
        id: "17",
        subject_name: "A Level Sociology",
        subject_name2: "Sociology",
        url: "cambridge-a-level/sociology",
        image_url: "",
        icon: "/subjects/Sociology@2x.png",
        description: "Exploring Social Dynamics: IWS A Level Sociology programme.",
        description2: "The Cambridge International AS and A Level Sociology (9699) curriculum lays a strong foundation in understanding group dynamics and societal institutions like education, media, and religion. Students gain valuable insights into societal forces. The course fosters a passion for global issues, empowering students to think critically and embrace diversity in an evolving world.",
        key_objective: [
          "The course, grounded in the Cambridge International framework, focuses on the forces and institutions that are shaped by collective entities within a society, encompassing vital domains like education, media, and religion. Throughout this academic voyage, students not only cultivate an acute awareness of social structures but also engage deeply with the processes driving contemporary trends.",
          "",
        ],
        what_learn: [
          {
            id: "1",
            title: "Exploring Sociological Theories and Methods",
            description: "Acquire a comprehensive knowledge of the various sociological theories and research methodologies that form the basis of understanding social structures and behaviour."
          },
          {
            id: "2",
            title: "Analysing Forces of Social Change",
            description: "Evaluate the multifaceted influences and dynamics that drive societal transformations, providing insights into the processes that underlie current social trends."
          },
          {
            id: "3",
            title: "Assessing the Human Experience in Society",
            description: "Gain an in-depth understanding of the diverse conditions experienced by members of society, allowing for critical analysis of the impact of social structures on individuals."
          },
          {
            id: "4",
            title: "Examining Group Identity and its Influence",
            description: "Explore how group identity shapes individuals' trajectories and perspectives, illuminating the intricate interplay between personal identity and societal structures."
          },
        ]
      },
    ]
  },

]