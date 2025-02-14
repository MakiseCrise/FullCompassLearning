'use client'
import { AnimatePresence, motion } from "motion/react";
import React, { useRef, useState } from "react";

export default function Typing(){
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null)
  const [textValue,setTextValue] = useState("")
  return (
    <main className="p-5 flex flex-col">
      <textarea onChange={(e) => setTextValue(e.target.value)} 
      className="opacity-0 w-0 h-0"
      ref={textAreaRef}
      />
      <div
      onClick={() => textAreaRef.current!.focus()} 
      className="min-h-96 bg-neutral-900 text-slate-100 whitespace-pre-wrap text-xl min-w-full p-5 overflow-x-hidden"
      >
        <AnimatePresence>
        {textValue.split("").map((letter,index) => {
          return <motion.span 
                  key={index}
                  initial={{opacity:0, y:100 }}
                  animate={{opacity:1, y:0}}
                  exit={{
                    opacity:0,
                    y:100,
                    transition:{
                      duration:0.15
                    }
                  }}
                  className={letter != "\n" ? "inline-block mr-0.5" : "inline"}
                  >
                {letter}
                </motion.span>
        })}
        </AnimatePresence>
      </div>
    </main>
  );

}