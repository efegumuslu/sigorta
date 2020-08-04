const dashboardInitialState = {
  banners: [],
  cards: [],
  main_banner: [],
};

const dashboardReducer = (state, action) => {
  console.log('state, action', state, action);
  switch (action.type) {
  case 'SET_DASHBOARD':
    return {
      ...state,
      banners: action.payload.banners,
      cards: action.payload.cards,
      main_banner: action.payload.main_banner,
    };
  default:
    return state;
  }
};

export {
  dashboardInitialState,
  dashboardReducer,
};
