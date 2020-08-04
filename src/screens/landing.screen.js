import React from 'react';
import {
  StyleSheet,
  StatusBar,
} from 'react-native';
 
import Text from '../components/text';

const LandingScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Text>LandingScreen</Text>
    </>
  );
};

const styles = () => StyleSheet.create({
  
});

export default LandingScreen;
