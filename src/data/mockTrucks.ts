import { FoodTruck } from '../types';

export const mockTrucks: FoodTruck[] = [
  {
    id: 'truck-1',
    name: 'Luna Lucha Tacos',
    cuisine: 'Tacos',
    heroImage:
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80',
    rating: 4.8,
    ratingCount: 321,
    priceLevel: '$$',
    distanceMinutes: 6,
    location: {
      latitude: 39.9524,
      longitude: -75.1902,
      address: '34th & Walnut St',
      neighborhood: 'University City'
    },
    schedule: [
      { day: 'Mon', start: '11:00 AM', end: '3:00 PM' },
      { day: 'Wed', start: '11:30 AM', end: '4:00 PM' },
      { day: 'Fri', start: '10:30 AM', end: '2:30 PM' }
    ],
    tags: ['Gluten-Free', 'Vegetarian'],
    specials: ['Birria Quesa Tacos', 'Smoked Pineapple Agua Fresca'],
    reviews: [
      {
        id: 'review-1',
        author: 'Maya Chen',
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
        rating: 5,
        relativeTime: '2h ago',
        upvotes: 42,
        content:
          'These birria tacos are unreal. The tortillas are crispy, and the consomé has so much depth. Lines are worth it!'
      },
      {
        id: 'review-2',
        author: 'Andre Patel',
        avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
        rating: 4,
        relativeTime: '1d ago',
        upvotes: 17,
        content:
          'Great vegan options and super friendly staff. Wish they stayed open a little later for dinner runs.'
      }
    ],
    crowdUpdates: [
      {
        id: 'update-1',
        reporter: 'Elena R.',
        confidence: 0.9,
        status: 'Open',
        message: 'Serving and line is ~10 min. They mentioned closing early if they sell out.',
        timestamp: '9 mins ago'
      },
      {
        id: 'update-2',
        reporter: 'Owner',
        confidence: 1,
        status: 'Open',
        message: 'Verde salsa is back! We will be here until 3PM or sellout.',
        timestamp: '1h ago'
      }
    ],
    ownerVerified: true,
    favoriteCount: 812
  },
  {
    id: 'truck-2',
    name: 'Midnight Mochi',
    cuisine: 'Dessert',
    heroImage:
      'https://images.unsplash.com/photo-1514516430032-7f40ed986c5f?auto=format&fit=crop&w=1200&q=80',
    rating: 4.7,
    ratingCount: 209,
    priceLevel: '$$',
    distanceMinutes: 12,
    location: {
      latitude: 39.9493,
      longitude: -75.1667,
      address: 'Rittenhouse Square',
      neighborhood: 'Center City'
    },
    schedule: [
      { day: 'Thu', start: '5:00 PM', end: '10:00 PM' },
      { day: 'Fri', start: '5:30 PM', end: '11:30 PM' },
      { day: 'Sat', start: '5:00 PM', end: '12:30 AM' }
    ],
    tags: ['Vegetarian'],
    specials: ['Matcha Strawberry Parfait', 'Toasted Black Sesame Soft Serve'],
    reviews: [
      {
        id: 'review-3',
        author: 'Jordan Miles',
        avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
        rating: 5,
        relativeTime: '4h ago',
        upvotes: 33,
        content: 'Dessert heaven. The mochi donuts are crispy outside, chewy inside. Try the yuzu glaze!'
      }
    ],
    crowdUpdates: [
      {
        id: 'update-3',
        reporter: 'Verified Owner',
        confidence: 1,
        status: 'Open',
        message: 'We just parked on the west side of the park. Fresh batch of taro mochi donuts dropping now! ',
        timestamp: '25 mins ago'
      }
    ],
    ownerVerified: true,
    favoriteCount: 623
  },
  {
    id: 'truck-3',
    name: 'Seoul Station BBQ',
    cuisine: 'Asian Fusion',
    heroImage:
      'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1200&q=80',
    rating: 4.6,
    ratingCount: 508,
    priceLevel: '$$',
    distanceMinutes: 4,
    location: {
      latitude: 39.9517,
      longitude: -75.1932,
      address: '36th & Market St',
      neighborhood: 'University City'
    },
    schedule: [
      { day: 'Tue', start: '11:30 AM', end: '4:00 PM' },
      { day: 'Thu', start: '11:00 AM', end: '3:30 PM' }
    ],
    tags: ['Halal'],
    specials: ['Gochujang BBQ Fries', 'Kimchi Bulgogi Bowl'],
    reviews: [
      {
        id: 'review-4',
        author: 'Sasha Roman',
        avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
        rating: 4,
        relativeTime: '3d ago',
        upvotes: 19,
        content:
          'Portions are generous and the pickled slaw is refreshing. They run out of short rib fast—get there early.'
      }
    ],
    crowdUpdates: [
      {
        id: 'update-4',
        reporter: 'Jaylen D.',
        confidence: 0.7,
        status: 'Relocating',
        message: 'They just tweeted they’re moving to 38th for lunch rush.',
        timestamp: '14 mins ago'
      },
      {
        id: 'update-5',
        reporter: 'Owner',
        confidence: 1,
        status: 'Open',
        message: 'Arriving on 36th & Market by 11:45A. Short rib special until sellout.',
        timestamp: '1h ago'
      }
    ],
    ownerVerified: false,
    favoriteCount: 489
  }
];
