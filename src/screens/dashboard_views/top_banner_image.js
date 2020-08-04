import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
 
import Image from '../../components/image';

import { WIDTH, size } from '../../helpers/statics';

import HorizontalList from './horizontal_list';

const TopBannerImage = () => {
  const { firstImageStyle, horizontalListContainer } = styles();

  return (
    <View style={{height: size(510)}}>
      <Image
        source="dashboard_first_image"
        style={ firstImageStyle }
      />
      <View style={ horizontalListContainer }>
        <HorizontalList />
      </View>
    </View>
  );
};

const styles = () => StyleSheet.create({
  firstImageStyle: {
    width: WIDTH,
    height: size(450),
    resizeMode: 'cover',
  },
  horizontalListContainer: {
    height: size(160),
    width: WIDTH,
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 99,
  },
});

export default TopBannerImage;
