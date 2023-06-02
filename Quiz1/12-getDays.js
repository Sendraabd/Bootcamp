/** Display year is kabisat and display month */

function getDays(month, year) {
  if (isNaN(month) && isNaN(year)) {
    return "inputan bulan & tahun harus dalam integer";
  } else if (isNaN(year)) {
    return "inputan tahun harus dalam integer";
  } else if (isNaN(month)) {
    return "inputan bulan harus dalam integer";
  }

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      day = `This month has 31 hari`;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      day = 30;
      break;
    case 2:
      if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
        day = `29, ${year} adalah tahun kabisat`;
      } else {
        day = `28 ${year} adalah tahun kabisat`;
      }
      break;
    default:
      day = -1;
  }
  return day;
}

console.log(getDays("a", 2021)); //inputan bulan harus dalam integer
console.log(getDays("2", "year")); //inputan tahun harus dalam integer
console.log(getDays("m", "year")); //inputan bulan & tahun harus dalam integer
console.log(getDays(2, 2000)); //This month has 29 days, 2000 adalah tahun kabisat
console.log(getDays(8, 2021)); //This month has 31 hari
