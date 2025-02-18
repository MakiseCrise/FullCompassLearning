import "./globals.css";
import { Bangers, Teko } from "next/font/google";
import "../public/icons/iconfont.css";
import Loading from "./components/loading";
import Navbar from "./components/navbar";

const inter = Teko({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const banger = Bangers({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  

  return (
    <html lang="en" className={inter.className}>
      <body>
      <div className="absolute top-0">
        <Navbar/>
      </div>
        <Loading></Loading>
        {children}
      </body>
    </html>
  );
}
