const translations = {
    en: {
        'hero-title': 'Discover Paradise in Nha Trang',
        'hero-subtitle': 'Experience luxury tours and unforgettable adventures',
        'cta-button': 'Explore Tours',
        'section-title': 'Our Exclusive Tours',
        'contact-title': 'Contact',
        'hours-title': 'Hours',
        'hours-text': 'Daily 8:00 AM - 6:00 PM',
        'location-title': 'Location',
        'location-text': 'Nha Trang, Vietnam',
        tours: {
            deluxe: { title: 'De Luxe Island Tour', time: '08:00 - 16:00', description: 'Enjoy pristine beaches, snorkeling, and fresh seafood lunch at Wai Chai Beach and fishing village.', included: 'Transfer, guide, lunch, snorkeling equipment, entrance fees', notIncluded: 'Drinks, personal expenses', toBring: 'Swimsuit, sunscreen, towel, camera' },
            honTam1: { title: 'VIP Hon Tam 1 - Beach', time: '08:00 - 16:00', description: 'Luxury island experience with beach access, water sports, and island infrastructure.', included: 'Transfer, guide, lunch, beach access, water sports', notIncluded: 'Drinks, personal activities', toBring: 'Swimsuit, sunscreen, casual clothes' },
            honTam2: { title: 'VIP Hon Tam 2 - Mud Bath', time: '08:00 - 16:00', description: 'Experience famous mud baths, snorkeling, and therapeutic treatments.', included: 'Transfer, guide, mud bath, lunch, snorkeling', notIncluded: 'Additional treatments, drinks', toBring: 'Swimsuit, towel, change of clothes' },
            miniBench: { title: 'Mini Beach - Hon Tam', time: '08:00 - 15:00', description: 'White sand beach with snorkeling and mud bath experience.', included: 'Transfer, guide, lunch, beach access', notIncluded: 'Extra activities', toBring: 'Swimsuit, sunscreen, towel' },
            snorkeling: { title: 'Snorkeling on Boat', time: '08:00 - 14:00', description: 'Marine protected area snorkeling with professional guides.', included: 'Boat, guide, snorkeling equipment, lunch', notIncluded: 'Drinks', toBring: 'Swimsuit, sunscreen, underwater camera' },
            honMun1: { title: 'Hon Mun - Wai Chai', time: '08:00 - 16:00', description: 'Snorkeling at Hon Mun island with beach relaxation.', included: 'Transfer, guide, lunch, snorkeling', notIncluded: 'Drinks', toBring: 'Swimsuit, sunscreen' },
            honMun2: { title: 'Hon Mun - Mini Beach', time: '08:00 - 15:00', description: 'Combine Hon Mun snorkeling with Mini Beach relaxation.', included: 'Transfer, guide, lunch, snorkeling', notIncluded: 'Drinks', toBring: 'Swimsuit, sunscreen' },
            honMun3: { title: 'Hon Mun - Hon Tam', time: '08:00 - 16:00', description: 'Full day exploring Hon Mun and Hon Tam islands.', included: 'Transfer, guide, lunch, snorkeling, mud bath', notIncluded: 'Drinks', toBring: 'Swimsuit, sunscreen, towel' },
            oneIsland1: { title: 'One Island - Mini Beach', time: '08:00 - 15:00', description: 'Relaxing day at Mini Beach with lunch and activities.', included: 'Transfer, guide, lunch, beach access', notIncluded: 'Extra activities', toBring: 'Swimsuit, sunscreen' },
            oneIsland2: { title: 'One Island - Hon Tam', time: '08:00 - 16:00', description: 'Full day at Hon Tam with mud bath and snorkeling.', included: 'Transfer, guide, lunch, mud bath, snorkeling', notIncluded: 'Drinks', toBring: 'Swimsuit, sunscreen, towel' },
            scuba: { title: 'Scuba Diving', time: '08:00 - 16:00', description: 'Professional scuba diving for beginners and experienced divers.', included: 'Transfer, guide, equipment, lunch, certification', notIncluded: 'Advanced courses', toBring: 'Swimsuit, towel, underwater camera' },
            fourIslands: { title: '4 Islands Tour', time: '07:30 - 17:00', description: 'Visit 4 beautiful islands with snorkeling and island hopping.', included: 'Transfer, guide, lunch, snorkeling', notIncluded: 'Drinks, extra activities', toBring: 'Swimsuit, sunscreen, camera' },
            vineyard: { title: 'Ninh Thuan Vineyard Tour', time: '07:30 - 17:00', description: 'Explore vineyards, temples, and scenic landscapes.', included: 'Transfer, guide, lunch, wine tasting, entrance fees', notIncluded: 'Extra wine purchases', toBring: 'Comfortable shoes, camera, hat' },
            kongForest: { title: 'Kong Forest - Zipline & ATV', time: '08:00 - 17:00', description: 'Adventure park with zipline, ATV, and jungle activities.', included: 'Transfer, guide, lunch, all activities, equipment', notIncluded: 'Extra activities', toBring: 'Comfortable clothes, closed shoes' },
            nemo: { title: 'Nemo Trip', time: '08:30 - 15:30', description: 'Snorkeling, floating bar party, and water activities.', included: 'Transfer, guide, lunch, snorkeling, floating bar', notIncluded: 'Extra drinks', toBring: 'Swimsuit, sunscreen, camera' },
            vinpearl: { title: 'Vinpearl Park', time: '08:00 - 18:00', description: 'Theme park with water park, cable car, and attractions.', included: 'Transfer, guide, entrance ticket, lunch', notIncluded: 'Extra rides, food', toBring: 'Swimsuit, sunscreen, comfortable shoes' },
            coral: { title: 'Coral Tour', time: '08:00 - 15:00', description: 'Coral reef snorkeling and marine life observation.', included: 'Transfer, guide, lunch, snorkeling equipment', notIncluded: 'Drinks', toBring: 'Swimsuit, sunscreen, underwater camera' },
            evening: { title: 'Evening Cruise', time: '16:00 - 21:00', description: 'Sunset cruise with dinner and entertainment.', included: 'Transfer, guide, dinner, entertainment', notIncluded: 'Drinks', toBring: 'Casual clothes, camera' }
        }
    },
    ru: {
        'hero-title': 'Откройте рай в Нячанге',
        'hero-subtitle': 'Испытайте роскошные туры и незабываемые приключения',
        'cta-button': 'Исследовать туры',
        'section-title': 'Наши эксклюзивные туры',
        'contact-title': 'Контакты',
        'hours-title': 'Часы работы',
        'hours-text': 'Ежедневно с 8:00 до 18:00',
        'location-title': 'Местоположение',
        'location-text': 'Нячанг, Вьетнам',
        tours: {
            deluxe: { title: 'Люкс Островной тур', time: '08:00 - 16:00', description: 'Наслаждайтесь девственными пляжами, снорклингом и свежим обедом из морепродуктов.', included: 'Трансфер, гид, обед, снаряжение, входные билеты', notIncluded: 'Напитки, личные расходы', toBring: 'Купальник, солнцезащитный крем, полотенце' },
            honTam1: { title: 'VIP Хон Там 1 - Пляж', time: '08:00 - 16:00', description: 'Роскошный опыт на острове с доступом на пляж и водными видами спорта.', included: 'Трансфер, гид, обед, доступ на пляж', notIncluded: 'Напитки, личные мероприятия', toBring: 'Купальник, солнцезащитный крем' },
            honTam2: { title: 'VIP Хон Там 2 - Грязевые ванны', time: '08:00 - 16:00', description: 'Испытайте знаменитые грязевые ванны и терапевтические процедуры.', included: 'Трансфер, гид, грязевые ванны, обед', notIncluded: 'Дополнительные процедуры', toBring: 'Купальник, полотенце' },
            miniBench: { title: 'Мини Бич - Хон Там', time: '08:00 - 15:00', description: 'Белый песчаный пляж со снорклингом и грязевыми ваннами.', included: 'Трансфер, гид, обед, доступ на пляж', notIncluded: 'Дополнительные мероприятия', toBring: 'Купальник, солнцезащитный крем' },
            snorkeling: { title: 'Снорклинг на катере', time: '08:00 - 14:00', description: 'Снорклинг в охраняемой морской зоне с профессиональными гидами.', included: 'Катер, гид, снаряжение, обед', notIncluded: 'Напитки', toBring: 'Купальник, солнцезащитный крем' },
            honMun1: { title: 'Хон Мун - Пляж Вай', time: '08:00 - 16:00', description: 'Снорклинг на острове Хон Мун с отдыхом на пляже.', included: 'Трансфер, гид, обед, снорклинг', notIncluded: 'Напитки', toBring: 'Купальник, солнцезащитный крем' },
            honMun2: { title: 'Хон Мун - Мини Бич', time: '08:00 - 15:00', description: 'Комбинированный тур: снорклинг на Хон Мун и отдых на Мини Бич.', included: 'Трансфер, гид, обед, снорклинг', notIncluded: 'Напитки', toBring: 'Купальник, солнцезащитный крем' },
            honMun3: { title: 'Хон Мун - Хон Там', time: '08:00 - 16:00', description: 'Полный день исследования островов Хон Мун и Хон Там.', included: 'Трансфер, гид, обед, снорклинг, грязевые ванны', notIncluded: 'Напитки', toBring: 'Купальник, солнцезащитный крем' },
            oneIsland1: { title: 'Один остров - Мини Бич', time: '08:00 - 15:00', description: 'Расслабляющий день на Мини Бич с обедом и мероприятиями.', included: 'Трансфер, гид, обед, доступ на пляж', notIncluded: 'Дополнительные мероприятия', toBring: 'Купальник, солнцезащитный крем' },
            oneIsland2: { title: 'Один остров - Хон Там', time: '08:00 - 16:00', description: 'Полный день на Хон Там с грязевыми ваннами и снорклингом.', included: 'Трансфер, гид, обед, грязевые ванны, снорклинг', notIncluded: 'Напитки', toBring: 'Купальник, солнцезащитный крем' },
            scuba: { title: 'Подводное плавание с аквалангом', time: '08:00 - 16:00', description: 'Профессиональное подводное плавание для начинающих и опытных дайверов.', included: 'Трансфер, гид, снаряжение, обед, сертификат', notIncluded: 'Продвинутые курсы', toBring: 'Купальник, полотенце' },
            fourIslands: { title: '4 острова тур', time: '07:30 - 17:00', description: 'Посетите 4 красивых острова со снорклингом и прыжками между островами.', included: 'Трансфер, гид, обед, снорклинг', notIncluded: 'Напитки, дополнительные мероприятия', toBring: 'Купальник, солнцезащитный крем' },
            vineyard: { title: 'Виноградники Нинь Туань', time: '07:30 - 17:00', description: 'Исследуйте виноградники, храмы и живописные пейзажи.', included: 'Трансфер, гид, обед, дегустация вина, входные билеты', notIncluded: 'Дополнительные покупки вина', toBring: 'Удобная обувь, камера' },
            kongForest: { title: 'Лес Конг - Зиплайн и квадроциклы', time: '08:00 - 17:00', description: 'Парк приключений с зиплайном, квадроциклами и джунглями.', included: 'Трансфер, гид, обед, все мероприятия, снаряжение', notIncluded: 'Дополнительные мероприятия', toBring: 'Удобная одежда, закрытая обувь' },
            nemo: { title: 'Немо Тур', time: '08:30 - 15:30', description: 'Снорклинг, плавучая вечеринка и водные мероприятия.', included: 'Трансфер, гид, обед, снорклинг, плавучий бар', notIncluded: 'Дополнительные напитки', toBring: 'Купальник, солнцезащитный крем' },
            vinpearl: { title: 'Парк Винпёрл', time: '08:00 - 18:00', description: 'Парк развлечений с аквапарком, канатной дорогой и аттракционами.', included: 'Трансфер, гид, входной билет, обед', notIncluded: 'Дополнительные аттракционы, еда', toBring: 'Купальник, солнцезащитный крем' },
            coral: { title: 'Коралловый тур', time: '08:00 - 15:00', description: 'Снорклинг на коралловом рифе и наблюдение за морской жизнью.', included: 'Трансфер, гид, обед, снаряжение', notIncluded: 'Напитки', toBring: 'Купальник, солнцезащитный крем' },
            evening: { title: 'Вечерний круиз', time: '16:00 - 21:00', description: 'Закатный круиз с ужином и развлечениями.', included: 'Трансфер, гид, ужин, развлечения', notIncluded: 'Напитки', toBring: 'Повседневная одежда, камера' }
        }
    },
    tr: {
        'hero-title': 'Nha Trang\'da Cenneti Keşfedin',
        'hero-subtitle': 'Lüks turlar ve unutulmaz maceralar yaşayın',
        'cta-button': 'Turları Keşfet',
        'section-title': 'Özel Turlarımız',
        'contact-title': 'İletişim',
        'hours-title': 'Çalışma Saatleri',
        'hours-text': 'Günlük 08:00 - 18:00',
        'location-title': 'Konum',
        'location-text': 'Nha Trang, Vietnam',
        tours: {
            deluxe: { title: 'De Luxe Adası Turu', time: '08:00 - 16:00', description: 'Bakir plajlar, dalış ve taze deniz ürünleri öğle yemeği.', included: 'Transfer, rehber, öğle yemeği, dalış ekipmanı', notIncluded: 'İçecekler, kişisel harcamalar', toBring: 'Mayo, güneş kremi, havlu' },
            honTam1: { title: 'VIP Hon Tam 1 - Plaj', time: '08:00 - 16:00', description: 'Plaj erişimi ve su sporları ile lüks ada deneyimi.', included: 'Transfer, rehber, öğle yemeği, plaj erişimi', notIncluded: 'İçecekler', toBring: 'Mayo, güneş kremi' },
            honTam2: { title: 'VIP Hon Tam 2 - Çamur Banyosu', time: '08:00 - 16:00', description: 'Ünlü çamur banyoları ve terapötik tedaviler.', included: 'Transfer, rehber, çamur banyosu, öğle yemeği', notIncluded: 'Ek tedaviler', toBring: 'Mayo, havlu' },
            miniBench: { title: 'Mini Plaj - Hon Tam', time: '08:00 - 15:00', description: 'Beyaz kumlu plaj, dalış ve çamur banyosu.', included: 'Transfer, rehber, öğle yemeği, plaj erişimi', notIncluded: 'Ek aktiviteler', toBring: 'Mayo, güneş kremi' },
            snorkeling: { title: 'Teknede Dalış', time: '08:00 - 14:00', description: 'Korunan deniz alanında profesyonel rehberlerle dalış.', included: 'Tekne, rehber, ekipman, öğle yemeği', notIncluded: 'İçecekler', toBring: 'Mayo, güneş kremi' },
            honMun1: { title: 'Hon Mun - Wai Plajı', time: '08:00 - 16:00', description: 'Hon Mun adasında dalış ve plaj dinlenişi.', included: 'Transfer, rehber, öğle yemeği, dalış', notIncluded: 'İçecekler', toBring: 'Mayo, güneş kremi' },
            honMun2: { title: 'Hon Mun - Mini Plaj', time: '08:00 - 15:00', description: 'Hon Mun dalışı ve Mini Plaj dinlenişi kombinasyonu.', included: 'Transfer, rehber, öğle yemeği, dalış', notIncluded: 'İçecekler', toBring: 'Mayo, güneş kremi' },
            honMun3: { title: 'Hon Mun - Hon Tam', time: '08:00 - 16:00', description: 'Hon Mun ve Hon Tam adalarını keşfeden tam gün.', included: 'Transfer, rehber, öğle yemeği, dalış, çamur banyosu', notIncluded: 'İçecekler', toBring: 'Mayo, güneş kremi' },
            oneIsland1: { title: 'Bir Ada - Mini Plaj', time: '08:00 - 15:00', description: 'Mini Plajda rahatlatıcı gün, öğle yemeği ve aktiviteler.', included: 'Transfer, rehber, öğle yemeği, plaj erişimi', notIncluded: 'Ek aktiviteler', toBring: 'Mayo, güneş kremi' },
            oneIsland2: { title: 'Bir Ada - Hon Tam', time: '08:00 - 16:00', description: 'Hon Tamda çamur banyosu ve dalış ile tam gün.', included: 'Transfer, rehber, öğle yemeği, çamur banyosu, dalış', notIncluded: 'İçecekler', toBring: 'Mayo, güneş kremi' },
            scuba: { title: 'Dalış Kursu', time: '08:00 - 16:00', description: 'Başlangıç ve deneyimli dalgıçlar için profesyonel dalış.', included: 'Transfer, rehber, ekipman, öğle yemeği, sertifika', notIncluded: 'İleri kurslar', toBring: 'Mayo, havlu' },
            fourIslands: { title: '4 Adalar Turu', time: '07:30 - 17:00', description: '4 güzel adayı dalış ve ada zıplaması ile ziyaret edin.', included: 'Transfer, rehber, öğle yemeği, dalış', notIncluded: 'İçecekler, ek aktiviteler', toBring: 'Mayo, güneş kremi' },
            vineyard: { title: 'Ninh Thuan Bağları', time: '07:30 - 17:00', description: 'Bağları, tapınakları ve manzaralı peyzajları keşfedin.', included: 'Transfer, rehber, öğle yemeği, şarap tadımı', notIncluded: 'Ek şarap alışveriş', toBring: 'Rahat ayakkabı, kamera' },
            kongForest: { title: 'Kong Ormanı - Ziplain ve ATV', time: '08:00 - 17:00', description: 'Ziplain, ATV ve orman aktiviteleri ile macera parkı.', included: 'Transfer, rehber, öğle yemeği, tüm aktiviteler', notIncluded: 'Ek aktiviteler', toBring: 'Rahat giysi, kapalı ayakkabı' },
            nemo: { title: 'Nemo Turu', time: '08:30 - 15:30', description: 'Dalış, yüzen bar partisi ve su aktiviteleri.', included: 'Transfer, rehber, öğle yemeği, dalış, yüzen bar', notIncluded: 'Ek içecekler', toBring: 'Mayo, güneş kremi' },
            vinpearl: { title: 'Vinpearl Parkı', time: '08:00 - 18:00', description: 'Su parkı, teleferik ve cazibe merkezli tema parkı.', included: 'Transfer, rehber, giriş bileti, öğle yemeği', notIncluded: 'Ek binişler, yemek', toBring: 'Mayo, güneş kremi' },
            coral: { title: 'Mercan Turu', time: '08:00 - 15:00', description: 'Mercan resifi dalışı ve deniz hayatı gözlemi.', included: 'Transfer, rehber, öğle yemeği, ekipman', notIncluded: 'İçecekler', toBring: 'Mayo, güneş kremi' },
            evening: { title: 'Akşam Gezintisi', time: '16:00 - 21:00', description: 'Akşam yemeği ve eğlence ile gün batımı gezintisi.', included: 'Transfer, rehber, akşam yemeği, eğlence', notIncluded: 'İçecekler', toBring: 'Gündelik giysi, kamera' }
        }
    },
    ko: {
        'hero-title': '나트랑의 낙원을 발견하세요',
        'hero-subtitle': '럭셔리 투어와 잊을 수 없는 모험을 경험하세요',
        'cta-button': '투어 탐색',
        'section-title': '우리의 독점 투어',
        'contact-title': '연락처',
        'hours-title': '운영 시간',
        'hours-text': '매일 08:00 - 18:00',
        'location-title': '위치',
        'location-text': '나트랑, 베트남',
        tours: {
            deluxe: { title: '럭셔리 섬 투어', time: '08:00 - 16:00', description: '처녀 해변, 스노클링 및 신선한 해산물 점심.', included: '이동, 가이드, 점심, 스노클링 장비', notIncluded: '음료, 개인 경비', toBring: '수영복, 선크림, 수건' },
            honTam1: { title: 'VIP 혼탐 1 - 해변', time: '08:00 - 16:00', description: '해변 접근 및 수상 스포츠가 있는 럭셔리 섬 경험.', included: '이동, 가이드, 점심, 해변 접근', notIncluded: '음료', toBring: '수영복, 선크림' },
            honTam2: { title: 'VIP 혼탐 2 - 진흙탕', time: '08:00 - 16:00', description: '유명한 진흙탕과 치료 시술을 경험하세요.', included: '이동, 가이드, 진흙탕, 점심', notIncluded: '추가 시술', toBring: '수영복, 수건' },
            miniBench: { title: '미니 비치 - 혼탐', time: '08:00 - 15:00', description: '하얀 모래 해변, 스노클링 및 진흙탕.', included: '이동, 가이드, 점심, 해변 접근', notIncluded: '추가 활동', toBring: '수영복, 선크림' },
            snorkeling: { title: '보트 스노클링', time: '08:00 - 14:00', description: '전문 가이드와 함께 해양 보호 구역 스노클링.', included: '보트, 가이드, 장비, 점심', notIncluded: '음료', toBring: '수영복, 선크림' },
            honMun1: { title: '혼문 - 와이 해변', time: '08:00 - 16:00', description: '혼문 섬 스노클링 및 해변 휴식.', included: '이동, 가이드, 점심, 스노클링', notIncluded: '음료', toBring: '수영복, 선크림' },
            honMun2: { title: '혼문 - 미니 비치', time: '08:00 - 15:00', description: '혼문 스노클링과 미니 비치 휴식 조합.', included: '이동, 가이드, 점심, 스노클링', notIncluded: '음료', toBring: '수영복, 선크림' },
            honMun3: { title: '혼문 - 혼탐', time: '08:00 - 16:00', description: '혼문과 혼탐 섬을 탐험하는 온종일 투어.', included: '이동, 가이드, 점심, 스노클링, 진흙탕', notIncluded: '음료', toBring: '수영복, 선크림' },
            oneIsland1: { title: '한 섬 - 미니 비치', time: '08:00 - 15:00', description: '미니 비치에서 점심과 활동이 있는 휴식의 날.', included: '이동, 가이드, 점심, 해변 접근', notIncluded: '추가 활동', toBring: '수영복, 선크림' },
            oneIsland2: { title: '한 섬 - 혼탐', time: '08:00 - 16:00', description: '혼탐에서 진흙탕과 스노클링이 있는 온종일 투어.', included: '이동, 가이드, 점심, 진흙탕, 스노클링', notIncluded: '음료', toBring: '수영복, 선크림' },
            scuba: { title: '스쿠버 다이빙', time: '08:00 - 16:00', description: '초보자 및 경험자를 위한 전문 스쿠버 다이빙.', included: '이동, 가이드, 장비, 점심, 자격증', notIncluded: '고급 과정', toBring: '수영복, 수건' },
            fourIslands: { title: '4개 섬 투어', time: '07:30 - 17:00', description: '4개의 아름다운 섬을 스노클링과 함께 방문.', included: '이동, 가이드, 점심, 스노클링', notIncluded: '음료, 추가 활동', toBring: '수영복, 선크림' },
            vineyard: { title: '닌투안 포도원', time: '07:30 - 17:00', description: '포도원, 사찰 및 풍경을 탐험하세요.', included: '이동, 가이드, 점심, 와인 시음', notIncluded: '추가 와인 구매', toBring: '편한 신발, 카메라' },
            kongForest: { title: '콩 숲 - 짚라인 및 ATV', time: '08:00 - 17:00', description: '짚라인, ATV 및 정글 활동이 있는 모험 공원.', included: '이동, 가이드, 점심, 모든 활동', notIncluded: '추가 활동', toBring: '편한 옷, 닫힌 신발' },
            nemo: { title: '네모 투어', time: '08:30 - 15:30', description: '스노클링, 떠있는 바 파티 및 수상 활동.', included: '이동, 가이드, 점심, 스노클링, 떠있는 바', notIncluded: '추가 음료', toBring: '수영복, 선크림' },
            vinpearl: { title: '빈펄 공원', time: '08:00 - 18:00', description: '워터파크, 케이블카 및 명소가 있는 테마파크.', included: '이동, 가이드, 입장권, 점심', notIncluded: '추가 탑승, 음식', toBring: '수영복, 선크림' },
            coral: { title: '산호 투어', time: '08:00 - 15:00', description: '산호초 스노클링 및 해양 생물 관찰.', included: '이동, 가이드, 점심, 장비', notIncluded: '음료', toBring: '수영복, 선크림' },
            evening: { title: '저녁 크루즈', time: '16:00 - 21:00', description: '저녁 식사와 엔터테인먼트가 있는 석양 크루즈.', included: '이동, 가이드, 저녁 식사, 엔터테인먼트', notIncluded: '음료', toBring: '캐주얼 옷, 카메라' }
        }
    },
    zh: {
        'hero-title': '发现芽庄的天堂',
        'hero-subtitle': '体验豪华旅游和难忘的冒险',
        'cta-button': '探索旅游',
        'section-title': '我们的独家旅游',
        'contact-title': '联系方式',
        'hours-title': '营业时间',
        'hours-text': '每天 08:00 - 18:00',
        'location-title': '位置',
        'location-text': '芽庄，越南',
        tours: {
            deluxe: { title: '豪华岛屿之旅', time: '08:00 - 16:00', description: '享受原始海滩、浮潜和新鲜海鲜午餐。', included: '接送、导游、午餐、浮潜设备', notIncluded: '饮料、个人开支', toBring: '泳衣、防晒霜、毛巾' },
            honTam1: { title: 'VIP 洪岛1 - 海滩', time: '08:00 - 16:00', description: '享受海滩和水上运动的豪华岛屿体验。', included: '接送、导游、午餐、海滩通道', notIncluded: '饮料', toBring: '泳衣、防晒霜' },
            honTam2: { title: 'VIP 洪岛2 - 泥浴', time: '08:00 - 16:00', description: '体验著名的泥浴和治疗程序。', included: '接送、导游、泥浴、午餐', notIncluded: '额外治疗', toBring: '泳衣、毛巾' },
            miniBench: { title: '迷你海滩 - 洪岛', time: '08:00 - 15:00', description: '白沙滩、浮潜和泥浴体验。', included: '接送、导游、午餐、海滩通道', notIncluded: '额外活动', toBring: '泳衣、防晒霜' },
            snorkeling: { title: '船上浮潜', time: '08:00 - 14:00', description: '在海洋保护区与专业导游浮潜。', included: '船、导游、设备、午餐', notIncluded: '饮料', toBring: '泳衣、防晒霜' },
            honMun1: { title: '洪文 - 怀海滩', time: '08:00 - 16:00', description: '洪文岛浮潜和海滩放松。', included: '接送、导游、午餐、浮潜', notIncluded: '饮料', toBring: '泳衣、防晒霜' },
            honMun2: { title: '洪文 - 迷你海滩', time: '08:00 - 15:00', description: '洪文浮潜和迷你海滩放松的组合。', included: '接送、导游、午餐、浮潜', notIncluded: '饮料', toBring: '泳衣、防晒霜' },
            honMun3: { title: '洪文 - 洪岛', time: '08:00 - 16:00', description: '探索洪文和洪岛的整日旅游。', included: '接送、导游、午餐、浮潜、泥浴', notIncluded: '饮料', toBring: '泳衣、防晒霜' },
            oneIsland1: { title: '一个岛 - 迷你海滩', time: '08:00 - 15:00', description: '在迷你海滩放松的一天，包括午餐和活动。', included: '接送、导游、午餐、海滩通道', notIncluded: '额外活动', toBring: '泳衣、防晒霜' },
            oneIsland2: { title: '一个岛 - 洪岛', time: '08:00 - 16:00', description: '在洪岛度过整天，享受泥浴和浮潜。', included: '接送、导游、午餐、泥浴、浮潜', notIncluded: '饮料', toBring: '泳衣、防晒霜' },
            scuba: { title: '水肺潜水', time: '08:00 - 16:00', description: '为初学者和有经验的潜水员提供专业水肺潜水。', included: '接送、导游、设备、午餐、证书', notIncluded: '高级课程', toBring: '泳衣、毛巾' },
            fourIslands: { title: '四岛之旅', time: '07:30 - 17:00', description: '访问4个美丽的岛屿，进行浮潜和岛屿跳跃。', included: '接送、导游、午餐、浮潜', notIncluded: '饮料、额外活动', toBring: '泳衣、防晒霜' },
            vineyard: { title: '宁顺葡萄园', time: '07:30 - 17:00', description: '探索葡萄园、寺庙和风景。', included: '接送、导游、午餐、葡萄酒品尝', notIncluded: '额外葡萄酒购买', toBring: '舒适的鞋子、相机' },
            kongForest: { title: '孔森林 - 滑翔伞和ATV', time: '08:00 - 17:00', description: '冒险公园，配有滑翔伞、ATV和丛林活动。', included: '接送、导游、午餐、所有活动', notIncluded: '额外活动', toBring: '舒适的衣服、闭脚鞋' },
            nemo: { title: '尼莫之旅', time: '08:30 - 15:30', description: '浮潜、浮动酒吧派对和水上活动。', included: '接送、导游、午餐、浮潜、浮动酒吧', notIncluded: '额外饮料', toBring: '泳衣、防晒霜' },
            vinpearl: { title: '珍珠公园', time: '08:00 - 18:00', description: '主题公园，配有水上公园、缆车和景点。', included: '接送、导游、入场券、午餐', notIncluded: '额外乘坐、食物', toBring: '泳衣、防晒霜' },
            coral: { title: '珊瑚之旅', time: '08:00 - 15:00', description: '珊瑚礁浮潜和海洋生物观察。', included: '接送、导游、午餐、设备', notIncluded: '饮料', toBring: '泳衣、防晒霜' },
            evening: { title: '晚间游船', time: '16:00 - 21:00', description: '日落游船，享受晚餐和娱乐。', included: '接送、导游、晚餐、娱乐', notIncluded: '饮料', toBring: '休闲服装、相机' }
        }
    },
    fr: {
        'hero-title': 'Découvrez le Paradis à Nha Trang',
        'hero-subtitle': 'Vivez des tours de luxe et des aventures inoubliables',
        'cta-button': 'Explorer les Tours',
        'section-title': 'Nos Tours Exclusifs',
        'contact-title': 'Contact',
        'hours-title': 'Heures d\'ouverture',
        'hours-text': 'Quotidien 08:00 - 18:00',
        'location-title': 'Localisation',
        'location-text': 'Nha Trang, Vietnam',
        tours: {
            deluxe: { title: 'Tour Île De Luxe', time: '08:00 - 16:00', description: 'Profitez de plages vierges, de plongée en apnée et de fruits de mer frais.', included: 'Transfert, guide, déjeuner, équipement de plongée', notIncluded: 'Boissons, dépenses personnelles', toBring: 'Maillot de bain, crème solaire, serviette' },
            honTam1: { title: 'VIP Hon Tam 1 - Plage', time: '08:00 - 16:00', description: 'Expérience d\'île de luxe avec accès à la plage et sports nautiques.', included: 'Transfert, guide, déjeuner, accès à la plage', notIncluded: 'Boissons', toBring: 'Maillot de bain, crème solaire' },
            honTam2: { title: 'VIP Hon Tam 2 - Bain de Boue', time: '08:00 - 16:00', description: 'Expérience de célèbres bains de boue et traitements thérapeutiques.', included: 'Transfert, guide, bain de boue, déjeuner', notIncluded: 'Traitements supplémentaires', toBring: 'Maillot de bain, serviette' },
            miniBench: { title: 'Mini Plage - Hon Tam', time: '08:00 - 15:00', description: 'Plage de sable blanc, plongée en apnée et bain de boue.', included: 'Transfert, guide, déjeuner, accès à la plage', notIncluded: 'Activités supplémentaires', toBring: 'Maillot de bain, crème solaire' },
            snorkeling: { title: 'Plongée en Apnée en Bateau', time: '08:00 - 14:00', description: 'Plongée en apnée dans une zone marine protégée avec guides professionnels.', included: 'Bateau, guide, équipement, déjeuner', notIncluded: 'Boissons', toBring: 'Maillot de bain, crème solaire' },
            honMun1: { title: 'Hon Mun - Plage Wai', time: '08:00 - 16:00', description: 'Plongée en apnée à l\'île Hon Mun et détente sur la plage.', included: 'Transfert, guide, déjeuner, plongée en apnée', notIncluded: 'Boissons', toBring: 'Maillot de bain, crème solaire' },
            honMun2: { title: 'Hon Mun - Mini Plage', time: '08:00 - 15:00', description: 'Combinaison de plongée en apnée à Hon Mun et détente à Mini Plage.', included: 'Transfert, guide, déjeuner, plongée en apnée', notIncluded: 'Boissons', toBring: 'Maillot de bain, crème solaire' },
            honMun3: { title: 'Hon Mun - Hon Tam', time: '08:00 - 16:00', description: 'Journée complète explorant les îles Hon Mun et Hon Tam.', included: 'Transfert, guide, déjeuner, plongée en apnée, bain de boue', notIncluded: 'Boissons', toBring: 'Maillot de bain, crème solaire' },
            oneIsland1: { title: 'Une Île - Mini Plage', time: '08:00 - 15:00', description: 'Journée relaxante à Mini Plage avec déjeuner et activités.', included: 'Transfert, guide, déjeuner, accès à la plage', notIncluded: 'Activités supplémentaires', toBring: 'Maillot de bain, crème solaire' },
            oneIsland2: { title: 'Une Île - Hon Tam', time: '08:00 - 16:00', description: 'Journée complète à Hon Tam avec bain de boue et plongée en apnée.', included: 'Transfert, guide, déjeuner, bain de boue, plongée en apnée', notIncluded: 'Boissons', toBring: 'Maillot de bain, crème solaire' },
            scuba: { title: 'Plongée Sous-Marine', time: '08:00 - 16:00', description: 'Plongée sous-marine professionnelle pour débutants et plongeurs expérimentés.', included: 'Transfert, guide, équipement, déjeuner, certificat', notIncluded: 'Cours avancés', toBring: 'Maillot de bain, serviette' },
            fourIslands: { title: 'Tour 4 Îles', time: '07:30 - 17:00', description: 'Visitez 4 belles îles avec plongée en apnée et saut entre îles.', included: 'Transfert, guide, déjeuner, plongée en apnée', notIncluded: 'Boissons, activités supplémentaires', toBring: 'Maillot de bain, crème solaire' },
            vineyard: { title: 'Vignobles de Ninh Thuan', time: '07:30 - 17:00', description: 'Explorez les vignobles, les temples et les paysages pittoresques.', included: 'Transfert, guide, déjeuner, dégustation de vin', notIncluded: 'Achats de vin supplémentaires', toBring: 'Chaussures confortables, appareil photo' },
            kongForest: { title: 'Forêt Kong - Tyrolienne et VTT', time: '08:00 - 17:00', description: 'Parc d\'aventure avec tyrolienne, VTT et activités en jungle.', included: 'Transfert, guide, déjeuner, toutes les activités', notIncluded: 'Activités supplémentaires', toBring: 'Vêtements confortables, chaussures fermées' },
            nemo: { title: 'Tour Nemo', time: '08:30 - 15:30', description: 'Plongée en apnée, fête du bar flottant et activités nautiques.', included: 'Transfert, guide, déjeuner, plongée en apnée, bar flottant', notIncluded: 'Boissons supplémentaires', toBring: 'Maillot de bain, crème solaire' },
            vinpearl: { title: 'Parc Vinpearl', time: '08:00 - 18:00', description: 'Parc à thème avec parc aquatique, téléphérique et attractions.', included: 'Transfert, guide, billet d\'entrée, déjeuner', notIncluded: 'Manèges supplémentaires, nourriture', toBring: 'Maillot de bain, crème solaire' },
            coral: { title: 'Tour Corail', time: '08:00 - 15:00', description: 'Plongée en apnée sur récif corallien et observation de la vie marine.', included: 'Transfert, guide, déjeuner, équipement', notIncluded: 'Boissons', toBring: 'Maillot de bain, crème solaire' },
            evening: { title: 'Croisière du Soir', time: '16:00 - 21:00', description: 'Croisière au coucher du soleil avec dîner et divertissement.', included: 'Transfert, guide, dîner, divertissement', notIncluded: 'Boissons', toBring: 'Vêtements décontractés, appareil photo' }
        }
    },
    vi: {
        'hero-title': 'Khám Phá Thiên Đường Ở Nha Trang',
        'hero-subtitle': 'Trải Nghiệm Các Tour Du Lịch Sang Trọng Và Những Cuộc Phiêu Lưu Khó Quên',
        'cta-button': 'Khám Phá Tour',
        'section-title': 'Các Tour Độc Quyền Của Chúng Tôi',
        'contact-title': 'Liên Hệ',
        'hours-title': 'Giờ Mở Cửa',
        'hours-text': 'Hàng Ngày 08:00 - 18:00',
        'location-title': 'Vị Trí',
        'location-text': 'Nha Trang, Việt Nam',
        tours: {
            deluxe: { title: 'Tour Đảo Sang Trọng', time: '08:00 - 16:00', description: 'Tận hưởng những bãi biển nguyên sơ, lặn với ống thở và bữa trưa hải sản tươi.', included: 'Đưa đón, hướng dẫn, bữa trưa, thiết bị lặn', notIncluded: 'Đồ uống, chi phí cá nhân', toBring: 'Đồ bơi, kem chống nắng, khăn' },
            honTam1: { title: 'VIP Hòn Tàm 1 - Bãi Biển', time: '08:00 - 16:00', description: 'Trải nghiệm đảo sang trọng với tiếp cận bãi biển và các môn thể thao nước.', included: 'Đưa đón, hướng dẫn, bữa trưa, tiếp cận bãi biển', notIncluded: 'Đồ uống', toBring: 'Đồ bơi, kem chống nắng' },
            honTam2: { title: 'VIP Hòn Tàm 2 - Bồn Bùn', time: '08:00 - 16:00', description: 'Trải nghiệm những bồn bùn nổi tiếng và các liệu pháp trị liệu.', included: 'Đưa đón, hướng dẫn, bồn bùn, bữa trưa', notIncluded: 'Liệu pháp bổ sung', toBring: 'Đồ bơi, khăn' },
            miniBench: { title: 'Bãi Biển Nhỏ - Hòn Tàm', time: '08:00 - 15:00', description: 'Bãi biển cát trắng, lặn với ống thở và bồn bùn.', included: 'Đưa đón, hướng dẫn, bữa trưa, tiếp cận bãi biển', notIncluded: 'Hoạt động bổ sung', toBring: 'Đồ bơi, kem chống nắng' },
            snorkeling: { title: 'Lặn Với Ống Thở Trên Thuyền', time: '08:00 - 14:00', description: 'Lặn với ống thở ở khu vực biển được bảo vệ với các hướng dẫn chuyên nghiệp.', included: 'Thuyền, hướng dẫn, thiết bị, bữa trưa', notIncluded: 'Đồ uống', toBring: 'Đồ bơi, kem chống nắng' },
            honMun1: { title: 'Hòn Mun - Bãi Vải', time: '08:00 - 16:00', description: 'Lặn với ống thở ở đảo Hòn Mun và thư giãn trên bãi biển.', included: 'Đưa đón, hướng dẫn, bữa trưa, lặn với ống thở', notIncluded: 'Đồ uống', toBring: 'Đồ bơi, kem chống nắng' },
            honMun2: { title: 'Hòn Mun - Bãi Biển Nhỏ', time: '08:00 - 15:00', description: 'Kết hợp lặn với ống thở ở Hòn Mun và thư giãn ở Bãi Biển Nhỏ.', included: 'Đưa đón, hướng dẫn, bữa trưa, lặn với ống thở', notIncluded: 'Đồ uống', toBring: 'Đồ bơi, kem chống nắng' },
            honMun3: { title: 'Hòn Mun - Hòn Tàm', time: '08:00 - 16:00', description: 'Cả ngày khám phá các đảo Hòn Mun và Hòn Tàm.', included: 'Đưa đón, hướng dẫn, bữa trưa, lặn với ống thở, bồn bùn', notIncluded: 'Đồ uống', toBring: 'Đồ bơi, kem chống nắng' },
            oneIsland1: { title: 'Một Đảo - Bãi Biển Nhỏ', time: '08:00 - 15:00', description: 'Ngày thư giãn ở Bãi Biển Nhỏ với bữa trưa và hoạt động.', included: 'Đưa đón, hướng dẫn, bữa trưa, tiếp cận bãi biển', notIncluded: 'Hoạt động bổ sung', toBring: 'Đồ bơi, kem chống nắng' },
            oneIsland2: { title: 'Một Đảo - Hòn Tàm', time: '08:00 - 16:00', description: 'Cả ngày ở Hòn Tàm với bồn bùn và lặn với ống thở.', included: 'Đưa đón, hướng dẫn, bữa trưa, bồn bùn, lặn với ống thở', notIncluded: 'Đồ uống', toBring: 'Đồ bơi, kem chống nắng' },
            scuba: { title: 'Lặn Biển', time: '08:00 - 16:00', description: 'Lặn biển chuyên nghiệp cho người mới bắt đầu và thợ lặn có kinh nghiệm.', included: 'Đưa đón, hướng dẫn, thiết bị, bữa trưa, chứng chỉ', notIncluded: 'Khóa học nâng cao', toBring: 'Đồ bơi, khăn' },
            fourIslands: { title: 'Tour 4 Đảo', time: '07:30 - 17:00', description: 'Ghé thăm 4 đảo xinh đẹp với lặn với ống thở và nhảy giữa các đảo.', included: 'Đưa đón, hướng dẫn, bữa trưa, lặn với ống thở', notIncluded: 'Đồ uống, hoạt động bổ sung', toBring: 'Đồ bơi, kem chống nắng' },
            vineyard: { title: 'Vườn Nho Ninh Thuận', time: '07:30 - 17:00', description: 'Khám phá vườn nho, đền chùa và cảnh quan tuyệt đẹp.', included: 'Đưa đón, hướng dẫn, bữa trưa, nếm rượu vang', notIncluded: 'Mua rượu vang bổ sung', toBring: 'Giày thoải mái, máy ảnh' },
            kongForest: { title: 'Rừng Kong - Zipline Và ATV', time: '08:00 - 17:00', description: 'Công viên phiêu lưu với zipline, ATV và hoạt động rừng.', included: 'Đưa đón, hướng dẫn, bữa trưa, tất cả hoạt động', notIncluded: 'Hoạt động bổ sung', toBring: 'Quần áo thoải mái, giày kín' },
            nemo: { title: 'Tour Nemo', time: '08:30 - 15:30', description: 'Lặn với ống thở, tiệc quán bar nổi và hoạt động nước.', included: 'Đưa đón, hướng dẫn, bữa trưa, lặn với ống thở, quán bar nổi', notIncluded: 'Đồ uống bổ sung', toBring: 'Đồ bơi, kem chống nắng' },
            vinpearl: { title: 'Công Viên Vinpearl', time: '08:00 - 18:00', description: 'Công viên chủ đề với công viên nước, cáp treo và các điểm thu hút.', included: 'Đưa đón, hướng dẫn, vé vào cửa, bữa trưa', notIncluded: 'Tàu bổ sung, thức ăn', toBring: 'Đồ bơi, kem chống nắng' },
            coral: { title: 'Tour San Hô', time: '08:00 - 15:00', description: 'Lặn với ống thở trên rạn san hô và quan sát đời sống biển.', included: 'Đưa đón, hướng dẫn, bữa trưa, thiết bị', notIncluded: 'Đồ uống', toBring: 'Đồ bơi, kem chống nắng' },
            evening: { title: 'Du Thuyền Tối', time: '16:00 - 21:00', description: 'Du thuyền lúc hoàng hôn với bữa tối và giải trí.', included: 'Đưa đón, hướng dẫn, bữa tối, giải trí', notIncluded: 'Đồ uống', toBring: 'Quần áo bình thường, máy ảnh' }
        }
    },
    uz: {
        'hero-title': 'Nha Trang\'da Jannatni Kashf Eting',
        'hero-subtitle': 'Hashamatli turlar va unutilmas sarguzashtlarni boshdan kechiring',
        'cta-button': 'Turlarni Kashf Eting',
        'section-title': 'Bizning Eksklyuziv Turlar',
        'contact-title': 'Aloqa',
        'hours-title': 'Ish Vaqti',
        'hours-text': 'Kuniga 08:00 - 18:00',
        'location-title': 'Joylashuv',
        'location-text': 'Nha Trang, Vetnam',
        tours: {
            deluxe: { title: 'Hashamatli Orol Turi', time: '08:00 - 16:00', description: 'Toza plyajlar, snorkling va yangi dengiz mahsulotlari tushlik.', included: 'Transfer, gid, tushlik, snorkling jihozlari', notIncluded: 'Ichimliklar, shaxsiy xarajatlar', toBring: 'Yuzuvchi kostumi, quyosh kremasi, shunga' },
            honTam1: { title: 'VIP Hon Tam 1 - Plyaj', time: '08:00 - 16:00', description: 'Plyaj kirish va suv sportlari bilan hashamatli orol tajribasi.', included: 'Transfer, gid, tushlik, plyaj kirishi', notIncluded: 'Ichimliklar', toBring: 'Yuzuvchi kostumi, quyosh kremasi' },
            honTam2: { title: 'VIP Hon Tam 2 - Loy Vanni', time: '08:00 - 16:00', description: 'Mashhur loy vannalari va terapevtik muolajalarni boshdan kechiring.', included: 'Transfer, gid, loy vanni, tushlik', notIncluded: 'Qo\'shimcha muolajalar', toBring: 'Yuzuvchi kostumi, shunga' },
            miniBench: { title: 'Mini Plyaj - Hon Tam', time: '08:00 - 15:00', description: 'Oq qum plyaji, snorkling va loy vanni.', included: 'Transfer, gid, tushlik, plyaj kirishi', notIncluded: 'Qo\'shimcha faoliyatlar', toBring: 'Yuzuvchi kostumi, quyosh kremasi' },
            snorkeling: { title: 'Kemada Snorkling', time: '08:00 - 14:00', description: 'Himoyalangan dengiz hududida professional gidlar bilan snorkling.', included: 'Kema, gid, jihozlar, tushlik', notIncluded: 'Ichimliklar', toBring: 'Yuzuvchi kostumi, quyosh kremasi' },
            honMun1: { title: 'Hon Mun - Vay Plyaji', time: '08:00 - 16:00', description: 'Hon Mun orolida snorkling va plyajda dam olish.', included: 'Transfer, gid, tushlik, snorkling', notIncluded: 'Ichimliklar', toBring: 'Yuzuvchi kostumi, quyosh kremasi' },
            honMun2: { title: 'Hon Mun - Mini Plyaj', time: '08:00 - 15:00', description: 'Hon Mun snorklingini va Mini Plyajda dam olishni birlashtiring.', included: 'Transfer, gid, tushlik, snorkling', notIncluded: 'Ichimliklar', toBring: 'Yuzuvchi kostumi, quyosh kremasi' },
            honMun3: { title: 'Hon Mun - Hon Tam', time: '08:00 - 16:00', description: 'Hon Mun va Hon Tam orollarini kashf etadigan butun kun.', included: 'Transfer, gid, tushlik, snorkling, loy vanni', notIncluded: 'Ichimliklar', toBring: 'Yuzuvchi kostumi, quyosh kremasi' },
            oneIsland1: { title: 'Bitta Orol - Mini Plyaj', time: '08:00 - 15:00', description: 'Mini Plyajda tushlik va faoliyatlar bilan dam olish kuni.', included: 'Transfer, gid, tushlik, plyaj kirishi', notIncluded: 'Qo\'shimcha faoliyatlar', toBring: 'Yuzuvchi kostumi, quyosh kremasi' },
            oneIsland2: { title: 'Bitta Orol - Hon Tam', time: '08:00 - 16:00', description: 'Hon Tamda loy vanni va snorkling bilan butun kun.', included: 'Transfer, gid, tushlik, loy vanni, snorkling', notIncluded: 'Ichimliklar', toBring: 'Yuzuvchi kostumi, quyosh kremasi' },
            scuba: { title: 'Akvalung Sho\'ng\'in', time: '08:00 - 16:00', description: 'Yangi boshlanuvchilar va tajribali sho\'ng\'inchilar uchun professional akvalung sho\'ng\'in.', included: 'Transfer, gid, jihozlar, tushlik, sertifikat', notIncluded: 'Ilg\'or kurslar', toBring: 'Yuzuvchi kostumi, shunga' },
            fourIslands: { title: '4 Orol Turi', time: '07:30 - 17:00', description: '4 ta go\'zal orolni snorkling va orol o\'tish bilan ziyorat qiling.', included: 'Transfer, gid, tushlik, snorkling', notIncluded: 'Ichimliklar, qo\'shimcha faoliyatlar', toBring: 'Yuzuvchi kostumi, quyosh kremasi' },
            vineyard: { title: 'Ninh Thuan Uzum Bog\'lari', time: '07:30 - 17:00', description: 'Uzum bog\'larini, ibodatxonalarni va go\'zal landshaftlarni kashf eting.', included: 'Transfer, gid, tushlik, sharob tatib ko\'rish', notIncluded: 'Qo\'shimcha sharob sotib olish', toBring: 'Qulay oyoq kiyimi, kamera' },
            kongForest: { title: 'Kong O\'rmani - Zipline va ATV', time: '08:00 - 17:00', description: 'Zipline, ATV va o\'rman faoliyatlari bilan sarguzasht parki.', included: 'Transfer, gid, tushlik, barcha faoliyatlar', notIncluded: 'Qo\'shimcha faoliyatlar', toBring: 'Qulay kiyim, yopiq oyoq kiyimi' },
            nemo: { title: 'Nemo Turi', time: '08:30 - 15:30', description: 'Snorkling, suzuvchi bar ziyofati va suv faoliyatlari.', included: 'Transfer, gid, tushlik, snorkling, suzuvchi bar', notIncluded: 'Qo\'shimcha ichimliklar', toBring: 'Yuzuvchi kostumi, quyosh kremasi' },
            vinpearl: { title: 'Vinpearl Parki', time: '08:00 - 18:00', description: 'Suv parki, teleferik va tadbir bilan tema parki.', included: 'Transfer, gid, kirish chiptasi, tushlik', notIncluded: 'Qo\'shimcha chiptalar, ovqat', toBring: 'Yuzuvchi kostumi, quyosh kremasi' },
            coral: { title: 'Marjon Turi', time: '08:00 - 15:00', description: 'Marjon rifida snorkling va dengiz hayoti kuzatish.', included: 'Transfer, gid, tushlik, jihozlar', notIncluded: 'Ichimliklar', toBring: 'Yuzuvchi kostumi, quyosh kremasi' },
            evening: { title: 'Kechki Kruiz', time: '16:00 - 21:00', description: 'Kechqurun kruizi, kechki ovqat va ko\'ngilochar bilan.', included: 'Transfer, gid, kechki ovqat, ko\'ngilochar', notIncluded: 'Ichimliklar', toBring: 'Kundalik kiyim, kamera' }
        }
    }
};

