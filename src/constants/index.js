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
  solidity,
  rhlogo,
  CVD,
  TelecomDr,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  WillWay,
  SPC,
} from "../assets";


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
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Web3 Developer",
    icon: backend,
  },
  {
    title: "Three.js Developer",
    icon: creator,
  },
];

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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
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
  {
    name: "Solidity",
    icon: solidity,
  },
];

const experiences = [
  {
    title: "Front-End Web Developer",
    company_name: "Freelance",
    icon: rhlogo,
    iconBg: "#383E56",
    date: "May 2022 - Present",
    points: [
      "Developing and maintaining web applications using Three.js, React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Strong focus on creating interfaces and experiences that are user-centric.",
    ],
  },
  {
    title: "Sales Manager - B2B Telecom",
    company_name: "Cloud, Voice & Data",
    icon: CVD,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - Jun 2022",
    points: [
      "10+ years of experience in the telecoms industry. Proven success in leading high-performing sales teams, driving product and services growth, and developing strong customer relationships.",
      "Committed to maintaining customer satisfaction and loyalty in order to increase revenue and business growth.",
      "Experienced in product and services knowledge, as well as market trends.",
      "Built resilient and mutually beneficial referral partnerships with B2B utility companies and buying consortiums.",
    ],
  },
  {
    title: "Director",
    company_name: "The Telecom Dr",
    icon: TelecomDr,
    iconBg: "#383E56",
    date: "Sep 2017 - Oct 2021",
    points: [
      "Director and sole proprietor of The Telecom Dr, where we provided free telecom health checks to small the medium sized businesses with the aim of future proofing their current systems while also saving them money in the process.",
      "Managed day-to-day operations of the business, including sales, marketing, customer service and technical support.",
      "Developed and implement successful sales strategies to increase profitability.",
      "Oversaw the continued development of customer relationships and identified new business opportunities.",
      "The company merged with Cloud, Voice & Data in the summer of '19 where I continued my duties under a new banner."
    ],
  },
  {
    title: "Senior Account Manager",
    company_name: "Simple Property Club",
    icon: SPC,
    iconBg: "#E6DEDD",
    date: "Jan 2014 - Sep 2017",
    points: [
      "Demonstrated success in all facets of property investment, from locating and acquiring properties to developing and managing them to maximize returns. Proven ability to lead successful teams, develop innovative strategies and secure profitable venture capital investments.",
      "Managing investor accounts.",
      "Contract Negotiation and Drafting.",
      "Business Planning and Strategy.",
      "Portfolio Sourcing and Optimisation",
    ],
  },
];

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
];

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
];

export { services, technologies, experiences, testimonials, projects };