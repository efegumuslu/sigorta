import React, { Component } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

import { size } from '../helpers/statics';

import Colors from '../consts/colors';

import SaeInput from './sae_input';

class FloatingLabelTextInput extends Component {
  state = {
    isFocused: false,
    top: new Animated.Value(30),
    value: null,
  };

  render() {
    const {
      label,
      fontSize = 14,
      width = 300,
      height = 56,
      multiline = false,
      keyboardType = 'default',
      value = null,
      maxLength = 100,
      masked = false,
      maskFormat,
      maskType,
      onChangeText= () => {},
      ...props
    } = this.props;

    const { top } = this.state;

    // const labelStyle = {
    //   position: 'absolute',
    //   left: 0,
    //   top,
    //   fontFamily: 'Avenir-Medium',
    //   fontSize: size(48),
    //   color: Colors.grey,
    // };

    let widthSize = width;
    let heightSize = height;

    if (typeof width === 'number') {
      widthSize = size(width);
    }

    if (typeof height === 'number') {
      heightSize = size(height);
    }

    if (multiline) heightSize = size(200);

    const { containerStyle, inputStyle } = styles();

    const inputPadding = multiline ? 2 : 2;

    return (
      <View
        style={ [containerStyle, {
          width: widthSize,
          height: heightSize,
          paddingTop: multiline ? size(0) : size(10),
        }] }
      >
        <SaeInput
          labelStyle={ inputStyle }
          inputStyle={{color: 'red'}}
          label={ label }
          multiline={ multiline }
          inputPadding={ inputPadding }
          labelHeight={ 10 }
          masked={ masked }
          maskFormat={ maskFormat }
          maskType={ maskType }
          maxLength={ maxLength }
          value={ value }
          onChangeText={ (valueText) => {} }
          // onChangeText={ (valueText) => this.props.onChangeText(valueText) }
          height={ size(50) }
          keyboardType={ keyboardType }
          borderHeight={ 2 }
          autoCapitalize="none"
          autoCorrect={ false }
        />
      </View>
    );
  }
}

const styles = () => StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    borderBottomWidth: 0.4,
    borderColor: Colors.greyBold,
  },
  inputStyle: {
    fontSize: size(15),
    color: Colors.greyBold,

    fontFamily: 'SFProDisplay-Regular',
  },
});
export default FloatingLabelTextInput;
