import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { palette } from '../theme/colors';

interface SearchBarProps {
  placeholder?: string;
  onChangeText?: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Search trucks or cuisines', onChangeText }) => (
  <View style={styles.container}>
    <Ionicons name="search" size={20} color={palette.textSecondary} style={styles.icon} />
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={palette.textSecondary}
      style={styles.input}
      onChangeText={onChangeText}
    />
    <View style={styles.filterButton}>
      <Ionicons name="options" size={18} color={palette.surface} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.surface,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    gap: 12
  },
  icon: {
    opacity: 0.8
  },
  input: {
    flex: 1,
    color: palette.textPrimary,
    fontSize: 16
  },
  filterButton: {
    backgroundColor: palette.accent,
    padding: 8,
    borderRadius: 12
  }
});
