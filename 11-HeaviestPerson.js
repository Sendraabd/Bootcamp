/**
 * hitung orang yg memiliki berat badan paling tinggi
 */

function getHeavier(w1, wg2, wg3) {
  const maxWeight = Math.max(w1, wg2, wg3);
  return maxWeight;
}

console.log(getHeavier(12, 45, 70)); //70
