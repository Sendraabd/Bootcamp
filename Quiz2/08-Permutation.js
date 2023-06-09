const checkPermute = function (stringOne, stringTwo) {
  // if different lengths, return false

  // else sort and compare
  // (doesnt matter how it's sorted, as long as it's sorted the same way)
  if (stringOne.length !== stringTwo.length) {
    return false;
  }

  const sortingStringOne = stringOne.split("").sort().join("");
  const sortingStringTwo = stringTwo.split("").sort().join("");

  sortingStringOne === sortingStringTwo;
  return true;
};

console.log(checkPermute("aba", "aab")); //true;
console.log(checkPermute("aba", "aaba")); //false;
console.log(checkPermute("aba", "aa")); //false;
