//calling Function
const CallingFunc = function(callback){
  return callback();

}

//Callback Function
const callbackFunc =function(){
  console.log('invoked inside a function');

}
CallingFunc(callbackFunc);


