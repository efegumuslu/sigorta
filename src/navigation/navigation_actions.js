import { useNavigation, StackActions, CommonActions } from '@react-navigation/native';

const NavigationActions = () => {
  const navigation = useNavigation();

  const tabNavigate = (routeName) => {
    navigation.navigate(routeName);
  };

  const navigatePush = (routeName, params = {}, in_stack = false) => {
    navigation.dispatch(
      StackActions.push(routeName.toString(), {
        ...params,
      }),
    );
  };

  const navigatePop = (screenCount = 1) => {
    if (navigation.canGoBack()) {
      navigation.dispatch(
        StackActions.pop(screenCount),
      );
    }
  };

  const navigateReset = (routeName, params = {}) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: routeName },
        ],
      }),
    );
  };

  const navigatePoptoTop = (routeName, params = {}) => {
    navigation.dispatch(
      StackActions.popToTop(),
    );
  };

  return {
    navigation,
    tabNavigate,
    navigatePush,
    navigatePop,
    navigateReset,
    navigatePoptoTop,
  };
};

export default NavigationActions;
