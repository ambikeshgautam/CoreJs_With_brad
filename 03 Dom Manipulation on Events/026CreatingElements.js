// Creating elements
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id

li.id = 'new-item';

// Add attribute

li.setAttribute( 'title','New Items' );

// Create text node and append.

li.appendChild(document.createTextNode('Hello World'));

// Create new link

const link = document.createElement('a');
// Add classes

link.className = 'delete-items seconday-contents';
// Adding link tag to 
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append li as child to ul

document.querySelector('ul:collection').appendChild(li);

console.log(li);




