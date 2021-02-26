// define a tip calculator function that accepts the following parameters 
//-bill total 
//- tip total with a default 


let billTotal;
let tipRate;
let tipTotal;

// Pretend input
billTotal = 33.74;

//excellent service!
//tipRate =.25;
//scorched earth no tip 
tipRate = 0
tipRate = null;

const tipCalc =  function(total = 0,rate =.18){

  let tipTotal = total * rate;
  return tipTotal;
}

const tip = `$${tipCalc(billTotal, tipRate).toFixed(2)}`;

console.log(tip)