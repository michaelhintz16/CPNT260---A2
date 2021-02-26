console.log('anonymous');
const circle = document.querySelector(',circle');
const button = document.querySelector(',button');

const clickHandler = function(){

  console.log(event);

  circle.classList.toggle('fancy');

}
button.addEventListener('click',clickHandler);
