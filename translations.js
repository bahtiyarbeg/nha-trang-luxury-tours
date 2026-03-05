const translations = {
  "ru": {
    "header": "Туры Нячанга",
    "selectLanguage": "Выберите язык",
    "toursTitle": "Наши туры",
    "contact": "Контакты",
    "tours": {
      "fuyen": {
        "title": "Фуйен — Дикий и неоткрытый Вьетнам",
        "time": "05:00 – 20:00",
        "description": "Фуйен — это одно из самых красивых и малоизвестных направлений Центрального Вьетнама. Здесь нет массового туризма. Это край дикой природы, бескрайних пляжей и скалистых мысов.",
        "included": "Трансфер, входные билеты, обед, питьевая вода, гид",
        "notIncluded": "Дополнительные развлечения, алкогольные напитки",
        "toBring": "Купальник, полотенце, солнцезащитный крем, головной убор, удобную обувь"
      },
      "doTheatre": {
        "title": "Театр Đó (Do Theatre) — Life Puppets & Chum Show",
        "time": "19:00 – 21:00",
        "description": "Do Theatre — это современное культурно-художественное пространство в Нячанге. Здесь проходят живые музыкальные программы, танцевальные представления и уникальные постановки кукол.",
        "included": "Входной билет, место в театре, шоу-программа",
        "notIncluded": "Питание, напитки, фото/видеосъёмка",
        "toBring": "Удобную одежду, наличные деньги"
      },
      "emperorCruise": {
        "title": "Emperor Cruise 5★ — Вечерний круиз на яхте",
        "time": "16:00 – 20:30",
        "description": "Emperor Cruise — это премиальный вечерний круиз на роскошной яхте 5★ в бухте Нячанга. Идеальный формат для романтического вечера в атмосфере luxury.",
        "included": "Круиз на яхте 5★, приветственный напиток, ужин, безлимитные напитки, живая музыка, трансфер",
        "notIncluded": "Дополнительные услуги, чаевые",
        "toBring": "Элегантную одежду, наличные деньги"
      },
      "vinpearl": {
        "title": "Vinpearl Nha Trang — Билет на 1 день / 2 дня",
        "time": "09:00 – 17:00",
        "description": "Остров Hon Tre — крупнейший развлекательный курорт Вьетнама. Здесь расположен парк VinWonders, канатная дорога, аквапарк, океанариум и пляжи с белым песком.",
        "included": "Канатная дорога, вход в VinWonders, все аттракционы, аквапарк, пляж",
        "notIncluded": "Питание, личные расходы",
        "toBring": "Купальник, полотенце, солнцезащитный крем, удобную обувь"
      },
      "zenATV": {
        "title": "Zen ATV + Zipline + Горная река",
        "time": "08:00 – 17:00",
        "description": "ZEN TOUR — это сочетание адреналина, дикой природы и спокойствия древних храмов. За один день вы посетите буддийскую пагоду, прокатитесь на квадроциклах или пролетите над джунглями на зиплайне.",
        "included": "Трансфер, обед, питьевая вода, входные билеты, страховка, гид",
        "notIncluded": "ATV/ZIPLINE (оплачиваются отдельно), личные расходы",
        "toBring": "Сменную одежду, купальник, полотенце, солнцезащитный крем, закрытую обувь"
      },
      "kongForest": {
        "title": "Kong Forest — Экстрим в джунглях",
        "time": "08:00 – 17:00",
        "description": "Kong Forest — это парк экстремальных развлечений в джунглях Нячанга. Зиплайны, подвесные мосты, скалодромы и качели над пропастью среди деревьев.",
        "included": "Входной билет, все аттракционы, страховка, гид, питьевая вода",
        "notIncluded": "Трансфер, обед, дополнительные услуги",
        "toBring": "Спортивную одежду, закрытую обувь, полотенце"
      },
      "baHo": {
        "title": "Ба Хо (Ba Ho) — Три водопада и горная река",
        "time": "07:00 – 17:00",
        "description": "Ба Хо — это каскад из трёх водопадов в горах Нячанга. Вы пройдёте пешком через джунгли, искупаетесь в кристально чистых бассейнах и насладитесь красотой дикой природы.",
        "included": "Трансфер, гид, обед, питьевая вода, входные билеты",
        "notIncluded": "Дополнительные услуги, личные расходы",
        "toBring": "Купальник, полотенце, закрытую обувь, солнцезащитный крем, репеллент"
      },
      "robinson": {
        "title": "Robinson Island — Остров Робинзона",
        "time": "08:00 – 16:00",
        "description": "Robinson Island — это уединённый остров с белым песком, кристально чистой водой и минимумом туристов. Идеально подходит для тех, кто ищет спокойствия и красоты природы.",
        "included": "Трансфер, катер, обед, питьевая вода, входной билет, гид",
        "notIncluded": "Дополнительные развлечения, алкогольные напитки",
        "toBring": "Купальник, полотенце, солнцезащитный крем, головной убор, солнцезащитные очки"
      },
      "yangBay": {
        "title": "Yang Bay — Водопад и джунгли",
        "time": "07:00 – 17:00",
        "description": "Yang Bay — это красивый водопад в джунглях с естественными бассейнами. Вы сможете искупаться в горной реке, пройти пешком по лесу и насладиться дикой природой.",
        "included": "Трансфер, гид, обед, питьевая вода, входные билеты",
        "notIncluded": "Дополнительные услуги, личные расходы",
        "toBring": "Купальник, полотенце, закрытую обувь, солнцезащитный крем, репеллент"
      },
      "doiDep": {
        "title": "Doi Dep Island — Остров Красивой Горы",
        "time": "08:00 – 16:00",
        "description": "Doi Dep Island — это живописный остров с белым пляжем, коралловыми рифами и спокойной атмосферой. Идеально для снорклинга и пляжного отдыха.",
        "included": "Трансфер, катер, обед, питьевая вода, входной билет, гид, оборудование для снорклинга",
        "notIncluded": "Дополнительные развлечения, алкогольные напитки",
        "toBring": "Купальник, полотенце, солнцезащитный крем, головной убор, солнцезащитные очки"
      },
      "diepSon": {
        "title": "Дьеп Сон (Diep Son) — Песчаная коса и три острова",
        "time": "08:00 – 16:00",
        "description": "Дьеп Сон — это уникальное место, где три острова соединены песчаной косой. Вы сможете пройти пешком по песку, искупаться в кристально чистой воде и насладиться панорамными видами.",
        "included": "Трансфер, катер, обед, питьевая вода, входной билет, гид",
        "notIncluded": "Дополнительные развлечения, алкогольные напитки",
        "toBring": "Купальник, полотенце, солнцезащитный крем, головной убор, удобную обувь"
      },
      "miniBeach": {
        "title": "Mini Beach — Элитный пляжный отдых",
        "time": "08:00 – 16:00",
        "description": "Mini Beach — это премиальная пляжная зона с белым песком, прозрачной водой и спокойной атмосферой. Здесь меньше туристов и больше комфорта, чем на обычных пляжах.",
        "included": "Трансфер, катер, обед, питьевая вода, входной билет, гид, лежаки",
        "notIncluded": "Дополнительные развлечения, алкогольные напитки",
        "toBring": "Купальник, полотенце, солнцезащитный крем, головной убор, солнцезащитные очки"
      },
      "honMun": {
        "title": "Хон Мун — Снорклинг в морском заповеднике",
        "time": "08:00 – 14:30",
        "description": "Хон Мун — это главный морской заповедник Нячанга с живыми коралловыми рифами и богатой морской экосистемой. Идеально для снорклинга и наблюдения за тропическими рыбами.",
        "included": "Трансфер, катер, питьевая вода, входной билет, гид, оборудование для снорклинга",
        "notIncluded": "Дайвинг, водные развлечения, алкогольные напитки",
        "toBring": "Купальник, полотенце, солнцезащитный крем, головной убор, солнцезащитные очки"
      },
      "honMunMiniBeach": {
        "title": "Хон Мун – Mini Beach — Снорклинг + пляжный отдых",
        "time": "08:00 – 16:30",
        "description": "Этот тур сочетает активное снорклинг в морском заповеднике Хон Мун и отдых на элитном пляже Mini Beach. Лучшее за один день: активность и релакс.",
        "included": "Трансфер, катер, обед, питьевая вода, входные билеты, гид, оборудование для снорклинга",
        "notIncluded": "Водные развлечения, алкогольные напитки",
        "toBring": "Купальник, полотенце, солнцезащитный крем, головной убор, солнцезащитные очки"
      },
      "honMunHonTam": {
        "title": "Хон Мун – Хон Там — Снорклинг + премиальный отдых",
        "time": "08:00 – 16:30",
        "description": "Этот тур сочетает активное снорклинг в морском заповеднике Хон Мун и расслабляющий отдых на ухоженном пляже острова Хон Там. Драйв и релакс в один день.",
        "included": "Трансфер, катер, обед, питьевая вода, входные билеты, гид, оборудование для снорклинга",
        "notIncluded": "Водные развлечения, алкогольные напитки, SPA",
        "toBring": "Купальник, полотенце, солнцезащитный крем, головной убор, солнцезащитные очки"
      },
      "honTamNoMud": {
        "title": "Хон Там без грязей — Комфортный пляжный отдых",
        "time": "08:00 – 16:00",
        "description": "Остров Хон Там — это ухоженный курортный остров с чистейшей водой и мягким песком. Этот тур идеален для тех, кто хочет провести день у моря в спокойной атмосфере без SPA-процедур.",
        "included": "Трансфер, катер, обед, питьевая вода, входной билет, гид, лежаки, бассейн",
        "notIncluded": "Грязевые ванны, SPA, водные развлечения, алкогольные напитки",
        "toBring": "Купальник, полотенце, солнцезащитный крем, головной убор, солнцезащитные очки"
      },
      "honTamMud": {
        "title": "Хон Там с грязевыми ваннами — Премиум SPA-отдых",
        "time": "08:00 – 16:00",
        "description": "Остров Хон Там с посещением современного SPA-комплекса с минеральными грязевыми ваннами. Программа идеальна для расслабления и восстановления сил. Минеральные грязи улучшают состояние кожи и снимают напряжение.",
        "included": "Трансфер, катер, обед, питьевая вода, входной билет, гид, грязевая ванна, минеральные бассейны, лежаки",
        "notIncluded": "Массаж, дополнительные SPA-процедуры, алкогольные напитки",
        "toBring": "Купальник, полотенце, сменную одежду, солнцезащитный крем, головной убор"
      },
      "fourIslands": {
        "title": "4 Острова — Расширенный морской маршрут",
        "time": "08:00 – 16:30",
        "description": "Это насыщенная версия классического маршрута. За один день вы посетите четыре живописных острова бухты Нячанга. Тур сочетает активный снорклинг, пляжный отдых и полноценный обед на острове.",
        "included": "Трансфер, катер, обед, питьевая вода, входные билеты, гид, оборудование для снорклинга",
        "notIncluded": "Водные развлечения, алкогольные напитки",
        "toBring": "Купальник, полотенце, солнцезащитный крем, головной убор, солнцезащитные очки"
      },
      "threeIslands": {
        "title": "3 Острова — Классический морской день",
        "time": "08:00 – 16:30",
        "description": "Один из самых популярных и сбалансированных морских маршрутов в Нячанге. За один день вы посетите три живописных острова, увидите коралловые рифы и проведёте время на оборудованных пляжах.",
        "included": "Трансфер, катер, обед, питьевая вода, входные билеты, гид, оборудование для снорклинга",
        "notIncluded": "Водные развлечения, алкогольные напитки",
        "toBring": "Купальник, полотенце, солнцезащитный крем, головной убор, солнцезащитные очки"
      },
      "nemoTrip": {
        "title": "Nemo Trip — Морское приключение с рыбалкой",
        "time": "08:00 – 16:00",
        "description": "Nemo Trip — это яркий морской тур с рыбалкой, снорклингом и обедом на острове. Вы попробуете себя в роли рыбака, увидите подводный мир и насладитесь атмосферой тропического острова.",
        "included": "Трансфер, катер, рыболовное оборудование, обед, питьевая вода, входной билет, гид, оборудование для снорклинга",
        "notIncluded": "Водные развлечения, алкогольные напитки",
        "toBring": "Купальник, полотенце, солнцезащитный крем, головной убор, солнцезащитные очки"
      },
      "miraeFuturePark": {
        "title": "Mirae Future Park – Soi Beach — Парк будущего и пляж",
        "time": "08:00 – 16:00",
        "description": "Mirae Future Park — это современный островной комплекс с ухоженным пляжем, активными развлечениями и комфортной инфраструктурой. Идеально для семей, пар и компаний друзей. Чистая бирюзовая вода, оборудованный пляж и развлекательная программа.",
        "included": "Входной билет, пляж, шезлонги, купание, Foam Party, надувные развлечения, SUP-борды, обед, питьевая вода, гид",
        "notIncluded": "Дополнительные развлечения, алкогольные напитки",
        "toBring": "Купальник, полотенце, солнцезащитный крем, головной убор, солнцезащитные очки, наличные деньги"
      }
    }
  },
  "en": {
    "header": "Nha Trang Tours",
    "selectLanguage": "Select Language",
    "toursTitle": "Our Tours",
    "contact": "Contact",
    "tours": {
      "fuyen": {
        "title": "Fuyen — Wild and Undiscovered Vietnam",
        "time": "05:00 – 20:00",
        "description": "Fuyen is one of the most beautiful and least known destinations in Central Vietnam. There is no mass tourism here. This is a land of wild nature, endless beaches and rocky cliffs.",
        "included": "Transfer, entrance tickets, lunch, drinking water, guide",
        "notIncluded": "Additional entertainment, alcoholic beverages",
        "toBring": "Swimsuit, towel, sunscreen, hat, comfortable shoes"
      },
      "doTheatre": {
        "title": "Do Theatre — Life Puppets & Chum Show",
        "time": "19:00 – 21:00",
        "description": "Do Theatre is a modern cultural and artistic space in Nha Trang. Live music programs, dance performances and unique puppet shows are held here.",
        "included": "Entrance ticket, seat in theater, show program",
        "notIncluded": "Food, drinks, photo/video",
        "toBring": "Comfortable clothes, cash"
      },
      "emperorCruise": {
        "title": "Emperor Cruise 5★ — Evening Yacht Cruise",
        "time": "16:00 – 20:30",
        "description": "Emperor Cruise is a premium evening cruise on a luxurious 5★ yacht in Nha Trang Bay. Perfect for a romantic evening in a luxury atmosphere.",
        "included": "5★ yacht cruise, welcome drink, 5-course dinner, unlimited drinks, live music, transfer",
        "notIncluded": "Additional services, tips",
        "toBring": "Elegant clothes, cash"
      },
      "vinpearl": {
        "title": "Vinpearl Nha Trang — 1 Day / 2 Days Ticket",
        "time": "09:00 – 17:00",
        "description": "Hon Tre Island is Vietnam's largest entertainment resort. It features VinWonders park, cable car over the sea, water park, aquarium and white sand beaches.",
        "included": "Cable car, VinWonders entrance, all attractions, water park, aquarium, beach",
        "notIncluded": "Food, personal expenses",
        "toBring": "Swimsuit, towel, sunscreen, comfortable shoes"
      },
      "zenATV": {
        "title": "Zen ATV + Zipline + Mountain River",
        "time": "08:00 – 17:00",
        "description": "ZEN TOUR is a unique combination of adrenaline, wild nature and the tranquility of ancient temples. Visit a Buddhist pagoda, ride ATVs or zipline over the jungle.",
        "included": "Transfer, lunch, drinking water, entrance tickets, insurance, guide",
        "notIncluded": "ATV/ZIPLINE (paid separately), personal expenses",
        "toBring": "Change of clothes, swimsuit, towel, sunscreen, closed shoes"
      },
      "kongForest": {
        "title": "Kong Forest — Extreme in the Jungle",
        "time": "08:00 – 17:00",
        "description": "Kong Forest is an extreme entertainment park in Nha Trang's jungle. Zip lines, suspension bridges, rock climbing and swings over cliffs among the trees.",
        "included": "Entrance ticket, all attractions, insurance, guide, drinking water",
        "notIncluded": "Transfer, lunch, additional services",
        "toBring": "Sports clothes, closed shoes, towel"
      },
      "baHo": {
        "title": "Ba Ho — Three Waterfalls and Mountain River",
        "time": "07:00 – 17:00",
        "description": "Ba Ho is a cascade of three waterfalls in the Nha Trang mountains. Hike through the jungle, swim in crystal clear pools and enjoy the beauty of wild nature.",
        "included": "Transfer, guide, lunch, drinking water, entrance tickets",
        "notIncluded": "Additional services, personal expenses",
        "toBring": "Swimsuit, towel, closed shoes, sunscreen, insect repellent"
      },
      "robinson": {
        "title": "Robinson Island — Robinson Island",
        "time": "08:00 – 16:00",
        "description": "Robinson Island is a secluded island with white sand, crystal clear water and minimal tourists. Perfect for those seeking peace and natural beauty.",
        "included": "Transfer, boat, lunch, drinking water, entrance ticket, guide",
        "notIncluded": "Additional entertainment, alcoholic beverages",
        "toBring": "Swimsuit, towel, sunscreen, hat, sunglasses"
      },
      "yangBay": {
        "title": "Yang Bay — Waterfall and Jungle",
        "time": "07:00 – 17:00",
        "description": "Yang Bay is a beautiful waterfall in the jungle with natural pools. Swim in the mountain river, hike through the forest and enjoy wild nature.",
        "included": "Transfer, guide, lunch, drinking water, entrance tickets",
        "notIncluded": "Additional services, personal expenses",
        "toBring": "Swimsuit, towel, closed shoes, sunscreen, insect repellent"
      },
      "doiDep": {
        "title": "Doi Dep Island — Beautiful Mountain Island",
        "time": "08:00 – 16:00",
        "description": "Doi Dep Island is a picturesque island with white beach, coral reefs and peaceful atmosphere. Perfect for snorkeling and beach relaxation.",
        "included": "Transfer, boat, lunch, drinking water, entrance ticket, guide, snorkeling equipment",
        "notIncluded": "Additional entertainment, alcoholic beverages",
        "toBring": "Swimsuit, towel, sunscreen, hat, sunglasses"
      },
      "diepSon": {
        "title": "Diep Son — Sand Bar and Three Islands",
        "time": "08:00 – 16:00",
        "description": "Diep Son is a unique place where three islands are connected by a sand bar. Walk on the sand, swim in crystal clear water and enjoy panoramic views.",
        "included": "Transfer, boat, lunch, drinking water, entrance ticket, guide",
        "notIncluded": "Additional entertainment, alcoholic beverages",
        "toBring": "Swimsuit, towel, sunscreen, hat, comfortable shoes"
      },
      "miniBeach": {
        "title": "Mini Beach — Elite Beach Relaxation",
        "time": "08:00 – 16:00",
        "description": "Mini Beach is a premium beach area with white sand, clear water and peaceful atmosphere. Fewer tourists and more comfort than regular beaches.",
        "included": "Transfer, boat, lunch, drinking water, entrance ticket, guide, loungers",
        "notIncluded": "Additional entertainment, alcoholic beverages",
        "toBring": "Swimsuit, towel, sunscreen, hat, sunglasses"
      },
      "honMun": {
        "title": "Hon Mun — Snorkeling in Marine Reserve",
        "time": "08:00 – 14:30",
        "description": "Hon Mun is Nha Trang's main marine reserve with live coral reefs and rich marine ecosystem. Perfect for snorkeling and observing tropical fish.",
        "included": "Transfer, boat, drinking water, entrance ticket, guide, snorkeling equipment",
        "notIncluded": "Diving, water activities, alcoholic beverages",
        "toBring": "Swimsuit, towel, sunscreen, hat, sunglasses"
      },
      "honMunMiniBeach": {
        "title": "Hon Mun – Mini Beach — Snorkeling + Beach Relaxation",
        "time": "08:00 – 16:30",
        "description": "This tour combines active snorkeling in Hon Mun marine reserve and relaxation on Mini Beach. Best of both worlds: activity and relaxation.",
        "included": "Transfer, boat, lunch, drinking water, entrance tickets, guide, snorkeling equipment",
        "notIncluded": "Water activities, alcoholic beverages",
        "toBring": "Swimsuit, towel, sunscreen, hat, sunglasses"
      },
      "honMunHonTam": {
        "title": "Hon Mun – Hon Tam — Snorkeling + Premium Relaxation",
        "time": "08:00 – 16:30",
        "description": "This tour combines active snorkeling in Hon Mun marine reserve and relaxing time on Hon Tam beach. Action and relaxation in one day.",
        "included": "Transfer, boat, lunch, drinking water, entrance tickets, guide, snorkeling equipment",
        "notIncluded": "Water activities, alcoholic beverages, SPA",
        "toBring": "Swimsuit, towel, sunscreen, hat, sunglasses"
      },
      "honTamNoMud": {
        "title": "Hon Tam Without Mud — Comfortable Beach Relaxation",
        "time": "08:00 – 16:00",
        "description": "Hon Tam Island is a well-maintained resort island with pristine water and soft sand. Perfect for those who want a peaceful day by the sea without SPA procedures.",
        "included": "Transfer, boat, lunch, drinking water, entrance ticket, guide, loungers, pool",
        "notIncluded": "Mud baths, SPA, water activities, alcoholic beverages",
        "toBring": "Swimsuit, towel, sunscreen, hat, sunglasses"
      },
      "honTamMud": {
        "title": "Hon Tam With Mud Baths — Premium SPA Relaxation",
        "time": "08:00 – 16:00",
        "description": "Hon Tam Island with a visit to a modern SPA complex with mineral mud baths. Perfect for relaxation and recovery. Mineral mud improves skin and relieves stress.",
        "included": "Transfer, boat, lunch, drinking water, entrance ticket, guide, mud bath, mineral pools, loungers",
        "notIncluded": "Massage, additional SPA procedures, alcoholic beverages",
        "toBring": "Swimsuit, towel, change of clothes, sunscreen, hat"
      },
      "fourIslands": {
        "title": "4 Islands — Extended Sea Route",
        "time": "08:00 – 16:30",
        "description": "An intense version of the classic route. Visit four picturesque islands in Nha Trang Bay in one day. Combines active snorkeling, beach relaxation and full meal on island.",
        "included": "Transfer, boat, lunch, drinking water, entrance tickets, guide, snorkeling equipment",
        "notIncluded": "Water activities, alcoholic beverages",
        "toBring": "Swimsuit, towel, sunscreen, hat, sunglasses"
      },
      "threeIslands": {
        "title": "3 Islands — Classic Sea Day",
        "time": "08:00 – 16:30",
        "description": "One of the most popular and balanced sea routes in Nha Trang. Visit three picturesque islands, see coral reefs and spend time on equipped beaches.",
        "included": "Transfer, boat, lunch, drinking water, entrance tickets, guide, snorkeling equipment",
        "notIncluded": "Water activities, alcoholic beverages",
        "toBring": "Swimsuit, towel, sunscreen, hat, sunglasses"
      },
      "nemoTrip": {
        "title": "Nemo Trip — Sea Adventure with Fishing",
        "time": "08:00 – 16:00",
        "description": "Nemo Trip is a bright sea tour with fishing, snorkeling and lunch on island. Try yourself as a fisherman, see the underwater world and enjoy tropical island atmosphere.",
        "included": "Transfer, boat, fishing equipment, lunch, drinking water, entrance ticket, guide, snorkeling equipment",
        "notIncluded": "Water activities, alcoholic beverages",
        "toBring": "Swimsuit, towel, sunscreen, hat, sunglasses"
      },
      "miraeFuturePark": {
        "title": "Mirae Future Park – Soi Beach — Future Park and Beach",
        "time": "08:00 – 16:00",
        "description": "Mirae Future Park is a modern island complex with well-maintained beach, active entertainment and comfortable infrastructure. Perfect for families, couples and groups. Clear turquoise water and entertainment program.",
        "included": "Entrance ticket, beach, loungers, swimming, Foam Party, inflatable entertainment, SUP boards, lunch, drinking water, guide",
        "notIncluded": "Additional entertainment, alcoholic beverages",
        "toBring": "Swimsuit, towel, sunscreen, hat, sunglasses, cash"
      }
    }
  }
};
