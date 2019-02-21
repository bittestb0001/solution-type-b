console.log('Problem 01')
// 최대 수 찾기

var arr = [-10,-3,5,6,-20];
function findMaxProduct(arr){
    
    return Math.max.apply(null, arr);
}
console.log(
    findMaxProduct(arr)
)

