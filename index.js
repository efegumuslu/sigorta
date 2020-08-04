import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import 'react-native-gesture-handler';

import OneSignal from 'react-native-onesignal';

import Root from './src/root';


OneSignal.init('df7cbefe-8b1c-40fe-8791-3683554a6916',
  {
    kOSSettingsKeyAutoPrompt: false,
    kOSSettingsKeyInAppLaunchURL: false,
    kOSSettingsKeyInFocusDisplayOption: 2,
  });
// Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.
OneSignal.inFocusDisplaying(2);

console.disableYellowBox = true;


AppRegistry.registerComponent(appName, () => Root);
