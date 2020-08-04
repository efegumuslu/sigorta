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

const BannerDetail = ({ route }) => {
  const { item } = route.params;

  const {
    imageStyle,
    blackOverlayStyle,
    overlayStyle,
    textStyle,
    detailTextContainerStyle,
    detailTextStyle,
    buttonContainerStyle,
    backButtonContainerStyle,
  } = styles();
  return (
    <>
      <View>
        <Image
          source={ item.image }
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
      <Text
        style={ textStyle }
        fontSize={ 24 }
        fontFamily="SFProBold"
        color="blue"
      >
        {item.text}
      </Text>
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
          label="Detaylı bilgi al"
          buttonColor="blue"
          onPress={ () => {} }
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
  backButtonContainerStyle: {
    position: 'absolute',
    top: size(45),
    left: size(5),
  },
});

export default BannerDetail;
