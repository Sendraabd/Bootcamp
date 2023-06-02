/**
 * konversi fareinheit to kelvin
 * rumus Kelvin = (Fareinheit + 459.67)/1.8
 *
 */

function fareinheitToKelvin(fareinheit) {
  if (isNaN(fareinheit)) {
    return "Input must be a number";
  }
  const kelvin = Math.floor(fareinheit + 459.67) / 1.8;
  if (kelvin >= 0.5) {
    return Math.round(kelvin);
  } else {
    return Math.floor(kelvin);
  }
}

console.log(fareinheitToKelvin(45)); //Convert Fareinheit (45) to Kelvin = 280
console.log(fareinheitToKelvin("1")); //Convert Fareinheit (1) to Kelvin = 811
console.log(fareinheitToKelvin("F")); //Fareinheit must an number
