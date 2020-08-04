import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';

import Modal from 'react-native-modal';
import PropTypes from 'prop-types';

import Text from './text';
import Image from './image';

import { size, WIDTH, HEIGHT } from '../helpers/statics';
import Colors from '../consts/colors';

import NavigationActions from '../navigation/navigation_actions';

const CorporationDetailModal = ({
  ...props
}) => {
  const { navigatePop } = NavigationActions();

  const [isVisible, setVisible] = useState(false);

  const onPress = () => {
    navigatePop();
  };

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 250);
  }, []);

  const {
    containerStyle,
    modalContainerStyle,
    modalStyle,
    swipeToCloseContainerStyle,
    downArrowIconStyle,
    infoContainerStyle,
    nameTextStyle,
    buttonsContainerStyle,
    callButtonStyle,
    callIconStyle,
    routeButtonStyle,
    routeIconStyle,
  } = styles();

  return (
    <TouchableOpacity
      activeOpacity={ 1 }
      onPress={ onPress }
      style={ containerStyle }
    >
      <View style={ modalContainerStyle }>
        <Modal
          animationIn="slideInUp"
          animationOut="slideOutDown"
          isVisible={ isVisible }
          coverScreen={ false }
          swipeDirection={ ['down, up'] }
          backdropColor="transparent"
          style={ modalStyle }
        >
          <View style={ swipeToCloseContainerStyle }>
            <Image
              source="down_arrow_grey"
              style={ downArrowIconStyle }
            />
          </View>
          <View style={ infoContainerStyle }>
            <Text
              fontFamily="SFProNormal"
              color="blue"
              fontSize={ 22 }
              style={ nameTextStyle }
            >
              Tamirci İsmi
            </Text>
            <Text
              fontFamily="SFProNormal"
              color="greyBold"
              fontSize={ 17 }
            >
              Tamirci Web Sitesi
            </Text>
          </View>
          <View style={ buttonsContainerStyle }>
            <TouchableOpacity style={ callButtonStyle }>
              <Text
                fontFamily="SFProMedium"
                color="white"
              >
                Tamirciyi ara
              </Text>
              <Image
                source="call_white"
                style={ callIconStyle }
              />
            </TouchableOpacity>
            <TouchableOpacity style={ routeButtonStyle }>
              <Text
                fontFamily="SFProMedium"
                color="white"
              >
                Yol tarifi al
              </Text>
              <Image
                source="route_white"
                style={ routeIconStyle }
              />
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </TouchableOpacity>
  );
};

const styles = () => StyleSheet.create({
  containerStyle: {
    height: HEIGHT,
    width: WIDTH,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  modalContainerStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: size(350),
    width: WIDTH,
  },
  downArrowIconStyle: {
    height: size(16),
    width: size(25),
    resizeMode: 'contain',
  },
  modalStyle: {
    margin: 0,
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: size(16),
    borderTopLeftRadius: size(16),
    alignSelf: 'center',
    height: size(350),
    width: WIDTH,
    backgroundColor: Colors.white,
  },
  swipeToCloseContainerStyle: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainerStyle: {
    flex: 4,
    borderBottomWidth: 1,
    borderColor: Colors.greyMedium,
    paddingLeft: size(16),
    paddingRight: size(16),
  },
  buttonsContainerStyle: {
    flex: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '5%',
    paddingTop: '5%',
  },
  callButtonStyle: {
    paddingLeft: '7%',
    paddingRight: '7%',
    height: size(40),
    width: size(180),
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.blue,
  },
  routeButtonStyle: {
    paddingLeft: '10%',
    paddingRight: '10%',
    height: size(40),
    width: size(180),
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.blue,
  },
  callIconStyle: {
    height: size(17),
    width: size(17),
    resizeMode: 'contain',
  },
  routeIconStyle: {
    height: size(17),
    width: size(17),
    resizeMode: 'contain',
  },
  nameTextStyle: {
    marginBottom: size(8),
  },
});

export default CorporationDetailModal;
