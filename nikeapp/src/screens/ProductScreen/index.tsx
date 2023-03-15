import React from 'react';
import {Text, View, FlatList} from 'react-native';
//import products from '../../data/products';
import CardItem from '../../components/CardItem';
import AppBarHeader from '../../components/AppBarHeader';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { screenName } from '../../stack_navigator';
//khong dung useSelector nhu bth nua ma dung useAppSelector
import { useAppSelector } from '../../redux/store';

import styles from './styles';


const ProductScreen = ({navigation} : NativeStackScreenProps<any>) => {
const products = useAppSelector(rootState => rootState.products?.products)

  const handlePressGoback = () => {
    console.warn('hi');
  };

  const onPressDetailProduct = (id : string) => {
    navigation.navigate(screenName.productDetaiScreen, ({productId: id}))
  }

  const onPressIconRight = () => {
    navigation.navigate(screenName.cartScreen)
  }
  return (
    <>
      <AppBarHeader
        title="PRODUCT"
        onPressGoBack={handlePressGoback}
        // isShowIcon={true}
        // iconLeft={'chevron-back-outline'}
        isShowIconRight={true}
        iconRight={'cart-outline'}
        onPressIconRight={onPressIconRight}
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
