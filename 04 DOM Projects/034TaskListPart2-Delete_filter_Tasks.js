// Define UI Variable

const form      = document.querySelector('#task-form');
const taskList  = document.querySelector('.collection');
const clearBtn  = document.querySelector('.clear-tasks');
const filter    = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Load all event listeners 

loadEventListeners();

// Load all event lisnteners

function loadEventListeners(){
  // Add task event
  form.addEventListener('submit' , addTask );
  // Remove task event
  taskList.addEventListener('click' , removeTask );

}

function addTask(e) {
  if(taskInput.value===''){
    alert('Add a task');
  }
  // Create li element 

  const li = document.createElement('li');

  li.className = 'collection-item';
  // Create test node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  // Create new link element 
  const link = document.createElement('a');

  // Add class
  link.className = 'delete-item secondary secondary-content';

  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"><i>';
  // append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Clear Input 
  taskInput.value = '';
  e.preventDefault();

}

// Remove item function

function removeTask(e){
  console.log(e.target);
  // if(e.target.parentElmente.classList.contains('delete-item')){
  //   e.target.parentElmente.parentElmente.remove();
  //   console.log(e.target);
  // }
}

// Clear Tasks

function clearTasks() {
   // tasksList.innerHTML = '';
}