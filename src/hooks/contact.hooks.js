import { useContext } from 'react';

import { AppContext, AppContextDispatch } from '../contexts/app.context';

import ContactRequests from '../requests/contact.request';

const ContactHooks = () => {
  const { contactState } = useContext(AppContext);

  const { contactDispatch } = useContext(AppContextDispatch);

  const useContactState = () => contactState;

  const fetchContact = () => {
    ContactRequests.fetchContact()
      .then((response) => {
        contactDispatch({
          type: 'SET_CONTACT',
          payload: response,
        });
        console.log('fetchContact response', response);
      })
      .catch((error) => {
        console.log('fetchContact error', error);
      });
  };

  return {
    useContactState,
    fetchContact,
  };
};

export default ContactHooks;
