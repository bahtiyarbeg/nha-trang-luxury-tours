import React, { useState } from 'react'

const TourCard = ({ tour }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="tour-card" onClick={() => setExpanded(!expanded)}>
      <div className="tour-icon">{tour.icon}</div>
      <h3 className="tour-title">{tour.data.title}</h3>
      <p className="tour-time">⏰ {tour.data.time}</p>
      
      {!expanded && (
        <p className="tour-preview">{tour.data.description.substring(0, 80)}...</p>
      )}
      
      {expanded && (
        <div className="tour-details">
          <div className="detail-section">
            <h4>📋 {tour.data.description.split(',')[0]}</h4>
            <p>{tour.data.description}</p>
          </div>
          
          <div className="detail-section">
            <h4>✅ Включено / Included</h4>
            <p>{tour.data.included}</p>
          </div>
          
          <div className="detail-section">
            <h4>❌ Не включено / Not Included</h4>
            <p>{tour.data.notIncluded}</p>
          </div>
          
          <div className="detail-section">
            <h4>🎒 Что брать / What to Bring</h4>
            <p>{tour.data.toBring}</p>
          </div>
          
          <button className="book-button">Забронировать / Book Now</button>
        </div>
      )}
      
      <div className="expand-indicator">
        {!expanded ? '▼ Подробнее / More' : '▲ Скрыть / Hide'}
      </div>
    </div>
  )
}

export default TourCard
