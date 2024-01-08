import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken("pk.eyJ1Ijoic2FtdXBlc2IiLCJhIjoiY2xwaWsxcjNuMDA2djJrbzN6OHE4YjJ3cSJ9.CHU2Q4LM9K2IktH16xP-pA");

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <MapboxGL.MapView
        styleURL={MapboxGL.StyleURL.Street}
        zoomLevel={17}
        centerCoordinate={[-46.6822926, -23.5869514]}
        style={{ flex: 1 }}
      >
        <MapboxGL.Camera
          zoomLevel={17}
          centerCoordinate={[-46.6822926, -23.5869514]}
          animationMode={'flyTo'}
          animationDuration={0}
        />
      </MapboxGL.MapView>
      <WebView source={{ uri: 'index.html' }} style={{ flex: 1 }} />
    </View>
  );
}