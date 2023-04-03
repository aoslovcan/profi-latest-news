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

export const timeFormat = (date: Date) => {
  const newDate = new Date(date);
  const h = newDate.getUTCHours();
  const m = newDate.getUTCMinutes();

  return `${h}:${m}`;
};
