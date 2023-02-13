import {
  SiKotlin,
  SiFirebase,
  SiFastlane,
  SiGmail,
  SiTypescript,
  SiTailwindcss,
  SiAntdesign,
  SiRedux,
  SiCodeforces,
  SiCodechef,
  SiLeetcode,
  SiCplusplus,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiGithub,
} from "react-icons/si";
import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaAndroid,
  FaJava,
  FaLinkedin,
  FaStackOverflow,
  FaMedium,
  FaGithub,
  FaSass,
} from "react-icons/fa";
import { CgAlbum } from "react-icons/cg";
import { TbBrandNextjs } from "react-icons/tb";

const menuLinks = [
  { name: "Home", route: "/" },
  { name: "About Me", route: "/about" },
  { name: "Github", route: "/github" },
  { name: "Contact", route: "/contact" },
];

const siteConfig = {
  copyright: `Inspired from - Teo Wen Long`,
  author: {
    name: "Shardendu Shekhar Chaubey",
    accounts: [
      {
        url: "https://github.com/Shardy30",
        icon: <FaGithub />,
        name: "Github",
        type: "gray",
      },
      {
        url: "https://www.linkedin.com/in/sschaubey/",
        icon: <FaLinkedin />,
        name: "Linkedin",
        type: "linkedin",
      },
      {
        url: "https://codeforces.com/profile/shardy30",
        icon: <SiCodeforces/>,
        name: "Codeforces",
        type: "orange",
      },
      {
        url: "https://www.codechef.com/users/shardy30",
        icon: <SiCodechef />,
        name: "Codechef",
        type: "gray",
      },
      // {
      //   url: "https://leetcode.com/shardy30/",
      //   icon: <SiLeetcode />,
      //   name: "Leetcode",
      //   type: "yellow",
      // },
      {
        url: "mailto:shardendushekhar30@gmail.com",
        icon: <SiGmail />,
        name: "Gmail",
        type: "red",
      },
    ],
  },
};

const resume = {
  url: "https://drive.google.com/file/d/1aj_sAGsAPoCkCxz0FiOcnHq77y7o8WKE/view?usp=sharing",
  icon: <CgAlbum />,
  name: "Resume",
};

const langTechStacks = [
  {
    name: "C++",
    icon: < SiCplusplus fontSize="20px" />,
    url: "https://www.cplusplus.com/",
  },
  {
    name: "Python",
    icon: <SiPython fontSize="20px" />,
    url: "https://www.python.org/",
  },
  {
    name: "Javascript",
    icon: <FaJs fontSize="20px" />,
    url: "https://www.javascript.com/",
  },
  {
    name: "Java",
    icon: <FaJava fontSize="20px" />,
    url: "https://www.java.com/en/",
  },
];

const webTechStacks = [
  {
    name: "ReactJS",
    icon: <FaReact fontSize="20px" />,
    url: "https://reactjs.org/",
  },
  {
    name: "NextJS",
    icon: <TbBrandNextjs fontSize="20px" />,
    url: "https://nextjs.org/",
  },
  {
    name: "NodeJS",
    icon: <SiNodedotjs fontSize="20px" />,
    url: "https://nodejs.org/en/",
  },
  {
    name: "ExpressJS",
    icon: <SiExpress fontSize="20px" />,
    url: "https://expressjs.com/",
  },
  {
    name: "HTML5",
    icon: <SiHtml5 fontSize="20px" />,
    url: "https://html5.org/",
  },
  {
    name: "Redux",
    icon: <SiRedux fontSize="20px" />,
    url: "https://redux.js.org/",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb fontSize="20px" />,
    url: "https://www.mongodb.com/",
  },
  {
    name: "Firebase",
    icon: <SiFirebase fontSize="20px" />,
    url: "https://firebase.google.com/",
  },
];

const otherTechStacks = [
  {
    name: "Git",
    icon: <FaGitAlt fontSize="20px" />,
    url: "https://git-scm.com/",
  },
  {
    name: "Github",
    icon: <SiGithub fontSize="20px" />,
    url: "https://github.com/",
  },
];

const companies = [
  {
    title: "Rajiv Gandhi Institute of Petroleum Technology",
    alt: "rgipt image",
    url: "https://www.rgipt.ac.in/",
    role: "Computer Programming Tutor (CSE)",
    skills: ["C/C++", "Python", "MATLAB", "DSA"],
    period: "Nov 2022 - Mar 2023",
    logo: "/rgipt.png",
  },
];

const educations = [
  {
    title: "Rajiv Gandhi Institute of Petroleum Technology",
    alt: "rgipt image",
    url: "https://www.rgipt.ac.in/",
    role: "B.Tech. in Computer Science and Engineering",
    skills: ["CPI - 9.15", "Computer Networks", "DBMS", "Software Engineering", "Cloud Computing"],
    period: "Dec 2020 - Jun 2024",
    logo: "/rgipt.png",
  },
  {
    title: "CMS Lucknow",
    alt: "cms image",
    url: "https://www.cmseducation.org/",
    role: "12th - PCM+CS - ISC",
    skills: ["Percentage - 95.75%", "English", "Mathematics", "Physics", "Chemistry", "Computer Science"],
    period: "Jun 2018 - May 2020",
    logo: "/cms.png",
  },
  {
    title: "St. Basil's School, Basti",
    alt: "basils image",
    url: "https://stbasilbasti.online/",
    role: "10th - Science+CS - ICSE",
    skills: ["Percentage - 95.40%", "English", "Mathematics", "Physics", "Chemistry", "Computer Science"],
    period: "Jun 2016 - May 2018",
    logo: "/basils.png",
  },
];

const sideProjects = [
  {
    name: "Simply Wiki",
    imageUrl: "/simplywiki.png",
    alt: "simplywiki",
    summary:
      "A tool designed to make Wikipedia articles more accessible to a wider audience by summarizing them depending on the need of user.",
    link: "https://simply-wiki.vercel.app/",
    tech: [
      'NextJS',
      "Context API",
      "OpenAI Playground",
    ],
    github: "https://github.com/Shardy30/Simply-Wiki"
  },
  {
    name: "CPP2LaTeX",
    imageUrl: "/cpp2latex.png",
    alt: "cpp2latex",
    summary: "Flask Web App to convert C++ functions into LaTeX pseudo-code by tokenizing and converting it. IIT Indore Hackathon 2023 Winner",
    link: "https://cpp2latex-1.ayushr12.repl.co/",
    tech: [
      'Flask',
      "Pyhton",
      "Algorithms"
    ],
    github: "https://github.com/Silicon-Ghati/cpp2latex"
  },
  {
    name: "Libra",
    imageUrl: "/libra.png",
    alt: "libra",
    summary: "React Web App to provide real-time news and details on various cryptocurrencies including price-graphs, market-cap, etc.",
    link: "https://libra-crypto.netlify.app/",
    tech: [
      "ReactJS",
      "Redux-Toolkit",
      "RapidAPI",
    ],
    github: "https://github.com/Shardy30/Libra"
  },
  {
    name: "Voting Machine",
    imageUrl: "/votingmachine.png",
    alt: "votingmachine",
    summary: "Interactive Voting Machine App to cast votes for various parties and candidates as per a modifiable database.",
    tech: [
      "MATLAB",
      "GUI",
    ],
    link: "https://github.com/Shardy30/Voting-Machine",
    github: "https://github.com/Shardy30/Voting-Machine"
  },
];

export {
  menuLinks,
  webTechStacks,
  langTechStacks,
  otherTechStacks,
  siteConfig,
  resume,
  companies,
  educations,
  sideProjects,
};
