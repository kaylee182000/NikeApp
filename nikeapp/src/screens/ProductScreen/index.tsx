import React from 'react';
import {FlatList, ActivityIndicator, View} from 'react-native';
//import products from '../../data/products';
import CardItem from '../../components/CardItem';
import AppBarHeader from '../../components/AppBarHeader';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {screenName} from '../../stack_navigator';
import {useGetProductsQuery} from '../../redux/api/apiSlide';
//khong dung useSelector nhu bth nua ma dung useAppSelector
import {useAppSelector} from '../../redux/store';
import {color} from '../../constants';
import styles from './styles';
import BottomTab from '../../components/BottomTab';

const ProductScreen = ({navigation}: NativeStackScreenProps<any>) => {
  const isLogin = useAppSelector(rootState => rootState.user.isLogin);
  const {data, isLoading} = useGetProductsQuery();

  const onPressDetailProduct = (id: string) => {
    navigation.navigate(screenName.productDetaiScreen, {productId: id});
  };

  const onPressIconRight = () => {
    navigation.navigate(screenName.cartScreen);
  };

  const onPressChangeTab = (tab: string) => {
    if (tab === 'account') {
      navigation.navigate(screenName.accountScreen);
    }
  };

  return (
    <View style={styles.container}>
      <AppBarHeader
        title="Nike"
        //onPressGoBack={handlePressGoback}
        // isShowIcon={true}
        // iconLeft={'chevron-back-outline'}
        isShowIconRight={isLogin}
        iconRight={'cart-outline'}
        onPressIconRight={onPressIconRight}
      />
      <View style={[styles.container, {justifyContent: 'center'}]}>
        {isLoading && (
          <ActivityIndicator color={color.defaultColor2} size={28} />
        )}
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => (
          <CardItem data={item} onPressSeeDetail={onPressDetailProduct} />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
      />
      <View style={styles.bottomContainer}>
        <BottomTab onPressChangeTab={onPressChangeTab} isHome={true} />
      </View>
    </View>
  );
};

export default ProductScreen;
