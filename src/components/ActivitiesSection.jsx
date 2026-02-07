import React from 'react'

const ActivitiesSection = ({ t }) => {
  const activities = [
    { icon: '🤿', name: t.activities.snorkeling, desc: 'Explore coral reefs and marine life' },
    { icon: '🛁', name: t.activities.mudBath, desc: 'Relax in therapeutic mud baths' },
    { icon: '🚣', name: t.activities.kayaking, desc: 'Paddle through crystal clear waters' },
    { icon: '🏍️', name: t.activities.quadBikes, desc: 'Adventure through jungle trails' },
    { icon: '🪂', name: t.activities.zipLine, desc: 'Soar above the treetops' },
    { icon: '🍹', name: t.activities.floatingBar, desc: 'Party on the water with drinks' }
  ]

  return (
    <section className="activities-section" id="activities">
      <div className="section-header">
        <h2>🎯 Activities & Adventures</h2>
        <p className="section-subtitle">Unforgettable experiences await</p>
      </div>
      <div className="activities-grid">
        {activities.map((activity, idx) => (
          <div key={idx} className="activity-card">
            <div className="activity-icon">{activity.icon}</div>
            <h3>{activity.name}</h3>
            <p>{activity.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ActivitiesSection
