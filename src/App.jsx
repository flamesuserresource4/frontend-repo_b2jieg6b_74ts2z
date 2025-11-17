import React from 'react'
import NeonNav from './components/NeonNav'
import HeroSpline from './components/HeroSpline'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Manifesto from './components/Manifesto'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <NeonNav />
      <HeroSpline />
      <Services />
      <Portfolio />
      <Manifesto />
      <Contact />
      <footer className="bg-black border-t border-white/10 py-10 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} KMP — Kiss My Pixel. Built in Paris.
      </footer>

      {/* Glitch styles */}
      <style>{`
        @keyframes glitch-skew { 0% { transform: skew(0deg); } 100% { transform: skew(2deg); } }
        @keyframes glitch { 0% { clip-path: inset(0 0 0 0); } 10% { clip-path: inset(10% 0 85% 0); } 20% { clip-path: inset(80% 0 5% 0); } 30% { clip-path: inset(40% 0 40% 0); } 40% { clip-path: inset(50% 0 30% 0); } 50% { clip-path: inset(10% 0 60% 0); } 60% { clip-path: inset(70% 0 15% 0); } 70% { clip-path: inset(30% 0 50% 0); } 80% { clip-path: inset(20% 0 65% 0); } 90% { clip-path: inset(60% 0 25% 0); } 100% { clip-path: inset(0 0 0 0); } }
        .glitch { position: relative; color: #fff; text-shadow: 0 0 12px rgba(255,255,255,0.8); }
        .glitch::before, .glitch::after { content: attr(data-text); position: absolute; left: 0; top: 0; width: 100%; overflow: hidden; }
        .glitch::before { left: 2px; text-shadow: -2px 0 #00e5ff; clip-path: inset(0 0 0 0); animation: glitch 2s infinite linear alternate-reverse; }
        .glitch::after { left: -2px; text-shadow: 2px 0 #ff2d95; clip-path: inset(0 0 0 0); animation: glitch 2.5s infinite linear alternate; }
      `}</style>
    </div>
  )
}

export default App
