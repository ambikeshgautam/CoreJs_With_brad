let val;

// Number to String

val = String(5);
val = String(4+4);
// bool to string 

val = String(true);

// Date to string
val = String(new Date());
// Array to String

val = String([1,2,3,4,5]);
// toString
 val = (5).toString();
 val = (true).toString();

 // String to number
 val = Number('5');
 val = Number(true);
 val = Number(false);
 val = Number(null);
 val = Number('hello');
 val = Number([1,2,3,4,5]);
 val = parseInt('100.300');
 val = parseInt('100.300');
 val = parseFloat('100.3');


// Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// const val1 = String(5);
// const val2 = 6;
// const sun = val1 + val2;

// console.log(sun);
// console.log(typeof sun);

// ================ Number and The Math Object ==========

const num1 = 100;
const num2 = 500;
let val;

// Simple math with number
console.log(val);
// Math object
val = Math.PI;
val = Math.round;
val = Math.E;
val = Math.ceil(2.3);
val = Math.floor(1,2);
val = Math.round(3,4);
val = Math.abs(2.3);
val = Math.sqrt(3);
val = Math.pow(3);
val = Math.min(1,2,2,333,3,3,3,4,5,6,6,5);
val = Math.max(1,2,3,4,4,5,5,6,6,7,7,8,8,8,9);
val = Math.random();// it gives un random number

// console.log(val);

// =============== String methods and Concatenation =====
 
const firstName = 'ambikesh';
const lastName  = 'gautam';

let val;

val = firstName + lastName;

// Append

val = 'ambikesh';
val += 'Gautam';
let age = 23;
 
val = 'Hello,my name is ' + firstName + 'and I am ' + age;

// Escaping 

val = 'That awesome', i can't 'wait';

console.log(val);

