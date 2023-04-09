import React from 'react';
import {
  ScrollView,
  Text,
  View,
  useWindowDimensions,
  ActivityIndicator,
} from 'react-native';
import products from '../../data/products';

import ProductSlide from './components/ProductSlicce';
import ButtonCommon from '../../components/ButtonCommon';
import AppBarHeader from '../../components/AppBarHeader';

import {useRoute, RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../stack_navigator/navigation';
import {screenName} from '../../stack_navigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Product} from '../../types/product.type';
import {useAppDispatch} from '../../redux/store';
import {addToCart} from '../../redux/cart/cartSlide';
import {useGetProductQuery} from '../../redux/api/apiSlide';
import styles from './styles';
import FastImage from 'react-native-fast-image';

const ProductDetailScreen = ({navigation}: NativeStackScreenProps<any>) => {
  const {width} = useWindowDimensions();
  const route =
    useRoute<RouteProp<RootStackParamList, 'ProductDetailScreen'>>();

  const dispatch = useAppDispatch();

  const productId = route.params.productId;

  const {data, isLoading} = useGetProductQuery(productId);

  //const product: Product = products.find(item => item.id === productId)!;

  const onPressAddToCart = () => {
    const productData = {product: data, size: 43, quantity: 1};
    dispatch(addToCart({data: productData}));
    navigation.navigate(screenName.cartScreen);
  };

  const handlePressBack = () => {
    navigation.goBack();
  };

  const onPressIconRight = () => {
    navigation.navigate(screenName.cartScreen);
  };

  return (
    <>
      {data && (
        <View style={styles.container}>
          <AppBarHeader
            title={data.name}
            onPressGoBack={handlePressBack}
            isShowIcon={true}
            iconLeft={'chevron-back-outline'}
            isShowIconRight={true}
            iconRight={'cart-outline'}
            onPressIconRight={onPressIconRight}
          />
          {isLoading ? (
            <ActivityIndicator size={20} color={'#7f1d1d'} />
          ) : (
            <>
              <ScrollView>
                <View style={styles.scrollContainer}>
                  <FastImage
                    source={{uri: data.image}}
                    style={[styles.image, {width: width}]}
                  />

                  <View style={{padding: 20}}>
                    <View style={styles.viewRow}>
                      <Text style={styles.title}>{data.name}</Text>
                      <Text style={styles.price}>${data.price}</Text>
                    </View>

                    <Text style={styles.desc}>{data.description}</Text>
                  </View>
                </View>
              </ScrollView>
              <ButtonCommon
                onPressButton={onPressAddToCart}
                buttonText={'Add To Cart'}
              />
            </>
          )}
        </View>
      )}
    </>
  );
};

export default ProductDetailScreen;
