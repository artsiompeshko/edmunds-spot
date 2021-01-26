import { load } from '../utils/script';

window.__carcode = {
  skipButton: true,
  floatingButtonPosition: 'side right center',
};

export const loadCarCode = (dealerId, callback) => {
  load(`https://dev-dsg11-www.carcodesms.com/widgets/${dealerId}.js`, callback);
};
