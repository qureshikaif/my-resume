import Link from "next/link";
import Divider from "./components/Divider";
import { FaExternalLinkAlt } from "react-icons/fa";
import { PiGithubLogo, PiLinkedinLogo, PiPhone } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";

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
    title: "Website:",
    value: "kaifqureshi.vercel.app",
    url: "https://kaifqureshi.vercel.app",
  },
  // {
  //   title: "Upwork:",
  //   value: "Muhammad Kaif Qureshi",
  //   url: "https://www.upwork.com/freelancers/~01dcfe9b5f254cca69",
  // },
  {
    title: "Phone:",
    value: "+923182345206",
    url: "tel:+923182345206",
  },
  {
    title: "Github:",
    value: "qureshikaif",
    url: "https://github.com/qureshikaif",
  },
];

const linksicon = [
  {
    icon: PiLinkedinLogo,
    value: "Muhammad Kaif Qureshi",
    url: "https://linkedin.com/in/mohammad-kaif-qureshi-77052a1a5/",
  },
  {
    icon: PiGithubLogo,
    value: "qureshikaif",
    url: "https://github.com/qureshikaif",
  },
  {
    icon: MdOutlineMail,
    value: "kaifqureshi.dev@gmail.com",
    url: "mailto:kaifqureshi.dev@gmail.com",
  },
  // {
  //   icon: PiGlobe,
  //   value: "kaifqureshi.vercel.app",
  //   url: "https://kaifqureshi.vercel.app",
  // },
  {
    icon: PiPhone,
    value: "+923182345206",
    url: "tel:+923182345206",
  },
];

const linksicons = [
  {
    icon: PiLinkedinLogo,
    url: "https://linkedin.com/in/mohammad-kaif-qureshi-77052a1a5/",
  },
  {
    icon: PiGithubLogo,
    url: "https://github.com/qureshikaif",
  },
  {
    icon: MdOutlineMail,
    url: "mailto:kaifqureshi.dev@gmail.com",
  },
  // {
  //   icon: PiGlobe,
  //   url: "https://kaifqureshi.vercel.app",
  // },
  {
    icon: PiPhone,
    url: "tel:+923182345206",
  },
];

const education = [
  {
    name: "Bahria University, Karachi Campus",
    date: "2022 - 2026",
    degree: "Bachelor of Information Technology",
    titleOne: "CGPA:",
    titleOneValue: "3.5",
    titleTwo: "Skills:",
    titleTwoValue: "DSA, OOP, DBMS, Java, C++",
  },
  {
    name: "Fazaia Degree College",
    date: "2020 - 2022",
    degree: "Computer Science",
    titleOne: "Grade:",
    titleOneValue: "A",
    titleTwo: "Skills:",
    titleTwoValue: "C, Linux, Networking",
  },
  // {
  //   name: "The Educators",
  //   date: "2009 - 2020",
  //   degree: "Computer Science",
  //   titleOne: "Grade:",
  //   titleOneValue: "A",
  //   titleTwo: "Skills:",
  //   titleTwoValue: "GW BASIC, MS Office",
  // },
];

const certifications = [
  {
    name: "Introduction to front end development - Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/FYDQ4CYEZ6GT",
  },
  {
    name: "CIT (Web Designing) - MLH",
    url: "https://drive.google.com/file/d/1AK_re7r0VUxKixzOSGxZsxl6J-8vPaWb/view?usp=drive_link",
  },

  {
    name: "Google Project Management - Coursera",
    url: "https://drive.google.com/file/d/1AK_re7r0VUxKixzOSGxZsxl6J-8vPaWb/view?usp=drive_link",
  },
];

const skills = {
  devops: ["AWS", "Digital Ocean", "Vercel", "Netlify"],
  languages: ["JavaScript", "TypeScript"],
  frameworks: [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "React Native",
    "Expo",
    "Redux Toolkit",
    "Zustand",
    // "Shadcn UI",
  ],
  cms: ["Webflow"],
  nosql: ["MongoDB", "Firebase", "PostgreSQL", "MySQL"],
  versioncontrol: ["Github", "Bitbucket", "Gitlab"],
};

