import { StyleSheet } from 'react-native';
import { palette } from './colors';

export const typography = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: '700',
    color: palette.textPrimary,
    letterSpacing: 0.2
  },
  h2: {
    fontSize: 24,
    fontWeight: '600',
    color: palette.textPrimary
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: palette.textSecondary
  },
  body: {
    fontSize: 15,
    fontWeight: '400',
    color: palette.textSecondary,
    lineHeight: 22
  },
  caption: {
    fontSize: 12,
    color: palette.muted
  }
});
