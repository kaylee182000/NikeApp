import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Cart} from '../../types/cart.type';
import Feather from 'react-native-vector-icons/Feather';
import FastImage from 'react-native-fast-image';
import {numberWithCommas} from '../../helpers';

import styles from './styles';

interface CartListItemProps {
  cartItem: Cart;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  deleteFromCart: () => void;
}

const CartListItem = ({
  cartItem,
  increaseQuantity,
  decreaseQuantity,
  deleteFromCart,
}: CartListItemProps) => {
  return (
    <View style={styles.container}>
      <FastImage source={{uri: cartItem.product.image}} style={styles.image} />
      <View style={styles.contentContainer}>
        <View style={styles.viewRow}>
          <Text style={styles.name}>{cartItem.product.name}</Text>
          <TouchableOpacity onPress={deleteFromCart}>
            <Feather name="trash" size={20} color="gray" />
          </TouchableOpacity>
        </View>

        <Text style={styles.itemTotal}>
          {numberWithCommas(cartItem.product.price)}$
        </Text>

        <View style={styles.footer}>
          <TouchableOpacity onPress={decreaseQuantity}>
            <Feather name="minus-circle" size={24} color="black" />
          </TouchableOpacity>

          <Text style={styles.quantity}>{cartItem.quantity}</Text>
          <TouchableOpacity onPress={increaseQuantity}>
            <Feather name="plus-circle" size={24} color="black" />
          </TouchableOpacity>

          <Text style={styles.size}>Size {cartItem.size}</Text>
        </View>
      </View>
    </View>
  );
};

export default CartListItem;
