function findLongestWordLength(str) {
  
    var longestWord = 0
    var strSplit = str.split(" ")
  
    for (let i = 0; i < strSplit.length; i++){
      if (strSplit[i].length > longestWord){
  longestWord = strSplit[i].length
      }
    }
    
    return longestWord;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");