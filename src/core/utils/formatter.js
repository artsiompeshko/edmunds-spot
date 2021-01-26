import { REGEXP } from '../constants/regexp';

export const phoneFormatter = phone => {
  if (!phone) {
    return '';
  }

  const skippedPhone = phone.replace(/\D/g, '');
  const matchedPhone = REGEXP.PHONE_FORMAT.exec(skippedPhone);

  if (!matchedPhone) {
    return '';
  }

  let result = `(${matchedPhone[1]}`;

  if (matchedPhone[2]) {
    result += `) ${matchedPhone[2]}`;
  }

  if (matchedPhone[3]) {
    result += `-${matchedPhone[3]}`;
  }

  return result;
};
