import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Text from '../../components/text';
import Image from '../../components/image';
import { size } from '../../helpers/statics';
import NavigationActions from '../../navigation/navigation_actions';

const RedirectButton = () => {
  const { buttonStyle, imageStyle } = styles();
  const { navigatePush } = NavigationActions();

  const onPressRedirections = () => {
    navigatePush('Redirections');
  };

  return (
    <TouchableOpacity
      activeOpacity={ 0.8 }
      onPress={ onPressRedirections }
      style={ buttonStyle }
    >
      <Text
        color="blue"
        fontFamily="SFProBold"
        fontSize={ 13 }
      >
        Emeklilik İşlemleri
      </Text>
      <Image
        source="redirect_button"
        style={ imageStyle }
      />
    </TouchableOpacity>
  );
};

const styles = () => StyleSheet.create({
  buttonStyle: {
    borderRadius: size(40),
    backgroundColor: 'white',
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 99,
    top: size(40),
    right: size(15),
    height: size(40),
    width: size(175),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: size(10),
    paddingRight: size(10),
  },
  imageStyle: {
    height: size(30),
    width: size(30),
  },
});

export default RedirectButton;
