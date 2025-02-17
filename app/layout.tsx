import "./globals.css";
import { Bangers, Teko } from 'next/font/google'
import '../public/icons/iconfont.css'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Teko({
  subsets: ['latin'],
  display: 'swap',
  weight:"400"
})

const banger = Bangers({
  subsets: ['latin'],
  display: 'swap',
  weight:"400"
})

 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
      </body>
    </html>
  )
}
