/**
 * hitung sales discount plus tax rate
 * function getSalesDiscount
 */

function getSalesDiscount(price, tax, discount) {
  if (isNaN(price) && isNaN(tax) && isNaN(discount)) {
    return "Price, Tax, dan Discount harus dalam angka";
  } else if (isNaN(price)) {
    return "Price harus dalam angka";
  } else if (isNaN(tax)) {
    return "Pajak harus dalam angka";
  }

  const totalSales = price;
  const discountAmount = price * (discount / 100);
  const priceAfterDiscount = price - discountAmount;
  const taxAmount = priceAfterDiscount * (tax / 100);
  const totalPayment = priceAfterDiscount + taxAmount;

  const output = `Total Sales: Rp.${totalSales}
  Discount (${discount}%): Rp.${discountAmount}
  Price After Discount: Rp.${priceAfterDiscount}
  Pajak (${tax}%): Rp.${taxAmount}
  ----------------------------------
  Total Payment: Rp.${totalPayment}`;

  return output;
}

console.log(getSalesDiscount("a", 1, 5)); //Price harus dalam angka
console.log(getSalesDiscount(500, "pajak", 5)); //Pajak harus dalam angka
console.log(getSalesDiscount("harga", "pajak", "discount")); //Price, Tax & Discount harus dalam angkaa
console.log(getSalesDiscount(4500, 10, 5));
/**
    Total Sales 	: Rp.4500 
    Discount (5%) 	: Rp.225
    PriceAfterDiscount 	: Rp.4275
    Pajak (10%) 	: Rp.427.5
    ----------------------------------
    TotalPayment 	: Rp.4702.5
 */
