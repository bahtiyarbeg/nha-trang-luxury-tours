// Current language and state
let currentLanguage = 'en';
let currentTourKey = null;

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
    
    // If on detail page, update detail content
    if (currentTourKey) {
        showTourDetail(currentTourKey);
    } else {
        renderTours();
    }
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
    if (sectionTitle) {
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
    }
    
    // Update footer
    const contactTitle = document.getElementById('contact-title');
    const hoursTitle = document.getElementById('hours-title');
    const locationTitle = document.getElementById('location-title');
    
    if (contactTitle) {
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
}

// Render tours on main page
function renderTours() {
    const toursGrid = document.getElementById('tours-grid');
    if (!toursGrid) return;
    
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
        tourCard.onclick = () => showTourDetail(tourKey);
        
        tourCard.innerHTML = `
            <div class="tour-header">
                <h3 class="tour-title">${tour.title}</h3>
                <span class="tour-time">⏰ ${tour.time}</span>
            </div>
            <div class="tour-content">
                <p class="tour-description">${tour.shortDesc}</p>
                <button class="tour-btn">Read More →</button>
            </div>
        `;
        
        toursGrid.appendChild(tourCard);
    });
}

// Show tour detail page
function showTourDetail(tourKey) {
    currentTourKey = tourKey;
    
    const tour = translations[currentLanguage].tours[tourKey];
    if (!tour) return;
    
    // Hide main page, show detail page
    document.getElementById('main-page').classList.add('hidden');
    document.getElementById('tour-detail-page').classList.remove('hidden');
    
    // Update detail content
    document.getElementById('detail-title').textContent = tour.title;
    document.getElementById('detail-time').textContent = '⏰ ' + tour.time;
    document.getElementById('detail-description').textContent = tour.fullDesc;
    document.getElementById('detail-schedule').textContent = tour.schedule;
    document.getElementById('detail-included').textContent = tour.included;
    document.getElementById('detail-notincluded').textContent = tour.notIncluded;
    document.getElementById('detail-bring').textContent = tour.toBring;
    
    // Update labels based on language
    updateDetailLabels();
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Update detail page labels
function updateDetailLabels() {
    if (currentLanguage === 'en') {
        document.getElementById('detail-desc-label').textContent = 'Description';
        document.getElementById('detail-schedule-label').textContent = 'Schedule';
        document.getElementById('detail-included-label').textContent = 'Included';
        document.getElementById('detail-notincluded-label').textContent = 'Not Included';
        document.getElementById('detail-bring-label').textContent = 'What to Bring';
        document.getElementById('contact-label').textContent = 'Contact Us';
        document.getElementById('booking-text').textContent = 'Ready to book? Contact us today!';
    } else if (currentLanguage === 'ru') {
        document.getElementById('detail-desc-label').textContent = 'Описание';
        document.getElementById('detail-schedule-label').textContent = 'Расписание';
        document.getElementById('detail-included-label').textContent = 'Включено';
        document.getElementById('detail-notincluded-label').textContent = 'Не включено';
        document.getElementById('detail-bring-label').textContent = 'Что взять с собой';
        document.getElementById('contact-label').textContent = 'Свяжитесь с нами';
        document.getElementById('booking-text').textContent = 'Готовы забронировать? Свяжитесь с нами сегодня!';
    } else if (currentLanguage === 'tr') {
        document.getElementById('detail-desc-label').textContent = 'Açıklama';
        document.getElementById('detail-schedule-label').textContent = 'Program';
        document.getElementById('detail-included-label').textContent = 'Dahil';
        document.getElementById('detail-notincluded-label').textContent = 'Dahil Değil';
        document.getElementById('detail-bring-label').textContent = 'Getir';
        document.getElementById('contact-label').textContent = 'Bize Ulaşın';
        document.getElementById('booking-text').textContent = 'Rezervasyon yapmaya hazır mısınız? Bugün bize ulaşın!';
    } else if (currentLanguage === 'ko') {
        document.getElementById('detail-desc-label').textContent = '설명';
        document.getElementById('detail-schedule-label').textContent = '일정';
        document.getElementById('detail-included-label').textContent = '포함됨';
        document.getElementById('detail-notincluded-label').textContent = '포함되지 않음';
        document.getElementById('detail-bring-label').textContent = '준비물';
        document.getElementById('contact-label').textContent = '문의하기';
        document.getElementById('booking-text').textContent = '예약할 준비가 되셨나요? 오늘 연락하세요!';
    } else if (currentLanguage === 'zh') {
        document.getElementById('detail-desc-label').textContent = '描述';
        document.getElementById('detail-schedule-label').textContent = '日程';
        document.getElementById('detail-included-label').textContent = '包括';
        document.getElementById('detail-notincluded-label').textContent = '不包括';
        document.getElementById('detail-bring-label').textContent = '携带物品';
        document.getElementById('contact-label').textContent = '联系我们';
        document.getElementById('booking-text').textContent = '准备好预订了吗？立即联系我们！';
    } else if (currentLanguage === 'fr') {
        document.getElementById('detail-desc-label').textContent = 'Description';
        document.getElementById('detail-schedule-label').textContent = 'Horaire';
        document.getElementById('detail-included-label').textContent = 'Inclus';
        document.getElementById('detail-notincluded-label').textContent = 'Non Inclus';
        document.getElementById('detail-bring-label').textContent = 'À Apporter';
        document.getElementById('contact-label').textContent = 'Nous Contacter';
        document.getElementById('booking-text').textContent = 'Prêt à réserver? Contactez-nous dès aujourd\'hui!';
    } else if (currentLanguage === 'vi') {
        document.getElementById('detail-desc-label').textContent = 'Mô Tả';
        document.getElementById('detail-schedule-label').textContent = 'Lịch Trình';
        document.getElementById('detail-included-label').textContent = 'Bao Gồm';
        document.getElementById('detail-notincluded-label').textContent = 'Không Bao Gồm';
        document.getElementById('detail-bring-label').textContent = 'Mang Theo';
        document.getElementById('contact-label').textContent = 'Liên Hệ Chúng Tôi';
        document.getElementById('booking-text').textContent = 'Sẵn sàng đặt chỗ? Liên hệ với chúng tôi ngay hôm nay!';
    } else if (currentLanguage === 'uz') {
        document.getElementById('detail-desc-label').textContent = 'Tavsif';
        document.getElementById('detail-schedule-label').textContent = 'Jadval';
        document.getElementById('detail-included-label').textContent = 'Kiritilgan';
        document.getElementById('detail-notincluded-label').textContent = 'Kiritilmagan';
        document.getElementById('detail-bring-label').textContent = 'Olib Kelish';
        document.getElementById('contact-label').textContent = 'Biz Bilan Bog\'lanish';
        document.getElementById('booking-text').textContent = 'Bronlashga tayyor? Bugun biz bilan bog\'lanin!';
    }
}

// Back to main page
function backToMain() {
    currentTourKey = null;
    document.getElementById('tour-detail-page').classList.add('hidden');
    document.getElementById('main-page').classList.remove('hidden');
    window.scrollTo(0, 0);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Nha Trang Luxury Tours');
    updatePageContent();
    renderTours();
});
