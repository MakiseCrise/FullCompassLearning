import { motion } from "motion/react";
import React from "react";

export default function Navbar() {
  const options = ["HOME", "EXP", "TEST"];
  const [focused, setFocused] = React.useState("");
  const [selected, setSelected] = React.useState("HOME");


  return (
    <div className="relative h-screen w-10 overflow-hidden">
      <motion.div
        className="absolute w-10 h-screen bg-gray-300 z-10 opacity-95"
        animate={{
          x: -100
        }}
        transition={{
          duration: 0.75,
          delay: 0.5,
        }}
      ></motion.div>

      {/*box1*/}
      <div className="flex flex-col items-center">
        <p className="font-banger relative text-xl text-center mt-4">MKS</p>

        {options.map((item) => (
          <motion.div
            key={item}
            className="-rotate-90 mt-5 relative "
            onClick={() => setSelected(item)}
            onMouseEnter={() => setFocused(item)}
            onMouseLeave={() => setFocused("")}
          >
            

            {selected === item ? (
              <motion.div
                layoutId="underline"
                className="absolute w-full h-1 bg-black bottom-0"
              ></motion.div>
            ) : null}

            <motion.p
              animate={focused === item ? {scale:1.5} : {scale:1} }
            >
              {item}
            </motion.p>
          </motion.div>
        ))}
      </div>
      {/*box2*/}
      <div className="text-center">
        <i
          className="absolute iconfont icon-github-fill bottom-0 left-0.5 "
          style={{ fontSize: "2rem" }}
        ></i>
      </div>
    </div>
  );
}
