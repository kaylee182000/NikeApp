import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../types/user.type';

interface UserState {
  userProfile: User;
}

const initialState: UserState = {
  userProfile: {
    userName: '',
    userCart: [],
  },
};

const userSlide = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{data: User}>) => {
      const {data} = action.payload;
      state.userProfile = data;
    },
  },
});

export const {login} = userSlide.actions;

export default userSlide.reducer;
