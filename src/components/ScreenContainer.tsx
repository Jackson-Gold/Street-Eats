import React, { ReactNode } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { palette } from '../theme/colors';

interface ScreenContainerProps {
  children: ReactNode;
  padded?: boolean;
  backgroundColor?: string;
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  padded = true,
  backgroundColor = palette.background
}) => {
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}> 
      <View style={[styles.inner, padded && styles.padded]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  inner: {
    flex: 1
  },
  padded: {
    paddingHorizontal: 20,
    paddingTop: 16
  }
});
