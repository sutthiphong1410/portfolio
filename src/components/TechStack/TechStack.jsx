'use client'

import Image from "next/image";


const TechStack = () => {
    
    const techs = [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    ];

    return (
        <>
            <div className="py-14  overflow-hidden max-w-5xl mx-auto">
                <div className="mb-8">
                    <h3 className="text-3xl text-primary font-bold text-center">Tech Stack</h3>
                </div>
                
                <div className="relative ">
                    <div className="flex animate-scroll ">
                        {/* First set */}
                        {techs.map((tech, index) => (
                            <div key={index} className="flex-shrink-0 mx-8 flex flex-col items-center gap-2 grayscale hover:grayscale-0">
                                <div className="w-16 h-16 flex items-center justify-center  bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <Image 
                                        src={tech.icon} 
                                        alt={tech.name}
                                        width={64}
                                        height={64}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="text-sm text-gray-600">{tech.name}</span>
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {techs.map((tech, index) => (
                            <div key={`duplicate-${index}`} className="flex-shrink-0 mx-8 flex flex-col items-center gap-2 grayscale hover:grayscale-0">
                                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <Image 
                                        src={tech.icon} 
                                        alt={tech.name}
                                        width={64}
                                        height={64}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="text-sm text-gray-600">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="relative -bottom-14 -left-0 right-0 w-full flex items-center justify-center">
                    
                        <div className="absolute left-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent to-gray-400 "></div>
                        <div className=" flex items-center gap-1">
                            <div className=" w-1 h-1 bg-gray-300 rounded-full animate-bounce duration-300"></div>
                            <div className=" w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce duration-300"></div>
                            <div className=" w-1 h-1 bg-gray-300 rounded-full animate-bounce duration-300"></div>
                        </div>
                        <div className="absolute -right-0 w-1/3 h-[1px] bg-gradient-to-l from-transparent to-gray-400 "></div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    animation: scroll 4s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </>
    )
}

export default TechStack;