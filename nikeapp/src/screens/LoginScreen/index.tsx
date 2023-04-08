import React, {useState} from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import InputField from '../../components/InputField';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/user/userSlide';

import styles from './styles';

const backgroundImage = require('../../assets/images/Coproom.jpg');

const LoginScreen = ({navigation}: NativeStackScreenProps<any>) => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handlePressLogin = () => {
    const data = {userName: userName, userCart: []};
    dispatch(login({data: data}));
    navigation.goBack();
  };
  const onChangeUserName = (newName: string) => {
    setUserName(newName);
  };
  const onChangePassword = (newPassWord: string) => {
    setPassword(newPassWord);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.overlay} />
      <View style={styles.container}>
        <InputField
          placeHolderText={'Username'}
          isPassword={false}
          onChangeText={(newText: string) => onChangeUserName(newText)}
          newText={userName}
        />
        <InputField
          placeHolderText={'Password'}
          isPassword={true}
          onChangeText={(newText: string) => onChangePassword(newText)}
          newText={password}
        />
        <View style={styles.viewRow}>
          <Pressable
            onPress={handlePressLogin}
            disabled={userName === '' || password === '' ? true : false}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Login</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
