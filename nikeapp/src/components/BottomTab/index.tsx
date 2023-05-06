import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {color} from '../../constants';

import styles from './styles';

interface TabProps {
  isHome: boolean;
  isAccount: boolean;
  onPressChangeTab: (tab: string) => void;
}

const BottomTab = ({onPressChangeTab, isHome, isAccount}: TabProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => onPressChangeTab('home')}
          disabled={isHome}>
          <Feather
            name="home"
            size={24}
            color={isHome ? color.defaultColor2 : color.defaultColor4}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => onPressChangeTab('account')}
          disabled={isAccount}>
          <Feather
            name="user"
            size={24}
            color={isAccount ? color.defaultColor2 : color.defaultColor4}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

BottomTab.defaultProps = {
  isHome: false,
  isAccount: false,
};

export default BottomTab;
