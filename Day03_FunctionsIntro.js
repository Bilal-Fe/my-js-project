/*
FUNCTION INTRO:
*/
console.clear();

//1. Declaring function:

function greet(){
  console.log('Hi, How are you?')
}

//2. calling the funtion
greet();//"Hi, How are you?"

//3. Declaring funtion with 1 parameter
function greetPeople(person){
  console.log(`Hi ${person}`)
}

//4. calling the function
greetPeople('Ahmet');//"Hi Ahmet"
greetPeople(5);//"Hi 5"
greetPeople(true);//"Hi true"

//5. declaring function with multiple parameter
function personInfo(fName, lName, age, location,isWorking){
  console.log(`${fName}, ${lName}, ${age}, ${location}, ${isWorking}`);
}

//6. calling the function
personInfo('Ahmet', 'Bayram',18, 'LA', true);//"Ahmet, Bayram, 18, LA"
personInfo('Ahmet', 'Bayram',18);//"Ahmet, Bayram, 18, undefined, undefined"

personInfo('Ahmet', 'Bayram','LA',true);//"Ahmet, Bayram, LA, true, undefined"