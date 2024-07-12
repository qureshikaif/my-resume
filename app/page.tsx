import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import Divider from "./components/Divider";
import { FaExternalLinkAlt } from "react-icons/fa";
import { url } from "inspector";

const links = [
  {
    title: "LinkedIn:",
    value: "Muhammad Kaif Qureshi",
    url: "https://linkedin.com/in/mohammad-kaif-qureshi-77052a1a5/",
  },
  {
    title: "Email:",
    value: "kaifqureshi.dev@gmail.com",
    url: "mailto:kaifqureshi.dev@gmail.com",
  },
  {
    title: "Upwork:",
    value: "Muhammad Kaif Qureshi",
    url: "https://www.upwork.com/freelancers/~01dcfe9b5f254cca69",
  },
  {
    title: "Phone:",
    value: "+923182345206",
    url: "tel:+923182345206",
  },
  {
    title: "Github:",
    value: "QureshiKaif",
    url: "https://github.com/qureshikaif",
  },
];

const education = [
  {
    name: "Bahria University, Karachi Campus",
    date: "2022 -- 2026",
    degree: "Bachelor of Information Technology",
    titleOne: "CGPA:",
    titleOneValue: "3.5",
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
  {
    name: "Coder's Clash - BUCIS",
    url: "https://drive.google.com/file/d/1gI4aNP7Ytrcosb1pjO3Bix9qSZYdQQX_/view?usp=drivesdk",
  },
];

const skills = {
  devops: ["AWS", "SSL Certification", "CI/CD Tools"],
  languages: [
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Solidity",
    "SQL (PostgreSQL, MSSQL)",
  ],
  frameworks: [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Webflow",
    "WordPress Elementor",
    "React Native",
  ],
};

const experiences = [
  {
    name: "Cubicus.io",
    date: "July 2023 -- July 2024",
    designation: "Junior Full Stack Developer",
    list: [
      "Developed responsive front-end interfaces using React.js and Next.js, enhancing user experience and engagement.",
      "Built and maintained scalable back-end systems with Node.js and Express, ensuring high performance and availability.",
      "Managed Postgres databases, deploying on AWS RDS and Neon DB, optimizing data storage and retrieval.",
    ],
  },
  {
    name: "Freelancing",
    date: "March 2023 -- Present",
    designation: "Freelancer",
    list: [
      "Designed and implemented custom themes and layouts for clients using Webflow and WordPress Elementor, ensuring responsive design across devices.",
      "Utilized Webflow’s visual interface to create complex animations and interactions, improving user engagement.",
      "Collaborated with clients to understand their needs and deliver tailored web solutions, resulting in high client satisfaction.",
    ],
  },
];

const webProjects = [
  {
    name: "Summare - AI",
    description:
      "Summare.ai is a website designed for article reading. It’s built on Next.js 13 and uses app router for seamless navigation and the Next UI library for a visually appealing and intuitive user interface",
    url: "https://summare.ai",
  },
  {
    name: "SF Business Solutions",
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
];

const mobileProjects = [
  {
    name: "Pixpel.io",
    description:
      "Pixpel.io is a web3 gaming and cryptocurrency website, providing a platform for gamers and cryptocurrency enthusiasts.",
    url: "https://pixpel.io",
  },
  {
    name: "ADHD Coach",
    description:
      "ADHD Coach is a mobile application designed to help individuals with ADHD manage their daily tasks and improve their productivity.",
    url: "https://adhdcoach.app",
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
                  <h1 className="text-xs text-left ">{link.value}</h1>
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
              <div className="mb-4">
                <h2 className="text-xs font-semibold">Languages</h2>
                <ul className="flex gap-y-2 flex-wrap list-disc ps-5 gap-x-5 mt-2">
                  {skills.languages.map((skill, index) => (
                    <li className="text-xs" key={index}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h2 className="text-xs font-semibold">Framework/Libraries</h2>
                <ul className="flex gap-y-2 gap-x-5 flex-wrap list-disc ps-5 mt-2">
                  {skills.frameworks.map((skill, index) => (
                    <li className="text-xs" key={index}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h2 className="text-xs font-semibold">DevOps</h2>
                <ul className="flex gap-y-2 gap-x-5 flex-wrap list-disc ps-5 mt-2">
                  {skills.devops.map((skill, index) => (
                    <li className="text-xs" key={index}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
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
                <ul className="text-xs list-disc pl-7">
                  {experience.list.map((list, index) => (
                    <li key={index} className="text-xs">
                      {list}
                    </li>
                  ))}
                </ul>
                <div className="h-2"></div>
              </div>
            ))}
            <div>
              <div>
                <h1 className="font-semibold">Projects</h1>
                <h2 className="text-sm font-semibold mt-2">Web Apps</h2>
                <ul className="list-disc pl-7 space-y-1">
                  {webProjects.map((project, index) => (
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
                <h2 className="text-sm font-semibold mt-4">Mobile Apps</h2>
                <ul className="list-disc pl-7 space-y-1">
                  {mobileProjects.map((project, index) => (
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
