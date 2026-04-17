"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const About = () => {
  const profile_black = "/assets/profile_black.png";
  const profile_white = "/assets/profile_white.png";

  return (
    <>
      <div id="about" className="py-14 px-4 scroll-mt-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-5xl mx-auto relative">
          <div className="space-y-6 mx-auto">
            <h3 className="text-3xl font-bold text-primary">
              &lt;About Me /&gt;
            </h3>
            <div className="text-gray-500 space-y-4 leading-relaxed">
              <p>
                I'm a student developer from the Philippines with a deep
                curiosity about how things work — the why's and how's of things.
              </p>
              <p>
                I started messing with code when I was 14. I didn't understand
                half of what I was doing, but I knew I love it, and that hasn't
                changed.
              </p>
              <p>
                These days, I focus on full-stack development with a backend
                preference. I care about writing clean, efficient code that
                solves real problems.
              </p>
            </div>
            <div className="flex flex-wrap text-sm gap-2">
              <Link
                href="https://github.com/yourusername"
                className="px-4 py-2 bg-black text-white dark:border dark:border-gray-400 rounded-full flex gap-2 items-center hover:bg-gray-800 transition-colors"
              >
                <FaGithub />
                <span>GitHub</span>
              </Link>

              <Link
                href="https://twitter.com/yourusername"
                className="px-4 py-2 hover:bg-gray-200   dark:hover:bg-gray-500 transition-colors text-black dark:text-white rounded-full flex gap-2 items-center"
              >
                <FaXTwitter />
                <span>X (Twitter)</span>
              </Link>

              <Link
                href="https://linkedin.com/in/yourusername"
                className="px-4 py-2 hover:bg-gray-200 dark:border-gray-400  dark:hover:bg-gray-500 border border-gray-200 transition-colors text-black dark:text-white  rounded-full flex gap-2 items-center"
              >
                <FaLinkedinIn />
                <span>LinkedIn</span>
              </Link>

              <Link
                href="/contact"
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors text-black rounded-full flex gap-2 items-center"
              >
                <CiMail />
                <span>Contact Me</span>
              </Link>
            </div>
          </div>

          <div className="flex-shrink-0">
            <Image
              src={profile_black}
              alt="Profile picture"
              width={300}
              height={300}
              className="rounded-2xl  shadow-2xl dark:hidden"
            />
            <Image
              src={profile_white}
              alt="Profile picture"
              width={300}
              height={300}
              className="rounded-2xl shadow-gray-700 shadow-2xl hidden dark:block "
            />
          </div>
          <div className="absolute -bottom-12 w-full flex items-center justify-center">
            <div className="absolute left-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent to-gray-400 opacity-100"></div>
            <div className="absolute flex items-center gap-1">
              <div className=" w-1 h-1 bg-gray-300 rounded-full animate-bounce duration-300"></div>
              <div className=" w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce duration-300"></div>
              <div className=" w-1 h-1 bg-gray-300 rounded-full animate-bounce duration-300"></div>
            </div>
            <div className="absolute right-0 w-1/3 h-[1px] bg-gradient-to-l from-transparent to-gray-400 opacity-100"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
