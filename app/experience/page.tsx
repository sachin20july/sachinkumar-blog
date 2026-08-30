import type { Metadata } from "next";
import Link from "next/link";
import {
  FaBriefcase,
  FaLaptopCode,
  FaServer,
  FaNetworkWired,
  FaTools,
  FaArrowRight,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience in Information Technology, technical support, IT infrastructure, hardware, networking and web technologies.",
};

const experiences = [
  {
    company: "APEEJAY SCHOOL, NOIDA",
    role: "Computer Lab Technician",
    period: "July 2011 – Present",
    duration: "15+ Years",
    icon: FaLaptopCode,

    description:
      "Working in the field of Information Technology with responsibility for maintaining computer systems, supporting users and managing IT resources.",

    responsibilities: [
      "Computer hardware and software troubleshooting",
      "Installation and configuration of operating systems and applications",
      "Computer laboratory management and maintenance",
      "Technical support for users and IT resources",
      "Network and connectivity troubleshooting",
      "Management and maintenance of computer peripherals",
      "Supporting day-to-day IT operations",
    ],

    technologies: [
      "Windows",
      "Ubuntu",
      "Computer Hardware",
      "Networking",
      "Microsoft Office",
      "IT Support",
    ],
  },

  {
    company: "NIIT Smart Serve Ltd, Gurugram",
    role: "Senior Executive",
    period: "June 2008 – June 2011",
    duration: "3 Years",
    icon: FaServer,

    description:
      "Worked as a Senior Executive with responsibilities involving technical operations, user support and IT-related activities.",

    responsibilities: [
      "Technical support and troubleshooting",
      "Hardware and software support",
      "User assistance and issue resolution",
      "IT resource management",
      "System configuration and maintenance",
      "Coordination of day-to-day technical activities",
    ],

    technologies: [
      "Windows",
      "Hardware",
      "Networking",
      "Technical Support",
      "IT Operations",
    ],
  },
];

const highlights = [
  {
    icon: FaLaptopCode,
    title: "IT Support",
    text: "Hands-on experience supporting systems, users and IT resources.",
  },
  {
    icon: FaNetworkWired,
    title: "Networking",
    text: "Practical experience with network connectivity and troubleshooting.",
  },
  {
    icon: FaTools,
    title: "Troubleshooting",
    text: "Systematic approach to identifying and resolving technical issues.",
  },
  {
    icon: FaServer,
    title: "Infrastructure",
    text: "Experience managing hardware, software and IT infrastructure.",
  },
];

