// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');
console.log(items[0]);
items[0].style.color='red';
items[3].textContent = 'hello world';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// document.getElementsByTagName

var lis = document.getElementsByClassName('li');
// console.log(lis[0]);

// items[0].style.color='red';
// items[3].textContent = 'hello world';

// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';


// Convert HTML collection into array.
lis = Array.from(lis);
// revers
// lis.revers();

// lis.forEach(function(li index ){
//   console.log(li.className);
//   li.textContent = `${index}:heloo`;
// });

// console.log(lis);

// document.querySelectorAll

const item = document.querySelectorAll('ul.collection li.collection-item');

item.forEach(function( itms, index ){
  itms.textContent = `${index} : Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');
liOdd.forEach(function(items , index ){
  items.style.background = '#ccc';
});

for(let i = 0 ; i < liEven.length; i++ ) {
  liEven[i].style.background = '#f4f4f4';
}