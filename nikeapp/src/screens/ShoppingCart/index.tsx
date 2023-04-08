import React, {useCallback} from 'react';
import {View, Text, FlatList} from 'react-native';
//import cart from '../../data/cart';
import CartListItem from '../../components/CartListItem';
import ButtonCommon from '../../components/ButtonCommon';
import AppBarHeader from '../../components/AppBarHeader';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {useAppSelector, useAppDispatch} from '../../redux/store';
import {screenName} from '../../stack_navigator';
import {changeQuantity, deleteFromCart} from '../../redux/cart/cartSlide';
import {numberWithCommas} from '../../helpers/index';

import {userCart} from '../../types/user.type';

import styles from './styles';

const ShoppingCart = ({navigation}: NativeStackScreenProps<any>) => {
  const dispatch = useAppDispatch();
  const carts = useAppSelector(rootState => rootState.cart.cart);
  const user = useAppSelector(rootState => rootState.user.userProfile);

  const increaseQuantity = (productId: string) => {
    const data = {id: productId, type: 'increase'};
    dispatch(changeQuantity({data: data}));
  };

  const decreaseQuantity = (productId: string) => {
    const data = {id: productId, type: 'decrease'};
    dispatch(changeQuantity({data: data}));
  };

  const handlePressDelete = (productId: string) => {
    const data = productId;
    dispatch(deleteFromCart({data: data}));
  };

  const getSubTotalPrice = useCallback(() => {
    let subTotalPrice = 0;
    carts.forEach(p => {
      const total = p.quantity * p.product.price;
      subTotalPrice = subTotalPrice + total;
    });
    return subTotalPrice;
  }, [carts]);

  const getTotalPrice = useCallback(() => {
    const subTotalPrice = getSubTotalPrice();
    return subTotalPrice + 10;
  }, [getSubTotalPrice]);

  const handleCheckOut = useCallback(() => {
    if (user.userName === '') {
      navigation.navigate(screenName.loginScreen);
    } else {
      const data: userCart[] = [];
      carts.forEach(p => {
        data.push({productId: p.product.id, quantity: p.quantity});
      });
      console.log(data);
    }
  }, [carts, navigation, user]);

  const renderFooterComponent = () => {
    return (
      <View style={styles.totalContainer}>
        <View style={styles.viewRow}>
          <Text style={styles.commonText}>Subtotals</Text>
          <Text style={styles.commonText}>
            {numberWithCommas(getSubTotalPrice())}$
          </Text>
        </View>
        <View style={styles.viewRow}>
          <Text style={styles.commonText}>Delivery</Text>
          <Text style={styles.commonText}>10,00$</Text>
        </View>
        <View style={styles.viewRow}>
          <Text style={styles.textBold}>Totals</Text>
          <Text style={styles.textBold}>
            {numberWithCommas(getTotalPrice())}$
          </Text>
        </View>
      </View>
    );
  };

  const renderButtonCheckout = useCallback(() => {
    if (carts.length > 0) {
      return (
        <ButtonCommon buttonText={'Checkout'} onPressButton={handleCheckOut} />
      );
    }
  }, [carts.length, handleCheckOut]);

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
              deleteFromCart={() => handlePressDelete(item.product.id)}
            />
          )}
          ListFooterComponent={renderFooterComponent}
        />
      </View>
      {renderButtonCheckout()}
    </View>
  );
};

export default ShoppingCart;
