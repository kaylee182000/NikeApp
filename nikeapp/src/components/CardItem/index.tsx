import React from 'react';
import {Image, View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Product} from '../../types/product.type';
import styles from './styles';

interface dataProps  {
  data : Product,
}

const CardItem = ({data} : dataProps) => {
  return (
    <View style={styles.contanier}>
      <FastImage source={{uri: data.image}} style={styles.image} />
      <Text style={styles.textName}>{data.name}</Text>
    </View>
  );
};

export default CardItem;
