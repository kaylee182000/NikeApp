import React from 'react';
import {View, Text,FlatList} from 'react-native';
import cart from '../../data/cart';
import CartListItem from '../../components/CartListItem';

import styles from './styles';

const ShoppingCart = () => {
  return (
      <FlatList data={cart} renderItem={({item}) => (
          <CartListItem cartItem={item}/>
      )}/>
  );
};

export default ShoppingCart;