const experiences = [
  {
    name: "Zenith Flow Tech",
    date: "July 2024 - Present",
    designation: "React Native Developer",
    list: [
      "Developed a rabbitry management app for cross-platform, iOS and Android using React Native.",
      "Implemented data fetching using TanStack Query for efficient state management.",
      "Designed and managed form schemas with React Hook Form and Zod for robust validation and error handling.",
      "Worked on a fitness app using Expo, leveraging Expo Router for navigation and EAS services for seamless building and deployment.",
      "Enabled over-the-air (OTA) updates using Expo's EAS services for quick app improvements.",
    ],
  },
  {
    name: "Cubicus.io",
    date: "July 2023 - July 2024",
    designation: "Full Stack Developer",
    list: [
      "Developed beautiful front-end interfaces using React.js and Next.js.",
      "Leveraged Next.js for improved SEO performance.",
      "Built scalable back-end systems using Node.js and Express server.",
      "Successfully deployed applications on AWS EC2 and Digital Ocean.",
      "Managed Postgres databases, deploying on various platforms including Neon DB and AWS RDS.",
      "Applied SSL certification on a backend Node server on an EC2 instance using Caddy and nip.io.",
    ],
  },

  // {
  //   name: "Freelancing",
  //   date: "March 2023 - Present",
  //   designation: "Freelancer",

  //   list: [
  //     "Designed and implemented custom themes and layouts for clients using Webflow and WordPress Elementor.",
  //     "Ensured responsive design for optimal viewing across multiple devices.",
  //     "Utilized Webflow’s rich visual interface to create complex animations and interactions.",
  //     "Implemented triggers and animations to enhance user experience and engagement.",
  //     "Used timed animations to control the sequence and timing of animations.",
  //     "Worked with multi-step animations to create complex, layered effects.",
  //   ],
  // },
];

