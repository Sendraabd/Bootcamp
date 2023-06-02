function isCharsUnique(string) {
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    for (let j = i + 1; j < string.length; j++) {
      if (char === string[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isCharsUnique("abcdefg")); //true
console.log(isCharsUnique("abcdefgb")); //false
