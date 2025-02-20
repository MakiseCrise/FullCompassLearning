"use client";
import IHome from "./components/home";
import DecryptedText from "./components/decryptedText";
import Poker from "./components/poker";
import { motion } from "motion/react";
import { useState } from "react";
/*

    
*/
export default function Home() {
  const [items,setItems] = useState<number[]>([])
  const pokerImg = ["/CRS.jpg","/MYR.jpg","/OGB.jpg"]
  
  return (
    <div className="bg-gray-100 h-screen bg-[url('/MKS.png')] bg-cover text-center">
      <IHome />
      <div className="w-auto h-auto" onClick={() => { setItems( Array.from({ length: 3 }) )}}>
      <DecryptedText 
        className="text-5xl text-rose-400"
        encryptedClassName="text-5xl"
        text="CLICK!"
        speed={100}
        sequential={true}
      />
      </div>
      <motion.div className="flex justify-center  w-screen h-auto mt-12 gap-4">
        {
          items.map((_,index) => (
            <Poker frontImage={ pokerImg[index] } key={index}></Poker>
          ))
        }
      </motion.div>
    </div>
  );
}
