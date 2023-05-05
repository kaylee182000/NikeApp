import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  useWindowDimensions,
  ActivityIndicator,
} from 'react-native';
import ButtonCommon from '../../components/ButtonCommon';
import AppBarHeader from '../../components/AppBarHeader';

import {useRoute, RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../stack_navigator/navigation';
import {screenName} from '../../stack_navigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useAppDispatch} from '../../redux/store';
import {addToCart} from '../../redux/cart/cartSlide';
import {useGetProductQuery} from '../../redux/api/apiSlide';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {useAppSelector} from '../../redux/store';
import CommonModal from '../../components/CommonModal';

const ProductDetailScreen = ({navigation}: NativeStackScreenProps<any>) => {
  const {width} = useWindowDimensions();
  const dispatch = useAppDispatch();
  const route =
    useRoute<RouteProp<RootStackParamList, 'ProductDetailScreen'>>();
  const isLogin = useAppSelector(rootState => rootState.user.isLogin);

  const productId = route.params.productId;

  const [visible, setVisible] = useState<boolean>(false);

  const {data, isLoading} = useGetProductQuery(productId);
  const onPressAddToCart = () => {
    if (!isLogin) {
      setVisible(true);
    } else {
      navigation.navigate(screenName.cartScreen);
    }
  };

  const handlePressBack = () => {
    navigation.goBack();
  };

  const onPressIconRight = () => {
    navigation.navigate(screenName.cartScreen);
  };

  const onPressBtn1 = () => {
    setVisible(false);
  };
  const onPressBtn2 = () => {
    setVisible(false);
    navigation.navigate(screenName.loginScreen);
  };

  return (
    <>
      {data && (
        <View style={styles.container}>
          <AppBarHeader
            title={data.name}
            onPressGoBack={handlePressBack}
            isShowIcon={true}
            iconLeft={'chevron-back-outline'}
            isShowIconRight={isLogin}
            iconRight={'cart-outline'}
            onPressIconRight={onPressIconRight}
          />
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <>
              <ScrollView>
                <View style={styles.scrollContainer}>
                  <FastImage
                    source={{uri: data.image}}
                    style={[styles.image, {width: width}]}
                  />

                  <View style={{padding: 20}}>
                    <View style={styles.viewRow}>
                      <Text style={styles.title}>{data.name}</Text>
                      <Text style={styles.price}>${data.price}</Text>
                    </View>

                    <Text style={styles.desc}>{data.description}</Text>
                  </View>
                </View>
              </ScrollView>
              <ButtonCommon
                onPressButton={onPressAddToCart}
                buttonText={'Add To Cart'}
              />
            </>
          )}
          {visible && (
            <CommonModal
              isVisible={visible}
              modalTTitle={'Oh nooo...!'}
              modalDesc={'Please login to add products to cart'}
              btn1Text={'Cancel'}
              btn2Text={'Login Now'}
              onPressBtn1={onPressBtn1}
              onPressBtn2={onPressBtn2}
            />
          )}
        </View>
      )}
    </>
  );
};

export default ProductDetailScreen;
