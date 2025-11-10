import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { palette } from '../theme/colors';

interface TagProps {
  label: string;
  tone?: 'primary' | 'secondary' | 'neutral';
}

export const Tag: React.FC<TagProps> = ({ label, tone = 'neutral' }) => {
  const paletteMap = {
    primary: { backgroundColor: 'rgba(255, 107, 61, 0.16)', color: palette.primary },
    secondary: { backgroundColor: 'rgba(39, 225, 193, 0.16)', color: palette.accent },
    neutral: { backgroundColor: 'rgba(255, 255, 255, 0.08)', color: palette.textSecondary }
  } as const;

  return (
    <View style={[styles.container, paletteMap[tone]]}>
      <Text style={[styles.text, { color: paletteMap[tone].color }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    marginRight: 8,
    marginBottom: 8
  },
  text: {
    fontSize: 12,
    fontWeight: '600'
  }
});
