export type Language = 'en' | 'zh' | 'tr';

export const translations = {
  en: {
    nav: { home: 'Home', tours: 'Tours', tickets: 'Tickets', contact: 'Contact', enquire: 'Enquire Now', closeMenu: 'Close Menu' },
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
      categories: { 
        all: 'All Categories', 
        classic: 'Classic Heritage', 
        luxury: 'Luxury Collection', 
        family: 'Family Adventure', 
        entry: 'Museum Tickets', 
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
      sticky_cta: "Consult Expert Now"
    },
    itinerary_s2: {
      badge: "S2 Package · Boutique DMC",
      title: "Aegean to Anatolia",
      subtitle: "8-Day Grand Turkey Tour",
      description: "High Quality Dual Flights · Boutique Small Group · Pure Experience",
      cta_consult: "Enquire Now",
      cta_plan: "Get Plan",
      images: {
        coverImage: "https://images.unsplash.com/photo-1596093145026-f6af675846c7?q=80&w=2148&auto=format&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1689130033373-2773b6029aea?q=80&w=2148&auto=format&fit=crop",
        cardImage: "https://images.unsplash.com/photo-1697457661409-0adc99b64647?q=80&w=2340&auto=format&fit=crop",
        day1Image: "https://images.unsplash.com/photo-1665051153829-82fc1acb59e6?q=80&w=2340&auto=format&fit=crop",
        day2Image: "https://images.unsplash.com/photo-1708251088223-e56cd382e8c6?q=80&w=2832&auto=format&fit=crop",
        day3Image: "https://images.unsplash.com/photo-1686428007573-f4a91f2d8bd0?q=80&w=2340&auto=format&fit=crop",
        day4Image: "https://images.unsplash.com/photo-1632821629445-bdc26ce3ccf0?q=80&w=2340&auto=format&fit=crop",
        day5Image: "https://images.unsplash.com/photo-1674715577456-49ae7a6945a8?q=80&w=2340&auto=format&fit=crop",
        day6Image: "https://images.unsplash.com/photo-1643354812958-b648b92dc6c5?q=80&w=2340&auto=format&fit=crop",
        day7Image: "https://images.unsplash.com/photo-1680204412403-73110934f5aa?q=80&w=2340&auto=format&fit=crop",
        day8Image: "https://images.unsplash.com/photo-1624786712432-e021fdf57c48?q=80&w=2832&auto=format&fit=crop"
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
      sticky_cta: "Consult Now"
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
        sticky_cta: "Enquire Now"
      },
      hero: {
        badge: "S4 Package · Panoramic",
        title: "10-Day Panoramic Culture Tour",
        subtitle: "Epic Landscapes from Aegean to Anatolia",
        ctaPrimary: "Enquire Now",
        ctaSecondary: "Get Plan",
        image: "https://images.unsplash.com/photo-1689130033373-2773b6029aea?q=80&w=2148&auto=format&fit=crop"
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
            image: "https://images.unsplash.com/photo-1687706222092-b6545828217d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0",
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
            image: "https://images.unsplash.com/photo-1701428588034-5893b2512a68?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0",
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
            image: "https://images.unsplash.com/photo-1433854471391-5603c019de62?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0",
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
            image: "https://images.unsplash.com/photo-1498222954553-93fc8d1941da?q=80&w=2346&auto=format&fit=crop&ixlib=rb-4.1.0",
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
            image: "https://images.unsplash.com/photo-1697457661409-0adc99b64647?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0",
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
            image: "https://images.unsplash.com/photo-1724249367218-819f3eb2f9f7?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0",
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
            image: "https://images.unsplash.com/photo-1712569838375-27b4eb58d05f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0",
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
            image: "https://images.unsplash.com/photo-1569530593439-c5a3adda5204?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0",
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
            image: "https://images.unsplash.com/photo-1587506873457-b6d7d1cdad18?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0",
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
            image: "https://images.unsplash.com/photo-1608677662924-8b83590f474e?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0",
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
        sticky_cta: "Enquire Now"
      },
      hero: {
        badge: "S5 Route · In-depth Panoramic",
        title: "S5 Route · Troy & Fairy Road",
        subtitle: "8-Day Grand Culture Depth Journey",
        ctaPrimary: "Enquire Now",
        ctaSecondary: "Get Plan",
        image: "https://images.unsplash.com/photo-1687706222092-b6545828217d?q=80&w=2340&auto=format&fit=crop"
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
            image: "https://images.unsplash.com/photo-1636021597151-cc28dacd915c?q=80&w=2340&auto=format&fit=crop",
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
            image: "https://images.unsplash.com/photo-1716274644458-d30c57acdeb4?q=80&w=1354&auto=format&fit=crop&ixlib=rb-4.1.0",
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
            image: "https://images.unsplash.com/photo-1701428588034-5893b2512a68?q=80&w=2340&auto=format&fit=crop",
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
            image: "https://images.unsplash.com/photo-1433854471391-5603c019de62?q=80&w=2340&auto=format&fit=crop",
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
            image: "https://images.unsplash.com/photo-1680465807377-c83db592a2fc?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0",
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
            image: "https://images.unsplash.com/photo-1712569838375-27b4eb58d05f?q=80&w=2340&auto=format&fit=crop",
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
            image: "https://images.unsplash.com/photo-1569530593439-c5a3adda5204?q=80&w=2340&auto=format&fit=crop",
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
            image: "https://images.unsplash.com/photo-1608677662924-8b83590f474e?q=80&w=2340&auto=format&fit=crop",
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
        sticky_cta: "Enquire Now"
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
          { day: "01", title: "Arrival in Istanbul | A Millennium Gaze", stay: "Istanbul 5-Star Hotel", image: "https://images.unsplash.com/photo-1650610854382-ed6dc12f9b57", paragraphs: ["Arrive in Istanbul. Transfer to Sultanahmet for a deep tour of the historic district, witnessing the architectural dialogue between Byzantium and the Ottomans."], meals: { breakfast: "/", lunch: "Yes", dinner: "Yes" } },
          { day: "02", title: "Cappadocia | Volcanic Landscapes", stay: "Boutique Cave Hotel", image: "https://images.unsplash.com/photo-1752865224513-17e6afc1e6c5", paragraphs: ["Fly to Cappadocia. Explore the lunar landscapes, Pigeon Valley, and Pasabag chimneys formed by millions of years of erosion."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "03", title: "Goreme & Uchisar | Cave Churches", stay: "Boutique Cave Hotel", image: "https://images.unsplash.com/photo-1686257558166-a13a257b5dc1", paragraphs: ["Visit Goreme Open Air Museum to see Byzantine cave churches and frescoes. Ascend Uchisar Castle for panoramic canyon views."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "04", title: "Underground City to Konya | Silk Road & Seljuk Echoes", stay: "Konya 5-Star Hotel", image: "https://images.unsplash.com/photo-1675373181258-681d11e0e4c5", paragraphs: ["Explore the vertical defense systems of Kaymakli Underground City. Drive along the ancient Silk Road to Konya, stopping at the 13th-century Sultan Han Caravanserai. Visit the Mevlana Museum to explore the spiritual heart of Sufism."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "05", title: "Antioch, Colossae & Laodicea | Apostolic Footsteps", stay: "Thermal 5-Star Hotel", image: "https://images.unsplash.com/photo-1718227973712-fa3c9b1fda6e", paragraphs: ["Revisit the ruins of Pisidian Antioch and the ancient city of Colossae to restore early civilization expansion routes. Continue to Laodicea, the lukewarm church, exploring its grand theaters and monumental streets."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "06", title: "Hierapolis to Thyatira | Sacred Springs & Seven Churches Nodes", stay: "Izmir 5-Star Hotel", image: "https://images.unsplash.com/photo-1728361328959-d30d8218e38b", paragraphs: ["Walk the white travertine terraces of Pamukkale and visit Hierapolis. Tour the critical nodes of Revelation: Philadelphia, Sardis with its impressive Gymnasium, and Thyatira."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "07", city: "Ephesus & Smyrna", title: "Peak of Civilization", stay: "Izmir 5-Star Hotel", image: "https://images.unsplash.com/photo-1684214190982-f3506653f932", paragraphs: ["Deep tour of Ephesus, the best-preserved ancient city. Visit St. John's Basilica and the ruins of ancient Smyrna (Izmir)."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "08", title: "Pergamum & Troy | Acropolis & Epic", stay: "Canakkale 5-Star Hotel", image: "https://images.unsplash.com/photo-1715080271610-c177c424aa6d", paragraphs: ["Visit Pergamum Acropolis with its steepest theater. Cross to Troy to see the archaeological layers spanning 4,000 years, witnessing the collision of epic and reality."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "09", title: "Istanbul | Bosphorus Narratives", stay: "Istanbul 5-Star Hotel", image: "https://images.unsplash.com/photo-1605382628707-0aa0593fba19", paragraphs: ["Return to Istanbul. Deep tour of Hagia Sophia. Evening Bosphorus cruise viewing the palaces and mansions between two continents."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "10", title: "Byzantine Arts & Departure | Final View", stay: "Departure", image: "https://images.unsplash.com/photo-1678050643669-0e67cc5a0e21", paragraphs: ["Visit Chora Church for exquisite mosaics. Final panoramic view at Uskudar viewpoint before private transfer to the Airport for departure."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "/" } }
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
        sticky_cta: "Enquire Now"
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
          { day: "01", title: "Istanbul → Pergamum → Thyatira → Izmir", stay: "Izmir 5-Star Hotel", image: "https://images.unsplash.com/photo-1715080271610-c177c424aa6d", paragraphs: ["Depart from Istanbul at dawn, crossing the Marmara plains. First stop is the mountain city of Pergamum, exploring its grand library and steep theater ruins.", "Continue to Thyatira, reflecting on apostolic warnings. Arrive at Smyrna (Izmir) by evening, checking into a 5-star seaside hotel."], meals: { breakfast: "/", lunch: "Yes", dinner: "/" } },
          { day: "02", title: "Smyrna → Virgin Mary House → St. John Church → Ephesus", stay: "Izmir 5-Star Hotel", image: "https://images.unsplash.com/photo-1684214190982-f3506653f932", paragraphs: ["Deep pilgrimage to the core of early Christianity. Morning visit to the serene House of Virgin Mary and St. John's Basilica.", "Afternoon tour of Ephesus ancient city. Walk the marble roads and listen to historical echoes in the ruins of one of the world's greatest archaeological sites."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "03", title: "Sardis → Philadelphia → Laodicea → Pamukkale", stay: "Pamukkale 5-Star Thermal Hotel", image: "https://images.unsplash.com/photo-1718227973712-fa3c9b1fda6e", paragraphs: ["Journey through the ancient Lydian trade routes. First visit the ruins of Sardis, once the city where the world's first gold coins were minted, and its massive Synagogue—a warning against external prosperity vs inner faith.", "Continue to Philadelphia (Alaşehir), the city of 'Brotherly Love', commended for its perseverance. Reach Laodicea in the afternoon, the 'lukewarm' city. Explore its grand theaters and council halls that witness its heavy history.", "Evening arrival at Pamukkale, check into a luxury thermal hotel to enjoy natural hot springs."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "Yes" } },
          { day: "04", title: "Hierapolis (Pamukkale) → Istanbul", stay: "Return", image: "https://images.unsplash.com/photo-1708251088223-e56cd382e8c6", paragraphs: ["Early morning exploration of Hierapolis and the 'Cotton Castle' (Pamukkale) travertines. Witness the Roman theaters, temples, and necropolis built along the mountainside.", "Walk barefoot on the white travertines where natural thermal waters flow, creating a frozen waterfall wonder. Feel the power where nature meets history.", "Depart for Istanbul, conclude the 4-day pilgrimage."], meals: { breakfast: "Hotel", lunch: "Yes", dinner: "/" } }
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
    toursData: [
      { id: '1', title: 'S1-Istanbul & Cappadocia 6 Days Heritage', location: 'Istanbul / Cappadocia', duration: '6 Days', price: 6999, image: 'https://images.unsplash.com/photo-1636021597151-cc28dacd915c?auto=format&fit=crop&w=1200&q=80', category: 'classic', highlights: ['Sunrise Hot Air Balloon', 'Ebru Art Workshop', 'Ephesus Immersive Museum'], path: '/itineraries/s1-turkey-6-days' },
      { id: 's2', title: 'S2-Aegean to Anatolia 8 Days Grand Tour', location: 'Multi-City / D400', duration: '8 Days', price: 8999, image: "https://images.unsplash.com/photo-1596093145026-f6af675846c7?q=80&w=2148&auto=format&fit=crop", category: 'classic', highlights: ['D400 Coastal Road', 'Ephesus & Pamukkale', 'Dual Internal Flights'], path: '/itineraries/s2-turkey-8-days' },
      { id: 's4', title: 'S4-Istanbul to Anatolia 10 Days Culture', location: 'Multi-City / Troy', duration: '10 Days', price: 8999, image: "https://images.unsplash.com/photo-1689130033373-2773b6029aea?q=80&w=2148&auto=format&fit=crop", category: 'classic', highlights: ['Legendary Troy', 'Bosphorus Cruise', 'Ancient Heritage'], path: '/itineraries/s4-turkey-10-days' },
      { id: 's5', title: 'S5-Troy & Fairy Road 8 Days Depth Tour', location: 'Troy / Egirdir', duration: '8 Days', price: 8999, image: "https://images.unsplash.com/photo-1687706222092-b6545828217d?q=80&w=2340&auto=format&fit=crop", category: 'classic', highlights: ['Ancient Troy', 'Lake Egirdir', 'Council of Nicaea Site'], path: '/itineraries/s5-turkey-8-days' },
      { id: 'z1', title: 'Z1-Seven Churches & Apostles Path 10-Day Tour', location: 'Faith Route / Seven Churches', duration: '10 Days', price: 10999, image: "https://images.unsplash.com/photo-1543949806-2c9935e6838d?q=80&w=1200&auto=format&fit=crop", category: 'classic', highlights: ['Seven Churches', 'Apostles Footsteps', 'Boutique Cave Hotels'], path: '/itineraries/z1-turkey-11-days' },
      { id: 'z2', title: 'Z2-Revelation Seven Churches Essential 4-Day Tour', location: 'Seven Churches Essence', duration: '4 Days', price: 3999, image: "https://images.unsplash.com/photo-1684214190982-f3506653f932?q=80&w=1200&auto=format&fit=crop", category: 'classic', highlights: ['Seven Churches Essence', 'Deep apostolic mission', 'Thermal Springs'], path: '/itineraries/z2-revelation-4-days' }
    ],
    ticketsData: [
      { id: 't1', title: 'Dolmabahçe Palace (Dolmabahçe Sarayı)', price: 400, includes: ['Access to Ceremonial Hall, Harem and Museum of Painting', 'Official Audio Guide support', 'Contact Customer Service for details'], image: 'https://images.unsplash.com/photo-1601565465051-67971a2d838c?q=80&w=2340&auto=format&fit=crop', category: 'entry' },
      { id: 't2', title: 'Yıldız Palace (Yıldız Sarayı)', price: 180, includes: ['Access to complex and gardens', 'Guided tour support', 'Consult Customer Service for details'], image: 'https://cdn.istanbul.com/upload/dolmabahce-skip-the-line-7-853x480.webp', category: 'entry' },
      { id: 't3', title: 'Beylerbeyi Palace (Beylerbeyi Sarayı)', price: 150, includes: ['Access to main palace and waterfront gardens', 'Stone carving art appreciation', 'Contact Customer Service for details'], image: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_828/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/alxi5drx8um7tsyhdf0l/博斯普鲁斯海峡游轮两大洲.jpg', category: 'entry' },
      { id: 't4', title: 'Painting Museum (Resim Müzesi)', price: 110, includes: ['Access to art gallery painting collections', 'Art history guide support', 'Consult Customer Service for details'], image: 'https://images.unsplash.com/photo-1692701824634-677c652fc111?q=80&w=2346&auto=format&fit=crop', category: 'entry' },
      { id: 't5', title: 'Museum of Islamic Civilizations (İslam Medeniyetleri Müzesi)', price: 95, includes: ['Access to Islamic civilization galleries', 'Cultural history analysis', 'Consult Customer Service for details'], image: 'https://images.unsplash.com/photo-1759930018775-bf3c3fe9bdc6?q=80&w=2340&auto=format&fit=crop', category: 'entry' },
      { id: 't6', title: 'Beykoz Glass and Crystal Museum (Beykoz Cam ve Billur Müzesi)', price: 85, includes: ['Access to glass and crystal exhibits', 'Craftsmanship history explanation', 'Contact Customer Service for details'], image: 'https://images.unsplash.com/photo-1605988743975-c9c5b8550a91?q=80&w=2340&auto=format&fit=crop', category: 'entry' },
      { id: 't7', title: 'Ankara Palace (Ankara Palace)', price: 58, includes: ['Access to grand halls and historic areas', 'Official guide support', 'Consult Customer Service for details'], image: 'https://images.unsplash.com/photo-1699474745854-39fc35d5ba19?q=80&w=2832&auto=format&fit=crop', category: 'entry' },
      { id: 't8', title: 'Küçüksu Pavilion (Küçüksu Kasrı)', price: 50, includes: ['Access to pavilion main building', 'Garden area exploration', 'Contact Customer Service for details'], image: 'https://images.unsplash.com/photo-1680419928106-1804e2eb432d?q=80&w=2831&auto=format&fit=crop', category: 'entry' },
      { id: 't9', title: 'Ihlamur Pavilion (Ihlamur Kasrı)', price: 50, includes: ['Access to pavilion area and gardens', 'Cultural heritage visit', 'Consult Customer Service for details'], image: 'https://images.unsplash.com/photo-1661103112980-2ceae026f17b?q=80&w=2340&auto=format&fit=crop', category: 'entry' },
      { id: 't10', title: 'Beykoz Mecidiye Pavilion (Beykoz Mecidiye Kasrı)', price: 50, includes: ['Access to main pavilion and surroundings', 'Historic background info', 'Consult Customer Service for details'], image: 'https://images.unsplash.com/photo-1665860789948-bfe6ea95d6cf?q=80&w=1917&auto=format&fit=crop', category: 'entry' },
      { id: 't11', title: 'Aynalıkavak Pavilion (Aynalıkavak Kasrı)', price: 50, includes: ['Access to pavilion and instrument collection', 'Consult Customer Service for details'], image: 'https://cdn.kulturenvanteri.com/wp-content/uploads/2019/11/Aynalikavak-Kasri-1-1024x683.jpg', category: 'entry' },
      { id: 't12', title: 'Maslak Pavilion (Maslak Kasrı)', price: 50, includes: ['Access to pavilion group and greenhouse', 'Consult Customer Service for details'], image: 'https://images.unsplash.com/photo-1766778834237-34aeabf4d9b2?q=80&w=2340&auto=format&fit=crop', category: 'entry' }
    ],
    faqs: [
      { q: 'How do I book a tour with Grace Way?', a: 'Browse our tours and click "Enquire Now". We tailor every detail with you via WeChat, Email, or WhatsApp to ensure a seamless experience.' },
      { q: 'Is Grace Way a licensed travel agency?', a: 'Yes, Grace Way is a fully licensed A-Class Turkish travel agency (TURSAB Registered).' },
      { q: 'What is your cancellation policy?', a: 'Cancellations up to 7 days before the tour are fully refundable. Custom packages may have specific terms.' },
      { q: 'Do you offer airport transfers?', a: 'Yes, we provide private airport transfers across all major Turkish airports including IST, SAW, and AYT.' }
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
      hqLocation: 'Official HQ: Bakırköy, Istanbul',
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
    }
  },
  zh: {
    nav: { home: '首页', tours: '纵享行程', tickets: '门票体验', contact: '联系我们', enquire: '即刻定制', closeMenu: '关闭菜单' },
    hero: {
      title: '探索土耳其的灵魂',
      subtitle: '与恩途 · 国际旅行开启一场穿越古老历史与灿烂文化的私享定制之旅 —— 您在土耳其值得信赖的持牌精品伙伴。',
      cta1: '查看精彩线路',
      cta2: '在线咨询'
    },
    sections: {
      featuredTours: '匠心私藏',
      featuredSubtitle: '热门精品行程',
      whyUs: '恩途服务标准',
      whyUsSubtitle: '为什么选择恩途？',
      faq: '旅行百科',
      viewAll: '探索全部行程',
      categories: { 
        all: '全部类别', 
        classic: '人文经典', 
        luxury: '高端轻奢', 
        family: '亲子探险', 
        entry: '官方门票', 
        activity: '特色体验', 
        daytrip: '私家一日游' 
      }
    },
    itinerary_s1: {
      badge: "S1 线路 · 精品地接",
      title: "圣迹之旅",
      subtitle: "伊斯坦布尔 & 卡帕多奇亚",
      description: "6日穿越之旅 · 精品小团 · 纯玩",
      cta_consult: "立即咨询",
      cta_plan: "获取方案",
      audience_title: "这款行程，是否正是您所寻找的？",
      audience_list: [
        "不希望在土耳其无休止的大巴拉车（我们安排内陆飞机接驳）",
        "对历史文明、古代圣迹有浓厚探究欲望的深度旅行者",
        "追求住宿体验，偏爱五星级酒店、天然温泉及特色洞穴酒店",
        "反感购物店与低价拼团，坚持 100% 纯玩与精品定制小团服务",
        "希望在专业中文领队带领下，深度参与当地非遗艺术手作体验"
      ],
      highlights_title: "行程核心亮点",
      highlights: [
        { title: "热气球晨光飞行", desc: "在卡帕多奇亚破晓的微光中升空，俯瞰如月球表面般的奇幻地貌。" },
        { title: "湿拓画 Ebru 手作", desc: "联合国非遗体验，在水面挥洒色彩，亲手触摸土耳其艺术灵魂。" },
        { title: "以弗所沉浸博物馆", desc: "全新高科技光影体验，全息投影重现古罗马市集喧嚣，让历史“活”起来。" },
        { title: "海峡游船巡航", desc: "私人游船巡游欧亚海峡，远眺奥斯曼海滨别墅，感受文明交织。" },
        { title: "屋顶奥斯曼晚宴", desc: "换上传统服饰，在 Grace Rooftop 与圣索菲亚同框，享用主厨晚宴。" },
        { title: "双段内陆飞行", desc: "拒绝长途拉车，车程超 5 小时一律安排航班，将时间留给真正的美景。" }
      ],
      table_title: "游程简表",
      table_mobile_hint: "← 左右滑动查看完整表格 →",
      table_headers: { day: "天数", plan: "行程", meals: "早/中/晚", hotel: "住宿参考" },
      schedule: [
        { day: "D1", plan: "伊斯坦布尔 ✈ 卡帕多奇亚", b: "/", l: "瓦罐餐", d: "酒店内", hotel: "特色洞穴酒店" },
        { day: "D2", plan: "热气球 · 湿拓画 · 孔亚", b: "酒店用", l: "皮塔饼", d: "酒店内", hotel: "Bayır Diamond 5*" },
        { day: "D3", plan: "孔亚 → 棉花堡", b: "酒店用", l: "烤羊肉", d: "酒店内", hotel: "Bayır Diamond 5*" },
        { day: "D4", plan: "棉堡 → 库萨达斯", b: "酒店用", l: "风味餐", d: "酒店内", hotel: "Charisma De Luxe 5*" },
        { day: "D5", plan: "库萨达斯 ✈ 伊斯坦布尔", b: "酒店用", l: "中式餐", d: "屋顶晚宴", hotel: "Sheraton Istanbul 5*" },
        { day: "D6", plan: "海峡游船巡航 · 送机", b: "酒店用", l: "烤鱼餐", d: "中式餐", hotel: "返程" }
      ],
      daily_details: [
        { day: "01", city: "伊斯坦布尔 ✈ 卡帕多奇亚", theme: "洞穴教堂 · 精灵烟囱 · 红河陶艺", content: "飞抵卡帕多奇亚。探访格莱梅露天博物馆。仰望帕夏贝精灵烟囱。下午造访阿瓦诺斯陶瓷镇体验制陶。" },
        { day: "02", city: "热气球晨曦 · 湿拓画艺术 · 孔亚", theme: "苏菲之都 · 丝路遗迹", content: "可选热气球飞行。安排湿拓画 Ebru 手作。随后前往苏菲派圣地孔亚，途中停留苏丹大驿站。参访梅夫拉纳博物馆。" },
        { day: "03", city: "孔亚 → 棉花堡", theme: "罗马温泉 · 钙华奇观", content: "前往世界双遗产棉花堡。游览希拉波利斯古城遗址，探访古罗马温泉疗养天堂。步入白色钙华梯田。" },
        { day: "04", city: "棉花堡 → 库萨达斯", theme: "以弗所古城 · 光影博物馆", content: "聚焦古典文明巅峰以弗所古城。进入全新光影博物馆，沉浸式重现古城繁华。下午欣赏爱琴海滨皮衣走秀。" },
        { day: "05", city: "库萨达斯 ✈ 伊斯坦布尔", theme: "圣索菲亚 · 换装晚宴", content: "飞返伊城。深度入内圣索菲亚大教堂与蓝色清真寺。傍晚临 Grace Rooftop换上传统服饰，享用奥斯曼晚宴。" },
        { day: "06", city: "博斯普鲁斯海峡 · 返程", theme: "海峡巡航 · 告别晚餐", content: "乘船巡游海峡，远眺奥斯曼宫殿。参观多玛巴切新皇宫。登恰姆利卡山品味土耳其咖啡后送机。" }
      ],
      meals_label: "餐饮安排",
      hotel_label: "入住参考",
      fee_title: "费用说明",
      included_title: "费用包含",
      included_list: [
        "内陆段机票含税 (TK/AJ)",
        "5 晚精品 5 星及特色洞穴酒店",
        "专属持证中文导游及资深司机",
        "景点首道门票、光影博物馆门票",
        "每日精选午/晚餐（含屋顶晚宴）",
        "赠送：MADO冰淇淋、土耳其咖啡"
      ],
      excluded_title: "费用不含",
      excluded_list: [
        "中国往返土耳其国际大交通",
        "热气球飞行体验 (约 USD 250)",
        "司导小费 (建议 USD 5-10/天)",
        "电子签证费及个人消费"
      ],
      footer_cta: "开启您的圣迹之旅",
      sticky_cta: "立即预约顾问"
    },
    itinerary_s2: {
      badge: "S2 线路 · 全景文化",
      title: "爱琴海至安纳托利亚",
      subtitle: "土耳其 8 日全景文化之旅",
      description: "高质量双飞精品小团 · 深度文化体验 · 纯玩",
      cta_consult: "立即咨询",
      cta_plan: "获取方案",
      images: {
        coverImage: "https://images.unsplash.com/photo-1596093145026-f6af675846c7?q=80&w=2148&auto=format&fit=crop",
        heroImage: "https://images.unsplash.com/photo-1689130033373-2773b6029aea?q=80&w=2148&auto=format&fit=crop",
        cardImage: "https://images.unsplash.com/photo-1697457661409-0adc99b64647?q=80&w=2340&auto=format&fit=crop",
        day1Image: "https://images.unsplash.com/photo-1665051153829-82fc1acb59e6?q=80&w=2340&auto=format&fit=crop",
        day2Image: "https://images.unsplash.com/photo-1708251088223-e56cd382e8c6?q=80&w=2832&auto=format&fit=crop",
        day3Image: "https://images.unsplash.com/photo-1686428007573-f4a91f2d8bd0?q=80&w=2340&auto=format&fit=crop",
        day4Image: "https://images.unsplash.com/photo-1632821629445-bdc26ce3ccf0?q=80&w=2340&auto=format&fit=crop",
        day5Image: "https://images.unsplash.com/photo-1674715577456-49ae7a6945a8?q=80&w=2340&auto=format&fit=crop",
        day6Image: "https://images.unsplash.com/photo-1643354812958-b648b92dc6c5?q=80&w=2340&auto=format&fit=crop",
        day7Image: "https://images.unsplash.com/photo-1680204412403-73110934f5aa?q=80&w=2340&auto=format&fit=crop",
        day8Image: "https://images.unsplash.com/photo-1624786712432-e021fdf57c48?q=80&w=2832&auto=format&fit=crop"
      },
      audience_title: "这款行程，是否正是您所寻找的？",
      audience_list: [
        "追求极致公路旅行体验，渴望驰骋 D400 最美沿海公路",
        "深度人文爱好者，希望一次性打卡以弗所、棉花堡、阿斯潘多斯等古迹",
        "想在费特希耶挑战滑翔伞，在卡帕多奇亚漫步月球地貌",
        "不愿长途拉车，坚持安排内陆双飞（伊城-伊兹密尔，卡帕-伊城）",
        "坚持 100% 纯玩，拒绝强制购物，追求高品质 5 星住宿体验"
      ],
      highlights_title: "行程核心亮点",
      highlights: [
        { title: "D400 最美公路", desc: "驰骋在全球著名的 D400 沿海公路，穿越地中海与爱琴海的交界。" },
        { title: "以弗所古城", desc: "步入地中海东部保存最完好的古罗马城市，探寻塞尔苏斯图书馆的震撼。" },
        { title: "棉花堡钙华池", desc: "在如雪般的白色石灰华阶阶梯中行走，浸泡在跨越千年的罗马温泉中。" },
        { title: "费特希耶死海", desc: "探访厄吕代尼兹蓝礁湖，在湛蓝剔透的地中海水域享受度假时光。" },
        { title: "内陆双飞接驳", desc: "安排伊斯坦布尔往返内陆的两段飞行，省下 20 小时拉车时间用于游玩。" },
        { title: "精品洞穴酒店", desc: "在卡帕多奇亚入住特色精品洞穴酒店，深度体验安纳托利亚荒野美学。" }
      ],
      table_title: "游程简表",
      table_mobile_hint: "← 左右滑动查看完整表格 →",
      table_headers: { day: "天数", plan: "行程", meals: "早/中/晚", hotel: "住宿参考" },
      schedule: [
        { day: "D1", plan: "伊斯坦布尔 ✈ 伊兹密尔 → 库萨达斯", b: "/", l: "含", d: "含", hotel: "库萨达斯 5*" },
        { day: "D2", plan: "以弗所古城 → 棉花堡", b: "含", l: "含", d: "含", hotel: "棉花堡温泉 5*" },
        { day: "D3", plan: "棉花堡 → 费特希耶", b: "含", l: "含", d: "含", hotel: "费特希耶 5*" },
        { day: "D4", plan: "D400公路 → 卡什 → 安塔利亚", b: "含", l: "含", d: "含", hotel: "安塔利亚 5*" },
        { day: "D5", plan: "阿斯潘多斯 → 孔亚", b: "含", l: "含", d: "含", hotel: "孔亚 5*" },
        { day: "D6", plan: "孔亚 → 卡帕多奇亚", b: "含", l: "含", d: "含", hotel: "精品洞穴酒店" },
        { day: "D7", plan: "卡帕多奇亚 ✈ 伊斯坦布尔", b: "含", l: "含", d: "含", hotel: "伊斯坦布尔 5*" },
        { day: "D8", plan: "伊斯坦布尔经典巡礼", b: "含", l: "含", d: "/", hotel: "送机返程" }
      ],
      daily_details: [
        { day: "01", city: "伊斯坦布尔 ✈ 伊兹密尔 → 库萨达斯", theme: "爱琴海落日", content: "抵达伊城后转机飞往伊兹密尔，随后前往库萨达斯海滨小镇，感受浪漫日落。" },
        { day: "02", city: "以弗所古城 → 棉花堡", theme: "圣迹遗存与白色石林", content: "参观以弗所大剧场与图书馆。下午前往棉花堡，游览洁白钙华池与希拉波利斯古城。" },
        { day: "03", city: "棉花堡 → 费特希耶", theme: "地中海蓝礁湖", content: "前往地中海度假胜地费特希耶，探访著名的厄吕代尼兹死海滩，享受湛蓝海域。" },
        { day: "04", city: "费特希耶 → 卡什 → 安塔利亚", theme: "D400公路巡礼", content: "驱车驰骋 D400 最美沿海公路。停留卡普塔什海滩与希腊风情卡什小镇，抵达安塔利亚。" },
        { day: "05", city: "阿斯潘多斯 → 孔亚", theme: "罗马回响", content: "参观阿斯潘多斯圆形剧场，欣赏声学奇迹。随后翻越山脉前往旋转舞故乡孔亚。" },
        { day: "06", city: "孔亚 → 卡帕多奇亚", theme: "古丝绸之路", content: "参观梅夫拉纳博物馆。沿着丝路古道经苏丹大驿站抵达奇幻卡帕多奇亚，入住洞穴酒店。" },
        { day: "07", city: "卡帕多奇亚 ✈ 伊斯坦布尔", theme: "月球地貌", content: "可选晨间热气球。参观格雷梅露天博物馆及地下城。傍晚飞返伊斯坦布尔。" },
        { day: "08", city: "伊斯坦布尔巡礼", theme: "帝都辉煌终章", content: "乘游船巡航博斯普鲁斯海峡，参观圣索菲亚大教堂，漫步大巴扎选购手信。" }
      ],
      meals_label: "餐饮安排",
      hotel_label: "住宿参考",
      fee_title: "费用说明",
      included_title: "费用包含",
      included_list: ["土耳其内陆两段机票含税", "全程 5 星及精品洞穴酒店", "持证中文导游及资深司机", "行程所列景点大门票", "每日精选午晚餐"],
      excluded_title: "费用不含",
      excluded_list: ["国际段往返机票", "热气球/滑翔伞等自费项目", "个人消费及司导小费"],
      footer_cta: "开启您的全景之旅",
      sticky_cta: "立即预约顾问"
    },
    itinerary_s4: {
      meta: {
        code: "S4",
        seriesTitle: "S 系列 · 舒适小团｜爱琴海 - 地中海 - 安纳托利亚 - 特罗亚 10 日全景文化之旅",
        title: "土耳其 10 日全景文化之旅",
        subtitle: "Türkiye 历史｜圣迹｜真实",
        tagline: "团型定位：舒适小团｜全程中文领队｜无强制消费｜纯玩｜地貌体验",
        transport: "全程豪华空调旅游大巴（含 WIFI、USB 充电、宽敞座椅）",
        hotels: "全程 5 星及以上酒店或特色洞穴/温泉酒店",
        transport_label: "交通方式",
        hotels_label: "住宿标准",
        price_label: "参考价格",
        price: "8999",
        meals_label: "餐饮安排",
        stay_label: "入住参考",
        footer_cta_title: "开启您的 10 日全景文化之旅",
        cta_consult: "立即咨询专家",
        cta_plan: "获取详细方案",
        sticky_cta: "立即预约顾问"
      },
      hero: {
        badge: "S4 线路 · 全景文化",
        title: "土耳其 10 日全景文化之旅",
        subtitle: "爱琴海至安纳托利亚的史诗画卷",
        ctaPrimary: "立即咨询",
        ctaSecondary: "获取方案",
        image: "https://images.unsplash.com/photo-1689130033373-2773b6029aea?q=80&w=2148&auto=format&fit=crop"
      },
      highlights: {
        title: "核心亮点",
        items: [
          "特罗亚木马 & 古城遗址 + 亚历山大特洛阿斯古港 + 1915 恰纳卡莱大桥（世界主跨最长悬索桥）",
          "博斯普鲁斯海峡游船 + 圣索菲亚 + 蓝色清真寺 + 以弗所 + 棉花堡 + 蓝礁湖 + D400 沿海公路 + 热气球 + 地貌体验"
        ],
      },
      summaryTable: {
        title: "行程简表",
        columns: ["天数", "行程安排", "早餐", "中餐", "晚餐", "住宿参考"],
        rows: [
          { day: "D1", route: "伊斯坦布尔 → 特罗亚 → 恰纳卡莱", breakfast: "/", lunch: "含", dinner: "含", hotel: "恰纳卡莱 5★" },
          { day: "D2", route: "恰纳卡莱 → 阿拉恰特 → 伊兹密尔钟楼 → 库萨达斯", breakfast: "酒店", lunch: "含", dinner: "含", hotel: "库萨达斯 5★" },
          { day: "D3", route: "以弗所古城 → 棉花堡", breakfast: "酒店", lunch: "含", dinner: "含", hotel: "棉花堡 5★" },
          { day: "D4", route: "棉花堡 → 费特希耶", breakfast: "酒店", lunch: "含", dinner: "含", hotel: "费特希耶 5★" },
          { day: "D5", route: "费特希耶 → Kaputaş 海滩 → 卡什 → 安塔利亚", breakfast: "酒店", lunch: "含", dinner: "含", hotel: "安塔利亚 5★" },
          { day: "D6", route: "安塔利亚 → 阿斯潘多斯 → 孔亚", breakfast: "酒店", lunch: "含", dinner: "含", hotel: "孔亚 5★" },
          { day: "D7", route: "孔亚 → 卡帕多奇亚", breakfast: "酒店", lunch: "含", dinner: "含", hotel: "卡帕 5★/洞穴" },
          { day: "D8", route: "卡帕多奇亚全天深度体验", breakfast: "酒店", lunch: "含", dinner: "含", hotel: "卡帕 5★/洞穴" },
          { day: "D9", route: "卡帕多奇亚 → 图兹盐湖 → 伊斯坦布尔", breakfast: "酒店", lunch: "含", dinner: "含", hotel: "伊城 5★" },
          { day: "D10", route: "伊斯坦布尔经典一日 → 送机返程", breakfast: "酒店", lunch: "含", dinner: "含", hotel: "/" }
        ]
      },
      sections: {
        title: "详细行程",
        days: [
          {
            day: "01",
            title: "伊斯坦布尔 → 特罗亚 → 恰纳卡莱",
            stay: "恰纳卡莱 5 星酒店",
            image: "https://images.unsplash.com/photo-1687706222092-b6545828217d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0",
            paragraphs: [
              "清晨从伊斯坦布尔出发，沿马尔马拉海西行，开启史诗之旅。途经世界主跨最长的 【1915 恰纳卡莱大桥】，横跨达达尼尔海峡，气势恢宏。",
              "抵达联合国教科科组织遗产地 【特罗亚古城】，探访荷马《伊利亚特》中“木马屠城”的发生地——九层叠压的考古遗址跨越四千年文明。",
              "随后前往鲜为人知却意义非凡的 【亚历山大特洛阿斯古城】：亚历山大大帝所建古港，更是使徒保罗启航赴欧的出发地。"
            ],
            meals: { breakfast: "/", lunch: "含", dinner: "含" }
          },
          {
            day: "02",
            title: "恰纳卡莱 → 阿拉恰特 → 伊兹密尔钟楼 → 库萨达斯",
            stay: "库萨达斯 5 星酒店",
            image: "https://images.unsplash.com/photo-1701428588034-5893b2512a68?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0",
            paragraphs: [
              "今日今日南下爱琴海腹地.首先造访文艺小镇 【阿拉恰特】，蓝窗白墙的希腊式石屋、鹅卵石街道与帆板海滩构成地中海画卷。",
              "随后抵达土耳其第三大城市 【伊兹密尔】，参观 1901 年建成的 【钟楼】 与库纳克广场，面朝海湾，城市活力铺面而来。",
              "随后安排 【土耳其皮衣时尚秀】（自由参观）。傍晚抵达度假胜地库萨达斯，夜宿海滨五星酒店。"
            ],
            meals: { breakfast: "酒店", lunch: "含", dinner: "含" }
          },
          {
            day: "03",
            title: "以弗所古城 → 棉花堡",
            stay: "棉花堡 5 星温泉酒店",
            image: "https://images.unsplash.com/photo-1433854471391-5603c019de62?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0",
            paragraphs: [
              "全天聚焦古典文明巅峰。深入 【以弗所古城】，漫步罗马大道，仰望塞尔苏斯图书馆残壁，在巨型大剧场遥想古城盛况。",
              "随后进入 【以弗所体验博物馆】，通过沉浸式光影“穿越”古城盛景。",
              "下午驱车抵达世界双遗产地 【棉花堡】，赤足踏过乳白钙华梯田；毗邻的 【希拉波利斯古城】 曾是古罗马温泉疗养中心。"
            ],
            meals: { breakfast: "酒店", lunch: "含", dinner: "含" }
          },
          {
            day: "04",
            title: "棉花堡 → 费特希耶",
            stay: "费特希耶 5 星酒店",
            image: "https://images.unsplash.com/photo-1498222954553-93fc8d1941da?q=80&w=2346&auto=format&fit=crop&ixlib=rb-4.1.0",
            paragraphs: [
              "早餐后继续南下，穿越托罗斯山脉抵达土耳其南部明珠 【费特希耶】。",
              "首站打卡 【厄吕代尼兹蓝礁湖】，果冻般湛蓝海水被群山环抱，是浮潜与日光浴天堂。",
              "随后漫步 【费特希耶老城区 Paspatur】，街巷中藏着奥斯曼木屋与百年城门，咖啡馆铺香。"
            ],
            bullets: ["温馨提示：费特希耶为世界顶级滑翔伞胜地，可自费体验从巴巴达格山顶飞跃蓝海。"],
            meals: { breakfast: "酒店", lunch: "含", dinner: "含" }
          },
          {
            day: "05",
            title: "费特希耶 → Kaputaş 海滩 → 卡什 → 安塔利亚",
            stay: "安塔利亚 5 星酒店",
            image: "https://images.unsplash.com/photo-1697457661409-0adc99b64647?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0",
            paragraphs: [
              "今日驰骋被誉为“土耳其 1 号公路”的 【D400 沿海景观大道】。",
              "途中打卡网红秘境 【Kaputaş 海滩】，隐匿于悬崖之间的果冻蓝海湾。停留宁静渔村 【卡什小镇】，感受石屋错落的慢生活。",
              "下午抵达地中海明珠 【安塔利亚】，深入 【卡勒伊奇老城区】 漫步石板小巷，夜宿海滨酒店。"
            ],
            meals: { breakfast: "酒店", lunch: "含", dinner: "含" }
          },
          {
            day: "06",
            title: "安塔利亚 → Aspendos → Konya",
            stay: "孔亚 5 星酒店",
            image: "https://images.unsplash.com/photo-1724249367218-819f3eb2f9f7?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0",
            paragraphs: [
              "探访 【阿斯潘多斯古剧场】，保存完好、声学效果极佳，被誉为“古代声学奇迹”。",
              "随后前往苏非主义精神中心 【孔亚】，途中外观 【苏丹大驿站】（13 世纪塞尔柱商旅遗迹）。",
              "下午参访 【梅夫拉纳博物馆】，馆内沉列旋转舞法衣、手稿与玫瑰花园，静谧中流淌哲思。"
            ],
            meals: { breakfast: "酒店", lunch: "含", dinner: "含" }
          },
          {
            day: "07",
            title: "孔亚 → 卡帕多奇亚",
            stay: "卡帕 5 星/洞穴酒店",
            image: "https://images.unsplash.com/photo-1712569838375-27b4eb58d05f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0",
            paragraphs: [
              "进入奇幻地貌腹地——卡帕多奇亚.游览 【泽尔韦山谷 & 帕夏贝】，穿梭于林立的“精灵烟囱”中。",
              "随后参观 【陶艺工坊】，观看匠人以红河黏土手工拉坯.漫步 【阿瓦诺斯小镇】 感受手作之都的慢生活。",
              "行程尾声特别赠送品尝国宝级甜品 【MADO 土耳其冰淇淋】.夜宿特色洞穴酒店。"
            ],
            meals: { breakfast: "酒店", lunch: "含", dinner: "含" }
          },
          {
            day: "08",
            title: "卡帕多奇亚全天深度体验",
            stay: "卡帕 5 星/洞穴酒店",
            image: "https://images.unsplash.com/photo-1569530593439-c5a3adda5204?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0",
            paragraphs: [
              "清晨可自费参加著名的 【热气球之旅】，在晨曦中俯瞰烟囱群与山谷云海。",
              "上午深度探访 【格莱梅露天博物馆】：拜占庭时期洞穴教堂群，湿壁画虽经千年风化，仍可见圣像庄严。",
              "下午自由活动：可自选 ATV 四轮摩托穿越玫瑰谷，或在酒店露台静享高原安宁。"
            ],
            meals: { breakfast: "酒店", lunch: "含", dinner: "含" }
          },
          {
            day: "09",
            title: "卡帕多奇亚 → 图兹盐湖 → 伊斯坦布尔",
            stay: "伊斯坦布尔 5 星酒店",
            image: "https://images.unsplash.com/photo-1587506873457-b6d7d1cdad18?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0",
            paragraphs: [
              "今日踏上返程，穿越安纳托利亚高原.特别停靠 【图兹盐湖】（Tuz Gölü）：海拔约 925 米、含盐量高。",
              "浅水季节如“天空之镜”，纯白盐滩铺展如雪原，空灵超现实，适合拍摄大片。",
              "傍晚抵达伊斯坦布尔，入住市中心五星酒店。"
            ],
            meals: { breakfast: "酒店", lunch: "含", dinner: "含" }
          },
          {
            day: "10",
            title: "伊斯坦布尔 classic 一日 → 送机返程",
            stay: "/",
            image: "https://images.unsplash.com/photo-1608677662924-8b83590f474e?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0",
            paragraphs: [
              "纵览千年帝都精华：深入圣索菲亚大教堂与蓝色清真寺.漫步苏丹艾哈迈德广场。",
              "乘船游览博斯普鲁斯海峡，远眺多尔玛巴赫切宫.细品非遗土耳其咖啡.晚餐后专车送机。"
            ],
            bullets: ["圣索菲亚大教堂", "蓝色清真寺", "海峡巡航", "多尔玛巴赫切宫", "土耳其咖啡体验"],
            meals: { breakfast: "酒店", lunch: "含", dinner: "含" }
          }
        ]
      },
      notices: {
        title: "重要提示",
        items: [
          "闭馆说明：圣索菲亚每周五维护；多尔玛巴赫切宫周一闭馆；托普卡帕宫周二闭馆.顺序将视闭馆调整。",
          "自费项目：热气球、滑翔伞等高空项目属自愿自费，受天气影响较大。",
          "购物说明：全程无强制购物；皮衣店、陶艺店等为文化体验环节。",
          "不可抗力：行程时间可能因航班、天气、路况等因素调整。",
          "酒店说明：如遇以上酒店无房，则更换为同等级酒店.洞穴酒店房型大小不一。",
          "语言支持：恩途为每团配备资深持证中文导游。"
        ]
      }
    },
    itinerary_s5: {
      meta: {
        code: "S5",
        seriesTitle: "S5 系列 · 全地貌深度体验团｜土耳其 8 日全景文化深度之旅",
        title: "S5 线路 · 特洛伊与精灵之路",
        subtitle: "Türkiye 历史｜圣迹｜真实",
        tagline: "全地貌深度体验团｜全程中文领队｜100% 纯玩｜无强制购物",
        transport: "全程豪华空调旅游大巴（配备 WIFI、USB 充电及宽敞座椅），深入铁路与航班未及之境，丈量安纳托利亚腹地。",
        hotels: "全程 5 星级标准酒店及特色遗产/洞穴酒店",
        transport_label: "交通原则",
        hotels_label: "住宿标准",
        price_label: "参考价格",
        price: "8999",
        meals_label: "餐饮安排",
        stay_label: "入住参考",
        footer_cta_title: "开启您的特洛伊与精灵之路",
        cta_consult: "立即咨询专家",
        cta_plan: "获取详细方案",
        sticky_cta: "立即预约顾问"
      },
      hero: {
        badge: "S5 线路 · 深度全景",
        title: "S5 线路 · 特洛伊与精灵之路",
        subtitle: "土耳其 8 日全景文化深度之旅",
        ctaPrimary: "立即咨询",
        ctaSecondary: "获取方案",
        image: "https://images.unsplash.com/photo-1687706222092-b6545828217d?q=80&w=2340&auto=format&fit=crop"
      },
      highlights: {
        title: "行程核心亮点",
        items: [
          "特罗亚木马与古城遗址：步入《荷马史诗》的传奇发生地，亲历九层叠压、跨越四千年的文明遗迹。",
          "尼西亚古城（伊兹尼克）：探访基督教历史的关键节点，见证第一次尼西亚大公会议的历史遗踪。",
          "恰纳卡莱海峡 & 1915 跨海大桥：于古老航道之上跨越欧亚分界，见证神话与现代工程奇迹的交汇。",
          "埃尔吉迪尔湖秘境小镇：驻足安纳托利亚高原的纯净之眸，在湖光山色间静享未被惊扰的慢时光。",
          "梅夫拉纳博物馆：走进苏菲主义的精神殿堂，在旋转舞地领略生命的禅意与宁静。",
          "卡帕多奇亚深度地貌体验：穿梭于凿石而建的隐秘教堂与精灵烟囱，步入超现实的荒野迷宫。",
          "安卡拉国父陵：仰望现代土耳其的精神丰碑，深度回溯共和国诞年的历史叙事。"
        ]
      },
      summaryTable: {
        title: "行程简表",
        columns: ["天数", "行程安排", "早", "中", "晚", "住宿参考"],
        rows: [
          { day: "D1", route: "伊斯坦布尔｜帝国初醒，海天之间的千年对望", breakfast: "/", lunch: "含", dinner: "含", hotel: "伊斯坦布尔 5★" },
          { day: "D2", route: "伊斯坦布尔→恰纳卡莱｜木马之下，听见荷马的回声", breakfast: "酒店", lunch: "含", dinner: "含", hotel: "恰纳卡莱 5★" },
          { day: "D3", route: "恰纳卡莱→伊兹密尔｜钟楼之下，爱琴海的呼吸", breakfast: "酒店", lunch: "含", dinner: "含", hotel: "伊兹密尔 5★" },
          { day: "D4", route: "伊兹密尔→棉花堡｜踏过乳白阶梯，疗愈于大地之泉", breakfast: "酒店", lunch: "含", dinner: "含", hotel: "棉花堡 5★" },
          { day: "D5", route: "棉花堡→埃尔吉迪尔湖→孔亚｜湖光山色，苏菲之心", breakfast: "酒店", lunch: "含", dinner: "含", hotel: "孔亚 5★" },
          { day: "D6", route: "孔亚→格雷梅｜凿石为家，大地上的童话", breakfast: "酒店", lunch: "含", dinner: "含", hotel: "卡帕 5★/特色洞穴" },
          { day: "D7", route: "格雷梅→安卡拉｜热气球破晓，国父目光所及", breakfast: "酒店", lunch: "含", dinner: "含", hotel: "安塔利亚 5★" },
          { day: "D8", route: "安卡拉→伊兹尼克 → 伊斯坦布尔机场｜尼西亚的湖，巴拉特的彩窗", breakfast: "酒店", lunch: "含", dinner: "含", hotel: "/" }
        ]
      },
      sections: {
        title: "行程安排详解",
        days: [
          {
            day: "01",
            title: "伊斯坦布尔｜帝国初醒，海天之间的千年对望",
            stay: "伊斯坦布尔 5 星酒店",
            image: "https://images.unsplash.com/photo-1636021597151-cc28dacd915c?q=80&w=2340&auto=format&fit=crop",
            paragraphs: [
              "抵达千年帝都伊斯坦布尔.游览奥斯曼帝国权力中心【托普卡帕宫】（外观），随后参观见证文明叠压的【圣索菲亚清真寺】（外观）。",
              "入内参观【蓝色清真寺】，欣赏伊兹尼克瓷砖艺术.途经【古罗马竞技场】遗址，傍晚乘船游览【博斯普鲁斯海峡】，欣赏欧亚两岸城市景观。"
            ],
            meals: { breakfast: "/", lunch: "含", dinner: "含" }
          },
          {
            day: "02",
            title: "伊斯坦布尔 → 恰纳卡莱｜木马之下，听见荷马的回声",
            stay: "恰纳卡莱 5 星酒店",
            image: "https://images.unsplash.com/photo-1716274644458-d30c57acdeb4?q=80&w=1354&auto=format&fit=crop&ixlib=rb-4.1.0",
            paragraphs: [
              "今日今日跨越【1915 恰纳卡莱大桥】，抵达特洛伊地区.入内参观【特洛伊古城遗址】，深度解析《荷马史诗》与真实的战争考古。",
              "随后前往【亚历山大特洛阿斯古城】，寻访亚历山大大帝所建古港，此处亦是早期基督教传播的重要历史节点.傍晚入住海峡沿岸酒店。"
            ],
            meals: { breakfast: "酒店", lunch: "含", dinner: "含" }
          },
          {
            day: "03",
            title: "恰纳卡莱 → 伊兹密尔｜钟楼之下，爱琴海的呼吸",
            stay: "Izmir 5-Star Hotel",
            image: "https://images.unsplash.com/photo-1701428588034-5893b2512a68?q=80&w=2340&auto=format&fit=crop",
            paragraphs: [
              "南下进入爱琴海地区.抵达后游览伊兹密尔市区地标【库纳克广场】与【钟楼】，感受地中海城市的活力气息。",
              "随后前往世界保存最完整的古罗马城市之一【以弗所古城】（入内），漫步大理石大道，仰望塞尔苏斯图书馆及巨型大剧场遗迹。"
            ],
            meals: { breakfast: "酒店", lunch: "含", dinner: "含" }
          },
          {
            day: "04",
            title: "伊兹密尔 → 棉花堡｜踏过乳白阶梯，疗愈于大地之泉",
            stay: "棉花堡 5 星温泉酒店",
            image: "https://images.unsplash.com/photo-1433854471391-5603c019de62?q=80&w=2340&auto=format&fit=crop",
            paragraphs: [
              "前往世界自然与文化双遗产地【棉花堡】.入内参观古罗马疗养胜地【希拉波利斯古城】遗址。",
              "随后赤足行走于乳白色的钙华梯田，感受天然温泉在层叠石阶间流淌的独特自然奇观.夜宿温泉酒店，洗去旅途疲惫。"
            ],
            meals: { breakfast: "酒店", lunch: "含", dinner: "含" }
          },
          {
            day: "05",
            title: "棉花堡 → 埃尔吉迪尔湖 → 孔亚｜湖光山色，苏菲之心",
            stay: "孔亚 5 星酒店",
            image: "https://images.unsplash.com/photo-1680465807377-c83db592a2fc?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0",
            paragraphs: [
              "今日今日穿越安纳托利亚高原，抵达高原上的璀璨明珠【埃尔吉迪尔湖】.湖畔漫步，感受未被惊扰的小镇慢时光。",
              "午后继续前往苏非派圣地孔亚.入内参观【梅夫拉纳博物馆】，深度了解苏菲主义哲学与极富禅意的旋转舞文化。"
            ],
            meals: { breakfast: "酒店", lunch: "含", dinner: "含" }
          },
          {
            day: "06",
            title: "孔亚 → 格雷梅｜凿石为家，大地上的童话",
            stay: "卡帕多奇亚 5 星 / 洞穴酒店",
            image: "https://images.unsplash.com/photo-1712569838375-27b4eb58d05f?q=80&w=2340&auto=format&fit=crop",
            paragraphs: [
              "沿着古丝绸之路前行，途中外观 13 世纪塞尔柱商旅奇迹【苏丹哈尼驿站】.抵达卡帕多奇亚核心区。",
              "入内参观【格莱梅露天博物馆】洞穴教堂群，惊叹于凿石而建的信仰空间.游览【鸽子谷】与【帕夏贝精灵烟囱】.特别安排阿瓦诺斯红河陶艺体验。"
            ],
            meals: { breakfast: "酒店", lunch: "含", dinner: "含" }
          },
          {
            day: "07",
            title: "格雷梅 → 安卡拉 | 气球之晨 · 国父目光所及",
            stay: "Ankara 5-Star Hotel",
            image: "https://images.unsplash.com/photo-1569530593439-c5a3adda5204?q=80&w=2340&auto=format&fit=crop",
            paragraphs: [
              "可选晨间热气球飞行.登临乌奇希萨尔城堡俯览峡谷全景.",
              "前往安卡拉，参访国父陵，深度回溯共和国诞生的历史叙事。"
            ],
            meals: { breakfast: "酒店", lunch: "含", dinner: "含" }
          },
          {
            day: "08",
            title: "安卡拉 → 尼西亚 → 伊斯坦布尔 | 信仰圣湖",
            stay: "送机",
            image: "https://images.unsplash.com/photo-1608677662924-8b83590f474e?q=80&w=2340&auto=format&fit=crop",
            paragraphs: [
              "参访尼西亚古城（伊兹尼克），游览古城墙与尼西亚圣索菲亚.",
              "在伊兹尼克湖畔小憩后返回伊斯坦布尔，送往机场。"
            ],
            meals: { breakfast: "酒店", lunch: "含", dinner: "含" }
          }
        ]
      },
      notices: {
        title: "重要提示",
        items: [
          "景点安排：圣索菲亚清真寺周五可能因宗教活动调整；托普卡帕宫周二闭馆；多尔玛巴赫切宫周一闭馆.如遇闭馆将调整顺序或更换景点。",
          "自费项目：热气球、滑翔伞等高空项目属自愿自费，受实时天气及安全条件严格限制。",
          "文化体验：全程拒绝强制购物，皮衣展示与陶艺工坊仅作为土耳其特色文化展示环节。",
          "不可抗力：行程顺序可能因航班变动、极端天气或道路维修等不可抗力因素，在保障服务标准前提下进行灵活调整。",
          "酒店说明：如遇旺季酒店满房，恩途将安排同等级 5 星酒店确保入住品质。"
        ]
      }
    },
    itinerary_z1: {
      meta: {
        code: "Z1",
        seriesTitle: "Z 系列 · 圣经历史深度巡礼｜土耳其 10 日五星全景文化信仰之旅",
        title: "Z1 线路 · 启示录七教会与圣徒之径",
        subtitle: "追溯特罗亚异象，步入卡帕多奇亚奇迹",
        tagline: "启示录七教会全景溯源｜使徒脚踪实地探访｜全程 5 星标准｜100% 纯玩无购物",
        transport: "全程豪华空调旅游大巴（配备 WIFI 与 USB 充电），实地衔接欧亚古城与信仰节点。",
        hotels: "全程 5 星级标准酒店及卡帕多奇亚特色洞穴酒店",
        transport_label: "交通原则",
        hotels_label: "住宿标准",
        price_label: "参考价格",
        price: "10999",
        meals_label: "餐饮安排",
        stay_label: "入住参考",
        footer_cta_title: "开启启示录七教会深度巡礼",
        cta_consult: "立即咨询专家",
        cta_plan: "获取详细方案",
        sticky_cta: "立即预约顾问"
      },
      highlights: {
        title: "行程核心亮点",
        items: [
          { title: "启示录七教会全境巡礼", desc: "完整覆盖以弗所、士每拿、别加摩、推雅推喇、撒狄、非拉铁非及老底嘉，一站式解构新约历史地理版图。" },
          { title: "使徒行迹历史复原", desc: "重访安提阿、歌罗西、亚历山大特洛阿斯，实地还原早期文明在小亚细亚扩展文明边界的关键动线。" },
          { title: "卡帕多奇亚深度地貌", desc: "入内探访凿石而建的地下城与洞穴教堂，全景式体验安纳托利亚腹地的荒野美学与生存奇迹。" },
          { title: "特洛伊史诗考古现场", desc: "跨越达达尼尔海峡，步入跨越四千年的文明遗迹，见证荷马史诗与考古现实的碰撞。" },
          { title: "君士坦丁堡文明纵览", desc: "深度巡礼圣索菲亚与博斯普鲁斯海峡，在欧亚交汇点博览拜占庭与奥斯曼的帝国叙事。" },
          { title: "全程五星标杆住宿", desc: "精选全程 5 星级标准酒店及精品洞穴酒店，在深度文化探索中保障卓越的旅居质感。" },
          { title: "100% 纯净精品标准", desc: "坚持纯玩无购物的高端地接承诺，由资深历史专家提供全程专业级行程讲解服务。" },
          { title: "历史枢纽深度解析", desc: "聚焦尼西亚、孔亚等历史交汇节点，深度挖掘安纳托利亚文明叠压的深刻逻辑。" }
        ]
      },
      summaryTable: {
        title: "游程简表（含餐饮安排）",
        columns: ["天数", "行程安排", "早", "中", "晚", "住宿参考"],
        rows: [
          { day: "D1", route: "抵达伊斯坦布尔－苏丹艾哈迈德历史区", breakfast: "/", lunch: "含", dinner: "含", hotel: "伊斯坦布尔 5★" },
          { day: "D2", route: "鸽子谷－帕夏贝精灵烟囱－骆驼岩", breakfast: "酒店用", lunch: "含", dinner: "含", hotel: "特色洞穴酒店" },
          { day: "D3", route: "格雷梅露天博物馆－乌奇希萨城堡－阿瓦诺斯", breakfast: "酒店用", lunch: "含", dinner: "含", hotel: "特色洞穴酒店" },
          { day: "D4", route: "凯马克勒地下城－苏丹驿站－科尼亚梅夫拉纳", breakfast: "酒店用", lunch: "含", dinner: "含", hotel: "科尼亚 5★" },
          { day: "D5", route: "安提阿古城－歌罗西古城－老底嘉古城", breakfast: "酒店用", lunch: "含", dinner: "含", hotel: "棉花堡温泉 5★" },
          { day: "D6", route: "希拉波利斯－非拉铁非－撒狄－推雅推喇", breakfast: "酒店用", lunch: "含", dinner: "含", hotel: "伊兹密尔 5★" },
          { day: "D7", route: "以弗所古城－圣约翰大教堂－士每拿古城", breakfast: "酒店用", lunch: "含", dinner: "含", hotel: "伊兹密尔 5★" },
          { day: "D8", route: "别加摩卫城－特洛伊木马－亚历山大特洛阿斯", breakfast: "酒店用", lunch: "含", dinner: "含", hotel: "恰纳卡莱 5★" },
          { day: "D9", route: "圣索菲亚大教堂－博斯普鲁斯海峡落日巡航", breakfast: "酒店用", lunch: "含", dinner: "含", hotel: "伊斯坦布尔 5★" },
          { day: "D10", route: "科拉教堂－于斯屈达尔眺望－送机返程", breakfast: "酒店用", lunch: "含", dinner: "/", hotel: "返程送机" }
        ]
      },
      sections: {
        title: "行程安排详解",
        days: [
          { day: "01", title: "抵达伊斯坦布尔｜帝国文明的千年对望", stay: "伊斯坦布尔 5 星酒店", image: "https://images.unsplash.com/photo-1650610854382-ed6dc12f9b57", paragraphs: ["抵达千年帝都伊斯坦布尔，由专属司导迎接并开启私人接驳.深度巡礼苏丹艾哈迈德历史区，实地解构拜占庭遗韵与奥斯曼辉煌在方寸之间的建筑对话.在这座欧亚交汇的文明中心，开启溯源人类历史演进的史诗序章。"], meals: { breakfast: "/", lunch: "含", dinner: "含" } },
          { day: "02", title: "卡帕多奇亚｜大地余音，火山凝灰岩的地貌演化", stay: "特色洞穴酒店", image: "https://images.unsplash.com/photo-1752865224513-17e6afc1e6c5", paragraphs: ["飞抵安纳托利亚腹地.实地探访鸽子谷与帕夏贝，剖析由数百万年火山喷发与自然侵蚀共同锻造的“精灵烟囱”地貌.驻足德夫伦特山谷，在状如骆驼的天然岩刻中感悟自然伟力对地理空间的极致塑造，领略荒野环境下的超现实美学。"], meals: { breakfast: "酒店用", lunch: "含", dinner: "含" } },
          { day: "03", title: "格雷梅与乌奇希萨｜石窟圣迹，岩凿空间的信仰叙事", stay: "特色洞穴酒店", image: "https://images.unsplash.com/photo-1686257558166-a13a257b5dc1", paragraphs: ["深入联合国教科文组织遗产——格雷梅露天博物馆，探寻岩层之下保存完好的拜占庭岩窟教堂群及其珍贵湿壁画.登临区域制高点乌奇希萨尔城堡，俯瞰古代岩凿堡垒体系与类月地貌全景.随后造访陶艺之都阿瓦诺斯，解析自赫梯时期传承至今的红土拉坯技艺。"], meals: { breakfast: "酒店用", lunch: "含", dinner: "含" } },
          { day: "04", title: "地下城至孔亚｜深层避难所与苏菲主义精神原点", stay: "科尼亚 5 星酒店", image: "https://images.unsplash.com/photo-1675373181258-681d11e0e4c5", paragraphs: ["探访凯马克勒地下城，剖析早期文明在动荡岁月中构建的精密垂直防御体系.沿古丝绸之路西行，停留苏丹哈尼驿站，实地感知 13 世纪塞尔柱商旅贸易的壮阔脉络.抵达苏菲派圣地孔亚，参访梅夫拉纳博物馆，深入解析旋转舞背后的生命哲学与静谧叙事。"], meals: { breakfast: "酒店用", lunch: "含", dinner: "含" } },
          { day: "05", title: "安提阿、歌罗西与老底嘉｜使徒脚踪与早期文明动线", stay: "棉花堡温泉 5 星酒店", image: "https://images.unsplash.com/photo-1718227973712-fa3c9b1fda6e", paragraphs: ["重访彼西底的安提阿与歌罗西遗址，实地复原早期使徒在小亚细亚扩展文明边界的关键动线.随后前往老底嘉古城，在宏大的剧场与街道遗迹中，探寻启示录中所记载的富庶之城在古典晚期的信仰变迁与历史印记。"], meals: { breakfast: "酒店用", lunch: "含", dinner: "含" } },
          { day: "06", title: "希拉波利斯至推雅推喇｜圣泉遗迹与启示录七教会巡礼", stay: "伊兹密尔 5 星酒店", image: "https://images.unsplash.com/photo-1728361328959-d30d8218e38b", paragraphs: ["巡礼希拉波利斯古城，在古罗马温泉疗养中心感受自然圣泉与历史遗存的交融.随后依次走访非拉铁非、撒狄与推雅推喇.作为启示录七教会的重要节点，通过实地考察 these古城遗址，深度解构其在安纳托利亚历史枢纽地位及精神信仰的演进逻辑。"], meals: { breakfast: "酒店用", lunch: "含", dinner: "含" } },
          { day: "07", title: "以弗所、圣约翰大教堂与士每拿｜古典文明巅峰与使徒足迹", stay: "伊兹密尔 5 星酒店", image: "https://images.unsplash.com/photo-1684214190982-f3506653f932", paragraphs: ["深度探访古典文明的瑰宝——以弗所古城，在塞尔苏斯图书馆与大剧场遗迹间，复原古罗马时期地中海东岸的繁荣图景.随后造访圣约翰大教堂，寻迹使徒晚年的宣教终点.抵达士每拿古城遗址，在现存的断壁残垣中解构启示录七教会中这座“受难之城”的信仰原点。"], meals: { breakfast: "酒店用", lunch: "含", dinner: "含" } },
          { day: "08", title: "别加摩、特罗亚与亚历山大特洛阿斯｜卫城叙事与史诗现场", stay: "恰纳卡莱 5 星酒店", image: "https://images.unsplash.com/photo-1715080271610-c177c424aa6d", paragraphs: ["登临别加摩卫城，考察山顶剧场与祭坛遗址，感悟帕加马王国的建筑美学.跨越达达尼尔海峡抵达特罗亚，在跨越四千年的九层考古叠压中，见证荷马史诗与历史现实的碰撞.随后停留亚历山大特洛阿斯古港，实地复原保罗在异象指引下由小亚细亚启航赴欧的历史性时刻。"], meals: { breakfast: "酒店用", lunch: "含", dinner: "含" } },
          { day: "09", title: "伊斯坦布尔｜文明叠压逻辑与海峡空间叙事", stay: "伊斯坦布尔 5 星酒店", image: "https://images.unsplash.com/photo-1605382628707-0aa0593fba19", paragraphs: ["步入圣索菲亚大教堂，深度解析其从拜占庭建筑巅峰向奥斯曼宗教空间转化的文明叠压逻辑.漫步居尔哈奈公园，感知昔日帝国花园的宁静脉络.傍晚乘船巡游博斯普鲁斯海峡，在欧亚大陆的几何交汇点，纵览两岸宫殿、要塞与现代城市构成的宏大空间叙事。"], meals: { breakfast: "酒店用", lunch: "含", dinner: "含" } },
          { day: "10", title: "拜占庭艺术瑰宝与海峡闭环｜送机返程", stay: "送机返程", image: "https://images.unsplash.com/photo-1678050643669-0e67cc5a0e21", paragraphs: ["深入科拉教堂（卡里耶博物馆），实地解析其精美的拜占庭马赛克与湿壁画遗存.随后前往亚洲区于斯屈达尔观景点，远眺历史半岛完成视角闭环.最后由专属司导提供私人送机服务，前往机场结束本次深度文化信仰之旅。"], meals: { breakfast: "酒店用", lunch: "含", dinner: "/" } }
        ]
      },
      notices: {
        title: "重要提示与备注",
        items: [
          "行程调整：受实时天气、交通路况或不可抗力因素影响，为保障行程安全与体验，导游可能在不减少景点的前提下对游览先后顺序作合理调整。",
          "住宿保障：全程精选 5 星级标准酒店及特色温泉酒店。如遇旺季或特殊节假日所列酒店满房，将安排同等级标准酒店替代。",
          "游览建议：本行程为深度文化与信仰朝圣线路，涉及多处古城遗址步行游览，体力消耗程度中等，建议穿着轻便舒适的运动鞋。",
          "服务标准：本线路坚持 100% 纯玩无购物标准，专注于高质量的历史文化讲解与信仰场景复原，无任何强制消费环节。"
        ]
      }
    },
    itinerary_z2: {
      meta: {
        code: "Z2",
        seriesTitle: "Z 系列 · 启示录七教会精华线路｜4 日五星深度文化朝圣",
        title: "Z2 线路 · 启示录七教会精华巡礼",
        subtitle: "溯源小亚细亚圣迹，重温使徒书信历史回响",
        tagline: "七教会全景溯源 | 使徒宣教足迹 | 全程五星标准 | 100% 纯玩无购物",
        transport: "全程豪华空调旅游大巴，高效衔接安纳托利亚西部核心节点",
        hotels: "全程 5 星级标准酒店及特色温泉酒店",
        transport_label: "交通方式",
        hotels_label: "住宿标准",
        price_label: "参考价格",
        price: "3999",
        meals_label: "餐饮安排",
        stay_label: "入住参考",
        footer_cta_title: "开启您的启示录圣迹之旅",
        cta_consult: "立即咨询专家",
        cta_plan: "获取详细方案",
        sticky_cta: "立即预约顾问"
      },
      highlights: {
        title: "行程核心亮点",
        items: [
          { title: "启示录七教会全景溯源", desc: "完整覆盖以弗所、士每拿、别迦摩等七大遗址，实地解构早期教会文明发展的关键历史节点。" },
          { title: "使徒宣教足迹重访", desc: "探访圣母玛利亚之家与圣约翰大教堂，在以弗所古城遗迹中复原使徒保罗与约翰的宣教场景。" },
          { title: "自然奇观与信仰共生", desc: "巡礼棉花堡与希拉波利斯古城，在白色钙华奇观中感悟自然伟力与古代信仰遗存的历史共鸣。" },
          { title: "高含金量短线精粹", desc: "精选 4 日高效航道串联核心区域，在紧凑节奏下保障高品质的历史内容解析与朝圣体验。" }
        ]
      },
      summaryTable: {
        title: "行程简表",
        columns: ["天数", "行程安排", "早", "中", "晚", "住宿参考"],
        rows: [
          { day: "D1", route: "伊斯坦布尔 → 别迦摩 → 推雅推喇 → 伊兹密尔", breakfast: "/", lunch: "含", dinner: "/", hotel: "伊兹密尔 5★" },
          { day: "D2", route: "士每拿 → 玛利亚之家 → 圣约翰大教堂 → 以弗所", breakfast: "酒店", lunch: "含", dinner: "含", hotel: "伊兹密尔 5★" },
          { day: "D3", route: "撒狄 → 非拉铁非 → 老底嘉 → 棉花堡", breakfast: "酒店", lunch: "含", dinner: "含", hotel: "棉花堡 5★" },
          { day: "D4", route: "希拉波利斯古城（棉花堡） → 伊斯坦布尔", breakfast: "酒店", lunch: "含", dinner: "/", hotel: "/" }
        ]
      },
      sections: {
        title: "行程详情解析",
        days: [
          { day: "01", title: "伊斯坦布尔 → 别迦摩 → 推雅推喇 → 伊兹密尔", stay: "伊兹密尔 5 星级酒店", image: "https://images.unsplash.com/photo-1715080271610-c177c424aa6d", paragraphs: ["清晨由伊斯坦布尔启程.首站抵达山巅之城【别迦摩】，探访这座曾拥有古代世界级图书馆的文明枢纽.", "随后前往以染布业闻名的【推雅推喇】，在古城遗迹中默思使徒书信对属灵生活的深刻警示。"], meals: { breakfast: "/", lunch: "含", dinner: "/" } },
          { day: "02", title: "士每拿 → 圣母玛利亚之家 → 圣约翰大教堂 → 以弗所", stay: "伊兹密尔 5 星级酒店", image: "https://images.unsplash.com/photo-1684214190982-f3506653f932", paragraphs: ["上午造访松林环抱、环境静谧的【圣母玛利亚之家】.随后前往【圣约翰大教堂】，追溯使徒约翰对信仰的至死忠心.", "下午步入文化遗产【以弗所古城】.漫步在大理石铺就的街道上，仰望壮丽的塞尔苏斯图书馆。"], meals: { breakfast: "酒店", lunch: "含", dinner: "含" } },
          { day: "03", title: "撒狄 → 非拉铁非 → 老底嘉 → 棉花堡", stay: "棉花堡 5 星温泉酒店", image: "https://images.unsplash.com/photo-1718227973712-fa3c9b1fda6e", paragraphs: ["沿吕底亚王国商道前行.首站【撒狄古城】，提醒人警惕外在繁荣与内在生命的落差.", "午后抵达【老底嘉古城】，见证“不冷不热之城”的历史重量.傍晚抵达棉花堡。"], meals: { breakfast: "酒店", lunch: "含", dinner: "含" } },
          { day: "04", title: "希拉波利斯古城（棉花堡） → 伊斯坦布尔", stay: "圆满结束", image: "https://images.unsplash.com/photo-1708251088223-e56cd382e8c6", paragraphs: ["清晨参观【棉花堡】白色钙华梯田.感受自然与历史交汇的宁静力量.", "随后启程返回伊斯坦布尔，朝圣之旅圆满结束。"], meals: { breakfast: "酒店", lunch: "含", dinner: "/" } }
        ]
      },
      notices: {
        title: "重要提示与备注",
        items: [
          "行程顺序可能因天气、道路或不可抗力因素作合理调整，以保障安全体验。",
          "如遇所列酒店满房，将安排同等级 5 星/特色温泉酒店替代。",
          "本行程为文化与朝圣主题路线，涉及较多古迹徒步，体力强度适中。",
          "坚持 100% 纯玩无购物，致力于深度信仰溯源与历史场景还原。"
        ]
      }
    },
    toursData: [
      { id: '1', title: 'S1-伊斯坦布尔飞机-卡帕多奇亚 6日', location: '伊斯坦布尔 / 卡帕多奇亚', duration: '6天', price: 6999, image: 'https://images.unsplash.com/photo-1636021597151-cc28dacd915c?auto=format&fit=crop&w=1200&q=80', category: 'classic', highlights: ['热气球晨光飞行', '湿拓画 Ebru 手作', '以弗所沉浸式博物馆'], path: '/itineraries/s1-turkey-6-days' },
      { id: 's2', title: 'S2-爱琴海至安纳托利亚 8日全景', location: '全境环线 / D400', duration: '8天', price: 8999, image: "https://images.unsplash.com/photo-1596093145026-f6af675846c7?q=80&w=2148&auto=format&fit=crop", category: 'classic', highlights: ['D400 最美公路', '地中海滑翔伞', '内陆双飞接驳'], path: '/itineraries/s2-turkey-8-days' },
      { id: 's4', title: 'S4-土耳其 10 日全景文化之旅', location: '全境环线 / 特罗亚', duration: '10天', price: 8999, image: "https://images.unsplash.com/photo-1689130033373-2773b6029aea?q=80&w=2148&auto=format&fit=crop", category: 'classic', highlights: ['特罗亚古城', '全景文化深度', 'D400最美公路'], path: '/itineraries/s4-turkey-10-days' },
      { id: 's5', title: 'S5-土耳其 8 日全景文化深度之旅', location: '特罗亚 / 精灵之路', duration: '8天', price: 8999, image: "https://images.unsplash.com/photo-1687706222092-b6545828217d?q=80&w=2340&auto=format&fit=crop", category: 'classic', highlights: ['特罗亚古城', '精灵烟囱', '伊兹尼克古城'], path: '/itineraries/s5-turkey-8-days' },
      { id: 'z1', title: 'Z1-启示录七教会与圣徒之径 10日', location: '全境巡礼 / 七教会', duration: '10天', price: 10999, image: "https://images.unsplash.com/photo-1543949806-2c9935e6838d?q=80&w=1200&auto=format&fit=crop", category: 'classic', highlights: ['启示录七教会', '使徒脚踪探访', '特色洞穴酒店'], path: '/itineraries/z1-turkey-11-days' },
      { id: 'z2', title: 'Z2-启示录七教会精华 4日朝圣之旅', location: '七教会核心区', duration: '4天', price: 3999, image: "https://images.unsplash.com/photo-1684214190982-f3506653f932?q=80&w=1200&auto=format&fit=crop", category: 'classic', highlights: ['七教会精华', '使徒脚踪探访', '温泉圣迹之旅'], path: '/itineraries/z2-revelation-4-days' }
    ],
    ticketsData: [
      { id: 't1', title: '多尔玛巴赫切宫 (Dolmabahçe Sarayı)', price: 400, includes: ['包含礼宾厅、后宫及绘画博物馆进入权限', '支持官方语音导览', '详情请联系客服'], image: 'https://images.unsplash.com/photo-1601565465051-67971a2d838c?q=80&w=2340&auto=format&fit=crop', category: 'entry' },
      { id: 't2', title: '耶尔德兹宫 (Yıldız Sarayı)', price: 180, includes: ['包含建筑群及园区参观权限', '支持导览服务', '详情请咨询客服'], image: 'https://cdn.istanbul.com/upload/dolmabahce-skip-the-line-7-853x480.webp', category: 'entry' },
      { id: 't3', title: '贝勒贝伊宫 (Beylerbeyi Sarayı)', price: 150, includes: ['包含宫殿主建筑及海滨花园进入', '精美石雕艺术赏析', '详情请联系客服'], image: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_828/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/alxi5drx8um7tsyhdf0l/博斯普鲁斯海峡游轮两大洲.jpg', category: 'entry' },
      { id: 't4', title: '绘画博物馆 (Resim Müzesi)', price: 110, includes: ['包含美术馆绘画藏品区域进入权限', '艺术史导览支持', '详情请咨询客服'], image: 'https://images.unsplash.com/photo-1692701824634-677c652fc111?q=80&w=2346&auto=format&fit=crop', category: 'entry' },
      { id: 't5', title: '伊斯兰文明博物馆 (İslam Medeniyetleri Müzesi)', price: 95, includes: ['包含伊斯兰文明藏品展厅进入权限', '文化历史解读', '详情请咨询客服'], image: 'https://images.unsplash.com/photo-1759930018775-bf3c3fe9bdc6?q=80&w=2340&auto=format&fit=crop', category: 'entry' },
      { id: 't6', title: '贝伊科兹玻璃与水晶博物馆 (Beykoz Cam ve Billur Müzesi)', price: 85, includes: ['包含玻璃及水晶制品展厅进入权限', '工艺历史讲解', '详情请联系客服'], image: 'https://images.unsplash.com/photo-1605988743975-c9c5b8550a91?q=80&w=2340&auto=format&fit=crop', category: 'entry' },
      { id: 't7', title: '安卡拉宫 (Ankara Palace)', price: 58, includes: ['包含宫殿大厅及历史区域进入权限', '官方导览支持', '详情请咨询客服'], image: 'https://images.unsplash.com/photo-1699474745854-39fc35d5ba19?q=80&w=2832&auto=format&fit=crop', category: 'entry' },
      { id: 't8', title: '库楚克苏行宫 (Küçüksu Kasrı)', price: 50, includes: ['包含行宫主建筑进入权限', '花园区域漫步', '详情请联系客服'], image: 'https://images.unsplash.com/photo-1680419928106-1804e2eb432d?q=80&w=2831&auto=format&fit=crop', category: 'entry' },
      { id: 't9', title: '伊赫拉穆尔行宫 (Ihlamur Kasrı)', price: 50, includes: ['包含行宫区域及花园进入权限', '文化遗产参观', '详情请咨询客服'], image: 'https://images.unsplash.com/photo-1661103112980-2ceae026f17b?q=80&w=2340&auto=format&fit=crop', category: 'entry' },
      { id: 't10', title: '贝伊科兹梅吉迪耶行宫 (Beykoz Mecidiye Kasrı)', price: 50, includes: ['包含行宫主体及周边区域进入权限', '历史背景说明', '详情请咨询客服'], image: 'https://images.unsplash.com/photo-1665860789948-bfe6ea95d6cf?q=80&w=1917&auto=format&fit=crop', category: 'entry' },
      { id: 't11', title: '艾纳勒卡瓦克行宫 (Aynalıkavak Kasrı)', price: 50, includes: ['包含行宫建筑及乐器收藏区域进入', '详情请咨询客服'], image: 'https://cdn.kulturenvanteri.com/wp-content/uploads/2019/11/Aynalikavak-Kasri-1-1024x683.jpg', category: 'entry' },
      { id: 't12', title: '马斯拉克行宫 (Maslak Kasrı)', price: 50, includes: ['包含行宫群落及温室区域进入权限', '详情请咨询客服'], image: 'https://images.unsplash.com/photo-1766778834237-34aeabf4d9b2?q=80&w=2340&auto=format&fit=crop', category: 'entry' }
    ],
    faqs: [
      { q: '如何预订恩途的旅行服务？', a: '您可以浏览线路并点击“立即定制”.我们将优先通过微信、邮件与您确认细节，确保行程完美衔接。' },
      { q: '恩途是正规持牌旅行社吗？', a: '是的，恩途 · 国际旅行社是经土耳其旅游协会 (TÜRSAB) 认证运行合作的 A 类持牌旅行社。' },
      { q: '取消政策是怎样的？', a: '通常在行程开始前 7 天取消可获全额退款.部分定制服务可能有特殊说明。' }
    ],
    features: {
      f1: { title: '官方持牌资质', desc: '土耳其旅游协会 (TÜRSAB) A类成员.政府监管，全程保险，保障旅程安全。' },
      f2: { title: '精品私人定制', desc: '专注于私家团和精品小众线路，根据您的喜好灵活规划，拒绝走马观花。' },
      f3: { title: '资深常驻向导', desc: '我们的向导均为常驻土耳其的专业历史学者，获政府官方认证。' }
    },
    contact: {
      title: '设计您的完美旅程',
      subtitle: '我们的地接专家均常驻土耳其本地，随时为您策划专属行程。',
      talkToExpert: '与专家即刻对话',
      talkToExpertDesc: '无需等待.直接联系我们的常驻专家顾问。',
      chatWeChat: '微信咨询',
      chatWhatsApp: 'WhatsApp',
      copied: '微信号已复制',
      callNow: '立即拨打',
      emailInquiry: '邮件联系（预订 / 合作）',
      bookings: '客户预订',
      partnerships: '商务合作',
      replyTime: '通常 24 小时内回复',
      contactLabel: '联系方式：支持微信 · WhatsApp',
      residentTag: '常驻伊斯坦布尔',
      wechatPhone: '微信 / 手机号',
      dmcDirector: '地接社运营总监',
      licensedSpecialist: '持牌高级专家',
      hqLocation: '官方总部：伊斯坦布尔 · 巴克科伊',
      viewGoogleMaps: '在 Google Maps 中查看',
      viewOSM: '在 OpenStreetMap 中查看'
    },
    hub: {
      turkeyOps: '土耳其运营中心',
      istanbulHub: '伊斯坦布尔全球枢纽',
      licensedBoutique: '官方正规持牌精品旅行社',
      viewMaps: '在 Google Maps 查看位置'
    },
    footer: {
      compliance: '合规认证',
      istanbulOffice: '伊斯坦布尔办公室',
      lead: '负责人',
      langSupport: '支持中文 / 土耳其语',
      emailLabel: '邮箱',
      statement: '恩途 · 国际旅行 · 精品旅行专家',
      about: '恩途 · 国际旅行社总部位于伊斯坦布尔，致力于为您提供最专业、最高品质的土耳其定制旅行体验。',
      brandEn: 'GRACE WAY TRAVEL AGENCY',
      brandZh: '恩途 · 国际旅行',
      explore: '探索发现',
      contact: '联系我们',
      address: 'MH, Halkçı Sk. MODA PASAJI NO:25 KAT:2 BÜRO/OFiS NO:35, 34145 Bakırköy/İstanbul',
      licenseInfo: 'A类许可编号：1XXXX',
      licensedAGroup: 'A类持牌旅行社',
      officialLicensed: '官方正规认证',
      rights: '保留所有权利。',
      tursabText: 'TÜRSAB 认证成员',
      tursabBacklink: '土耳其官方持牌旅行社'
    }
  },
  tr: {
    nav: { home: 'Ana Sayfa', tours: 'Turlar', tickets: 'Biletler', contact: 'İletişim', enquire: 'Teklif Al', closeMenu: 'Kapat' },
    hero: {
      title: 'Türkiye\'nin Ruhunu Keşfedin',
      subtitle: 'Grace Way ile antik tarihten canlı kültüre uzanan butik seyahat ortağınız.',
      cta1: 'Rotaları Gör',
      cta2: 'Online Destek'
    },
    sections: {
      featuredTours: 'Özel Rotalar',
      featuredSubtitle: 'Popüler Tur Paketleri',
      whyUs: 'Neden Grace Way?',
      whyUsSubtitle: 'Hizmet Standartlarımız',
      faq: 'Seyahat Rehberi',
      viewAll: 'Tüm Turları Gör',
      categories: { 
        all: 'Hepsi', 
        classic: 'Klasik Miras', 
        luxury: 'Lüks', 
        family: 'Aile', 
        entry: 'Müze Biletleri', 
        activity: 'Aktiviteler', 
        daytrip: 'Günübirlik Geziler' 
      }
    },
    itinerary_z2: {
      meta: {
        code: "Z2",
        seriesTitle: "Z Serisi · Yedi Kilise Özeti | 4 Günlük 5 Yıldızlı İnanç Turu",
        title: "Z2 Rotası · Vahiy Bölümü Yedi Kilise Özeti",
        subtitle: "Küçük Asya'nın Kutsal Alanlarını ve Elçilerin İzlerini Takip Edin",
        tagline: "Yedi Kilise Teması | Uzman Rehberlik | %100 Saf Seyahat | Alışverişsiz",
        transport: "Lüks Klima Otobüs, İstanbul Çıkışlı Efes ve Batı Anadolu Hattı",
        hotels: "5 Yıldızlı Termal ve Şehir Otelleri",
        transport_label: "Ulaşım",
        hotels_label: "Konaklama",
        price_label: "Referans Fiyat",
        price: "3999",
        meals_label: "Yemek",
        stay_label: "Otel",
        footer_cta_title: "Kutsal Yolculuğunuza Başlayın",
        cta_consult: "Teklif Al",
        cta_plan: "Plan İste",
        sticky_cta: "Hemen Rezervasyon"
      },
      highlights: {
        title: "Turun Öne Çıkanları",
        items: [
          { title: "Yedi Kilise Panoraması", desc: "Efes, İzmir, Bergama gibi yedi ana kilise kalıntısını kapsayan bütüncül bir inanç rotası." },
          { title: "Elçilerin İzinde", desc: "Meryem Ana Evi ve Aziz Yuhanna Bazilikası ziyaretleri ile erken Hristiyanlık sahnelerini canlandırın." },
          { title: "Doğa ve İnanç Uyumu", desc: "Pamukkale ve Hierapolis'te antik kalıntılarla bembeyaz travertenlerin mistik buluşmasına tanık olun." },
          { title: "Yüksek Verimli Kısa Tur", desc: "4 günlük yoğunlaştırılmış rota ile Batı Anadolu'nun en kilit tarihi noktalarını uzman eşliğinde keşfedin." }
        ]
      },
      summaryTable: {
        title: "Tur Özeti",
        columns: ["Gün", "Rota", "K", "Ö", "A", "Otel"],
        rows: [
          { day: "D1", route: "İstanbul → Bergama → Thyatira → İzmir", breakfast: "/", lunch: "Var", dinner: "/", hotel: "İzmir 5★" },
          { day: "D2", route: "İzmir → Meryem Ana → Aziz Yuhanna → Efes", breakfast: "Otel", lunch: "Var", dinner: "Var", hotel: "İzmir 5★" },
          { day: "D3", route: "Sardis → Philadelphia → Laodikya → Pamukkale", breakfast: "Otel", lunch: "Var", dinner: "Var", hotel: "Termal 5★" },
          { day: "D4", route: "Hierapolis (Pamukkale) → İstanbul", breakfast: "Otel", lunch: "Var", dinner: "/", hotel: "/" }
        ]
      },
      sections: {
        title: "Detaylı Program",
        days: [
          { day: "01", title: "İstanbul → Bergama → Thyatira → İzmir", stay: "İzmir 5 Yıldızlı Otel", image: "https://images.unsplash.com/photo-1715080271610-c177c424aa6d", paragraphs: ["İstanbul'dan yola çıkarak Batı Anadolu'ya giriyoruz. İlk durağımız antik dünyanın en büyük kütüphanelerinden birine ev sahipliği yapan Bergama.", "Ardından elçilerin mektuplarında adı geçen Thyatira'yı ziyaret ederek İzmir'e ulaşıyoruz."], meals: { breakfast: "/", lunch: "Var", dinner: "/" } },
          { day: "02", title: "İzmir → Meryem Ana → Aziz Yuhanna → Efes", stay: "İzmir 5 Yıldızlı Otel", image: "https://images.unsplash.com/photo-1684214190982-f3506653f932", paragraphs: ["Hristiyanlık tarihinin kalbine yolculuk. Meryem Ana Evi ve Aziz Yuhanna Bazilikası'nda ruhani bir deneyim.", "Öğleden sonra Efes Antik Kenti'nde Roma döneminin ihtişamını keşfediyoruz."], meals: { breakfast: "Otel", lunch: "Var", dinner: "Var" } },
          { day: "03", title: "Sardis → Philadelphia → Laodikya → Pamukkale", stay: "Termal Otel", image: "https://images.unsplash.com/photo-1718227973712-fa3c9b1fda6e", paragraphs: ["Antik Lidya krallığının başkenti Sardis ve 'Kardeşlik Sevgisi' şehri Philadelphia ziyaretleri.", "Öğleden sonra Laodikya'yı gezip Pamukkale'deki termal otelimizde dinleniyoruz."], meals: { breakfast: "Otel", lunch: "Var", dinner: "Var" } },
          { day: "04", title: "Hierapolis (Pamukkale) → İstanbul", stay: "Dönüş", image: "https://images.unsplash.com/photo-1708251088223-e56cd382e8c6", paragraphs: ["Hierapolis antik kenti ve Pamukkale travertenlerinde sabah yürüyüşü.", "Ardından İstanbul'a dönüş yolculuğuna başlıyoruz."], meals: { breakfast: "Otel", lunch: "Var", dinner: "/" } }
        ]
      },
      notices: {
        title: "Önemli Notlar ve Hatırlatmalar",
        items: [
          "Program Değişikliği: Hava durumu, yol koşulları veya mücbir sebeplerden dolayı gezi sırası güvenlik nedeniyle değiştirilebilir.",
          "Konaklama Garantisi: Belirtilen otellerin dolu olması durumunda aynı standartlarda alternatif otel sağlanacaktır.",
          "Tur Karakteri: Kültürel ve inanç odaklı bir rotadır, orta seviye efor gerektirir. Rahat ayakkabı önerilir.",
          "%100 Saf Seyahat: Kesinlikle zorunlu alışveriş yoktur."
        ]
      }
    },
    toursData: [
       { id: 'z2', title: 'Z2-Vahiy Yedi Kilise Özeti 4 Günlük Tur', location: 'Yedi Kilise Özeti', duration: '4 Gün', price: 3999, image: "https://images.unsplash.com/photo-1684214190982-f3506653f932?q=80&w=1200&auto=format&fit=crop", category: 'classic', highlights: ['Yedi Kilise', 'Elçilerin İzleri', 'Termal Keyfi'], path: '/itineraries/z2-revelation-4-days' }
    ],
    ticketsData: [
      { id: 't1', title: 'Dolmabahçe Palace (Dolmabahçe Sarayı)', price: 400, includes: ['Access to main sections', 'Consult CS for details'], image: 'https://images.unsplash.com/photo-1601565465051-67971a2d838c?q=80&w=2340&auto=format&fit=crop', category: 'entry' },
      { id: 't2', title: 'Yıldız Palace (Yıldız Sarayı)', price: 180, includes: ['Access to complex', 'Consult CS for details'], image: 'https://cdn.istanbul.com/upload/dolmabahce-skip-the-line-7-853x480.webp', category: 'entry' },
      { id: 't3', title: 'Beylerbeyi Palace (Beylerbeyi Sarayı)', price: 150, includes: ['Main palace access', 'Consult CS for details'], image: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_828/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/alxi5drx8um7tsyhdf0l/博斯普鲁斯海峡游轮两大洲.jpg', category: 'entry' },
      { id: 't4', title: 'Painting Museum (Resim Müzesi)', price: 110, includes: ['Art gallery access', 'Consult CS for details'], image: 'https://images.unsplash.com/photo-1692701824634-677c652fc111?q=80&w=2346&auto=format&fit=crop', category: 'entry' },
      { id: 't5', title: 'Museum of Islamic Civilizations (İslam Medeniyetleri Müzesi)', price: 95, includes: ['Galleries access', 'Consult CS for details'], image: 'https://images.unsplash.com/photo-1759930018775-bf3c3fe9bdc6?q=80&w=2340&auto=format&fit=crop', category: 'entry' },
      { id: 't6', title: 'Beykoz Glass Museum (Beykoz Cam Müzesi)', price: 85, includes: ['Museum access', 'Consult CS for details'], image: 'https://images.unsplash.com/photo-1605988743975-c9c5b8550a91?q=80&w=2340&auto=format&fit=crop', category: 'entry' },
      { id: 't7', title: 'Ankara Palace (Ankara Palace)', price: 58, includes: ['Historic halls access', 'Consult CS for details'], image: 'https://images.unsplash.com/photo-1699474745854-39fc35d5ba19?q=80&w=2832&auto=format&fit=crop', category: 'entry' },
      { id: 't8', title: 'Küçüksu Pavilion (Küçüksu Kasrı)', price: 50, includes: ['Pavilion access', 'Consult CS for details'], image: 'https://images.unsplash.com/photo-1680419928106-1804e2eb432d?q=80&w=2831&auto=format&fit=crop', category: 'entry' },
      { id: 't9', title: 'Ihlamur Pavilion (Ihlamur Kasrı)', price: 50, includes: ['Pavilion access', 'Consult CS for details'], image: 'https://images.unsplash.com/photo-1661103112980-2ceae026f17b?q=80&w=2340&auto=format&fit=crop', category: 'entry' },
      { id: 't10', title: 'Beykoz Mecidiye Pavilion (Beykoz Mecidiye Kasrı)', price: 50, includes: ['Pavilion access', 'Consult CS for details'], image: 'https://images.unsplash.com/photo-1665860789948-bfe6ea95d6cf?q=80&w=1917&auto=format&fit=crop', category: 'entry' },
      { id: 't11', title: 'Aynalıkavak Pavilion (Aynalıkavak Kasrı)', price: 50, includes: ['Pavilion access', 'Consult CS for details'], image: 'https://cdn.kulturenvanteri.com/wp-content/uploads/2019/11/Aynalikavak-Kasri-1-1024x683.jpg', category: 'entry' },
      { id: 't12', title: 'Maslak Pavilion (Maslak Kasrı)', price: 50, includes: ['Pavilion access', 'Consult CS for details'], image: 'https://images.unsplash.com/photo-1766778834237-34aeabf4d9b2?q=80&w=2340&auto=format&fit=crop', category: 'entry' }
    ],
    faqs: [],
    features: {
      f1: { title: 'Lisanslı Acente', desc: 'TÜRSAB A Grubu üyesi resmi seyahat acentesi.' },
      f2: { title: 'Butik ve Özel', desc: 'Kişiye özel planlanmış butik seyahat deneyimleri.' },
      f3: { title: 'Uzman Rehberlik', desc: 'Sertifikalı tarih uzmanı rehberler eşliğinde.' }
    },
    contact: {
      title: 'Kusursuz Planınızı Oluşturun',
      subtitle: 'Türkiye merkezli uzmanlarımız sizin için en doğru yerel planı hazırlasın.',
      talkToExpert: 'Bir Uzmanla Görüşün',
      talkToExpertDesc: 'Türkiye ofisimizle doğrudan iletişime geçin.',
      chatWeChat: 'WeChat',
      chatWhatsApp: 'WhatsApp',
      copied: 'ID Kopyalandı',
      callNow: 'Hemen Ara',
      emailInquiry: 'E-posta (Rezervasyon / İş Birliği)',
      bookings: 'Müşteri Rezervasyonu',
      partnerships: 'İş Ortaklıkları',
      replyTime: '24 saat içinde yanıt',
      contactLabel: 'İletişim: WeChat · WhatsApp',
      residentTag: 'İstanbul Yerleşkesi',
      wechatPhone: 'WeChat / Telefon',
      dmcDirector: 'DMC Operasyon Direktörü',
      licensedSpecialist: 'Lisanslı Kıdemli Uzman',
      hqLocation: 'Resmi Merkez: Bakırköy, İstanbul',
      viewGoogleMaps: 'Google Maps\'te Görüntüle',
      viewOSM: 'OpenStreetMap\'te Görüntüle'
    },
    hub: {
      turkeyOps: 'Türkiye Operasyonları',
      istanbulHub: 'İstanbul Global Merkezi',
      licensedBoutique: 'Resmi Lisanslı Butik Acente',
      viewMaps: 'Google Maps\'te Görüntüle'
    },
    footer: {
      compliance: 'Uyumluluk',
      istanbulOffice: 'İstanbul Ofisi',
      lead: 'Yönetici',
      langSupport: 'Çince / Türkçe Destek',
      emailLabel: 'E-posta',
      statement: 'Grace Way · Butik Seyahat Uzmanı',
      about: 'Grace Way Seyahat Acentesi, İstanbul merkezli, profesyonel butik hizmetler sunan seçkin bir operatördür.',
      brandEn: 'GRACE WAY TRAVEL AGENCY',
      brandZh: '恩途 · 国际旅行',
      explore: 'Keşfet',
      contact: 'İletişim',
      address: 'MH, Halkçı Sk. MODA PASAJI NO:25 KAT:2 BÜRO/OFiS NO:35, 34145 Bakırköy/İstanbul',
      licenseInfo: 'A-Grubu Lisans: 1XXXX',
      licensedAGroup: 'Lisanslı A-Grubu Acente',
      officialLicensed: 'Resmi Onaylı',
      rights: 'Tüm hakları saklıdır.',
      tursabText: 'TÜRSAB Üyesi',
      tursabBacklink: 'Resmi Lisanslı Türk Seyahat Acentesi'
    }
  }
};
