import React from 'react';
import {View, Text, FlatList} from 'react-native';
//import cart from '../../data/cart';
import CartListItem from '../../components/CartListItem';
import ButtonCommon from '../../components/ButtonCommon';
import AppBarHeader from '../../components/AppBarHeader';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {useAppSelector, useAppDispatch} from '../../redux/store';
import {screenName} from '../../stack_navigator';
import {changeQuantity} from '../../redux/cart/cartSlide';

import styles from './styles';

const ShoppingCart = ({navigation}: NativeStackScreenProps<any>) => {
  const dispatch = useAppDispatch();
  const carts = useAppSelector(rootState => rootState.cart.cart);

  const increaseQuantity = (productId: string) => {
    const data = {id: productId, type: 'increase'};
    dispatch(changeQuantity({data: data}));
  };

  const decreaseQuantity = (productId: string) => {
    const data = {id: productId, type: 'decrease'};
    dispatch(changeQuantity({data: data}));
  };

  const renderFooterComponent = () => {
    return (
      <View style={styles.totalContainer}>
        <View style={styles.viewRow}>
          <Text style={styles.commonText}>Subtotals</Text>
          <Text style={styles.commonText}>410,00$</Text>
        </View>
        <View style={styles.viewRow}>
          <Text style={styles.commonText}>Delivery</Text>
          <Text style={styles.commonText}>10,00$</Text>
        </View>
        <View style={styles.viewRow}>
          <Text style={styles.textBold}>Totals</Text>
          <Text style={styles.textBold}>420,00$</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <AppBarHeader
        title={'CART'}
        onPressGoBack={() => navigation.navigate(screenName.productScreen)}
        isShowIcon={true}
        iconLeft={'chevron-back-outline'}
      />
      <View style={styles.cardContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.product.id}
          data={carts}
          renderItem={({item}) => (
            <CartListItem
              cartItem={item}
              increaseQuantity={() => increaseQuantity(item.product.id)}
              decreaseQuantity={() => decreaseQuantity(item.product.id)}
            />
          )}
          ListFooterComponent={renderFooterComponent}
        />
      </View>
      <ButtonCommon buttonText={'Checkout'} />
    </View>
  );
};

export default ShoppingCart;
