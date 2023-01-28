export function convertDate(date) {
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth();
  // new Date(date).getMonth() + 1 < 10
  //   ? "0" + (new Date(date).getMonth() + 1)
  //   : new Date(date).getMonth() + 1;
  const day = new Date(date).getDay();
  // new Date(date).getDay() < 10
  //   ? "0" + new Date(date).getDay()
  //   : new Date(date).getDay();
  const hours = new Date(date).getHours();
  // new Date(date).getHours() < 10
  //   ? "0" + new Date(date).getHours()
  //   : new Date(date).getHours();
  const minutes = new Date(date).getMinutes();
  // new Date(date).getMinutes() < 10
  //   ? "0" + new Date(date).getMinutes()
  //   : new Date(date).getMinutes();

  return `📅 ${hours}:${minutes} /  ${day}.${month}.${year}`;
}
