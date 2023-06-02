/**
 * hitung detik ke dalam day, hour, minute and seconds
 */

function getPeriodTimes(seconds) {
  if (isNaN(seconds)) {
    return seconds + " is not a number";
  }

  const days = Math.floor(seconds / (3600 * 24));
  seconds %= 3600 * 24;

  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;

  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  return `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
}

console.log(getPeriodTimes("700005A")); //700005A is not number
console.log(getPeriodTimes("700005")); //8 hari 2 jam 26 menit 45 detik
