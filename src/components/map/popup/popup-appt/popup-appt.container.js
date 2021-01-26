import { useCallback, useEffect, useState } from 'preact/hooks';
import { DATE_SLOTS } from '../../../../core/constants/slots';
import { phoneFormatter } from '../../../../core/utils/formatter';
import { getPhone } from '../../../../core/utils/phone';
import { objectToUri } from '../../../../core/utils/uri';
import PopupAppt from './popup-appt.presentation';

const PopupApptContainer = ({ ...props }) => {
  const [invalid, setInvalid] = useState(true);
  const [activeTimeSlot, setActiveTimeSlot] = useState();
  const [activeDaySlot, setActiveDaySlot] = useState(DATE_SLOTS[0]);
  const [number, setNumber] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(loading);

  const getApptTime = () => {
    let result = [];

    if (activeDaySlot) {
      result.push(activeDaySlot);
    }

    if (activeTimeSlot) {
      result.push(activeTimeSlot);
    }

    return result.join(', ');
  };

  const handleSubmit = async event => {
    event.preventDefault();
    event.stopPropagation();

    const phone = getPhone(number);
    const apptTime = getApptTime();
    const url = 'https://dev-dsg11-www.carcode.com/carcode/v1/dealer/sms/widget';

    const data = {
      Body: `Customer needs service appointment. Expected date/time at ${apptTime}`,
      To: props.dealer?.carcodeInfo?.servicePhone,
      From: phone,
      referringurl: window.location.href,
    };

    try {
      setLoading(true);

      await fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: objectToUri(data),
      });

      setSubmitted(true);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  const handleTimeSlotChange = useCallback(
    newSlot => {
      if (activeTimeSlot === newSlot) {
        setActiveTimeSlot(null);
      } else {
        setActiveTimeSlot(newSlot);
      }
    },
    [activeTimeSlot, setActiveTimeSlot],
  );

  const handleDaySlotChange = useCallback(
    newSlot => {
      if (activeDaySlot === newSlot) {
        setActiveDaySlot(null);
      } else {
        setActiveDaySlot(newSlot);
      }
    },
    [activeDaySlot, setActiveDaySlot],
  );

  const handleNumberChange = useCallback(
    event => {
      setNumber(phoneFormatter(event.currentTarget.value));
    },
    [setNumber],
  );

  useEffect(() => {
    if (number?.trim().length === 14) {
      setInvalid(false);
    } else {
      setInvalid(true);
    }
  }, [number]);

  useEffect(() => {
    if (submitted) {
      const timerId = setTimeout(() => {
        props.onSubmit();
      }, 4000);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [submitted]);

  return (
    <PopupAppt
      {...props}
      invalid={invalid}
      submitted={submitted}
      loading={loading}
      number={number}
      activeTimeSlot={activeTimeSlot}
      activeDaySlot={activeDaySlot}
      setActiveTimeSlot={handleTimeSlotChange}
      setActiveDaySlot={handleDaySlotChange}
      handleNumberChange={handleNumberChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default PopupApptContainer;
