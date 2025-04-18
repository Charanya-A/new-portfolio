export default function EducationSection() {
  return (
    <section className="w-full px-6 pt-4 pb-12 bg-zinc-900 text-white">
      <h1 className="text-4xl font-bold text-gray-300 mb-8">Education</h1>

      <div className="space-y-6 max-w-3xl mx-auto">
        {/* Degree 1 */}
        <div className="border border-gray-700 rounded-xl p-6 shadow-md bg-zinc-800 text-white space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-semibold">Bachelor of Engineering</h2>
            <span className="text-sm text-gray-400 mt-1 sm:mt-0">2021 – 2025</span>
          </div>
          <p className="text-sm text-gray-300">Information Science</p>
          <p className="text-sm">Siddaganga Institute Of Technology</p>
          <p className="text-sm font-medium">CGPA - 9.24</p>
        </div>

        {/* Degree 2 */}
        <div className="border border-gray-700 rounded-xl p-6 shadow-md bg-zinc-800 text-white space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-semibold">Pre-University Course (PUC)</h2>
            <span className="text-sm text-gray-400 mt-1 sm:mt-0">2019 – 2021</span>
          </div>
          <p className="text-sm text-gray-300">PCMC</p>
          <p className="text-sm">Vidyanidhi PU College</p>
          <p className="text-sm font-medium">Percentage - 98%</p>
        </div>

        {/* Degree 3 */}
        <div className="border border-gray-700 rounded-xl p-6 shadow-md bg-zinc-800 text-white space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-semibold">10th Standard</h2>
            <span className="text-sm text-gray-400 mt-1 sm:mt-0">2019</span>
          </div>
          <p className="text-sm">Sri Chaitanya Techno School</p>
          <p className="text-sm font-medium">Percentage - 95.4%</p>
        </div>
      </div>
    </section>
  );
}
