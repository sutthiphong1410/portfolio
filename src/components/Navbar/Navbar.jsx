"use client";
import Link from "next/link";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    toggleTheme();
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      setTheme("light");
    } else {
      html.classList.add("dark");
      setTheme("dark");
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full  backdrop-blur-md z-50 ">
        <div className="py-4 text-black dark:text-white relative">
          <div className="flex items-center justify-between  max-w-5xl mx-auto">
            <div className="font-bold text-primary text-2xl">SW</div>
            <div className="flex gap-8 text-sm items-center justify-center">
              <Link
                href="#home"
                className="hover:border-b hover:border-purple-400"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="hover:border-b hover:border-purple-400"
              >
                About
              </Link>
              <Link
                href="#techstack"
                className="hover:border-b hover:border-purple-400"
              >
                TechStack
              </Link>
              <Link
                href="#myproject"
                className="hover:border-b hover:border-purple-400"
              >
                Project
              </Link>

              <div
                className="border border-dashed border-gray-500 p-2 rounded-full  text-gray-300 cursor-pointer
                                                    transition-all duration-300 ease-in-out 
                                                    hover:rotate-180 hover:scale-110 hover:border-purple-400
                                                    active:scale-95 active:rotate-90
                                                    "
                onClick={toggleTheme}
              >
                {theme === "dark" ? (
                  <MdOutlineWbSunny className="text-lg text-gray-600 dark:text-white transition-all duration-300" />
                ) : (
                  <IoMoonOutline className="text-lg text-gray-600 transition-all duration-300" />
                )}
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 w-full flex items-center justify-center">
            <div className="absolute left-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent to-gray-400 opacity-100"></div>
            <div className="absolute right-0 w-1/2 h-[1px] bg-gradient-to-l from-transparent to-gray-400 opacity-100"></div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Navbar;
