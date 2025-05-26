// const sampleListings = [
//   {
//     title: "Cozy Beachfront Cottage",
//     description:
//       "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
//     image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     price: 1500,
//     location: "Malibu",
//     country: "United States"
//   },
//   {
//     title: "Modern City Apartment",
//     description:
//       "Experience city living in this stylish downtown apartment. Close to top attractions and restaurants.",
//     image: "https://images.unsplash.com/photo-1745117735516-a64ecb60fd93?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
//     price: 1800,
//     location: "New York",
//     country: "United States"
//   },
//   {
//     title: "Rustic Mountain Cabin",
//     description:
//       "Unplug and unwind in this secluded mountain cabin with breathtaking views and modern amenities.",
//     image: "https://images.unsplash.com/photo-1572120360610-d971b9b788cc?auto=format&fit=crop&w=800&q=60",
//     price: 1200,
//     location: "Aspen",
//     country: "United States"
//   },
//   {
//     title: "Charming Countryside Villa",
//     description:
//       "Relax and enjoy the beauty of the countryside in this cozy villa. Perfect for a weekend retreat.",
//     image: "https://images.unsplash.com/photo-1605579653259-38154b7d9c3e?auto=format&fit=crop&w=800&q=60",
//     price: 950,
//     location: "Napa Valley",
//     country: "United States"
//   },
//   {
//     title: "Luxurious Oceanfront Estate",
//     description:
//       "Live like royalty in this luxurious oceanfront estate, offering unmatched views and exquisite amenities.",
//     image: "https://images.unsplash.com/photo-1611182060852-2e964397f15b?auto=format&fit=crop&w=800&q=60",
//     price: 5000,
//     location: "Malibu",
//     country: "United States"
//   },
//   {
//     title: "Spacious Urban Loft",
//     description:
//       "A stylish and spacious loft in the heart of the city. Perfect for both work and play, with modern interiors.",
//     image: "https://images.unsplash.com/photo-1611319652872-7673ec9c84d5?auto=format&fit=crop&w=800&q=60",
//     price: 2200,
//     location: "Chicago",
//     country: "United States"
//   },
//   {
//     title: "Secluded Beach House",
//     description:
//       "A private and peaceful beach house with panoramic ocean views. The ideal place for a quiet vacation.",
//     image: "https://images.unsplash.com/photo-1557462867-f15a643a18a4?auto=format&fit=crop&w=800&q=60",
//     price: 3000,
//     location: "Hawaii",
//     country: "United States"
//   },
//   {
//     title: "Chic Downtown Studio",
//     description:
//       "Stay in a chic and modern studio apartment, just steps away from the best cafes, shopping, and nightlife.",
//     image: "https://images.unsplash.com/photo-1592063680229-b20d8558bc71?auto=format&fit=crop&w=800&q=60",
//     price: 1300,
//     location: "San Francisco",
//     country: "United States"
//   },
//   {
//     title: "Historic Mansion",
//     description:
//       "Step back in time and enjoy the grandeur of this historic mansion, featuring ornate architecture and antique furnishings.",
//     image: "https://images.unsplash.com/photo-1580881089647-7246f6d4d74b?auto=format&fit=crop&w=800&q=60",
//     price: 3500,
//     location: "Charleston",
//     country: "United States"
//   },
//   {
//     title: "Luxury Ski Chalet",
//     description:
//       "Experience luxury in the snow with this beautiful ski chalet located just minutes from the slopes.",
//     image: "https://images.unsplash.com/photo-1558538478-d0b3c5f6c409?auto=format&fit=crop&w=800&q=60",
//     price: 4200,
//     location: "Vail",
//     country: "United States"
//   },
//   {
//     title: "Eco-Friendly Retreat",
//     description:
//       "A peaceful, eco-friendly retreat surrounded by nature, designed for those who want to reconnect with the environment.",
//     image: "https://images.unsplash.com/photo-1575435502003-96f165402ef5?auto=format&fit=crop&w=800&q=60",
//     price: 1100,
//     location: "Boulder",
//     country: "United States"
//   },
//   {
//     title: "Grand Lakehouse",
//     description:
//       "Escape to this grand lakehouse, offering beautiful waterfront views, ample outdoor space, and modern comforts.",
//     image: "https://images.unsplash.com/photo-1569935569-6fdc11e1de9d?auto=format&fit=crop&w=800&q=60",
//     price: 2500,
//     location: "Lake Tahoe",
//     country: "United States"
//   },
//   {
//     title: "Charming Studio Apartment",
//     description:
//       "A cozy and charming studio apartment located in a vibrant neighborhood, close to everything you need.",
//     image: "https://images.unsplash.com/photo-1602285707919-8a30cd4609b2?auto=format&fit=crop&w=800&q=60",
//     price: 950,
//     location: "Los Angeles",
//     country: "United States"
//   },
//   {
//     title: "Luxury Penthouse",
//     description:
//       "Indulge in the finest living with this stunning penthouse, offering panoramic city views and unparalleled luxury.",
//     image: "https://images.unsplash.com/photo-1573435409223-39b96d7b92d4?auto=format&fit=crop&w=800&q=60",
//     price: 8000,
//     location: "Los Angeles",
//     country: "United States"
//   },
//   {
//     title: "Seaside Cottage",
//     description:
//       "A quaint seaside cottage that offers a peaceful retreat with a beautiful view of the ocean.",
//     image: "https://images.unsplash.com/photo-1602215512224-003acb5e4f00?auto=format&fit=crop&w=800&q=60",
//     price: 1600,
//     location: "Maine",
//     country: "United States"
//   },
//   {
//     title: "Mountain View Loft",
//     description:
//       "Enjoy breathtaking views of the mountains from this spacious, modern loft with all the amenities.",
//     image: "https://images.unsplash.com/photo-1533156873312-2392a3a3e9b5?auto=format&fit=crop&w=800&q=60",
//     price: 2100,
//     location: "Denver",
//     country: "United States"
//   },
//   {
//     title: "Stylish Beach Villa",
//     description:
//       "Live in style by the beach in this luxurious, modern villa with access to private beach and pool.",
//     image: "https://images.unsplash.com/photo-1612391607539-b59507e04c64?auto=format&fit=crop&w=800&q=60",
//     price: 4000,
//     location: "Miami",
//     country: "United States"
//   },
//   {
//     title: "Desert Oasis",
//     description:
//       "A serene desert retreat that combines luxury with nature, featuring stunning desert views and a private pool.",
//     image: "https://images.unsplash.com/photo-1518396765864-e520adfa5c85?auto=format&fit=crop&w=800&q=60",
//     price: 2900,
//     location: "Sedona",
//     country: "United States"
//   },
//   {
//     title: "Victorian House",
//     description:
//       "Step back in time with this grand Victorian house featuring ornate interiors, a lush garden, and a vintage charm.",
//     image: "https://images.unsplash.com/photo-1585122280699-553ebad9b5d2?auto=format&fit=crop&w=800&q=60",
//     price: 2200,
//     location: "San Francisco",
//     country: "United States"
//   },
//   {
//     title: "Countryside Barn Conversion",
//     description:
//       "A beautifully converted barn nestled in the countryside, offering rustic charm with modern comforts.",
//     image: "https://images.unsplash.com/photo-1555685815-c6015cc2cc0d?auto=format&fit=crop&w=800&q=60",
//     price: 1800,
//     location: "Vermont",
//     country: "United States"
//   },
//   {
//     title: "Elegant Townhouse",
//     description:
//       "A charming and elegant townhouse with a prime location, combining classic architecture with modern amenities.",
//     image: "https://images.unsplash.com/photo-1570372181667-27b6c1637b25?auto=format&fit=crop&w=800&q=60",
//     price: 2400,
//     location: "Boston",
//     country: "United States"
//   },
//   {
//     title: "Glamorous Studio Apartment",
//     description:
//       "A trendy and glamorous studio apartment in the heart of the city, ideal for those seeking an urban lifestyle.",
//     image: "https://images.unsplash.com/photo-1610585154540-558fe34325bb?auto=format&fit=crop&w=800&q=60",
//     price: 1300,
//     location: "Chicago",
//     country: "United States"
//   },
//   {
//     title: "Private Island Getaway",
//     description:
//       "A secluded luxury island retreat offering stunning views, white sandy beaches, and total privacy.",
//     image: "https://images.unsplash.com/photo-1501204820950-c4e437f3f7d5?auto=format&fit=crop&w=800&q=60",
//     price: 12000,
//     location: "Bahamas",
//     country: "Bahamas"
//   },
//   {
//     title: "Modern Farmhouse",
//     description:
//       "Escape to a beautiful modern farmhouse in the countryside, combining rustic charm with contemporary design.",
//     image: "https://images.unsplash.com/photo-1602296712807-09db8a643659?auto=format&fit=crop&w=800&q=60",
//     price: 2300,
//     location: "Nashville",
//     country: "United States"
//   },
//   {
//     title: "Bohemian Beach House",
//     description:
//       "Embrace a laid-back bohemian lifestyle in this cozy beach house with vibrant colors and ocean views.",
//     image: "https://images.unsplash.com/photo-1576003452909-b99b72d6851b?auto=format&fit=crop&w=800&q=60",
//     price: 2000,
//     location: "Santa Monica",
//     country: "United States"
//   },
//   {
//     title: "Contemporary City Apartment",
//     description:
//       "Live in style with this contemporary apartment featuring sleek interiors, high-end appliances, and stunning views.",
//     image: "https://images.unsplash.com/photo-1580426899501-85a0726c0cfd?auto=format&fit=crop&w=800&q=60",
//     price: 2700,
//     location: "Seattle",
//     country: "United States"
//   }
// ];

// module.exports = { data: sampleListings };

const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
];

module.exports = { data: sampleListings };