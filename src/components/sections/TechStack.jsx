"use client";
import Image from "next/image";

const groups = [
  {
    label: "Programming Languages",
    techs: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        tip: "ES6+, async/await, DOM",
        strong: true,
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        tip: "Types, interfaces, generics",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        tip: "Scripting, data processing",
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        tip: "Basic syntax and web development",
      },
    ],
  },
  {
    label: "Database",
    techs: [
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        tip: "NoSQL, aggregation pipeline",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        tip: "Relational, joins, indexing",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        tip: "Queries, schema design",
      },
    ],
  },
  {
    label: "Frontend",
    techs: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        tip: "5+ projects — CRUD, Auth, Dashboard",
        strong: true,
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        tip: "SSR, SSG, App Router",
        strong: true,
      },
      {
        name: "Vue.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        tip: "Basic components and reactivity",
      },
      {
        name: "Tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        tip: "Utility-first, responsive design",
        strong: true,
      },
    ],
  },
  {
    label: "Backend",
    techs: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        tip: "REST APIs, Express, middleware",
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        tip: "Routing, error handling, MVC",
      },
    ],
  },
  {
    label: "Deployment",
    techs: [
      {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
        tip: "Frontend and serverless deployment",
        strong: true,
      },
      {
        name: "Netlify",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
        tip: "Static sites and serverless functions",
      },
      {
        name: "Github pages",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        tip: "Static site hosting via GitHub repos",
      },
    ],
  },
  {
    label: "Tools",
    techs: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        tip: "Branching, PRs, conflict resolution",
        strong: true,
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        tip: "Repos, issues, GitHub Actions",
        strong: true,
      },
      {
        name: "Prisma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
        tip: "ORM for Node.js and TypeScript",
      },
      {
        name: "Postman",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
        tip: "API testing and documentation",
      },
    ],
  },
];

const TechCard = ({ tech }) => (
  <div
    className={`group relative flex flex-col items-center gap-1.5 px-4 py-3 rounded-xl border transition-all duration-200
    bg-gray-50 dark:bg-neutral-800 border-gray-200 dark:border-neutral-700
    hover:-translate-y-1 hover:bg-white dark:hover:bg-neutral-900
    hover:shadow-sm cursor-default
    ${tech.strong ? "hover:border-violet-400 dark:hover:border-violet-500" : "hover:border-gray-300 dark:hover:border-neutral-500"}
  `}
  >
    {/* Tooltip */}
    <div
      className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150
      bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-600 rounded-lg px-3 py-2
      text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap z-10 shadow-md"
    >
      {tech.tip}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-200 dark:border-t-neutral-600" />
    </div>

    <Image
      src={tech.icon}
      alt={tech.name}
      width={36}
      height={36}
      className="object-contain transition-transform duration-200 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
    />
    <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors whitespace-nowrap">
      {tech.name}
    </span>
  </div>
);

const TechStack = () => (
  <>
    <section id="techstack" className="py-14 max-w-4xl mx-auto scroll-mt-20">
      <h3 className="text-3xl text-primary font-bold text-center mb-10">
        &lt;Technical Skills /&gt;
      </h3>

      <div className="grid grid-cols-2 gap-5">
        {groups.map((g) => (
          <div
            key={g.label}
            className="bg-gray-100 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl px-6 py-5"
          >
            <p className="text-[11px] font-medium tracking-widest text-black dark:text-gray-400 uppercase mb-4">
              {g.label}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {g.techs.map((t) => (
                <TechCard key={t.name} tech={t} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    <div className="flex items-center gap-3 mt-10">
      <div className="w-full flex items-center justify-around ">
        <div className=" w-1/3 h-[1px] bg-gradient-to-r from-transparent to-gray-400"></div>

        <div className="flex items-center gap-1 z-10">
          <div className=" w-1 h-1 bg-gray-300 rounded-full animate-bounce duration-300"></div>
          <div className=" w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce duration-300"></div>
          <div className=" w-1 h-1 bg-gray-300 rounded-full animate-bounce duration-300"></div>
        </div>

        <div className=" w-1/3 h-[1px] bg-gradient-to-l from-transparent to-gray-400"></div>
      </div>
    </div>
  </>
);

export default TechStack;
