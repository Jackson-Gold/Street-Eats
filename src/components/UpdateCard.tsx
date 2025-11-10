import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { palette } from '../theme/colors';
import { CrowdUpdate } from '../types';

interface UpdateCardProps {
  update: CrowdUpdate;
}

const statusIcon: Record<CrowdUpdate['status'], keyof typeof Ionicons.glyphMap> = {
  Open: 'flame',
  Closed: 'close-circle',
  Relocating: 'navigate'
};

export const UpdateCard: React.FC<UpdateCardProps> = ({ update }) => {
  const tone = update.status === 'Open' ? palette.accent : update.status === 'Closed' ? palette.danger : palette.secondary;

  return (
    <View style={styles.container}>
      <View style={[styles.iconWrapper, { backgroundColor: `${tone}22` }]}> 
        <Ionicons name={statusIcon[update.status]} size={18} color={tone} />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.reporter}>{update.reporter}</Text>
          <Text style={styles.timestamp}>{update.timestamp}</Text>
        </View>
        <Text style={styles.message}>{update.message}</Text>
        <View style={styles.footer}>
          <View style={styles.chip}>
            <Ionicons name="shield-checkmark" size={12} color={palette.textSecondary} />
            <Text style={styles.chipText}>{Math.round(update.confidence * 100)}% confidence</Text>
          </View>
          <View style={styles.chip}>
            <Ionicons name="ellipse" size={10} color={tone} />
            <Text style={[styles.chipText, { color: tone }]}>{update.status}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.04)',
    padding: 14,
    borderRadius: 18,
    marginBottom: 12,
    gap: 12
  },
  iconWrapper: {
    padding: 10,
    borderRadius: 12
  },
  content: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4
  },
  reporter: {
    color: palette.textPrimary,
    fontWeight: '600'
  },
  timestamp: {
    color: palette.textSecondary,
    fontSize: 12
  },
  message: {
    color: palette.textSecondary,
    fontSize: 14,
    marginBottom: 10,
    lineHeight: 20
  },
  footer: {
    flexDirection: 'row',
    gap: 10
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.04)'
  },
  chipText: {
    color: palette.textSecondary,
    fontSize: 12,
    fontWeight: '500'
  }
});
