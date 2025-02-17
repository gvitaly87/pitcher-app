export const subtractDates = (date1: Date, date2: Date): number => {
  const diff = date1.getTime() - date2.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};
