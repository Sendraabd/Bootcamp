/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */

function howManyKabisat(year1, year2) {
  let count = 0;
  for (let year = year1; year <= year2; year++) {
    if (isKabisat(year)) {
      count++;
    }
  }
  return count;
}

function isKabisat(year) {
  if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(howManyKabisat(1997, 2021));
