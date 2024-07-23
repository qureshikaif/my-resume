import Image from "next/image";
import Link from "next/link";
import Divider from "./components/Divider";
import { FaExternalLinkAlt } from "react-icons/fa";
import { PiGithubLogo, PiGlobe, PiLinkedinLogo, PiPhone } from "react-icons/pi";
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
  {
    name: "The Educators",
    date: "2009 - 2020",
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
  // {
  //   name: "Theoretical understanding of HTML - SoloLearn",
  //   url: "https://www.sololearn.com/Certificate/CT-AQDIYOG4/png",
  // },
  // {
  //   name: "Theoretical understanding of CSS - SoloLearn",
  //   url: "https://www.sololearn.com/Certificate/CT-6DY9L5PF/png",
  // },
  {
    name: "Elementary Programming With C - Aptech",
    url: "https://drive.google.com/file/d/1RMOlZN87uEfXgwaA2011Ld2M8OIyCU2e/view?usp=drive_link",
  },
  {
    name: "CIT (Web Designing) - MLH",
    url: "https://drive.google.com/file/d/1AK_re7r0VUxKixzOSGxZsxl6J-8vPaWb/view?usp=drive_link",
  },
  // {
  //   name: "Coder's Clash - BUCIS",
  //   url: "https://drive.google.com/file/d/1gI4aNP7Ytrcosb1pjO3Bix9qSZYdQQX_/view?usp=drivesdk",
  // },
];

const skills = {
  devops: ["AWS", "SSL Certification", "CI/CD Tools"],
  languages: [
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Solidity",
    "SQL (PostgreSQL, MSSQL, MYSQL)",
  ],
  frameworks: [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Bootstrap",
    "React Native",
    "Redux Toolkit",
    "Zustand",
    "Shadcn UI",
    "Next UI",
  ],
  cms: ["Wordpress", "Webflow"],
  nosql: ["MongoDB", "Firebase"],
  versioncontrol: ["Github", "Bitbucket", "Gitlab"],
};

const experiences = [
  {
    name: "Cubicus.io",
    date: "July 2023 - July 2024",
    designation: "Full Stack Developer",
    // list: [
    //   "Developed responsive front-end interfaces using React.js and Next.js, increasing user engagement by 25%.",
    //   "Built and maintained scalable back-end systems with Node.js and Express, reducing server downtime by 30%.",
    //   "Managed Postgres databases, deploying on AWS RDS and Neon DB, improving query performance by 40%.",
    //   "Implemented CI/CD pipelines, improving deployment efficiency and reliability by 50%.",
    //   "Conducted code reviews and mentored new developers, reducing code-related issues by 35%.",
    //   "Collaborated with design teams to implement UI/UX improvements, enhancing overall application usability.",
    // ],
    list: [
      "Developed beautiful front-end interfaces using React.js and Next.js.",
      // "Leveraged Next.js for improved SEO performance.",
      "Built scalable back-end systems using Node.js and Express server.",
      "Successfully deployed applications on AWS EC2 and Digital Ocean.",
      // "Managed Postgres databases, deploying on various platforms including Neon DB and AWS RDS.",
      "Worked on blockchain technology, specifically Solidity smart contracts for ERC721 tokens.",
      "Applied SSL certification on a backend Node server on an EC2 instance using Caddy and nip.io.",
    ],
  },
  {
    name: "Freelancing",
    date: "March 2023 - Present",
    designation: "Freelancer",
    // list: [
    //   "Designed and implemented custom themes and layouts for clients using Webflow and WordPress Elementor, boosting client satisfaction by 20%.",
    //   "Utilized Webflow’s visual interface to create complex animations and interactions, increasing average session duration by 15%.",
    //   "Collaborated with clients to deliver tailored web solutions, achieving a 95% client retention rate.",
    //   "Optimized website performance and SEO, increasing site traffic by 30%.",
    //   "Integrated third-party APIs and services, enhancing website functionality and user experience by 25%.",
    // ],
    list: [
      "Designed and implemented custom themes and layouts for clients using Webflow and WordPress Elementor.",
      "Ensured responsive design for optimal viewing across multiple devices.",
      "Utilized Webflow’s rich visual interface to create complex animations and interactions.",
      "Implemented triggers and animations to enhance user experience and engagement.",
      // "Used timed animations to control the sequence and timing of animations.",
      // "Worked with multi-step animations to create complex, layered effects.",
    ],
  },
];

