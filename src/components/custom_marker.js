import React from 'react';
import { StyleSheet } from 'react-native';

import { Marker } from 'react-native-maps';

import NavigationActions from '../navigation/navigation_actions';
import { Images } from '../helpers/assets';

const CustomMarker = () => {
  const { navigatePush } = NavigationActions();

  const onPress = () => {
    navigatePush('CorporationDetailModal');
  };

  return (
    <Marker
      onPress={ onPress }
      coordinate={ {
        latitude: 41.047867,
        longitude: 28.898272,
      } }
      image={ Images.marker }
    />
  );
};

const styles = () => StyleSheet.create({
});

export default CustomMarker;
