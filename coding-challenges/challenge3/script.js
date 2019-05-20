function compare (arr1, arr2) {
    var result;
      if (arr1.length != arr2.length)
          return false;
      else
          for (var i=0;i<arr1.length;i++) {
              if (arr1[i].length > 1 ) 
                  return compare(arr1[i], arr2[i]);
              else if (arr1[i] !== arr2[i])
                  return false;
              else
                result = true;
          }
      return result;
  }
  
  console.log(compare([1, [3,2]],[1, [3,2]]));
  console.log(compare([1, [5,2]],[1, [3,2]]));