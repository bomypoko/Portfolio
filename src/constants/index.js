import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
  jitta,
  verso,
  bomlogo,
  brightoncollege,
  futurebank,
  metaverse
  
} from "../assets"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

const services = [
  {
    title: "Recruitment",
    icon: web,
  },
  {
    title: "Payroll",
    icon: mobile,
  },
  {
    title: "Engagement",
    icon: backend,
  },
  {
    title: "Visa-Work Permit",
    icon: creator,
  },
]

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
 
]

const experiences = [
  {
    title: " Senior HR and Administrative Officer",
    company_name: "Brighton College International School",
    icon: brightoncollege,
    iconBg: "#383E56",
    date: "July 2016 - June 2020",
    points: [
      "Responsible for updating and preparing the monthly payroll of all staff in the schools and companies of the St. Andrews Schools group working closely with Central Finance Teamand HRBP for Thailand and submitting payroll reports to Management..",
      "Provide detail of income tax and monthly withholding tax calculation to existing expat staff before January payroll is paid, and to new hires who join during calendar year before their 1st salary is paid.",
      "Prepare, calculate and submit monthly Withholding Tax form (P.N.D.1) of all 4 schools in the St. Andrews International Schools group to Revenue Department.",
      "Visa and Work-Permit.",
    ],
  },
  {
    title: "Senior HR and Administrative Officer",
    company_name: "Verso International School",
    icon: verso,
    iconBg: "#E6DEDD",
    date: "July 2020 - June 2021",
    points: [
      "Support in HR process improvement (minimize duplicate work within HR team or across department).",
      "Local medical Insurance review: Contact Local Insurance company and do the comparison of Local Insurance policy as well as provide recommendation.",
      "Yearly prepare annual workmen compensations fund and other inspection report and submit to Social Security office for all schools in the group.",
      
    ],
  },
  {
    title: "HR Executive and Operation",
    company_name: "Jitta Wealth",
    icon: jitta,
    iconBg: "#383E56",
    date: "July 2021 - Current",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Start Learning to how become a Programer",
    company_name: "Self learning ",
    icon: bomlogo,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Learning back-end technologies such as NodeJs.",
      "Focus on Responsive Website to fit with all the devices.",
     
    ],
  },
]

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
]

const projects = [
  {
    name: "Future Bank",
    description:
      "Jumping to start building a web project by focusing on Responsive Design, Folder structure, and be able to create and reuseable components and deploy on free web hosting 'Nelify'.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    
    ],
    image: futurebank,
    source_code_link: "https://github.com/bomypoko/LandingPage_Web3theme-Hoobank",
  },
  {
    name: "Metaverse ",
    description:
      "To challenge myself, I start building a website to look more alive by using framework such as Framer-Motion. of course, still stick on Folder Structure and Reusing Components for the best practice.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
    ],
    image: metaverse,
    source_code_link: "https://github.com/bomypoko/LandingPage_Web3theme-Metaverseworld",
  },

]

export { services, technologies, experiences, testimonials, projects }
