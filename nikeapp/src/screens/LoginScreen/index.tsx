import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import InputField from '../../components/InputField';
import {useDispatch} from 'react-redux';
import {setCredential} from '../../redux/user/userSlide';
import {useLoginMutation} from '../../redux/api/apiSlide';
import {screenName} from '../../stack_navigator';

import styles from './styles';

const backgroundImage = require('../../assets/images/Coproom.jpg');

const LoginScreen = ({navigation}: NativeStackScreenProps<any>) => {
  const dispatch = useDispatch();
  const [userState, setUserState] = useState({
    username: '',
    password: '',
  });

  const [login, {isLoading}] = useLoginMutation();

  const handlePressLogin = async () => {
    try {
      const result = await login(userState);
      if ('data' in result && result.data) {
        const {token, user} = result.data;
        const data = {userProfile: user, token: token};
        dispatch(setCredential({data}));
        navigation.navigate(screenName.productScreen);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onChangeUserName = (newName: string) => {
    setUserState({...userState, username: newName});
  };
  const onChangePassword = (newPassWord: string) => {
    setUserState({...userState, password: newPassWord});
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.overlay} />
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <>
            <InputField
              placeHolderText={'Username'}
              isPassword={false}
              onChangeText={(newText: string) => onChangeUserName(newText)}
              newText={userState.username}
            />
            <InputField
              placeHolderText={'Password'}
              isPassword={true}
              onChangeText={(newText: string) => onChangePassword(newText)}
              newText={userState.password}
            />
            <View style={styles.viewRow}>
              <Pressable
                onPress={handlePressLogin}
                disabled={
                  userState.username === '' || userState.password === ''
                    ? true
                    : false
                }>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Login</Text>
                </View>
              </Pressable>
              <Text
                style={styles.textCommon}
                onPress={() => navigation.navigate(screenName.registerScreen)}>
                Don't have an account
              </Text>
            </View>
          </>
        )}
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
