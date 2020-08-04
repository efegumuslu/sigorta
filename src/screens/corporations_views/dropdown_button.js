import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import PropTypes from 'prop-types';

import Text from '../../components/text';
import Image from '../../components/image';

import { size, WIDTH } from '../../helpers/statics';
import Colors from '../../consts/colors';

const DropdownButton = ({
  list,
  onPressIcon,
  isVisibleList,
  style = {},
  isMapUtility,
}) => {
  const [isVisible, setVisible] = useState(false);
  const [selectedText, setSelectedText] = useState('Seçiniz');

  const {
    containerStyle,
    selectableButtonStyle,
    buttonTitleContainerStyle,
    arrowIconStyle,
    mapIconContainerStyle,
    mapIconStyle,
    listContainerStyle,
    listItemContainerStyle,
    mapIconHitSlopStyle,
    arrowIconUpStyle,
  } = styles();

  return (
    <View style={ [containerStyle, style] }>
      <TouchableOpacity
        activeOpacity={ 0.9 }
        onPress={ () => setVisible(!isVisible) }
        style={ selectableButtonStyle }
      >
        <View style={ buttonTitleContainerStyle }>
          <Text
            color="blue"
            fontFamily="SFProMedium"
          >
            {selectedText}
          </Text>
          <Image
            source="gray_up_arrow"
            style={ [arrowIconStyle, isVisible && arrowIconUpStyle] }
          />
        </View>
        {isMapUtility && (
          <TouchableOpacity
            onPress={ onPressIcon }
            style={ mapIconContainerStyle }
            hitSlop={ mapIconHitSlopStyle }
          >
            {isVisibleList ? (
              <Image
                source="map"
                style={ mapIconStyle }
              />
            ) : (
              <Image
                source="menu"
                style={ mapIconStyle }
              />
            ) }
          </TouchableOpacity>
        )}

      </TouchableOpacity>
      {isVisible
        && (
          <View style={ listContainerStyle }>
            {list.map((item) => (
              <TouchableOpacity
                key={ item.id }
                style={ listItemContainerStyle }
                onPress={ () => {
                  setSelectedText(item.name);
                  setVisible(!isVisible);
                } }
              >
                <Text
                  fontFamily="SFProNormal"
                  fontSize={ 17 }
                  color="greyBold"
                >
                  { item.name }
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
    </View>
  );
};

const styles = () => StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    top: size(55),
    width: WIDTH,
    zIndex: 2,
    minHeight: size(50),
    alignItems: 'center',
  },
  selectableButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: size(15),
    paddingRight: size(15),
    position: 'absolute',
    top: 0,
    zIndex: 2,
    height: size(50),
    width: WIDTH - size(30),
    backgroundColor: 'white',
    borderRadius: 30,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 10,
  },
  listContainerStyle: {
    position: 'absolute',
    zIndex: 1,
    height: size(450),
    paddingTop: size(75),
    paddingLeft: size(15),
    paddingRight: size(15),
    borderRadius: 15,
    width: WIDTH - size(36),
    backgroundColor: 'white',
    shadowOffset: { width: size(2), height: size(8) },
    shadowColor: 'grey',
    shadowOpacity: 0.35,
    elevation: 10,
  },
  mapIconContainerStyle: {
    flex: 1,
    height: '60%',
    borderLeftWidth: 0.3,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  mapIconStyle: {
    height: size(30),
    width: size(30),
    resizeMode: 'contain',
  },
  buttonTitleContainerStyle: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: size(20),
  },
  arrowIconStyle: {
    height: size(15),
    width: size(15),
    resizeMode: 'contain',
    transform: [{ rotate: '180deg' }],
  },
  arrowIconUpStyle: {
    transform: [{ rotate: '0deg' }],
  },
  listItemContainerStyle: {
    paddingTop: size(20),
    paddingBottom: size(20),
    borderBottomWidth: 0.4,
    borderBottomColor: Colors.greyMedium,
  },
  mapIconHitSlopStyle: {
    top: size(20),
    left: size(20),
    bottom: size(20),
    right: size(20),
  },
});

DropdownButton.propTypes = {
  style: PropTypes.object,
  isMapUtility: PropTypes.bool.isRequired,
  list: PropTypes.array,
};

DropdownButton.defaultProps = {
  style: null,
  list: [],
};

export default DropdownButton;
