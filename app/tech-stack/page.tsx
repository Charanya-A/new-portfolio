'use client'
import React from 'react'
import {
  SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiNextdotjs, SiReact,
  SiPostgresql, SiPostman, SiGooglechrome, SiGithub, SiDocker,
  SiTypescript
} from 'react-icons/si'

const techStack = [
  { icon: <SiHtml5 className="hover:text-orange-500" />, name: 'HTML' },
  { icon: <SiCss3 className="hover:text-blue-500" />, name: 'CSS' },
  { icon: <SiJavascript className="hover:text-yellow-400" />, name: 'JavaScript' },
  { icon: <SiTailwindcss className="hover:text-sky-400" />, name: 'Tailwind CSS' },
  { icon: <SiNextdotjs className="hover:text-white" />, name: 'Next.js' },
  { icon: <SiReact className="hover:text-cyan-400" />, name: 'React.js' },
  { icon: <SiPostgresql className="hover:text-blue-600" />, name: 'PostgreSQL' },
  { icon: <SiPostman className="hover:text-orange-400" />, name: 'Postman' },
  { icon: <SiGooglechrome className="hover:text-yellow-500" />, name: 'Chrome' },
  { icon: <SiGithub className="hover:text-white" />, name: 'GitHub' },
  { icon: <SiDocker className="hover:text-blue-400" />, name: 'Docker' },
  { icon: <SiTypescript className="hover:text-blue-500" />, name: 'TypeScript' },
]

export default function TechStack() {
  return (
    <section className="w-full py-16 text-white mb-30">
      <h1 className="text-4xl font-bold text-gray-300 mb-8">Tech Stack</h1>
      <p className="text-gray-300 mb-8">
        I work with a wide range of tools and technologies to build modern and efficient applications. Here are some of my favorites.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center">
        {techStack.map((tech, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-2 text-gray-300 transition-all duration-200 hover:scale-110 hover:shadow-lg hover:text-gray-900 transform-gpu opacity-0 animate-fadeIn"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <span className="text-4xl">{tech.icon}</span>
            <span className="text-sm text-center">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
