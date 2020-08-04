import React, { useReducer } from 'react';

import PropTypes from 'prop-types';

import {
  dashboardInitialState,
  dashboardReducer,
} from '../reducers/dashboard.reducer';

import {
  contactInitialState,
  contactReducer,
} from '../reducers/contact.reducer';

const AppContext = React.createContext();
const AppContextDispatch = React.createContext();

const AppProvider = ({ children }) => {
  // Global app context
  const [dashboardState, dashboardDispatch] = useReducer(
    dashboardReducer,
    dashboardInitialState,
  );

  const [contactState, contactDispatch] = useReducer(
    contactReducer,
    contactInitialState,
  );

  return (
    <AppContext.Provider
      value={ {
        dashboardState,
        contactState,
      } }
    >
      <AppContextDispatch.Provider
        value={ {
          dashboardDispatch,
          contactDispatch,
        } }
      >
        {children}
      </AppContextDispatch.Provider>
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppProvider, AppContext, AppContextDispatch };
