import React from 'react';
import {Text, View, FlatList} from 'react-native';
import products from '../../data/products';
import CardItem from '../../components/CardItem';
import AppBarHeader from '../../components/AppBarHeader';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import styles from './styles';
import { screenName } from '../../stack_navigator';


const ProductScreen = ({navigation} : NativeStackScreenProps<any>) => {
  const handlePressGoback = () => {
    console.warn('hi');
  };
  const onPressDetailProduct = (id : string) => {
    navigation.navigate(screenName.productDetaiScreen, ({productId: id}))
  }
  return (
    <>
      <AppBarHeader
        title="Product"
        onPressGoBack={handlePressGoback}
        isShowIcon={false}
      />
      <FlatList
        data={products}
        renderItem={({item}) => <CardItem data={item} onPressSeeDetail={onPressDetailProduct}/>}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </>
  );
};

export default ProductScreen;
