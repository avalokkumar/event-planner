function binarySearch(arr, elem){
  var l = 0, r = arr.length-1;
  while(l <= r){
    var m = l+(r-1)/2;
    if(arr[m] === elem){
      return m;
    }else if(arr[m] > elem){
      r = m-1;
    }else{
      l = m+1;
    }
  }
  return -1;
}

function findNum(num){
var tempArr = [12,34,546,76,9,11,35,6];
console.log(binarySearch(tempArr, num));
}
findNum(12)