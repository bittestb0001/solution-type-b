console.log('Problem 01')
// 최대 수 찾기

var arr = [-10,-3,5,6,-20];
function findMaxProduct(arr){
    let newArr = arr.sort((x,y)=>y-x);
    return `${newArr[0]},${newArr[1]}`
}
console.log(
    findMaxProduct(arr)
)

