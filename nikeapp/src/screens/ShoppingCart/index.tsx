import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import cart from '../../data/cart';
import CartListItem from '../../components/CartListItem';

import styles from './styles';
import ButtonCommon from '../../components/ButtonCommon';

const ShoppingCart = () => {
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
    <View>
      <View style={styles.cardContainer}>
        <FlatList
          keyExtractor={item => item.product.id}
          data={cart}
          renderItem={({item}) => <CartListItem cartItem={item} />}
          ListFooterComponent={renderFooterComponent}
        />
      </View>

      <ButtonCommon buttonText={'Checkout'} />
    </View>
  );
};

export default ShoppingCart;
