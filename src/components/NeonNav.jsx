import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function NeonNav() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#home', label: 'HOME' },
    { href: '#services', label: 'SERVICES' },
    { href: '#work', label: 'WORK' },
    { href: '#about', label: 'MANIFESTO' },
    { href: '#contact', label: 'CONTACT' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#home" className="font-black text-2xl tracking-tighter text-white">
          KMP
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-white/90 hover:text-white text-sm font-semibold tracking-widest">
              {l.label}
            </a>
          ))}
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white text-lg font-semibold">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
