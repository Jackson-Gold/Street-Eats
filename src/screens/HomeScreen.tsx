import React, { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { ScreenContainer } from '../components/ScreenContainer';
import { SearchBar } from '../components/SearchBar';
import { TruckCard } from '../components/TruckCard';
import { MapHeader } from '../components/MapHeader';
import { SegmentControl } from '../components/SegmentControl';
import { palette } from '../theme/colors';
import { typography } from '../theme/typography';
import { mockTrucks } from '../data/mockTrucks';
import { RootStackParamList } from '../navigation';
import { useMockLocation } from '../hooks/useMockLocation';

const segments = ['Featured', 'Nearby', 'Trending'] as const;

type HomeScreenNavigation = NativeStackNavigationProp<RootStackParamList, 'Tabs'>;

const HomeScreen: React.FC = () => {
  const [segment, setSegment] = useState<(typeof segments)[number]>('Featured');
  const [query, setQuery] = useState('');
  const navigation = useNavigation<HomeScreenNavigation>();
  const location = useMockLocation();

  const filteredTrucks = useMemo(() => {
    return mockTrucks.filter((truck) =>
      truck.name.toLowerCase().includes(query.toLowerCase()) ||
      truck.cuisine.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <ScreenContainer>
      <FlatList
        data={filteredTrucks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TruckCard truck={item} onPress={() => navigation.navigate('TruckDetail', { id: item.id })} />
        )}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <View style={styles.headerRow}>
              <View>
                <Text style={styles.heading}>StreetEats</Text>
                <Text style={styles.subheading}>
                  {location ? `${location.city} · ${location.lastUpdated}` : 'Locating tasty trucks...'}
                </Text>
              </View>
              <View style={styles.avatarWrapper}>
                <Ionicons name="person" size={22} color={palette.textPrimary} />
              </View>
            </View>
            <SearchBar onChangeText={setQuery} />
            <MapHeader />
            <SegmentControl options={segments} value={segment} onChange={setSegment} />
            <View style={styles.sectionHeader}>
              <Text style={typography.h2}>{segment} trucks</Text>
              <Text style={styles.seeAll}>See all</Text>
            </View>
          </View>
        }
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18
  },
  heading: {
    ...typography.h1
  },
  subheading: {
    ...typography.subtitle,
    marginTop: 4
  },
  avatarWrapper: {
    width: 44,
    height: 44,
    borderRadius: 16,
    backgroundColor: palette.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.04)'
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  seeAll: {
    color: palette.textSecondary,
    fontSize: 14
  }
});

export default HomeScreen;
