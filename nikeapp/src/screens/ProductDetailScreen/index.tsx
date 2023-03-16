import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
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
import styles from './styles';

const ProductDetailScreen = ({navigation}: NativeStackScreenProps<any>) => {
  const route =
    useRoute<RouteProp<RootStackParamList, 'ProductDetailScreen'>>();

  const dispatch = useAppDispatch();

  const productId = route.params.productId;

  const product: Product = products.find(item => item.id === productId)!;

  const onPressAddToCart = () => {
    const data = {product: product, size: 43, quantity: 1};
    dispatch(addToCart({data: data}));
  };
  const handlePressBack = () => {
    navigation.goBack();
  };

  const onPressIconRight = () => {
    navigation.navigate(screenName.cartScreen);
  };

  return (
    <>
      {product && (
        <View style={styles.container}>
          <AppBarHeader
            title={product.name}
            onPressGoBack={handlePressBack}
            isShowIcon={true}
            iconLeft={'chevron-back-outline'}
            isShowIconRight={true}
            iconRight={'cart-outline'}
            onPressIconRight={onPressIconRight}
          />
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
          <ButtonCommon
            onPressButton={onPressAddToCart}
            buttonText={'Add To Cart'}
          />
        </View>
      )}
    </>
  );
};

export default ProductDetailScreen;
