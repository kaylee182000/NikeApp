import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserProfile} from '../../types/user.type';

interface UserState {
  userProfile: UserProfile;
  token: string;
  isLogin: boolean;
}

const initialState: UserState = {
  userProfile: {
    _id: '',
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    cart: [],
  },
  token: '',
  isLogin: false,
};

interface CredentialPayload {
  userProfile: UserProfile;
  token: string;
}

const userSlide = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCredential: (
      state,
      action: PayloadAction<{data: CredentialPayload}>,
    ) => {
      const {userProfile, token} = action.payload.data;
      state.userProfile = userProfile;
      state.token = token;
      state.isLogin = true;
    },
  },
});

export const {setCredential} = userSlide.actions;

export default userSlide.reducer;
