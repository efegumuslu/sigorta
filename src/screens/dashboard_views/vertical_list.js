import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
 
import Text from '../../components/text';
import Image from '../../components/image';
import { WIDTH, size } from '../../helpers/statics';

import NavigationActions from '../../navigation/navigation_actions';

const DATA = [
  { image: 'banner1', text: 'Hasar anında yapmanız gerekenler' },
  { image: 'banner2', text: 'Bütçenize en uygun primlerle yaşayın!' },
  { image: 'banner3', text: 'Evde kalırken, evinizi de koruyun!' },
];

const SIZE = WIDTH - size(20);

const HorizontalList = () => {
  return (
    <View>
      {DATA.map((item) => {
        return <VerticalListItem item={ item } />
      })}
    </View>
  );
};

const VerticalListItem = ({ item }) => {
  const { image, text } = item;
  
  const { navigatePush } = NavigationActions();

  const onPress = () => {
    navigatePush('BannerDetail', { item });
  }

  const { itemContainerStyle, imageStyle, textStyle } = styles();

  return (
    <TouchableOpacity
      onPress={ onPress }
      style={ itemContainerStyle }
    >
      <Image style={ imageStyle } source={ image } />
      <Text
        color="white"
        fontFamily="SFProBold"
        fontSize={ 22 }
        style={ textStyle }
      >
        { text }
      </Text>
    </TouchableOpacity>
  )
}

const styles = () => StyleSheet.create({
  itemContainerStyle: {
    borderRadius: size(15),
    borderRadius: size(15),
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    overflow: 'hidden',
    marginBottom: size(16),
    height: SIZE,
    width: SIZE,
    shadowColor: "rgba(0, 0, 0, 0.7)",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
    alignSelf: 'center',
  },
  imageStyle: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textStyle: {
    marginBottom: '5%',
    marginLeft: '5%',
  },
});

export default HorizontalList;
