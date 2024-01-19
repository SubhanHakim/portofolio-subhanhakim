import { useState } from "react";
import NavbarData from "../utils/navbar";
import Link from "../utils/navLink";
import { motion } from "framer-motion"


const variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 80px 80px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(40px at 80px 80px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
}

export default function Menubar() {
  const [isOpen, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!isOpen);
  }

  return (
    <div className="z-10">
      <motion.div
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        className={`bg-grayColor w-[500px] py-[150px] px-[50px] top-0 ${
          isOpen ? "right-0 rounded-none" : "right-[-500PX]"
        } fixed z-[-2] transition-all duration-500 ease-in-out h-full`}
      >
        <div className="w-full flex flex-col justify-start">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl text-blackColor">Navigation</h1>
            <div className="w-full h-[1px] bg-blackGray"></div>
          </div>
          <ul className="text-blackGray flex flex-col gap-8 my-5">
            {NavbarData.map((nav) => {
              return (
                <li
                  key={nav.id}
                  className=" transition-all ease-in-out delay-1000 font-secondary font-medium text-5xl animation-underline"
                >
                  <a href={nav.id} target="_blank" rel="noreferrer">{nav.name}</a>
                </li>
              
              );
            })}
          </ul>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl text-blackColor">Links</h1>
            <div className="w-full h-[1px] bg-blackGray"></div>
          </div>
          <div>
            <ul className="flex justify-start gap-5 mt-5 text-blackGray">
              {Link.map((link, index) => {
                return (
                  <li
                    key={index}
                    className="font-secondary font-medium text-xl animation-underline"
                  >
                    <a href={link.id}>{link.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.div>
      <div
        className="p-5 bg-grayColor w-fit rounded-full relative shadow-sm shadow-blackColor"
        onClick={handleOpen}
      >
        {isOpen ? (
          <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between transition-all duration-300 rotate-[45deg]">
            <div className="h-[2px] w-1/2 origin-right transform rounded bg-blackColor transition-all delay-75 duration-300 -translate-y-[1px] -rotate-90"></div>
            <div className="h-[2px] rounded bg-blackColor"></div>
            <div className="h-[2px] w-1/2 origin-left transform self-end rounded bg-blackColor transition-all delay-75 duration-300 translate-y-[1px] -rotate-90"></div>
          </div>
        ) : (
          <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between transition-all duration-300">
            <div className="h-[2px] w-1/2 origin-right transform rounded bg-blackColor transition-all delay-75 duration-300"></div>
            <div className="h-[2px] w-full rounded bg-blackColor"></div>
            <div className="h-[2px] w-[15px] origin-left transform self-start rounded bg-blackColor transition-all delay-75 duration-300"></div>
          </div>
        )}
      </div>
    </div>
  );
}
