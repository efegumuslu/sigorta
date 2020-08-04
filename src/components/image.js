import React from 'react';
import { Image } from 'react-native';

import PropTypes from 'prop-types';

import { Images } from '../helpers/assets';

const SuperImage = ({
  source,
  ...props
}) => {
  return (
   <Image source={ Images[source] } {...props} />
  );
};

SuperImage.propTypes = {
  source: PropTypes.string,
};

SuperImage.defaultProps = {
  source: '',
};

export default SuperImage;
