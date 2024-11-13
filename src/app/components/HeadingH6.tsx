import React from "react";
import { Heading6PropsType } from "../../../types/BlogTypes";
const HeadingH6 = ({ headingSix }: Heading6PropsType) => {
  return (
    <>
      <div className="flex flex-col justify-center lg:w-[70%] w-[80%] mx-auto">
        <h3 className="xl:text-[19px] text-[15px] lg:text-[20px] font-inter text-mainHeadingsColor dark:text-white xl:pl-0 lg:justify-start lg:flex font-bold mt-5 2xl:text-[25px]">
          {headingSix}
        </h3>
      </div>
    </>
  );
};

export default HeadingH6;
