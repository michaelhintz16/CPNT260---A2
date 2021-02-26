let firstName; 
let lastName; 
let salutation;
let formal= true;



console.log(typeof formal);
console.log(!!formal);

if (typeof firstName === 'undefined') {
  firstName = 'john'
}
if (typeof lastName === 'undefined') {
  lastName = 'Wick'
}
if (typeof salution === 'undefined') {
  protocol ='informal';

}

if(protocol === 'formal') {
  console.log(`hello, ${salutation} ${lastName}.`);
}else  if(protocol === 'battle'){
  console.log (`${lastName}! Prepare to die`);
}else{
  console.log(`hi, ${firstname}.`)
}

  console.log(`hi, ${firstName}.`);

