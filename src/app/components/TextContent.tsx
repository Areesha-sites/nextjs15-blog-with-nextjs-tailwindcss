import React from "react";
const TextContent = ({ children}) => {
  return (
    <div className="flex flex-col justify-center lg:w-[70%] w-[80%] mx-auto">
      <div className="text-foreground font-inter dark:text-white lg:text-[15px] mt-3 text-[13px] xl:text-[17px] 2xl:text-[21px]">
        {children}
     
      </div>
    </div> 
  )
};

export default TextContent;
