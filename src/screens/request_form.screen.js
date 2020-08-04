import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

import Image from '../components/image';
import Text from '../components/text';
import TextInput from '../components/textinput';
import Button from '../components/button';

import { WIDTH, size } from '../helpers/statics';
import NavigationActions from '../navigation/navigation_actions';
import ContactsTopBar from './contact_views/contacts_top_bar';
import DropdownButton from './corporations_views/dropdown_button';
import ContactHooks from '../hooks/contact.hooks';

const LIST = [
  { name: 'Tamir Servisleri' },
  { name: 'Cam Servisleri' },
  { name: 'Hastane' },
  { name: 'Eczane' },
  { name: 'Diş Hekimleri' },
  { name: 'Tanı Merkezleri' },
];

const RequestFormScreen = ({ route }) => {
  const { title, isReq } = route.params;
  const [isVisibleList, setVisibleList] = useState(true);
  const actionSheetRef = useRef(null);
  const { useContactState } = ContactHooks();
  const { requests, complaints } = useContactState();

  const {
    contentContainerStyle,
    buttonsContainer,
    buttonStyle,
    inputContainerStyle,
    inputCollectionStyle,
    dropDownOverwrittenStyle,
  } = styles();

  const buttonFontSize = 20;
  const { navigatePush } = NavigationActions();

  const sssAction = () => {
    navigatePush('Faqs');
  };

  const onPressIcon = () => {
    setVisibleList(!isVisibleList);
  };

  return (
    <View style={ contentContainerStyle }>
      <ContactsTopBar
        isBackButton={ false }
        isCloseButton
        title={ title }
      />
      <View style={ buttonsContainer }>
        <DropdownButton
          list={ isReq ? requests : complaints }
          isVisibleMapButton
          isVisibleList={ isVisibleList }
          onPressIcon={ onPressIcon }
          style={ dropDownOverwrittenStyle }
        />
        <View style={ inputCollectionStyle }>
          <View style={ inputContainerStyle }>
            <TextInput
              width={ WIDTH - size(40) }
              label="T.C. Kimlik Numarası"
            />
          </View>
          <View style={ inputContainerStyle }>
            <TextInput
              width={ WIDTH - size(40) }
              label="Telefon Numarası"
            />
          </View>
          <View style={ inputContainerStyle }>
            <TextInput
              width={ WIDTH - size(40) }
              label="İl"
            />
          </View>
          <View style={ inputContainerStyle }>
            <TextInput
              width={ WIDTH - size(40) }
              label="İlçe"
            />
          </View>
        </View>

        <Button
          label="Devam Et"
          buttonColor="turquoise"
          onPress={ () => {} }
          style={ buttonStyle }
        />
      </View>
    </View>

  );
};

const styles = () => StyleSheet.create({
  contentContainerStyle: {
    backgroundColor: 'white',
    flex: 1,
  },
  buttonsContainer: {
    marginTop: size(1),
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
  inputContainerStyle: {
    marginTop: size(10),
  },
  inputCollectionStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: size(90),
  },
  dropDownOverwrittenStyle: {
    top: size(20),
  },
});

export default RequestFormScreen;
