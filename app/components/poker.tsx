import { motion } from "motion/react";
import React, { useEffect, useState } from "react";


interface PokerProps {
    frontImage: string;
}


export default function Poker({frontImage} : PokerProps) {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setFlipped(true), 500); // 500ms 后翻转
        return () => clearTimeout(timer); // 组件卸载时清除定时器
      }, []);

    return (
      <div
        className="relative w-32 h-44 perspective "
        onClick={() => setFlipped(!flipped)}
      >
        <motion.div
          className="absolute w-full h-full transition-transform duration-500 "
          animate={{ rotateY: flipped ? 180 : 0 }}
          whileHover={{scale:1.05}}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* 正面 */}
          <div className=" bg-cover absolute rounded-lg w-full h-full flex items-center justify-center backface-hidden"
            style={{
                backgroundImage: "url('/steins.jpg')",
            }}
          >
          </div>
  
          {/* 反面 */}
          <div
            className=" bg-cover absolute rounded-lg w-full h-full flex items-center justify-center"
            style={{
              backgroundImage: `url(${frontImage})` ,
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
          >
          </div>
        </motion.div>
      </div>
    );
}
