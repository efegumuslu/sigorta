import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
 
import ActionSheet from '../components/action_sheet'

import Text from '../components/text';
import Button from '../components/button';
import Image from '../components/image';

import Colors from '../consts/colors';

import { WIDTH, size } from '../helpers/statics';
import NavigationActions from '../navigation/navigation_actions';

const DATA = [
  { text: 'Ambulans Çağır', phone: '+905067207371' },
  { text: 'Çekici Çağır', phone: '+905067207371' },
  { text: 'Çilingir Çağır', phone: '+905067207371' },
  { text: 'Tesisatçı Çağır', phone: '+905067207371' },
];

const EmergencyScreen = () => {
  const actionSheetRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const { navigatePop } = NavigationActions();

  const onPressClose = () => {
    navigatePop();
  }

  const {
    containerStyle,
    blankViewStyle,
    contentContainerStyle,
    swipeToCloseViewStyle,
    downArrowIconStyle,
    titleTextStyle,
    buttonStyle,
  } = styles();
  return (
    <>
      <View style={ containerStyle }>
        <TouchableOpacity onPress={ onPressClose } style={ blankViewStyle } />
        <View style={ contentContainerStyle }>
          <View style={ swipeToCloseViewStyle }>
            <Image
              source="down_arrow"
              style={ downArrowIconStyle }
            />
          </View>
          <Text
            color="white"
            fontSize={ 26 }
            fontFamily="SFProMedium"
            style={ titleTextStyle }
          >
            Geçmiş Olsun,{`\n`}nasıl yardım edebiliriz?
          </Text>
          {DATA.map((item) => {
            console.log('itemitem', item);
            console.log('actionSheetRef', actionSheetRef);
            return (
              <Button
                borderWidth={ 0.5 }
                borderColor="white"
                style={ buttonStyle }
                label={ item.text }
                buttonColor="transparent"
                textColor="white"
                onPress={() => { 
                  setSelectedItem(item.phone);
                  actionSheetRef.current.show([`Ara ${item.phone}`, 'Vazgeç'])

                }}
              />
            ) 
          })}
        </View>
        <ActionSheet
          ref={ actionSheetRef }
          title={''}
          options={[`Ara ${selectedItem}`, 'Vazgeç']}
          cancelButtonIndex={1}
          destructiveButtonIndex={1}
          onPress={(index) => { /* do something */ }}
        />
      </View>
    </>
  );
};


const styles = () => StyleSheet.create({
  containerStyle: {
    flex: 1,
    width: WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  blankViewStyle: {
    flex: 1,
    width: WIDTH,
  },
  contentContainerStyle: {
    backgroundColor: Colors.red,
    flex: 2.3,
    width: WIDTH,
    borderTopLeftRadius: size(15),
    borderTopRightRadius: size(15),
    padding: size(15),
    paddingTop: size(2),
  },
  swipeToCloseViewStyle: {
    height: size(40),
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  downArrowIconStyle: {
    height: size(30),
    width: size(25),
    resizeMode: 'contain',
  },
  titleTextStyle: {
    marginBottom: size(20),
  },
  buttonStyle: {
    alignSelf: 'center',
    marginTop: size(15),
  },
});

export default EmergencyScreen;
