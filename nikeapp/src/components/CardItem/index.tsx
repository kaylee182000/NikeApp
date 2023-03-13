import React from 'react';
import {Image, View, Text, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Product} from '../../types/product.type';
import {useNavigation} from '@react-navigation/native';
import {screenName} from '../../stack_navigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import styles from './styles';

interface dataProps {
  data: Product;
  onPressSeeDetail: (id: string) => any;
}

const CardItem = ({data, onPressSeeDetail}: dataProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.contanier}>
      <Pressable onPress={() => onPressSeeDetail(data.id)}>
        <FastImage source={{uri: data.image}} style={styles.image} />
      </Pressable>
      <Text style={styles.textName}>{data.name}</Text>
    </View>
  );
};

export default CardItem;
