import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import ModalDropdown from './modal_dropdown';
import { size, WIDTH } from '../helpers/statics';
import Colors from '../consts/colors';

const Dropdown = ({
  defaultValue,
  options,
  onSelect,
  defaultIndex,
  ...props
}) => {
  const {
    modalDropdownStyle,
    textStyle,
    dropdownStyle,
    dropdownTextStyle,
    dropdownTextHighlightStyle,
  } = styles();
      
  return (
    <ModalDropdown
      onSelect={ (value) => onSelect(value) }
      defaultIndex={ defaultIndex }
      defaultValue={ defaultValue }
      options={ options }
      style={ modalDropdownStyle }
      textStyle={ textStyle }
      dropdownStyle={ dropdownStyle }
      dropdownTextStyle={ dropdownTextStyle }
      dropdownTextHighlightStyle={ dropdownTextHighlightStyle }
    />
  );
};

Dropdown.propTypes = {
  defaultValue: PropTypes.string,
  options: PropTypes.array,
  onSelect: PropTypes.func,
  defaultIndex: PropTypes.number,
};

Dropdown.defaultProps = {
  defaultValue: 'Item 1',
  options: ['Item 1', 'Item 2'],
  onSelect: () => {},
  defaultIndex: 0,
};

const styles = () => StyleSheet.create({
  modalDropdownStyle: {
    height: size(50),
    width: WIDTH * 0.88,
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: size(10),
    shadowColor: '#0000001A',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 10.27,
    zIndex: 1,
  },
  textStyle: {
    color: Colors.turquoise,
    marginLeft: size(20),
  },
  dropdownStyle: {
    width: WIDTH * 0.88,
    justifyContent: 'center',
  },
  dropdownTextStyle: {
    color: Colors.black,
    marginLeft: size(10),
  },
  dropdownTextHighlightStyle: {
    color: Colors.turquoise,
  },
});

export default Dropdown;
