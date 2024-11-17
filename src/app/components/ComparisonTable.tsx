import React from "react";
const ComparisonTable = () => {
  return (
    <>
      <div className="flex flex-col justify-center w-full sm:w-[70%] mx-auto overflow-x-auto">
        <table className="min-w-[600px] sm:min-w-full border border-gray-200 shadow-lg mt-[1rem]">
          <thead>
            <tr>
              <th className="px-2 sm:px-3 py-3 text-center text-foreground dark:text-white uppercase font-semibold font-inter text-sm sm:text-base">
                Features
              </th>
              <th className="px-2 sm:px-3 py-3 text-center text-foreground dark:text-white  uppercase font-semibold font-inter text-sm sm:text-base">
                Next.js 14
              </th>
              <th className="px-2 sm:px-3 py-3 text-center text-foreground dark:text-white  uppercase font-semibold font-inter text-sm sm:text-base">
                Next.js 15
              </th>
              <th className="px-2 sm:px-3 py-3 text-center text-foreground dark:text-white  uppercase font-semibold font-inter text-sm sm:text-base">
                Improvement
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t  border-gray-200 dark:border-gray-700">
              <td className="px-4 py-2 sm:px-6 sm:py-4 text-foreground dark:text-gray-200 font-medium text-sm sm:text-base  xxl:text-[17px]">
                Performance
              </td>
              <td className="lg:px-6 px-5 lg:py-4 py-3 lg:text-[15px] text-[13px] text-gray-500 dark:text-gray-400 xxl:text-[17px]">
                Standard rendering and hydration speeds
              </td>
              <td className="lg:px-6 px-5 lg:py-4 py-3 lg:text-[15px] text-[13px] text-gray-500 dark:text-gray-400  xxl:text-[17px]">
                Enhanced with better data fetching and optimized hydration
              </td>
              <td className=" lg:px-6 px-5 lg:py-4 py-3 lg:text-[15px] text-[13px]  text-green-400 font-medium dark:text-green-400  xxl:text-[17px]">
                20-30% faster page loads, improved client-side interactivity
              </td>
            </tr>

            <tr className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-6 py-4 text-foreground dark:text-gray-200 font-medium  xxl:text-[17px]">
                Routing
              </td>
              <td className="lg:px-6 px-5 lg:py-4 py-3 lg:text-[15px] text-[13px] text-gray-500 dark:text-gray-400  xxl:text-[17px]">
                Conventional app routing, limited flexibility
              </td>
              <td className="lg:px-6 px-5 lg:py-4 py-3 lg:text-[15px] text-[13px] text-gray-500 dark:text-gray-400  xxl:text-[17px]">
                Advanced nested and parallel routes, improved app router
              </td>
              <td className=" lg:px-6 px-5 lg:py-4 py-3 lg:text-[15px] text-[13px]  text-green-400 font-medium dark:text-green-400  xxl:text-[17px]">
                Simplifies complex routes, faster nested routes
              </td>
            </tr>
            <tr className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-6 py-4 text-foreground dark:text-gray-200 font-medium  xxl:text-[17px]">
                Build Times
              </td>
              <td className="lg:px-6 px-5 lg:py-4 py-3 lg:text-[15px] text-[13px] text-gray-500 dark:text-gray-400  xxl:text-[17px]">
                Moderate build times
              </td>
              <td className="lg:px-6 px-5 lg:py-4 py-3 lg:text-[15px] text-[13px] text-gray-500 dark:text-gray-400  xxl:text-[17px]">
                Faster builds with improved bundling
              </td>
              <td className=" lg:px-6 px-5 lg:py-4 py-3 lg:text-[15px] text-[13px]  text-green-400 font-medium dark:text-green-400  xxl:text-[17px]">
                15-25% faster build speeds
              </td>
            </tr>
            <tr className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-6 py-4 text-foreground dark:text-gray-200 font-medium  xxl:text-[17px]">
                Server Actions
              </td>
              <td className="lg:px-6 px-5 lg:py-4 py-3 lg:text-[15px] text-[13px] text-gray-500 dark:text-gray-400  xxl:text-[17px]">
                Not Available
              </td>
              <td className="lg:px-6 px-5 lg:py-4 py-3 lg:text-[15px] text-[13px] text-gray-500 dark:text-gray-400  xxl:text-[17px]"  >
                Server actions added for data processing directly on server
              </td>
              <td className=" lg:px-6 px-5 lg:py-4 py-3 lg:text-[15px] text-[13px]  text-green-400 font-medium dark:text-green-400  xxl:text-[17px]">
                Faster reponses, lighter client playloads
              </td>
            </tr>
            <tr className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-6 py-4 text-foreground dark:text-gray-200 font-medium  xxl:text-[17px]">
                Streaming Support
              </td>
              <td className="lg:px-6 px-5 lg:py-4 py-3 lg:text-[15px] text-[13px] text-gray-500 dark:text-gray-400  xxl:text-[17px]">
                Basic Streaming
              </td>
              <td className="lg:px-6 px-5 lg:py-4 py-3 lg:text-[15px] text-[13px] text-gray-500 dark:text-gray-400  xxl:text-[17px]">
                Full support for streaming with concurrent rendering
              </td>
              <td className=" lg:px-6 px-5 lg:py-4 py-3 lg:text-[15px] text-[13px]  text-green-400 font-medium dark:text-green-400  xxl:text-[17px]">
                Smoother UI updates with dynamic content
              </td>
            </tr>
            <tr className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-6 py-4 text-foreground dark:text-gray-200 font-medium  xxl:text-[17px]">
                SEO % Metadata
              </td>
              <td className="lg:px-6 px-5 lg:py-4 py-3 lg:text-[15px] text-[13px] text-gray-500 dark:text-gray-400  xxl:text-[17px]">
                Limited Metadata options
              </td>
              <td className="lg:px-6 px-5 lg:py-4 py-3 lg:text-[15px] text-[13px] text-gray-500 dark:text-gray-400  xxl:text-[17px]">
                Enhanced SEO controls, dynamic metadata
              </td>
              <td className=" lg:px-6 px-5 lg:py-4 py-3 lg:text-[15px] text-[13px]  text-green-400 font-medium dark:text-green-400  xxl:text-[17px]">
                Better search visibility, SEO control
              </td>
            </tr>
            <tr className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-6 py-4 text-foreground dark:text-gray-200 font-medium  xxl:text-[17px]">
                Image Optimization
              </td>
              <td className="lg:px-6 px-5 lg:py-4 py-3 lg:text-[15px] text-[13px] text-gray-500 dark:text-gray-400  xxl:text-[17px]">
                Baisc Optimization
              </td>
              <td className="lg:px-6 px-5 lg:py-4 py-3 lg:text-[15px] text-[13px] text-gray-500 dark:text-gray-400  xxl:text-[17px]">
                Improved built-in image optimization
              </td>
              <td className=" lg:px-6 px-5 lg:py-4 py-3 lg:text-[15px] text-[13px]  text-green-400 font-medium dark:text-green-400  xxl:text-[17px]">
                Faster load times, automatic compression
              </td>
            </tr>
            <tr className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-6 py-4 text-foreground dark:text-gray-200 font-medium  xxl:text-[17px]">
                Error Handling
              </td>
              <td className="lg:px-6 px-5 lg:py-4 py-3 lg:text-[15px] text-[13px] text-gray-500 dark:text-gray-400  xxl:text-[17px]">
                Basic error handling
              </td>
              <td className="lg:px-6 px-5 lg:py-4 py-3 lg:text-[15px] text-[13px] text-gray-500 dark:text-gray-400  xxl:text-[17px]">
                Advanced error overlays, debugging tools
              </td>
              <td className=" lg:px-6 px-5 lg:py-4 py-3 lg:text-[15px] text-[13px]  text-green-400 font-medium dark:text-green-400  xxl:text-[17px]">
                Easier and faster debugging
              </td>
            </tr>
            <tr className="border-t border-gray-200 dark:border-gray-700">
              <td className="px-6 py-4 text-foreground dark:text-gray-200 font-medium  xxl:text-[17px]">
                Custom Middleware
              </td>
              <td className="lg:px-6 px-5 lg:py-4 py-3 lg:text-[15px] text-[13px] text-gray-500 dark:text-gray-400  xxl:text-[17px]">
                Limited Middleware support
              </td>
              <td className="lg:px-6 px-5 lg:py-4 py-3 lg:text-[15px] text-[13px] text-gray-500 dark:text-gray-400  xxl:text-[17px]">
                Enhanced Middleware for routes and API
              </td>
              <td className=" lg:px-6 px-5 lg:py-4 py-3 lg:text-[15px] text-[13px]  text-green-400 font-medium dark:text-green-400  xxl:text-[17px]">
                Improved security, fine-grained control
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ComparisonTable;
