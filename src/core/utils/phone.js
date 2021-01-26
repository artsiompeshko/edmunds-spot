import { REGEXP } from '../constants/regexp';

export const getPhone = phoneString => {
  const phone = REGEXP.PHONE_FORMAT.exec(phoneString.replace(/\D/g, ''));

  return `+1${phone[1]}${phone[2]}${phone[3]}`;
};
