"use client";

const TimelineItem = ({ year, title, description }) => (
  <>
    <div className="flex gap-x-3 px-2">
      <p className="dark:text-neutral-400 text-xs w-20 shrink-0">{year}</p>
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

const ExperienceTimeline = () => {
  const experiences = [
    {
      year: "2002 -- 2012",
      title: "Creative Studio Owner",
      description: "Self-employed at my own creative studio, delivering innovative design solutions and giving value to your brand experience.",
    },
    {
      year: "2020 -- 2022",
      title: "Nike Headquarters",
      description: "Designer & Creative Director",
    },
    {
      year: "2018 -- 2020",
      title: "Spotify",
      description: "Designer & Art Director",
    },
    {
      year: "2016 -- 2018",
      title: "Apple",
      description: "Product Designer",
    },
    {
      year: "2014 -- 2016",
      title: "Royal Academy of Arts",
      description: "Graduate Master's Degree",
    },
    {
      year: "2012 -- 2016",
      title: "Zurich University of Arts",
      description: "Visual Communication",
    },
    {
      year: "2011 -- 2012",
      title: "Vogue France",
      description: "Graphic Designer",
    },
    {
      year: "2010 -- 2011",
      title: "Vignelli Associates",
      description: "Internship",
    },
    {
      year: "2010 -- 2011",
      title: "Norm Zurich",
      description: "Internship",
    },
  ];

  return (
    <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2 row-span-2 relative overflow-hidden">
      <div className="absolute w-full p-2 z-20">
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