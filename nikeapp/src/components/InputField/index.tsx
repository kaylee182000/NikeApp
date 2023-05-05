import React from 'react';
import {TextInput} from 'react-native';
import { color } from '../../constants';

import styles from './styles';

interface Props {
  placeHolderText: string;
  isPassword: boolean;
  onChangeText: (text: string) => void;
  newText: string;
}

const InputField = ({
  placeHolderText,
  isPassword,
  onChangeText,
  newText,
}: Props) => {
  return (
    <TextInput
      style={styles.inputField}
      placeholder={placeHolderText}
      placeholderTextColor={color.defaultColor2}
      secureTextEntry={isPassword}
      onChangeText={onChangeText}
      value={newText}
    />
  );
};

export default InputField;
