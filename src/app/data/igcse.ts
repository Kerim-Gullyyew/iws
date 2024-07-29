export interface IGCSE {
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

export const courses: IGCSE[] = [
  {
    id: "1",
    subject_name: "I/GCSE Biology",
    url: "biology",
    image_url: "",
    icon: "/subjects/Math.webp",
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
    url: "business-studies",
    image_url: "",
    icon: "/subjects/English.webp",
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
    url: "chemistry",
    image_url: "",
    icon: "/subjects/Physics.webp",
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
    url: "computer-science",
    image_url: "",
    icon: "/subjects/Computer.webp",
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
    url: "economics",
    image_url: "",
    icon: "/subjects/Global.webp",
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
  {
    id: "6",
    subject_name: "I/GCSE English",
    url: "english",
    image_url: "",
    icon: "/subjects/Sociology.webp",
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
    url: "english-literature",
    image_url: "",
    icon: "/subjects/English.webp",
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
    url: "geography",
    image_url: "",
    icon: "/subjects/English.webp",
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
    url: "history",
    image_url: "",
    icon: "/subjects/English.webp",
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
    url: "mathematics",
    image_url: "",
    icon: "/subjects/English.webp",
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
    url: "physics",
    image_url: "",
    icon: "/subjects/English.webp",
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
    url: "sociology",
    image_url: "",
    icon: "/subjects/English.webp",
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
    url: "spanish",
    image_url: "",
    icon: "/subjects/English.webp",
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

];