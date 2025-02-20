"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function Navbar() {
  const options = ["HOME", "EXP"];
  const [focused, setFocused] = React.useState("");
  const [selected, setSelected] = React.useState("HOME");
  const url = ["/", "/exp"];
  const [isHidden,setIsHidden] = React.useState(false)

  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/") {
      setSelected("HOME");
    } else if (pathname === "/exp") {
      setSelected("EXP");
    }
  }, [pathname]);

  return (
    <motion.div className="relative h-screen w-10 overflow-hidden"
      variants={{
        hidden:{
          x:"-100%"
        },
        visible:{
          x:"0%"
        }
      }}
      animate={ isHidden ? "hidden" : "visible" }
    >
      <motion.div
        className="absolute w-10 h-screen bg-gray-300 z-10 opacity-95"
        animate={{
          x: -100,
        }}
        transition={{
          duration: 0.75,
          delay: 2,
        }}
      ></motion.div>

      {/*box1*/}
      <div className="flex flex-col items-center">
        <p className="font-banger relative text-xl text-center mt-4">MKS</p>

        {options.map((item, index) => (
          <motion.div
            key={item}
            className="-rotate-90 mt-5 relative "
            onClick={() => setSelected(item)}
            onMouseEnter={() => setFocused(item)}
            onMouseLeave={() => setFocused("")}
          >
            {/*  area 1   */}

            {selected === item ? (
              <motion.div
                layoutId="underline"
                className="absolute w-full h-1 bg-black bottom-0"
              ></motion.div>
            ) : null}

            <motion.p
              animate={focused === item ? { scale: 1.5 } : { scale: 1 }}
            >
              <Link href={url[index]}>{item}</Link>
            </motion.p>
          </motion.div>
        ))}
      </div>
      {/*box2*/}
      <div className="text-center">
        <a href="https://github.com/MakiseCrise">
        <i
          className="absolute iconfont icon-github-fill bottom-0 left-0.5 "
          style={{ fontSize: "2rem" }}
        ></i>
        </a>
      </div>
    </motion.div>
  );
}