const projects = [
  {
    name: "SF Business Solutions",
    url: "https://sfbusinesssolutions.com",
    techStack: ["Next.js 14 | ", "Shadcn UI | ", "App Router"],
    description:
      "SF Business Solutions provides services like accounting, finance, tax, and bookkeeping. Built with Next.js 14 and Shadcn UI for a professional interface.",
  },
  {
    name: "Nosh NFT",
    url: "https://noshnft.vercel.app",
    techStack: ["Next.js | ", "Solidity | ", "Node.js | ", "Express.js"],
    description:
      "Nosh NFT is a platform for trading NFTs. Developed using Next.js, Solidity, Node.js, and Express.js to enable NFT creation and transactions.",
  },
  {
    name: "Pixpel.io",
    url: "https://drive.google.com/file/d/1bstIH9HEFoKuif-Zar26aD6VgCI8Zvir/view?usp=sharing",
    techStack: ["React Native | ", "Native Base"],
    description:
      "Pixpel.io is a web3 gaming and cryptocurrency platform. Built with React Native and Native Base. This project uses Nativewind for styling along with Native Base for UI components.",
  },
  {
    name: "Beam Fitness",
    url: "https://drive.google.com/file/d/1bstIH9HEFoKuif-Zar26aD6VgCI8Zvir/view?usp=sharing",
    techStack: ["Expo | ", "Tanstack Query | ", "React Hook Form"],
    description:
      "Beam Fitness is an app built with Expo, Gorhom BottomSheets, and robust form/data handling via React Hook Form and TanStack Query.",
  },
  // {
  //   name: "ADHD Coach",
  //   url: "https://github.com/qureshikaif/adhd-coach-native",
  //   techStack: ["React Native | ", "Node.js | ", "Express.js"],
  //   description:
  //     "ADHD Coach is a productivity app for individuals with ADHD. Developed with React Native, Node.js, and Express.js to help manage tasks effectively.",
  // },
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <section className="bg-gray-100 p-10 min-h-screen w-1/2 m-10 rounded-xl print:w-full print:m-0">
        <div className="flex justify-between items-center">
          <div className="flex flex-col w-full">
            <div className="flex justify-between w-full">
              <h1 className="text-3xl font-bold">Muhammad Kaif Qureshi</h1>
            </div>
            <h2 className="text-xl font-light">Software Developer</h2>
          </div>
        </div>
        <Divider className="my-4 h-[1px]" />
        <div className="flex justify-between">
          {linksicon.map((link, index) => (
            <div
              className="flex flex-row space-x-2 items-center justify-between"
              key={index}
            >
              <link.icon className="w-5 h-5" />
              <div className="flex items-center flex-grow space-x-2">
                <Link className="text-xs" href={link.url} target="_blank">
                  {link.value}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Divider className="my-4 h-[1px]" />
        <div className="flex space-x-4">
          <div className="w-1/3 h-full mt-2">
            <div className="space-y-1 py-1">
              <h1 className="uppercase text-sm font-semibold">Summary</h1>
              <p className="text-xs">
                Experienced full-stack software developer with a good track
                record of addressing complex business requirements and
                overcoming challenges to deliver polished and user-friendly
                software solutions.
              </p>
            </div>
            <Divider className="my-3 h-[0.5px] bg-gray-400" />

            <h1 className="uppercase text-sm font-semibold">Education</h1>
            {education.map((edu, index) => (
              <div className="space-y-4 py-1" key={index}>
                <div>
                  <h1 className="text-xs font-semibold">{edu.name}</h1>
                  <p className="text-xsm">
                    {edu.date} | {edu.degree}
                  </p>
                  {/* <ul className="text-xs list-disc my-0.5">
                    <li className="flex space-x-2 text-xsm">
                      <span className="font-semibold mr-1">{edu.titleOne}</span>
                      {edu.titleOneValue}
                    </li>
                  </ul> */}
                  {/* <ul className="text-xs list-disc my-0.5">
                    <li className="flex space-x-2 text-xsm">
                      <span className="font-semibold mr-1">{edu.titleTwo}</span>
                      {edu.titleTwoValue}
                    </li>
                  </ul> */}
                  {/* {index !== education.length - 1 && (
                    <Divider className="my-2 h-[1px]" />
                  )} */}
                </div>
              </div>
            ))}
            <Divider className="my-3 h-[0.5px] bg-gray-400" />
            <div className="py-1">
              <h1 className="uppercase text-sm font-semibold">
                Certifications
              </h1>
              <ul className="list-disc pl-5 space-y-1 mt-2 mb-1">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <li className="text-xs">
                      <Link href={cert.url}>{cert.name}</Link>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
            <Divider className="my-3 h-[0.5px] bg-gray-400" />
            <div>
              <h1 className="uppercase text-sm font-semibold my-2">Skills</h1>
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
              {/* <div className="mb-4">
                <h2 className="text-xs font-semibold">DevOps</h2>
                <ul className="flex gap-y-2 gap-x-5 flex-wrap list-disc ps-5 mt-2">
                  {skills.devops.map((skill, index) => (
                    <li className="text-xs" key={index}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div> */}
              <div className="mb-4">
                <h2 className="text-xs font-semibold">CMS/Website Builders</h2>
                <ul className="flex gap-y-2 gap-x-5 flex-wrap list-disc ps-5 mt-2">
                  {skills.cms.map((skill, index) => (
                    <li className="text-xs" key={index}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h2 className="text-xs font-semibold">Database</h2>
                <ul className="flex gap-y-2 gap-x-5 flex-wrap list-disc ps-5 mt-2">
                  {skills.nosql.map((skill, index) => (
                    <li className="text-xs" key={index}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h2 className="text-xs font-semibold">Version Control</h2>
                <ul className="flex gap-y-2 gap-x-5 flex-wrap list-disc ps-5 mt-2">
                  {skills.versioncontrol.map((skill, index) => (
                    <li className="text-xs" key={index}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-2/3 h-full mt-2 px-3">
            <h1 className="uppercase font-semibold text-sm">Experience</h1>
            {experiences.map((experience, index) => (
              <div key={index} className="my-1">
                <div>
                  <h1 className="text-xs font-semibold">{experience.name}</h1>
                  <p className="text-[0.7rem] mb-1">
                    {experience.date} | {experience.designation}
                  </p>
                </div>
                <ul className="text-xs list-disc pl-7">
                  {experience.list.map((list, index) => (
                    <li key={index} className="mb-[0.15rem]">
                      {list}
                    </li>
                  ))}
                </ul>
                <div className="h-2"></div>
              </div>
            ))}
            <div>
              <div>
                <h1 className="font-semibold text-sm mb-2 mt-3">PROJECTS</h1>
                {/* <h2 className="text-sm font-semibold mt-2">Web Apps</h2> */}
                <ul className="list-disc pl-7 space-y-1">
                  {projects.map((project, index) => (
                    <div key={index}>
                      <li className="text-xs">
                        <p className="flex items-center font-semibold">
                          {project.name}
                          <Link
                            href={project.url}
                            target="_blank"
                            className="ml-2"
                          >
                            <FaExternalLinkAlt href={project.url} size={10} />
                          </Link>
                        </p>
                        <div className="flex">
                          {project.techStack.map((tech, idx) => (
                            <p key={idx} className="text-xsm mb-1">
                              {tech}&nbsp;
                            </p>
                          ))}
                        </div>
                        <p className="text-xs">{project.description}</p>
                      </li>
                      <div className="h-2"></div>
                    </div>
                  ))}
                </ul>
                {/* <h2 className="text-sm font-semibold mt-4">Mobile Apps</h2> */}
                {/* <ul className="list-disc pl-7 space-y-1">
                  {mobileProjects.map((project, index) => (
                    <div key={index}>
                      <li className="text-xs">
                        <p className="flex items-center font-medium">
                          {project.name}
                          <Link href={project.url} className="ml-2">
                            <FaExternalLinkAlt href={project.url} size={10} />
                          </Link>
                        </p>
                        <div className="flex">
                          {project.techStack.map((tech, idx) => (
                            <p key={idx} className="text-xsm mb-1">
                              {tech}&nbsp;|&nbsp;
                            </p>
                          ))}
                        </div>
                        <p className="text-xs">{project.description}</p>
                      </li>
                      <div className="h-2"></div>
                    </div>
                  ))}
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
