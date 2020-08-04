import React, { useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';

import Image from '../components/image';
import Text from '../components/text';
import { WIDTH, size } from '../helpers/statics';
import NavigationActions from '../navigation/navigation_actions';
import ActionSheet from '../components/action_sheet';
import ContactHooks from '../hooks/contact.hooks';

const ContactScreen = () => {
  const actionSheetRef = useRef(null);
  const { fetchContact } = ContactHooks();

  useEffect(() => {
    fetchContact();
  }, []);

  const {
    contentContainerStyle,
    topBannerImageStyle,
    buttonsContainer,
    buttonStyle,
  } = styles();

  const buttonFontSize = 20;
  const { navigatePush } = NavigationActions();

  const sssAction = () => {
    navigatePush('Faqs');
  };
  const requestAction = () => {
    navigatePush('RequestForm', { title: 'Talep Formu', isReq: true });
  };
  const complainAction = () => {
    navigatePush('RequestForm', { title: 'Şikayet Formu', isReq: false });
  };
  const callCenterAction = () => {
    actionSheetRef.current.show(['Ara 0850 222 9 237', 'Vazgeç']);
  };

  return (
    <View style={ contentContainerStyle }>
      <Image source="contact_top_banner" style={ topBannerImageStyle } />
      <View style={ buttonsContainer }>
        <TouchableOpacity onPress={ sssAction } style={ buttonStyle }>
          <Text
            color="greyBold"
            fontFamily="SFProRegular"
            fontSize={ buttonFontSize }
          >
            Sıkça Sorulan Sorular
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ requestAction } style={ buttonStyle }>
          <Text
            color="greyBold"
            fontFamily="SFProRegular"
            fontSize={ buttonFontSize }
          >
            Talep
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ complainAction } style={ buttonStyle }>
          <Text
            color="greyBold"
            fontFamily="SFProRegular"
            fontSize={ buttonFontSize }
          >
            Şikayet
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ callCenterAction } style={ buttonStyle }>
          <Text
            color="greyBold"
            fontFamily="SFProRegular"
            fontSize={ buttonFontSize }
          >
            Çağrı Merkezi
          </Text>
        </TouchableOpacity>
      </View>
      <ActionSheet
        ref={ actionSheetRef }
        title=""
        options={ [['Ara 0850 222 9 237', 'Vazgeç']] }
        cancelButtonIndex={ 1 }
        destructiveButtonIndex={ 1 }
        onPress={ (index) => {
          console.log('indexing', index);
          if (index === 0) {
            Linking.openURL('tel:08502229237');
          }
        } }
      />
    </View>
  );
};

const styles = () => StyleSheet.create({
  contentContainerStyle: {
    backgroundColor: 'white',
    flex: 1,
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
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: size(15),
    height: size(50),
    width: size(341),
    borderWidth: 1,
    borderColor: 'rgba(200, 200, 200, 0.94)',
    borderRadius: size(60),
  },
});

export default ContactScreen;
