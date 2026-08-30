import type { Metadata } from "next";
import Link from "next/link";
import {
  FaCode,
  FaServer,
  FaNetworkWired,
  FaTools,
  FaLaptopCode,
  FaArrowRight,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Sachin Kumar, an IT professional with extensive hands-on experience in technology, web development, systems and IT infrastructure.",
};

const expertise = [
  {
    icon: FaLaptopCode,
    title: "IT Infrastructure",
    description:
      "Hands-on experience with computer hardware, operating systems, software installation, configuration, maintenance and troubleshooting.",
  },
  {
    icon: FaNetworkWired,
    title: "Networking",
    description:
      "Practical exposure to networking technologies, connectivity, network resources, proxy configuration, FTP, SSH, Telnet and NAS.",
  },
  {
    icon: FaCode,
    title: "Web Development",
    description:
      "Experience with modern frontend and backend technologies including React, Next.js, Spring Boot, Express.js and RESTful web services.",
  },
  {
    icon: FaServer,
    title: "Systems & Support",
    description:
      "Supporting users, maintaining IT resources and resolving day-to-day technical issues across hardware, software and network environments.",
  },
  {
    icon: FaTools,
    title: "Technical Problem Solving",
    description:
      "A practical approach to identifying problems, understanding their root causes and implementing reliable technical solutions.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">

        {/* Decorative graphics */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">

          <div className="max-w-3xl">

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
              About Me
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Technology, experience
              <span className="block text-teal-400">
                and continuous learning.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              I am an IT professional with 15 years of
              experience working with technology, IT
              infrastructure, user support and web
              development.
            </p>

          </div>

          {/* Experience badge */}
          <div className="mt-12 flex items-center gap-5">

            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-teal-400/30 bg-teal-400/10">
              <span className="text-3xl font-bold text-teal-400">
                15+
              </span>
            </div>

            <div>
              <p className="font-semibold text-white">
                Years of Experience
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Practical IT experience and technical
                resource management
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Introduction */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">

          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:items-start">

            {/* Left */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
                My Background
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                A practical approach to technology
              </h2>
            </div>

            {/* Right */}
            <div className="space-y-5 text-lg leading-8 text-slate-600">

              <p>
                With 15 years of experience in the field of
                Information Technology, I have acquired a
                good amount of hands-on experience and
                technical resource knowledge.
              </p>

              <p>
                My professional journey has given me
                exposure to different aspects of IT,
                including computer hardware, operating
                systems, networking, software applications,
                IT infrastructure and web technologies.
              </p>

              <p>
                Alongside infrastructure and technical
                support, I have developed a strong interest
                in modern web technologies and software
                development. I enjoy learning new
                technologies and applying them to practical
                projects.
              </p>

              <p>
                My objective is to apply my technical
                knowledge and IT resource management skills
                in a progressive environment while
                continuing to grow professionally and
                personally.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* Expertise */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">

          <div className="mb-12 text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
              What I Work With
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Areas of Experience
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              A combination of infrastructure experience,
              technical support and modern software
              development.
            </p>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {expertise.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition group-hover:bg-teal-600 group-hover:text-white">
                    <Icon className="text-xl" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* Professional Approach */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">

          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-400">
                Professional Approach
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Learn. Solve. Build. Improve.
              </h2>

              <p className="mt-6 leading-7 text-slate-400">
                I believe that technology is most useful
                when it solves real problems. My approach
                combines continuous learning with practical
                implementation and systematic problem
                solving.
              </p>

              <p className="mt-4 leading-7 text-slate-400">
                I am comfortable working independently as
                well as as part of a team, adapting to new
                technologies and working within defined
                timelines.
              </p>

            </div>


            {/* Principles */}
            <div className="grid gap-4 sm:grid-cols-2">

              {[
                "Continuous Learning",
                "Problem Solving",
                "Team Collaboration",
                "Technical Support",
                "Reliable Execution",
                "Time Management",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-5"
                >
                  <span className="text-sm font-bold text-teal-400">
                    0{index + 1}
                  </span>

                  <p className="mt-2 font-medium text-slate-200">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
            Let's Connect
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Interested in my work?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
            Explore my technical experience, projects and
            articles, or get in touch to discuss an idea or
            opportunity.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="/experience"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
            >
              View Experience
              <FaArrowRight />
            </Link>

            <Link
              href="/posts"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-600"
            >
              Read My Articles
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}