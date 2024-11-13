import React from "react";
import { Heading3PropsType } from "../../../types/BlogTypes";
const HeadingH3 = ({ headingThree }: Heading3PropsType) => {
  return (
    <>
      <div className="flex flex-col justify-center lg:w-[70%] w-[80%] mx-auto">
        <h3 className="xl:text-[35px] xl:leading-[44px] text-[26px] lg:mt-0 mt-0 lg:text-[30px] font-inter text-mainHeadingsColor dark:text-white xl:pl-0 lg:justify-start lg:flex font-bold leading-[30px] 2xl:text-[55px] 2xl:leading-[67px]">
          {headingThree}
        </h3>
      </div>
    </>
  );
};

export default HeadingH3;
