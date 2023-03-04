import React from 'react';
import {Text, View, useWindowDimensions, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './styles';

interface ProductSliceProps {
  imageData: string[];
}
const ProductSlide = ({imageData}: ProductSliceProps) => {
  const {width} = useWindowDimensions();
  return (
    <View>
      <FlatList
        data={imageData}
        renderItem={({item}) => (
          <FastImage
            source={{uri: item}}
            style={[styles.image, {width: width}]}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </View>
  );
};

export default ProductSlide;
