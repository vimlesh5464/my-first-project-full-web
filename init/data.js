const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States"
  },
  {
    title: "Modern City Apartment",
    description:
      "Experience city living in this stylish downtown apartment. Close to top attractions and restaurants.",
    image: "https://images.unsplash.com/photo-1745117735516-a64ecb60fd93?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    price: 1800,
    location: "New York",
    country: "United States"
  },
  {
    title: "Rustic Mountain Cabin",
    description:
      "Unplug and unwind in this secluded mountain cabin with breathtaking views and modern amenities.",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9b788cc?auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "Aspen",
    country: "United States"
  },
  {
    title: "Charming Countryside Villa",
    description:
      "Relax and enjoy the beauty of the countryside in this cozy villa. Perfect for a weekend retreat.",
    image: "https://images.unsplash.com/photo-1605579653259-38154b7d9c3e?auto=format&fit=crop&w=800&q=60",
    price: 950,
    location: "Napa Valley",
    country: "United States"
  },
  {
    title: "Luxurious Oceanfront Estate",
    description:
      "Live like royalty in this luxurious oceanfront estate, offering unmatched views and exquisite amenities.",
    image: "https://images.unsplash.com/photo-1611182060852-2e964397f15b?auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Malibu",
    country: "United States"
  },
  {
    title: "Spacious Urban Loft",
    description:
      "A stylish and spacious loft in the heart of the city. Perfect for both work and play, with modern interiors.",
    image: "https://images.unsplash.com/photo-1611319652872-7673ec9c84d5?auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Chicago",
    country: "United States"
  },
  {
    title: "Secluded Beach House",
    description:
      "A private and peaceful beach house with panoramic ocean views. The ideal place for a quiet vacation.",
    image: "https://images.unsplash.com/photo-1557462867-f15a643a18a4?auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Hawaii",
    country: "United States"
  },
  {
    title: "Chic Downtown Studio",
    description:
      "Stay in a chic and modern studio apartment, just steps away from the best cafes, shopping, and nightlife.",
    image: "https://images.unsplash.com/photo-1592063680229-b20d8558bc71?auto=format&fit=crop&w=800&q=60",
    price: 1300,
    location: "San Francisco",
    country: "United States"
  },
  {
    title: "Historic Mansion",
    description:
      "Step back in time and enjoy the grandeur of this historic mansion, featuring ornate architecture and antique furnishings.",
    image: "https://images.unsplash.com/photo-1580881089647-7246f6d4d74b?auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Charleston",
    country: "United States"
  },
  {
    title: "Luxury Ski Chalet",
    description:
      "Experience luxury in the snow with this beautiful ski chalet located just minutes from the slopes.",
    image: "https://images.unsplash.com/photo-1558538478-d0b3c5f6c409?auto=format&fit=crop&w=800&q=60",
    price: 4200,
    location: "Vail",
    country: "United States"
  },
  {
    title: "Eco-Friendly Retreat",
    description:
      "A peaceful, eco-friendly retreat surrounded by nature, designed for those who want to reconnect with the environment.",
    image: "https://images.unsplash.com/photo-1575435502003-96f165402ef5?auto=format&fit=crop&w=800&q=60",
    price: 1100,
    location: "Boulder",
    country: "United States"
  },
  {
    title: "Grand Lakehouse",
    description:
      "Escape to this grand lakehouse, offering beautiful waterfront views, ample outdoor space, and modern comforts.",
    image: "https://images.unsplash.com/photo-1569935569-6fdc11e1de9d?auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Lake Tahoe",
    country: "United States"
  },
  {
    title: "Charming Studio Apartment",
    description:
      "A cozy and charming studio apartment located in a vibrant neighborhood, close to everything you need.",
    image: "https://images.unsplash.com/photo-1602285707919-8a30cd4609b2?auto=format&fit=crop&w=800&q=60",
    price: 950,
    location: "Los Angeles",
    country: "United States"
  },
  {
    title: "Luxury Penthouse",
    description:
      "Indulge in the finest living with this stunning penthouse, offering panoramic city views and unparalleled luxury.",
    image: "https://images.unsplash.com/photo-1573435409223-39b96d7b92d4?auto=format&fit=crop&w=800&q=60",
    price: 8000,
    location: "Los Angeles",
    country: "United States"
  },
  {
    title: "Seaside Cottage",
    description:
      "A quaint seaside cottage that offers a peaceful retreat with a beautiful view of the ocean.",
    image: "https://images.unsplash.com/photo-1602215512224-003acb5e4f00?auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Maine",
    country: "United States"
  },
  {
    title: "Mountain View Loft",
    description:
      "Enjoy breathtaking views of the mountains from this spacious, modern loft with all the amenities.",
    image: "https://images.unsplash.com/photo-1533156873312-2392a3a3e9b5?auto=format&fit=crop&w=800&q=60",
    price: 2100,
    location: "Denver",
    country: "United States"
  },
  {
    title: "Stylish Beach Villa",
    description:
      "Live in style by the beach in this luxurious, modern villa with access to private beach and pool.",
    image: "https://images.unsplash.com/photo-1612391607539-b59507e04c64?auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Miami",
    country: "United States"
  },
  {
    title: "Desert Oasis",
    description:
      "A serene desert retreat that combines luxury with nature, featuring stunning desert views and a private pool.",
    image: "https://images.unsplash.com/photo-1518396765864-e520adfa5c85?auto=format&fit=crop&w=800&q=60",
    price: 2900,
    location: "Sedona",
    country: "United States"
  },
  {
    title: "Victorian House",
    description:
      "Step back in time with this grand Victorian house featuring ornate interiors, a lush garden, and a vintage charm.",
    image: "https://images.unsplash.com/photo-1585122280699-553ebad9b5d2?auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "San Francisco",
    country: "United States"
  },
  {
    title: "Countryside Barn Conversion",
    description:
      "A beautifully converted barn nestled in the countryside, offering rustic charm with modern comforts.",
    image: "https://images.unsplash.com/photo-1555685815-c6015cc2cc0d?auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Vermont",
    country: "United States"
  },
  {
    title: "Elegant Townhouse",
    description:
      "A charming and elegant townhouse with a prime location, combining classic architecture with modern amenities.",
    image: "https://images.unsplash.com/photo-1570372181667-27b6c1637b25?auto=format&fit=crop&w=800&q=60",
    price: 2400,
    location: "Boston",
    country: "United States"
  },
  {
    title: "Glamorous Studio Apartment",
    description:
      "A trendy and glamorous studio apartment in the heart of the city, ideal for those seeking an urban lifestyle.",
    image: "https://images.unsplash.com/photo-1610585154540-558fe34325bb?auto=format&fit=crop&w=800&q=60",
    price: 1300,
    location: "Chicago",
    country: "United States"
  },
  {
    title: "Private Island Getaway",
    description:
      "A secluded luxury island retreat offering stunning views, white sandy beaches, and total privacy.",
    image: "https://images.unsplash.com/photo-1501204820950-c4e437f3f7d5?auto=format&fit=crop&w=800&q=60",
    price: 12000,
    location: "Bahamas",
    country: "Bahamas"
  },
  {
    title: "Modern Farmhouse",
    description:
      "Escape to a beautiful modern farmhouse in the countryside, combining rustic charm with contemporary design.",
    image: "https://images.unsplash.com/photo-1602296712807-09db8a643659?auto=format&fit=crop&w=800&q=60",
    price: 2300,
    location: "Nashville",
    country: "United States"
  },
  {
    title: "Bohemian Beach House",
    description:
      "Embrace a laid-back bohemian lifestyle in this cozy beach house with vibrant colors and ocean views.",
    image: "https://images.unsplash.com/photo-1576003452909-b99b72d6851b?auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Santa Monica",
    country: "United States"
  },
  {
    title: "Contemporary City Apartment",
    description:
      "Live in style with this contemporary apartment featuring sleek interiors, high-end appliances, and stunning views.",
    image: "https://images.unsplash.com/photo-1580426899501-85a0726c0cfd?auto=format&fit=crop&w=800&q=60",
    price: 2700,
    location: "Seattle",
    country: "United States"
  }
];

module.exports = { data: sampleListings };