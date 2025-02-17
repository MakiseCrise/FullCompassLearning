'use client'
import IHome from "./components/home";
import Navbar from "./components/navbar";
export default function Home() {
  return(
    <div className="bg-gray-100 h-screen bg-[url('/Background.webp')]"
      >
      <IHome/>
      <div className="absolute top-0">
        <Navbar/>  
      </div>
    </div>
    )
}
