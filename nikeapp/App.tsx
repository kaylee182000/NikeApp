import React from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';
import RootStack from './src/stack_navigator/navigation';

import styles from './styles';

export default function App() {
  return (
      <View style={styles.container}>
        {/* <ProductScreen /> */}
        {/* <ProductDetailScreen/> */}
        {/* <ShoppingCart /> */}
        <RootStack />
        <StatusBar barStyle={'light-content'} />
      </View>
  );
}
