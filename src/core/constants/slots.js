export const TIME_SLOTS = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
  '6:00 PM',
  '7:00 PM',
  '8:00 PM',
  '9:00 PM',
];

const DAY_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const DATE_SLOTS = [0, 1, 2, 3, 4, 5, 6, 7].map(i => {
  const now = new Date();
  now.setDate(now.getDate() + i);

  return `${DAY_OF_WEEK[now.getDay()]} ${now.getDate()}`;
});