const projects = [
  // {
  //   name: "Summare - AI",
  //   url: "https://summare.ai",
  //   techStack: ["Next.js 13 | ", "App Router | ", "Next UI"],
  //   description:
  //     "Summare.ai is a web app for reading articles. It utilizes Next.js 13, App Router, and Next UI to provide seamless navigation and a user-friendly interface.",
  // },
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
    name: "Grande Cercle",
    url: "https://grandcercle.asban.dev",
    techStack: ["WordPress Elementor | ", "Custom CSS"],
    description:
      "Grande Cercle is a conference information site. Created with WordPress Elementor and custom CSS for responsive and interactive design. This website is fully responsive for all screen sizes.",
  },
  {
    name: "Pixpel.io",
    url: "https://drive.google.com/file/d/1bstIH9HEFoKuif-Zar26aD6VgCI8Zvir/view?usp=sharing",
    techStack: ["React Native | ", "Native Base"],
    description:
      "Pixpel.io is a web3 gaming and cryptocurrency platform. Built with React Native and Native Base. This project uses Nativewind for styling along with Native Base for UI components.",
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
      <section className="bg-gray-100 p-16 min-h-screen w-1/2 m-10 rounded-xl print:w-full print:m-0">
        <div className="flex justify-between items-center">
          <div className="flex flex-col w-full">
            <h1 className="text-3xl font-bold text-center w-full">
              Muhammad Kaif Qureshi
            </h1>
            {/* <h2 className="text-xl font-light text-center">
              Software Developer
            </h2> */}
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
                <h1 className="text-xsm">{link.value}</h1>
                {/* <Link href={link.url} target="_blank" className="text-xs">
                  <FaExternalLinkAlt size={10} />
                </Link> */}
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
              Experienced full-stack software developer with a good track record
              of addressing complex business requirements and overcoming
              challenges to deliver polished and user-friendly software
              solutions.
            </p>
          </div>
          <div>
            <h1 className="uppercase text-sm font-semibold mt-3">Skills</h1>
            <Divider className="mb-2 h-[0.5px]" />
            <div className="mb-2 flex">
              <h2 className="text-xs font-semibold">Languages:</h2>
              <ul className="flex gap-y-2 flex-wrap ps-2">
                {skills.languages.map((skill, index) => (
                  <li className="text-xs" key={index}>
                    {skill} |&nbsp;
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className="mb-2 flex">
              <h2 className="text-xs font-semibold">Framework/Libraries:</h2>
              <ul className="flex gap-y-2 flex-wrap ps-2">
                {skills.frameworks.map((skill, index) => (
                  <li className="text-xs" key={index}>
                    {skill} |&nbsp;
                  </li>
                ))}
              </ul>
            </div> */}
            <div className="mb-2 flex">
              <h2 className="text-xs font-semibold">DevOps:</h2>
              <ul className="flex gap-y-2 flex-wrap ps-2">
                {skills.devops.map((skill, index) => (
                  <li className="text-xs" key={index}>
                    {skill} |&nbsp;
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-2 flex">
              <h2 className="text-xs font-semibold">CMS/Website Builders:</h2>
              <ul className="flex gap-y-2 flex-wrap ps-2">
                {skills.cms.map((skill, index) => (
                  <li className="text-xs" key={index}>
                    {skill} |&nbsp;
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-2 flex">
              <h2 className="text-xs font-semibold">NoSQL:</h2>
              <ul className="flex gap-y-2 flex-wrap ps-2">
                {skills.nosql.map((skill, index) => (
                  <li className="text-xs" key={index}>
                    {skill} |&nbsp;
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-2 flex">
              <h2 className="text-xs font-semibold">Version Control:</h2>
              <ul className="flex gap-y-2 flex-wrap ps-2">
                {skills.versioncontrol.map((skill, index) => (
                  <li className="text-xs" key={index}>
                    {skill} |&nbsp;
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
                {experience.list.map((list, index) => (
                  <li key={index} className="mb-[0.15rem]">
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
            <div className="space-y-4 py-1" key={index}>
              <div className="flex items-center justify-between">
                <h1 className="text-xs font-semibold">{edu.name}</h1>
                <p className="text-xsm ml-2">{edu.date}</p>
              </div>
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
                  <Link href={cert.url}>
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
                        <Link
                          href={project.url}
                          target="_blank"
                          className="ml-2"
                        >
                          <FaExternalLinkAlt href={project.url} size={10} />
                        </Link>
                      </p>
                      {/* <div className="flex">
                        {project.techStack.map((tech, idx) => (
                          <p key={idx} className="text-xsm mb-1">
                            {tech}&nbsp;
                          </p>
                        ))}
                      </div> */}
                      <p className="text-xs">{project.description}</p>
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
