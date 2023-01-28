// export function convertDate(date) {
//   const year = new Date(date).getFullYear();
//   const month = new Date(date).getMonth();
//   // new Date(date).getMonth() + 1 < 10
//   //   ? "0" + (new Date(date).getMonth() + 1)
//   //   : new Date(date).getMonth() + 1;
//   const day = new Date(date).getDay();
//   // new Date(date).getDay() < 10
//   //   ? "0" + new Date(date).getDay()
//   //   : new Date(date).getDay();
//   const hours = new Date(date).getHours();
//   // new Date(date).getHours() < 10
//   //   ? "0" + new Date(date).getHours()
//   //   : new Date(date).getHours();
//   const minutes = new Date(date).getMinutes();
//   // new Date(date).getMinutes() < 10
//   //   ? "0" + new Date(date).getMinutes()
//   //   : new Date(date).getMinutes();

//   return `📅 ${hours}:${minutes} /  ${day}.${month}.${year}`;
// }

export function convertDate(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day =
    new Date(date).getDate() < 10
      ? "0" + new Date(date).getDate()
      : new Date(date).getDate();

  const year = new Date(date).getFullYear();
  const hour =
    new Date(date).getHours() < 10
      ? "0" + new Date(date).getHours()
      : new Date(date).getHours();
  const minutes =
    new Date(date).getMinutes() < 10
      ? "0" + new Date(date).getMinutes()
      : new Date(date).getMinutes();
  const month = months[new Date(date).getMonth()];

  return `${day} ${month} at ${hour}:${minutes}, ${year}`;
}
