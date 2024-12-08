"use client";
import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import ProjectsGrid from "./components/ProjectsGrid";
import AboutCard from "./components/AboutCard";
import ContactSection from "./components/ContactSection";
import CVCard from "./components/CVCard";
import ExperienceTimeline from "./components/ExperienceTimeline";
import LatestWorkCard from "./components/LatestWorkCard";
import SideProjectsTimeline from "./components/SideProjectsTimeline";
import StatsCard from "./components/StatsCard";
import StatusCard from "./components/StatusCard";
import TestimonialCard from "./components/TestimonialCard";
import NewsletterCard from "./components/NewsletterCard";
import LocationCard from "./components/LocationCard";
import { useWindowWidth } from "./Hooks/useWindowWidth";

function Homepage() {
  const { theme } = useTheme();
  const width = useWindowWidth();

  return (
    <div className="w-full h-screen px-4 pt-8 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-3 grid-flow-row-dense">
        <LocationCard />
        {width > 640 && <StatusCard />} {/* Render only if width is greater than 640px */}
        <AboutCard />
        <ExperienceTimeline />
        <ProjectsGrid />
        <ContactSection />
        <LatestWorkCard />
        <SideProjectsTimeline />
        <TestimonialCard />
        <div className="rounded-lg grid grid-cols-2 gap-2 col-span-2 row-span-2 z-40">
          <StatsCard />
          <CVCard />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
