import React from 'react';
import {View, Text, StatusBar, FlatList, Image} from 'react-native';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import ProductScreen from './src/screens/ProductScreen';
import ShoppingCart from './src/screens/ShoppingCart';

import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductScreen /> */}
      {/* <ProductDetailScreen/> */}
      <ShoppingCart />
      <StatusBar barStyle={'light-content'} />
    </View>
  );
}
