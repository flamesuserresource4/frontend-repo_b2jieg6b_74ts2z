import React from 'react'
import Spline from '@splinetool/react-spline'
import GlitchTitle from './GlitchTitle'

export default function HeroSpline() {
  return (
    <section id="home" className="relative h-[100svh] bg-black overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/90 pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-24">
        <div className="space-y-6">
          <GlitchTitle text="KISS MY PIXEL" className="text-[12vw] md:text-[8vw] text-white" />
          <p className="max-w-2xl text-white/80 text-lg md:text-2xl font-medium">
            Paris-born studio mutating brands with cybernetic storytelling, kinetic identities and rule-breaking experiences.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <a href="#work" className="px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold tracking-wide uppercase">
              See the Disruption
            </a>
            <a href="#contact" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold tracking-wide uppercase">
              Initiate a Glitch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
