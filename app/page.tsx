const skills = [
  'AI & Product Thinking',
  'Full-Stack Development',
  'Python',
  'JavaScript / TypeScript',
  'Next.js',
  'Tailwind CSS',
  'API Design',
  'Problem Solving',
];

const projects = [
  {
    title: 'PharmaCycle.AI',
    description:
      'An AI-powered medicine stock management and redistribution platform that helps pharmacies monitor inventory, receive expiry alerts, and redistribute suitable medicines to nearby verified pharmacies and healthcare organizations that need them.',
    stack: ['AI', 'Inventory Management', 'Healthcare Tech', 'Redistribution'],
    link: 'https://pharm-cycle.vercel.app/',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-12">
        <header className="sticky top-0 z-50 mb-12 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between py-4">
            <div className="text-lg font-bold tracking-wide text-white">
              Ayomikun<span className="text-sky-400">.</span>
            </div>
            <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
              <a href="#about" className="transition hover:text-white">About</a>
              <a href="#projects" className="transition hover:text-white">Projects</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </div>
          </nav>
        </header>

        <section className="grid items-center gap-10 pb-20 pt-10 md:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-sky-300">
              Portfolio
            </p>
            <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building practical digital products with AI, code, and purpose.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              I’m Ayomikun, a software developer focused on creating thoughtful, impactful experiences.
              I enjoy solving real-world problems through clean design, efficient engineering, and meaningful user value.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-sky-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950 p-6 shadow-glow">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm uppercase tracking-[0.2em] text-sky-300">Profile</span>
              <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-1 text-xs text-emerald-300">
                Available
              </span>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950/80 p-5">
              <div className="mb-4 h-20 w-20 rounded-full bg-gradient-to-br from-sky-400 via-cyan-300 to-indigo-500" />
              <h2 className="text-2xl font-bold text-white">Ayomikun</h2>
              <p className="mt-2 text-sm text-slate-400">Software developer • Problem solver • Product thinker</p>
              <div className="mt-6 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span>Focus</span>
                  <span className="text-sky-300">AI + Web</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span>Location</span>
                  <span className="text-slate-200">Nigeria</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Work</span>
                  <span className="text-slate-200">Portfolio</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">About</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Turning ideas into useful digital experiences.</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
              <p className="text-lg leading-8 text-slate-300">
                I build software that helps people solve real-world problems through thoughtful interfaces and reliable engineering.
                My work blends product thinking, clean user experience, and practical implementation to create solutions that are not only impressive, but genuinely useful.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="mb-4 text-lg font-semibold text-white">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-sm text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">Projects</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Selected work</h2>
          </div>

          <div className="grid gap-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-sky-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
                  >
                    Visit Demo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-sky-500/10 via-slate-900 to-indigo-500/10 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">Contact</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Let’s build something useful.</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <a href="tel:+2348100474453" className="rounded-2xl border border-slate-700 bg-slate-950/60 p-5 transition hover:border-sky-500/50">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Phone</p>
                <p className="mt-3 text-xl font-semibold text-white">08100474453</p>
              </a>
              <a href="mailto:habeebayomikun600@gmail.com" className="rounded-2xl border border-slate-700 bg-slate-950/60 p-5 transition hover:border-sky-500/50">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Email</p>
                <p className="mt-3 break-all text-xl font-semibold text-white">habeebayomikun600@gmail.com</p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
