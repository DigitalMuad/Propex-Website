const luxuryProperties = [
  {
    id: 1,
    title: "Oceanfront Villa in Malibu",
    description: "Stunning 6-bedroom villa with private beach access and infinity pool",
    price: 12500000,
    location: "Malibu, CA",
    bedrooms: 6,
    bathrooms: 7,
    sqft: 8500,
    image_url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Penthouse in Manhattan",
    description: "Luxury penthouse with panoramic NYC views and private terrace",
    price: 28000000,
    location: "New York, NY",
    bedrooms: 5,
    bathrooms: 5.5,
    sqft: 6500,
    image_url: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Modern Mansion in Beverly Hills",
    description: "Architectural masterpiece with smart home technology and resort-style amenities",
    price: 35000000,
    location: "Beverly Hills, CA",
    bedrooms: 8,
    bathrooms: 10,
    sqft: 15000,
    image_url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Waterfront Estate in Miami",
    description: "Luxurious waterfront property with private dock and panoramic ocean views",
    price: 22000000,
    location: "Miami, FL",
    bedrooms: 7,
    bathrooms: 8,
    sqft: 12000,
    image_url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Ski Chalet in Aspen",
    description: "Luxury mountain retreat with ski-in/ski-out access and heated pool",
    price: 18000000,
    location: "Aspen, CO",
    bedrooms: 6,
    bathrooms: 6,
    sqft: 9500,
    image_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Hamptons Beach House",
    description: "Elegant beachfront estate with private tennis court and guest house",
    price: 32000000,
    location: "The Hamptons, NY",
    bedrooms: 7,
    bathrooms: 7.5,
    sqft: 11000,
    image_url: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Lake Tahoe Lodge",
    description: "Rustic luxury lodge with stunning lake views and private beach",
    price: 15000000,
    location: "Lake Tahoe, CA",
    bedrooms: 5,
    bathrooms: 5,
    sqft: 8000,
    image_url: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Historic Boston Townhouse",
    description: "Exquisitely restored historic townhouse in Beacon Hill",
    price: 12500000,
    location: "Boston, MA",
    bedrooms: 5,
    bathrooms: 4.5,
    sqft: 7000,
    image_url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "Desert Oasis in Scottsdale",
    description: "Modern desert retreat with stunning mountain views and spa amenities",
    price: 9500000,
    location: "Scottsdale, AZ",
    bedrooms: 4,
    bathrooms: 4.5,
    sqft: 6500,
    image_url: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    title: "San Francisco Victorian",
    description: "Elegant fully-restored Victorian with Golden Gate Bridge views",
    price: 18500000,
    location: "San Francisco, CA",
    bedrooms: 6,
    bathrooms: 5.5,
    sqft: 7500,
    image_url: "https://images.unsplash.com/photo-1600566752355-35792bedcfe3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    title: "Austin Hill Country Estate",
    description: "Luxury ranch-style estate with panoramic hill country views",
    price: 12500000,
    location: "Austin, TX",
    bedrooms: 5,
    bathrooms: 5,
    sqft: 8500,
    image_url: "https://images.unsplash.com/photo-1600566752227-51d8a82e39e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    title: "Seattle Waterfront Mansion",
    description: "Modern waterfront mansion with private boat dock",
    price: 22000000,
    location: "Seattle, WA",
    bedrooms: 6,
    bathrooms: 6.5,
    sqft: 9500,
    image_url: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 13,
    title: "Charleston Plantation Home",
    description: "Historic plantation home with extensive gardens and guest cottages",
    price: 17500000,
    location: "Charleston, SC",
    bedrooms: 7,
    bathrooms: 6,
    sqft: 10000,
    image_url: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 14,
    title: "Chicago Penthouse",
    description: "Ultra-modern penthouse with panoramic city and lake views",
    price: 18500000,
    location: "Chicago, IL",
    bedrooms: 4,
    bathrooms: 4.5,
    sqft: 6000,
    image_url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 15,
    title: "Napa Valley Vineyard Estate",
    description: "Luxury estate with private vineyard and wine production facilities",
    price: 25000000,
    location: "Napa Valley, CA",
    bedrooms: 6,
    bathrooms: 7,
    sqft: 12000,
    image_url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 16,
    title: "Park City Mountain Retreat",
    description: "Luxury ski-in/ski-out home with private hot tub and theater",
    price: 16500000,
    location: "Park City, UT",
    bedrooms: 5,
    bathrooms: 5.5,
    sqft: 8500,
    image_url: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 17,
    title: "New Orleans French Quarter Mansion",
    description: "Historic mansion with private courtyard and rooftop terrace",
    price: 12500000,
    location: "New Orleans, LA",
    bedrooms: 5,
    bathrooms: 5,
    sqft: 8000,
    image_url: "https://images.unsplash.com/photo-1600566752227-51d8a82e39e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 18,
    title: "Santa Fe Adobe Estate",
    description: "Authentic adobe estate with stunning desert views and art collection",
    price: 9500000,
    location: "Santa Fe, NM",
    bedrooms: 4,
    bathrooms: 4.5,
    sqft: 7000,
    image_url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 19,
    title: "Hawaii Oceanfront Paradise",
    description: "Private tropical compound with multiple villas and beach access",
    price: 35000000,
    location: "Kauai, HI",
    bedrooms: 8,
    bathrooms: 9,
    sqft: 15000,
    image_url: "https://images.unsplash.com/photo-1600566752355-35792bedcfe3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 20,
    title: "Washington DC Embassy Mansion",
    description: "Historic embassy-style mansion in prestigious Kalorama neighborhood",
    price: 28000000,
    location: "Washington, DC",
    bedrooms: 7,
    bathrooms: 7.5,
    sqft: 12000,
    image_url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default luxuryProperties;
