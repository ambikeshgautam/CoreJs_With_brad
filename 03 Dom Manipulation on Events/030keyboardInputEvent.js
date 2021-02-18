console.log('Ambikesh');

const from = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Clear input
taskInput.value = '';

// from.addEventListener('submit' , runEvent );
// keydown
// taskInput.addEventListener('keydown' , runEvent);
// keyup
// taskInput.addEventListener('keyup' , runEvent);
// keypress
// taskInput.addEventListener('keypress' , runEvent);
// Focus
// taskInput.addEventListener('focus' , runEvent);
// Blur
// taskInput.addEventListener('blur' , runEvent);
// cut
// taskInput.addEventListener('cut' , runEvent);
// Past
// taskInput.addEventListener('past' , runEvent);
// Input
// taskInput.addEventListener('input' , runEvent);
// Change
// taskInput.addEventListener('change' , runEvent);


function runEvent(e){
  e.preventDefault();
  console.log('EVENTY TYPE :' + e.type );

  console.log( 'Event value ' + e.target.value );
  // console.log(e.target.value);

  // heading.innerText = e.target.value;
  // Get input value.
  // console.log(taskInput.value);
  
}

