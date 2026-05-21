export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <nav className="bg-slate-950 border-b border-slate-700 sticky top-0">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Site</h1>
          <a href="/" className="hover:text-blue-400 transition">Home</a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-slate-300">
              Welcome to my corner of the web. I'm building something here.
            </p>
          </div>

          <div className="bg-slate-700 bg-opacity-50 rounded-lg p-8 space-y-4">
            <h2 className="text-3xl font-bold">Who I Am</h2>
            <p className="text-slate-200 leading-relaxed">
              This is your About page. Replace this text with your own bio, background, or story.
              Make it personal. Tell people what you do, what you care about, and what drives you.
            </p>
          </div>

          <div className="bg-slate-700 bg-opacity-50 rounded-lg p-8 space-y-4">
            <h2 className="text-3xl font-bold">What I Do</h2>
            <p className="text-slate-200 leading-relaxed">
              Describe your work, projects, or passion here. This is your stage.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}