import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation';
import { GradientBackground } from './src/components/GradientBackground';

const App: React.FC = () => {
  return (
    <GradientBackground>
      <StatusBar style="light" />
      <AppNavigator />
    </GradientBackground>
  );
};

export default App;
