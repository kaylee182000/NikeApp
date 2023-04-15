import {UserProfile} from './user.type';

export interface Login {
  token: string;
  user: UserProfile;
}
