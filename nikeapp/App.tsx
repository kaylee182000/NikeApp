import React from 'react';
import {View, Text, StatusBar, FlatList, Image} from 'react-native';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import ProductScreen from './src/screens/ProductScreen';

import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductScreen /> */}
      <ProductDetailScreen/>
      <StatusBar barStyle={'light-content'} />
    </View>
  );
}
