import React from 'react'

const Hero = ({ t }) => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h2 className="hero-title">{t.hero.title}</h2>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        <button className="cta-button">{t.hero.cta}</button>
      </div>
      <div className="hero-overlay"></div>
    </section>
  )
}

export default Hero
