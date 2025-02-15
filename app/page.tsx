import Link from "next/link";
import Divider from "./components/Divider";
import { FaExternalLinkAlt } from "react-icons/fa";
import { PiGithubLogo, PiLinkedinLogo, PiPhone } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";

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
    name: "Meta (Introduction to Front End development) - Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/FYDQ4CYEZ6GT",
  },
  // {
  //   name: "Elementary Programming With C - Aptech",
  //   url: "https://drive.google.com/file/d/1RMOlZN87uEfXgwaA2011Ld2M8OIyCU2e/view?usp=drive_link",
  // },
  {
    name: "Google Project Management - Coursera",
    url: "https://coursera.org/verify/professional-cert/LW026CYHFNM1",
  },
  {
    name: "CIT (Web Designing) - MLH",
    url: "https://drive.google.com/file/d/1AK_re7r0VUxKixzOSGxZsxl6J-8vPaWb/view?usp=drive_link",
  },
];

const skills = {
  languages: ["JavaScript", "TypeScript"],
  sql: ["PostgreSQL", "MSSQL", "MySQL"],
  frameworks: [
    "Expo",
    "Redux Toolkit",
    "Zustand",
    "React Hook Form",
    "Reanimated",
    "Tanstack Query",
  ],
  nosql: ["MongoDB", "Firebase"],
  versioncontrol: ["Github", "Bitbucket", "Gitlab"],
};

const experiences = [
  {
    name: "Zenithflow Tech",
    date: "July 2024 - Present",
    designation: "React Native Developer",
    list: [
      "Developed a cross-platform application for iOS and Android enabling specialized data management and real-time updates.",
      "Built a social media platform centered on fitness, featuring real-time workout sharing, community forums, and interactive class scheduling to boost user engagement and collaboration.",
      "Optimized state management and integrated robust testing practices for improved app stability and performance.",
    ],
  },
  {
    name: "Cubicus.io",
    date: "July 2023 - July 2024",
    designation: "Full Stack Developer",
    list: [
      "Integrated a frontend application with secure backend APIs for real-time financial data and interactive charts.",
      "Developed cryptocurrency graphs and statistics features, ensuring optimized performance for large data sets.",
      "Collaborated with cross-functional teams to design a dynamic platform, focusing on scalability, security, and user-friendly interfaces.",
    ],
  },
  // {
  //   name: "Freelancing",
  //   date: "March 2023 - Present",
  //   designation: "Freelancer",
  //   list: [
  //     "Built an agricultural IoT solution that tracks soil humidity and displays real-time statistics on a Firebase-powered dashboard.",
  //     "Customized cross-platform applications to client specifications, ensuring intuitive UI/UX and responsive design.",
  //     "Maintained regular communication with stakeholders to deliver reliable, scalable solutions under tight deadlines.",
  //   ],
  // },
];

