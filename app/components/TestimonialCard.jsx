"use client";
import { useEffect, useState } from "react";

const ProjectCard = ({ skill, level }) => (
  <div className="px-1 relative">
    <div className="flex justify-between items-start p-2 gap-y-2 ">
      <div className="text-base font-medium">{skill}</div>
      <div className="text-sm text-gray-500"> {level}</div>
    </div>
  </div>
);

const TestimonialCard = () => {
  const skills = [
    {
      skill: "Setting food on fire",  
      level: "🌶️🌶️🌶️🌶️🌶️",
    },
    {
      skill: "Still can't say Siisikkisiisikö",  
      level: "🌶️🌶️🌶️",
    },
    {
      skill: "Snacking all day",  
      level: "🌶️🌶️🌶️🌶️",
    }
   ]


  return (
    <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg h-fit col-span-2 row-span-2 relative">
      <div className="absolute w-full p-2 z-20">
        <p className="text-xs">Unmentioned skills</p>
        <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
      </div>

      <div className="mt-8 px-2">
       
       {skills.map((skill) => (
          <ProjectCard key={Math.random()}  {...skill} />
     ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
