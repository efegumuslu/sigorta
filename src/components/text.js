import React from 'react';
import { Text } from 'react-native';

import PropTypes from 'prop-types';

import { size } from '../helpers/statics';
import Colors from '../consts/colors';

const fonts = {
  SFProNormal: 'SFProDisplay-Regular',
  SFProMedium: 'SFProDisplay-Medium',
  SFProBold: 'SFProDisplay-Bold',
};

const SuperText = ({
  style = {},
  children,
  color,
  fontSize,
  fontFamily,
  ...props
}) => (
  <Text
    style={ {
      color: Colors[color],
      fontSize: size(fontSize),
      fontFamily: fonts[fontFamily],
      ...style,
    } }
    allowFontScaling={ false }
    { ...props }
  >
    { children }
  </Text>
);

SuperText.propTypes = {
  style: PropTypes.object,
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  fontFamily: PropTypes.string,
};

SuperText.defaultProps = {
  style: null,
  color: 'black',
  fontSize: 16,
  fontFamily: 'SFProNormal',
};

export default SuperText;
