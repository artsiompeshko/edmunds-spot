export const objectToUri = object => {
  if (!object) {
    return '';
  }

  const result = [];

  Object.keys(object).forEach(key => {
    result.push(`${key}=${window.encodeURIComponent(object[key])}`);
  });

  return result.join('&');
};
