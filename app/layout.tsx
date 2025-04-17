
import './globals.css'
import React, { PropsWithChildren } from 'react'
import LeftImage from '@/components/LeftImage'
import NavigationBar from "@/components/navigation-bar/NavigationBar";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-zinc-900 text-white">
        {/* Left Section */}
        <div className="fixed left-0 top-0 w-[35%] h-full ">
          <LeftImage />
        </div>

        {/* Main Section */}
        <div className="mx-[30%] w-[90%] flex flex-col items-center justify-center min-h-screen px-5">
          {children}
        </div>

        {/* Right Navbar */}
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-20">
          <NavigationBar />
        </div>
      </body>
    </html>
  )
}

export default RootLayout

