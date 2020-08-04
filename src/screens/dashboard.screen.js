import React, { useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';

import analytics from '@react-native-firebase/analytics';

import DashboardHooks from '../hooks/dashboard.hooks';

import VerticalList from './dashboard_views/vertical_list';
import TopBannerImage from './dashboard_views/top_banner_image';
import RedirectButton from './dashboard_views/redirect_button';

const DashboardScreen = () => {
  const { fetchDashboard } = DashboardHooks();

  useEffect(() => {
    analytics().logEvent('DashboardScreen');
    fetchDashboard();
  }, []);

  return (
    <>
      <ScrollView>
        <RedirectButton />
        <TopBannerImage />
        <VerticalList />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default DashboardScreen;
