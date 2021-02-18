// EVENT BUBBLING

// document.querySelector('.card').addEventListener('click' , function(){
//   console.log('card');
// });

// document.querySelector('.card-title').addEventListener('click' , function(){
//   console.log('card title');
// });

// document.querySelector('.col').addEventListener('click' , function(){
//   console.log('col');
// });

// EVENT DELGATION

// const delItem = document.querySelector('.delete-item');
// delete.addEventListener( 'click', delItem );

document.body.addEventListener('click' , deleteItem );

function deleteItem(e){
  // console.log(e.target);
  if(e.target.className === 'fa fa-remove'){
    console.log('delete Items');
    e.target.parentElement.parentElement.remove();
  }
}