const projects = [
  {
    name: "Pixpel.io",
    url: "https://drive.google.com/file/d/1bstIH9HEFoKuif-Zar26aD6VgCI8Zvir/view?usp=sharing",
    techStack: ["React Native | ", "Native Base"],
    description:
      "A web3 gaming and cryptocurrency platform using Nativewind, Native Base UI, and React Native.",
  },
  {
    name: "Bunny Books",
    url: "https://github.com/qureshikaif/adhd-coach-native",
    techStack: [
      "React Native | ",
      "TanStack Query | ",
      "React Hook Form | ",
      "Zod",
    ],
    description:
      "Rabbitry management app powered by Reanimated, Gesture Handler, React Navigation, and stylesheet-based UI.",
  },
  {
    name: "Beam Fitness",
    url: "https://github.com/qureshikaif/adhd-coach-native",
    techStack: [
      "Expo | ",
      "Gorhom BottomSheets | ",
      "TanStack Query | ",
      "React Hook Form | ",
      "Zod",
    ],
    description:
      "Fitness app built with Expo, Gorhom BottomSheets, and robust form/data handling via React Hook Form and TanStack Query.",
  },
];
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <section className="bg-gray-100 p-14 min-h-screen w-1/2 m-10 rounded-xl print:w-full print:m-0">
        <div className="flex justify-between items-center">
          <div className="flex flex-col w-full">
            <h1 className="text-3xl font-bold text-center w-full">
              Muhammad Kaif Qureshi
            </h1>
            <h2 className="text-xl font-light text-center">
              React Native Developer
            </h2>
          </div>
        </div>
        <Divider className="my-3 h-[1px]" />
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
        <Divider className="my-3 h-[0.5px]" />

        <div className="w-full h-full mt-2">
          <div className="py-1">
            <h1 className="uppercase text-sm font-semibold">Summary</h1>
            <Divider className="mb-2 h-[0.5px]" />
            <p className="text-xs">
              Accomplished React Native developer with a proven ability to
              transform complex business requirements into high-performance,
              user-friendly applications. Adept at optimizing code, designing
              intuitive UIs, and collaborating with cross-functional teams to
              deliver reliable, scalable solutions on time.
            </p>
          </div>
          <div>
            <h1 className="uppercase text-sm font-semibold mt-3">Skills</h1>
            <Divider className="mb-2 h-[0.5px]" />

            {/* Languages */}
            <div className="mb-2 flex">
              <h2 className="text-xs font-semibold">Languages:</h2>
              <ul className="flex gap-y-2 flex-wrap ps-2">
                {skills.languages.map((skill, index) => (
                  <li className="text-xs" key={index}>
                    {skill}
                    &nbsp;
                    {index < skills.languages.length - 1 && `|`}
                    &nbsp;
                  </li>
                ))}
              </ul>
            </div>

            {/* SQL */}
            <div className="mb-2 flex">
              <h2 className="text-xs font-semibold">SQL:</h2>
              <ul className="flex gap-y-2 flex-wrap ps-2">
                {skills.sql.map((skill, index) => (
                  <li className="text-xs" key={index}>
                    {skill}
                    &nbsp;
                    {index < skills.sql.length - 1 && "|"}
                    &nbsp;
                  </li>
                ))}
              </ul>
            </div>

            {/* NoSQL */}
            <div className="mb-2 flex">
              <h2 className="text-xs font-semibold">NoSQL:</h2>
              <ul className="flex gap-y-2 flex-wrap ps-2">
                {skills.nosql.map((skill, index) => (
                  <li className="text-xs" key={index}>
                    {skill}
                    &nbsp;
                    {index < skills.nosql.length - 1 && "|"}
                    &nbsp;
                  </li>
                ))}
              </ul>
            </div>

            {/* Version Control */}
            <div className="mb-2 flex">
              <h2 className="text-xs font-semibold">Version Control:</h2>
              <ul className="flex gap-y-2 flex-wrap ps-2">
                {skills.versioncontrol.map((skill, index) => (
                  <li className="text-xs" key={index}>
                    {skill}
                    &nbsp;
                    {index < skills.versioncontrol.length - 1 && "|"}
                    &nbsp;
                  </li>
                ))}
              </ul>
            </div>

            {/* Frameworks/Libraries */}
            <div className="mb-2 flex">
              <h2 className="text-xs font-semibold">Framework/Libraries:</h2>
              <ul className="flex gap-y-2 flex-wrap ps-2">
                {skills.frameworks.map((skill, index) => (
                  <li className="text-xs" key={index}>
                    {skill}
                    &nbsp;
                    {index < skills.frameworks.length - 1 && "|"}
                    &nbsp;
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h1 className="uppercase font-semibold text-sm mt-3">Experience</h1>
          <Divider className="mb-2 h-[0.5px]" />

          {experiences.map((experience, index) => (
            <div key={index} className="my-1">
              <div className="flex items-center justify-between">
                <h1 className="text-xs font-semibold">{experience.name}</h1>
                <p className="text-xsm mb-1">
                  {experience.date} | {experience.designation}
                </p>
              </div>
              <ul className="text-xs list-disc pl-7">
                {experience.list.map((list, idx) => (
                  <li key={idx} className="mb-[0.15rem]">
                    {list}
                  </li>
                ))}
              </ul>
              <div className="h-2"></div>
            </div>
          ))}
          <h1 className="uppercase text-sm font-semibold mt-3">Education</h1>
          <Divider className="mb-2 h-[0.5px]" />
          {education.map((edu, index) => (
            <div className="py-1" key={index}>
              <div className="flex items-center justify-between">
                <h1 className="text-xs font-semibold">{edu.name}</h1>
                <p className="text-xsm ml-2">{edu.date}</p>
              </div>
              <p className="text-xsm">
                {edu.titleOne} {edu.titleOneValue}
              </p>
            </div>
          ))}
          <div className="py-1">
            <h1 className="uppercase text-sm font-semibold mt-3">
              Certifications
            </h1>
            <Divider className="mb-2 h-[0.5px]" />
            <ul className="list-disc pl-5 space-y-1 mt-3 mb-1">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <li className="text-xs">{cert.name}</li>
                  <Link href={cert.url} target="_blank">
                    <FaExternalLinkAlt size={10} />
                  </Link>
                </div>
              ))}
            </ul>
          </div>

          <div>
            <div>
              <h1 className="font-semibold text-sm mt-3">PROJECTS</h1>
              <Divider className="mb-2 h-[0.5px]" />
              <ul className="list-disc pl-7 space-y-1">
                {projects.map((project, index) => (
                  <div key={index}>
                    <li className="text-xs">
                      <p className="flex items-center font-semibold">
                        {project.name}
                        {/* <Link
                          href={project.url}
                          target="_blank"
                          className="ml-2"
                        >
                          <FaExternalLinkAlt size={10} />
                        </Link> */}
                      </p>
                      <p>{project.description}</p>
                    </li>
                    <div className="h-2"></div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
