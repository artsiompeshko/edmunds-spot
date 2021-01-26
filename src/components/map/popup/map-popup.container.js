import { useState } from 'preact/hooks';

import { POPUP_STEPS } from '../../../core/constants/steps';
import MapPopup from './map-popup.presentation';

const MapPopupContainer = ({ ...props }) => {
  const [step, setStep] = useState(POPUP_STEPS.INFO);

  return <MapPopup step={step} setStep={setStep} {...props} />;
};

export default MapPopupContainer;
