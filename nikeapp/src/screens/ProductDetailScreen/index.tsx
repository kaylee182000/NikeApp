import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import products from '../../data/products';

import ProductSlide from './components/ProductSlicce';
import ButtonCommon from '../../components/ButtonCommon';

import styles from './styles';

const ProductDetailScreen = () => {
  const product = products[0];
  const addToCart = () => {
    console.warn('chup chup')
  }
  return (
    <View>
      {/* make a header */}
      <ScrollView>
        <View style={styles.container}>
          <ProductSlide imageData={product.images} />
          <View style={{padding: 20}}>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Text style={styles.desc}>{product.description}</Text>
          </View>
        </View>
      </ScrollView>
      <ButtonCommon buttonText={'Add To Cart'} onPressButton={addToCart}/>
    </View>
  );
};

export default ProductDetailScreen;
