import { updateUserInfo } from '@/views/updateUserInfo';
import { User } from '@/models/user';

export const startTimer = (user: User) => {
  setInterval(() => {
    user.days++;
    if (user.days % 365 === 0) user.age++;
    user.money += user.incomePerSec;
    updateUserInfo(user);
  }, 1000);
};
