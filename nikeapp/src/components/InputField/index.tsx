import React from 'react';
import {TextInput} from 'react-native';

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
      placeholderTextColor={'white'}
      secureTextEntry={isPassword}
      onChangeText={onChangeText}
      value={newText}
    />
  );
};

export default InputField;
