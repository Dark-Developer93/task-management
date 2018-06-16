const MS_IN_A_DAY = 1000 * 60 * 60 * 24;

export const addDays = (date, days) => {
  const dateObj = new Date(date);
  return dateObj.setDate(dateObj.getDate() + days);
};

export const getDaysFromNow = date => {
  const msDifference = new Date(date).getTime() - Date.now();
  return Math.round(msDifference / MS_IN_A_DAY);
};

export const toDateString = date =>
  date ? new Date(date).toJSON().split('T')[0] : '';
