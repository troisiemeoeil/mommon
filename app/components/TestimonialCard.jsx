"use client";
import Image from "next/image";


const ProjectCard = ({ imageUrl }) => (
  <div className=" px-1 relative">
    <div className="flex justify-between align-middle items-center p-2 gap-x-2 mt-6">
 
        <p className="text-base">I've come up with something truly unique</p>
    

   
    </div>
  </div>
);

const TestimonialCard = () => {
  return (
    <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg h-44 col-span-2 row-span-2 relative">
    <div className="absolute w-full p-2 z-20">
      <p className="text-xs">Quote of the day</p>
      <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
    </div>

    <div className="mt-8 px-2">
      <ProjectCard imageUrl="/jo4.jpeg" />
    </div>
  </div>
  );
};

export default TestimonialCard;
