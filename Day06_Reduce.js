/*
REDUCE:
ARRAY.Reduce((accumulator,eachItem)=>{
body
}
)
Reduce is used to hold onto the accumulated valud
We can hold onto the each number from the array
Reduce iterates(loops through the array) and accumulates array values
*/

console.clear();
var numbers = [8,1,4,12,66,3]
/*
eachNumber :8,  1  ,  4   ,   12   ,   66   ,   3
accumulator:8,8+1=9,9+4=13,13+12=25,25+66=91,91+3=94
*/
const result = numbers.reduce(
function(accumulator,eachNumber){
  console.log('Accumulator: '+accumulator);//8,9,13,25,91
  console.log('Each Number: '+eachNumber);//1,4,12,66,3
  return accumulator+eachNumber;
}
)
//using arrow function
console.log(result);//94
const result1 = numbers.reduce(
(accumulator,eachNumber)=>accumulator+eachNumber
)
console.log(result1);//94