      const nouns = [
      "bush",
      "shovel",
      "cave",
      "mouth",
      "shell",
      "tear",
      "razor",
      "nest",
      "pad",
      "fear",
      "prize",
      "power",
      "pocket",
      "cane",
      "pump",
      "mask",
      "junk",
      "kiss",
      "photo"
      ];
      let output = '<ul>/n';
      let output = '';
      nouns.forEach(function(noun,index){
      output += `<li>${index}-${noun}</li>`;
      })
      output += '</ul>';
      console.log(output);
      document.querySelector('main')
