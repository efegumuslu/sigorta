import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

import Text from '../components/text';
import Image from '../components/image';
import Button from '../components/button';
import BackButton from '../components/back_button';

import { WIDTH, size } from '../helpers/statics';
import NavigationActions from '../navigation/navigation_actions';

const ProductDetailScreen = ({ route }) => {
  const { item } = route.params;

  const { navigatePush } = NavigationActions();

  const onPress = () => {
    navigatePush('ProductForm');
  };

  const {
    imageStyle,
    blackOverlayStyle,
    overlayStyle,
    textStyle,
    detailTextContainerStyle,
    detailTextStyle,
    buttonContainerStyle,
    listItemIconStyle,
    titleContainerStyle,
    backButtonContainerStyle,
  } = styles();
  return (
    <>
      <View>
        <Image
          source="banner1"
          style={ imageStyle }
        />
        <View style={ blackOverlayStyle }>
          <Image
            source="banner_detail_image_overlay"
            style={ overlayStyle }
          />
          <View style={ backButtonContainerStyle }>
            <BackButton />
          </View>
        </View>
      </View>
      <View style={ titleContainerStyle }>
        <Text
          style={ textStyle }
          fontSize={ 24 }
          fontFamily="SFProBold"
          color="blue"
        >
          Konut Sigortası
        </Text>
        <Image
          source="konut"
          style={ listItemIconStyle }
        />
      </View>
      <View style={ detailTextContainerStyle }>
        <ScrollView>
          <Text
            style={ detailTextStyle }
            fontSize={ 16 }
            fontFamily="SFProNormal"
            color="grayBold"
          >
            Tamamlayıcı Sağlık Sigortası ile anlaşmalı sağlık kurumlarında Türkiye Sigortalı olmanın ayrıcalıklarını bütçenize uygun primlerle yaşayın! SGK ile anlaşmalı özel hastanelerde bir kısmı karşılanan muayene, tetkik ve tedavi masraflarınız için ödenmesi gereken fark tutarını poliçenizde belirtilen koşullar dahilinde karşılar, tedavi sürecinin her aşamasında kendinizi güvende hissetmenizi sağlar. Türkiye Sigorta Tamamlayıcı Sağlık Sigortası kapsamında yalnızca yatışlı tedavi teminatlarını tercih edebileceğiniz gibi yatışlı + yatışsız tedavi teminatlarını içeren poliçemizi de seçebilirsiniz.
          </Text>
        </ScrollView>
      </View>
      <View style={ buttonContainerStyle }>
        <Button
          label="Ürün hakkında bilgi al"
          buttonColor="turquoise"
          onPress={ onPress }
        />
      </View>
    </>
  );
};

const styles = () => StyleSheet.create({
  imageStyle: {
    width: WIDTH,
    height: size(300),
    resizeMode: 'cover',
  },
  blackOverlayStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  overlayStyle: {
    height: size(150),
    width: WIDTH,
    resizeMode: 'stretch',
  },
  textStyle: {
    width: '90%',
    alignSelf: 'center',
    marginTop: size(10),
  },
  detailTextContainerStyle: {
    flex: 2,
    paddingTop: size(65),
  },
  detailTextStyle: {
    width: '90%',
    alignSelf: 'center',
    marginTop: size(10),
    opacity: 0.7,
  },
  buttonContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemIconStyle: {
    position: 'absolute',
    bottom: size(15),
    right: size(15),
    height: size(36),
    width: size(36),
    resizeMode: 'contain',
  },
  titleContainerStyle: {
    position: 'absolute',
    top: size(250),
    alignSelf: 'center',
    zIndex: 99,
    height: size(100),
    width: WIDTH - size(30),
    backgroundColor: 'white',
    borderRadius: size(10),
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
  },
  backButtonContainerStyle: {
    position: 'absolute',
    top: size(45),
    left: size(5),
  },
});

export default ProductDetailScreen;
