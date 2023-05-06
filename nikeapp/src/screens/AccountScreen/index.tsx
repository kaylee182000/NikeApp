import React from 'react';
import {View, Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import AppBarHeader from '../../components/AppBarHeader';
import BottomTab from '../../components/BottomTab';
import {screenName} from '../../stack_navigator';

import styles from './styles';

const AccountScreen = ({navigation}: NativeStackScreenProps<any>) => {
  const onPressChangeTab = (tab: string) => {
    if (tab === 'home') {
      navigation.navigate(screenName.productScreen);
    }
  };
  return (
    <View style={styles.container}>
      <AppBarHeader
        title="Account"
        //onPressGoBack={handlePressGoback}
        // isShowIcon={true}
        // iconLeft={'chevron-back-outline'}
        isShowIconRight={false}
      />
      <View style={styles.contentContainer}>
        <Text>hi</Text>
      </View>
      <View style={styles.bottomContainer}>
        <BottomTab onPressChangeTab={onPressChangeTab} isAccount={true} />
      </View>
    </View>
  );
};

export default AccountScreen;
