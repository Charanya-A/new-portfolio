export default function HomePage() {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <div className="space-y-6">
        {/* Heading */}
        <h1 className="text-6xl font-bold leading-tight">
          <span className="text-gray-200">Full Stack</span> <br />
          <span className="text-gray-400">AI Developer</span>
        </h1>
        {/* Updated Description */}
        <div className="text-lg text-gray-300 max-w-prose space-y-3">
          <p>
          Hey! I’m an aspiring full stack developer with a deep curiosity for how things work behind the screen. I’m constantly exploring new technologies, learning new programming languages, and diving into the intricacies of both frontend and backend development. Currently, I’m focused on building and refining my skills, taking on new projects to apply what I learn and grow as a developer.
          </p>
          <p>
          I love solving complex problems and experimenting with innovative ideas. Turning abstract concepts into real, usable digital experiences is what drives me. Each bug I fix and every new feature I implement feels like a small achievement in the bigger journey of becoming a better developer and creating impactful solutions.
          </p>
          <p>
          Outside of coding, you’ll usually find me sketching, drawing different forms of art, spending time with friends, or just recharging with music and good conversations. I believe in staying creative, connected, and curious.
          </p>
        </div>

      </div>
    </section>
  );
}
