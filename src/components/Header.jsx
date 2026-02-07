import React from 'react'

const Header = ({ language, setLanguage, t }) => {
  const languages = [
    { code: 'ru', name: 'Русский' },
    { code: 'en', name: 'English' },
    { code: 'tr', name: 'Türkçe' },
    { code: 'ko', name: '한국어' },
    { code: 'zh', name: '中文' },
    { code: 'fr', name: 'Français' },
    { code: 'vi', name: 'Tiếng Việt' },
    { code: 'uz', name: 'O\'zbekcha' }
  ]

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>🌊 Nha Trang Luxury</h1>
        </div>
        <nav className="nav">
          <a href="#home">{t.nav.home}</a>
          <a href="#tours">{t.nav.tours}</a>
          <a href="#activities">{t.nav.activities}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <div className="language-switcher">
          <select 
            value={language} 
            onChange={(e) => setLanguage(e.target.value)}
            className="language-select"
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  )
}

export default Header
