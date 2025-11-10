import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { palette } from '../theme/colors';

interface EmptyStateProps {
  icon?: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon = 'compass-outline',
  title,
  description
}) => (
  <View style={styles.container}>
    <View style={styles.iconWrapper}>
      <Ionicons name={icon} size={32} color={palette.accent} />
    </View>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 64,
    alignItems: 'center',
    gap: 16
  },
  iconWrapper: {
    backgroundColor: 'rgba(39,225,193,0.12)',
    padding: 18,
    borderRadius: 999
  },
  title: {
    color: palette.textPrimary,
    fontWeight: '600',
    fontSize: 18
  },
  description: {
    color: palette.textSecondary,
    textAlign: 'center',
    paddingHorizontal: 32,
    lineHeight: 20
  }
});
