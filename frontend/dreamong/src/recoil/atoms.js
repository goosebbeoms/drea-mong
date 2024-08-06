import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: {
    userId: 1,
    email: '',
    nickname: '',
    role: 'ADMIN',
  },
});
