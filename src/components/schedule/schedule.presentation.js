import cn from 'classnames';

import { TIME_SLOTS, DATE_SLOTS } from '../../core/constants/slots';

import style from './schedule.styles.scss';

const Schedule = ({ activeTimeSlot, activeDaySlot, onTimeSlotChanged, onDaySlotChanged }) => (
  <div class={style.schedule}>
    <ul class={style['schedule__day']}>
      {DATE_SLOTS.map(slot => (
        <li>
          <button
            type="button"
            class={cn(style['btn'], {
              [style['btn--active']]: slot === activeDaySlot,
            })}
            onClick={() => onDaySlotChanged(slot)}
          >
            {slot}
          </button>
        </li>
      ))}
    </ul>
    <ul class={style['schedule__time']}>
      {TIME_SLOTS.map(slot => (
        <li>
          <button
            type="button"
            class={cn(style['btn'], {
              [style['btn--active']]: slot === activeTimeSlot,
            })}
            onClick={() => onTimeSlotChanged(slot)}
          >
            {slot}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default Schedule;
