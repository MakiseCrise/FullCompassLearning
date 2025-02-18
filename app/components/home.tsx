import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import pic from "../../public/avatar.png";
import { motion } from "motion/react";



export default function IHome() {
  const Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration:1,
        staggerChildren: 0.1, 
      },
    },
  };


  return (
    <div className="flex flex-col items-center w-screen h-auto pt-3 ">
      <Avatar className="w-28 h-28">
        <AvatarImage src={pic.src} />
        <AvatarFallback>Makise</AvatarFallback>
      </Avatar>

      <motion.div className="flex flex-col items-center w-screen h-auto"
                  variants={Variants}
                  initial="hidden"
                  animate="visible"
      >
        <motion.p className="mt-5 text-4xl">
         {
          '<Developer />'.split("").map((char,index) =>(
              <motion.span key={index} 
              variants={Variants}
              >
                {char}
              </motion.span>
          ))
         }
        </motion.p>
        <motion.p className="opacity-65 text-slate-800">
        {
          'Keep Going'.split("").map((char,index) =>(
              <motion.span key={index} 
              variants={Variants}
              >
                {char}
              </motion.span>
          ))
         }
        </motion.p>
      </motion.div>
    </div>
  );
}
