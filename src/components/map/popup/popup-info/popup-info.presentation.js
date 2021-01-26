import { Button } from '../../../button';

import style from './popup-info.styles.scss';

const PopupInfo = ({ dealer, onAppointmentClick }) => (
  <div class={style['popup-info']}>
    <div>
      <p class={style['popup-info__dealer-name']}>{dealer.name}</p>
    </div>
    <div class={style['popup-info__address']}>
      <p class={style['popup-info__address-line']}>{dealer.address.street}</p>
      <p class={style['popup-info__address-line']}>
        {dealer.address.city}, {dealer.address.stateCode} {dealer.address.zip}
      </p>
    </div>
    <div class={style['popup-info__actions']}>
      {dealer?.carcodeInfo?.servicePhone ? (
        <Button onClick={onAppointmentClick} size="lg" color="primary">
          Make Appointment
        </Button>
      ) : (
        <Button disabled onClick={onAppointmentClick} size="lg" color="secondary">
          Appointment Not Available
        </Button>
      )}
      {dealer?.carcodeInfo?.id ? (
        <Button disabled={!window.CarcodeWidget} className="sms-button" data-widget="livechat" size="lg" color="blue">
          Contact Dealership
        </Button>
      ) : (
        <Button disabled onClick={onAppointmentClick} size="lg" color="secondary">
          Messenger Not Available
        </Button>
      )}
    </div>
  </div>
);

export default PopupInfo;
