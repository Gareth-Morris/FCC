function frankenSplice(arr1, arr2, n) {
  
    var newArr = arr2.slice()
     
    for (let i = 0; i < 1; i++){
      newArr.splice(n, 0, arr1)
    }
      return newArr.flat();
    }
    
    frankenSplice([1, 2, 3], [4, 5, 6], 1);