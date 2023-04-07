import React from 'react';
import {View, Text, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Product} from '../../types/product.type';
import styles from './styles';

interface dataProps {
  data: Product;
  onPressSeeDetail: (id: string) => any;
}

const CardItem = ({data, onPressSeeDetail}: dataProps) => {
  return (
    <View style={styles.contanier}>
      <Pressable onPress={() => onPressSeeDetail(data.id)}>
        <FastImage source={{uri: data.image}} style={styles.image} />
      </Pressable>
    </View>
  );
};

export default CardItem;
