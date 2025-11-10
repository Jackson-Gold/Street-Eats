import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { Tag } from '../components/Tag';
import { mockTrucks } from '../data/mockTrucks';
import { palette } from '../theme/colors';
import { typography } from '../theme/typography';
import { chunk } from '../utils/formatters';

const DiscoverScreen: React.FC = () => {
  const grouped = chunk(mockTrucks, 2);

  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <Text style={typography.h1}>Discover</Text>
        <Text style={[typography.subtitle, { marginTop: 8 }]}>Curated collections crafted by the crowd.</Text>
        <View style={styles.tagGrid}>
          {["Open now", 'Vegan gems', 'Late-night bites', 'Owner verified', 'Budget friendly', 'Award winners'].map(
            (tag) => (
              <Tag key={tag} label={tag} tone="primary" />
            )
          )}
        </View>
        <View style={{ gap: 24 }}>
          {grouped.map((pair, index) => (
            <View key={pair[0].id} style={styles.cardRow}>
              {pair.map((truck) => (
                <View key={truck.id} style={styles.card}>
                  <View style={styles.cardBadge}>
                    <Text style={styles.badgeText}>Top pick #{index * 2 + (pair.indexOf(truck) + 1)}</Text>
                  </View>
                  <Text style={styles.cardTitle}>{truck.name}</Text>
                  <Text style={styles.cardSubtitle}>
                    {truck.cuisine} • {truck.location.neighborhood}
                  </Text>
                  <View style={styles.cardFooter}>
                    <Text style={styles.footerText}>{truck.rating.toFixed(1)} rating</Text>
                    <Text style={styles.footerText}>{truck.distanceMinutes} min walk</Text>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingBottom: 32,
    gap: 24
  },
  tagGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  },
  cardRow: {
    flexDirection: 'row',
    gap: 16
  },
  card: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 20,
    padding: 16,
    gap: 12
  },
  cardBadge: {
    backgroundColor: 'rgba(255,107,61,0.16)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    alignSelf: 'flex-start'
  },
  badgeText: {
    color: palette.primary,
    fontWeight: '600',
    fontSize: 12
  },
  cardTitle: {
    color: palette.textPrimary,
    fontSize: 18,
    fontWeight: '700'
  },
  cardSubtitle: {
    color: palette.textSecondary,
    fontSize: 13
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footerText: {
    color: palette.textSecondary,
    fontSize: 12
  }
});

export default DiscoverScreen;
