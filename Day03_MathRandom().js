/*
Math.random(): returns random decimals between 0-0.99999999..
write a code to get random number between 0-9 (inclusive)
*/
console.clear();
//Step 1: get a number 0-0.999999999999..
let num = Math.random();
console.log(num)
//Step 2: multiple by 10
num*=10;
console.log(num);
//Step 3: Math.floor to roung the number to the nearest small whole number
num = Math.floor(num);
console.log(num);

//Note: below gives us 1-10(inclusive)
//num=Math.ceil(num)
//console.log(num);
