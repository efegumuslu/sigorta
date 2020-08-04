import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
} from 'react-native';

import Text from '../../components/text';
import Image from '../../components/image';

import { size, WIDTH } from '../../helpers/statics';
import Colors from '../../consts/colors';

const DATA = [
  { name: 'Onur Orhan Tamircisi', website: 'www.google.com.tr', phone: '+905067207371' },
  { name: 'Onur Orhan Tamircisi 2', website: 'www.google.com.tr', phone: '+905067207371' },
  { name: 'Onur Orhan Tamircisi 3', website: 'www.google.com.tr', phone: '+905067207371' },
  { name: 'Onur Orhan Tamircisi 4', website: 'www.google.com.tr', phone: '+905067207371' },
  { name: 'Onur Orhan Tamircisi', website: 'www.google.com.tr', phone: '+905067207371' },
  { name: 'Onur Orhan Tamircisi', website: 'www.google.com.tr', phone: '+905067207371' },
  { name: 'Onur Orhan Tamircisi 6', website: 'www.google.com.tr', phone: '+905067207371' },
  { name: 'Onur Orhan Tamircisi', website: 'www.google.com.tr', phone: '+905067207371' },
  { name: 'Onur Orhan Tamircisi', website: 'www.google.com.tr', phone: '+905067207371' },
  { name: 'Onur Orhan Tamircisi 7', website: 'www.google.com.tr', phone: '+905067207371' },
  { name: 'Onur Orhan Tamircisi', website: 'www.google.com.tr', phone: '+905067207371' },
  { name: 'Onur Orhan Tamircisi 8', website: 'www.google.com.tr', phone: '+905067207371' },
  { name: 'Onur Orhan Tamircisi', website: 'www.google.com.tr', phone: '+905067207371' },
  { name: 'Onur Orhan Tamircisi 9', website: 'www.google.com.tr', phone: '+905067207371' },
  { name: 'Onur Orhan Tamircisi', website: 'www.google.com.tr', phone: '+905067207371' },
  { name: 'Onur Orhan Tamircisi 11', website: 'www.google.com.tr', phone: '+905067207371' },
  { name: 'Onur Orhan Tamircisi 12', website: 'www.google.com.tr', phone: '+905067207371' },
  { name: 'Onur Orhan Tamircisi 13', website: 'www.google.com.tr', phone: '+905067207371' },
];

const CorporationList = () => {
  const {
    flatlistStyle,
    itemContainerStyle,
    infoContainerStyle,
    buttonsContainerStyle,
    callIconStyle,
    seperatorViewStyle,
    routeIconStyle,
    flatlistContentContainerStyle,
    blankViewStyle,
  } = styles();
  return (
    <FlatList
      style={ flatlistStyle }
      contentContainerStyle={ flatlistContentContainerStyle }
      ListHeaderComponent={ <View style={ blankViewStyle } /> }
      data={ DATA }
      renderItem={ ({ item }) => {
        const { name, website, phone } = item;
        return (
          <View style={ itemContainerStyle }>
            <View style={ infoContainerStyle }>
              <Text
                fontSize={ 16 }
                color="blue"
                fontFamily="SFProMedium"
              >
                { name }
              </Text>
              <Text
                fontSize={ 15 }
                color="greyBold"
                fontFamily="SFProMedium"
              >
                { website }
              </Text>
            </View>
            <View style={ buttonsContainerStyle }>
              <Image
                source="call"
                style={ callIconStyle }
              />
              <View style={ seperatorViewStyle } />
              <Image
                source="route"
                style={ routeIconStyle }
              />
            </View>
          </View>
        );
      } }
    />
  );
};

const styles = () => StyleSheet.create({
  flatlistStyle: {
    flex: 1,
    width: WIDTH,
    backgroundColor: Colors.backgroundColor,
  },
  itemContainerStyle: {
    flexDirection: 'row',
    width: WIDTH - size(50),
    alignSelf: 'center',
    paddingTop: size(10),
    paddingBottom: size(10),
    borderBottomWidth: 0.5,
    borderColor: Colors.greyBold,
  },
  infoContainerStyle: {
    flex: 4,
    height: size(50),
    justifyContent: 'center',
  },
  buttonsContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  callIconStyle: {
    height: size(17),
    width: size(17),
    resizeMode: 'contain',
  },
  seperatorViewStyle: {
    height: '50%',
    width: 0.7,
    backgroundColor: Colors.greyMedium,
  },
  routeIconStyle: {
    height: size(17),
    width: size(17),
    resizeMode: 'contain',
  },
  flatlistContentContainerStyle: {
    paddingBottom: size(20),
  },
  blankViewStyle: {
    height: size(120),
  },
});

export default CorporationList;