function SkillTerminalBlock({
  command,
  title,
  skills,
}: {
  command: string;
  title: string;
  skills: string[];
}) {
  return (
    <div className="bg-[#0d131a] p-6 transition duration-300 hover:bg-[#111a22] md:p-7">

      <p className="text-xs text-slate-600">
        ./skills/{command}
      </p>

      <h3 className="mt-3 text-lg font-semibold text-slate-200">
        {title}
      </h3>

      <div className="mt-5 space-y-2">

        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-3 text-sm text-slate-400"
          >

            <span className="text-teal-500">
              ›
            </span>

            <span className="transition hover:text-teal-300">
              {skill}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-950 text-white">

        {/* Decorative background */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />

        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">

          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400">
                <FaBriefcase />
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
                Professional Experience
              </p>

            </div>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Experience built through
              <span className="block text-teal-400">
                practical technology.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Over the years, I have worked across IT
              support, infrastructure, hardware, software,
              networking and technology operations.
            </p>

          </div>


          {/* Experience statistic */}
          <div className="mt-12 flex flex-wrap gap-4">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-7 py-5">

              <p className="text-3xl font-bold text-teal-400">
                15+
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Years in IT
              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-7 py-5">

              <p className="text-3xl font-bold text-teal-400">
                2
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Professional Roles
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          EXPERIENCE TIMELINE
      ========================================================= */}
      <section className="bg-white">

        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">

          {/* Section heading */}
          <div className="mb-16">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
              Career Journey
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Professional Experience
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              A timeline of my professional journey and
              hands-on experience in Information Technology.
            </p>

          </div>


          {/* Timeline */}
          <div className="relative">

            {/* LEFT TIMELINE LINE */}
            <div className="absolute left-[23px] top-0 hidden h-full w-px bg-slate-200 md:block" />


            <div className="space-y-16">

              {experiences.map((experience, index) => {

                const Icon = experience.icon;

                return (
                  <div
                    key={experience.company}
                    className="relative md:pl-20"
                  >

                    {/* Timeline Icon */}
                    <div className="absolute left-0 top-0 hidden h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-teal-600 text-white shadow-md md:flex">
                      <Icon />
                    </div>


                    {/* Experience Card */}
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg md:p-9">

                      {/* Header */}
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                        <div>

                          <p className="text-sm font-semibold uppercase tracking-wide text-teal-600">
                            {experience.period}
                          </p>

                          <h3 className="mt-2 text-2xl font-bold text-slate-900">
                            {experience.role}
                          </h3>

                          <p className="mt-1 font-medium text-slate-600">
                            {experience.company}
                          </p>

                        </div>


                        {/* Duration */}
                        <div className="self-start rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700">
                          {experience.duration}
                        </div>

                      </div>


                      {/* Description */}
                      <p className="mt-6 max-w-3xl leading-7 text-slate-600">
                        {experience.description}
                      </p>


                      {/* Responsibilities */}
                      <div className="mt-8">

                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                          Key Responsibilities
                        </h4>

                        <div className="mt-4 grid gap-3 md:grid-cols-2">

                          {experience.responsibilities.map(
                            (responsibility) => (
                              <div
                                key={responsibility}
                                className="flex gap-3"
                              >

                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />

                                <p className="text-sm leading-6 text-slate-600">
                                  {responsibility}
                                </p>

                              </div>
                            )
                          )}

                        </div>

                      </div>


                      {/* Technologies */}
                      <div className="mt-8 border-t border-slate-200 pt-6">

                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                          Areas & Technologies
                        </h4>

                        <div className="mt-4 flex flex-wrap gap-2">

                          {experience.technologies.map(
                            (technology) => (
                              <span
                                key={technology}
                                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
                              >
                                {technology}
                              </span>
                            )
                          )}

                        </div>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          EXPERIENCE HIGHLIGHTS
      ========================================================= */}
      <section className="bg-slate-50">

        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">

          <div className="mb-12 text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
              Expertise
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              What My Experience Has Taught Me
            </h2>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {highlights.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition group-hover:bg-teal-600 group-hover:text-white">

                    <Icon className="text-lg" />

                  </div>

                  <h3 className="mt-5 font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>

                </div>
              );

            })}

          </div>

        </div>
      </section>

            {/* =========================================================
    TECHNICAL PROFILE
========================================================= */}
<section className="relative overflow-hidden bg-[#080d12] text-white">

  {/* subtle background grid */}
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.035]"
    style={{
      backgroundImage:
        "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)",
      backgroundSize: "40px 40px",
    }}
  />

  <div className="relative mx-auto max-w-6xl px-6 py-24">

    {/* =====================================================
        HEADER
    ====================================================== */}

    <div className="mb-14">

      <div className="flex items-center gap-3">

        <span className="h-2 w-2 rounded-full bg-teal-400 shadow-[0_0_12px_rgba(45,212,191,0.8)]" />

        <span className="font-mono text-xs uppercase tracking-[0.3em] text-teal-400">
          Technical Profile
        </span>

      </div>

      <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
        Technology is not just a skill.
        <span className="block text-slate-500">
          It is a continuous journey.
        </span>
      </h2>

    </div>


    {/* =====================================================
        TERMINAL WINDOW
    ====================================================== */}

    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#0d131a] shadow-2xl">


      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-[#111820] px-5 py-3">

        <div className="flex items-center gap-2">

          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

        </div>

        <span className="font-mono text-xs text-slate-600">
          technical-profile
        </span>

        <span className="w-12" />

      </div>


      {/* Terminal Body */}
      <div className="p-6 font-mono md:p-10">


        {/* Command 1 */}
        <div className="mb-10">

          <p className="text-sm text-teal-400">
            <span className="text-slate-600">$</span>{" "}
            whoami
          </p>

          <p className="mt-2 text-sm text-slate-300">
            sachin-kumar / IT-professional
          </p>

        </div>


        {/* Command 2 */}
        <div className="mb-10">

          <p className="text-sm text-teal-400">
            <span className="text-slate-600">$</span>{" "}
            experience
          </p>

          <p className="mt-2 text-2xl font-bold text-slate-200">
            15+ years
          </p>

        </div>


        {/* Command 3 */}
        <div>

          <p className="text-sm text-teal-400">
            <span className="text-slate-600">$</span>{" "}
            skills --list
          </p>


          {/* Skills Grid */}
          <div className="mt-7 grid gap-px overflow-hidden rounded-xl border border-slate-800 bg-slate-800 md:grid-cols-2">


            {/* FRONTEND */}
            <SkillTerminalBlock
              command="frontend"
              title="Frontend"
              skills={[
                "HTML",
                "CSS",
                "Bootstrap",
                "JavaScript",
                "jQuery",
                "Ajax",
                "React",
                "React Native",
                "React Native Paper",
                "Material-UI",
                "Tailwind CSS",
              ]}
            />


            {/* BACKEND */}
            <SkillTerminalBlock
              command="backend"
              title="Backend"
              skills={[
                "Servlet",
                "JSP",
                "Spring Boot",
                "RESTful Web Services",
                "Next.js",
                "Express.js",
              ]}
            />


            {/* SYSTEMS */}
            <SkillTerminalBlock
              command="systems"
              title="Operating Systems & Hardware"
              skills={[
                "Windows 10",
                "Windows 11",
                "Ubuntu 20.04",
                "Ubuntu 22.04",
                "HP Desktop / Laptop",
                "Lenovo Desktop / Laptop",
              ]}
            />


            {/* NETWORKING */}
            <SkillTerminalBlock
              command="network"
              title="Networking"
              skills={[
                "Email Clients",
                "Proxy Settings",
                "FTP",
                "SSH",
                "Telnet",
                "NAS",
              ]}
            />


            {/* SOFTWARE */}
            <SkillTerminalBlock
              command="applications"
              title="Software Applications"
              skills={[
                "Microsoft Office",
                "CorelDraw",
                "Outlook",
                "Google Apps",
                "Mozilla Firefox",
                "Chrome",
              ]}
            />


            {/* TOOLS */}
            <SkillTerminalBlock
              command="tools"
              title="Libraries & Practices"
              skills={[
                "DataTables",
                "Design Patterns",
                "Canva",
              ]}
            />

          </div>

        </div>


        {/* Cursor */}
        <div className="mt-8 flex items-center gap-2 text-sm text-teal-400">

          <span className="text-slate-600">
            $
          </span>

          <span className="h-4 w-2 animate-pulse bg-teal-400" />

        </div>

      </div>

    </div>


    {/* =====================================================
        CERTIFICATION
    ====================================================== */}

    <div className="mt-8 rounded-2xl border border-slate-800 bg-[#0d131a] p-6 md:p-8">

      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

        <div>

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal-400">
            Certification
          </p>

          <h3 className="mt-2 text-lg font-semibold text-slate-200">
            Computer Hardware Repair & Maintenance
          </h3>

        </div>

        <div className="rounded-lg border border-slate-800 px-4 py-2 font-mono text-sm text-slate-400">
          3 Months
        </div>

      </div>

    </div>


    {/* =====================================================
        CLOSING
    ====================================================== */}

    <div className="mt-24 text-center">

      <div className="mx-auto mb-8 h-px w-20 bg-teal-500/50" />

      <p className="font-serif text-xl font-semibold tracking-wide text-teal-400 md:text-2xl">
        सा विद्या या विमुक्तये
      </p>

      <p className="mt-4 text-sm italic text-slate-500">
        That is true knowledge which liberates.
      </p>

    </div>

  </div>

</section>
     

    </main>
  );
}