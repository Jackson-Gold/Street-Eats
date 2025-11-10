import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { palette } from '../theme/colors';

interface FavoriteButtonProps {
  isActive: boolean;
  count: number;
  onPress?: () => void;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isActive, count, onPress }) => (
  <Pressable
    onPress={onPress}
    style={[styles.button, isActive && styles.activeButton]}
    accessibilityRole="button"
  >
    <Ionicons
      name={isActive ? 'heart' : 'heart-outline'}
      size={18}
      color={isActive ? palette.surface : palette.accent}
    />
    <Text style={[styles.label, isActive && styles.activeLabel]}>{count.toLocaleString()}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(39,225,193,0.12)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999
  },
  activeButton: {
    backgroundColor: palette.accent
  },
  label: {
    color: palette.accent,
    fontWeight: '600'
  },
  activeLabel: {
    color: palette.surface
  }
});
