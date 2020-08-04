import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../components/text';
import ContactsTopBar from './contact_views/contacts_top_bar';
import Colors from '../consts/colors';
import { size } from '../helpers/statics';

const FaqsDetail = ({ route }) => {
  const {
    contentContainerStyle,
    titleStyle,
    descStyle,
  } = styles();
  const { item } = route.params;
  const { title, detail } = item;
  return (

    <View style={ contentContainerStyle }>
      <ContactsTopBar
        isBackButton
        isCloseButton={ false }
        title="Sıkça Sorulan Sorular"
      />
      <Text
        fontFamily="SFProNormal"
        fontSize={ 20 }
        style={ titleStyle }
      >
        {title}
      </Text>
      <Text
        fontFamily="SFProNormal"
        fontSize={ 16 }
        style={ descStyle }
      >
        {detail}
      </Text>
    </View>

  );
};

const styles = () => StyleSheet.create({
  contentContainerStyle: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
  },
  titleStyle: {
    color: Colors.blue,
    marginLeft: size(16),
    marginRight: size(16),
    marginTop: size(32),

  },
  descStyle: {
    color: Colors.greyBold,
    marginLeft: size(16),
    marginRight: size(16),
    marginTop: size(8),
  },
});

export default FaqsDetail;
