import { useEffect, useState } from 'react';

interface MockLocation {
  latitude: number;
  longitude: number;
  city: string;
  lastUpdated: string;
}

export const useMockLocation = () => {
  const [location, setLocation] = useState<MockLocation | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLocation({
        latitude: 39.9524,
        longitude: -75.1652,
        city: 'Philadelphia',
        lastUpdated: 'Moments ago'
      });
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return location;
};
