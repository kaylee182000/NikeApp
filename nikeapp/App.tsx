import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
import RootStack from './src/stack_navigator/navigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

import styles from './styles';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <RootStack />
        <StatusBar barStyle={'light-content'} backgroundColor={'black'}/>
      </View>
    </Provider>
      
  );
}
