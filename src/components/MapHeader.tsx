import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { palette } from '../theme/colors';
import { typography } from '../theme/typography';

export const MapHeader: React.FC = () => (
  <ImageBackground
    source={{
      uri: 'https://images.unsplash.com/photo-1529927058770-71c56599c602?auto=format&fit=crop&w=1400&q=80'
    }}
    style={styles.container}
    imageStyle={styles.image}
  >
    <LinearGradient colors={['rgba(8,8,12,0.1)', 'rgba(8,8,12,0.95)']} style={StyleSheet.absoluteFillObject} />
    <View style={styles.content}>
      <Text style={typography.subtitle}>Live Now</Text>
      <Text style={styles.title}>Food trucks buzzing nearby</Text>
      <Text style={styles.caption}>Tap a pin to jump into menus, crowd updates, and trusted reviews.</Text>
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    height: 220,
    borderRadius: 28,
    overflow: 'hidden',
    marginBottom: 24
  },
  image: {
    borderRadius: 28
  },
  content: {
    position: 'absolute',
    bottom: 24,
    left: 20,
    right: 20
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: palette.textPrimary,
    marginTop: 8,
    marginBottom: 4
  },
  caption: {
    color: palette.textSecondary,
    lineHeight: 20
  }
});
