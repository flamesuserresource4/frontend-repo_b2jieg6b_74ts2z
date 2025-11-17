import React, { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative bg-black text-white py-24 border-t border-white/10">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_10%_10%,#f0f,transparent_25%),radial-gradient(circle_at_90%_20%,#0ff,transparent_25%),radial-gradient(circle_at_40%_90%,#ff0,transparent_25%)]" />
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">CONTACT</h2>
          <p className="text-xl text-white/80">
            Commission a disruption. Let’s bend your brand’s physics.
          </p>
          <div className="mt-8 space-y-2 text-white/70">
            <p>Paris / Remote</p>
            <p>contact@kissmypixel.xyz</p>
            <p>@kissmypixel</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <input required placeholder="Name" className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
          <input required type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <input placeholder="Company / Project" className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
          <textarea required placeholder="Tell us everything" rows={6} className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-400" />
          <button className="px-8 py-3 bg-white text-black font-black tracking-widest uppercase hover:bg-neutral-200">
            {sent ? 'Message transmitted' : 'Send transmission'}
          </button>
        </form>
      </div>
    </section>
  )
}
