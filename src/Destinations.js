// src/Destinations.js
const Destinations = [
    {
        id: 1,
        name: 'Mysore Palace',
        description: 'A magnificent historical palace and a popular tourist attraction in Mysore.',
        longDescription: 'The Mysore Palace, also known as Amba Vilas Palace, is a historical palace and royal residence located in Mysore, Karnataka. It is the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore. The palace is in the center of Mysore, and faces the Chamundi Hills eastward.',
        image: 'https://mysore-palace.jpg',
        rating: 4.7,
        bestTime: 'October to March',
        location: { lat: 12.3052, lng: 76.6552 },
        reviews: [
          { user: 'TravelLover', comment: 'Absolutely stunning architecture!', rating: 5 },
          { user: 'HistoryBuff', comment: 'Rich in cultural heritage. A must-visit.', rating: 4.5 }
        ],
        categories: ['Heritage', 'Architecture']
      },
      {
        "id": 2,
        "name": "Hampi",
        "description": "Ancient ruins of Vijayanagara Empire, a UNESCO World Heritage Site.",
        "longDescription": "Hampi is a village and temple town recognized as a UNESCO World Heritage Site, known for its ancient ruins of the Vijayanagara Empire. It features stunning architecture and landscapes, with remnants of the once-prosperous kingdom.",
        "image": "https://example.com/hampi.jpg",
        "rating": 4.8,
        "bestTime": "November to February",
        "location": { "lat": 15.3350, "lng": 76.4600 },
        "reviews": [
          { "user": "ArchaeologyFan", "comment": "The ruins are mesmerizing, full of history.", "rating": 5 },
          { "user": "Traveler", "comment": "A journey through time!", "rating": 4.7 }
        ],
        "categories": ["Heritage", "History"]
      },
      
      {
        "id": 3,
        "name": "Coorg",
        "description": "Scenic hill station known for its coffee plantations and lush landscapes.",
        "longDescription": "Coorg, also known as Kodagu, is a picturesque hill station in Karnataka, renowned for its coffee plantations, dense forests, and lush green valleys. It offers a peaceful retreat and a chance to connect with nature.",
        "image": "https://example.com/coorg.jpg",
        "rating": 4.6,
        "bestTime": "October to March",
        "location": { "lat": 12.3375, "lng": 75.8069 },
        "reviews": [
          { "user": "NatureLover", "comment": "Breathtaking scenery and fresh air.", "rating": 5 },
          { "user": "CoffeeAddict", "comment": "The coffee plantations are a delight to visit.", "rating": 4.5 }
        ],
        "categories": ["Nature", "Adventure"]
      },
      {
        "id": 4,
        "name": "Jog Falls",
        "description": "One of the highest waterfalls in India, located in Shimoga district.",
        "longDescription": "Jog Falls, located in the Shimoga district, is one of the highest waterfalls in India. The falls are created by the Sharavathi River and are divided into four segments: Raja, Rani, Rover, and Rocket.",
        "image": "https://example.com/jog-falls.jpg",
        "rating": 4.5,
        "bestTime": "July to October",
        "location": { "lat": 14.1698, "lng": 74.8154 },
        "reviews": [
          { "user": "WaterfallFan", "comment": "The falls are majestic, especially during the monsoon.", "rating": 5 },
          { "user": "NatureExplorer", "comment": "A natural wonder worth visiting.", "rating": 4.5 }
        ],
        "categories": ["Nature", "Adventure"]
      }
      ,
      {
        "id": 5,
        "name": "Gokarna",
        "description": "Coastal town known for its pristine beaches and temples.",
        "longDescription": "Gokarna is a small coastal town in Karnataka, famous for its beautiful beaches and sacred temples. It offers a perfect blend of pilgrimage and beach holidays, attracting tourists from all over the world.",
        "image": "https://example.com/gokarna.jpg",
        "rating": 4.4,
        "bestTime": "October to March",
        "location": { "lat": 14.5501, "lng": 74.3181 },
        "reviews": [
          { "user": "BeachLover", "comment": "Serene beaches and clear waters.", "rating": 4.5 },
          { "user": "SpiritualSeeker", "comment": "A peaceful place with a spiritual vibe.", "rating": 4.3 }
        ],
        "categories": ["Beach", "Pilgrimage"]
    },
    {
        "id": 6,
        "name": "Bannerghatta Biological Park",
        "description": "A popular biological park featuring a zoo, safari, and butterfly park.",
        "longDescription": "Bannerghatta Biological Park, located near Bangalore, is a renowned park that includes a zoo, safari, butterfly park, and a rescue center. It offers visitors a chance to see various wildlife species in their natural habitat and learn about conservation efforts.",
        "image": "https://example.com/bannerghatta.jpg",
        "rating": 4.3,
        "bestTime": "September to January",
        "location": { "lat": 12.8000, "lng": 77.5770 },
        "reviews": [
          { "user": "WildlifeEnthusiast", "comment": "A great place for a family day out. The safari is thrilling!", "rating": 4.5 },
          { "user": "NatureLover", "comment": "Loved the butterfly park and the variety of animals.", "rating": 4.2 }
        ],
        "categories": ["Wildlife", "Family"]
    },
    {
        "id": 7,
        "name": "Chikmagalur",
        "description": "A serene hill station known for its coffee estates and beautiful landscapes.",
        "longDescription": "Chikmagalur, situated in the Western Ghats, is a serene hill station known for its extensive coffee estates, lush greenery, and pleasant climate. It is a popular destination for trekking, coffee tours, and relaxing amidst nature.",
        "image": "https://example.com/chikmagalur.jpg",
        "rating": 4.7,
        "bestTime": "September to March",
        "location": { "lat": 13.3153, "lng": 75.7740 },
        "reviews": [
          { "user": "Trekker", "comment": "Perfect place for trekking and enjoying nature.", "rating": 4.8 },
          { "user": "CoffeeLover", "comment": "The coffee estates are a must-visit!", "rating": 4.6 }
        ],
        "categories": ["Nature", "Adventure"]
    },
    {
        "id": 8,
        "name": "Badami",
        "description": "Historic town known for its rock-cut temples and ancient architecture.",
        "longDescription": "Badami, formerly known as Vatapi, is a historic town famous for its rock-cut temples carved into cliffs. The town is a major archaeological site featuring temples from the Chalukya dynasty and stunning rock formations.",
        "image": "https://example.com/badami.jpg",
        "rating": 4.6,
        "bestTime": "October to March",
        "location": { "lat": 15.9157, "lng": 75.6791 },
        "reviews": [
          { "user": "HistoryBuff", "comment": "The rock-cut temples are awe-inspiring!", "rating": 4.7 },
          { "user": "ArchitectureFan", "comment": "A treasure trove of ancient architecture.", "rating": 4.5 }
        ],
        "categories": ["Heritage", "Architecture"]
    },
    {
        "id": 9,
        "name": "Udupi",
        "description": "A coastal town famous for its temples and delicious cuisine.",
        "longDescription": "Udupi is a coastal town in Karnataka renowned for its temples, especially the Krishna Temple, and its delicious South Indian cuisine. The town is also known for its beautiful beaches and cultural heritage.",
        "image": "https://example.com/udupi.jpg",
        "rating": 4.5,
        "bestTime": "October to March",
        "location": { "lat": 13.3409, "lng": 74.7421 },
        "reviews": [
          { "user": "Foodie", "comment": "The Udupi cuisine is simply amazing!", "rating": 4.7 },
          { "user": "Pilgrim", "comment": "A spiritually enriching experience.", "rating": 4.4 }
        ],
        "categories": ["Pilgrimage", "Cuisine"]
    },
    {
        "id": 10,
        "name": "Shravanabelagola",
        "description": "A Jain pilgrimage site known for its colossal statue of Gomateshwara.",
        "longDescription": "Shravanabelagola is an important Jain pilgrimage site in Karnataka, known for its colossal statue of Gomateshwara (Bahubali), which is one of the largest monolithic statues in the world. The site attracts pilgrims and tourists for its religious significance and historical value.",
        "image": "https://example.com/shravanabelagola.jpg",
        "rating": 4.6,
        "bestTime": "November to February",
        "location": { "lat": 12.8573, "lng": 76.4891 },
        "reviews": [
          { "user": "Pilgrim", "comment": "The statue of Gomateshwara is magnificent.", "rating": 4.8 },
          { "user": "Historian", "comment": "A site rich in Jain heritage and history.", "rating": 4.5 }
        ],
        "categories": ["Pilgrimage", "Heritage"]
    },
    {
        "id": 11,
        "name": "Nandi Hills",
        "description": "A popular hill station near Bangalore, known for its sunrise views and trekking trails.",
        "longDescription": "Nandi Hills is a popular hill station located near Bangalore, known for its scenic sunrise views, pleasant climate, and trekking trails. It is a favorite weekend getaway for residents of Bangalore and offers panoramic views of the surrounding landscape.",
        "image": "https://example.com/nandi-hills.jpg",
        "rating": 4.4,
        "bestTime": "September to February",
        "location": { "lat": 13.3702, "lng": 77.6832 },
        "reviews": [
          { "user": "Hiker", "comment": "Great place for a weekend trek.", "rating": 4.5 },
          { "user": "NatureLover", "comment": "The sunrise view is spectacular.", "rating": 4.3 }
        ],
        "categories": ["Nature", "Adventure"]
    },
    {
        "id": 12,
        "name": "Bijapur",
        "description": "A historic city known for its Islamic architecture and monuments.",
        "longDescription": "Bijapur, officially known as Vijayapura, is a historic city in Karnataka renowned for its Islamic architecture and monuments. It is home to the Gol Gumbaz, one of the largest domes in the world, and numerous other historical structures from the Adil Shahi dynasty.",
        "image": "https://example.com/bijapur.jpg",
        "rating": 4.5,
        "bestTime": "October to March",
        "location": { "lat": 16.8302, "lng": 75.7100 },
        "reviews": [
          { "user": "HistoryEnthusiast", "comment": "Gol Gumbaz is an architectural marvel.", "rating": 4.7 },
          { "user": "Traveler", "comment": "The city is full of historical wonders.", "rating": 4.4 }
        ],
        "categories": ["Heritage", "Architecture"]
    },
    {
        "id": 13,
        "name": "Belur",
        "description": "Historic town known for the Chennakeshava Temple, a fine example of Hoysala architecture.",
        "longDescription": "Belur is a historic town in Karnataka, famous for the Chennakeshava Temple, a masterpiece of Hoysala architecture. The temple is renowned for its intricate carvings and sculptures, attracting tourists and history enthusiasts from all over the world.",
        "image": "https://example.com/belur.jpg",
        "rating": 4.7,
        "bestTime": "October to March",
        "location": { "lat": 13.1650, "lng": 75.8650 },
        "reviews": [
          { "user": "ArchitectureBuff", "comment": "The temple's architecture is simply stunning.", "rating": 4.8 },
          { "user": "HistoryFan", "comment": "A must-visit for anyone interested in history and art.", "rating": 4.6 }
        ],
        "categories": ["Heritage", "Architecture"]
    },
    {
        "id": 14,
        "name": "Halebidu",
        "description": "Ancient city known for the Hoysaleswara Temple, an architectural marvel.",
        "longDescription": "Halebidu, once the capital of the Hoysala Empire, is known for the Hoysaleswara Temple, a stunning example of Hoysala architecture. The temple is famous for its detailed carvings and sculptures, depicting various aspects of Hindu mythology.",
        "image": "https://example.com/halebidu.jpg",
        "rating": 4.6,
        "bestTime": "October to March",
        "location": { "lat": 13.2120, "lng": 75.9926 },
        "reviews": [
          { "user": "ArtLover", "comment": "The temple carvings are incredibly detailed.", "rating": 4.7 },
          { "user": "HistoryEnthusiast", "comment": "A place rich in history and culture.", "rating": 4.5 }
        ],
        "categories": ["Heritage", "Architecture"]
    },
    {
        "id": 15,
        "name": "Kabini",
        "description": "Popular wildlife destination known for its rich biodiversity and scenic beauty.",
        "longDescription": "Kabini is a popular wildlife destination located on the banks of the Kabini River. It is part of the Nagarhole National Park and is known for its rich biodiversity, including elephants, tigers, leopards, and various bird species. The scenic beauty of the area attracts nature lovers and wildlife enthusiasts.",
        "image": "https://example.com/kabini.jpg",
        "rating": 4.8,
        "bestTime": "October to May",
        "location": { "lat": 11.8804, "lng": 76.3610 },
        "reviews": [
          { "user": "WildlifePhotographer", "comment": "A paradise for wildlife photography.", "rating": 5 },
          { "user": "NatureLover", "comment": "The safari experience is unforgettable.", "rating": 4.7 }
        ],
        "categories": ["Wildlife", "Nature"]
    },
    {
        "id": 16,
        "name": "Srirangapatna",
        "description": "Historic town known for the Ranganathaswamy Temple and Tipu Sultan's Summer Palace.",
        "longDescription": "Srirangapatna is a historic town located near Mysore, known for the Ranganathaswamy Temple, an important pilgrimage site, and Tipu Sultan's Summer Palace. The town has a rich history and is associated with the Mysore Kingdom and the wars fought by Tipu Sultan.",
        "image": "https://example.com/srirangapatna.jpg",
        "rating": 4.5,
        "bestTime": "October to March",
        "location": { "lat": 12.4194, "lng": 76.6947 },
        "reviews": [
          { "user": "HistoryBuff", "comment": "The town is full of historical sites and stories.", "rating": 4.6 },
          { "user": "Pilgrim", "comment": "A spiritually enriching experience at the temple.", "rating": 4.4 }
        ],
        "categories": ["Heritage", "Pilgrimage"]
    },
    {
        "id": 17,
        "name": "Murudeshwar",
        "description": "Coastal town known for its towering Shiva statue and beautiful beaches.",
        "longDescription": "Murudeshwar is a coastal town in Karnataka, famous for its towering statue of Lord Shiva, which is one of the tallest in the world. The town is also known for its beautiful beaches and the Murudeshwar Temple, attracting both pilgrims and tourists.",
        "image": "https://example.com/murudeshwar.jpg",
        "rating": 4.6,
        "bestTime": "October to March",
        "location": { "lat": 14.0948, "lng": 74.4849 },
        "reviews": [
          { "user": "SpiritualSeeker", "comment": "The Shiva statue is awe-inspiring.", "rating": 4.7 },
          { "user": "BeachLover", "comment": "The beaches are clean and beautiful.", "rating": 4.5 }
        ],
        "categories": ["Pilgrimage", "Beach"]
    },
    {
        "id": 18,
        "name": "Chitradurga Fort",
        "description": "Historic fort known for its impressive architecture and defense mechanisms.",
        "longDescription": "Chitradurga Fort, located in the Chitradurga district, is a historic fort known for its impressive architecture and ingenious defense mechanisms. The fort complex includes numerous temples, gateways, and water reservoirs, showcasing the engineering skills of its builders.",
        "image": "https://example.com/chitradurga-fort.jpg",
        "rating": 4.5,
        "bestTime": "October to March",
        "location": { "lat": 14.2302, "lng": 76.4003 },
        "reviews": [
          { "user": "HistoryEnthusiast", "comment": "A remarkable example of military architecture.", "rating": 4.6 },
          { "user": "Traveler", "comment": "Exploring the fort is an adventurous experience.", "rating": 4.4 }
        ],
        "categories": ["Heritage", "Adventure"]
    },
    {
        "id": 19,
        "name": "Pattadakal",
        "description": "A UNESCO World Heritage Site known for its group of Chalukya monuments.",
        "longDescription": "Pattadakal is a UNESCO World Heritage Site in Karnataka, known for its group of Chalukya monuments. The site includes a series of temples and architectural structures that represent a unique blend of North and South Indian architectural styles.",
        "image": "https://example.com/pattadakal.jpg",
        "rating": 4.7,
        "bestTime": "October to March",
        "location": { "lat": 15.9481, "lng": 75.8190 },
        "reviews": [
          { "user": "ArchitectureBuff", "comment": "The temples are a stunning display of artistry.", "rating": 4.8 },
          { "user": "Historian", "comment": "A significant site for understanding ancient Indian architecture.", "rating": 4.6 }
        ],
        "categories": ["Heritage", "Architecture"]
    },
    {
        "id": 20,
        "name": "Kudremukh",
        "description": "A mountain range and national park known for its scenic beauty and biodiversity.",
        "longDescription": "Kudremukh, meaning 'horse-face' in Kannada, is a mountain range and national park located in the Western Ghats. It is known for its scenic beauty, rich biodiversity, and trekking trails. The area is a popular destination for nature lovers and adventure enthusiasts.",
        "image": "https://example.com/kudremukh.jpg",
        "rating": 4.6,
        "bestTime": "October to March",
        "location": { "lat": 13.2781, "lng": 75.1293 },
        "reviews": [
          { "user": "Trekker", "comment": "A trekker's paradise with stunning views.", "rating": 4.7 },
          { "user": "NatureLover", "comment": "The biodiversity of the park is incredible.", "rating": 4.5 }
        ],
        "categories": ["Nature", "Adventure"]
    },
    {
        "id": 21,
        "name": "Gol Gumbaz",
        "description": "Famous for its massive dome and whispering gallery.",
        "longDescription": "Gol Gumbaz is the mausoleum of Mohammed Adil Shah, the Sultan of Bijapur. It is renowned for its massive dome, which is one of the largest in the world, and its unique whispering gallery where even the faintest sound can be heard across the diameter of the dome.",
        "image": "https://example.com/gol-gumbaz.jpg",
        "rating": 4.7,
        "bestTime": "October to March",
        "location": { "lat": 16.8300, "lng": 75.7100 },
        "reviews": [
          { "user": "HistoryEnthusiast", "comment": "An architectural marvel with an intriguing whispering gallery.", "rating": 4.8 },
          { "user": "Traveler", "comment": "A must-visit for its historical significance.", "rating": 4.6 }
        ],
        "categories": ["Heritage", "Architecture"]
    },
    {
        "id": 22,
        "name": "Vijaya Vittala Temple",
        "description": "Known for its iconic stone chariot and musical pillars.",
        "longDescription": "The Vijaya Vittala Temple is a historic temple complex in Hampi, famous for its iconic stone chariot and musical pillars. The temple's intricate carvings and architectural features make it one of the most visited sites in Hampi.",
        "image": "https://example.com/vijaya-vittala-temple.jpg",
        "rating": 4.8,
        "bestTime": "November to February",
        "location": { "lat": 15.3350, "lng": 76.4600 },
        "reviews": [
          { "user": "ArtLover", "comment": "The stone chariot and musical pillars are mesmerizing.", "rating": 4.9 },
          { "user": "HistoryFan", "comment": "A site that captures the grandeur of the Vijayanagara Empire.", "rating": 4.7 }
        ],
        "categories": ["Heritage", "Architecture"]
    },
    
      
      
      
      
      
      
      
      
        
      
      
      
      
      
      
  ];
  
  export default Destinations;