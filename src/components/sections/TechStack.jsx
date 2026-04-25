"use client";
import Image from "next/image";

const groups = [
  {
    label: "Programming Languages",
    techs: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
    ],
  },
  {
    label: "Database",
    techs: [
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
  },
  {
    label: "Frontend",
    techs: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Vue.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      },
      {
        name: "Tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },
  {
    label: "Backend",
    techs: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
    ],
  },
  {
    label: "Deployment",
    techs: [
      {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      },
      {
        name: "Netlify",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
      },
      {
        name: "Github pages",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
    ],
  },
  {
    label: "Tools",
    techs: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Prisma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
      },
      {
        name: "Postman",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
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
  hover:border-violet-400 dark:hover:border-violet-500" 
  `}
  >
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
            className="bg-gray-100 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 shadow-md rounded-2xl px-6 py-5"
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
