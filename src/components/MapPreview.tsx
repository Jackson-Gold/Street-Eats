import React from 'react';
import MapView, { Marker, Region } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { palette } from '../theme/colors';

interface MapPreviewProps {
  latitude: number;
  longitude: number;
  name: string;
}

export const MapPreview: React.FC<MapPreviewProps> = ({ latitude, longitude, name }) => {
  const region: Region = {
    latitude,
    longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  };

  return (
    <View style={styles.container}>
      <MapView pointerEvents="none" style={styles.map} region={region}>
        <Marker coordinate={{ latitude, longitude }} title={name} pinColor={palette.primary} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    borderRadius: 18,
    overflow: 'hidden',
    marginVertical: 16
  },
  map: {
    flex: 1
  }
});
