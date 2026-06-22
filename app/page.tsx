import Link from "next/link";
import {
  PiPhone,
  PiEnvelopeSimple,
  PiLinkedinLogo,
  PiGithubLogo,
  PiGlobe,
} from "react-icons/pi";

/* ------------------------------------------------------------------ */
/*  Resume data                                                        */
/* ------------------------------------------------------------------ */

const profile = {
  name: "MUHAMMAD KAIF QURESHI",
  title: "Full Stack Developer · React · Next.js · React Native",
  location: "Karachi, Pakistan · Open to remote & relocation",
  phone: "+923182345206",
  email: "kaifqureshi.dev@gmail.com",
  portfolio: {
    label: "kaifqureshi.vercel.app",
    url: "https://kaifqureshi.vercel.app",
  },
  linkedin: {
    label: "Kaif Qureshi",
    url: "https://linkedin.com/in/mohammad-kaif-qureshi-77052a1a5/",
  },
  github: {
    label: "qureshikaif",
    url: "https://github.com/qureshikaif",
  },
};

const summary =
  "Full Stack Developer with over 2 years of professional experience building and shipping web and cross-platform mobile applications with React, Next.js, Node.js, and React Native. Hands-on with RESTful API design, JWT authentication, server-side rendering, and CI/CD pipelines, with production apps live on the App Store and Google Play. Adept at owning features end-to-end, with a focus on AI automation.";

const skills = [
  { label: "Languages", value: "JavaScript, TypeScript" },
  {
    label: "Frameworks",
    value: "React.js, Next.js, Node.js, Express.js, React Native, Expo",
  },
  {
    label: "Databases",
    value: "PostgreSQL, MySQL, MongoDB, Firebase, Supabase",
  },
  {
    label: "Version Control",
    value: "GitHub, GitLab, Bitbucket",
  },
];

const education = [
  {
    name: "Bahria University, Karachi Campus",
    date: "2022 – 2026",
    degree: "Bachelor of Information Technology",
    detail: "CGPA: 3.5 / 4.0",
    coursework: "Data Structures & Algorithms, OOP, DBMS, Java, C++",
  },
];

const certifications = [
  {
    name: "Meta Front-End Developer - Coursera",
    url: "https://coursera.org/share/09bb1187d2508e857cff8abd82d3a96f",
  },
  {
    name: "Web Development - Malaysian Learning Hub",
    url: "https://www.coursera.org/account/accomplishments/verify/FYDQ4CYEZ6GT",
  },
  {
    name: "Google Project Management - Coursera",
    url: "https://coursera.org/verify/professional-cert/LW026CYHFNM1",
  },
];

const achievements = [
  { text: "Winner - 'Code in the Dark', inter-university competition." },
  { text: "Top 10 finalist - Coder's Clash hackathon." },
  {
    pre: "Open-source contributor - shipped a new feature to the ",
    link: {
      label: "Plees Tracker",
      url: "https://vmiklos.hu/plees-tracker/",
    },
    post: " sleep-tracking app.",
  },
];

const additional = {
  languages: "Urdu (native), English (fluent)",
};

const experiences = [
  {
    name: "Zenithflow Tech",
    location: "Karachi, Pakistan",
    roles: [
      {
        designation: "Full Stack Developer",
        date: "February 2026 – Present",
        list: [
          "Develop and maintain 5+ full-stack web applications with Next.js, delivering scalable and performant solutions.",
          "Build RESTful APIs and integrate third-party services, streamlining internal workflows and cutting manual effort by ~30%.",
        ],
      },
      {
        designation: "React Native Developer",
        date: "July 2024 – September 2025",
        list: [
          "Built and maintained 3+ cross-platform mobile apps with React Native and Expo, delivering consistent user experiences across iOS and Android.",
          "Engineered EAS Build/Submit CI/CD pipelines, cutting release turnaround by ~50% across the Google Play and Apple App stores.",
        ],
      },
    ],
  },
  {
    name: "Bonded",
    location: "Karachi, Pakistan",
    roles: [
      {
        designation: "Next.js Developer",
        date: "September 2025 – February 2026",
        list: [
          "Built 5+ Claude Code plugins and integrated them into a Next.js dashboard.",
          "Reduced website-building time by ~60% by automating multi-step site generation with AI-driven Mastra workflows.",
          "Built 15+ reusable dashboard components and API integrations, cutting plugin configuration time by ~40%.",
        ],
      },
    ],
  },
  {
    name: "Cubicus.io",
    location: "Karachi, Pakistan",
    roles: [
      {
        designation: "Full Stack Developer",
        date: "July 2023 – July 2024",
        list: [
          "Built a Next.js dashboard with secure API integration and SSR, cutting load times by ~40% for real-time financial data visualization.",
          "Configured API rate limiting, JWT authentication, and automated CI/CD pipelines, reducing deployment time by 70%.",
        ],
      },
    ],
  },
];

