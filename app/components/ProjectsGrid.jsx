"use client";
import Image from "next/image";

const ProjectCard = ({ imageUrl }) => (
  <div className=" rounded-md px-1 relative">
    <div className="flex justify-between items-center p-2 gap-x-2 mt-4">
      <Image
        width={300}
        height={300}
        className="w-14 h-14 rounded-full object-cover"
        src={imageUrl}
        alt="Project thumbnail"
      />

      <div>
        <p className="text-xs">Fusion Pro Presentation</p>
        <p className="text-xs">I've come up with something truly unique</p>
      </div>

      <ul className="menu">
        <a href="#0"></a>
      </ul>
    </div>
  </div>
);

const ProjectsGrid = () => {
  return (
    <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg min-h-[50px] col-span-2 row-span-2 relative">
      <div className="absolute w-full p-2 z-20">
        <p className="text-xs">Projects</p>
        <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
      </div>

      <div className="mt-8 px-2">
        <ProjectCard imageUrl="/jo4.jpeg" />
        <ProjectCard imageUrl="/jo4.jpeg" />
        <ProjectCard imageUrl="/jo4.jpeg" />
      </div>
    </div>
  );
};

export default ProjectsGrid;
