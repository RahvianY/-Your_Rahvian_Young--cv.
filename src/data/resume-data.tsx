import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { Description } from "@radix-ui/react-dialog";

export const RESUME_DATA = {
  name: "Rahvian Young",
  initials: "RLY",
  location: "Fort Worth, Texas",
  locationLink: "https://www.google.com/maps/place/Fort+Worth,+Texas",
  about:
  "Experienced professional with a background in merchandising, warehouse operations, and order fulfillment.",
  summary:
  "Dedicated worker with experience in various roles including merchandising, order fulfillment, and warehouse operations. Skilled in e-commerce, digital marketing, and social media management. Currently pursuing degrees in Business Marketing and Computer Science Cyber Security.",
  avatarUrl: "/headshot.jpg",
  personalWebsiteUrl: "",
  contact: {
  email: "Rahvianyoung@gmail.com",
  tel: "+8176757116", // Replace with your actual phone number if you want to include it
  social: [
  // Include or remove these as needed
  {
  name: "GitHub",
  url: "YOUR_GITHUB_URL",
  icon: GitHubIcon,
  },
  {
  name: "LinkedIn",
  url: "https://www.linkedin.com/in/rahvian-young-b44a82162/",
  icon: LinkedInIcon,
  },
  {
  name: "X",
  url: "https://twitter.com/RahvianYoung",
  icon: XIcon,
  },
  ],
  },
  education: [
  {
  school: "Central Texas College Online",
  degree: "Associate's Degree in Computer Science Cyber Security",
  start: "2024",
  end: "Present",
  },
  {
  school: "San Antonio College Online",
  degree: "Associate's Degree in Business Marketing",
  start: "2019",
  end: "Present",
  },
  {
  school: "NorthWest High School",
  degree: "High School Diploma",
  start: "2016",
  end: "2019",
  },
  ],
  work: [
  {
  company: "Dollar General Warehouse",
  link: "https://www.dollargeneral.com/",
  badges: [],
  title: "Unloader",
  logo: null,
  start: "2022",
  end: "2023",
  description:
  "Used jigs, torches, jacks, wedges, turnbuckles, hoists, cranes, drift pins, pry bars. Stocked floor according to current store map, utilized RF scanner for inventory database. Replenished stock on floor and back-stock material. Secured newly organized pallets utilizing shrink wrap. Prepared pallets by following prescribed stacking arrangement and properly tagging pallets.",
  },
  {
  company: "Frito Lay",
  link: "https://www.fritolay.com/",
  badges: [],
  title: "Merchandiser",
  logo: null,
  start: "2020",
  end: "2022",
  description:
  "Responsible for merchandising Frito-Lay's complete line of quality products in local stores. Drove personal vehicle to a variety of store locations, retrieving Frito-Lay products from the backs of stores, and ensuring that products were both fresh and attractive to customers. Worked flexible schedules including weekends and holidays in all weather conditions.",
  },
  {
  company: "Walmart Distribution Center",
  link: "https://www.walmart.com/",
  badges: [],
  title: "Order Filler",
  logo: null,
  start: "2019",
  end: "2020",
  description:
  "Responsible for handling requests for merchandise, goods, or services and ensuring orders were filled. Packaged products and sent them out to customers. Followed up to ensure orders arrived. Handled orders for goods and services. Took order slips to the stockroom or distribution center and located items. Picked merchandise from warehouse shelves. Packed merchandise and ensured it would not break by including bubble wrap, foam, and stuffing. Checked inventory to ensure orders could be fulfilled. Notified staff if inventory was low. Placed shipping labels on boxes. Ensured customer information was correct on labels. Arranged for shipping and had parcels picked up. Kept track of inventory and shipments. Worked with the warehouse team to arrange inventory and pull from shelves.",
  },
  ],
  skills: [
  "E-Commerce",
  "Warehouse Experience",
  "Order Picking",
  "Digital Marketing",
  "Shipping & Receiving",
  "Packaging",
  "Merchandising",
  "WordPress",
  "Social Media Management",
  "Google Analytics",
  ],
  projects: [
    {
      title: "ZombMobNft Project",
      techStack: ["Content Creation", "Content Editing", "Videography", "Graphic Design", "Website Building"],
      description: "ZombMobnft is a non-fiction initiative I started in 2022 with Polygon cryptocurrency to explore economic behavior in a hypothetical zombie world. Our goal is to determine whether zombies can establish a new economy with unique expenditure patterns. In this scenario, essential items like food and living expenses are costly, while luxury items like designer clothing and jewelry are inexpensive. This project aims to demonstrate financial management skills in an unconventional setting. It's designed as a game-like experience where participants balance spending on necessities versus trendy items. Through NFT staking, we also provide investors with opportunities to profit from their investments.",
      logo: "https://x.com/Zombmobnft/status/1545574752563126273",
      link: {
        label: "ZombMobNft",
        href: "https://www.mintables.club/m/zombmobnft"
      },
    },
  // You can add any personal or academic projects here if applicable
  ],
} as const;