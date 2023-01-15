const subtractYears = (date: Date, years: number): Date => {
  date.setFullYear(date.getFullYear() - years);
  return date;
};

export default subtractYears;
