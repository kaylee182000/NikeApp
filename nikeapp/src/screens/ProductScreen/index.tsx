import React, {useEffect, useState} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
//import products from '../../data/products';
import CardItem from '../../components/CardItem';
import AppBarHeader from '../../components/AppBarHeader';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {screenName} from '../../stack_navigator';
import {useGetProductsQuery} from '../../redux/api/apiSlide';
//khong dung useSelector nhu bth nua ma dung useAppSelector
// import {useAppSelector} from '../../redux/store';
import axios from 'axios';

import styles from './styles';
import {Product} from '../../types/product.type';
import {CustomAxios} from '../../helpers';

const ProductScreen = ({navigation}: NativeStackScreenProps<any>) => {
  //const products = useAppSelector(rootState => rootState.products?.products);
  const [product, setProduct] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      return await CustomAxios().get('/product');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  //console.log(product);

  const {data, isLoading} = useGetProductsQuery();

  const onPressDetailProduct = (id: string) => {
    navigation.navigate(screenName.productDetaiScreen, {productId: id});
  };

  const onPressIconRight = () => {
    navigation.navigate(screenName.cartScreen);
  };
  // console.log(useGetProductsQuery(), 'hihihih');

  return (
    <>
      <AppBarHeader
        title="PRODUCT"
        //onPressGoBack={handlePressGoback}
        // isShowIcon={true}
        // iconLeft={'chevron-back-outline'}
        isShowIconRight={true}
        iconRight={'cart-outline'}
        onPressIconRight={onPressIconRight}
      />
      {isLoading && <ActivityIndicator />}
      <FlatList
        data={data}
        renderItem={({item}) => (
          <CardItem data={item} onPressSeeDetail={onPressDetailProduct} />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </>
  );
};

export default ProductScreen;
