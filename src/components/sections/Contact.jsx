"use client";
import { CiMail } from "react-icons/ci";
import { BsChat } from "react-icons/bs";
import { IoMdArrowForward } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <div id="contact" className="py-20 px-4 max-w-4xl mx-auto scroll-mt-20">
        <div className="text-center">
          <h3 className="text-3xl text-primary font-bold mb-5">
            &lt;Contact /&gt;
          </h3>
          <p className="text-gray-500 leading-relaxed mb-5">
            Have a project in mind or just want to say hello? I'd love to hear
            from you.
          </p>
        </div>

        <div className="flex gap-8">
          <div className="w-2/5 p-6 bg-gray-100 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl  duration-300 hover:shadow-lg">
            <div className="flex flex-col gap-7">
              <h3 className="text-lg font-bold">Contact Information</h3>

              <div className="flex gap-2">
                <CiMail className="text-xl" />
                <div className="flex flex-col">
                  <div className="font-semibold text-sm">Email</div>
                  <div className="text-gray-400">your.email@example.com</div>
                </div>
              </div>

              <div className="flex gap-2">
                <BsChat className="text-xl" />
                <div className="flex flex-col">
                  <div className="font-semibold text-sm">Social Media</div>

                  <div className="flex gap-2 items-center text-gray-400 ">
                    <h3>Github </h3>
                    <span>
                      <IoMdArrowForward />
                    </span>
                  </div>

                  <div className="flex gap-2 items-center text-gray-400">
                    <h3>LinkedIn</h3>
                    <span>
                      <IoMdArrowForward />
                    </span>
                  </div>

                  <div className="flex gap-2 items-center text-gray-400">
                    <h3>X(Twitter)</h3>
                    <span>
                      <IoMdArrowForward />
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 mt-9">
                I'm currently open to freelance opportunities and interesting
                projects.
              </p>
            </div>
          </div>

          <div className="w-3/5 p-6 bg-gray-100 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl  duration-300 hover:shadow-lg">
            <form action="">
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex gap-2 items-center mb-2">
                    <GoPerson className="text-xl" />
                    <label htmlFor="name">Your Name</label>
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="w-full p-2 border border-neutral-700 bg-neutral-800 rounded-md"
                  />
                </div>

                <div>
                  <div className="flex gap-2 items-center mb-2">
                    <CiMail className="text-xl" />
                    <label htmlFor="name">Your Email</label>
                  </div>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full p-2 border border-neutral-700 bg-neutral-800 rounded-md"
                  />
                </div>

                <div>
                  <div className="flex gap-2 items-center mb-2">
                    <BsChat className="text-xl" />
                    <label htmlFor="message">Your Message</label>
                  </div>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full p-2 border border-neutral-700 bg-neutral-800 rounded-md"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-300"
              >
                Send Message <IoIosSend className="inline-block " />
              </button>
            </form>
          </div>
        </div>
      </div>

   
    </>
  );
};

export default Contact;
