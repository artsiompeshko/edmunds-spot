import { Button } from '../../../button';

import style from './popup-info.styles.scss';

const PopupInfo = ({ dealer, onAppointmentClick }) => (
  <div class={style['popup-info']}>
    <div>
      <p class={style['popup-info__dealer-name']}>{dealer.name}</p>
    </div>
    <div class={style['popup-info__hours']}>
      <p class={style['popup-info__hours-line']}>{dealer.todayWorkingHours}</p>
    </div>
    <div class={style['popup-info__address']}>
      <p class={style['popup-info__address-line']}>{dealer.address.street}</p>
      <p class={style['popup-info__address-line']}>
        {dealer.address.city}, {dealer.address.stateCode} {dealer.address.zip}
      </p>
    </div>
    <div class={style['popup-info__actions']}>
      {dealer?.carcodeInfo?.servicePhone && (
        <Button onClick={onAppointmentClick} size="lg" color="primary">
          Request an Appointment
        </Button>
      )}
      {!dealer?.carcodeInfo?.servicePhone && dealer?.phones?.[0] && (
        <a href={`tel:+1${dealer.phones[0]}`} class={style['popup-info__phone']}>
          Call Dealership
        </a>
      )}
      {dealer?.carcodeInfo?.id ? (
        <Button disabled={!window.CarcodeWidget} className="sms-button" data-widget="livechat" size="lg" color="blue">
          Contact Dealership
        </Button>
      ) : (
        <Button disabled onClick={onAppointmentClick} size="lg" color="secondary">
          Messaging Not Available
        </Button>
      )}
    </div>
  </div>
);

export default PopupInfo;
