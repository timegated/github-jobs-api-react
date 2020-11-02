export const convertDate = (date) => {
  const currentDate = Date.now();
  const jobDate = Date.parse(date);
  const convertedDate = currentDate - jobDate;
  const dateInstance = new Date(convertedDate);
  return dateInstance.getHours();
};