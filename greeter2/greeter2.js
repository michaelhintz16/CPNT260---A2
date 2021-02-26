      //Calling Function
      const findName = function (callback) {
      //Pretend theres a db/endpoint
      constName ='Michael';

      return callback(name);
      }

      //Callback Function
      const formal = function(name){
      console.log (`Hello Mr. ${name}.`);

      }
      const informalGreeting = function(name){
      console.log('Yo, ${name}!');
      }
      const battleCry = function(name){
      console.log(`{name}! Prepare To Dye`)
      }

      // Invocation
      const formal = findName(formalGreeting);
      const informal = findName(informalGreeting);
      const battlecry = findName(battleCry);


      //Custom call back
      findName(function(name){
      return `hey ${name}! I just learned how to pass an anonymous function as a callback yay!`;
      });
      console.log(formal);
      console.log(informal);
      console.log (barrle);
