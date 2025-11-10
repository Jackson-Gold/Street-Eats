import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScreenContainer } from '../components/ScreenContainer';
import { palette } from '../theme/colors';
import { typography } from '../theme/typography';

const ProfileScreen: React.FC = () => {
  const stats = [
    { label: 'Check-ins', value: 42 },
    { label: 'Reviews', value: 18 },
    { label: 'Reputation', value: 'Gold' }
  ];

  const actions = [
    { icon: 'pencil', label: 'Contribution streaks' },
    { icon: 'notifications', label: 'Notification settings' },
    { icon: 'ribbon', label: 'Verified contributor perks' },
    { icon: 'shield', label: 'Moderation center' }
  ];

  return (
    <ScreenContainer>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={34} color={palette.surface} />
          </View>
          <Text style={styles.name}>Alex Morgan</Text>
          <Text style={styles.tagline}>Documenting Philly’s finest street bites since 2021</Text>
          <View style={styles.statsRow}>
            {stats.map((stat) => (
              <View key={stat.label} style={styles.stat}>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={typography.h2}>Your tools</Text>
          <View style={{ marginTop: 16, gap: 12 }}>
            {actions.map((action) => (
              <View key={action.label} style={styles.row}>
                <View style={styles.iconBadge}>
                  <Ionicons name={action.icon as keyof typeof Ionicons.glyphMap} size={18} color={palette.accent} />
                </View>
                <Text style={styles.rowLabel}>{action.label}</Text>
                <Ionicons name="chevron-forward" size={18} color={palette.textSecondary} />
              </View>
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={typography.h2}>Community impact</Text>
          <Text style={styles.sectionText}>
            High-reliability contributors unlock early beta features, exclusive tastings, and a direct line to truck owners
            looking for launch partners.
          </Text>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingBottom: 40,
    gap: 24
  },
  profileCard: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 24,
    padding: 24,
    gap: 16
  },
  avatar: {
    width: 86,
    height: 86,
    borderRadius: 28,
    backgroundColor: palette.accent,
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    color: palette.textPrimary,
    fontSize: 22,
    fontWeight: '700'
  },
  tagline: {
    color: palette.textSecondary,
    textAlign: 'center',
    lineHeight: 20
  },
  statsRow: {
    flexDirection: 'row',
    gap: 18
  },
  stat: {
    alignItems: 'center'
  },
  statValue: {
    color: palette.textPrimary,
    fontWeight: '700',
    fontSize: 18
  },
  statLabel: {
    color: palette.textSecondary,
    fontSize: 12,
    marginTop: 4
  },
  section: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 24,
    padding: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderRadius: 16,
    padding: 14
  },
  iconBadge: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: 'rgba(39,225,193,0.12)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rowLabel: {
    flex: 1,
    color: palette.textPrimary,
    fontWeight: '600'
  },
  sectionText: {
    color: palette.textSecondary,
    marginTop: 12,
    lineHeight: 20
  }
});

export default ProfileScreen;
