import React, { useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { WIDTH } from '../helpers/statics';

import DropdownButton from './corporations_views/dropdown_button';
import CorporationsList from './corporations_views/corporations_list';
import GoogleMap from './corporations_views/google_map';

import Colors from '../consts/colors';

const LIST = [
  { name: 'Tamir Servisleri' },
  { name: 'Cam Servisleri' },
  { name: 'Hastane' },
  { name: 'Eczane' },
  { name: 'Diş Hekimleri' },
  { name: 'Tanı Merkezleri' },
];

const CorporationsScreen = () => {
  const { containerStyle } = styles();

  const [isVisibleList, setVisibleList] = useState(true);

  const onPressIcon = () => {
    setVisibleList(!isVisibleList);
  };

  return (
    <>
      <View style={ containerStyle }>
        <DropdownButton
          list={ LIST }
          isVisibleMapButton
          isVisibleList={ isVisibleList }
          onPressIcon={ onPressIcon }
        />
        {isVisibleList && (
          <CorporationsList />
        )}
        <GoogleMap />
      </View>
    </>
  );
};

const styles = () => StyleSheet.create({
  containerStyle: {
    flex: 1,
    width: WIDTH,
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
  },
});

export default CorporationsScreen;
