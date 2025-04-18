'use client'

import React, { useState } from 'react'

export default function ConnectSection() {
  const [form, setForm] = useState({ fname: '', lname: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.fname || !form.lname || !form.email || !form.message) {
      alert('Please fill all the fields.')
      return
    }
    setSubmitted(true)
    setForm({ fname: '', lname: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="w-full px-6 py-12 bg-zinc-900 text-white flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-600">
        <h2 className="text-4xl font-bold text-center text-gray-300 mb-4">Let’s Connect!</h2>
        <p className="text-center text-gray-300 mb-8">
          Got a question, a project in mind, or just want to chat? Drop me a line—I'd love to hear from you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="fname"
              placeholder="First Name"
              value={form.fname}
              onChange={handleChange}
              className="p-3 rounded-md w-full bg-gray-200 text-black border border-gray-400"
              required
            />
            <input
              type="text"
              name="lname"
              placeholder="Last Name"
              value={form.lname}
              onChange={handleChange}
              className="p-3 rounded-md w-full bg-gray-200 text-black border border-gray-400"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded-md w-full bg-gray-200 text-black border border-gray-400"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="p-3 rounded-md w-full bg-gray-200 text-black border border-gray-400"
            required
          />

          <button
            type="submit"
            className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Send Message
          </button>

          {submitted && (
            <div className="text-green-400 text-center font-semibold">
              ✅ Your message has been sent!
            </div>
          )}
        </form>
      </div>

      {/* Copyright */}
      <footer className="mt-10 text-sm text-gray-400 text-center">
        © 2025 Charanya A. All rights reserved.
      </footer>
    </section>
  )
}
