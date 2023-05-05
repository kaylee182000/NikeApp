import React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {color} from '../../constants';

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
          <Icon name={iconLeft} color={color.defaultColor4} size={30} />
        </TouchableOpacity>
      ) : (
        <Text></Text>
      )}
      <Text style={styles.text}>{title}</Text>
      {isShowIconRight && iconRight ? (
        <TouchableOpacity onPress={onPressIconRight}>
          <Icon
            name={iconRight}
            color={color.defaultColor4}
            size={30}
            style={{justifyContent: 'flex-start'}}
          />
        </TouchableOpacity>
      ) : (
        <Text></Text>
      )}
    </SafeAreaView>
  );
};

export default AppBarHeader;
