// set local storage item

// localStorage.setItem('name', 'Ambikesh');

// set session storage item

sessionStorage.setItem('session_key' , 'Session Value');

// remove from local storage

// localStorage.removeItem('name');

// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name);

document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks') === null ){
    tasks = [];
  } else {
    tasks = JSON.parse( localStorage.getItem('tasks') );
  }

  tasks.push(task);
  localStorage.setItem('tasks' , JSON.stringify(tasks));
  alert( 'Task saved' );
  e.preventDefault();

});

const tasks = JSON.parse( localStorage.getItem('tasks') );

tasks.forEach(function(task){
  console.log(task);
});