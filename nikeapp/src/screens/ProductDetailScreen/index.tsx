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
    console.warn('chup chup');
  };
  return (
    <>
      <View>
        {/* make a header */}
        <ScrollView>
          <View style={styles.scrollContainer}>
            <ProductSlide imageData={product.images} />
            <View style={{padding: 20}}>
              <View style={styles.viewRow}>
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.price}>${product.price}</Text>
              </View>

              <Text style={styles.desc}>{product.description}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <ButtonCommon buttonText={'Add To Cart'} onPressButton={addToCart} />
    </>
  );
};

export default ProductDetailScreen;
