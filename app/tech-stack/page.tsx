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
      <p className="text-gray-300">
        I work with a wide range of tools and technologies to build modern and efficient applications. Here are some of my favorites.
      </p>

      <div className="overflow-hidden space-y-6 mt-10">
        <div className="whitespace-nowrap animate-marquee flex gap-10">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 text-xl px-6 py-2 text-gray-300 transition-all duration-200 hover:scale-105"
            >
              <span className="text-3xl">{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="whitespace-nowrap animate-marquee-reverse flex gap-10">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 text-xl px-6 py-2 text-gray-300 transition-all duration-200 hover:scale-105"
            >
              <span className="text-3xl">{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
