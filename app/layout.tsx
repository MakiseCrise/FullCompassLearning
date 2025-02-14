import "./globals.css";
import { Bangers } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Bangers({
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
