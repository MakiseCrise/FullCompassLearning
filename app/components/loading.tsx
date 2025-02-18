"use client";
import { motion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Loading() {
  const [isLoaded, setIsLoaded] = useState(true);
  const pathname = usePathname();  // 获取当前路径名

  useEffect(() => {
    // 页面路径变化时设置 isLoaded 为 false，表示加载中
    setIsLoaded(false);

    // 模拟页面加载过程，延迟一段时间后设置为 true，表示加载完成
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // 模拟1秒钟的加载时间

    return () => clearTimeout(timer); // 清理定时器
  }, [pathname]); // 监听路径变化


  return (
    <motion.div
      className="absolute flex justify-center items-center w-screen h-screen text-5xl z-20  bg-gray-200"
      animate={isLoaded ? {x:'-100%'}:{x:0}}
      transition={{
        duration: 1,
      }}
    >
      <div className="flex justify-center items-center">
        <p>LOADING</p>
        <motion.div>
          {"...".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: index * 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
