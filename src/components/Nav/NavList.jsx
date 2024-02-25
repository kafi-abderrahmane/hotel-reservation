import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DehazeIcon from "@mui/icons-material/Dehaze";

import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const roomsPages = [
  { name: "rooms page", link: "/" },
  { name: "room details - top image", link: "/" },
  { name: "room details - top gallery", link: "/" },
  { name: "room details - left booking", link: "/" },
  { name: "cart checkout", link: "/" },
  { name: "my account", link: "/" },
];
const pages = [
  { name: "about the hotel", link: "/" },
  { name: "amenities & services", link: "/" },
  { name: "salon price list", link: "/" },
  { name: "dining", link: "/" },
  { name: "the restaurant", link: "/" },
  { name: "wellness", link: "/" },
  { name: "local activities", link: "/" },
  { name: "activity detail page", link: "/" },
  { name: "our blog", link: "/" },
  { name: "contact", link: "/" },
];

const NavList = () => {
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
  const router = useRouter();
  return (
    <div className="flex flex-row items-center justify-center gap-x-8 font-jost font-medium text-[13px] leading-[16px] text-white uppercase">
      <span className="text-base flex items-center justify-center">
        <DehazeIcon />
      </span>
      <div className="flex flex-row items-start justify-center gap-0.5 group/home cursor-pointer">
        <div className="flex flex-col gap-1">
          <span>home</span>
          <div
            className={`border-b border-white ${
              router?.pathname === "/"
                ? "w-full"
                : "w-0 group-hover/home:w-full duration-500 ease-in-out overflow-hidden"
            }`}></div>
        </div>

        <span className="text-base flex items-center justify-center">
          <KeyboardArrowDownIcon fontSize="inherit" />
        </span>
        <div className="absolute w-[99.1vw] left-0 z-[1100] hidden duration-300 ease-in-out top-[70px] pt-[20px] group-hover/home:block">
          <Reveal
            keyframes={customAnimation}
            duration={400}
            className="bg-black px-20">
            <div className="w-full h-[400px] shadow-xl max-w-[1300px] mx-auto py-6">
              test
            </div>
          </Reveal>
        </div>
      </div>
      <div className="flex flex-row items-start justify-center gap-0.5 group/rooms cursor-pointer relative">
        <div className="flex flex-col gap-1">
          <span>rooms</span>
          <div
            className={`border-b border-white w-0 group-hover/rooms:w-full duration-500 ease-in-out overflow-hidden`}></div>
        </div>
        <span className="text-base flex items-center justify-center">
          <KeyboardArrowDownIcon fontSize="inherit" />
        </span>
        <div className="absolute z-[1100] hidden duration-300 ease-in-out top-[22px] -left-[32px] group-hover/rooms:block pt-[20px]">
          <Reveal
            keyframes={customAnimation}
            duration={400}
            className="bg-black">
            <div className="w-full shadow-xl px-8 py-6 flex flex-col items-start justify-start gap-y-4">
              {roomsPages?.map((page, index) => (
                <Link
                  key={index}
                  href={page?.link}
                  className="capitalize text-[15px] font-normal whitespace-nowrap hover:text-[#ab916c] transition-colors">
                  {page?.name}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
      <div className="flex flex-row items-start justify-center gap-0.5 group/pages cursor-pointer relative">
        <div className="flex flex-col gap-1">
          <span>pages</span>
          <div
            className={`border-b border-white w-0 group-hover/pages:w-full duration-500 ease-in-out overflow-hidden`}></div>
        </div>
        <span className="text-base flex items-center justify-center">
          <KeyboardArrowDownIcon fontSize="inherit" />
        </span>
        <div className="absolute -left-[32px] z-[1100] hidden duration-300 ease-in-out top-[22px] group-hover/pages:block pt-[20px]">
          <Reveal
            keyframes={customAnimation}
            duration={400}
            className="bg-black">
            <div className="w-full shadow-xl px-8 py-6 flex flex-col items-start justify-start gap-y-4">
              {pages?.map((page, index) => (
                <Link
                  key={index}
                  href={page?.link}
                  className="capitalize text-[15px] font-normal whitespace-nowrap hover:text-[#ab916c] transition-colors">
                  {page?.name}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default NavList;
