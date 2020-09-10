/*
  Once you complete a problem, refresh ./destructuring.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}
// Do not edit the code above.

/*
  Use object destructuring to save the property values from the object carDetails into new variables. 
*/

//Code Here
let {color, make, model, year} = carDetails



////////// PROBLEM 2 //////////

/*
  In the function below named greeting, it is receiving an object as a parameter. 
  Use object destructuring to save the object properties to new variables. 
  The property names are firstName, lastName, and title.
*/

function greeting( obj ) {
  //Code Here
  
let {firstName, lastName, title} = obj

  // Do not edit the code below.
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
  // Do not edit the code above.
}



////////// PROBLEM 3 //////////

/*
  Write a function called totalPopulation that will take in an object.
  That object will have 4 properties named utah, california, texas and arizona.
  The property values will be numbers.
  Use object destructuring to save the property values to new variables.
  Sum up the values and return the total number.
*/

//Code Here
// let totalPopulationObj = {
//        utah: 1,
//        california: 2,
//        texas: 3,
//        arizona: 4
//     }

function totalPopulation(object1){
  let {utah, california, texas, arizona} = object1 
}

const {utah, california, texas, arizona} = object1



////////// PROBLEM 4 //////////

/*
  Write a function called ingredients that will take in an object. 
  This object will have 3 properties named carb, fat, and protein. 
  The property values will be strings. 
  Use object destructuring to save the property values to new variables. 
  Push these new variables to an array and return the array. 
*/

//Code Here

let obj1 = {
  carb: 'yummy',
  fat: 'phatty',
  protein: 'meatier'
}
let {carb, fat, protein} = obj1

function ingredients(obj1){
  carb = 'Bread'
  fat = 'bacon'
  protein = 'steak'


}

////////// PROBLEM 5 //////////

/*
  Now we will use object destructuring as the function's parameter instead of destructuring the object inside of the function declaration.
  Example:
    function example( {one, two, three} ) {
      return one + two + three
    }

  Write a function called largeNumbers that will take a destructured object as it's parameter.
  The object properties will be named first, second, and third and their values will be numbers.
  Find the smallest number of the three and return that number.
*/

//Code Here

const largeObj = {
  first: 100,
  second: 20,
  third: 300,
}
const {first, second, third} = largeObj

function largeNumbers(largeObj){
  if(largeObj.first < largeObj.second && largeObj.third){
    return largeObj.first
  }else if(largeObj.second < largeObj.first && largeObj.third){
    return largeObj.second
  }else if(largeObj.third < largeObj.first && largeObj.second){
    return largeObj.third
  }
}

largeNumbers(largeObj)
////////// PROBLEM 6 //////////

/*
  Write a function called numberGroups that will take a destructured object as it's parameter.
  The object properties will be named a, b, and c and their values will be arrays of numbers.
  Find the longest array and return that array.
*/

//Code Here

const deObj = {
  a: [1, 2],
  b: [3, 4, 5, 6],
  c: [6, 7, 8]
}

let {a, b, c} = deObj

function numberGroups(deObj){
  if(deObj.a > deObj.b && deObj.c){
    return deObj.a
  }else if (deObj.b > deObj.a && deObj.c){
    return deObj.b
  }else if (deObj.c > deObj.a && deObj.b) {
    return deObj.c
  }
}

numberGroups(deObj)

