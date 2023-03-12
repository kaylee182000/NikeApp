import React from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

interface AppBarHeaderProps {
  title: string;
  onPressGoBack?: () => void;
  isShowIcon?: boolean;
}

const AppBarHeader = ({
  title,
  onPressGoBack,
  isShowIcon,
}: AppBarHeaderProps) => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      {isShowIcon ? (
        <TouchableOpacity onPress={onPressGoBack}>
          <Icon name={'chevron-back-outline'} color="white" size={28} />
        </TouchableOpacity>
      ) : null}
      <Text style={styles.text}>{title}</Text>
    </SafeAreaView>
  );
};

export default AppBarHeader;
