// Current language
let currentLanguage = 'en';

// Set language
function setLanguage(lang) {
    currentLanguage = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update page content
    updatePageContent();
    renderTours();
}

// Update page text content
function updatePageContent() {
    const t = translations[currentLanguage];
    
    // Update hero section
    if (currentLanguage === 'en') {
        document.getElementById('hero-title').textContent = 'Discover Paradise in Nha Trang';
        document.getElementById('hero-subtitle').textContent = 'Experience luxury tours and unforgettable adventures';
        document.getElementById('cta-button').textContent = 'Explore Tours';
    } else if (currentLanguage === 'ru') {
        document.getElementById('hero-title').textContent = 'Откройте рай в Нячанге';
        document.getElementById('hero-subtitle').textContent = 'Испытайте роскошные туры и незабываемые приключения';
        document.getElementById('cta-button').textContent = 'Исследовать туры';
    } else if (currentLanguage === 'tr') {
        document.getElementById('hero-title').textContent = 'Nha Trang\'da Cenneti Keşfedin';
        document.getElementById('hero-subtitle').textContent = 'Lüks turlar ve unutulmaz maceralar yaşayın';
        document.getElementById('cta-button').textContent = 'Turları Keşfet';
    } else if (currentLanguage === 'ko') {
        document.getElementById('hero-title').textContent = '냐짱의 천국을 발견하세요';
        document.getElementById('hero-subtitle').textContent = '럭셔리 투어와 잊을 수 없는 모험을 경험하세요';
        document.getElementById('cta-button').textContent = '투어 탐색';
    } else if (currentLanguage === 'zh') {
        document.getElementById('hero-title').textContent = '发现芽庄的天堂';
        document.getElementById('hero-subtitle').textContent = '体验豪华旅游和难忘的冒险';
        document.getElementById('cta-button').textContent = '探索旅游';
    } else if (currentLanguage === 'fr') {
        document.getElementById('hero-title').textContent = 'Découvrez le paradis à Nha Trang';
        document.getElementById('hero-subtitle').textContent = 'Vivez des tours de luxe et des aventures inoubliables';
        document.getElementById('cta-button').textContent = 'Explorer les Tours';
    } else if (currentLanguage === 'vi') {
        document.getElementById('hero-title').textContent = 'Khám phá thiên đường ở Nha Trang';
        document.getElementById('hero-subtitle').textContent = 'Trải nghiệm các tour sang trọng và những cuộc phiêu lưu không quên';
        document.getElementById('cta-button').textContent = 'Khám Phá Các Tour';
    } else if (currentLanguage === 'uz') {
        document.getElementById('hero-title').textContent = 'Nha Trang\'da Jannatni Kashf Eting';
        document.getElementById('hero-subtitle').textContent = 'Hashamatli turlar va unutilmas sarguzashtlarni boshdan kechiring';
        document.getElementById('cta-button').textContent = 'Turlarni Kashf Eting';
    }
    
    // Update section titles
    const sectionTitle = document.getElementById('section-title');
    if (currentLanguage === 'en') {
        sectionTitle.textContent = 'Our Exclusive Tours';
    } else if (currentLanguage === 'ru') {
        sectionTitle.textContent = 'Наши Эксклюзивные Туры';
    } else if (currentLanguage === 'tr') {
        sectionTitle.textContent = 'Özel Turlarımız';
    } else if (currentLanguage === 'ko') {
        sectionTitle.textContent = '우리의 독점 투어';
    } else if (currentLanguage === 'zh') {
        sectionTitle.textContent = '我们的独家旅游';
    } else if (currentLanguage === 'fr') {
        sectionTitle.textContent = 'Nos Tours Exclusifs';
    } else if (currentLanguage === 'vi') {
        sectionTitle.textContent = 'Các Tour Độc Quyền Của Chúng Tôi';
    } else if (currentLanguage === 'uz') {
        sectionTitle.textContent = 'Bizning Eksklyuziv Turlar';
    }
    
    // Update footer
    const contactTitle = document.getElementById('contact-title');
    const hoursTitle = document.getElementById('hours-title');
    const locationTitle = document.getElementById('location-title');
    
    if (currentLanguage === 'en') {
        contactTitle.textContent = 'Contact';
        hoursTitle.textContent = 'Hours';
        locationTitle.textContent = 'Location';
    } else if (currentLanguage === 'ru') {
        contactTitle.textContent = 'Контакты';
        hoursTitle.textContent = 'Часы работы';
        locationTitle.textContent = 'Местоположение';
    } else if (currentLanguage === 'tr') {
        contactTitle.textContent = 'İletişim';
        hoursTitle.textContent = 'Saatler';
        locationTitle.textContent = 'Konum';
    } else if (currentLanguage === 'ko') {
        contactTitle.textContent = '연락처';
        hoursTitle.textContent = '영업 시간';
        locationTitle.textContent = '위치';
    } else if (currentLanguage === 'zh') {
        contactTitle.textContent = '联系方式';
        hoursTitle.textContent = '营业时间';
        locationTitle.textContent = '位置';
    } else if (currentLanguage === 'fr') {
        contactTitle.textContent = 'Contact';
        hoursTitle.textContent = 'Heures';
        locationTitle.textContent = 'Localisation';
    } else if (currentLanguage === 'vi') {
        contactTitle.textContent = 'Liên Hệ';
        hoursTitle.textContent = 'Giờ Làm Việc';
        locationTitle.textContent = 'Vị Trí';
    } else if (currentLanguage === 'uz') {
        contactTitle.textContent = 'Aloqa';
        hoursTitle.textContent = 'Ish Vaqti';
        locationTitle.textContent = 'Joylashuv';
    }
}

// Render tours
function renderTours() {
    const toursGrid = document.getElementById('tours-grid');
    toursGrid.innerHTML = '';
    
    if (!translations[currentLanguage] || !translations[currentLanguage].tours) {
        console.error('No tours found for language:', currentLanguage);
        return;
    }
    
    const tours = translations[currentLanguage].tours;
    
    Object.keys(tours).forEach(tourKey => {
        const tour = tours[tourKey];
        
        const tourCard = document.createElement('div');
        tourCard.className = 'tour-card';
        tourCard.innerHTML = `
            <div class="tour-header">
                <h3 class="tour-title">${tour.title}</h3>
                <span class="tour-time">⏰ ${tour.time}</span>
            </div>
            <div class="tour-content">
                <p class="tour-description">${tour.description}</p>
                <div class="tour-details">
                    <div class="detail-item">
                        <strong>${currentLanguage === 'en' ? 'Included:' : currentLanguage === 'ru' ? 'Включено:' : 'Dahil:'}</strong>
                        <p>${tour.included}</p>
                    </div>
                    <div class="detail-item">
                        <strong>${currentLanguage === 'en' ? 'Not Included:' : currentLanguage === 'ru' ? 'Не включено:' : 'Dahil Değil:'}</strong>
                        <p>${tour.notIncluded}</p>
                    </div>
                    <div class="detail-item">
                        <strong>${currentLanguage === 'en' ? 'Bring:' : currentLanguage === 'ru' ? 'Взять с собой:' : 'Getir:'}</strong>
                        <p>${tour.toBring}</p>
                    </div>
                </div>
            </div>
        `;
        
        toursGrid.appendChild(tourCard);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Nha Trang Luxury Tours');
    updatePageContent();
    renderTours();
});
