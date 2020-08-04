import { useContext } from 'react';

import { AppContext, AppContextDispatch } from '../contexts/app.context';

import DashboardRequests from '../requests/dashboard.requests';

const DashboardHooks = () => {
  const { dashboardState } = useContext(AppContext);

  const { dashboardDispatch } = useContext(AppContextDispatch);

  const useDashboardState = () => {
    return dashboardState;
  };

  const fetchDashboard = () => {
    DashboardRequests.fetchDashboard()
      .then((response) => {
        dashboardDispatch({
          type: 'SET_DASHBOARD',
          payload: response,
        });
        console.log('fetchdashboard response', response);
      })
      .catch((error) => {
        console.log('fetchdashboard error', error);
      });
  };

  return {
    useDashboardState,
    fetchDashboard,
  };
};

export default DashboardHooks;
