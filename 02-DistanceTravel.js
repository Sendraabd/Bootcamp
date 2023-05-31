/** hitung jarak antar kota
 *  dimana rumus jarak S = 1/2*a*t^2
 *  function calculateDistance(a,t),
 *  where a = accelaration in number
 *  t : time
 */

function calculateDistance(a, t) {
  const kecepatan = a;
  const waktu = t;
  if (isNaN(kecepatan) || isNaN(waktu)) {
    return "input must an number";
  } else if (kecepatan <= 0 || waktu <= 0) {
    return "Accelaration or time must be >= 0";
  }
  const distance = 0.5 * kecepatan * Math.pow(waktu, 2);
  return distance;
}

console.log(calculateDistance("a", "t")); //input must an number
console.log(calculateDistance(-1, 9)); //Accelaration or time must be >= 0
console.log(calculateDistance(50, 60)); //Jarak yang ditempuh adalah 90000 meter/s
