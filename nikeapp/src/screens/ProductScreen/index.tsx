import React, {useEffect, useState} from 'react';
import {FlatList, ActivityIndicator, View} from 'react-native';
//import products from '../../data/products';
import CardItem from '../../components/CardItem';
import AppBarHeader from '../../components/AppBarHeader';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {screenName} from '../../stack_navigator';
import {useGetProductsQuery} from '../../redux/api/apiSlide';
//khong dung useSelector nhu bth nua ma dung useAppSelector
import {useAppSelector} from '../../redux/store';
import styles from './styles';

const ProductScreen = ({navigation}: NativeStackScreenProps<any>) => {
  const isLogin = useAppSelector(rootState => rootState.user.isLogin);
  const {data, isLoading} = useGetProductsQuery();

  const onPressDetailProduct = (id: string) => {
    navigation.navigate(screenName.productDetaiScreen, {productId: id});
  };

  const onPressIconRight = () => {
    navigation.navigate(screenName.cartScreen);
  };

  return (
    <>
      <AppBarHeader
        title="PRODUCT"
        //onPressGoBack={handlePressGoback}
        // isShowIcon={true}
        // iconLeft={'chevron-back-outline'}
        isShowIconRight={isLogin}
        iconRight={'cart-outline'}
        onPressIconRight={onPressIconRight}
      />
      <View style={styles.container}>{isLoading && <ActivityIndicator />}</View>

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
