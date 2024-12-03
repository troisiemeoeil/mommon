"use client";
import { SquareArrowOutUpRight } from "lucide-react";

const TimelineItem = ({ year, title, description, project, link }) => (
  <>
    <div className="flex gap-x-3 px-2">
      <p className="dark:text-neutral-400 text-xs w-20 shrink-0">{year.start} - <br/> {year.end}</p>
      <div className="w-full">
        <h4 className="text-xs font-bold">{title}</h4>
        <div className="w-full  flex justify-between items-center ">
          <p className="text-[11px] text-neutral-700 ">{project}</p>
          <a href={link}><SquareArrowOutUpRight size={13} /></a>
        </div>
        <p className="text-[11px] text-neutral-500">{description}</p>

      </div>
    </div>
    <div className="px-2 my-3">
      <div className="w-full h-[0.9px] dark:bg-neutral-800 bg-neutral-400/40" />
    </div>
  </>
);

const ExperienceTimeline = () => {
  const experiences = [
    {
      year: {
        start: "Oct 2022",
        end: "Jul 2023",
      },
      title: "Korean Institute of Industrial Technology - South Korea",
      description: "Software Developer (Contractor)",
      project: "Product Analysis Dashboard for Government Server",
      link: "https://eng.kitech.re.kr/main/",
    },
    {
      year: {
        start: "Aug 2022",
        end: "Oct 2022",
      },
      title: "Harvestance Inc. - South Korea",
      description: "Software Developer (Contractor)",
      project: "3D Robot Gripper Customization Solution",
      link: "https://www.harvestance.com/",
    },
    {
      year: {
        start: "Feb 2022",
        end: "Aug 2023",
      },
      title: "Onskad Fragrances - France",
      description: "Software Developer (Contractor)",
      project: "Custom Shopify E-commerce Theme ",
      link: "https://onskadfragrances.com/",
    },
    {
      year: {
        start: "Feb 2022",
        end: "Presen",
      },
      title: "Troisieme Oeil Digital",
      description: "Founder & Manager",
      project: "Product Analysis Dashboard for Government Server",
      link: "https://troisiemeoeil.io/",
    }
  ];

  return (
    <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2 row-span-2 relative overflow-hidden">
      <div className="absolute w-full p-2 z-20 backdrop-blur-3xl">
        <p className="text-xs">Experience & Education</p>
        <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
      </div>

      <div className="bg-gradient-to-b w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent h-20 transition-all ease-in duration-200" />

      <div className="overflow-y-auto h-[340px] overflow-hidden scrollbar-hide scroll-smooth relative">
        <div className="mt-16">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} {...exp} />
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-t w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent bottom-0 h-12 transition-all ease-in duration-200" />
    </div>
  );
};

export default ExperienceTimeline;
