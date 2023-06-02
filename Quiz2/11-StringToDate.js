/** ubah value string ke date
 *  gunakan split
 *  inputan s = bulan/hari/tahun
 */

function strToDate(s) {
  const ObjekDate = s.split("/").join("");
  if (isNaN(ObjekDate)) {
    return `${s} bad format date`;
  } else {
    const ObjekDate = new Date(s);
    return ObjekDate;
  }
}

console.log(strToDate("12/30/2021")); //Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate("12/aa/bb")); //12/aa/bb bad format date
