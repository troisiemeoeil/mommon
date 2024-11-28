"use client";
import { motion } from "framer-motion";

const StatsCard = () => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
      dragElastic={1}
      className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg h-44 p-2 relative"
    >
      <div className="absolute w-full p-2 z-20">
        <p className="text-xs">Years of Experience</p>
        <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
      </div>
      <div className="mt-10 w-full flex justify-center items-center">
        <h1 className="text-8xl">17</h1>
      </div>
    </motion.div>
  );
};

export default StatsCard;
