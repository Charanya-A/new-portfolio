export default function EducationSection() {
    return (
      <section className="w-full px-6 pt-4 pb-12 bg-zinc-900 text-white">
        <h1 className="text-4xl font-bold text-gray-300 mb-8">Education</h1>
  
        <div className="space-y-6 max-w-3xl mx-auto">
          {/* Card 1 */}
          <div className="border border-gray-400 rounded-xl p-6 shadow-md bg-gray-100 text-black">
            <p className="text-lg font-semibold mb-1">
              Bachelor of Engineering
              <span className="ml-3 px-3 py-1 bg-gray-300 text-sm rounded-full">Information Science</span>
              <span className="ml-3 px-3 py-1 bg-gray-300 text-sm rounded-full">2021–2025</span>
            </p>
            <p className="text-sm text-gray-700">Siddaganga Institute Of Technology</p>
            <p className="text-sm mt-1 font-medium">CGPA - 9.24</p>
          </div>
  
          {/* Card 2 */}
          <div className="border border-gray-400 rounded-xl p-6 shadow-md bg-gray-100 text-black">
            <p className="text-lg font-semibold mb-1">
              Pre-University Course (PUC)
              <span className="ml-3 px-3 py-1 bg-gray-300 text-sm rounded-full">PCMC</span>
              <span className="ml-3 px-3 py-1 bg-gray-300 text-sm rounded-full">2019–2021</span>
            </p>
            <p className="text-sm text-gray-700">Vidyanidhi PU College</p>
            <p className="text-sm mt-1 font-medium">Percentage - 98%</p>
          </div>
  
          {/* Card 3 */}
          <div className="border border-gray-400 rounded-xl p-6 shadow-md bg-gray-100 text-black">
            <p className="text-lg font-semibold mb-1">
              10th Standard
              <span className="ml-3 px-3 py-1 bg-gray-300 text-sm rounded-full">2019</span>
            </p>
            <p className="text-sm text-gray-700">Sri Chaitanya Techno School</p>
            <p className="text-sm mt-1 font-medium">Percentage - 95.4%</p>
          </div>
        </div>
      </section>
    )
  }
  