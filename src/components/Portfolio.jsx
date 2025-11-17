import React from 'react'

const works = [
  { title: 'NEON PARADOX', tag: 'AI MUSIC DROP', colors: 'from-fuchsia-500 to-violet-600' },
  { title: 'PIXEL MANIFEST', tag: 'ANTI-CAMPAIGN', colors: 'from-cyan-400 to-emerald-500' },
  { title: 'GHOST IN THE BROWSER', tag: 'WEB/GL', colors: 'from-rose-500 to-orange-500' },
  { title: 'PARIS SUBTERRANE', tag: 'INSTALLATION', colors: 'from-yellow-400 to-lime-500' },
  { title: 'DATA RAVE', tag: 'FASHION x TECH', colors: 'from-blue-500 to-cyan-500' },
  { title: '404 SAINT', tag: 'SHORT FILM', colors: 'from-purple-500 to-pink-600' },
]

export default function Portfolio() {
  return (
    <section id="work" className="relative bg-black text-white py-24 border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(transparent,transparent_31px,#111_32px),linear-gradient(90deg,transparent,transparent_31px,#111_32px)] bg-[length:32px_32px]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-12">PORTFOLIO</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {works.map((w, i) => (
            <article key={i} className="group relative aspect-[4/5] overflow-hidden border border-white/10">
              <div className={`absolute inset-0 bg-gradient-to-br ${w.colors} opacity-80 group-hover:opacity-100 transition-opacity`} />
              <div className="absolute inset-0 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-black bg-white px-2 py-1 text-xs font-black tracking-widest w-max">{w.tag}</span>
                <h3 className="mt-3 text-3xl font-extrabold leading-none">{w.title}</h3>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#contact" className="inline-block px-8 py-3 bg-white text-black font-black tracking-widest uppercase hover:bg-neutral-200">Commission Chaos</a>
        </div>
      </div>
    </section>
  )
}
