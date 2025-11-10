import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { palette } from '../theme/colors';
import { ScheduleEntry } from '../types';

interface ScheduleStripProps {
  schedule: ScheduleEntry[];
}

export const ScheduleStrip: React.FC<ScheduleStripProps> = ({ schedule }) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
    {schedule.map((entry) => (
      <View key={`${entry.day}-${entry.start}`} style={styles.card}>
        <Text style={styles.day}>{entry.day}</Text>
        <Text style={styles.time}>{entry.start}</Text>
        <Text style={styles.time}>– {entry.end}</Text>
      </View>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 4,
    gap: 12
  },
  card: {
    width: 120,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 16,
    padding: 12
  },
  day: {
    color: palette.textPrimary,
    fontWeight: '600',
    marginBottom: 6
  },
  time: {
    color: palette.textSecondary,
    fontSize: 12
  }
});
