function isPalindrome(word) {
  LowWord = word.toLowerCase();
  const reverseword = LowWord.split("").reverse().join("");
  if (LowWord == reverseword) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("kasur ini rUsak")); //true
