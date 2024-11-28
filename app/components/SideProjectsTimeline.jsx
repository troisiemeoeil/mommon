"use client";

const TimelineItem = ({ year, title, description }) => (
  <>
    <div className="flex gap-x-3 px-2">
      <p className="dark:text-white text-xs w-20 shrink-0">{year}</p>
      <div>
        <h4 className="text-xs font-bold">{title}</h4>
        <p className="text-[11px] text-neutral-500">{description}</p>
      </div>
    </div>
    <div className="px-2 my-3">
      <div className="w-full h-[0.9px] dark:bg-neutral-800 bg-neutral-400/40" />
    </div>
  </>
);

const SideProjectsTimeline = () => {
  const projects = [
    {
      year: "Since 2023",
      title: "WebFlow",
      description: "Official partner",
    },
    {
      year: "Since 2021",
      title: "Awwward",
      description: "Jury Member",
    },
    {
      year: "Since 2018",
      title: "ADC Club Global",
      description: "Jury Member",
    },
  ];

  return (
    <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2 relative overflow-hidden">
      <div className="absolute w-full p-2 z-20">
        <p className="text-xs">Side Projects</p>
        <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
      </div>

      <div className="bg-gradient-to-b w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent h-20 transition-all ease-in duration-200" />

      <div className="overflow-y-auto h-[180px] overflow-hidden scrollbar-hide scroll-smooth relative">
        <div className="mt-14">
          {projects.map((project, index) => (
            <TimelineItem key={index} {...project} />
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-t w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent bottom-0 h-12 transition-all ease-in duration-200" />
    </div>
  );
};

export default SideProjectsTimeline;
