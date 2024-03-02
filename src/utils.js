import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

import {


  MAXIMUM_PRICE,


  DATE_FORMATS,
  MILLISECONDS_PER_HOUR,
  MILLISECONDS_PER_DAY,
  DURATION_FORMATS,
} from './const.js';

const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomPositiveNumber = (min = 0, max = MAXIMUM_PRICE) => Math.floor(Math.random() * (max - min + 1)) + min;

const humanizeDate = (currentDate, format = DATE_FORMATS.shortDate) =>
  currentDate ? dayjs(currentDate).format(format) : '';

const calculateDuration = (dateFrom, dateTo) => {
  const diff = dayjs(dateTo).diff(dayjs(dateFrom));

  let pointDuration;

  switch (true) {
    case diff >= MILLISECONDS_PER_DAY:
      pointDuration = dayjs.duration(diff).format(DURATION_FORMATS.days);
      break;
    case diff >= MILLISECONDS_PER_HOUR:
      pointDuration = dayjs.duration(diff).format(DURATION_FORMATS.hours);
      break;
    case diff < MILLISECONDS_PER_HOUR:
      pointDuration = dayjs.duration(diff).format(DURATION_FORMATS.mins);
      break;
  }

  return pointDuration;
};

const incrementCounter = (startValue = 1) => {
  let counter = startValue;
  return function () {
    return counter++;
  };
};

export { getRandomArrayElement, getRandomPositiveNumber, humanizeDate, calculateDuration, incrementCounter };
