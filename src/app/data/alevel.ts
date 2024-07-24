export interface ALevel {
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

export const courses: ALevel[] = [
  {
    id: "1",
    subject_name: "A Level Biology",
    url: "biology",
    image_url: "",
    icon: "/subjects/Math.webp",
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
    url: "business",
    image_url: "",
    icon: "/subjects/English.webp",
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
    url: "chemistry",
    image_url: "",
    icon: "/subjects/Physics.webp",
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
  {
    id: "4",
    subject_name: "A Level Computer Science",
    url: "computer-science",
    image_url: "",
    icon: "/subjects/Computer.webp",
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
    url: "economics",
    image_url: "",
    icon: "/subjects/Global.webp",
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
    subject_name: "A – Level English Literature",
    url: "english-literature",
    image_url: "",
    icon: "/subjects/Sociology.webp",
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
    url: "english",
    image_url: "",
    icon: "/subjects/English.webp",
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
    url: "geography",
    image_url: "",
    icon: "/subjects/English.webp",
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
    url: "global-perspectives-research",
    image_url: "",
    icon: "/subjects/English.webp",
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
    url: "history",
    image_url: "",
    icon: "/subjects/English.webp",
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
    url: "law",
    image_url: "",
    icon: "/subjects/English.webp",
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
    url: "mathematics",
    image_url: "",
    icon: "/subjects/English.webp",
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
    url: "further-mathematics",
    image_url: "",
    icon: "/subjects/English.webp",
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
    url: "media-studies",
    image_url: "",
    icon: "/subjects/English.webp",
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
    url: "physics",
    image_url: "",
    icon: "/subjects/English.webp",
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
    url: "psychology",
    image_url: "",
    icon: "/subjects/English.webp",
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
    url: "sociology",
    image_url: "",
    icon: "/subjects/English.webp",
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

];