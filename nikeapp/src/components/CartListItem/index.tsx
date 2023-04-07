import {View, Text} from 'react-native';
import {Cart} from '../../types/cart.type';
import Feather from 'react-native-vector-icons/Feather';
import FastImage from 'react-native-fast-image';

import styles from './styles';

interface CartListItemProps {
  cartItem: Cart;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}

const CartListItem = ({
  cartItem,
  increaseQuantity,
  decreaseQuantity,
}: CartListItemProps) => {
  return (
    <View style={styles.container}>
      <FastImage source={{uri: cartItem.product.image}} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{cartItem.product.name}</Text>
        <Text style={styles.itemTotal}>$320.0</Text>

        <View style={styles.footer}>
          <Feather
            onPress={increaseQuantity}
            name="minus-circle"
            size={24}
            color="black"
          />
          <Text style={styles.quantity}>{cartItem.quantity}</Text>
          <Feather
            onPress={decreaseQuantity}
            name="plus-circle"
            size={24}
            color="black"
          />
          <Text style={styles.size}>Size {cartItem.size}</Text>
        </View>
      </View>
    </View>
  );
};

export default CartListItem;
