import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import PropTypes from 'prop-types';

import { size } from '../helpers/statics';
import Colors from '../consts/colors';
import Text from './text';

const SuperButton = ({
  label,
  buttonColor,
  textColor,
  onPress,
  borderWidth,
  borderColor,
  style,
  ...props
}) => {
  const backgroundColor = Colors[buttonColor];
  const { buttonStyle } = styles();
  return (
    <TouchableOpacity
      onPress={ onPress }
      style={[buttonStyle, {  backgroundColor, borderWidth, borderColor: Colors[borderColor], ...style }]}
      { ...props }
    >
      <Text
        fontFamily="SFProMedium"
        color={ textColor }
        fontSize={ 20 }
      >
        { label }
      </Text>
    </TouchableOpacity>
  );
};

SuperButton.propTypes = {
  label: PropTypes.string,
  buttonColor: PropTypes.string,
  textColor: PropTypes.string,
  onPress: PropTypes.func,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  style: PropTypes.object,
};

SuperButton.defaultProps = {
  label: '',
  buttonColor: 'black',
  textColor: 'white',
  onPress: () => {},
  borderWidth: 0,
  borderColor: 'transparent',
  style: {},
};

const styles = () => StyleSheet.create({
  buttonStyle: {
    width: '93%',
    height: size(50),
    borderRadius: size(60),
    justifyContent: 'center',
    alignItems: 'center',
  }  
});


export default SuperButton;