const projects = [
  {
    name: "Beam Fitness",
    url: "https://play.google.com/store/apps/details?id=com.beamfitness.app",
    tech: "React Native, Expo, TanStack Query",
    bullets: [
      "Built a cross-platform fitness app with Expo, Gorhom Bottom Sheets, and React Hook Form.",
      "Published and maintained the app on the Google Play Store and Apple App Store (iOS).",
    ],
  },
  {
    name: "SF Business Solutions",
    url: "https://sfbusinesssolutions.com",
    tech: "Next.js, Resend, MongoDB",
    bullets: [
      "Built a consultancy website with Next.js (App Router) and the Shadcn UI component library.",
      "Designed a responsive, SEO-friendly layout using reusable, accessible components.",
    ],
  },
  {
    name: "MuzzGen",
    url: "https://play.google.com/store/apps/details?id=com.MuzzGen&hl=en",
    tech: "React Native, Expo, Unistyles",
    bullets: [
      "Built MuzzGen, a social networking app for Muslims, with React Native and Expo, styling the cross-platform UI with Unistyles.",
      "Implemented anonymous posting, an AI Islamic assistant, prayer times, and a Hijri calendar.",
    ],
  },
  {
    name: "Launchieve",
    url: "https://launchieve.com",
    tech: "Next.js, Framer Motion",
    bullets: [
      "Built and deployed a marketing website with Next.js, adding scroll and UI animations with Framer Motion.",
      "Integrated Calendly for appointment scheduling alongside responsive, reusable page sections.",
    ],
  },
  {
    name: "MHRM Traders",
    url: "https://mhrm-traders.vercel.app",
    tech: "Next.js, Supabase",
    bullets: [
      "Built a business website with Next.js (deployed on Vercel), backed by Supabase for data storage.",
      "Developed an admin dashboard to manage products and site content.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Reusable presentational pieces                                     */
/* ------------------------------------------------------------------ */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[14.5px] font-bold uppercase tracking-[0.12em] text-gray-900 mt-5 mb-2 border-b border-gray-400 pb-1">
      {children}
    </h2>
  );
}

function PageHeader() {
  return (
    <header className="mb-3 text-center">
      <h1 className="text-[30px] font-bold tracking-wide text-gray-900 leading-tight">
        {profile.name}
      </h1>
      <div className="flex flex-nowrap items-center justify-center gap-x-3 text-[13px] whitespace-nowrap text-gray-700 mt-1.5">
        <Link
          href={`tel:${profile.phone}`}
          className="inline-flex items-center gap-1 no-underline"
        >
          <PiPhone className="w-[15px] h-[15px] shrink-0 text-gray-600" />
          {profile.phone}
        </Link>
        <Link
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-1 no-underline"
        >
          <PiEnvelopeSimple className="w-[15px] h-[15px] shrink-0 text-gray-600" />
          {profile.email}
        </Link>
        <Link
          href={profile.portfolio.url}
          className="inline-flex items-center gap-1 no-underline"
        >
          <PiGlobe className="w-[15px] h-[15px] shrink-0 text-gray-600" />
          {profile.portfolio.label}
        </Link>
        <Link
          href={profile.linkedin.url}
          className="inline-flex items-center gap-1 no-underline"
        >
          <PiLinkedinLogo className="w-[15px] h-[15px] shrink-0 text-gray-600" />
          {profile.linkedin.label}
        </Link>
        <Link
          href={profile.github.url}
          className="inline-flex items-center gap-1 no-underline"
        >
          <PiGithubLogo className="w-[15px] h-[15px] shrink-0 text-gray-600" />
          {profile.github.label}
        </Link>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-100 py-8 print:bg-white print:py-0 text-gray-800">
      <article className="resume bg-white shadow-md print:shadow-none w-[210mm] px-[16mm] py-[14mm] print:p-0">
        <PageHeader />

        <SectionHeading>Professional Summary</SectionHeading>
        <p className="text-[14px] leading-relaxed text-gray-700 text-justify">
          {summary}
        </p>

        <SectionHeading>Technical Skills</SectionHeading>
        <ul className="space-y-1">
          {skills.map((s) => (
            <li key={s.label} className="text-[14px] leading-snug">
              <span className="font-semibold text-gray-900">{s.label}: </span>
              <span className="text-gray-700">{s.value}</span>
            </li>
          ))}
        </ul>

        <SectionHeading>Education</SectionHeading>
        {education.map((edu) => (
          <div key={edu.name} className="avoid-break">
            <div className="flex justify-between items-baseline">
              <h3 className="text-[15px] font-bold text-gray-900">
                {edu.name}
              </h3>
              <span className="text-[12.5px] text-gray-700">{edu.date}</span>
            </div>
            <p className="text-[14px] text-gray-700">
              {edu.degree} · {edu.detail}
            </p>
          </div>
        ))}

        <SectionHeading>Professional Experience</SectionHeading>
        <div className="space-y-4">
          {experiences.map((exp) => (
            <div key={exp.name} className="avoid-break">
              <div className="flex justify-between items-baseline">
                <h3 className="text-[15px] font-bold text-gray-900">
                  {exp.name}
                </h3>
                <span className="text-[12.5px] text-gray-700">
                  {exp.location}
                </span>
              </div>
              <div className="space-y-2 mt-1">
                {exp.roles.map((role, ri) => (
                  <div key={ri}>
                    <div className="flex justify-between items-baseline">
                      <p className="text-[14px] font-semibold italic text-gray-800">
                        {role.designation}
                      </p>
                      <span className="text-[12.5px] text-gray-700">
                        {role.date}
                      </span>
                    </div>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      {role.list.map((item, ii) => (
                        <li
                          key={ii}
                          className="text-[14px] leading-relaxed text-gray-700"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <SectionHeading>Projects</SectionHeading>
        <div className="space-y-3">
          {projects.map((p) => (
            <div key={p.name} className="avoid-break">
              <div className="flex justify-between items-baseline">
                <h3 className="text-[15px] font-bold text-gray-900">
                  {p.url ? (
                    <Link href={p.url} className="underline decoration-gray-400 decoration-[0.5px] underline-offset-2">
                      {p.name}
                    </Link>
                  ) : (
                    p.name
                  )}
                </h3>
                <span className="text-[12.5px] text-gray-700">{p.tech}</span>
              </div>
              <ul className="list-disc pl-5 space-y-1 mt-1">
                {p.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    className="text-[14px] leading-relaxed text-gray-700"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <SectionHeading>Certifications</SectionHeading>
        <ul className="list-disc pl-5 space-y-1">
          {certifications.map((c) => (
            <li key={c.name} className="text-[14px] text-gray-700">
              {c.url ? (
                <Link href={c.url} className="underline decoration-gray-400 decoration-[0.5px] underline-offset-2">
                  {c.name}
                </Link>
              ) : (
                c.name
              )}
            </li>
          ))}
        </ul>

        <SectionHeading>Achievements</SectionHeading>
        <ul className="list-disc pl-5 space-y-1">
          {achievements.map((a, i) => (
            <li key={i} className="text-[14px] text-gray-700">
              {a.link ? (
                <>
                  {a.pre}
                  <Link href={a.link.url} className="underline decoration-gray-400 decoration-[0.5px] underline-offset-2">
                    {a.link.label}
                  </Link>
                  {a.post}
                </>
              ) : (
                a.text
              )}
            </li>
          ))}
        </ul>

        <SectionHeading>Languages</SectionHeading>
        <p className="text-[14px] text-gray-700">{additional.languages}</p>
      </article>
    </main>
  );
}
