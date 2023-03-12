import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenName} from './index';

//Screen
import ProductScreen from '../screens/ProductScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CartScreen from '../screens/ShoppingCart';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={screenName.productScreen}
          component={ProductScreen}
        />
        <Stack.Screen
          name={screenName.productDetaiScreen}
          component={ProductDetailScreen}
        />
        <Stack.Screen name={screenName.cartScreen} component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
