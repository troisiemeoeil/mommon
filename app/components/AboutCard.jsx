"use client";
import { motion } from "framer-motion";

const AboutCard = () => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
      dragElastic={0}
      className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 z-20 cursor-pointer relative shadow-xl rounded-lg col-span-2"
    >
      <div className="absolute w-full p-2 z-10">
        <div className="flex justify-between items-center">
          <p className="text-xs">About</p>
          <p className="text-neutral-500 text-xs">Ahmed Boulakhras</p>
        </div>
        <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
      </div>

      <div className="flex flex-col items-center gap-2 mt-14 px-3 pb-3">
        <p className="text-3xl font-semibold leading-5">
          Ahmed Boulakhras
        </p>
        <p className="text-md font-[400] text-neutral-400/60 leading-5">
          Software Developer
        </p>
      </div>
      <div className="flex items-center justify-center">
        <p>(041) 740 6464</p>
      </div>
    </motion.div>
  );
};

export default AboutCard;
