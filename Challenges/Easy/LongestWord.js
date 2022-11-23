function LongestWord(sen) { 

  // code goes here  
  let words = sen.match(/\b(\w+)\b/g);

  let max_length = 0

  let position;

  words.forEach(
    (item, index) => {
      if(max_length < item.length)
      {
        max_length = item.length
        position = index
      }
    }
  );

  return words[position];

}
   
// keep this function call here 
console.log(LongestWord(readline()));