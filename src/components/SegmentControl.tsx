import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { palette } from '../theme/colors';

interface SegmentControlProps<T extends string> {
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
}

export function SegmentControl<T extends string>({ options, value, onChange }: SegmentControlProps<T>) {
  return (
    <View style={styles.container}>
      {options.map((option) => {
        const isActive = value === option;
        return (
          <Pressable
            key={option}
            onPress={() => onChange(option)}
            style={[styles.option, isActive && styles.optionActive]}
          >
            <Text style={[styles.label, isActive && styles.labelActive]}>{option}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: 4,
    borderRadius: 16,
    marginBottom: 18
  },
  option: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center'
  },
  optionActive: {
    backgroundColor: palette.surface
  },
  label: {
    color: palette.textSecondary,
    fontWeight: '500'
  },
  labelActive: {
    color: palette.textPrimary,
    fontWeight: '600'
  }
});
