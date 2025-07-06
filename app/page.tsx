import { PiGithubLogo, PiLinkedinLogo, PiPhone } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import Link from "next/link";

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
    titleOneValue: "3.5/4.0",
    titleTwo: "Skills:",
    titleTwoValue: "DSA, OOP, DBMS, Java, C++",
  },
  // {
  //   name: "Fazaia Degree College",
  //   date: "2020 - 2022",
  //   degree: "Computer Science",
  //   titleOne: "Grade:",
  //   titleOneValue: "A",
  //   titleTwo: "Skills:",
  //   titleTwoValue: "C, Linux, Networking",
  // },
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
    name: "Web Development - Malaysian Learning Hub",
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
  frameworks: ["React.js", "Next.js", "Node.js", "Express.js", "Expo"],
  sql: ["PostgreSQL", "MySQL"],
  nosql: ["MongoDB", "Firebase"],
  versioncontrol: ["GitHub", "GitLab", "Bitbucket"],
};

const experiences = [
  {
    name: "Zenithflow Tech",
    date: "July 2024 - May 2025",
    designation: "React Native Developer",
    list: [
      "Converted 10+ Figma designs into beautiful mobile apps and optimized responsiveness for 3+ different screen sizes including tablets.",
      "Developed cross-platform applications for iOS and Android enabling specialized data management and real-time updates.",
      "Reduced app crashes and cut average screen-load time by 400ms through state-management refactoring and automated test suites.",
      "Used Firebase Analytics to track feature usage and crashes, driving data-led decisions that improved app stability.",
    ],
  },
  {
    name: "Cubicus.io",
    date: "July 2023 - July 2024",
    designation: "Full Stack Developer",
    list: [
      "Integrated a frontend application with secure backend APIs for real-time financial data and interactive charts.",
      "Built cryptocurrency graphs and statistics features, ensuring optimized performance for large data sets.",
      "Deployed 4+ Node.js servers on AWS EC2 and Digital Ocean, achieving 99.9% uptime with automated monitoring.",
      "Coordinated with DevOps to automate nightly build-and-deploy pipelines, eliminating 5+ manual releases per week.",
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
    name: "Beam Fitness",
    url: "https://github.com/qureshikaif/adhd-coach-native",
    techStack: ["React Native"],
    description:
      "Built the Beam Fitness app with Expo, Gorhom Bottom Sheets, React Hook Form, and Tanstack Query.",
  },
  {
    name: "SF Business Solutions",
    url: "https://github.com/qureshikaif/adhd-coach-native",
    techStack: ["Next.js"],
    description:
      "SF Business Solutions is a website built with Next.js using App Router and Shadcn UI library for a consultancy firm.",
  },
  {
    name: "Wealth Way Trade",
    url: "https://github.com/qureshikaif/adhd-coach-native",
    techStack: ["Node.js & Express.js"],
    description:
      "Wealth Way Trade backend is built using Node.js/Express.js with JWT authentication, nodemailer integration, a modular architecture, and deployment on AWS EC2.",
  },
];

const additionalInfo = {
  languages: "Urdu (native); English (fluent).",
  certifications:
    "Web Development - Malaysian Learning Hub, Google Project Management - Coursera.",
  achievements:
    "Winner of 'Code in the Dark' in an inter-university competition. Top 10 finalist in Coder's Clash hackathon.",
  openSource:
    "Added a new feature to a popular Sleep Tracker mobile app. https://vmiklos.hu/plees-tracker/",
};

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <section className="bg-white p-12 min-h-screen max-w-4xl w-full print:w-full print:m-0">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-light text-gray-700 tracking-wide mb-4">
            MUHAMMAD KAIF QURESHI
          </h1>

          {/* Social Links */}
          <div className="flex justify-center mb-4 space-x-4">
            <div className="flex items-center space-x-1">
              <PiPhone className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700">+923182345206</span>
            </div>
            <div className="flex items-center space-x-1">
              <MdOutlineMail className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-700">
                kaifqureshi.dev@gmail.com
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <PiLinkedinLogo className="w-4 h-4 text-gray-600" />
              <Link
                href="https://linkedin.com/in/mohammad-kaif-qureshi-77052a1a5/"
                target="_blank"
                className="text-sm text-gray-700 hover:text-blue-600"
              >
                linkedin.com/in/mohammad-kaif-qureshi-77052a1a5/
              </Link>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="w-full h-px bg-gray-300 mb-3"></div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="col-span-4 space-y-8">
            {/* Skills */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 tracking-wide mb-2">
                SKILLS
              </h3>
              <div className="border-b border-gray-300 mb-3"></div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Frameworks:
                  </p>
                  <p className="text-sm text-gray-700">
                    {skills.frameworks.join(", ")}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Languages:
                  </p>
                  <p className="text-sm text-gray-700">
                    {skills.languages.join(", ")}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Version Control:
                  </p>
                  <p className="text-sm text-gray-700">
                    {skills.versioncontrol.join(", ")}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Database:
                  </p>
                  <p className="text-sm text-gray-700">
                    {[...skills.sql, ...skills.nosql].join(", ")}
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 tracking-wide mb-2">
                EDUCATION
              </h3>
              <div className="border-b border-gray-300 mb-3"></div>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index}>
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">
                      {edu.name.toUpperCase()}
                    </h4>
                    <p className="text-sm text-gray-700 mb-1">{edu.degree}</p>
                    <p className="text-sm text-gray-700 mb-1">
                      {edu.titleOne} {edu.titleOneValue}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 tracking-wide mb-2">
                ADDITIONAL
              </h3>
              <div className="border-b border-gray-300 mb-3"></div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Languages:
                  </p>
                  <p className="text-sm text-gray-700">
                    {additionalInfo.languages}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Certifications:
                  </p>
                  <p className="text-sm text-gray-700">
                    {additionalInfo.certifications}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Achievements:
                  </p>
                  <p className="text-sm text-gray-700">
                    {additionalInfo.achievements}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Open-source contribution:
                  </p>
                  <p className="text-sm text-gray-700 break-words">
                    Added a new feature to a popular Sleep Tracker mobile app.{" "}
                    <Link
                      href="https://vmiklos.hu/plees-tracker/"
                      target="_blank"
                      className="text-gray-700 hover:text-gray-900 underline"
                    >
                      https://vmiklos.hu/plees-tracker/
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-8 space-y-8">
            {/* Experience */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 tracking-wide mb-2">
                EXPERIENCE
              </h3>
              <div className="border-b border-gray-300 mb-3"></div>
              <div className="space-y-6">
                {experiences.map((experience, index) => (
                  <div key={index}>
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">
                      {experience.name.toUpperCase()} - Karachi, Pakistan
                    </h4>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm text-gray-700 italic">
                        {experience.designation}
                      </p>
                      <p className="text-sm text-gray-700">{experience.date}</p>
                    </div>
                    <ul className="text-sm text-gray-700 leading-relaxed list-disc pl-5 space-y-1">
                      {experience.list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 tracking-wide mb-2">
                PROJECTS
              </h3>
              <div className="border-b border-gray-300 mb-3"></div>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index}>
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">
                      {project.name.toUpperCase()} - {project.techStack[0]}
                    </h4>
                    <p className="text-sm text-gray-700">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
