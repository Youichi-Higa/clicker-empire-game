import { User } from '@/models/user';
import { createUserInfo } from './createUserInfo';

export const updateUserInfo = (user: User): void => {
  const userInfo = document.getElementById('userInfo') as HTMLElement;
  userInfo.innerHTML = '';
  userInfo.append(createUserInfo(user));
};
