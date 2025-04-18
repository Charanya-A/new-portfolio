'use client'

import React from 'react'

const projects = [
  {
    title: 'My Digital Space',
    description: 'Vite · React · TypeScript · TailwindCSS',
    url: 'https://github.com/Charanya-A/Portfolio-new-',
    image: 'porfolio.png',
  },
  {
    title: 'Early Disease Detection in Potato Plant using Deep Learning for Precise Agriculture',
    description: 'Deep Learning',
    url: 'https://github.com/Charanya-A/Early-Disease-Detection-in-Potato-Plant-using-Deep-Learning-for-Precise-Agriculture',
    image: 'potato.jpg',
  },
  {
    title: 'Real-Time LPG Leakage Detection System using MQ-5 sensor and Arduino UNO',
    description: 'Embedded System',
    url: 'https://github.com/Charanya-A/Real-Time-LPG-Leakage-Detection-System-using-MQ-5-sensor-and-Arduino-UNO',
    image: 'lpg.jpg',
  },
  {
    title: 'Waste Food Management System',
    description: 'Python',
    url: 'https://github.com/Charanya-A/Waste-food-management-system',
    image: 'waste.jpg',
  },
]

export default function ProjectsPage() {
  return (
    <div className="w-full space-y-10">
      <h1 className="text-4xl font-bold text-gray-300">Projects</h1>
      <p className="text-gray-300">
        Here are some of the projects I've worked on. Each reflects my passion for solving real-world problems through technology.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-md transition-transform transform hover:scale-[1.01]"
          >
            <div className="relative h-28 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition duration-300 group-hover:opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white text-lg font-semibold bg-gray-400 bg-opacity-50 px-4 py-2 rounded-md">View Project</span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-xl font-bold mb-1 text-black dark:text-white">{project.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
