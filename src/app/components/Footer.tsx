import React from "react";
import { BsGithub } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="lg:w-[70%] w-[80%] mx-auto px-3 mt-2 h-auto mb-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mx-auto container gap-10">
          <div>
            <h4 className="text-mainHeadingsColor dark:text-white text-[23px] font-bold font-inter text-center ">
              About This Blog
            </h4>
            <p className="text-foreground dark:text-white mt-3 font-inter lg:text-[15px] text-[13px] mb-4 text-center">
              Stay Updated with the latest in Next.js and web development with
              our insightful guides and tutorials.
            </p>
          </div>

          <div className="lg:ml-14">
            <h4 className="text-mainHeadingsColor dark:text-white text-[23px] font-bold font-inter text-center lg:mt-0 -mt-3 mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col  lg:ml-0 font-semibold text-center font-inter gap-y-3">
              <li>
                <a
                  className="hover:text-black opacity-55 dark:text-white dark:opacity-65 hover:dark:text-white hover:dark:opacity-100 lg:text-[15px] text-[13px]"
                  href="#introduction"
                >
                  Introduction
                </a>
              </li>
              <li>
                <a
                  className="hover:text-black opacity-55 dark:text-white dark:opacity-65 hover:dark:text-white hover:dark:opacity-100 lg:text-[15px] text-[13px]"
                  href="#features"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className="hover:text-black opacity-55 dark:text-white dark:opacity-65 hover:dark:text-white hover:dark:opacity-100 lg:text-[15px] text-[13px]"
                  href="#comparison "
                >
                  Comparison
                </a>
              </li>
              <li>
                <a
                  className="hover:text-black opacity-55 dark:text-white dark:opacity-65 hover:dark:text-white hover:dark:opacity-100 lg:text-[15px] text-[13px]"
                  href="#use-cases"
                >
                  Use Cases
                </a>
              </li>
              <li>
                <a
                  className="hover:text-black opacity-55 dark:text-white dark:opacity-65 hover:dark:text-white hover:dark:opacity-100 lg:text-[15px] text-[13px]"
                  href="#faqs"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  className="hover:text-black opacity-55 dark:text-white dark:opacity-65 hover:dark:text-white hover:dark:opacity-100 lg:text-[15px] text-[13px]"
                  href="#troubleshooting "
                >
                  Troubleshooting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-mainHeadingsColor dark:text-white text-[23px] font-bold font-inter mb-4 text-center lg:ml-0">
              Follow Me
            </h4>
            <ul className="flex gap-x-5 justify-center lg:ml-0">
              <li>
                <a href="https://github.com/Areesha-sites">
                  <BsGithub className="lg:h-[26px] lg:w-[26px] h-[20px] w-[20px] hover:scale-110 duration-300 transition-all ease-linear" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/zoxo_emmaaa/?hl=en">
                  <RiInstagramFill className="lg:h-[26px] lg:w-[26px] h-[22px] w-[22px] lg:mt-[-2px] hover:scale-110 duration-300 transition-all ease-linear" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/areesha-sattar-14b48832b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <FaLinkedin className="lg:h-[26px] lg:w-[26px] h-[20px] w-[20px] lg:mt-[-2px] hover:scale-110 duration-300 transition-all ease-linear" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-full mt-0">
            <h3 className="lg:text-[30px] text-[25px] leading-[30px]  dark:text-white font-bold text-mainHeadingsColor font-inter text-center">
              Subscribe to Our Newsletter
            </h3>
            <form className="mt-4 flex justify-center items-center">
              <input
                type="email"
                placeholder="Your email"
                className="p-3 rounded-l-md focus:outline-none bg-slate-200 text-gray-800 lg:w-[50%] "
              />
              <button className="bg-foreground opacity-85 p-3 rounded-r-md text-white hover:bg-mainHeadingsColor">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-foreground opacity-45 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground text-center opacity-100 dark:text-white dark:text-opacity-100 font-inter lg:text-sm text-[12px]">
            © 2024 Areesha Sattar. All rights reserved.
          </p>
          <a
            href="#top"
            className="text-foreground font-semibold text-sm hover:underline mt-4 md:mt-0 dark:text-white dark:text-opacity-100 hover:text-black hover:opacity-100"
          >
            <FaArrowAltCircleUp className="h-7 w-7 hover:text-black" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
