"use client";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="w-full">
        <hr className="text-gray-500" />
        <div className="max-w-5xl mx-auto p-6 text-gray-500 flex justify-between">
          <div>
            <h1 className="text-xl font-bold text-primary">SW</h1>
            <p className="text-sm text-gray-400">
              © 2026 Sutthiphong Wongsaart. All rights reserved.
            </p>
          </div>
          <div>
            <div className="flex gap-4 mt-4">
              <div className="bg-gray-300 dark:bg-gray-600 p-3 rounded-full hover:bg-purple-500 transition-colors duration-300 cursor-pointer">
                <FaGithub className=" text-white" />
              </div>
              <div className="bg-gray-300 dark:bg-gray-600 p-3 rounded-full hover:bg-purple-500 transition-colors duration-300 cursor-pointer">
                <IoLogoLinkedin className=" text-white" />
              </div>
              <div className="bg-gray-300 dark:bg-gray-600 p-3 rounded-full hover:bg-purple-500 transition-colors duration-300 cursor-pointer">
                <FaSquareXTwitter className=" text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
