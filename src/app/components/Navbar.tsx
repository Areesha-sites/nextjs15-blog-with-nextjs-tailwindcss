import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 
import ThemeToggle from "./ThemeToggle"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="">
        <div className="hidden lg:block  md:hidden justify-end items-center absolute top-[1.5rem] font-inter right-[6rem] gap-x-5 text-foreground font-semibold ">
          <a
            className="hover:text-black opacity-55 dark:text-white dark:opacity-65 hover:dark:text-white hover:dark:opacity-100 lg:ml-[20px] 2xl:text-[26px]"
            href="#introduction"
          >
            Introduction
          </a>
          <a
            className="hover:text-black opacity-55 dark:text-white dark:opacity-65 hover:dark:text-white hover:dark:opacity-100  lg:ml-[20px] 2xl:text-[26px]"
            href="#features"
          >
            Features
          </a>
          <a
            className="hover:text-black opacity-55 dark:text-white dark:opacity-65 hover:dark:text-white hover:dark:opacity-100  lg:ml-[20px] 2xl:text-[26px]"
            href="#comparison"
          >
            Comparison
          </a>
          <a
            className="hover:text-black opacity-55 dark:text-white dark:opacity-65 hover:dark:text-white hover:dark:opacity-100 lg:ml-[20px] 2xl:text-[26px]"
            href="#use-cases"
          >
            Use Cases
          </a>
          <a
            className="hover:text-black opacity-55 dark:text-white dark:opacity-65 hover:dark:text-white hover:dark:opacity-100 lg:ml-[20px] 2xl:text-[26px]"
            href="#faqs"
          >
            FAQs
          </a>
          <a
            className="hover:text-black opacity-55 dark:text-white dark:opacity-65 hover:dark:text-white hover:dark:opacity-100 lg:ml-[20px] 2xl:text-[26px]"
            href="#troubleshooting"
          >
            Troubleshooting
          </a>
          <div className="ml-4 lg:absolute 2xl:text-[30px] lg:right-[-4.5rem] lg:top-[-0.4rem] 2xl:top-[0rem]">
            <ThemeToggle />
          </div>
        </div>

        <div className="md:block lg:hidden flex items-center absolute lg:top-[1.5rem] top-[10px] right-3 md:pt-[1rem] md:pr-[0.5rem]">
          <div className="mr-4 md:absolute md:right-[2rem] md:top-[0.5rem] 2xl:text-[30px]">
            <ThemeToggle />
          </div>
          <button
            onClick={toggleMenu}
            className="text-foreground text-[20px] font-normal dark:text-white"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

          {menuOpen && (
          <div className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-slate-800 shadow-lg rounded-lg absolute top-16 right-4 z-50 text-foreground">
            <a
              onClick={toggleMenu}
              href="#introduction"
              className="hover:text-black opacity-55 dark:text-white dark:opacity-65 hover:dark:text-white hover:dark:opacity-100 font-semibold"
            >
              Introduction
            </a>
            <a
              onClick={toggleMenu}
              href="#features"
              className="hover:text-black opacity-55 dark:text-white dark:opacity-65 hover:dark:text-white hover:dark:opacity-100 font-semibold"
            >
              Features
            </a>
            <a
              onClick={toggleMenu}
              href="#comparison"
              className="hover:text-black opacity-55 dark:text-white dark:opacity-65 hover:dark:text-white hover:dark:opacity-100 font-semibold"
            >
              Comparison
            </a>
            <a
              onClick={toggleMenu}
              href="#use-cases"
              className="hover:text-black opacity-55 dark:text-white dark:opacity-65 hover:dark:text-white hover:dark:opacity-100 font-semibold"
            >
              Use Cases
            </a>
            <a
              onClick={toggleMenu}
              href="#faqs"
              className="hover:text-black opacity-55 dark:text-white dark:opacity-65 hover:dark:text-white hover:dark:opacity-100 font-semibold"
            >
              FAQs
            </a>
            <a
              onClick={toggleMenu}
              href="#troubleshooting"
              className="hover:text-black opacity-55 dark:text-white dark:opacity-65 hover:dark:text-white hover:dark:opacity-100 font-semibold"
            >
              Troubleshooting
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
