/* Variables in JavaScript
 - Varibles are Containers for data
 - It is a dynamically typed language

---> Variables Rules <---

:- Variable name are case sensitive; "a" & "A" is Different.

:- Only letters, Digits, underscore,(_) and $ is allowed.(not even space)

:- Only a letter,underscore(_) or $ should be 1st character.

:- Reserved words cannot be variable names.

*/




// Data Types in Js

// ----->Primitive Data type(7)<-----

Age = 24;                //Numerical/integer Data type
Price = 99.99;       
console.log(Price);
console.log(Age+1);

name = "prince";         //String Data type
name = "Prince Panchal"     
console.log(name);


x = null;              // null Data type 
console.log(x);

y = undefined;        //undefined Data type
console.log(y);

isFollow = false;     //Boolean Data type
console.log(isFollow);

let num3 = BigInt("123456");    //BigInt Data type
console.log(num3);

let s = Symbol("Hello!");    //Symbol Data type
console.log(s);


// ----->Non-Primitive Data type<------
// object:-(Array , Function)

const student = {     //object :- Collection of value [key : value]
  FullName : "Prince Panchal",
  age_ : 18,
  cgpa : 9.2,
  isPass : true,
};

student["age_"] = student["age_"] + 1; //Change age
console.log(student);
console.log(student.cgpa); 



//  ---> let,const & var <---

// let :- Variable cannot be re-declared but can be updated. A block scope variable.

let fullName = "Prince Panchal";
let age = 18;
age = 19;

console.log(fullName);
console.log(age);

// var :- Variable can be re-declared & updated. A global scope variable.

var full_Name = "Prince Panchal";
var _age = 18;
var _age = 19;
var _age = 20;
console.log(full_Name);
console.log(_age);

// const :- Variable cannot be re-declared or updated. A block scope variable.

const PI = 3.14;
  const price = 100.0;
// price = 101.0;  Cannot be re-declared or updated 

console.log(PI);
console.log(price);

// Undefined
let num1;
console.log(num1);

/* Error
 const num2;
console.log(num2); */




// Block of Code
{
let myage = 18;
  console.log(myage);
}
{
let myage = 18;
  console.log(myage);
}


