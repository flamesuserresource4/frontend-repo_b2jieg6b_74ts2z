import React from 'react'

// GlitchTitle: oversized neon headline with layered text clones and flicker
export default function GlitchTitle({ text = 'KISS MY PIXEL', className = '' }) {
  return (
    <div className={`relative select-none leading-none font-black tracking-tight ${className}`}>
      <span className="glitch relative inline-block" data-text={text}>
        {text}
      </span>
    </div>
  )
}
