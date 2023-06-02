function maxWordLength(params) {
  const words = params.split(" ");
  let maxLength = 0;
  let maxWord = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const length = word.length;

    if (length > maxLength) {
      maxLength = length;
      maxWord = word;
    }
  }

  return maxWord;
}

console.log(maxWordLength("aku suka bootcamp sentul city")); //bootcamp
