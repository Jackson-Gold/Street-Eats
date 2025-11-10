import React, { useMemo, useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation';
import { mockTrucks } from '../data/mockTrucks';
import { palette } from '../theme/colors';
import { typography } from '../theme/typography';
import { Tag } from '../components/Tag';
import { RatingBadge } from '../components/RatingBadge';
import { FavoriteButton } from '../components/FavoriteButton';
import { ScheduleStrip } from '../components/ScheduleStrip';
import { MapPreview } from '../components/MapPreview';
import { UpdateCard } from '../components/UpdateCard';
import { ReviewCard } from '../components/ReviewCard';

const detailSections = ['Updates', 'Menu', 'Reviews'] as const;

type TruckDetailRoute = RouteProp<RootStackParamList, 'TruckDetail'>;

type DetailSection = (typeof detailSections)[number];

const TruckDetailScreen: React.FC = () => {
  const route = useRoute<TruckDetailRoute>();
  const [section, setSection] = useState<DetailSection>('Updates');

  const truck = useMemo(() => mockTrucks.find((item) => item.id === route.params?.id), [route.params?.id]);

  if (!truck) {
    return (
      <View style={styles.missing}>
        <Text style={styles.missingText}>Truck not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ImageBackground source={{ uri: truck.heroImage }} style={styles.hero} imageStyle={styles.heroImage}>
        <LinearGradient colors={['rgba(8,8,12,0.15)', 'rgba(8,8,12,0.95)']} style={StyleSheet.absoluteFillObject} />
        <View style={styles.heroContent}>
          <View style={styles.heroBadgeRow}>
            <RatingBadge rating={truck.rating} count={truck.ratingCount} />
            <FavoriteButton isActive={false} count={truck.favoriteCount} />
          </View>
          <Text style={styles.heroTitle}>{truck.name}</Text>
          <Text style={styles.heroSubtitle}>
            {truck.cuisine} • {truck.priceLevel} • {truck.location.neighborhood}
          </Text>
          <View style={styles.heroTags}>
            {truck.tags.map((tag) => (
              <Tag key={tag} label={tag} tone="secondary" />
            ))}
          </View>
          <View style={styles.heroMeta}>
            <View style={styles.metaBlock}>
              <Ionicons name="walk" size={16} color={palette.accent} />
              <Text style={styles.metaText}>{truck.distanceMinutes} min walk</Text>
            </View>
            <View style={styles.metaBlock}>
              <Ionicons name="time" size={16} color={palette.accent} />
              <Text style={styles.metaText}>{truck.schedule[0]?.start} – {truck.schedule[0]?.end}</Text>
            </View>
            <View style={styles.metaBlock}>
              <Ionicons name="people" size={16} color={palette.accent} />
              <Text style={styles.metaText}>{truck.favoriteCount.toLocaleString()} tracking</Text>
            </View>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.body}>
        <ScheduleStrip schedule={truck.schedule} />
        <MapPreview
          latitude={truck.location.latitude}
          longitude={truck.location.longitude}
          name={truck.name}
        />

        <View style={styles.sectionTabs}>
          {detailSections.map((item) => {
            const isActive = item === section;
            return (
              <Text
                key={item}
                onPress={() => setSection(item)}
                style={[styles.sectionTab, isActive && styles.sectionTabActive]}
              >
                {item}
              </Text>
            );
          })}
        </View>

        {section === 'Updates' && (
          <View>
            {truck.crowdUpdates.map((update) => (
              <UpdateCard key={update.id} update={update} />
            ))}
          </View>
        )}

        {section === 'Menu' && (
          <View style={styles.menuSection}>
            <Text style={styles.menuDescription}>
              Crowd favorites tonight include {truck.specials.join(', ')}. Owners and trusted locals share menu intel
              and flash specials here. Expect frequent updates around lunch and late-night rushes.
            </Text>
            <View style={styles.menuGrid}>
              {truck.specials.map((special) => (
                <View key={special} style={styles.menuCard}>
                  <Ionicons name="sparkles" size={18} color={palette.primary} />
                  <Text style={styles.menuCardText}>{special}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {section === 'Reviews' && (
          <View>
            {truck.reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.background
  },
  hero: {
    height: 400,
    justifyContent: 'flex-end'
  },
  heroImage: {
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28
  },
  heroContent: {
    padding: 24,
    gap: 12
  },
  heroBadgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  heroTitle: {
    ...typography.h1,
    fontSize: 30
  },
  heroSubtitle: {
    color: palette.textSecondary
  },
  heroTags: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  heroMeta: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 4
  },
  metaBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6
  },
  metaText: {
    color: palette.textSecondary,
    fontSize: 12,
    fontWeight: '600'
  },
  body: {
    paddingHorizontal: 20,
    paddingBottom: 40
  },
  sectionTabs: {
    flexDirection: 'row',
    gap: 18,
    marginVertical: 16
  },
  sectionTab: {
    color: palette.textSecondary,
    fontSize: 16
  },
  sectionTabActive: {
    color: palette.textPrimary,
    fontWeight: '700'
  },
  menuSection: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 18,
    padding: 18,
    gap: 16
  },
  menuDescription: {
    color: palette.textSecondary,
    lineHeight: 20
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12
  },
  menuCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: 'rgba(255, 107, 61, 0.14)',
    borderRadius: 16,
    padding: 12
  },
  menuCardText: {
    color: palette.primary,
    fontWeight: '600'
  },
  missing: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.background
  },
  missingText: {
    color: palette.textSecondary
  }
});

export default TruckDetailScreen;
