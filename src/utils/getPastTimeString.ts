export const getPastTimeString = (date: Date): string => {
  const now = Date.now();
  const diffTime = now - date.getTime();

  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const MONTH = 30 * DAY;
  const YEAR = 12 * MONTH;

  if (diffTime >= YEAR) {
    return `${Math.floor(diffTime / YEAR)} г. назад`;
  }
  if (diffTime >= MONTH) {
    return `${Math.floor(diffTime / MONTH)} мес. назад`;
  }
  if (diffTime >= DAY) {
    return `${Math.floor(diffTime / DAY)} д. назад`;
  }
  if (diffTime >= HOUR) {
    return `${Math.floor(diffTime / HOUR)} ч. назад`;
  }
  if (diffTime >= MINUTE) {
    return `${Math.floor(diffTime / MINUTE)} мин. назад`;
  }
  if (diffTime >= SECOND) {
    return `${Math.floor(diffTime / SECOND)} сек. назад`;
  }
  return 'только что';
};
