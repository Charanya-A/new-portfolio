import './globals.css';
import React, { PropsWithChildren } from 'react';
import LeftImage from '@/components/LeftImage';
import NavigationBar from '@/components/navigation-bar/NavigationBar';

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-zinc-900 text-white">
        {/* Sidebar with Image */}
        <div className="fixed left-0 top-0 w-[22%] h-screen z-10">
          <LeftImage />
        </div>

        {/* Main Content Area */}
        <main className="ml-[22%] mr-[8%] w-[70%] flex flex-col items-start justify-center min-h-screen px-5">
          {children}
        </main>

        {/* Vertical Navigation Bar */}
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-20">
          <NavigationBar />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;