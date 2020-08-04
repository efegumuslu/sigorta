import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { size } from '../../helpers/statics';
import FaqListItem from './faq_list_item';

const FaqList = ({ faqs }) => {
  const {
    containerStyle,
    contentContainerStyle,
  } = styles();

  console.log('1212', faqs);
  return (
    <View style={ containerStyle }>
      {faqs.length > 0 && (
        <FlatList
          contentContainerStyle={ contentContainerStyle }
          data={ faqs }
          renderItem={ ({ item }) => (
            <FaqListItem
              item={ item }
            />
          ) }
        />
      )}
    </View>
  );
};

const styles = () => StyleSheet.create({
  containerStyle: {
    height: '100%',
  },
  contentContainerStyle: {
    paddingBottom: size(120),
  },
});

export default FaqList;
