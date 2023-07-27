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
  whosbestlogoyeah,
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
  cryptovault,
  cryptovault2,
  cryptovault3,
  cryptovault4,
  solarsystem,
  goldenfilm
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
    title: "Javascript Developer",
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
      "Developing and maintaining web applications using Javascript, Three.js, React.js and other related technologies.",
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
    date: "Sep 2017 - Jan 2019",
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
      "I thought once we left the company that originally built our site we wouldn't find anyone who could maintain, update and fix any issues that arose as well as them, but Rick proved me wrong.",
    name: "Nick Meldrum",
    designation: "CEO",
    company: "Who's Best Group",
    image: whosbestlogoyeah,
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Crypto Vault",
    description: "Welcome to CryptoVault, your one-stop destination for everything related to cryptocurrencies.You can track the performance of various cryptocurrencies, including Bitcoin, Ethereum, and others, using our real-time charts and indicators.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: cryptovault4,
    source_code_link: "https://thecryptovault.netlify.app/",
  },
  {
    name: "Solar System",
    description:
    'Embark on an awe-inspiring journey through the cosmos with "Solar System," a captivating web application that brings the wonders of space right to your fingertips. This immersive experience, powered by the cutting-edge three.js library, offers a mesmerizing 3D simulation of our solar system that is both educational and entertaining, with a darker, more malevolent undertone. Do you ever feel like you\'re being watched?',
    tags: [
      {
        name: "npm",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
    ],
    image: solarsystem,
    source_code_link: "https://solar-system-rhills.netlify.app/",
  },
  {
    name: "Movie Search",
    description:
      "Movie Search is a fast and easy to use app where you can search for any movie ever made. Piggy backing on the back of IMDb’s API, OMDb (The Open Movie Database), we are able to loop through and present all of the available options contained in the worlds largest movie database, depending on the users input in the search field, even if incomplete.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: goldenfilm,
    source_code_link: "https://richyrichyrich38.github.io/movie-app/",
  },
];

export { services, technologies, experiences, testimonials, projects };