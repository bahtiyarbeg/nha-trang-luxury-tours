let currentLanguage = 'en';

// Language switcher
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    currentLanguage = e.target.dataset.lang;
    updateLanguage();
  });
});

function updateLanguage() {
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[currentLanguage][key]) {
      el.textContent = translations[currentLanguage][key];
    }
  });
  
  // Re-render tours
  renderTours();
}

function renderTours() {
  const container = document.getElementById('toursContainer');
  container.innerHTML = '';
  
  const t = translations[currentLanguage];
  const tours = t.tours;
  
  Object.keys(tours).forEach(tourKey => {
    const tour = tours[tourKey];
    const tourCard = createTourCard(tour);
    container.appendChild(tourCard);
  });
}

function createTourCard(tour) {
  const card = document.createElement('div');
  card.className = 'tour-card';
  
  card.innerHTML = `
    <div class="tour-header">
      <h3>${tour.title}</h3>
      <span class="tour-time">⏰ ${tour.time}</span>
    </div>
    <div class="tour-body">
      <p class="tour-description">${tour.description}</p>
      
      <div class="tour-details">
        <div class="detail-section">
          <h4>✅ Included:</h4>
          <p>${tour.included}</p>
        </div>
        
        <div class="detail-section">
          <h4>❌ Not Included:</h4>
          <p>${tour.notIncluded}</p>
        </div>
        
        <div class="detail-section">
          <h4>🎒 Bring:</h4>
          <p>${tour.toBring}</p>
        </div>
      </div>
    </div>
  `;
  
  return card;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderTours();
});
