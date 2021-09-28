function repeatStringNumTimes(str, num) {

    if (num <= 0){
      return ""
    }
    
    var newStr = ""
    
    for (let i = 1; i <= num; i++){
      newStr += str
    }
    
     return newStr;
    }
    
    repeatStringNumTimes("abc", 3);