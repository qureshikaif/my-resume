import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import Divider from "./components/Divider";
import { FaExternalLinkAlt } from "react-icons/fa";

const links = [
  {
    title: "LinkedIn:",
    value: "Muhammad Kaif Qureshi",
    url: "https://linkedin.com/in/mohammad-kaif-qureshi-77052a1a5/",
  },
  {
    title: "Github:",
    value: "QureshiKaif",
    url: "https://github.com/qureshikaif",
  },
  {
    title: "Upwork:",
    value: "Muhammad Kaif Qureshi",
    url: "https://www.upwork.com/freelancers/~01dcfe9b5f254cca69",
  },
  {
    title: "Email:",
    value: "kaifqureshi.dev@gmail.com",
    url: "mailto:kaifqureshi.dev@gmail.com",
  },
  {
    title: "Phone:",
    value: "+923182345206",
    url: "tel:+923182345206",
  },
];

const education = [
  {
    name: "Bahria University, Karachi Campus",
    date: "2022 -- 2026",
    degree: "Bachelor of Information Technology",
    titleOne: "CGPA:",
    titleOneValue: "3.4",
    titleTwo: "Skills:",
    titleTwoValue: "DSA, OOP, DBMS, Java, C++",
  },
  {
    name: "Fazaia Degree College",
    date: "2020 -- 2022",
    degree: "Computer Science",
    titleOne: "Grade:",
    titleOneValue: "A",
    titleTwo: "Skills:",
    titleTwoValue: "C, Linux, Networking",
  },
  {
    name: "The Educators",
    date: "2009 -- 2020",
    degree: "Computer Science",
    titleOne: "Grade:",
    titleOneValue: "A",
    titleTwo: "Skills:",
    titleTwoValue: "GW BASIC, MS Office",
  },
];

const certifications = [
  {
    name: "Introduction to front end development - Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/FYDQ4CYEZ6GT",
  },
  {
    name: "Theoretical understanding of HTML - SoloLearn",
    url: "https://www.sololearn.com/Certificate/CT-AQDIYOG4/png",
  },
  {
    name: "Theoretical understanding of CSS - SoloLearn",
    url: "https://www.sololearn.com/Certificate/CT-6DY9L5PF/png",
  },
  {
    name: "Elementary Programming With C - Aptech",
    url: "https://drive.google.com/file/d/1RMOlZN87uEfXgwaA2011Ld2M8OIyCU2e/view?usp=drive_link",
  },
  {
    name: "CIT (Web Designing) - MLH",
    url: "https://drive.google.com/file/d/1AK_re7r0VUxKixzOSGxZsxl6J-8vPaWb/view?usp=drive_link",
  },
];

const skills = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "Postgresql",
  "HTML5",
  "CSS3",
  "Javascript",
  "Typescript",
  "NoSQL",
  "Linux",
  "AWS",
  "React Native",
  "Web3/Blockchain",
  "Solidity",
  "ERC721 Tokens",
  "Tailwind CSS",
  "Next UI",
  "Shadcn UI",
  "Bootstrap",
  "Webflow",
  "Git",
  "OOP",
  "Wordpress Elementor",
];

const experiences = [
  {
    name: "Cubicus.io",
    date: "August 2023 -- Present",
    designation: "Junior Full Stack Developer",
    list: [
      {
        one: "Developed beautiful front-end interfaces using React.js and Next.js.",
        two: "Leveraged Next.js for improved SEO performance.",
        three:
          "Built scalable back-end systems using Node.js and Express server.",
        four: "Successfully deployed applications on AWS EC2.",
        five: "Managed Postgres databases, deploying on various platforms including Neon DB and AWS RDS.",
        six: "Worked on blockchain technology, specifically Solidity smart contracts for ERC721 tokens.",
        seven:
          "Currently developing a React Native application for both Android and iOS.",
        eight:
          "Applied SSL certification on a backend Node server on an EC2 instance using Caddy and nip.io.",
      },
    ],
  },
  {
    name: "Freelance Work",
    date: "March 2023 -- Present",
    designation: "Freelancer",
    list: [
      {
        one: "Designed and implemented custom themes and layouts for clients using Webflow and WordPress Elementor.",
        two: "Ensured responsive design for optimal viewing across multiple devices.",
        three:
          "Utilized Webflow’s rich visual interface to create complex animations and interactions.",
        four: "Implemented triggers and animations to enhance user experience and engagement.",
        five: "Used timed animations to control the sequence and timing of animations.",
        six: "Worked with multi-step animations to create complex, layered effects.",
        seven: "",
        eight: "",
      },
    ],
  },
];

