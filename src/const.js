const NUM_ACTIVITIES = 5;
const MILLISECONDS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MAXIMUM_PRICE = 200;

const ACTIVITY_TYPES = [
  'Taxi',
  'Bus',
  'Train',
  'Ship',
  'Self-Drive',
  'Flight',
  'Accommodation Check-In',
  'Sightseeing Tour',
  'Restaurant Visit',
];

const DESTINATIONS = [
  'London',
  'Paris',
  'New York',
  'Chicago',
  'Tokio',
  'Amsterdam',
  'Moscow',
  'San-Francisco',
];

const ACTIVITY_DESCRIPTIONS = [
  'Experience the vibrant culture of the City of Lights!',
  'Explore the iconic landmarks and charming streets of London.',
  'Immerse yourself in the energy and architecture of Chicago.',
  'Embark on a captivating journey through the neon lights of Tokyo.',
  'Discover the diverse neighborhoods and hidden gems of New York City.',
  'Witness the grandeur of Russia\'s historical capital.',
  'Enjoy the picturesque canals and artistic treasures of Amsterdam.',
  'Explore the iconic Golden Gate Bridge and vibrant Californian culture.',
];

const DATE_FORMATS = {
  time: 'HH:mm',
  shortDate: 'MMM DD',
  formDateTime: 'DD/MM/YY HH:mm',
};

const DURATION_FORMATS = {
  days: 'DD[D] HH[H] mm[M]',
  hours: 'HH[H] mm[M]',
  mins: 'mm[M]',
};

const MILLISECONDS_PER_HOUR = MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR;
const MILLISECONDS_PER_DAY = MILLISECONDS_PER_HOUR * HOURS_PER_DAY;

export {
  NUM_ACTIVITIES,
  ACTIVITY_TYPES,
  MAXIMUM_PRICE,
  DESTINATIONS,
  ACTIVITY_DESCRIPTIONS,
  DATE_FORMATS,
  MILLISECONDS_PER_HOUR,
  MILLISECONDS_PER_DAY,
  DURATION_FORMATS,
};
