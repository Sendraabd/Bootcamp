/** Buat program untuk menampilkan prosentasi dari income*/

function getProsentase(start, end) {
  if (typeof start !== "number" || typeof end !== "number") {
    return "abc or bca harus dalam angka";
  }

  const diff = end - start;
  const percent = (diff / start) * 100;

  if (percent > 0) {
    return `Total kenaikan income ${percent.toFixed(0)}%`;
  } else if (percent < 0) {
    return `Total penurunan income ${Math.floor(percent.toFixed(2))}%`;
  } else {
    return "Tidak ada perubahan income";
  }
}

console.log(getProsentase("abc", "bca")); //abc or bca harus dalam angka
console.log(getProsentase(600000.0, 750000.0)); //Total kenaikan income 25%
console.log(getProsentase(750000.0, 650000.0)); //Total penurunan income -14%
