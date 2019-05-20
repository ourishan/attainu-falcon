function compare (arr1, arr2) {
    var result;
    if (arr1.length != arr2.length)
        result = false;
    else
        for (var i=0;i<arr1.length;i++) {
            if (arr1[i].length > 1) 
                compare (arr1[i], arr2[i]);
            else if (arr1[i] !== arr2[i])
                result = false;
            else
                result = true;
        }
    return result;
}