    const p = document.querySelector('.greeting');

    const greeter = function(name ='captain Anonymous',
    lang){

    if (lang ==='es') {

      return`Hola ${name}!`;

    } else if (lang=== 'fr'){

      return `bonjour, ${name}!`;

    }else if (lang==='ch'){

      return`Ni Hao, ${name}!`;

    }else{
      return`Hi ${name}!`;
    }

    }

    p.innerHTML = greeter('Michael');







