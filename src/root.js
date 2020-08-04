import React, { useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ScreensNavigator } from './navigation/navigator';

import { AppProvider } from './contexts/app.context';

const MyTheme = {
  dark: false,
  colors: {
    background: 'rgb(255, 255, 255)',
  },
};

const Root = () => {
  return (
    <NavigationContainer theme={ MyTheme }>
      <AppProvider>
        <RouterComponent />
      </AppProvider>
    </NavigationContainer>
  );
};

const RouterComponent = () => {
  return useMemo(() => {
    return <ScreensNavigator />;
  }, []);
};

export default Root;
