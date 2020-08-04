import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { size } from '../../helpers/statics';
import { Images } from '../../helpers/assets';
import Colors from '../../consts/colors';

import Text from '../../components/text';

import NavigationActions from '../../navigation/navigation_actions';

const FaqListItem = ({ item }) => {
  const { navigatePush } = NavigationActions();

  const onPress = () => {
    navigatePush('FaqsDetail', { item });
    console.log('isPressed');
  };

  const {
    containerStyle,
    titleContainerStyle,
    routingButtonStyle,
    buttonContainerStyle,
    routingIconStyle,
  } = styles();

  return (
    <TouchableOpacity
      onPress={ onPress }
      activeOpacity={ 1 }
      style={ containerStyle }
    >
      <View style={ titleContainerStyle }>
        <Text
          fontFamily="SFProNormal"
          color="greyBold"
        >
          {item.title}
        </Text>
      </View>
      <View style={ buttonContainerStyle }>
        <View style={ routingButtonStyle }>
          <Image
            source={ Images.right_button }
            style={ routingIconStyle }
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = () => StyleSheet.create({
  containerStyle: {
    height: size(80),
    width: '92%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: size(10),
    borderBottomWidth: 0.6,
    borderColor: Colors.greyBold,
    backgroundColor: 'white',
  },
  titleContainerStyle: {
    flex: 8,
    justifyContent: 'center',
    marginLeft: size(15),
  },
  buttonContainerStyle: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  routingButtonStyle: {
    height: size(60),
    width: size(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  routingIconStyle: {
    height: size(10),
    width: size(10),
    resizeMode: 'contain',
  },
});

export default FaqListItem;
