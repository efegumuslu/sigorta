import React from 'react';

import {
  Animated,
  TextInput,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Keyboard,
} from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

import BaseInput from './base_input';
import Text from './text';
import Colors from '../consts/colors';
import { size } from '../helpers/statics';

export default class Sae extends BaseInput {
 
  static defaultProps = {
    iconColor: 'white',
    height: 48,
    inputPadding: 16,
    labelHeight: 24,
    borderHeight: 2,
    animationDuration: 300,
    iconName: 'pencil',
    masked: false,
    maskFormat: '99/99',
    maskType: 'datetime'
  };

  componentDidMount() {
    const { value } = this.props;
    if (value) this._onFocus();
  }

  _focus = () => {
    if (this.input) {
      this.input.focus();
    }
  }

  _blur = () => {
    if (this.props.masked) {
      this.input.getElement().blur();
    } else {
      this.input.blur();
    }
    Keyboard.dismiss();
  };

  _maskedFocus = () => {
    this.input.getElement().focus();
  }

  render() {
    const {
      iconClass,
      iconColor,
      iconName,
      label,
      style: containerStyle,
      height: inputHeight,
      inputPadding,
      labelHeight,
      borderHeight,
      inputStyle,
      labelStyle,
      masked,
      maskFormat,
      maskType,
    } = this.props;
    const { width, focusedAnim, value } = this.state;

    return (
      <View
        style={[
          styles.container,
          containerStyle,
          {
            height: inputHeight + inputPadding,
          },
        ]}
        onLayout={this._onLayout}
      >
        <TouchableWithoutFeedback onPress={this.focus}>
          <Animated.View
            style={{
              position: 'absolute',
              top: focusedAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 0],
              }),
            }}
          >
            <Animated.Text
              allowFontScaling={ false }
              color="grey"
              style={[
                styles.label,
                labelStyle,
                {
                  fontSize: focusedAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [size(16), size(13)],
                  }),
                },
              ]}
            >
              {label}
            </Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>
        {masked ? (
          <TextInputMask
            { ...this.props }
            // ref={ reference => this.input = reference }
            ref={this.input}
            type={ maskType }
            options={ { dddMask: maskFormat, format: maskFormat } }
            value={ this.props.value || value }
            onBlur={ this._onBlur }
            onChange={ this._onChange }
            onFocus={ this._onFocus }
            underlineColorAndroid="transparent"
            allowFontScaling={ false }
            style={[
              styles.textInput,
              inputStyle,
              {
                width,
                fontFamily:"Avenir-Medium",
                height: inputHeight,
                paddingTop: inputPadding / 2,
                color: Colors.blue,
              },
            ]}
            focus={ this.props.focus && this._maskedFocus() }
            blur={ this.props.blur && this._blur() }
          />
        )
          : (
            <TextInput
              // ref={ this.input }
              // ref={ reference => this.input = reference }
              ref={this.input}
              { ...this.props }
              style={[
                styles.textInput,
                inputStyle,
                {
                  width,
                  fontFamily:"SFProDisplay-Regular",
                  height: inputHeight,
                  paddingTop: inputPadding / 2,
                  color: Colors.blue,
                },
              ]}
              value={ value }
              onBlur={ this._onBlur }
              onChange={ this._onChange }
              onFocus={ this._onFocus }
              allowFontScaling={ false }
              underlineColorAndroid="transparent"
              focus={ this.props.focus && this._maskedFocus() }
              blur={ this.props.blur && this._blur() }
            />
          )
        }
        {/* <TouchableWithoutFeedback onPress={this.focus}>
         
        </TouchableWithoutFeedback> */}
        {/* bottom border */}
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            height: borderHeight,
            width: focusedAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, width],
            }),
            backgroundColor: iconColor,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  label: {
    backgroundColor: 'transparent',
    // fontWeight: 'bold',
    color: '#7771ab',
  },
  textInput: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingLeft: 0,
    color: 'white',
    fontSize: 18,
  },
});