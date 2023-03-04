import React from 'react';
import {FlatList, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import products from '../../data/products';
import ProductSlide from './components/ProductSlicce';

import styles from './styles';

const ProductDetailScreen = () => {
  const product = products[0];
  return (
    <View style={styles.container}>
        <ProductSlide imageData={product.images} />
    </View>
  );
};

export default ProductDetailScreen;
