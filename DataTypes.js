
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
