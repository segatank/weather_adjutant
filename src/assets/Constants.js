const FROM_KELVIN_TO_CELSIUS = 273;

export const convertToCelcius = kelvin => {
  return kelvin - FROM_KELVIN_TO_CELSIUS;
};

export const DAYS_OF_THE_WEEK = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