let currentLanguage = 'en';

function setLanguage(lang) {
    currentLanguage = lang;
    updatePageLanguage();
    updateActiveButton();
}

function updatePageLanguage() {
    const trans = translations[currentLanguage];
    
    // Update text elements
    document.getElementById('hero-title').textContent = trans['hero-title'];
    document.getElementById('hero-subtitle').textContent = trans['hero-subtitle'];
    document.getElementById('cta-button').textContent = trans['cta-button'];
    document.getElementById('section-title').textContent = trans['section-title'];
    document.getElementById('contact-title').textContent = trans['contact-title'];
    document.getElementById('hours-title').textContent = trans['hours-title'];
    document.getElementById('hours-text').textContent = trans['hours-text'];
    document.getElementById('location-title').textContent = trans['location-title'];
    document.getElementById('location-text').textContent = trans['location-text'];
    
    // Update tours
    renderTours();
}

function updateActiveButton() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[onclick="setLanguage('${currentLanguage}')"]`).classList.add('active');
}

function renderTours() {
    const toursContainer = document.getElementById('tours-grid');
    toursContainer.innerHTML = '';
    
    const tours = translations[currentLanguage].tours;
    const tourKeys = Object.keys(tours);
    
    tourKeys.forEach(key => {
        const tour = tours[key];
        const tourCard = document.createElement('div');
        tourCard.className = 'tour-card';
        tourCard.innerHTML = `
            <div class="tour-header">
                <h3 class="tour-title">${tour.title}</h3>
                <p class="tour-time">⏰ ${tour.time}</p>
            </div>
            <div class="tour-body">
                <div class="tour-section">
                    <div class="tour-section-title">📋 Program</div>
                    <div class="tour-section-content">${tour.description}</div>
                </div>
                <div class="tour-section">
                    <div class="tour-section-title">✅ Included</div>
                    <div class="tour-section-content">${tour.included}</div>
                </div>
                <div class="tour-section">
                    <div class="tour-section-title">❌ Not Included</div>
                    <div class="tour-section-content">${tour.notIncluded}</div>
                </div>
                <div class="tour-section">
                    <div class="tour-section-title">🎒 Bring</div>
                    <div class="tour-section-content">${tour.toBring}</div>
                </div>
            </div>
        `;
        toursContainer.appendChild(tourCard);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderTours();
});
