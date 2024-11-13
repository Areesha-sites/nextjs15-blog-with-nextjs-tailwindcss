import Image from "next/image";
import React from "react";
import { IoTriangleSharp } from "react-icons/io5";
// import { useTheme } from "next-themes";
const Header = () => {
  return (
    <>
      <div className="overflow-x-hidden mb-12">
        <div className="w-full lg:ml-8 ml-3 mt-[5px]">
          <div className="flex items-center ">
            <IoTriangleSharp className="lg:h-7 lg:w-7 h-5 w-5 lg:mr-2" />
            <div className="ml-2 mr-6 mt-[13px] lg:h-7 lg:w-7 h-5 w-5 border-l dark:text-white dark:opacity-100 border-gray-500 transform rotate-[34deg] opacity-25"></div>
              <Image
                src="/logo2.jpg" 
                alt="nextjs-logo"
                height={100}
                width={100}
                className="flex -ml-7 h-[50px] w-[69px] lg:h-[60px] lg:w-[90px]"
              />
          </div>
        </div>
        <div className="flex xl:justify-center md:justify-center xsm:justify-center xl:items-center text-center xl:pt-1 flex-col sm:max-w-[100vw] lg:mt-9 mt-4 w-[100%] px-[8px] justify-center">
          <h1 className="text-mainHeadingsColor font-inter font-black lg:text-[40px] dark:text-white xl:text-[48px] xl:mx-28 lg:mx-20 md:text-[35px] text-[23px] 2xl:text-[64px]">
            Exploring Next.js 15: A Comprehensive Guide to the Latest Version.
          </h1>
          <div className="flex justify-center items-center mx-auto">
            <h4 className="font-semibold italic lg:text-[16px] 2xl:text-[22px] text-[11px] opacity-60 md:text-[13px] mt-4 lg:w-[70%] w-[90%]  font-inter ">
              Discover the groundbreaking features and enhancements that make
              Next.js 15 the ideal choice for modern web development.
            </h4>
          </div>
        </div>

        <div className="border-b-[1px] border-mainHeadingsColor dark:border-white dark:opacity-100 opacity-30 w-[70%] mx-auto mt-8"></div>
      </div>
    </>
  );
};

export default Header;
