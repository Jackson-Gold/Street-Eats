export type CuisineType =
  | 'Tacos'
  | 'BBQ'
  | 'Coffee'
  | 'Dessert'
  | 'Seafood'
  | 'Asian Fusion'
  | 'Vegan'
  | 'Mediterranean';

export type DietaryTag = 'Vegan' | 'Vegetarian' | 'Gluten-Free' | 'Halal' | 'Kosher' | 'Nut-Free';

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  relativeTime: string;
  upvotes: number;
  content: string;
  photos?: string[];
}

export interface ScheduleEntry {
  day: string;
  start: string;
  end: string;
}

export interface CrowdUpdate {
  id: string;
  reporter: string;
  confidence: number;
  status: 'Open' | 'Closed' | 'Relocating';
  message: string;
  timestamp: string;
}

export interface FoodTruck {
  id: string;
  name: string;
  cuisine: CuisineType;
  heroImage: string;
  rating: number;
  ratingCount: number;
  priceLevel: '$' | '$$' | '$$$';
  distanceMinutes: number;
  location: {
    latitude: number;
    longitude: number;
    address: string;
    neighborhood: string;
  };
  schedule: ScheduleEntry[];
  tags: DietaryTag[];
  specials: string[];
  reviews: Review[];
  crowdUpdates: CrowdUpdate[];
  ownerVerified: boolean;
  favoriteCount: number;
}
