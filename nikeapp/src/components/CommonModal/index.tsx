import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';

import styles from './styles';

interface ModalProps {
  isVisible: boolean;
  modalTTitle?: string;
  modalDesc?: string;
  btn1Text: string;
  btn2Text: string;
  onPressBtn1: () => void;
  onPressBtn2: () => void;
}

const CommonModal = ({
  isVisible,
  modalDesc,
  modalTTitle,
  btn1Text,
  btn2Text,
  onPressBtn1,
  onPressBtn2,
}: ModalProps) => {
  return (
    <Modal
      statusBarTranslucent
      animationType="fade"
      visible={isVisible}
      transparent>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.bodyContainer}>
            <Text style={styles.title}>{modalTTitle}</Text>
            <Text style={styles.desc}>{modalDesc}</Text>
          </View>

          <View style={styles.viewRow}>
            <TouchableOpacity onPress={onPressBtn1}>
              <View style={styles.btnContainer}>
                <Text style={styles.btnText}>{btn1Text}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressBtn2}>
              <View style={styles.btnContainer}>
                <Text style={styles.btnText}>{btn2Text}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CommonModal;
