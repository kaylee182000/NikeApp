import React from "react";
import { Text, View, FlatList } from "react-native";
import products from "../../data/products";
import CardItem from "../../components/CardItem";

import styles from "./styles";

const ProductScreen = () => {
    return (
        <FlatList
        data={products}
        renderItem={({item}) => (
          <CardItem data={item}/>
        )}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    )
}

export default ProductScreen