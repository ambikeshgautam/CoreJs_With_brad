
// // // var , let , const
// // var name = 'ambikesh';
// // console.log(name);
// // name = 'Ambikesh Gautam';
// // console.log(name);

// // // Initialize Var
// // var greeting;
// // console.log(greeting);
// // greeting = 'hello';
// // console.log(greeting);

// // // Letters  ,number , _, $
// // // Can not start with number

// // // Multi words var 

// // var firstName = 'Ambikesh';// Camel Case
// // var first_name = 'Gautam'; // Underscors
// // var FirstName = 'kumar'; // Pascal case
// // var firstname ;

// // LET
// // let name;
// // name = 'Ambikesh kumar Gautam';
// // console.log(name);
// // name = 'Ambikesh kumar Again';
// // console.log(name);

// // CONST
// // ------------------
// // you Can change only constan value not reassign new value to the constant variable.
// //-------------------
// // const name = 'Ambikesh';
// // console.log(name);
// // Can not reassign
// // Name = 'sara';
// // // have to assign a value

// // const person = {
// //   name:'ambikesh',
// //   age : 30
// // };
// // console.log(person.name);
// // console.log(person.age);

// // person.name = 'my new name';
// // person.age = 21;
// // console.log(person.age);
// // console.log(person.name);

// // const number = [1,2,3,4,5];
// // number.push(6);
// // console.log(number);
// // ---------------------
// //   Data Types
// // ---------------------
// /**
//  * There are two types of Data Type
//  * 
//  * PRIMITIVE DATA TYPES
//  * 
//  * Stored directly in the location the variable access 
//  * Stored on the stack
//  * 
//  * REFENCE DATA TYPE
//  * 
//  * 
//  * Accessd by referece
//  * Object that are stored on the heap
//  * A pointer to a location in memory
//  * 
//  */
// /**
//  * 
//    ------ PRIMITIVE DATA TYPE  ARE ------
//     String [Sequence of character]
//     Number[all int float , long all ]
//     Boolean[]
//     null[]
//     undefined[all variable are undefine until those havn't value ]
//     Symbols(ES6)

//     ------- REFERENCE DATA TYPES / OBJECT
//     Array
//     Object Literals
//     Funcitons
//     Dates
//     Anything Else
    
//     ====== Dynamically Typed Language =============
//     Types ar associated with valued not variables
//     The same variable can hold multiple types
//     We do not need to to specify types
//     Most other Language are statically typed(Java , c# , C ++)
//     There are supersets of JS and addons to allow static typing (TypeScript , Flow js)
//  */

//  // Primitive typs

//  // String 

//  const name = 'Ambikesh kumar Gautam';
//  console.log(typeof name);

//  // Number 
//  const age = 45;
//  console.log(typeof age);

//  // Boolean

//  const hadkids = true;
//   console.log(typeof hadkids);

//   // Null

// const car = null;
// console.log(car);
// // undefined
// let test;
// console.log(typeof test);

// // REFENCE TYPE OF VARIABLE 

// // ARRAY 
// const hobbies = ['movies' , 'music'];

// // OBJECT literals

// const address = {
//     city : 'Lucknow',
//     state : 'utter Pradesh'

// }
// const today = new Date();
// console.log(typeof address);   
// -------------------------------------------
// Looping 
// -------------------------------------

// // FOR LOOP 

// for( let i = 0; i < 10; i++ ) {
//   if( i ===2 ) {
//     console.log('2 is my favrite number');
//     continue;
//   }
//   if( i === 5 ){
//     console.log('stop the loop' + i );
//     break;
//   }
//   console.log('Number :- ' + i );
// // }
// let i = 0;
// while( i < 10 ) {
//   console.log('number' + i );
//   i++;
// }

// Do while loop

// let i = 0;
// do {
//   console.log('Number :-' + i );
//   i++;
// } while( i < 5);


// Looping through Array
const cars = ['ford','chevy','Honda', 'Toyota'];
// for(let i=0; i<cars.length; i++){
//   console.log(i);
//   console.log(cars[i]);
// }

// Foreach Looping with array.
// cars.forEach( function(car, index, array){
//   console.log(`${index}: ${car}`);
//   console.log(array);
// });

// const users = [
//   {id:1, name:'john'},
//   {id:2, name:'sara'},
//   {id:3, name:'ambikesh'}
// ];
// const ids = users.map(function(user){
//   return user.id;
// });
// const names = users.map(function(user){
//   return user.name;
// });
// console.log(names);


// const user = {
//   firstName:'ambikesh',
//   lastName :'gautam',
//   age:20
// };

// for( let x in user ) {
//   console.log(`${x}: ${user[x]}`);
// }
// ==============================================================================
/****
 * Window Menthos/Object / Properties
 */

// console.log(123);
// Alert

// window.alert();

// const input = prompt();
// alert(input);
// console.log(
//   input
// );

// Confirm

// if(confirm('Are you sure')) {
//   console.log('yes');
// } else {
//   console.log('No');
// }

let val;
// Outer height and width

val = window.outerHeight;
// console.log('height is ' + val);
val = window.outerWidth;

// Inner height and width
 val = window.innerHeight;
 val = window.innerWidth;

 // Scroll points
   val = window.scrollX;
   val = window.scrollY;
// Location Object
  val = window.location;
  val = window.location.hostname;
  val = window.location.port;
  val = window.location.href;
  val = window.location.search;

  // Redirect 
  // window.location.href = 'http://google.com';
  // Reload window
  // window.location.reload();


  // History Object

  window.history.go(-1);
  val = window.history.length;

  // Navigator Object

  val = window.navigator;
  val = window.navigator.appName;
  val = window.navigator.appVersion;
  val = window.navigator.userAgent;
  val = window.navigator.platform;
  val = window.navigator.vendor;
  val = window.navigator.language;
  console.log(val );


 