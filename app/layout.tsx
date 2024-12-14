import type { Metadata } from 'next'
import localFont from 'next/font/local'

import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const spaceGrotesk = localFont({
  src: './fonts/SpaceGrotesk-Light.ttf',
  variable: '--font-space-grotesk',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'portfolio website',
  description: 'Generated by create next app',
  icons: {
    icon: '/favicon.ico', // 정적 파일 경로
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20">
          <Navbar />
          <div className="flex flex-col flex-1 items-center w-full">
            {children}
          </div>

          <Footer />
        </div>
      </body>
    </html>
  )
}
