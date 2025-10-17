'use client'

import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaDownload  } from "react-icons/fa";
import Link from "next/link";

const HomePage = () => {
    const profile = '/assets/profile.png'
    
    return (
        <>
            <div>
                <Navbar />
                
                <div className="text-black dark:text-white py-60  relative">
                    <div className="flex flex-col items-center justify-center">
                        <div className="max-w-xl text-center space-y-6 px-4">
                            <div className="relative inline-block">
                                <h3 className="text-4xl md:text-5xl font-bold">
                                    Hi, I'm <span className="text-primary relative">
                                        Sutthiphong!
                                        <div className="absolute -bottom-1 left-0 h-[3px] w-full bg-primary"></div>
                                    </span>
                                </h3>
                            </div>

                            <p className="text-gray-500 text-lg">
                                I'm a <span className="text-primary font-semibold">developer</span>
                            </p>

                            <p className="text-gray-500 leading-relaxed">
                                I build clean, responsive, and interactive websites.
                                Need one? I'm open to freelance work. Let's connect!
                            </p>

                            <div className="flex justify-center items-center gap-4 text-sm pt-4">
                                <Link href={''} className="px-6 py-2.5 bg-primary rounded-full text-white hover:scale-110 duration-300 active:scale-100  flex gap-2 items-center justify-center">
                                    <FaDownload/> Download Resume
                                </Link>
                                
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 space-y-4">
                        {/* Scroll Down Indicator */}
                        <div className=" text-center">
                            <div className="flex flex-col items-center gap-y-3">
                                <p className="uppercase text-xs text-gray-500 tracking-wider">Scroll down</p>
                                <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex items-start justify-center p-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"></div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Bottom Divider */}
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
                </div>
            </div>
        </>
    );
};

export default HomePage;