import React, { useState } from 'react'
import TourCard from './TourCard'

const ToursSection = ({ t, language }) => {
  const tours = [
    {
      id: 'nemo',
      icon: '🚤',
      data: t.tours.nemo
    },
    {
      id: 'robinson',
      icon: '🏝️',
      data: t.tours.robinson
    },
    {
      id: 'threeIslands',
      icon: '⛵',
      data: t.tours.threeIslands
    },
    {
      id: 'honTam1',
      icon: '🏖️',
      data: t.tours.honTam1
    },
    {
      id: 'honTam2',
      icon: '🛁',
      data: t.tours.honTam2
    },
    {
      id: 'cityTour',
      icon: '🏛️',
      data: t.tours.cityTour
    },
    {
      id: 'ninhThuan',
      icon: '🍇',
      data: t.tours.ninhThuan
    }
  ]

  return (
    <section className="tours-section" id="tours">
      <div className="section-header">
        <h2>✨ {language === 'ru' ? 'Наши туры' : language === 'en' ? 'Our Tours' : language === 'tr' ? 'Turlarımız' : language === 'ko' ? '우리의 투어' : language === 'zh' ? '我们的旅游' : language === 'fr' ? 'Nos circuits' : language === 'vi' ? 'Các tour của chúng tôi' : 'Bizning turlar'}</h2>
        <p className="section-subtitle">{language === 'ru' ? 'Выберите идеальное приключение' : language === 'en' ? 'Choose your perfect adventure' : language === 'tr' ? 'Mükemmel macerası seçin' : language === 'ko' ? '완벽한 모험을 선택하세요' : language === 'zh' ? '选择您的完美冒险' : language === 'fr' ? 'Choisissez votre aventure parfaite' : language === 'vi' ? 'Chọn cuộc phiêu lưu hoàn hảo của bạn' : 'Mukammal sarguzashtni tanlang'}</p>
      </div>
      <div className="tours-grid">
        {tours.map(tour => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  )
}

export default ToursSection
