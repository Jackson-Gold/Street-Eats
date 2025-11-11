import React from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { palette, shadows } from '../theme/colors';
import { FoodTruck } from '../types';
import { RatingBadge } from './RatingBadge';
import { Tag } from './Tag';

interface TruckCardProps {
  truck: FoodTruck;
  onPress?: () => void;
}

export const TruckCard: React.FC<TruckCardProps> = ({ truck, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <ImageBackground source={{ uri: truck.heroImage }} style={styles.image} imageStyle={styles.imageBorder}>
        <View style={styles.overlay} />
        <View style={styles.ratingRow}>
          <RatingBadge rating={truck.rating} count={truck.ratingCount} />
          <View style={styles.distancePill}>
            <Ionicons name="walk" size={14} color={palette.textPrimary} />
            <Text style={styles.distanceText}>{truck.distanceMinutes} min walk</Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{truck.name}</Text>
            {truck.ownerVerified && (
              <View style={styles.verifiedBadge}>
                <Ionicons name="shield-checkmark" size={14} color={palette.surface} />
              </View>
            )}
          </View>
          <Text style={styles.subtitle}>
            {truck.cuisine} • {truck.priceLevel} • {truck.location.neighborhood}
          </Text>
          <View style={styles.tagRow}>
            {truck.tags.slice(0, 2).map((tag) => (
              <Tag key={tag} label={tag} tone="secondary" />
            ))}
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 28,
    overflow: 'hidden',
    marginBottom: 20,
    ...shadows.soft
  },
  image: {
    height: 240,
    justifyContent: 'space-between'
  },
  imageBorder: {
    borderRadius: 28
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(8, 8, 12, 0.78)'
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 18
  },
  distancePill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(8,8,12,0.65)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999
  },
  distanceText: {
    color: palette.textPrimary,
    fontSize: 12,
    fontWeight: '600'
  },
  content: {
    padding: 20
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  title: {
    color: palette.textPrimary,
    fontSize: 22,
    fontWeight: '700',
    flex: 1
  },
  verifiedBadge: {
    backgroundColor: palette.accent,
    padding: 8,
    borderRadius: 999
  },
  subtitle: {
    color: palette.textSecondary,
    marginTop: 6
  },
  tagRow: {
    flexDirection: 'row',
    marginTop: 12
  }
});
