import React from 'react';
import {View, Text, FlatList} from 'react-native';
//import cart from '../../data/cart';
import CartListItem from '../../components/CartListItem';
import ButtonCommon from '../../components/ButtonCommon';
import AppBarHeader from '../../components/AppBarHeader';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {useAppSelector} from '../../redux/store';

import styles from './styles';
import {screenName} from '../../stack_navigator';

const ShoppingCart = ({navigation}: NativeStackScreenProps<any>) => {
  const carts = useAppSelector(rootState => rootState.cart.cart);

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
          renderItem={({item}) => <CartListItem cartItem={item} />}
          ListFooterComponent={renderFooterComponent}
        />
      </View>
      <ButtonCommon buttonText={'Checkout'} />
    </View>
  );
};

export default ShoppingCart;
