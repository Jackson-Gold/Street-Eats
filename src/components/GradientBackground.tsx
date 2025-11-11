import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { gradients } from '../theme/colors';

interface GradientBackgroundProps {
  children: ReactNode;
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({ children }) => {
  return (
    <View style={styles.gradient}>
      <View style={styles.overlay} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    backgroundColor: gradients.twilight[0]
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: gradients.twilight[1],
    opacity: 0.7
  }
});
