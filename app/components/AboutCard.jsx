"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "../../components/ui/animated-shiny-text";

const AnimatedShinyTextDemo = ( { name, title, phone }) => {
  return (
    <div className="z-10 flex min-h-64 items-center justify-center">
      <div
        className={cn(
          "group   text-white transition-all ease-in  hover:text-black dark:hover:text-white",
        )}
      >
        <AnimatedShinyText className="flex-col flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span className="text-2xl">✨ {name}</span>
          <span className="text-sm">{title}</span>
          <span className="text-sm">{phone}</span>


        </AnimatedShinyText>
      </div>
    </div>
  );
}

const AboutCard = () => {

  const content = [{
    name: "Ahmed Boulakhras",
    title: "Software Developer",
    phone: "(+385) 041 740 6464"
  }]


  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
      dragElastic={0}
      className="dark:bg-[#1E1E1E] h-40 py-1 bg-white border dark:border-neutral-600 border-neutral-400/60 z-20 cursor-pointer relative shadow-xl rounded-lg col-span-2"
    >
      <div className="absolute w-full px-2 py-1 z-10">
        <div className="flex justify-between items-center">
          <p className="text-xs">About</p>
          <p className="text-neutral-500 text-xs"></p>
        </div>
        <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
      </div>

      <div className="flex flex-col items-center justify-center align-middle h-full gap-2 ">
        <div className="text-3xl font-semibold leading-5">
          <AnimatedShinyTextDemo {...content[0]} />
        </div>
     
      </div>
     
    </motion.div>
  );
};

export default AboutCard;
