const contactInitialState = {
  faqs: [],
  requests: [],
  complaints: [],
};

const contactReducer = (state, action) => {
  console.log('state, action', state, action);
  switch (action.type) {
  case 'SET_CONTACT':
    return {
      ...state,
      faqs: action.payload.faqs,
      requests: action.payload.requests,
      complaints: action.payload.complaints,
    };
  default:
    return state;
  }
};

export {
  contactInitialState,
  contactReducer,
};
