// function calculateTotal(number) {
//     // Change code below this line
//     let total = 0;
//      for (let i = 0; i <= number; i +=1) {
//      total += i;
//      console.log(i)
//    }
//    return total;
//      // Change code above this line
//    }

//    console.log(calculateTotal(2));
//    console.log(calculateTotal(5));
//    console.log(calculateTotal(30));
//    console.log(calculateTotal(10));

function findLongestWord(string) {
  // Change code below this line
  const words = string.split(" ");
  let word = words[0];
  const wordsCount = words.length;
  for (i = 0; i < wordsCount; i += 1) {
    if (word.length < words[i].length) {
      word = words[i];
      // console.log(words[i]);      
    }
   
  }
 return word;
  // Change code above this line
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("May the force be with you"));
