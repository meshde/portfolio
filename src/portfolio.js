/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "meshde Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "meshde Portfolio",
  },
};

//Home Page
const greeting = {
  title: "Mehmood S. Deshmukh",
  logo_name: "AshutoshHathidara",
  nickname: "meshde",
  subTitle:
    "A Software Developer who loves building things in Python & Node.js and scripting in bash",
  resumeLink: "./Resume.pdf",
  githubProfile: "https://github.com/meshde",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/meshde",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/meshde/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:meshde.md@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/meshdemd",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "StackOverflow",
    link: "https://stackoverflow.com/users/9365395/meshde",
    fontAwesomeIcon: "fa-stack-overflow", // Reference https://fontawesome.com/icons/stack-overflow?style=brands
    backgroundColor: "#F58025", // Reference https://simpleicons.org/?q=stackoverflow
  },
  // {
  //   name: "Topcoder",
  //   link: "https://www.topcoder.com/members/meshde/",
  //   icon: "topcoder.svg", // TODO: Topcoder logo does not exist in fontawesome, need to figure this out
  //   backgroundColor: "#29A7DF", // Reference https://simpleicons.org/?q=topcoder
  // },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "KJ Somaiya College of Engineering, Vidyavihar",
      subtitle: "Bachelor of Technology - BTech, Computer Engineering",
      logo_path: "KJSCE-Logo.svg",
      alt_name: "KJSCE",
      duration: "2014 - 2018",
      descriptions: ["CGPA: 9.14"],
      website_link: "https://kjsce.somaiya.edu",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description: "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Engineering Lead",
          company: "Capbase, Inc.",
          company_url: "https://capbase.com/",
          logo_path: "capbase.png",
          duration: "April 2021 - PRESENT",
          location: "Remote",
          description: `⇨ Responsibilities (apart from the ones I had as a Senior Engineer):
          • Lead projects to fruition with engineering teams of varying sizes ranging from 3 to 7.
          • Active involvement in product ideation and planning, primarily to evaluate the technical feasibility of proposed features/product solutions and to scope out & design the architecture of the implementation of the same.
          • Lead the engineering side of the customer support team.
          • Team Management & Development: Conduction of bi-weekly one-on-ones with each team member and conduction of weekly workshop/Q&A sessions covering the technical knowledge base of the platform and other general topics, such as AWS.

          ⇨ Notable Contributions
          • Evangelised the use of unit and automated tests to cover bugs that were being fixed & as a means of specifications for new features in the team.
        • Ideated & developed or led the development of numerous admin tools that enabled the customer support team and general engineers to investigate and resolve user issues without needing full-blown production access.`,
          color: "#0879bf",
        },
        {
          title: "Senior Software Engineer",
          company: "Capbase, Inc.",
          company_url: "https://capbase.com/",
          logo_path: "capbase.png",
          duration: "March 2020 - April 2021",
          location: "Remote",
          description: `⇨ Responsibilities:
          • Design & development of a SaaS platform with React as the frontend and AWS Appsync (GraphQL) and AWS Lambda (Node.js runtime) as the backend. The project involved the use of many other AWS services such as DynamoDB, S3, SQS, CloudWatch Insights, OpenSearch (ElasticSearch), Cognito, IAM, etc. The deployment and orchestration of the various AWS resources was done using AWS Amplify.
          • Bi-weekly Release Management.
          • Production & user support. Being the sole engineer with access to production, was responsible for investigating and resolving bugs & other issues that popped up for users and/or in the deployment process.

          ⇨ Notable Contributions:
          • Identified and implemented optimisations in the core backend process leading to a speedup of about 50%.
          • Fixed more than a few hard-to-debug and highly intermittent bugs.
        • Ideated and delivered an admin tool allowing customer support personnel to have read-only access to a particular user's view of the product. This led to the support team having more context of the user's issues thereby leading to faster resolution and happy customers.`,
          color: "#0879bf",
        },
        {
          title: "Web Developer L2",
          company: "Media.net",
          company_url: "https://www.media.net",
          logo_path: "media-net.png",
          duration: "August 2018 - March 2020",
          location: "Mumbai, Maharashtra",
          description: `⇨ Responsibilities:
          • Design, development, and deployment of build processes responsible for the automated compilation of templated Windows and macOS desktop applications. 
          • Development of features and fixes for an application distribution platform.
          • Research and rapid development of Proof of Concepts for new features.

          ⇨ Notable Contributions:
          • Implemented a highly reliable technique for user attribution that could embed user information in a digitally signed Windows executable file without breaking the signature.
          • Navigated the Chromium codebase to build a custom browser focused on search monetisation.
          • Conducted live and video courses on Web Fundamentals. The course was designed to cover the intricacies of widely used concepts of JavaScript and CSS that are commonly misunderstood amongst fresh college pass outs.

          ⇨ Team Development:
          • Conducted thorough reviews and encouraged the use of best practices in terms of code quality and usage of git in a team of four. 
          • Taught my team how to circumvent common and uncommon blunders associated with version control.
          • Automated many mundane development tasks, thereby reducing the team’s development time and effort.`,
          color: "#fc1f20",
        },
        {
          title: "Freelance Software Engineer",
          company: "Topcoder",
          company_url: "https://www.topcoder.com/",
          logo_path: "topcoder.svg",
          duration: "December 2018 - March 2020",
          location: "Remote",
          description: `Topcoder is a crowdsourcing company with an open global community of designers, developers, data scientists, and competitive programmers. Topcoder pays community members for their work on the projects and sells community services to clients.

            Part of the Topcoder community as a developer, actively working on the software development projects hosted on the platform. Community members participate and submit solutions to the open projects, the submissions are then scored on the basis of parameters such as whether or not the requirements are fulfilled, the usage of best practices, maintainability of the code, code coverage, security considerations, etc. The top submissions are heavily compensated.

            ⇨ Notable Achievements:
          • As of August 2019, have a rating of 1525, making me a yellow coder and putting me in the top 20% of developers at Topcoder.
            • Worked on 15 different projects, with a success (score of 80+ out of 100) rate of 85.71% and average placement of 3.21
          • Qualified for TCO19 India Regionals by being in the top 20 developers from India during the period of Feb 2019 - May 2019

          ⇨ Few Projects:
          • Created a command-line interface tool using Node.js that could compress the specified directory into the ZIP file format and upload it to Topcoder as a challenge submission.
            • Contributed to a hybrid mobile application project created using the Xamarin toolkit and the .NET framework using C#.
            • Contributed to many of Topcoder’s internal APIs, Kafka event processors and TopcoderX, the front-end application used by clients to create challenges/tasks on the crowd-sourcing platform. These were implemented using Node.js and React.js
          • Created a Flask API server and automation scripts to interact with AWS in Python.`,
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "EruditeX: A Comprehension Based Question Answering System",
      publication:
        "2018 Fourth International Conference on Computing Communication Control and Automation (ICCUBEA)",
      publisher: "IEEE",
      createdAt: "2019-04-25T05:30:00Z",
      description:
        "This paper introduces a modular approach to the task of factoid Question Answering based on a given context. This involves breaking down the task into subtasks and using traditional NLP techniques along with Deep Neural Networks to solve each subtask independently. Many disadvantages of using end-to-end neural networks for the complex task of Question Answering are overcome with the use of a modular approach. The paper also introduces a new Neural Network based approach for the Answer Extraction subtask, called the VDT Node Ranker. The results obtained using the system with limited amount of training fall below expectations, although that of the VDT Node Ranker alone are quite impressive.",
      url: "https://ieeexplore.ieee.org/document/8697486",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8320758513",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