const projects = [
  {
    name: "Script Matix",
    description:
      "ScriptMatix is an NFT marketplace for movie clips where users can buy, sell, and mint NFTs. The platform is built using React.js, Next.js, and Solidity smart contracts.",
    url: "https://nft-marketplace-exl5.vercel.app",
  },
  {
    name: "Nosh NFT",
    description:
      "Nosh NFT is an NFT marketplace where users can buy, sell, and mint NFTs, create their own collections. The platform is built using Next.js, and Solidity smart contracts.",
    url: "https://noshnft.com",
  },
  {
    name: "Grande Cercle",
    description:
      "Grane Cercle is a website dedicated to providing information about a conference. It has been built using WordPress Elementor with responsive designs",
    url: "https://grandcercle.asban.dev",
  },
  {
    name: "Summare. AI",
    description:
      "Summare.ai is a website designed for article reading. It’s built on Next.js 13 and uses app router for seamless navigation and the Next UI library for a visually appealing and intuitive user interface",
    url: "https://summare.ai",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <section className="bg-gray-100 p-10 min-h-screen w-1/2 m-10 rounded-xl print:w-full print:m-0">
        <div className="flex justify-between items-center">
          <div className="flex flex-col ">
            <h1 className="text-3xl font-bold">Muhammad Kaif Qureshi</h1>
            <h2 className="text-2xl font-light">Software Developer</h2>
          </div>
          <div className="flex flex-col bg-black text-white p-2 font-extrabold text-2xl">
            <h1>M</h1>
            <h1>K</h1>
            <h1>Q</h1>
          </div>
        </div>
        <Divider className="my-0 h-[2px]" />
        <div className="flex">
          <div className="w-1/2 h-full mt-2">
            {links.map((link, index) => (
              <div
                className="flex space-x-8 items-center justify-between w-3/4"
                key={index}
              >
                <h1 className="text-xs font-semibold w-1/6">{link.title}</h1>
                <div className="flex items-center flex-grow space-x-2">
                  <h1 className="text-xs text-left">{link.value}</h1>
                  <Link href={link.url} className="text-xs">
                    <FaExternalLinkAlt size={10} />
                  </Link>
                </div>
              </div>
            ))}
            <Divider className="my-2 h-[2px]" />
            <div className="space-y-1 py-1">
              <h1 className="uppercase text-sm font-medium">Summary</h1>
              <p className="text-xs">
                Experienced full-stack software developer with a good track
                record of addressing complex business requirements and
                overcoming challenges to deliver polished and user-friendly
                software solutions.
              </p>
            </div>
            <Divider className="my-2 h-[2px]" />
            <h1 className="uppercase text-sm font-medium">Education</h1>
            {education.map((edu, index) => (
              <div className="space-y-4 py-1" key={index}>
                <div>
                  <h1 className="text-xs font-semibold">{edu.name}</h1>
                  <p className="text-xsm">
                    {edu.date} | {edu.degree}
                  </p>
                  <ul className="text-xs list-disc my-0.5">
                    <li className="flex space-x-2 text-xsm">
                      <span className="font-semibold mr-1">{edu.titleOne}</span>
                      {edu.titleOneValue}
                    </li>
                    <li className="flex space-x-2 text-xsm">
                      <span className="font-semibold mr-1">{edu.titleTwo}</span>
                      {edu.titleTwoValue}
                    </li>
                  </ul>
                  {index !== education.length - 1 && (
                    <Divider className="my-2 h-[1px]" />
                  )}
                </div>
              </div>
            ))}
            <Divider className="my-2 h-[2px]" />
            <div className="py-1">
              <h1 className="uppercase text-sm font-medium">Certifications</h1>
              <ul className="list-disc pl-5 space-y-1 mt-2 mb-1">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <li className="text-xs">{cert.name}</li>
                    <Link href={cert.url}>
                      <FaExternalLinkAlt size={10} />
                    </Link>
                  </div>
                ))}
              </ul>
            </div>
            <Divider className="my-2 h-[2px]" />
            <div>
              <h1 className="uppercase text-sm font-medium my-2">Skills</h1>
              <ul className="flex gap-y-5 gap-x-5 flex-wrap list-disc ps-5 pe-5">
                {skills.map((skills, index) => (
                  <li className="text-xs" key={index}>
                    {skills}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-1/2 h-full mt-2 px-3">
            <h1 className="uppercase font-semibold">Experience</h1>
            {experiences.map((experience, index) => (
              <div key={index} className="my-1">
                <div>
                  <h1 className="text-xs font-semibold">{experience.name}</h1>
                  <p className="text-xsm mb-1">
                    {experience.date} | {experience.designation}
                  </p>
                </div>
                {experience.list.map((list, index) => (
                  <ul key={index} className="text-xs list-disc pl-7">
                    <li>{list.one}</li>
                    <li>{list.two}</li>
                    <li>{list.three}</li>
                    <li>{list.four}</li>
                    <li>{list.five}</li>
                    <li>{list.six}</li>
                    {list.seven && <li>{list.seven}</li>}
                    {list.eight && <li>{list.eight}</li>}
                  </ul>
                ))}
                <div className="h-2"></div>
              </div>
            ))}
            <div>
              <div>
                <h1 className="font-semibold">Projects</h1>
                <ul className="list-disc pl-7 space-y-1">
                  {projects.map((project, index) => (
                    <div key={index}>
                      <li className="text-xs font-medium">
                        <p className="flex items-center">
                          {project.name}
                          <Link href={project.url} className="ml-2">
                            <FaExternalLinkAlt href={project.url} size={10} />
                          </Link>
                        </p>
                      </li>
                      <p className="text-xs">{project.description}</p>
                      <div className="h-2"></div>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
