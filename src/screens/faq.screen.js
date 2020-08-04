import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import FaqList from './contact_views/faq_list';
import { size } from '../helpers/statics';
import Text from '../components/text';
import ContactsTopBar from './contact_views/contacts_top_bar';
import ContactHooks from '../hooks/contact.hooks';

const Faqs = () => {
  const { useContactState } = ContactHooks();

  const { faqs } = useContactState();

  const {
    contentContainerStyle,
  } = styles();
  return (
    <View style={ contentContainerStyle }>
      <ContactsTopBar
        isBackButton={ false }
        isCloseButton
        title="Sıkça Sorulan Sorular"
      />
      {faqs.length > 0 && (<FaqList faqs={ faqs } />)}
    </View>
  );
};

const styles = () => StyleSheet.create({
  contentContainerStyle: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',

  },
});

export default Faqs;
