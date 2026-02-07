import { useState } from 'react'
import './App.css'
import { translations } from './data/translations'
import Header from './components/Header'
import Hero from './components/Hero'
import ToursSection from './components/ToursSection'
import ActivitiesSection from './components/ActivitiesSection'
import Footer from './components/Footer'

function App() {
  const [language, setLanguage] = useState('en')
  const t = translations[language]

  return (
    <div className="app">
      <Header language={language} setLanguage={setLanguage} t={t} />
      <Hero t={t} />
      <ToursSection t={t} language={language} />
      <ActivitiesSection t={t} />
      <Footer t={t} />
    </div>
  )
}

export default App
