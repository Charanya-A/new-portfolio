import { MailIcon, DownloadIcon } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function LeftImage() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="bg-gray-200 dark:bg-gray-800 px-6 py-8 rounded-2xl w-[290px] h-[70%] flex flex-col justify-between items-center text-center shadow-xl">
        
        {/* Top Section: Profile Info */}
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <img
            src="/profile.png"
            alt="Profile"
            className="w-32 h-32 rounded-xl object-cover border-[3px] border-black dark:border-white"
          />

          {/* Name */}
          <h2 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
            Charanya A
          </h2>
          <p className="text-gray-500 text-sm mb-5">Bringing designs to life</p>

          {/* Social Icons */}
          <div className="flex items-center justify-center space-x-4 mb-4">
            <a href="#" className="bg-white dark:bg-gray-700 p-3 rounded-full shadow hover:scale-105 transition">
              <FaGithub className="text-xl text-gray-800 dark:text-white" />
            </a>
            <a href="#" className="bg-white dark:bg-gray-700 p-3 rounded-full shadow hover:scale-105 transition">
              <FaLinkedin className="text-xl text-blue-600" />
            </a>
            <a href="#" className="bg-white dark:bg-gray-700 p-3 rounded-full shadow hover:scale-105 transition">
              <FaInstagram className="text-xl text-pink-500" />
            </a>
          </div>
        </div>

        {/* Middle Section: Email */}
        <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 mb-4">
          <MailIcon className="w-4 h-4 mr-2" />
          <span>charanya.1si21is015@gmail.com</span>
        </div>

        {/* Bottom Section: Resume Download */}
        <a
          href="/resume.pdf"
          download
          className="mt-2 px-4 py-2 w-full text-black bg-white dark:bg-gray-900 border border-gray-400 dark:border-gray-700 rounded-md text-sm flex items-center justify-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <DownloadIcon className="w-4 h-4 text-black" />
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  )
}
