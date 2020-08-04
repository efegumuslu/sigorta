import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';

import { WIDTH, HEIGHT } from '../../helpers/statics';

import CustomMarker from '../../components/custom_marker';

import FindByLocationButton from './find_by_location_button';

const GoogleMap = () => {
  const { mapViewContainerStyle, mapStyle } = styles();

  return (
    <View style={ mapViewContainerStyle }>
      <MapView
        initialRegion={ {
          latitude: 41.047867,
          longitude: 28.898272,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        } }
        provider={ PROVIDER_DEFAULT }
        style={ mapStyle }
      >
        <CustomMarker />
      </MapView>
      <FindByLocationButton />
    </View>
  );
};

const styles = () => StyleSheet.create({
  mapViewContainerStyle: {
    flex: 1,
    position: 'absolute',
    zIndex: -1,
    width: WIDTH,
  },
  mapStyle: {
    height: HEIGHT,
    width: WIDTH,
  },
});

export default GoogleMap;
