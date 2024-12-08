"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const LocationCard = () => {
  const { theme } = useTheme();
  const content = 
    {
    location: "Finland",
  }
  
  return (
<div
  className="border cursor-pointer z-20 w-fit sm:w-auto md:w-auto xl:w-auto lg:w-auto dark:border-neutral-600 border-neutral-400/60 overflow-hidden relative shadow-xl rounded-lg sm:h-40"
>
  <div className="absolute backdrop-blur-3xl w-full p-2 z-10">
    <div className="flex justify-between items-center">
      <p className="text-xs">Location</p>
      <p className="text-neutral-500 text-xs">{content.location}</p>
    </div>
    <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7"></div>
  </div>
  <div className="relative w-full"> {/* 16:9 Aspect Ratio */}
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d33494.362536295026!2d23.199155273354602!3d63.81916510045027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sfi!4v1733234329462!5m2!1sen!2sfi"
      className={`absolute top-0 left-0 w-80 h-60 p-0 m-0 ${theme === "dark" ? "invert-[90%] grayscale" : ""}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>
  );
};

export default LocationCard;
