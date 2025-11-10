import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { palette } from '../theme/colors';
import { Review } from '../types';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Image source={{ uri: review.avatar }} style={styles.avatar} />
      <View style={{ flex: 1 }}>
        <Text style={styles.author}>{review.author}</Text>
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={14} color={palette.secondary} />
          <Text style={styles.rating}>{review.rating.toFixed(1)}</Text>
          <Text style={styles.relativeTime}>• {review.relativeTime}</Text>
        </View>
      </View>
      <View style={styles.upvoteBadge}>
        <Ionicons name="arrow-up" size={14} color={palette.textPrimary} />
        <Text style={styles.upvoteCount}>{review.upvotes}</Text>
      </View>
    </View>
    <Text style={styles.content}>{review.content}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22
  },
  author: {
    color: palette.textPrimary,
    fontWeight: '600',
    marginBottom: 4
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6
  },
  rating: {
    color: palette.secondary,
    fontWeight: '600'
  },
  relativeTime: {
    color: palette.textSecondary,
    fontSize: 12
  },
  upvoteBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(39, 225, 193, 0.12)',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
    gap: 4
  },
  upvoteCount: {
    color: palette.textPrimary,
    fontWeight: '600',
    fontSize: 12
  },
  content: {
    color: palette.textSecondary,
    fontSize: 14,
    lineHeight: 20
  }
});
