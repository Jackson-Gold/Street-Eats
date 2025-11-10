# StreetEats Mobile (React Native)

StreetEats is a sleek mobile mockup that showcases how a community-powered food truck tracker could look and feel. The app is built with Expo + React Native and ships with curated sample data so it can be explored without a backend.

## Features

- **Map-first home** highlighting featured trucks, live segments, and contextual location info.
- **Detailed truck profiles** with crowd updates, specials, reviews, and schedule visualizations.
- **Discovery flows** that surface themed collections and filters for cuisines and dietary tags.
- **Favorites hub** to preview alerts and quick stats for saved trucks.
- **Contributor profile** illustrating gamified reputation and moderation tooling.

## Getting Started

> This repository provides the frontend experience only. All data is mocked locally for rapid iteration.

1. Install dependencies:
   ```bash
   npm install
   ```
2. Launch the Expo development server:
   ```bash
   npm run start
   ```
3. Use the Expo Go app or an emulator to preview the StreetEats experience.

## Tech Stack

- [Expo](https://expo.dev/) for zero-config React Native tooling
- [React Navigation](https://reactnavigation.org/) for tab + stack navigation
- [React Native Maps](https://github.com/react-native-maps/react-native-maps) for embedded map previews
- TypeScript for type-safety and expressiveness

## Project Structure

```
Street-Eats/
├── App.tsx
├── src/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── navigation/
│   ├── screens/
│   ├── theme/
│   └── utils/
└── assets/
```

Each screen consumes shared components and mock data to demonstrate end-to-end UX flows without network requests.

## Design Notes

- The palette leans into deep twilight gradients with neon highlights for a modern urban feel.
- Cards use generous rounding, subtle glassmorphism, and layered typography to create depth.
- Components are composed to be easily replaced with live API data when a backend is ready.

Enjoy exploring StreetEats!
