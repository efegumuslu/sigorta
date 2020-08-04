import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';

import { size } from '../helpers/statics';

import Image from '../components/image';
import Text from '../components/text';

import {
  DashboardScreen,
  CorporationsScreen,
  ContactScreen,
  BannerDetailScreen,
  EmergencyScreen,
  RedirectionsScreen,
  ProductsDetailScreen,
  Faqs,
  FaqsDetail,
  CorporationDetailModal,
  RequestFormScreen,
  ProductFormScreen,
} from './screens';

import {
  TransparentModalScreenTransition, ModalScreenTransition, ModalTransition,
} from './animations';

const RootStack = createStackNavigator();

const Tab = createBottomTabNavigator();

export function ScreensNavigator() {
  const options = {
    headerShown: false,
    tabBarVisible: true,
  };

  const tabBarOptions = {
    headerShown: false,
  };

  return (
    <RootStack.Navigator>
      <RootStack.Screen name="TabScreens" component={ TabScreens } options={ { ...tabBarOptions } } />
      <RootStack.Screen name="BannerDetail" component={ BannerDetailScreen } options={ { ...options } } />
      <RootStack.Screen name="Emergency" component={ EmergencyScreen } options={ { ...options, ...TransparentModalScreenTransition } } />
      <RootStack.Screen name="Redirections" component={ RedirectionsScreen } options={ { ...options } } />
      <RootStack.Screen name="ProductsDetail" component={ ProductsDetailScreen } options={ { ...options } } />
      <RootStack.Screen name="Faqs" component={ Faqs } options={ { ...options, ...ModalScreenTransition } } />
      <RootStack.Screen name="FaqsDetail" component={ FaqsDetail } options={ { ...options } } />
      <RootStack.Screen name="CorporationDetailModal" component={ CorporationDetailModal } options={ { ...options, ...ModalTransition } } />
      <RootStack.Screen name="RequestForm" component={ RequestFormScreen } options={ { ...options, ...ModalScreenTransition } } />
      <RootStack.Screen name="ProductForm" component={ ProductFormScreen } options={ { ...options } } />
    </RootStack.Navigator>
  );
}

const TabScreens = () => {
  const { tabIconStyle } = styles();

  return (
    <Tab.Navigator
      unmountInactiveScreens
      headerMode="none"
      lazy={ false }
      screenOptions={ ({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let icon = null;
          if (route.name === 'DashboardTab') {
            icon = focused ? 'home_active' : 'home_passive';
          } else if (route.name === 'CorporationsTab') {
            icon = focused ? 'map_active' : 'map_passive';
          } else if (route.name === 'ContactTab') {
            icon = focused ? 'phone_active' : 'phone_passive';
          }
          return <Image source={ icon } style={ tabIconStyle } />;
        },
        tabBarLabel: ({ color, focused }) => {
          let label = null;

          if (route.name === 'DashboardTab') {
            label = 'Ana Sayfa';
          } else if (route.name === 'CorporationsTab') {
            label = 'Anlaşmalı Kurumlar';
          } else if (route.name === 'ContactTab') {
            label = 'İletişim';
          }

          return (
            <Text
              fontFamily="SFProMedium"
              color={ focused ? 'blue' : 'greyBold' }
              fontSize={ 12 }
            >
              { label }
            </Text>
          );
        },
      }) }
      tabBarOptions={ {
        style: {
          borderTopColor: 'rgba(0, 0, 0, 0.1)',
        },
        tabStyle: {
          backgroundColor: 'white',
        },
      } }
    >
      <Tab.Screen name="DashboardTab" component={ DashboardScreen } />
      <Tab.Screen name="CorporationsTab" component={ CorporationsScreen } />
      <Tab.Screen name="ContactTab" component={ ContactScreen } />
    </Tab.Navigator>
  );
};

const styles = () => StyleSheet.create({
  tabIconStyle: {
    height: size(25),
    width: size(25),
    resizeMode: 'contain',
  },
});
