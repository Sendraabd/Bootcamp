/**
 * Convert rupiah to other currency
 */

function convertToRupiah(money, type) {
  if (type == "") {
    return "no match type currency";
  }
  let uang = 0;
  if (type === "yen") {
    uang = 130.12 * money;
  } else if (type === "usd") {
    uang = 14382.5 * money;
  } else if (type === "euro") {
    uang = 16000 * money;
  }
  uang = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(uang);
  return `${money}${type}=${uang}`;
}
console.log(convertToRupiah(1000, "yen")); //1000 yen  = Rp.130.120
console.log(convertToRupiah(100, "usd")); //100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100, "euro")); //100 dollar  = Rp.1.600.000
console.log(convertToRupiah(100, "")); //no match type currency
