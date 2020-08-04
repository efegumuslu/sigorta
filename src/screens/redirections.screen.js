import React from 'react';
import {
  StyleSheet, View, TouchableOpacity, ImageBackground, Linking,
} from 'react-native';
import Image from '../components/image';
import { Images } from '../helpers/assets';
import Text from '../components/text';
import NavigationActions from '../navigation/navigation_actions';

import { WIDTH, size } from '../helpers/statics';

const Redirections = ({ route }) => {
  const { links } = route.params;
  const { navigatePop } = NavigationActions();

  const onPress = () => {
    navigatePop();
  };

  const {
    contentContainerStyle,
    topBannerImageStyle,
    buttonsContainer,
    imageStyle,
    buttonStyle,
    closeButtonStyle,
    backgroundViewStyle,
    backgroundImageStyle,
  } = styles();

  const redirectVakif = () => {
    Linking.openURL('vakifemeklilikurl://');
  };
  const redirectZiraat = () => {};
  const redirectHalk = () => {
    Linking.openURL('halkemeklilik://');
  };

  return (
    <View style={ contentContainerStyle }>
      <View style={ backgroundViewStyle }>
        <ImageBackground source={ Images.redirection_top_banner } style={ backgroundImageStyle } />
        <TouchableOpacity style={ closeButtonStyle } onPress={ onPress }>
          <Text
            fontFamily="SFProNormal"
            fontSize={ 16 }
            color="grey"
          >
            Kapat
          </Text>
        </TouchableOpacity>
      </View>
      {/* <Image
        source="redirection_top_banner"
        style={ topBannerImageStyle }
      /> */}
      <View style={ buttonsContainer }>
        <TouchableOpacity
          onPress={ redirectVakif }
          style={ buttonStyle }
        >
          <Image
            source="vakif_redirect"
            style={ imageStyle }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ redirectZiraat }
          style={ buttonStyle }
        >
          <Image
            source="ziraat_redirect"
            style={ imageStyle }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ redirectHalk }
          style={ buttonStyle }
        >
          <Image
            source="halk_redirect"
            style={ imageStyle }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = () => StyleSheet.create({
  contentContainerStyle: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'flex-start',
  },
  topBannerImageStyle: {
    width: WIDTH,
    height: size(290),
    resizeMode: 'cover',
  },
  buttonsContainer: {
    marginTop: size(25),
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  imageStyle: {
    width: size(343),
    height: size(81),
  },
  buttonStyle: {
    marginTop: size(15),
  },
  closeButtonStyle: {
    marginRight: size(20),
    position: 'absolute',
    right: size(12),
    top: size(48),
  },
  backgroundViewStyle: {
    height: size(290),
    width: '100%',
  },
  backgroundImageStyle: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default Redirections;
