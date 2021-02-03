let value;
const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

value = listItem;
value = list;

// Get child nodes
value = list.childNodes;
value = list.childNodes[0];
value = list.childNodes[1].nodeName;
value = list.childNodes[1].nodeType;

// Get childrens element nodes;
value = list.children;
value = list.children[1];
list.children[1].textContent = 'Hello';

// Children of children

value = list.children[3].children[0].id = 'test-link';
value = list.children[3].children[0];
// first child
value = list.firstChild;
value = list.firstElementChild;
// Last child
value = list.lastChild;
value = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent Nodes

value = listItem.parentNode;
value = listItem.parentElement;
value = listItem.parentElement.parentElement;

// Get next siblings

value  = listItem.nextSibling;
value  = listItem.nextElementSibling.nextElementSibling;
// Get pre siblings
value = listItem.previousSibling;
value = listItem.previousElementSibling;

console.log(value);