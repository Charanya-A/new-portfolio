export default function WorkExp() {
    return (
      <section className="w-full px-6 pt-4 pb-12 bg-zinc-900 text-white" id="work-experience">
        <h1 className="text-4xl font-bold text-gray-300 mb-10 sm:pl-25 md:pl-27">Work Experience</h1>
  
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="border border-gray-700 rounded-xl p-6 shadow-md bg-zinc-800 text-white space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-semibold">FullStack AI Developer Intern</h2>
              <span className="text-sm text-gray-400 mt-1 sm:mt-0">Mar 2025 – Present</span>
            </div>
  
            <div className="text-sm">
              <a
                href="https://stacklane.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-400 hover:underline"
              >
                StackLane
              </a>
            </div>
  
            <p className="text-gray-300 text-sm">
              Working on full-stack web applications using <span className="font-medium text-white">Next.js</span>, <span className="font-medium text-white">React.js</span>, and <span className="font-medium text-white">Node.js</span>. Also contributing to AI-driven development using <span className="font-medium text-white">Mistral models</span> and <span className="font-medium text-white">Weaviate vector database</span> to build intelligent features.
            </p>
          </div>
        </div>
      </section>
    );
  }
  