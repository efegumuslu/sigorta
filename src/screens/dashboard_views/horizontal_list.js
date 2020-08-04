import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';

import Text from '../../components/text';
import Image from '../../components/image';

import { size, WIDTH } from '../../helpers/statics';
import Colors from '../../consts/colors';

import NavigationActions from '../../navigation/navigation_actions';

const SIZE = size(130);

const DATA = [
  { text: 'Konut' },
  { text: 'Sağlık' },
  { text: 'Tamamlayıcı Sağlık' },
]

const HorizontalList = () => {
  const { flatlistStyle, whiteOverlayStyle } = styles();
  return (
    <View>
      <Image
        source="whiteOverlay"
        style={ whiteOverlayStyle }
      />
      <FlatList
        horizontal
        style={ flatlistStyle }
        data={ DATA }
        ListHeaderComponent={ <EmergencyItem /> }
        renderItem={({ item }) => <HorizontalListItem { ...item } />}
      />
      
    </View>
  );
};


const EmergencyItem = () => {
  const { navigatePush } = NavigationActions();

  const onPress = () => {
    navigatePush('Emergency')
  }

  const {
    emergencyContainerStyle,
    textStyle,
    listItemIconStyle,
  } = styles();

  return (
    <TouchableOpacity
      style={ emergencyContainerStyle }
      onPress={ onPress }
    >
      <Text
        color="white"
        fontFamily="SFProBold"
        fontSize={ 22 }
        style={ textStyle }
      >
        Acil Yardım
      </Text>
      <Image
        source="emergency"
        style={ listItemIconStyle }
      />
    </TouchableOpacity>
  )
}

const HorizontalListItem = ({ text }) => {
  const { navigatePush } = NavigationActions();
  const onPress = () => {
    navigatePush('ProductsDetail');
  }

  const {
    itemContainerStyle,
    textStyle,
    listItemIconStyle,
  } = styles();

  return (
    <TouchableOpacity
      style={ itemContainerStyle }
      onPress={ onPress }
    >
      <Text
        color="blue"
        fontFamily="SFProBold"
        fontSize={ 22 }
        style={ textStyle }
      >
        { text }
      </Text>
      <Image
        source="konut"
        style={ listItemIconStyle }
      />
    </TouchableOpacity>
  )
}

const styles = () => StyleSheet.create({
  flatlistStyle: {
    height: size(200),
    paddingLeft: size(10),
    paddingRight: size(20),
  },
  emergencyContainerStyle: {
    borderRadius: size(15),
    backgroundColor: Colors.red,
    height: SIZE,
    width: SIZE * 1.43,
    marginRight: size(10),
    shadowColor: 'rgba(0, 0, 0, 0.7)',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
  },
  itemContainerStyle: {
    borderRadius: size(15),
    backgroundColor: Colors.white,
    height: SIZE,
    width: SIZE * 1.43,
    marginRight: size(10),
    shadowColor: 'rgba(0, 0, 0, 0.7)',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
  },
  textStyle: {
    marginTop: '10%',
    marginLeft: '10%',
  },
  whiteOverlayStyle: {
    height: size(350),
    width: WIDTH,
    resizeMode: 'stretch',
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: -1,
  },
  listItemIconStyle: {
    position: 'absolute',
    bottom: size(15),
    right: size(15),
    height: size(36),
    width: size(36),
    resizeMode: 'contain',
  },
});

export default HorizontalList;
