import { load } from '../utils/script';

export const loadCarCode = (dealerId, callback) => {
  window.__carcode = {
    skipButton: true,
    theme: 'edmunds',
    floatingButtonPosition: 'side right center',
  };

  load(`https://dev-dsg11-www.carcodesms.com/widgets/${dealerId}.js`, callback);
};
