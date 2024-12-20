"use client";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



const ProjectCard = ({ project, tech, link, index }) => (
  // <div className=" rounded-md px-1 relative">
  //   <div className="block  p-2 gap-x-2 mt-4">
  //     {/* <Image
  //       width={300}
  //       height={300}
  //       className="w-14 h-14 rounded-full object-cover"
  //       src={imageUrl}
  //       alt="Project thumbnail"
  //     /> */}
      
      
  //         <div key={index}>
  //         <div className="w-full  flex justify-between items-center ">
  //         <p className="text-xs">{project}</p>
  //         <a href={link} target="_blank"><SquareArrowOutUpRight size={13} /></a>
  //       </div>
  //         <p className="text-xs">Tech stack: {tech}</p>
  //       </div>
  //     <ul className="menu">
  //       <a href="#0"></a>
  //     </ul>
  //   </div>
  // </div>
<>
<div className="flex gap-x-3 px-2 ">
      <div className="w-full">
        <div className="w-full  flex justify-between items-center ">
        <h4 className="text-xs font-bold">{project}</h4>
        <Link href={link} target="_blank">
        <SquareArrowOutUpRight size={13} />
        </Link>
        </div>
        <p className="text-[11px] text-neutral-500">Tech stack: {tech}</p>

      </div>
    </div>
    <div className="px-2 my-3">
      <div className="w-full h-[0.9px] dark:bg-neutral-800 bg-neutral-400/40" />
    </div></>
  
);

const ProjectsGrid = () => {
  const content = [
 
    {
      project: "Dynamic Printable files configurator",
      tech: "Three.js / Vite.js / React.js / Tailwind",
      link: "https://stlmaker.vercel.app"
    },
    {
      project: "Realtime Decal Projector ",
      tech: "Babylon.js / React.js / Tailwind / Pixi.js / Express.js",
      link: "https://boltattoo.vercel.app/"
    },
    {
      project: "City Builder Game",
      tech: "Three.js / Vite.js / Tailwind / Supabase",
      link: "https://city-builder-two.vercel.app/"
    },
    {
      project: "Node base 3D Model Viewer",
      tech: "Three.js / Next.js / Bun / Tailwind / Supabase",
      link: "https://model-viewer-yfll.vercel.app/"
    }
  ]

  return (

<div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2 row-span-2 relative overflow-hidden">
<div className="absolute w-full p-2 z-20 backdrop-blur-3xl">
  <p className="text-xs">Personal Projects</p>
  <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
</div>

<div className="bg-gradient-to-b w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent h-20 transition-all ease-in duration-200" />

<div className="overflow-y-auto h-[340px] overflow-hidden scrollbar-hide scroll-smooth relative">
  <div className="mt-20">
  {content.map((exp, index) => (
            <ProjectCard key={index} {...exp} />
          ))}
  </div>
</div>

<div className="bg-gradient-to-t w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent bottom-0 h-12 transition-all ease-in duration-200" />
</div>
  );
};

export default ProjectsGrid;
