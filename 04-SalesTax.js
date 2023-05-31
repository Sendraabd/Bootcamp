/**
 * Hitung pajak dari total penjualan
 * function getSalesTax(price, tax)
 */

function getSalesTax(price, tax) {
  if (isNaN(price) && isNaN(tax)) {
    return "Price dan Pajak harus dalam angka";
  } else if (isNaN(price)) {
    return "Price harus dalam angka";
  } else if (isNaN(tax)) {
    return "Pajak harus dalam angka";
  }

  const totalPrice = price + tax;

  const totalSales = "Total Sales: Rp." + price;
  const taxPercentage = "Pajak: " + tax / 10;
  const totalPriceWithTax = "Total Harga + Pajak: Rp." + totalPrice;

  return totalSales + "\n" + taxPercentage + "\n" + totalPriceWithTax;
}

console.log(getSalesTax("a", 1)); //Price harus dalam angka
console.log(getSalesTax(500, "pajak")); //Price & Pajak harus dalam angka
console.log(getSalesTax("harga", "pajak")); //Pajak harus dalam angka
console.log(getSalesTax(4500, 5));
/**
 Total Sales : Rp.4500
 Pajak : 0.5
 TotalHarga+Pajak : Rp.4505
 
*/
