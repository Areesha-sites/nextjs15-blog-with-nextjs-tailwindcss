import React from "react";
import { Heading5PropsType } from "../../../types/BlogTypes";
const HeadingH5 = ({ headingFive }: Heading5PropsType) => {
  return (
    <>
      <div className="flex flex-col justify-center lg:w-[70%] w-[80%] mx-auto">
        <h3 className="xl:text-[22px] text-[15px] lg:text-[20px] font-inter text-mainHeadingsColor dark:text-white xl:pl-0 lg:justify-start lg:flex  leading-[25px] font-bold mt-5 2xl:text-[30px]">
          {headingFive}
        </h3>
      </div>
    </>
  );
};

export default HeadingH5;
