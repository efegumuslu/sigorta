import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Text from '../components/text';
import TextInput from '../components/textinput';
import Button from '../components/button';
import { size, WIDTH } from '../helpers/statics';
import BackButton from '../components/back_button';

const ProductForm = () => {
  const {
    containerStyle,
    titleTextStyle,
    inputContainerStyle,
    buttonStyle,
    headerContainerStyle,
  } = styles();
  return (
    <View style={ containerStyle }>
      <View style={ headerContainerStyle }>
        <BackButton theme="grey" />
      </View>
      <Text
        color="blue"
        fontSize={ 28 }
        fontFamily="SFProMedium"
        style={ titleTextStyle }
      >
        Konut Sigortası Alın
      </Text>
      <View style={ titleTextStyle }>
        <TextInput
          width={ WIDTH - size(40) }
          label="Ad Soyad"
        />
      </View>
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
      <Button
        label="Devam Et"
        buttonColor="turquoise"
        onPress={ () => {} }
        style={ buttonStyle }
      />
    </View>
  );
};

const styles = () => StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    paddingBottom: size(50),
  },
  titleTextStyle: {
    marginTop: size(30),
  },
  inputContainerStyle: {
    marginTop: size(10),
  },
  buttonStyle: {
    marginTop: size(40),
  },
  headerContainerStyle: {
    height: size(80),
    paddingTop: '7%',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: WIDTH - size(0),
    flexDirection: 'row',
  },
});

export default ProductForm;
