import cn from 'classnames';

import { PopupInfo } from './popup-info';
import { PopupAppt } from './popup-appt';

import { POPUP_STEPS } from '../../../core/constants/steps';

import style from './map-popup.styles.scss';

const MapPopup = ({ dealer, step, setStep, close }) => (
  <div class={cn(style['map-popup'], cn(style[`map-popup--${step}`]))}>
    {step === POPUP_STEPS.INFO && (
      <PopupInfo dealer={dealer} onAppointmentClick={() => setStep(POPUP_STEPS.APPOINTMENT)} />
    )}
    {step === POPUP_STEPS.APPOINTMENT && (
      <div class={style['map-popup__appt']}>
        <PopupAppt
          dealer={dealer}
          onCancel={() => setStep(POPUP_STEPS.INFO)}
          onSubmit={() => {
            close();
            setStep(POPUP_STEPS.INFO);
          }}
        />
      </div>
    )}
  </div>
);

export default MapPopup;
