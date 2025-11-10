import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { EmptyState } from '../components/EmptyState';
import { FavoriteButton } from '../components/FavoriteButton';
import { mockTrucks } from '../data/mockTrucks';
import { palette } from '../theme/colors';
import { typography } from '../theme/typography';

const FavoritesScreen: React.FC = () => {
  const favorites = mockTrucks.slice(0, 2);

  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Text style={typography.h1}>Favorites</Text>
        <Text style={[typography.subtitle, { marginTop: 6 }]}>Stay in the loop when your go-to trucks pop up.</Text>
        {favorites.length === 0 ? (
          <EmptyState
            icon="heart-outline"
            title="No favorites yet"
            description="Tap the heart on trucks you love and we’ll keep you posted when they open nearby."
          />
        ) : (
          <View style={{ gap: 16, marginTop: 24 }}>
            {favorites.map((truck) => (
              <View key={truck.id} style={styles.card}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.cardTitle}>{truck.name}</Text>
                  <Text style={styles.cardSubtitle}>
                    {truck.cuisine} • {truck.location.neighborhood}
                  </Text>
                  <Text style={styles.cardMeta}>{truck.schedule[0]?.day} {truck.schedule[0]?.start}</Text>
                </View>
                <FavoriteButton isActive count={truck.favoriteCount} />
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingBottom: 40,
    gap: 20
  },
  card: {
    flexDirection: 'row',
    gap: 16,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 18,
    padding: 18,
    alignItems: 'center'
  },
  cardTitle: {
    color: palette.textPrimary,
    fontSize: 18,
    fontWeight: '700'
  },
  cardSubtitle: {
    color: palette.textSecondary,
    marginTop: 4
  },
  cardMeta: {
    color: palette.textSecondary,
    marginTop: 6,
    fontSize: 12
  }
});

export default FavoritesScreen;
