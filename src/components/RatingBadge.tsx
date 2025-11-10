import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { palette } from '../theme/colors';

interface RatingBadgeProps {
  rating: number;
  count?: number;
}

export const RatingBadge: React.FC<RatingBadgeProps> = ({ rating, count }) => (
  <View style={styles.container}>
    <Ionicons name="star" size={14} color={palette.secondary} style={styles.icon} />
    <Text style={styles.rating}>{rating.toFixed(1)}</Text>
    {typeof count === 'number' && <Text style={styles.count}>({count})</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 209, 102, 0.14)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999
  },
  icon: {
    marginRight: 4
  },
  rating: {
    color: palette.secondary,
    fontWeight: '600',
    fontSize: 13,
    marginRight: 4
  },
  count: {
    color: palette.textSecondary,
    fontSize: 12
  }
});
