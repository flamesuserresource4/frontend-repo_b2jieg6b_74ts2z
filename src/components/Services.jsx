import React from 'react'

const items = [
  { title: 'Kinetic Brand Systems', desc: 'Living identities, motion-led design, variable logos, sonic marks.' },
  { title: 'Anti-Ad Campaigns', desc: 'Subvert the format. Campaigns that hack culture and ignore rules.' },
  { title: 'Immersive Web & Experiments', desc: 'WebGL, WebGPU, Spline, shaders, realtime generative interfaces.' },
  { title: 'Film & Post-Production', desc: 'Music video energy for brands. Editorial rhythm. Neon grade.' },
  { title: 'Interactive Installations', desc: 'Pop-ups, events and spatial experiences with sensors + projection.' },
  { title: 'AI x Pixelcraft', desc: 'Model-led visuals, diffusion choreography, dataset branding.' },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-black text-white py-24 border-t border-white/10">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_10%,#22d3ee,transparent_40%),radial-gradient(circle_at_80%_30%,#a855f7,transparent_40%),radial-gradient(circle_at_50%_80%,#ec4899,transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-12">SERVICES</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((it, i) => (
            <div key={i} className="group p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="flex items-start justify-between">
                <h3 className="text-2xl md:text-3xl font-extrabold">{it.title}</h3>
                <span className="text-cyan-300 text-sm tracking-widest">#{String(i+1).padStart(2,'0')}</span>
              </div>
              <p className="mt-3 text-white/80">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
