// REPLACE ELEMENTS



// CREATE ELEMENTS
const newheading = document.createElement('h2');
// ADD ID 
newheading.id = 'task-title';
// New text node 
newheading.appendChild(document.createTextNode('Task List'));
// Get the old heading 
const oldheading = document.getElementById('task-title');

//Parent 
const createAction = document.querySelector('.card-action');

// Replace 
createAction.replaceChild(newheading, oldheading );

// REMOVE ELEMENTS

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Removing list items 
lis[0].remove();
lis[1].remove();

// Remove child
list.removeChild(lis[3]);

//CLASSES AND ATTRIBUTE

const firstLi = document.querySeldocumentector('li:first-child');
const link = firstLi.children[0];


let val;
 val = link.className;
 val = link.classList;
 val = link.classList[0];

 // add class
 link.classList.add('test');
// remove class

link.classList.remote('test');

// attribute

val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('title');

link.setAttribute('title', 'Google');
val = link.hasAttribute('title');

link.removeAttribute('title');
val = link;
 console.log(val);


