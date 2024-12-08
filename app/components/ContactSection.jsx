"use client";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";
import {
  PiLinkedinLogoThin,
  PiGithubLogoThin,
  PiInstagramLogoThin,
} from "react-icons/pi";
import { IoIosMailUnread } from "react-icons/io";

const ContactSection = () => {
  const socialLinks = [
    {
      icon: <PiLinkedinLogoThin className="text-2xl" />,
      tooltip: "LinkedIn",
      href: "https://www.linkedin.com/in/boulakhrasahmed",
    },
    {
      icon: <PiGithubLogoThin className="text-xl" />,
      tooltip: "GitHub",
      href: "https://www.github.com/troisiemeoeil",
    },
    {
      icon: <PiInstagramLogoThin className="text-xl" />,
      tooltip: "Instagram",
      href: "https://www.instagram.com/boulakhras.ahmed/",
    },
    {
      icon: <IoIosMailUnread className="text-xl" />,
      tooltip: "E-mail",
      href: "mailto:boulakhras.ahmed98@gmail.com",
    },
  ];

  return (
    <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg min-h-[50px] col-span-2 relative">
      <div className="absolute w-full p-2 z-20">
        <p className="text-xs">Get in touch</p>
        <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7" />
      </div>

      <div className="mt-14 mb-4">
        <div className="flex justify-center gap-x-2 px-2">
          {socialLinks.map((link, index) => (
            <Tooltip key={index} showArrow={true} content={link.tooltip} color="#161616">
              <Link
                href={link.href}
                target="_blank"
                className="rounded-full border dark:border-neutral-600 cursor-pointer border-neutral-400/60 p-2 w-16 h-16 flex items-center justify-center"
              >
                {link.icon}
              </Link>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
