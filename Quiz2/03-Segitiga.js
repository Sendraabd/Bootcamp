/** buat segitiga  */
let segitiga = 4;
for (let i = 0; i < 6; i++) {
  let sgtiga = "";
  for (let s = 1; s <= segitiga; s++) {
    sgtiga += s + " ";
  }
  console.log(sgtiga);
  segitiga--;
}

// output
// 1 2 3 4
// 1 2 3
// 1 2
// 1
let segitiga2 = 5;
for (let i = 0; i < 6; i++) {
  let sgtiga2 = "";
  for (let j = segitiga2; j >= 1; j--) {
    sgtiga2 += j + " ";
  }
  console.log(sgtiga2);
  segitiga2--;
}

// output
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1
