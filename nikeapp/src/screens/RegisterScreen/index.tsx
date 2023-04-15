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
import {useRegisterMutation} from '../../redux/api/apiSlide';
import {screenName} from '../../stack_navigator';

import styles from './styles';

const backgroundImage = require('../../assets/images/Coproom.jpg');

interface RegisterState {
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
}

const RegisterScreen = ({navigation}: NativeStackScreenProps<any>) => {
  const [userState, setUserState] = useState<RegisterState>({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
  });

  const [register, {isLoading}] = useRegisterMutation();

  const handlePressSignup = async () => {
    console.log(userState, '=====');
    try {
      const result = await register(userState);

      //https://stackoverflow.com/questions/69013843/working-with-typescript-interfaces-error-property-does-not-exist
      if ('data' in result && result.data) {
        navigation.navigate(screenName.loginScreen);
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
  const onChangeEmail = (newEmail: string) => {
    setUserState({...userState, email: newEmail});
  };
  const onChangePhoneNumber = (newPhoneNumber: string) => {
    setUserState({...userState, phoneNumber: newPhoneNumber});
  };
  const onChangeAddress = (newAddress: string) => {
    setUserState({...userState, address: newAddress});
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
              placeHolderText={'Email'}
              isPassword={false}
              onChangeText={(newText: string) => onChangeEmail(newText)}
              newText={userState.email}
            />
            <InputField
              placeHolderText={'Password'}
              isPassword={true}
              onChangeText={(newText: string) => onChangePassword(newText)}
              newText={userState.password}
            />
            <InputField
              placeHolderText={'Phone Number'}
              isPassword={false}
              onChangeText={(newText: string) => onChangePhoneNumber(newText)}
              newText={userState.phoneNumber}
            />
            <InputField
              placeHolderText={'Address'}
              isPassword={false}
              onChangeText={(newText: string) => onChangeAddress(newText)}
              newText={userState.address}
            />
            <View style={styles.viewRow}>
              <Pressable
                onPress={handlePressSignup}
                disabled={
                  userState.username === '' || userState.password === ''
                    ? true
                    : false
                }>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Sign Up</Text>
                </View>
              </Pressable>
            </View>
          </>
        )}
      </View>
    </ImageBackground>
  );
};

export default RegisterScreen;
