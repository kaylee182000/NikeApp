import React from 'react';
import {Pressable, Text} from 'react-native';
import {color} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

interface ButtonProps {
  buttonText: string;
  onPressButton?: () => void;
}

const ButtonCommon = ({buttonText, onPressButton}: ButtonProps) => {
  return (
    <LinearGradient
      colors={[color.defaultColor2, color.defaultColor3]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={[styles.button, {width: '90%'}]}>
      <Pressable onPress={onPressButton}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </Pressable>
    </LinearGradient>
  );
};

export default ButtonCommon;
