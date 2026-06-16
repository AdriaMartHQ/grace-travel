import type { BaseTranslations } from '../translations';

const en: BaseTranslations = {
    nav: { home: 'Home', tours: 'Tours', faith: 'Faith', about: 'About Us', tickets: 'Tickets', contact: 'Contact', enquire: 'Enquire', closeMenu: 'Close', itineraries: 'Itineraries', turkeySection: 'Turkey', turkeyClassic: 'Cultural & Heritage', turkeyClassicDesc: '6–10 day S-series classics', faithPilgrimage: 'Faith Pilgrimage', faithPilgrimageDesc: 'Seven Churches · Paul\'s Footsteps', otherDest: 'Other Destinations', balkans: 'Balkans 3-Country', balkansDesc: 'Serbia · Montenegro · Bosnia', holyland: 'Holy Land', holylandDesc: 'Israel · Jerusalem · Galilee', routesSection: 'Itineraries', servicesSection: 'Services' },
    hero: {
      title: 'Discover the Soul of Turkey',
      subtitle: 'Bespoke journeys through ancient history and vibrant culture with Grace Way — your licensed boutique travel partner in Turkey.',
      cta1: 'Explore Routes',
      cta2: 'Online Support'
    },
    sections: {
      featuredTours: 'Signature Experiences',
      featuredSubtitle: 'Our Most Popular Routes',
      whyUs: 'The Grace Way Standard',
      whyUsSubtitle: 'Why Choose Our Expertise?',
      faq: 'Traveler FAQ',
      viewAll: 'View All Itineraries',
      // Dedicated labels for tour filters
      tourCategories: {
        all: 'All Journeys',
        classic: 'Signature & Cultural',
        family: 'Faith Journeys',
        balkan: 'Balkans'
      },
      // Dedicated labels for ticket filters
      ticketCategories: {
        all: 'All Experiences',
        entry: 'Palaces & Museums'
      },
      // Backwards-compatible combined map (used as fallback)
      categories: { 
        all: 'All Journeys', 
        classic: 'Signature & Cultural', 
        family: 'Faith Journeys', 
        entry: 'Palaces & Museums', 
        activity: 'Local Activities', 
        daytrip: 'Excursions' 
      }
    },
    itinerary_s1: {
      badge: "S1 Package · Boutique DMC",
      title: "Heritage Journey",
      subtitle: "Istanbul & Cappadocia",
      description: "6-Day Odyssey · Boutique Small Group · Pure Fun",
      cta_consult: "Enquire Now",
      cta_plan: "Get Plan",
      audience_title: "Is this the journey you are looking for?",
      audience_list: [
        "No more endless bus rides (We arrange domestic flights)",
        "Deep exploration for history and ancient heritage lovers",
        "Premium stays: 5-star hotels, thermal spas, and cave suites",
        "100% pure travel: No shopping traps, strictly boutique services",
        "Expert guides leading immersive local intangible heritage workshops"
      ],
      highlights_title: "Core Highlights",
      highlights: [
        { title: "Sunrise Balloon Flight", desc: "Soar above Cappadocia at dawn, overlooking the lunar-like landscapes." },
        { title: "Ebru Art Workshop", desc: "UNESCO heritage experience, dancing with colors on water to touch the Turkish soul." },
        { title: "Ephesus Immersive Museum", desc: "High-tech light & shadow experience, bringing ancient Roman history to life." },
        { title: "Private Bosphorus Cruise", desc: "Private boat tour between Europe and Asia, viewing Ottoman mansions from the water." },
        { title: "Ottoman Rooftop Dinner", desc: "Dine at Grace Rooftop with Hagia Sophia views, featuring an Ottoman chef's menu." },
        { title: "Dual Domestic Flights", desc: "Save time by flying instead of long drives (any drive > 5h is replaced by a flight)." }
      ],
      table_title: "Itinerary Summary",
      table_mobile_hint: "← Swipe to view full table →",
      table_headers: { day: "Day", plan: "Plan", meals: "B/L/D", hotel: "Accommodation" },
      schedule: [
        { day: "D1", plan: "Istanbul ✈ Cappadocia", b: "/", l: "Pottery Kebab", d: "Hotel", hotel: "Cave Boutique Hotel" },
        { day: "D2", plan: "Balloon · Ebru · Konya", b: "Hotel", l: "Turkish Pita", d: "Hotel", hotel: "Bayır Diamond 5*" },
        { day: "D3", plan: "Konya → Pamukkale", b: "Hotel", l: "Grilled Lamb", d: "Hotel", hotel: "Bayır Diamond 5*" },
        { day: "D4", plan: "Pamukkale → Kusadasi", b: "Hotel", l: "Local Flavors", d: "Hotel", hotel: "Charisma De Luxe 5*" },
        { day: "D5", plan: "Kusadasi ✈ Istanbul", b: "Hotel", l: "Chinese Cuisine", d: "Rooftop Dinner", hotel: "Sheraton Istanbul 5*" },
        { day: "D6", plan: "Bosphorus · Departure", b: "Hotel", l: "Grilled Fish", d: "Chinese Cuisine", hotel: "Transfer to Airport" }
      ],
      daily_details: [
        { day: "01", city: "Istanbul ✈ Cappadocia", theme: "Cave Churches · Fairy Chimneys", content: "Fly to Cappadocia. Visit Goreme Open Air Museum. Marvel at Pasabag chimneys and Pigeon Valley. Pottery workshop in Avanos included." },
        { day: "02", city: "Balloon Dawn · Ebru Art · Konya", theme: "Sufi Spirit · Silk Road", content: "Optional sunrise balloon flight. Ebru water marbling workshop. Drive to Konya via 13th-century Sultan Han Caravanserai. Visit Mevlana Museum." },
        { day: "03", city: "Konya → Pamukkale", theme: "Roman Spas · Travertines", content: "Journey to Pamukkale. Explore Hierapolis and the Cotton Castle. Walk on the warm white travertines at sunset." },
        { day: "04", city: "Pamukkale → Kusadasi", theme: "Ephesus · Digital Museum", content: "Focus on the pinnacle of classical civilization: Ephesus. Experience the new immersive digital museum. Visit a leather fashion center." },
        { day: "05", city: "Kusadasi ✈ Istanbul", theme: "Hagia Sophia · Gala Dinner", content: "Fly back to Istanbul. Deep visit to Hagia Sophia and Blue Mosque. Rooftop farewell dinner with traditional Ottoman costumes." },
        { day: "06", city: "Bosphorus Cruise · Departure", theme: "Cruising & Palaces", content: "Private Bosphorus cruise. Visit Dolmabahce Palace. Coffee at Camlica Hill and shopping at the Spice Market before transfer." }
      ],
      meals_label: "Meals",
      hotel_label: "Stay",
      fee_title: "Fee Details",
      included_title: "What's Included",
      included_list: [
        "Domestic flights with taxes (TK/AJ)",
        "5 nights in 5-star & cave boutique hotels",
        "Licensed Chinese guide & senior driver",
        "All entry fees & digital museum tickets",
        "Selected daily meals & Rooftop Dinner",
        "Complimentary MADO ice cream & Coffee"
      ],
      excluded_title: "Not Included",
      excluded_list: [
        "International airfare to Turkey",
        "Hot Air Balloon flight (Approx. $250)",
        "Tips for guide & driver ($5-10/day)",
        "E-visa and personal expenses"
      ],
      footer_cta: "Start Your Heritage Journey",
      sticky_cta: "Consult Expert Now",
      seo: {
        title: "Heritage Journey | 6-Day Istanbul & Cappadocia Tour",
        description: "Join our 6-day boutique small group tour to Istanbul and Cappadocia. Experience hot air balloons, ancient heritage, and luxury stays.",
        keywords: "Istanbul Cappadocia tour, 6 day Turkey tour, Cappadocia hot air balloon, Turkey heritage tour, boutique Turkey travel"
      }
    },
    about: {
      title: 'About Us',
      subtitle: 'Rooted in Turkey, Serving Global Travelers',
      philosophy: {
        title: 'Our Philosophy',
        content: 'We believe that true high-quality travel is not a stack of items on an itinerary, but a complete experience of being understood, cared for, and respected in a foreign land.'
      },
      advantage: {
        title: 'Service Advantages',
        content: 'From the first communication, we provide professional docking that is clear and has a sense of boundaries, rather than templated replies. Customers don\'t need to confirm repeatedly, guess rules, or feel anxious on the road—because we have handled all uncertainties before departure.',
        points: [
          'Good Service: Always thinking from the customer\'s perspective',
          'Good Quality: Only using compliant resources, clear processes, and stable standards'
        ]
      },
      team: {
        title: 'Guides & Team',
        content: 'A guide determines the height of a journey. Our guides and drivers are not just "people who lead the way", but:',
        list: [
          'People who truly understand culture and travel habits',
          'People who can explain the background, have proper proportions, and reasonable rhythm',
          'People who appear when needed and step back when quiet'
        ],
        footer: 'They are professional, patient, restrained, and gentle, making the journey both deep and comfortable.'
      },
      scope: {
        title: 'Service Scope',
        list: [
          'Full Chinese/English guide and driver services',
          'Chartered cars and transfers in Istanbul and throughout Turkey',
          'Group tour and land operation execution',
          'Private customized tours (Parent-child / Family / Elders)',
          'Business inspection, trade reception, exhibition services',
          'China-Turkey all-category local service coordination'
        ]
      },
      trust: {
        title: 'Trust & Compliance',
        content: 'Whether it is a first-time visitor to Turkey, or a family, business, or team customer with extremely high requirements for details, we treat them with the same standard—to the extent that customers "don\'t need to worry".',
        details: 'All itineraries and services are legally executed locally in Turkey, with clear processes, explicit rules, and transparent costs. We do not rely on low prices to attract, nor on promises to pile up, but on long-term trust, real word-of-mouth, and continuous cooperation.',
        footer: 'In Turkey, we are not a temporary intermediary, but a long-term local, legally licensed, verifiable, and trustworthy travel agency.'
      },
      summary: {
        content: 'If you are looking for not just "cheap once", but "peace of mind many times", then GRACE WAY TRAVEL AGENCY is worth being seriously chosen.'
      },
      credentials: {
        title: 'Credentials & Contact',
        list: [
          'Agency Type: A Grubu Seyahat Acentası İşletme Belgesi\n(A-Group Travel Agency License)',
          'Authority: T.C. Kültür ve Turizm Bakanlığı',
          'License No (Belge No): 18717',
          'Company Entity: GRACE TRAVEL TURİZM VE TİC. LTD. ŞTİ.',
          'Address: Zeytinlik Mah. Halkçı Sok. Moda Pasajı No:25/35 (Kat:2 / Ofis No:35), Bakırköy / İstanbul',
          'Website: https://www.gracetravel.com.tr\nhttps://grace.tr',
          'Phone (TR): +90 554 136 6090\n+90 212 570 15 28',
          'Phone (CN): +86 134 2640 1777',
          'Email: taha@gracetravel.com.tr'
        ]
      }
    },
    itinerary_s2: {
      badge: "S2 Package · Boutique DMC",
      title: "Aegean to Anatolia",
      subtitle: "8-Day Grand Turkey Tour",
      description: "High Quality Dual Flights · Boutique Small Group · Pure Experience",
      cta_consult: "Enquire Now",
      cta_plan: "Get Plan",
      images: {
        coverImage: "/img/remote/u-1596093145026-f6af675846c7.webp",
        heroImage: "/img/remote/u-1689130033373-2773b6029aea.webp",
        cardImage: "/img/remote/u-1697457661409-0adc99b64647.webp",
        day1Image: "/img/remote/u-1665051153829-82fc1acb59e6.webp",
        day2Image: "/img/remote/u-1708251088223-e56cd382e8c6.webp",
        day3Image: "/img/remote/u-1686428007573-f4a91f2d8bd0.webp",
        day4Image: "/img/remote/u-1632821629445-bdc26ce3ccf0.webp",
        day5Image: "/img/remote/u-1674715577456-49ae7a6945a8.webp",
        day6Image: "/img/remote/u-1643354812958-b648b92dc6c5.webp",
        day7Image: "/img/remote/u-1680204412403-73110934f5aa.webp",
        day8Image: "/img/remote/u-1624786712432-e021fdf57c48.webp"
      },
      audience_title: "Is this the journey you are looking for?",
      audience_list: [
        "Travelers wishing to drive the D400, one of the world's most beautiful coastal roads",
        "Heritage lovers seeking deep visits to Ephesus, Pamukkale, and Aspendos",
        "Dreamers of paragliding in Fethiye and hot air balloons in Cappadocia",
        "Efficiency seekers preferring domestic flights to save 20+ hours of driving",
        "Connoisseurs requiring 100% pure travel, no forced shopping, and 5-star comfort"
      ],
      highlights_title: "Core Highlights",
      highlights: [
        { title: "D400 Scenic Drive", desc: "Cruise the legendary coastal road between Fethiye and Antalya with breathtaking Mediterranean views." },
        { title: "Ancient Ephesus", desc: "The most well-preserved Roman city in the Eastern Mediterranean, featuring the Celsus Library." },
        { title: "Pamukkale Travertines", desc: "Walk on snow-white terraces and swim in the ancient Roman thermal pool." },
        { title: "Fethiye Blue Lagoon", desc: "Relax in the crystal clear waters of Oludeniz, a Mediterranean paradise." },
        { title: "Dual Domestic Flights", desc: "Istanbul-Izmir and Cappadocia-Istanbul flights to maximize your exploration time." },
        { title: "Boutique Cave Suites", desc: "Authentic luxury cave hotel stays in the heart of Cappadocia's unique landscape." }
      ],
      table_title: "Itinerary Summary",
      table_mobile_hint: "← Swipe to view table →",
      table_headers: { day: "Day", plan: "Plan", meals: "B/L/D", hotel: "Accommodation" },
      schedule: [
        { day: "D1", plan: "Istanbul ✈ Izmir → Kusadasi", b: "/", l: "Incl.", d: "Hotel", hotel: "Kusadasi 5*" },
        { day: "D2", plan: "Ephesus & Pamukkale", b: "Hotel", l: "Incl.", d: "Hotel", hotel: "Pamukkale Thermal 5*" },
        { day: "D3", plan: "Pamukkale → Fethiye", b: "Hotel", l: "Incl.", d: "Hotel", hotel: "Fethiye 5*" },
        { day: "D4", plan: "D400 → Kas → Antalya", b: "Hotel", l: "Incl.", d: "Hotel", hotel: "Antalya 5*" },
        { day: "D5", plan: "Aspendos → Konya", b: "Hotel", l: "Incl.", d: "Hotel", hotel: "Konya 5*" },
        { day: "D6", plan: "Konya → Cappadocia", b: "Hotel", l: "Incl.", d: "Hotel", hotel: "Boutique Cave Hotel" },
        { day: "D7", plan: "Cappadocia ✈ Istanbul", b: "Hotel", l: "Incl.", d: "Hotel", hotel: "Istanbul 5*" },
        { day: "D8", plan: "Istanbul City Tour", b: "Hotel", l: "Incl.", d: "/", hotel: "/" }
      ],
      daily_details: [
        { day: "01", city: "Istanbul ✈ Izmir → Kusadasi", theme: "Aegean Sunset", content: "Arrive in Istanbul and transfer to Izmir flight. Relax by the sea in Kusadasi." },
        { day: "02", city: "Ephesus & Pamukkale", theme: "Ancient Heritage & White Travertines", content: "Visit the grand ruins of Ephesus. Later, explore Pamukkale travertines and Hierapolis." },
        { day: "03", city: "Pamukkale → Fethiye", theme: "Blue Lagoon Magic", content: "Travel to Fethiye. Optional paragliding or relaxation at the famous Oludeniz beach." },
        { day: "04", city: "Fethiye → Kas → Antalya", theme: "Legendary D400 Route", content: "Drive along the stunning D400. Stop at Kaputas Beach and the boutique town of Kas. Arrive in Antalya." },
        { day: "05", city: "Aspendos → Konya", theme: "Roman Echoes & Sufi Spirit", content: "Visit Aspendos, the world's best-preserved ancient theater. Drive to Konya, home of Rumi." },
        { day: "06", city: "Konya → Cappadocia", theme: "Silk Road Trails", content: "Visit Mevlana Museum. Travel via Sultan Han Caravanserai to Cappadocia and check into your cave suite." },
        { day: "07", city: "Cappadocia ✈ Istanbul", theme: "Lunar Landscapes", content: "Optional balloon flight. Visit Goreme and the Underground City. Fly back to Istanbul in the evening." },
        { day: "08", city: "Istanbul Finale", theme: "Imperial Legacy", content: "Bosphorus cruise, Hagia Sophia visit, and shopping at the Grand Bazaar before departure." }
      ],
      meals_label: "Meals",
      hotel_label: "Accommodation",
      fee_title: "Fee Details",
      included_title: "What's Included",
      included_list: ["Domestic flights included", "7 nights in 5* & Boutique hotels", "Professional guide", "Entry fees", "Daily meals"],
      excluded_title: "Not Included",
      excluded_list: ["International flights", "Balloon/Paragliding fees", "Personal expenses", "Tips"],
      footer_cta: "Book Your Grand Tour",
      sticky_cta: "Consult Now",
      seo: {
        title: "Aegean to Anatolia | 8-Day Grand Turkey Tour",
        description: "Experience the best of Turkey on an 8-day tour from the Aegean coast to Anatolia. Includes D400 scenic drive, Ephesus, and Cappadocia.",
        keywords: "Turkey grand tour, Aegean to Anatolia, D400 scenic drive, Ephesus tour, Pamukkale tour, Cappadocia cave hotel"
      }
    },
    itinerary_s4: {
      meta: {
        code: "S4",
        seriesTitle: "S Series · Comfort Group | 10-Day Grand Culture Journey",
        title: "10-Day Panoramic Culture Tour",
        subtitle: "History | Heritage | Authenticity",
        tagline: "Comfort Group | Licensed Guide | No Forced Shopping | Pure Fun",
        transport: "Luxury Air-con Bus with WIFI & USB Charging",
        hotels: "5-Star Hotels & Authentic Cave/Thermal Stays",
        transport_label: "Transportation",
        hotels_label: "Accommodation",
        price_label: "Reference Price",
        price: "8999",
        meals_label: "Dining",
        stay_label: "Stay Reference",
        footer_cta_title: "Start Your 10-Day Journey",
        cta_consult: "Consult Expert",
        cta_plan: "Get Details",
        sticky_cta: "Enquire Now",
        seo: {
          title: "10-Day Panoramic Culture Tour | Turkey Grand Journey",
          description: "Discover the epic landscapes of Turkey on a 10-day panoramic culture tour. Visit Troy, Ephesus, Antalya, and Cappadocia with expert guides.",
          keywords: "Turkey 10 day tour, panoramic Turkey tour, Troy tour, Antalya travel, Cappadocia culture tour, luxury Turkey bus tour"
        }
      },
      hero: {
        badge: "S4 Package · Panoramic",
        title: "10-Day Panoramic Culture Tour",
        subtitle: "Epic Landscapes from Aegean to Anatolia",
        ctaPrimary: "Enquire Now",
        ctaSecondary: "Get Plan",
        image: "/img/remote/u-1689130033373-2773b6029aea.webp"
      },
      highlights: {
        title: "Highlights",
        items: [
          "Troy & Canakkale Bridge + Alexander Troas + 1915 Bridge (World's Longest Span)",
          "Bosphorus Cruise + Hagia Sophia + Blue Mosque + Ephesus + Pamukkale + Blue Lagoon + D400 Road + Balloon Flight"
        ]
      },
      summaryTable: {
        title: "Itinerary Summary",
        columns: ["Day", "Route", "B", "L", "D", "Stay"],
        rows: [
          { day: "D1", route: "Istanbul → Troy → Canakkale", breakfast: "/", lunch: "Yes", dinner: "Yes", hotel: "Canakkale 5★" },
          { day: "D2", route: "Canakkale → Alacati → Izmir → Kusadasi", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Kusadasi 5★" },
          { day: "D3", route: "Ephesus → Pamukkale", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Pamukkale 5★" },
          { day: "D4", route: "Pamukkale → Fethiye", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Fethiye 5★" },
          { day: "D5", route: "Fethiye → Kaputaş → Kas → Antalya", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Antalya 5★" },
          { day: "D6", route: "Antalya → Aspendos → Konya", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Konya 5★" },
          { day: "D7", route: "Konya → Cappadocia", breakfast: "Hotel", lunch: "Var", dinner: "Var", hotel: "Cave Hotel" },
          { day: "D8", route: "Cappadocia Depth Experience", breakfast: "Hotel", lunch: "Var", dinner: "Var", hotel: "Cave Hotel" },
          { day: "D9", route: "Cappadocia → Salt Lake → Istanbul", breakfast: "Hotel", lunch: "Var", dinner: "Var", hotel: "Istanbul 5★" },
          { day: "10", route: "Istanbul Classic → Departure", breakfast: "Hotel", lunch: "Var", dinner: "Var", hotel: "/" }
        ]
      },
      sections: {
        title: "Detailed Itinerary",
        days: [
          {
            day: "D1",
            title: "Istanbul → Troy → Canakkale",
            stay: "Stay: Canakkale 5-Star Hotel",
            image: "/img/remote/u-1687706222092-b6545828217d.webp",
            paragraphs: [
              "Morning departure from Istanbul, traveling west along the Sea of Marmara. Cross the 1915 Canakkale Bridge, the world's longest suspension bridge span.",
              "Visit Troy, a UNESCO site and legendary setting of the Trojan Horse. Explore archaeological layers spanning 4,000 years of civilization.",
              "Visit the ancient port of Alexander Troas before reaching Canakkale. Check into a sea-view hotel for sunset."
            ],
            meals: { breakfast: "/", lunch: "Included", dinner: "Included" }
          },
          {
            day: "D2",
            title: "Canakkale → Alacati → Izmir → Kusadasi",
            stay: "Stay: Kusadasi 5-Star Hotel",
            image: "/img/remote/u-1701428588034-5893b2512a68.webp",
            paragraphs: [
              "Head south to the Aegean heartland. Visit the artistic town of Alacati, known for Greek-style stone houses and white-washed walls.",
              "Continue to Izmir, Turkey's third-largest city. Visit the 1901 Clock Tower and Konak Square facing the bay.",
              "Enjoy a leather fashion show (no forced shopping). Arrive at the seaside resort of Kusadasi for a restful night."
            ],
            meals: { breakfast: "Hotel", lunch: "Included", dinner: "Included" }
          },
          {
            day: "D3",
            title: "Ephesus → Pamukkale",
            stay: "Stay: Pamukkale 5-Star Thermal Hotel",
            image: "/img/remote/u-1433854471391-5603c019de62.webp",
            paragraphs: [
              "Deep dive into classical antiquity at Ephesus. Walk the Roman streets and marvel at the Library of Celsus and the Grand Theater.",
              "Experience the Ephesus Experience Museum with immersive light and sound shows.",
              "Drive to Pamukkale. Walk on the white travertine terraces and visit Hierapolis. Relax in natural thermal springs."
            ],
            meals: { breakfast: "Hotel", lunch: "Included", dinner: "Included" }
          },
          {
            day: "04",
            title: "Pamukkale → Fethiye",
            stay: "Stay: Fethiye 5-Star Hotel",
            image: "/img/remote/u-1498222954553-93fc8d1941da.webp",
            paragraphs: [
              "Journey south across the Taurus Mountains to Fethiye, the jewel of the Turquoise Coast.",
              "Visit the Blue Lagoon (Oludeniz), a Mediterranean paradise with crystal waters and Blue Flag ecology.",
              "Explore the Paspatur old town with its Baroque churches, Ottoman houses, and charming coffee shops."
            ],
            bullets: ["Tip: Fethiye is a world-class paragliding spot; optional flights available weather permitting."],
            meals: { breakfast: "Hotel", lunch: "Included", dinner: "Included" }
          },
          {
            day: "D5",
            title: "Fethiye → Kaputaş → Kas → Antalya",
            stay: "Stay: Antalya 5-Star Hotel",
            image: "/img/remote/u-1697457661409-0adc99b64647.webp",
            paragraphs: [
              "Drive along the legendary D400 coastal road, often called Turkey's Route 1.",
              "Photo stop at the famous Kaputaş Beach. Short break in the tranquil village of Kas, known for its Greek-style architecture.",
              "Arrive in Antalya and visit the Kaleici Old Town. Enjoy tea by the harbor before checking into your seaside hotel."
            ],
            meals: { breakfast: "Hotel", lunch: "Included", dinner: "Included" }
          },
          {
            day: "D6",
            title: "Antalya → Aspendos → Konya",
            stay: "Stay: Konya 5-Star Hotel",
            image: "/img/remote/u-1724249367218-819f3eb2f9f7.webp",
            paragraphs: [
              "Visit the Aspendos Theater (161 AD), one of the best-preserved ancient theaters in the world with incredible acoustics.",
              "Drive to Konya, the spiritual heart of Sufism. Stop at the 13th-century Sultan Han Caravanserai on the Silk Road.",
              "Visit the Mevlana Museum, the final resting place of Rumi, featuring Seljuk architecture and dervish artifacts."
            ],
            meals: { breakfast: "Hotel", lunch: "Included", dinner: "Included" }
          },
          {
            day: "D7",
            title: "Konya → Cappadocia",
            stay: "Stay: Cappadocia Cave Hotel",
            image: "/img/remote/u-1712569838375-27b4eb58d05f.webp",
            paragraphs: [
              "Drive to the lunar landscapes of Cappadocia. Explore the Zelve Valley and Pasabag (Monk's Valley) with its iconic fairy chimneys.",
              "Visit a pottery workshop in Avanos to watch artisans work with Red River clay.",
              "Enjoy complimentary MADO ice cream. Settle into an authentic boutique cave hotel built into the rocks."
            ],
            meals: { breakfast: "Hotel", lunch: "Included", dinner: "Included" }
          },
          {
            day: "D8",
            title: "Cappadocia Depth Experience",
            stay: "Stay: Cappadocia Cave Hotel",
            image: "/img/remote/u-1569530593439-c5a3adda5204.webp",
            paragraphs: [
              "Optional sunrise Hot Air Balloon flight over the valleys and chimneys.",
              "Visit the Goreme Open Air Museum to see Byzantine cave churches with thousand-year-old frescoes.",
              "Afternoon free for optional ATV rides in Rose Valley or relaxation on the hotel terrace."
            ],
            meals: { breakfast: "Hotel", lunch: "Included", dinner: "Included" }
          },
          {
            day: "D9",
            title: "Cappadocia → Salt Lake → Istanbul",
            stay: "Stay: Istanbul 5-Star Hotel",
            image: "/img/remote/u-1587506873457-b6d7d1cdad18.webp",
            paragraphs: [
              "Begin the journey back to Istanbul across the Anatolian plateau. Stop at Tuz Gölü (Salt Lake), a surreal white landscape.",
              "Arrive in Istanbul. Evening view of Topkapi Palace and check into your central city hotel."
            ],
            meals: { breakfast: "Hotel", lunch: "Included", dinner: "Included" }
          },
          {
            day: "10",
            title: "Istanbul classic 一日 → 送机返程",
            stay: "/",
            image: "/img/remote/u-1608677662924-8b83590f474e.webp",
            paragraphs: [
              "Final day exploring the heart of the empire: Hagia Sophia, Blue Mosque, and Sultanahmet Square. Private Bosphorus cruise viewing the Dolmabahce Palace.",
              "Taste UNESCO-listed Turkish coffee. Transfer to the airport after dinner for your journey home."
            ],
            bullets: ["Hagia Sophia", "Blue Mosque", "Bosphorus Cruise", "Dolmabahce Palace", "Turkish Coffee Experience"],
            meals: { breakfast: "Hotel", lunch: "Included", dinner: "Included" }
          }
        ]
      },
      notices: {
        title: "Important Notices",
        items: [
          "Closures: Hagia Sophia has maintenance on Fridays; Dolmabahce is closed Mondays; Topkapi is closed Tuesdays. Sequence may adjust.",
          "Optional Activities: Balloon and paragliding flights are weather-dependent and optional.",
          "Shopping: No forced shopping. Leather or pottery visits are cultural experiences only.",
          "Force Majeure: Schedule may adjust due to flights, weather, or road conditions.",
          "Hotels: Similar class hotels used if selected ones are unavailable. Cave room sizes vary due to topography."
        ]
      }
    },
    itinerary_s5: {
      meta: {
        code: "S5",
        seriesTitle: "S5 Series · Full Geomorphic In-depth Experience | 8-Day Panoramic Culture Depth Tour",
        title: "S5 Route · Troy & Fairy Road",
        subtitle: "Türkiye History | Heritage | Authenticity",
        tagline: "Full Geomorphic Experience | Chinese Tour Leader | 100% Pure Travel | No Forced Shopping",
        transport: "Luxury air-con coach (equipped with WIFI, USB charging, and wide seats), exploring lands untouched by rail and air.",
        hotels: "5-Star standard hotels & heritage/cave boutique stays",
        transport_label: "Transport Principle",
        hotels_label: "Accommodation Standard",
        price_label: "Reference Price",
        price: "8999",
        meals_label: "Dining",
        stay_label: "Stay Reference",
        footer_cta_title: "Start Your Troy & Fairy Road Journey",
        cta_consult: "Consult Expert Now",
        cta_plan: "Get Detailed Plan",
        sticky_cta: "Enquire Now",
        seo: {
          title: "S5 Route · Troy & Fairy Road | 8-Day Depth Tour",
          description: "Explore the Troy & Fairy Road on an 8-day in-depth panoramic culture tour. Visit Troy, Nicaea, Lake Egirdir, and Cappadocia.",
          keywords: "Troy tour, Fairy Road Turkey, Nicaea tour, Lake Egirdir, Cappadocia in-depth, Turkey culture tour"
        }
      },
      hero: {
        badge: "S5 Route · In-depth Panoramic",
        title: "S5 Route · Troy & Fairy Road",
        subtitle: "8-Day Grand Culture Depth Journey",
        ctaPrimary: "Enquire Now",
        ctaSecondary: "Get Plan",
        image: "/img/remote/u-1687706222092-b6545828217d.webp"
      },
      highlights: {
        title: "Core Highlights",
        items: [
          "Troy Trojan Horse & Ruins: Step into the legendary setting of the Iliad and witness 4,000 years of history.",
          "Ancient Nicaea (Iznik): Explore a key historical node of Christianity and the site of the First Council.",
          "Canakkale Strait & 1915 Bridge: Cross the Eur-Asia divide above ancient waterways and modern engineering.",
          "Lake Egirdir Secret Town: Experience the pure 'eye' of the Anatolian plateau and its slow pace of life.",
          "Mevlana Museum: Enter the spiritual home of Sufism and the origin of the Whirling Dervishes.",
          "Cappadocia Deep Geomorphic Experience: Navigate hidden cave churches and fairy chimneys in a surreal wilderness.",
          "Ankara Anitkabir: Pay respects at the spiritual monument of modern Turkey and retrace the Republic's narrative."
        ]
      },
      summaryTable: {
        title: "Itinerary Summary",
        columns: ["Day", "Route", "B", "L", "D", "Stay"],
        rows: [
          { day: "D1", route: "Istanbul | Imperial Dawn, A Millennium Gaze", breakfast: "/", lunch: "Yes", dinner: "Yes", hotel: "Istanbul 5★" },
          { day: "D2", route: "Istanbul → Canakkale | Homer's Echo", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Canakkale 5★" },
          { day: "D3", route: "Canakkale → Izmir | Aegean's Breath", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Izmir 5★" },
          { day: "D4", route: "Izmir → Pamukkale | Earth's Spring", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Pamukkale 5★" },
          { day: "D5", route: "Pamukkale → Lake Egirdir → Konya | Sufi Heart", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Konya 5★" },
          { day: "D6", route: "Konya → Goreme | Fairy Tale on Earth", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Cap 5★/Cave" },
          { day: "D7", route: "Goreme → Ankara | Dawn in a Balloon", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Ankara 5★" },
          { day: "D8", route: "Ankara → Iznik → Istanbul | Nicaea's Lake", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "/" }
        ]
      },
      sections: {
        title: "Detailed Itinerary",
        days: [
          {
            day: "01",
            title: "Arrival in Istanbul | A Millennium Gaze Between Sea and Sky",
            stay: "Istanbul 5-Star Hotel",
            image: "/img/remote/u-1636021597151-cc28dacd915c.webp",
            paragraphs: [
              "Arrive in the millennium-old capital, Istanbul. Visit the power center of the Ottoman Empire, Topkapi Palace (exterior), followed by the architectural masterpiece Hagia Sophia (exterior).",
              "Enter the Blue Mosque to admire the exquisite Iznik tile art. Pass by the Hippodrome and take a sunset Bosphorus cruise."
            ],
            meals: { breakfast: "/", lunch: "Included", dinner: "Included" }
          },
          {
            day: "02",
            title: "Istanbul → Canakkale | Beneath the Trojan Horse, Hearing Homer's Echo",
            stay: "Canakkale 5-Star Hotel",
            image: "/img/remote/u-1716274644458-d30c57acdeb4.webp",
            paragraphs: [
              "Cross the 1915 Canakkale Bridge. Deeply analyze the Homeric epics and the reality of ancient archaeological layers at Troy.",
              "Visit the ancient city of Alexander Troas. Evening check-in by the Dardanelles."
            ],
            meals: { breakfast: "Hotel", lunch: "Included", dinner: "Included" }
          },
          {
            day: "03",
            title: "Canakkale → Izmir | Beneath the Clock Tower, The Aegean's Breath",
            stay: "Izmir 5-Star Hotel",
            image: "/img/remote/u-1701428588034-5893b2512a68.webp",
            paragraphs: [
              "Head south into the Aegean heartland. Tour the Izmir landmarks Konak Square and the Clock Tower.",
              "Visit Ephesus, walk down marble roads and marvel at the Library of Celsus and the Grand Theater."
            ],
            meals: { breakfast: "Hotel", lunch: "Included", dinner: "Included" }
          },
          {
            day: "04",
            title: "Izmir → Pamukkale | Walking the White Steps, Healing at Earth's Spring",
            stay: "Pamukkale 5-Star Thermal Hotel",
            image: "/img/remote/u-1433854471391-5603c019de62.webp",
            paragraphs: [
              "Proceed to Pamukkale. Visit the Hierapolis ruins, once a Roman thermal spa center.",
              "Walk barefoot on the white travertine terraces and feel the natural warm springs."
            ],
            meals: { breakfast: "Hotel", lunch: "Included", dinner: "Included" }
          },
          {
            day: "05",
            title: "Pamukkale → Lake Egirdir → Konya | Alpine Lake Views, The Sufi Heart",
            stay: "Konya 5-Star Hotel",
            image: "/img/remote/u-1680465807377-c83db592a2fc.webp",
            paragraphs: [
              "Travel to Lake Egirdir. Enjoy a slow-paced stroll by the shore.",
              "Continue to Konya. Visit the Mevlana Museum to learn about Sufi philosophy."
            ],
            meals: { breakfast: "Hotel", lunch: "Included", dinner: "Included" }
          },
          {
            day: "06",
            title: "Konya → Goreme | Chiseled Stone Homes, A Fairy Tale on Earth",
            stay: "Cappadocia 5-Star / Cave Hotel",
            image: "/img/remote/u-1712569838375-27b4eb58d05f.webp",
            paragraphs: [
              "Follow the ancient Silk Road. Arrive in the heart of Cappadocia.",
              "Visit Goreme Open Air Museum, Pigeon Valley, and Pasabag. Red River pottery workshop included."
            ],
            meals: { breakfast: "Hotel", lunch: "Included", dinner: "Included" }
          },
          {
            day: "07",
            title: "Goreme → Ankara | Dawn in a Balloon, Where the Father of the Nation Gazed",
            stay: "Ankara 5-Star Hotel",
            image: "/img/remote/u-1569530593439-c5a3adda5204.webp",
            paragraphs: [
              "Optional sunrise Hot Air Balloon flight. Ascend Uchisar Castle for panoramic canyon views.",
              "Drive to Ankara. Visit Anitkabir to retrace the narrative of the Republic's birth."
            ],
            meals: { breakfast: "Hotel", lunch: "Included", dinner: "Included" }
          },
          {
            day: "08",
            title: "Ankara → Iznik → Istanbul | Nicaea's Lake, Balat's Stained Glass",
            stay: "Departure",
            image: "/img/remote/u-1608677662924-8b83590f474e.webp",
            paragraphs: [
              "Visit the ancient city of Iznik (Nicaea). Explore the Iznik Hagia Sophia and the grand city walls.",
              "Relax by Lake Iznik. Return to Istanbul and transfer to the airport."
            ],
            meals: { breakfast: "Hotel", lunch: "Included", dinner: "Included" }
          }
        ]
      },
      notices: {
        title: "Important Notices",
        items: [
          "Attractions: Hagia Sophia might adjust on Fridays; Topkapi is closed Tuesdays; Dolmabahce is closed Mondays.",
          "Optional: Hot Air Balloon and Paragliding are weather-dependent.",
          "Culture: 100% pure travel with no shopping shopping.",
          "Hotels: Peak season alternates may apply while maintaining quality."
        ]
      }
    },
    itinerary_z1: {
      meta: {
        code: "Z1",
        seriesTitle: "Z Series · Bible History Deep Pilgrimage｜10-Day 5-Star Grand Culture & Faith Tour",
        title: "Z1 Route · Seven Churches & Apostle Path",
        subtitle: "From Troas Vision to Cappadocia Miracles",
        tagline: "Comprehensive Seven Churches Coverage | Apostles Footsteps Exploration | Full 5-Star Standard | 100% Pure Travel No Shopping",
        transport: "Luxury air-con coach (equipped with WIFI and USB charging), connecting Eur-Asia ancient cities and faith nodes.",
        hotels: "Full 5-Star standard hotels & Cappadocia boutique cave hotels",
        transport_label: "Transport Principle",
        hotels_label: "Accommodation Standard",
        price_label: "Reference Price",
        price: "10999",
        meals_label: "Dining",
        stay_label: "Stay Reference",
        footer_cta_title: "Start Your 10-Day Deep Pilgrimage",
        cta_consult: "Consult Expert Now",
        cta_plan: "Get Detailed Plan",
        sticky_cta: "Enquire Now",
        seo: {
          title: "Z1 Route · Seven Churches & Apostle Path | 10-Day Pilgrimage",
          description: "A deep 10-day faith pilgrimage through the Seven Churches of Revelation and the Apostle's path in Turkey. Expert historian guidance.",
          keywords: "Seven Churches tour, Turkey pilgrimage, Apostle path, Revelation churches, biblical tour Turkey, Christian heritage Turkey"
        }
      },
      highlights: {
        title: "Core Highlights",
        items: [
          { title: "Revelation Seven Churches Tour", desc: "Comprehensive visit to Ephesus, Smyrna, Pergamum, Thyatira, Sardis, Philadelphia, and Laodicea—reconstructing New Testament geography." },
          { title: "Apostolic Footsteps Reconstruction", desc: "Revisit Antioch, Colossae, and Alexandria Troas to restore the key dynamics of early civilization expansion." },
          { title: "Cappadocia Deep Morphology", desc: "Explore rock-cut underground cities and cave churches, experiencing the wild aesthetics of central Anatolia." },
          { title: "Troy Epic Archaeological Site", desc: "Cross the Dardanelles into ruins spanning 4,000 years, witnessing the collision of Homeric epic and archaeological reality." },
          { title: "Constantinople Civilization Overview", desc: "Deep pilgrimage to Hagia Sophia and the Bosphorus, exploring Byzantine and Ottoman imperial narratives at the crossroads." },
          { title: "Full 5-Star Benchmark Stays", desc: "Curated 5-star standard hotels and boutique cave hotels, ensuring premium hospitality during cultural exploration." },
          { title: "100% Pure Boutique Standard", desc: "Strict commitment to pure travel with no shopping, guided by senior resident history experts." },
          { title: "Historical Hub Deep Analysis", desc: "Focus on Nicaea, Konya, and other intersecting nodes of history, uncovering the logic of Anatolian civilization layering." }
        ]
      },
      summaryTable: {
        title: "Itinerary Summary",
        columns: ["Day", "Itinerary", "B", "L", "D", "Accommodation"],
        rows: [
          { day: "D1", route: "Arrival Istanbul - Sultanahmet Historic District", breakfast: "/", lunch: "Yes", dinner: "Yes", hotel: "Istanbul 5★" },
          { day: "D2", route: "Pigeon Valley - Pasabag - Camel Rock", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Cappadocia Cave" },
          { day: "D3", route: "Goreme Museum - Uchisar - Avanos Town", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Cappadocia Cave" },
          { day: "D4", route: "Kaymakli Underground - Sultan Han - Konya", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Konya 5★" },
          { day: "D5", route: "Antioch - Colossae - Laodicea Ruins", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Pamukkale Thermal 5★" },
          { day: "D6", route: "Hierapolis - Philadelphia - Sardis - Thyatira", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Izmir 5★" },
          { day: "D7", route: "Ephesus - St. John Church - Smyrna Ruins", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Izmir 5★" },
          { day: "D8", route: "Pergamum Acropolis - Troy - Troas Port", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Canakkale 5★" },
          { day: "D9", route: "Hagia Sophia - Gülhane - Bosphorus Cruise", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Istanbul 5★" },
          { day: "10", route: "Byzantine Arts - Uskudar - Departure", breakfast: "Hotel", lunch: "Yes", dinner: "/", hotel: "Departure" }
        ]
      },
      sections: {
        title: "Detailed Itinerary",
        days: [
          { day: "01", title: "Arrival in Istanbul | A Millennium Gaze", stay: "Istanbul 5-Star Hotel", image: "/img/remote/u-1650610854382-ed6dc12f9b57.webp", paragraphs: ["Arrive in Istanbul. Transfer to Sultanahmet for a deep tour of the historic district, witnessing the architectural dialogue between Byzantium and the Ottomans."], meals: { breakfast: "/", lunch: "Yes", dinner: "Yes" } },
          { day: "02", title: "Cappadocia | Volcanic Landscapes", stay: "Boutique Cave Hotel", image: "/img/remote/u-1752865224513-17e6afc1e6c5.webp", paragraphs: ["Fly to Cappadocia. Explore the lunar landscapes, Pigeon Valley, and Pasabag chimneys formed by millions of years of erosion."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "03", title: "Goreme & Uchisar | Cave Churches", stay: "Boutique Cave Hotel", image: "/img/remote/u-1686257558166-a13a257b5dc1.webp", paragraphs: ["Visit Goreme Open Air Museum to see Byzantine cave churches and frescoes. Ascend Uchisar Castle for panoramic canyon views."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "04", title: "Underground City to Konya | Silk Road & Seljuk Echoes", stay: "Konya 5-Star Hotel", image: "/img/remote/u-1675373181258-681d11e0e4c5.webp", paragraphs: ["Explore the vertical defense systems of Kaymakli Underground City. Drive along the ancient Silk Road to Konya, stopping at the 13th-century Sultan Han Caravanserai. Visit the Mevlana Museum to explore the spiritual heart of Sufism."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "05", title: "Antioch, Colossae & Laodicea | Apostolic Footsteps", stay: "Thermal 5-Star Hotel", image: "/img/remote/u-1718227973712-fa3c9b1fda6e.webp", paragraphs: ["Revisit the ruins of Pisidian Antioch and the ancient city of Colossae to restore early civilization expansion routes. Continue to Laodicea, the lukewarm church, exploring its grand theaters and monumental streets."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "06", title: "Hierapolis to Thyatira | Sacred Springs & Seven Churches Nodes", stay: "Izmir 5-Star Hotel", image: "/img/remote/u-1728361328959-d30d8218e38b.webp", paragraphs: ["Walk the white travertine terraces of Pamukkale and visit Hierapolis. Tour the critical nodes of Revelation: Philadelphia, Sardis with its impressive Gymnasium, and Thyatira."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "07", city: "Ephesus & Smyrna", title: "Peak of Civilization", stay: "Izmir 5-Star Hotel", image: "/img/remote/u-1684214190982-f3506653f932.webp", paragraphs: ["Deep tour of Ephesus, the best-preserved ancient city. Visit St. John's Basilica and the ruins of ancient Smyrna (Izmir)."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "08", title: "Pergamum & Troy | Acropolis & Epic", stay: "Canakkale 5-Star Hotel", image: "/img/remote/u-1715080271610-c177c424aa6d.webp", paragraphs: ["Visit Pergamum Acropolis with its steepest theater. Cross to Troy to see the archaeological layers spanning 4,000 years, witnessing the collision of epic and reality."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "09", title: "Istanbul | Bosphorus Narratives", stay: "Istanbul 5-Star Hotel", image: "/img/remote/u-1605382628707-0aa0593fba19.webp", paragraphs: ["Return to Istanbul. Deep tour of Hagia Sophia. Evening Bosphorus cruise viewing the palaces and mansions between two continents."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "10", title: "Byzantine Arts & Departure | Final View", stay: "Departure", image: "/img/remote/u-1678050643669-0e67cc5a0e21.webp", paragraphs: ["Visit Chora Church for exquisite mosaics. Final panoramic view at Uskudar viewpoint before private transfer to the Airport for departure."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "/" } }
        ]
      },
      notices: {
        title: "Important Notices",
        items: [
          "Museums: Hagia Sophia or Topkapi schedules may vary due to religious maintenance.",
          "Optional: Balloon flights are weather dependent.",
          "Service: 100% pure travel with no shopping stops.",
          "Standard: Professional historian guidance provided throughout."
        ]
      }
    },
    itinerary_z2: {
      meta: {
        code: "Z2",
        seriesTitle: "Z Series · Revelation Seven Churches Essence｜4 Day 5-Star Deep Pilgrimage",
        title: "Z2 Route · Revelation Seven Churches Essence",
        subtitle: "Traversing Asia Minor Holy Sites, Retracing Apostolic Letters",
        tagline: "Seven Churches Theme | Small Group Depth | Chinese Expert Guidance | Pure Travel No Shopping",
        transport: "Luxury air-conditioned coach, Efficient round-trip route from Istanbul",
        hotels: "Full 5-star standard hotels & premium thermal spa stay",
        transport_label: "Transportation",
        hotels_label: "Accommodation",
        price_label: "Reference Price",
        price: "3999",
        meals_label: "Dining",
        stay_label: "Stay Reference",
        footer_cta_title: "Start Your Revelation Sacred Journey",
        cta_consult: "Consult Expert Now",
        cta_plan: "Get Detailed Plan",
        sticky_cta: "Enquire Now",
        seo: {
          title: "Z2 Route · Revelation Seven Churches Essence | 4-Day Tour",
          description: "Experience the essence of the Seven Churches of Revelation on a 4-day deep pilgrimage tour. Visit Ephesus, Smyrna, and Pergamum.",
          keywords: "Seven Churches essence, 4 day Turkey pilgrimage, Revelation tour, Ephesus faith tour, Smyrna Pergamum tour"
        }
      },
      highlights: {
        title: "Core Highlights",
        items: [
          { title: "Revelation Seven Churches Trace", desc: "Comprehensive coverage of Ephesus, Smyrna, Pergamum, and more—reconstructing the key historical nodes of early church civilization." },
          { title: "Apostolic Mission Reconstruction", desc: "Visit the House of Virgin Mary and St. John's Basilica to restore early mission scenes within the majestic ruins of Ephesus." },
          { title: "Nature & Faith Symbiosis", desc: "Pilgrimage to Pamukkale and Hierapolis, feeling the resonance between natural wonders and ancient faith legacies." },
          { title: "High-Value Essential Route", desc: "A curated 4-day efficient route connecting core areas with premium historical analysis and deep spiritual experience." }
        ]
      },
      summaryTable: {
        title: "Itinerary Summary",
        columns: ["Day", "Itinerary", "B", "L", "D", "Stay"],
        rows: [
          { day: "D1", route: "Istanbul → Pergamum → Thyatira → Izmir", breakfast: "/", lunch: "Yes", dinner: "/", hotel: "Izmir 5★" },
          { day: "D2", route: "Smyrna → Virgin Mary House → St. John Church → Ephesus", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Izmir 5★" },
          { day: "D3", route: "Sardis → Philadelphia → Laodicea → Pamukkale", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Pamukkale Thermal 5★" },
          { day: "D4", route: "Hierapolis (Pamukkale) → Istanbul", breakfast: "Hotel", lunch: "Yes", dinner: "/", hotel: "/" }
        ]
      },
      sections: {
        title: "Detailed Itinerary",
        days: [
          { day: "01", title: "Istanbul → Pergamum → Thyatira → Izmir", stay: "Izmir 5-Star Hotel", image: "/img/remote/u-1715080271610-c177c424aa6d.webp", paragraphs: ["Depart from Istanbul at dawn, crossing the Marmara plains. First stop is the mountain city of Pergamum, exploring its grand library and steep theater ruins.", "Continue to Thyatira, reflecting on apostolic warnings. Arrive at Smyrna (Izmir) by evening, checking into a 5-star seaside hotel."], meals: { breakfast: "/", lunch: "Yes", dinner: "/" } },
          { day: "02", title: "Smyrna → Virgin Mary House → St. John Church → Ephesus", stay: "Izmir 5-Star Hotel", image: "/img/remote/u-1684214190982-f3506653f932.webp", paragraphs: ["Deep pilgrimage to the core of early Christianity. Morning visit to the serene House of Virgin Mary and St. John's Basilica.", "Afternoon tour of Ephesus ancient city. Walk the marble roads and listen to historical echoes in the ruins of one of the world's greatest archaeological sites."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "03", title: "Sardis → Philadelphia → Laodicea → Pamukkale", stay: "Pamukkale 5-Star Thermal Hotel", image: "/img/remote/u-1718227973712-fa3c9b1fda6e.webp", paragraphs: ["Journey through the ancient Lydian trade routes. First visit the ruins of Sardis, once the city where the world's first gold coins were minted, and its massive Synagogue—a warning against external prosperity vs inner faith.", "Continue to Philadelphia (Alaşehir), the city of 'Brotherly Love', commended for its perseverance. Reach Laodicea in the afternoon, the 'lukewarm' city. Explore its grand theaters and council halls that witness its heavy history.", "Evening arrival at Pamukkale, check into a luxury thermal hotel to enjoy natural hot springs."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "04", title: "Hierapolis (Pamukkale) → Istanbul", stay: "Return", image: "/img/remote/u-1708251088223-e56cd382e8c6.webp", paragraphs: ["Early morning exploration of Hierapolis and the 'Cotton Castle' (Pamukkale) travertines. Witness the Roman theaters, temples, and necropolis built along the mountainside.", "Walk barefoot on the white travertines where natural thermal waters flow, creating a frozen waterfall wonder. Feel the power where nature meets history.", "Depart for Istanbul, conclude the 4-day pilgrimage."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "/" } }
        ]
      },
      notices: {
        title: "Important Notices",
        items: [
          "Schedule Adjustment: The itinerary sequence may be adjusted due to weather, road conditions, or force majeure events to ensure safety.",
          "Accommodation Guarantee: If listed hotels are fully booked, alternative hotels of the same standard will be provided.",
          "Tour Character: This is a cultural and pilgrimage route, physical intensity is moderate. Comfortable shoes are recommended.",
          "100% Pure Travel: Strictly no forced shopping stops."
        ]
      }
    },
    itinerary_z5: {
      meta: {
        code: "Z5",
        seriesTitle: "Z Series · Overland Deep Christian Pilgrimage｜9 Days 8 Nights Following Paul's Footsteps",
        title: "Z5 Route · 9 Days 8 Nights Overland Christian Pilgrimage",
        subtitle: "Following Paul's footsteps, tracing the history of the early churches",
        tagline: "Istanbul to Cappadocia overland depth | Seven Churches route | Biblical background sharing and prayer time | Chinese-speaking guide throughout",
        transport: "Air-conditioned touring coach with driver throughout, accompanied by a Chinese-speaking guide and tour leader.",
        hotels: "Local 3-star and above or character hotels, with selected regions including 5-star stays.",
        transport_label: "Transport Service",
        hotels_label: "Stay Standard",
        price_label: "Reference Price",
        price: "11800",
        meals_label: "Dining",
        stay_label: "Stay Reference",
        footer_cta_title: "Begin Your 9-Day Overland Faith Journey",
        cta_consult: "Consult Expert Now",
        cta_plan: "Get Detailed Plan",
        sticky_cta: "Enquire Now",
        seo: {
          title: "Z5 Overland Deep Christian Pilgrimage | 9 Days 8 Nights",
          description: "A 9-day overland Christian pilgrimage across Istanbul, Ankara, Cappadocia, Pamukkale and the Seven Churches route, designed around Paul's footsteps and early church history.",
          keywords: "Paul footsteps Turkey, overland Christian pilgrimage, 9 day Turkey faith tour, Seven Churches overland route, early church history Turkey"
        }
      },
      highlights: {
        title: "Core Highlights",
        items: [
          { title: "Following Paul's Mission Field", desc: "From Asia Minor's inland routes to Alexandria Troas, the itinerary connects places closely associated with the spread of the early church." },
          { title: "Cappadocia Early Christian Memory", desc: "Visit Goreme's rock churches and an underground city to reflect on the hidden, resilient faith of early believers." },
          { title: "Seven Churches in Two Focused Days", desc: "Trace Hierapolis, Laodicea, Philadelphia, Sardis, Ephesus, Smyrna, Thyatira, and Pergamum within a coherent biblical-historical route." },
          { title: "Biblical Sharing, Prayer & Optional Worship", desc: "The tour rhythm includes Bible background teaching, prayer time, and optional worship sessions arranged according to the group." },
          { title: "Silk Road, Salt Lake & Imperial Capitals", desc: "Beyond church sites, the journey moves through Ankara, Tuz Lake, Sultanhanı, and Istanbul to show the wider geography of Anatolia." },
          { title: "Balanced Long-Haul Pilgrimage", desc: "Coach travel, clear overnight planning, and guided logistics make this route suitable for church teams and fellowship groups." }
        ]
      },
      summaryTable: {
        title: "Itinerary Summary",
        columns: ["Day", "Route", "B", "L", "D", "Stay"],
        rows: [
          { day: "D1", route: "Arrival in Istanbul", breakfast: "/", lunch: "/", dinner: "Yes", hotel: "Istanbul" },
          { day: "D2", route: "Istanbul → Bosphorus → Blue Mosque → Ankara", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Ankara" },
          { day: "D3", route: "Ankara → Tuz Lake → Cappadocia", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Cappadocia" },
          { day: "D4", route: "Goreme Open Air Museum → Underground City", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Cappadocia" },
          { day: "D5", route: "Konya → Sultanhanı Caravanserai → Pamukkale", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Pamukkale" },
          { day: "D6", route: "Hierapolis → Laodicea → Philadelphia → Sardis", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Izmir / Kusadasi" },
          { day: "D7", route: "Ephesus → Smyrna → Thyatira", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Izmir / Kusadasi" },
          { day: "D8", route: "Pergamum → Troy → Alexandria Troas → Canakkale", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Canakkale" },
          { day: "D9", route: "1915 Canakkale Bridge → Camlica Hill → Departure", breakfast: "Hotel", lunch: "Yes", dinner: "/", hotel: "Departure" }
        ]
      },
      sections: {
        title: "Detailed Itinerary",
        days: [
          { day: "01", title: "Arrival in Istanbul | Welcome to the Journey", stay: "Istanbul Hotel", image: "/img/remote/u-1527838832700-5059252407fa.webp", paragraphs: ["Arrive in Istanbul, meet the team at the airport, and transfer to the hotel. The first evening is intentionally gentle so the group can settle into the rhythm of the pilgrimage.", "A Turkish welcome dinner marks the formal beginning of this overland Christian journey centered on Paul's footsteps and early church history."], meals: { breakfast: "/", lunch: "/", dinner: "Yes" } },
          { day: "02", title: "Istanbul to Ankara | Bosphorus and the Road Inland", stay: "Ankara Hotel", image: "/img/remote/u-1541432901042-2d8bd64b4a9b.webp", paragraphs: ["Begin with a Bosphorus cruise and a visit to the Blue Mosque, framing Istanbul as the imperial gateway between continents, cultures, and centuries of religious memory.", "After the city program, continue by coach to Ankara, the political heart of modern Turkey, preparing for the inland chapters of the pilgrimage."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "03", title: "Ankara, Tuz Lake and Cappadocia | Republic to Wilderness", stay: "Cappadocia Hotel", image: "/img/remote/u-1516483638261-f4dbaf036963.webp", paragraphs: ["Visit Anitkabir in Ankara, then continue toward Tuz Lake, one of central Anatolia's most striking landscapes.", "By afternoon arrive in Cappadocia for an ATV experience and Rose Valley sunset, introducing the unique geography that once sheltered early Christian communities."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "04", title: "Deep Cappadocia | Rock Churches and Underground Faith", stay: "Cappadocia Hotel", image: "/img/remote/u-1686257558166-a13a257b5dc1.webp", paragraphs: ["Explore Goreme Open Air Museum with its rock-hewn churches and frescoes, then descend into an underground city such as Kaymakli to reflect on the survival patterns of early believers.", "This day is especially suited for Bible background sharing, prayer, and contemplation on endurance, refuge, and faithful witness."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "05", title: "Konya to Pamukkale | Silk Road Memory", stay: "Pamukkale Hotel", image: "/img/remote/u-1718227973712-fa3c9b1fda6e.webp", paragraphs: ["Travel along the old Anatolian inland route, passing through Konya and stopping at Sultanhanı Caravanserai to feel the historical pulse of the Silk Road.", "Arrive in Pamukkale by evening, where the thermal landscape and ancient ruins set the stage for the next phase of the Seven Churches pilgrimage."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "06", title: "Seven Churches Trail I | Hierapolis, Laodicea, Philadelphia, Sardis", stay: "Izmir / Kusadasi Hotel", image: "/img/remote/u-1718227973712-fa3c9b1fda6e.webp", paragraphs: ["Visit Hierapolis and the white travertines of Pamukkale, then continue to the Revelation sites of Laodicea, Philadelphia, and Sardis.", "This is a day of strong contrasts: healing waters, civic wealth, spiritual warning, and persevering testimony all come together in one continuous biblical landscape."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "07", title: "Seven Churches Trail II | Ephesus, Smyrna and Thyatira", stay: "Izmir / Kusadasi Hotel", image: "/img/remote/u-1684214190982-f3506653f932.webp", paragraphs: ["Enter Ephesus, one of the best-preserved ancient cities in the Mediterranean world, and continue to Smyrna's historic agora and the remains connected with the church's witness.", "Later proceed to Thyatira. A local leather craft presentation may be arranged en route as part of the regional cultural experience."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "08", title: "Pergamum, Troy and Alexandria Troas | Epic and Mission", stay: "Canakkale Hotel", image: "/img/remote/u-1715080271610-c177c424aa6d.webp", paragraphs: ["Take the cable car up to Pergamum Acropolis, then continue toward Troy, where myth, archaeology, and layered history meet in dramatic form.", "Also visit Alexandria Troas and its harbor, a location closely associated with the wider missionary horizon of the apostolic era, before overnighting in Canakkale."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "09", title: "Return to Istanbul | Bridge, Panorama and Departure", stay: "Departure", image: "/img/remote/u-1605382628707-0aa0593fba19.webp", paragraphs: ["Cross the 1915 Canakkale Bridge back into Europe and continue to Istanbul. Before departure, ascend Camlica Hill for one final panoramic view over the city.", "The journey closes with spiritual review, thanksgiving, and airport transfer according to the flight schedule."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "/" } }
        ]
      },
      notices: {
        title: "Important Notices",
        items: [
          "Schedule Adjustment: If flights, weather, or road conditions require it, the order of visits may be adjusted with guest consent while keeping service standards unchanged.",
          "Accommodation Note: If the originally planned hotel is unavailable, a hotel of the same standard will be arranged.",
          "Spiritual Elements: Bible background teaching, prayer time, and optional worship moments can be adapted for the group.",
          "Walking & Coach Time: This is a genuine overland pilgrimage with multiple ancient-site walks and long road segments. Comfortable footwear is recommended."
        ]
      }
    },
    itinerary_z6: {
      meta: {
        code: "Z6",
        seriesTitle: "Z Series · Overland Istanbul + Seven Churches｜7 Days 6 Nights Faith Journey",
        title: "Z6 Route · 7 Days 6 Nights Overland Istanbul & Seven Churches Pilgrimage",
        subtitle: "Explore the imperial city and retrace the footsteps of the early churches",
        tagline: "Historic Istanbul immersion | Seven Churches overland pilgrimage | Biblical context sharing and prayer time | Chinese-speaking guide throughout",
        transport: "Full journey by air-conditioned touring coach with Chinese-speaking guide and tour leader accompaniment.",
        hotels: "Local 3-star and above or character hotels, including daily breakfast and set meals or specialty dinners.",
        transport_label: "Transport Service",
        hotels_label: "Stay & Dining",
        price_label: "Reference Price",
        price: "9880",
        meals_label: "Dining",
        stay_label: "Stay Reference",
        footer_cta_title: "Begin Your Overland Seven Churches Pilgrimage",
        cta_consult: "Consult Expert Now",
        cta_plan: "Get Detailed Plan",
        sticky_cta: "Enquire Now",
        seo: {
          title: "Z6 Overland Istanbul & Seven Churches Pilgrimage | 7 Days 6 Nights",
          description: "A 7-day overland pilgrimage from Istanbul through the Seven Churches route, including biblical background sharing, prayer time, and guided visits to key ancient sites.",
          keywords: "Istanbul Seven Churches pilgrimage, 7 day Turkey faith tour, overland biblical journey, Revelation churches Turkey, Christian pilgrimage Turkey"
        }
      },
      highlights: {
        title: "Core Highlights",
        items: [
          { title: "Istanbul as the Spiritual Prologue", desc: "Begin in Sultanahmet and the Bosphorus to frame the journey within the imperial layers of Byzantium and the Ottomans." },
          { title: "Seven Churches Route by Land", desc: "Travel steadily across western Anatolia, linking Pergamum, Thyatira, Smyrna, Ephesus, Sardis, Philadelphia, and Laodicea." },
          { title: "Biblical Context & Prayer Rhythm", desc: "The journey includes Bible background sharing, group prayer moments, and optional worship sessions arranged with the team." },
          { title: "Pamukkale, Hierapolis & Laodicea", desc: "Stand where natural wonder and church history meet, reflecting on spiritual fervor, witness, and endurance." },
          { title: "Chinese Guide Throughout", desc: "A Chinese-speaking guide and leader accompany the group from arrival to departure, making the route practical for church and fellowship groups." },
          { title: "Balanced Pilgrimage Comfort", desc: "Coach travel, city walks, and well-paced overnight stops make the route suitable for groups seeking both devotion and historical depth." }
        ]
      },
      summaryTable: {
        title: "Itinerary Summary",
        columns: ["Day", "Route", "B", "L", "D", "Stay"],
        rows: [
          { day: "D1", route: "Arrival Istanbul → Sultanahmet Square → Blue Mosque", breakfast: "/", lunch: "/", dinner: "Yes", hotel: "Istanbul" },
          { day: "D2", route: "Bosphorus Cruise → Spice Bazaar → Istiklal Avenue → Galata Tower (outside)", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Transit Hotel" },
          { day: "D3", route: "Pergamum Ancient City → Thyatira Church Ruins", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Izmir" },
          { day: "D4", route: "Smyrna → Ephesus → Sardis → Philadelphia", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Pamukkale" },
          { day: "D5", route: "Pamukkale → Hierapolis → Laodicea", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Pamukkale" },
          { day: "D6", route: "Alexandria Troas → Overland Return to Istanbul", breakfast: "Hotel", lunch: "Yes", dinner: "Yes", hotel: "Istanbul" },
          { day: "D7", route: "Camlica Hill → Spiritual Reflection → Airport Transfer", breakfast: "Hotel", lunch: "/", dinner: "/", hotel: "Departure" }
        ]
      },
      sections: {
        title: "Detailed Itinerary",
        days: [
          { day: "01", title: "Arrival in Istanbul | First Breath of the Imperial City", stay: "Istanbul Hotel", image: "/img/remote/u-1527838832700-5059252407fa.webp", paragraphs: ["Arrival at Istanbul airport. After meet-and-greet, head into the old city to visit Sultanahmet Square and the Blue Mosque, opening the journey in the heart of the former imperial capital.", "The evening is reserved for a Turkish welcome dinner and gentle orientation, helping the group settle into the rhythm of the pilgrimage."], meals: { breakfast: "/", lunch: "/", dinner: "Yes" } },
          { day: "02", title: "Istanbul in Depth | Bosphorus, Bazaar and Living Streets", stay: "Transit Hotel", image: "/img/remote/u-1541432901042-2d8bd64b4a9b.webp", paragraphs: ["Cruise the Bosphorus between Europe and Asia, then continue to the Spice Bazaar to experience the living commercial heart of the city.", "Ride the T1 tram, walk Istiklal Avenue, and view Galata Tower from outside. The day blends everyday Istanbul with the energy of a city shaped by many civilizations before the group continues inland by road."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "03", title: "Pergamum & Thyatira | Faith Under Pressure", stay: "Izmir Hotel", image: "/img/remote/u-1715080271610-c177c424aa6d.webp", paragraphs: ["Visit ancient Pergamum, including the acropolis zone, Trajan Temple area, and the medical heritage connected with the Asklepion tradition.", "Continue to the church site of Thyatira and reflect on how early believers stood firm amid pressure from imperial cults and guild life."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "04", title: "Smyrna, Ephesus, Sardis & Philadelphia | Four Cities in One Day", stay: "Pamukkale Hotel", image: "/img/remote/u-1684214190982-f3506653f932.webp", paragraphs: ["At Smyrna, visit the Roman Agora and remember Bishop Polycarp's witness. Continue to Ephesus to walk the marble streets, the Great Theatre, and the Celsus Library area.", "Later, move on to Sardis and Philadelphia, reflecting on the warning against hollow reputation and the promise of the open door."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "05", title: "Pamukkale, Hierapolis & Laodicea | Warm Water and Wake-Up Calls", stay: "Pamukkale Hotel", image: "/img/remote/u-1718227973712-fa3c9b1fda6e.webp", paragraphs: ["Walk the white terraces of Pamukkale and explore Hierapolis, traditionally associated with Philip's martyrdom and the spread of early faith in the region.", "In Laodicea, consider the contrast between material abundance and spiritual lukewarmness, especially in light of the water system and civic wealth of the city."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "06", title: "Alexandria Troas | The Macedonian Call Remembered", stay: "Istanbul Hotel", image: "/img/remote/u-1715080271610-c177c424aa6d.webp", paragraphs: ["Travel to Alexandria Troas and its ancient harbor zone, recalling the turning point where Paul received the Macedonian vision and the mission expanded westward.", "During the overland return to Istanbul, the group can review the spiritual lessons of the Seven Churches, with guided sharing and prayer on the coach."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "07", title: "Camlica Hill & Departure | Closing Reflection", stay: "Departure", image: "/img/remote/u-1605382628707-0aa0593fba19.webp", paragraphs: ["On the final morning, ascend Camlica Hill for a panoramic view over Istanbul, gathering the journey into a final moment of thanksgiving and reflection.", "After a closing spiritual review and practical wrap-up, transfer to the airport for departure."], meals: { breakfast: "Hotel", lunch: "/", dinner: "/" } }
        ]
      },
      notices: {
        title: "Important Notices",
        items: [
          "Schedule Adjustment: The order of visits and overnight cities may be adjusted based on flights, weather, road conditions, and actual group operations.",
          "Accommodation Note: If listed hotels are unavailable, hotels of the same standard will be arranged.",
          "Spiritual Elements: Bible background sharing, prayer time, and optional worship sessions can be arranged according to group needs.",
          "Walking Intensity: This route includes ancient-site walking and long coach segments. Comfortable walking shoes are recommended."
        ]
      }
    },
    toursData: [
      { id: '1', title: 'S1-Istanbul & Cappadocia 6 Days Heritage', location: 'Istanbul / Cappadocia', duration: '6 Days', price: 6999, image: '/img/remote/u-1636021597151-cc28dacd915c.webp', category: 'classic', highlights: ['Sunrise Hot Air Balloon', 'Ebru Art Workshop', 'Ephesus Immersive Museum'], path: '/itineraries/s1-turkey-6-days' },
      { id: 's2', title: 'S2-Aegean to Anatolia 8 Days Grand Tour', location: 'Multi-City / D400', duration: '8 Days', price: 8999, image: "/img/remote/u-1596093145026-f6af675846c7.webp", category: 'classic', highlights: ['D400 Coastal Road', 'Ephesus & Pamukkale', 'Dual Internal Flights'], path: '/itineraries/s2-turkey-8-days' },
      { id: 's4', title: 'S4-Istanbul to Anatolia 10 Days Culture', location: 'Multi-City / Troy', duration: '10 Days', price: 8999, image: "/img/remote/u-1689130033373-2773b6029aea.webp", category: 'classic', highlights: ['Legendary Troy', 'Bosphorus Cruise', 'Ancient Heritage'], path: '/itineraries/s4-turkey-10-days' },
      { id: 's5', title: 'S5-Troy & Fairy Road 8 Days Depth Tour', location: 'Troy / Egirdir', duration: '8 Days', price: 8999, image: "/img/remote/u-1687706222092-b6545828217d.webp", category: 'classic', highlights: ['Ancient Troy', 'Lake Egirdir', 'Council of Nicaea Site'], path: '/itineraries/s5-turkey-8-days' },
      { id: 'z1', title: 'Z1-Seven Churches & Apostles Path 10-Day Tour', location: 'Faith Route / Seven Churches', duration: '10 Days', price: 10999, image: "/img/remote/u-1527838832700-5059252407fa.webp", category: 'family', highlights: ['Seven Churches', 'Apostles Footsteps', 'Boutique Cave Hotels'], path: '/itineraries/z1-turkey-11-days' },
      { id: 'z2', title: 'Z2-Revelation Seven Churches Essential 4-Day Tour', location: 'Seven Churches Essence', duration: '4 Days', price: 3999, image: "/img/remote/u-1684214190982-f3506653f932.webp", category: 'family', highlights: ['Seven Churches Essence', 'Deep apostolic mission', 'Thermal Springs'], path: '/itineraries/z2-revelation-4-days' },
      { id: 'z5', title: "Z5-9D8N Overland Christian Pilgrimage", location: "Paul's Footsteps / Seven Churches", duration: '9 Days 8 Nights', price: 11800, image: "/img/remote/u-1605382628707-0aa0593fba19.webp", category: 'family', highlights: ["Paul's Footsteps", 'Seven Churches Route', 'Cappadocia Faith Memory'], path: '/itineraries/z5-paul-footsteps-9-days' },
      { id: 'z6', title: 'Z6-7D6N Overland Istanbul & Seven Churches Pilgrimage', location: 'Istanbul / Seven Churches', duration: '7 Days 6 Nights', price: 9880, image: "/img/remote/u-1527838832700-5059252407fa.webp", category: 'family', highlights: ['Historic Istanbul', 'Seven Churches Route', 'Prayer & Bible Sharing'], path: '/itineraries/z6-overland-seven-churches-7-days' },
      { id: 'i1', title: 'I1-Israel Holy Land Journey 8 Days 7 Nights', location: 'Jerusalem / Galilee / Bethlehem', duration: '8 Days 7 Nights', price: 2165, image: "/img/remote/u-1542743408-218cc173cda0.webp", category: 'family', highlights: ['Galilee Ministry Route', 'Jerusalem Passion Route', 'Jordan River & Dead Sea'], path: '/itineraries/i1-israel-holyland-8-days' }
    ],
    ticketsData: [
      { id: 't1', title: 'Dolmabahçe Palace (Dolmabahçe Sarayı)', price: 400, includes: ['Access to Ceremonial Hall, Harem and Museum of Painting', 'Official Audio Guide support', 'Contact Customer Service for details'], image: '/img/remote/u-1601565465051-67971a2d838c.webp', category: 'entry' },
      { id: 't2', title: 'Yıldız Palace (Yıldız Sarayı)', price: 180, includes: ['Access to complex and gardens', 'Guided tour support', 'Consult Customer Service for details'], image: 'https://cdn.istanbul.com/upload/dolmabahce-skip-the-line-7-853x480.webp', category: 'entry' },
      { id: 't3', title: 'Beylerbeyi Palace (Beylerbeyi Sarayı)', price: 150, includes: ['Access to main palace and waterfront gardens', 'Stone carving art appreciation', 'Contact Customer Service for details'], image: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_828/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/alxi5drx8um7tsyhdf0l/博斯普鲁斯海峡游轮两大洲.jpg', category: 'entry' },
      { id: 't4', title: 'Painting Museum (Resim Müzesi)', price: 110, includes: ['Access to art gallery painting collections', 'Art history guide support', 'Consult Customer Service for details'], image: '/img/remote/u-1692701824634-677c652fc111.webp', category: 'entry' },
      { id: 't5', title: 'Museum of Islamic Civilizations (İslam Medeniyetleri Müzesi)', price: 95, includes: ['Access to Islamic civilization galleries', 'Cultural history analysis', 'Consult Customer Service for details'], image: '/img/remote/u-1759930018775-bf3c3fe9bdc6.webp', category: 'entry' },
      { id: 't6', title: 'Beykoz Glass and Crystal Museum (Beykoz Cam ve Billur Müzesi)', price: 85, includes: ['Access to glass and crystal exhibits', 'Craftsmanship history explanation', 'Contact Customer Service for details'], image: '/img/remote/u-1605988743975-c9c5b8550a91.webp', category: 'entry' },
      { id: 't7', title: 'Ankara Palace (Ankara Palace)', price: 58, includes: ['Access to grand halls and historic areas', 'Official guide support', 'Consult Customer Service for details'], image: '/img/remote/u-1699474745854-39fc35d5ba19.webp', category: 'entry' },
      { id: 't8', title: 'Küçüksu Pavilion (Küçüksu Kasrı)', price: 50, includes: ['Access to pavilion main building', 'Garden area exploration', 'Contact Customer Service for details'], image: '/img/remote/u-1680419928106-1804e2eb432d.webp', category: 'entry' },
      { id: 't9', title: 'Ihlamur Pavilion (Ihlamur Kasrı)', price: 50, includes: ['Access to pavilion area and gardens', 'Cultural heritage visit', 'Consult Customer Service for details'], image: '/img/remote/u-1661103112980-2ceae026f17b.webp', category: 'entry' },
      { id: 't10', title: 'Beykoz Mecidiye Pavilion (Beykoz Mecidiye Kasrı)', price: 50, includes: ['Access to main pavilion and surroundings', 'Historic background info', 'Consult Customer Service for details'], image: '/img/remote/u-1665860789948-bfe6ea95d6cf.webp', category: 'entry' },
      { id: 't11', title: 'Aynalıkavak Pavilion (Aynalıkavak Kasrı)', price: 50, includes: ['Access to pavilion and instrument collection', 'Consult Customer Service for details'], image: 'https://cdn.kulturenvanteri.com/wp-content/uploads/2019/11/Aynalikavak-Kasri-1-1024x683.jpg', category: 'entry' },
      { id: 't12', title: 'Maslak Pavilion (Maslak Kasrı)', price: 50, includes: ['Access to pavilion group and greenhouse', 'Consult Customer Service for details'], image: '/img/remote/u-1766778834237-34aeabf4d9b2.webp', category: 'entry' }
    ],
    faqs: [
      { q: 'How do I book a tour with Grace Way?', a: 'Browse our tours and click "Enquire Now". We tailor every detail with you via WeChat, Email, or WhatsApp to ensure a seamless experience.' },
      { q: 'Is Grace Way a licensed travel agency?', a: 'Yes, Grace Way is a fully licensed A-Class Turkish travel agency (TURSAB Registered).' },
      { q: 'What is your cancellation policy?', a: 'Cancellations up to 7 days before the tour are fully refundable. Custom packages may have specific terms.' },
      { q: 'Do you offer airport transfers?', a: 'Yes, we provide private airport transfers across all major Turkish airports including IST, SAW, and AYT.' },
      { q: 'Do I need Turkey entry travel insurance?', a: 'We offer Turkey entry travel insurance at CNY 20 per day per traveler. Coverage includes Tibbi Tedavi Teminati (medical treatment), Tibbi Nakil (medical transport), and Cenaze Nakli (remains repatriation), with a maximum payout of CNY 240,000.' }
    ],
    features: {
      f1: { title: 'Fully Licensed Agency', desc: 'A-Class TURSAB member. Operating under strict government regulations for your peace of mind.' },
      f2: { title: 'Boutique & Bespoke', desc: 'Specializing in small groups and private itineraries tailored to your unique rhythm.' },
      f3: { title: 'Certified Expert Guides', desc: 'Our historians are government-certified professionals based in Turkey.' }
    },
    contact: {
      title: "Design Your Perfect Escape",
      subtitle: "Our Turkey-based specialists are ready to craft your story using their local expertise.",
      talkToExpert: 'Talk to a Specialist',
      talkToExpertDesc: 'Direct messaging with our Turkey-based experts.',
      chatWeChat: 'Chat on WeChat',
      chatWhatsApp: 'WhatsApp',
      copied: 'ID Copied to Clipboard',
      callNow: 'Call Now',
      emailInquiry: 'Email Inquiry (Bookings / Partnerships)',
      bookings: 'Client Bookings',
      partnerships: 'Business Partnerships',
      replyTime: 'Reply within 24h',
      contactLabel: 'Contact: WeChat · WhatsApp Supported',
      residentTag: 'Istanbul Resident',
      wechatPhone: 'WeChat / Phone',
      dmcDirector: 'DMC Operations Director',
      licensedSpecialist: 'Licensed Senior Specialist',
      hqLocation: 'Official HQ: Istanbul',
      viewGoogleMaps: 'View on Google Maps',
      viewOSM: 'View on OpenStreetMap'
    },
    hub: {
      turkeyOps: 'Turkey Operations',
      istanbulHub: 'Istanbul Global Hub',
      licensedBoutique: 'Official Licensed Boutique Agency',
      viewMaps: 'View location on Google Maps'
    },
    footer: {
      compliance: 'Compliance',
      istanbulOffice: 'Istanbul Office',
      lead: 'Lead',
      langSupport: 'Chinese / Turkish Support',
      emailLabel: 'Email',
      statement: 'Grace Way · Boutique Travel Expert',
      about: 'Grace Way Travel Agency is a premier boutique operator based in Istanbul, offering professional and high-end services for global travelers.',
      brandEn: 'GRACE WAY TRAVEL AGENCY',
      brandZh: '恩途 · 国际旅行',
      explore: 'Discovery',
      contact: 'Contact Us',
      address: 'MH, Halkçı Sk. MODA PASAJI NO:25 KAT:2 BÜRO/OFiS NO:35, 34145 Bakırköy/İstanbul',
      licenseInfo: 'A-Class License: 1XXXX',
      licensedAGroup: 'Licensed A-Group Agency',
      officialLicensed: 'Official Licensed',
      rights: 'All rights reserved.',
      tursabText: 'TÜRSAB Member',
      tursabBacklink: 'Official Licensed Turkish Travel Agency'
    },
    seo: {
      home: { 
        title: 'Grace Way Travel | Official Turkey Travel Agency', 
        description: 'Bespoke journeys through ancient history and vibrant culture with Grace Way — your licensed boutique travel partner in Turkey.',
        keywords: 'Turkey travel agency, bespoke Turkey tours, licensed Turkey DMC, boutique Turkey travel, Istanbul tours, Cappadocia balloon tours'
      },
      tours: { 
        title: 'Turkey Tour Packages | Boutique Itineraries', 
        description: 'Explore our signature Turkey tour packages. From Cappadocia balloons to Ephesus ruins, discover the best of Turkey.',
        keywords: 'Turkey tour packages, Turkey itineraries, Cappadocia tours, Ephesus tours, luxury Turkey travel'
      },
      about: { 
        title: 'About Grace Way | Licensed Turkey DMC', 
        description: 'Learn about Grace Way Travel Agency, a licensed A-Group operator rooted in Turkey serving global travelers.',
        keywords: 'Grace Way Travel, Turkey travel agency, licensed A-Group agency, Turkey DMC, professional travel services Turkey'
      },
      tickets: { 
        title: 'Turkey Museum Tickets | Skip-the-Line Access', 
        description: 'Book official Turkey museum tickets and skip-the-line access for Dolmabahce Palace, Topkapi, and more.',
        keywords: 'Turkey museum tickets, skip the line Turkey, Dolmabahce Palace tickets, Topkapi Palace tickets, Hagia Sophia tickets'
      },
      contact: { 
        title: 'Contact Us | Plan Your Turkey Trip', 
        description: 'Get in touch with our Turkey travel experts to plan your customized boutique journey.',
        keywords: 'contact Turkey travel agency, plan Turkey trip, Turkey travel consultation, custom Turkey tours'
      }
    }
};

export default en;
