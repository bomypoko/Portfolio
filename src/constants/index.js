import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  jitta,
  brighton,
  verso,
  bomlogo,
  brightoncollege,
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
    title: "FrontEnd Developer",
    icon: web,
  },
  {
    title: "Responsive Design",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Recruiter",
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
    company_name: "Verso Internation School",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
]

export { services, technologies, experiences, testimonials, projects }
