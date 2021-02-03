// document.getElementById()

console.log(document.getElementById('task-title'));

// Get things from element

console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

//  Change styling

// document.getElementById('task-title').style.color = 'green';
// document.getElementById('task-title').style.background = '#0fff';
// document.getElementById('task-title').style.display = 'none';
// document.getElementById('task-title').style.padding ='2px';
// const taskTitle = document.getElementById('task-title');
// taskTitle.style.background = '#333';
// taskTitle.style.color='#fff';
// taskTitle.style.padding = '5px';




// // Change contents

// document.getElementById('task-list').textContent = 'Task List';
// document.getElementById('task-list').innerText = 'Task List';
// document.getElementById('task-list').innerHTML = '<span style=""color:red">Task List </span>';

// document.querySelector

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color="yellow";
document.querySelector('li:nth-child(4)').style.textContent = "hello wold";
document.querySelector('li:nth-child(odd)').style.background="#ccc";
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';