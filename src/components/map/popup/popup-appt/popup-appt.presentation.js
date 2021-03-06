import { Button } from '../../../button';
import { Input } from '../../../input';
import { Schedule } from '../../../schedule';

import style from './popup-appt.styles.scss';

const PopupAppt = ({
  dealer,
  invalid,
  number,
  activeTimeSlot,
  activeDaySlot,
  submitted,
  loading,
  setActiveTimeSlot,
  setActiveDaySlot,
  onCancel,
  handleSubmit,
  handleNumberChange,
}) =>
  submitted ? (
    <div class={style['popup-appt__thanks']}>
      <p>Thanks!</p>
      <p>
        {dealer.name} will contact you to <b>confirm</b> your appointment
      </p>
      <p>You can continue texting with the dealer via phone.</p>
    </div>
  ) : (
    <form onSubmit={handleSubmit} class={style['popup-appt']}>
      <div class={style['popup-appt__dealer-name']}>{dealer.name}</div>
      <div class={style['popup-appt__hours']}>
        <p class={style['popup-appt__hours-line']}>{dealer.todayWorkingHours}</p>
      </div>
      <div class={style['popup-appt__address']}>
        <p class={style['popup-appt__address-line']}>{dealer.address.street}</p>
        <p class={style['popup-appt__address-line']}>
          {dealer.address.city}, {dealer.address.stateCode} {dealer.address.zip}
        </p>
      </div>

      <div class={style['popup-appt__data']}>
        <p class={style['popup-appt__data-label']}>
          Contact Phone Number: <span>*</span>
        </p>
        <Input
          autofocus
          maxlength={14}
          onInput={handleNumberChange}
          value={number}
          size="sm"
          placeholder="(555) 333-2222"
        />
        <Schedule
          activeTimeSlot={activeTimeSlot}
          activeDaySlot={activeDaySlot}
          onTimeSlotChanged={setActiveTimeSlot}
          onDaySlotChanged={setActiveDaySlot}
        />
      </div>
      <div class={style['popup-appt__actions']}>
        <Button disabled={invalid || loading} type="submit" size="lg" color="primary">
          Request an Appointment
        </Button>
        <Button onClick={onCancel} size="lg" color="secondary">
          Go back
        </Button>
      </div>
    </form>
  );

export default PopupAppt;
