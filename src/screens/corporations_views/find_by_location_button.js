import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { size } from '../../helpers/statics';

import Image from '../../components/image';
import Text from '../../components/text';
import Colors from '../../consts/colors';

const FindByLocationButton = () => {
  const { containerStyle, whiteRouteIconStyle } = styles();

  return (
    <TouchableOpacity
      style={ containerStyle }
    >
      <Text
        fontFamily="SFProMedium"
        fontSize={ 15 }
        color="white"
      >
        Şu anki konuma göre ara
      </Text>
      <Image
        source="white_route"
        style={ whiteRouteIconStyle }
      />
    </TouchableOpacity>
  );
};

const styles = () => StyleSheet.create({
  containerStyle: {
    height: size(40),
    borderRadius: 40,
    position: 'absolute',
    bottom: '12%',
    alignSelf: 'center',
    width: size(229),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.blue,
    flexDirection: 'row',
    paddingLeft: size(18),
    paddingRight: size(18),
  },
  whiteRouteIconStyle: {
    height: size(16),
    width: size(16),
    resizeMode: 'contain',
  },
});

export default FindByLocationButton;
