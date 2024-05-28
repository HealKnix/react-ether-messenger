export const getPastTimeString = (date: Date) => {
  const differentDate = new Date().getTime() - date.getTime();

  const SECOND = 1 * 1000;
  const MINUTE = 1 * 60 * SECOND;
  const HOURS = 1 * 60 * MINUTE;
  const DAY = 1 * 24 * HOURS;
  const MONTH = 1 * 30 * DAY;
  const YEAR = 1 * 12 * MONTH;

  if (differentDate > YEAR)
    return `${Math.floor(differentDate / YEAR)} г. назад`;
  else if (differentDate > MONTH)
    return `${Math.floor(differentDate / MONTH)} мес. назад`;
  else if (differentDate > DAY)
    return `${Math.floor(differentDate / DAY)} д. назад`;
  else if (differentDate > HOURS)
    return `${Math.floor(differentDate / HOURS)} ч. назад`;
  else if (differentDate > MINUTE)
    return `${Math.floor(differentDate / MINUTE)} мин. назад`;
  else if (differentDate > SECOND)
    return `${Math.floor(differentDate / SECOND)} сек. назад`;
  else return `только что`;
};
