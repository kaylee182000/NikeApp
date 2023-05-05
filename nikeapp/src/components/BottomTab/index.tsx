import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {color} from '../../constants';

import styles from './styles';

interface TabProps {
  onPressIcon1: () => void;
  onPressIcon2: () => void;
}

const BottomTab = ({onPressIcon1, onPressIcon2}: TabProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onPressIcon1}>
          <Feather name="home" size={24} color={color.defaultColor4} />
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onPressIcon2}>
          <Feather name="user" size={24} color={color.defaultColor4} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomTab;
