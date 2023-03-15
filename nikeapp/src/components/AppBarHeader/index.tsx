import React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

interface AppBarHeaderProps {
  title: string;
  onPressGoBack?: () => void;
  onPressIconRight?: () => void;
  isShowIconRight?: boolean;
  isShowIcon?: boolean;
  iconRight?: string;
  iconLeft?: string;
}

const AppBarHeader = ({
  title,
  onPressGoBack,
  isShowIcon,
  iconRight,
  iconLeft,
  onPressIconRight,
  isShowIconRight,
}: AppBarHeaderProps) => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      {isShowIcon && iconLeft ? (
        <TouchableOpacity onPress={onPressGoBack}>
          <Icon name={iconLeft} color="white" size={28} />
        </TouchableOpacity>
      ) : (
        <Text></Text>
      )}
      <Text style={styles.text}>{title}</Text>
      {isShowIconRight && iconRight ? (
        <TouchableOpacity onPress={onPressIconRight}>
          <Icon name={iconRight} color="white" size={28} style={{justifyContent: 'flex-start'}}/>
        </TouchableOpacity>
      ) : (
        <Text></Text>
      )}
    </SafeAreaView>
  );
};

export default AppBarHeader;
