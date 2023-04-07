import React from 'react';
import {Text, TouchableHighlight} from 'react-native';

import styles from './styles';

interface ButtonProps {
  buttonText: string;
  onPressButton?: () => void;
}

const ButtonCommon = ({buttonText, onPressButton}: ButtonProps) => {
  return (
    <TouchableHighlight
      onPress={onPressButton}
      activeOpacity={0.9}
      underlayColor="#7f1d1d"
      style={[styles.button, {width: '90%'}]}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableHighlight>
  );
};

export default ButtonCommon;
