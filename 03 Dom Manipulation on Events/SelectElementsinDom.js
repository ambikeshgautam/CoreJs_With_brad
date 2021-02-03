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

// Change contents

document.getElementById('task-list').textContent = 'Task List';

document.getElementById('task-list').innerText = 'Task List';



