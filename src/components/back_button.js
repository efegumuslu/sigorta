import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

import PropTypes from 'prop-types';

import Text from './text';
import Image from './image';

import { size } from '../helpers/statics';

import NavigationActions from '../navigation/navigation_actions';

const BackButton = ({
  label,
  isVisible,
  theme,
  ...props
}) => {
  const { navigatePop } = NavigationActions();

  const onPress = () => {
    navigatePop();
  };

  let icon = null;
  let text_color = null;

  if (theme === 'white') {
    icon = 'back_button_icon';
    text_color = 'grey';
  }

  if (theme === 'grey') {
    icon = 'back_button_grey_icon';
    text_color = 'greyBold';
  }

  const { buttonStyle, iconStyle } = styles();
  if (!isVisible) return <View />;
  return (
    <TouchableOpacity
      onPress={ onPress }
      style={ buttonStyle }
      { ...props }
    >
      <Image
        source={ icon }
        style={ iconStyle }
      />
      <Text
        fontFamily="SFProNormal"
        color={ text_color }
        fontSize={ 16 }
      >
        { label }
      </Text>

    </TouchableOpacity>
  );
};

BackButton.propTypes = {
  label: PropTypes.string,
  isVisible: PropTypes.bool,
  theme: PropTypes.string,
};

BackButton.defaultProps = {
  label: 'Geri Dön',
  isVisible: true,
  theme: 'white',
};

const styles = () => StyleSheet.create({
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: size(16),
  },
  iconStyle: {
    height: size(20),
    width: size(20),
    resizeMode: 'contain',
    marginRight: size(5),
  },
});

export default BackButton;
