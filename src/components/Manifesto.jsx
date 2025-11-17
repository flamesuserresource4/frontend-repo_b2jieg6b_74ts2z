import React from 'react'

export default function Manifesto() {
  return (
    <section id="about" className="relative bg-black text-white py-24 border-t border-white/10">
      <div className="absolute inset-0 opacity-10 bg-[conic-gradient(from_180deg_at_50%_50%,#00e5ff,#a855f7,#ff2d95,#00e5ff)]" />
      <div className="relative max-w-5xl mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-10">MANIFESTO</h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl md:text-2xl leading-relaxed font-semibold">
            We don’t make ads. We stage interventions. We splice rave posters with code, Paris nights with neon syntax. We love pixels because they misbehave. We worship stories that refuse permission.
          </p>
          <ul className="mt-8 grid md:grid-cols-2 gap-6 list-none p-0">
            <li className="p-6 border border-white/10 bg-white/5">Break the grid. Then break the broken grid.</li>
            <li className="p-6 border border-white/10 bg-white/5">Ship kinetic. Static is a lie the screen tells.</li>
            <li className="p-6 border border-white/10 bg-white/5">Algorithms are brushes. Data is pigment.</li>
            <li className="p-6 border border-white/10 bg-white/5">Beauty is a glitch. Keep it.</li>
          </ul>
          <p className="mt-10 text-lg text-white/80">
            Based in Paris. Fluent in chaos. Built for brave brands and reckless dreamers.
          </p>
        </div>
      </div>
    </section>
  )
}
