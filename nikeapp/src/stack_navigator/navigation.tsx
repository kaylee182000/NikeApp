import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenName} from './index';

//Screen
import LoginScreen from '../screens/LoginScreen';
import ProductScreen from '../screens/ProductScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CartScreen from '../screens/ShoppingCart';
import RegisterScreen from '../screens/RegisterScreen';
import AccountScreen from '../screens/AccountScreen';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  ProductScreen: undefined;
  ProductDetailScreen: {productId: string};
};

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={screenName.productScreen}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={screenName.loginScreen} component={LoginScreen} />
        <Stack.Screen
          name={screenName.productScreen}
          component={ProductScreen}
        />
        <Stack.Screen
          name={screenName.registerScreen}
          component={RegisterScreen}
        />
        <Stack.Screen
          name={screenName.productDetaiScreen}
          component={ProductDetailScreen}
          options={{
            animation: 'fade_from_bottom',
            presentation: 'modal',
          }}
        />
        <Stack.Screen name={screenName.cartScreen} component={CartScreen} />
        <Stack.Screen
          name={screenName.accountScreen}
          component={AccountScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
