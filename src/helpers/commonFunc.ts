export const excerpt = (
  data: string | any[],
  firstValue: number,
  secondValue: number,
  type: string
) => {
  switch (type) {
    case "all":
      return data.slice(firstValue, secondValue);
    case "rest":
      return data.slice(firstValue);
  }
};

export const checkIfTwoDigit = (value: number) => {
  if (value <= 9) {
    return `0${value}`;
  }

  return value;
};

export const timeFormat = (date: Date) => {
  const newDate = new Date(date);
  const h = checkIfTwoDigit(newDate.getUTCHours());
  const m = checkIfTwoDigit(newDate.getUTCMinutes());

  return `${h}:${m}`;
};
