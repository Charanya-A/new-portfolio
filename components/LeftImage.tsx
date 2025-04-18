import { MailIcon, DownloadIcon } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function LeftImage() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="bg-gray-300 dark:bg-gray-700 px-6 py-8 rounded-2xl w-[290px] h-[72%] flex flex-col justify-between items-center text-center shadow-xl animate-float">
        
        <div className="flex flex-col items-center mb-2">
          <img
            src="pic.jpg"
            alt="Profile"
            className="w-40 h-40 rounded-xl object-cover border-[3px] border-black dark:border-white"
          />

          <h2 className="mt-4 text-xl font-bold text-gray-900 dark:text-white mb-2">
            Charanya A
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-5">
            Bringing designs to life
          </p>

          <div className="flex items-center justify-center space-x-6 mb-6">
            <a
              href="https://github.com/Charanya-A"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-400 dark:bg-gray-700 p-2.5 rounded-full shadow hover:scale-105 transition"
            >
              <FaGithub className="text-xl text-black dark:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/charanya-amarnath-26169a246"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-400 dark:bg-gray-700 p-2.5 rounded-full shadow hover:scale-105 transition"
            >
              <FaLinkedin className="text-xl text-black" />
            </a>
            <a
              href="https://www.instagram.com/charanya_amarnath?igshid=NGExMmI2YTkyZg=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-400 dark:bg-gray-700 p-2.5 rounded-full shadow hover:scale-105 transition"
            >
              <FaInstagram className="text-xl text-black" />
            </a>
          </div>

          <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 bg-transparent">
            <MailIcon className="w-4 h-4 mr-2" />
            <span>charanya.1si21is015@gmail.com</span>
          </div>
        </div>

        <a
          href="https://drive.google.com/file/d/1JwcYs43-Rk7kHhnF66HWz-fTp71wLnty/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-4 py-2 w-full text-black bg-white dark:bg-gray-900 border border-gray-400 dark:border-gray-600 rounded-md text-sm flex items-center justify-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <DownloadIcon className="w-4 h-4 text-black dark:text-white" />
          <span>View & Download Resume</span>
        </a>
      </div>
    </div>
  );
}
