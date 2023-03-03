import React from 'react';
import {View, Text, StatusBar, FlatList, Image} from 'react-native';
import CardItem from './src/components/CardItem';
import products from './src/data/products';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <CardItem data={item}/>
        )}
      />
      <StatusBar barStyle={'light-content'} />
    </View>
  );
}
