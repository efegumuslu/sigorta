import React from 'react';
import {
  StyleSheet, View, TouchableOpacity, ImageBackground,
} from 'react-native';
import NavigationActions from '../../navigation/navigation_actions';
import Text from '../../components/text';
import { size } from '../../helpers/statics';
import BackButton from '../../components/back_button';
import { Images } from '../../helpers/assets';

const ContactTopBar = ({ isBackButton, isCloseButton, title }) => {
  const { navigatePop } = NavigationActions();

  const onPress = () => {
    navigatePop();
  };

  const {
    upperViewStyle,
    textContainerStyle,
    closeButtonStyle,
    buttonContainerStyle,
    backgroundStyle,
  } = styles();

  return (
    <View style={ upperViewStyle }>
      <ImageBackground source={ Images.contact_topbar } style={ backgroundStyle }>
        <View style={ buttonContainerStyle }>
          <BackButton isVisible={ isBackButton } />
          {isCloseButton && (
            <TouchableOpacity style={ closeButtonStyle } onPress={ onPress }>
              <Text
                fontFamily="SFProNormal"
                fontSize={ 16 }
                color="grey"
              >
                Kapat
              </Text>
            </TouchableOpacity>
          )}

        </View>

        <View style={ textContainerStyle }>
          <Text
            color="white"
            fontFamily="SFProNormal"
            fontSize={ 24 }
          >
            {title}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = () => StyleSheet.create({
  upperViewStyle: {
    backgroundColor: '#232D63',
    width: '100%',
    height: size(135),
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  textContainerStyle: {
    flex: 1,
    marginLeft: size(16),
    marginBottom: size(16),
    justifyContent: 'center',
    flexDirection: 'column',
  },
  closeButtonStyle: {
    marginRight: size(20),
  },
  buttonContainerStyle: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: size(14),
  },
  backgroundStyle: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default ContactTopBar;
