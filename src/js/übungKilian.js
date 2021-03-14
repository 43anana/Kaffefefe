/*eslint-disable*/
//algo von eilclit?? :D um den größten gemeinsamen teiler zu bestimmen

function magix(inputA, inputB) {
    while (inputA > 0 && inputB > 0) { 
      if (inputA == inputB) {
        return inputA;
      } else if (inputA < inputB) {
        inputB -= inputA;
      } else {
        inputA -= inputB;
      }
    }
    return 1;
  }
  
  // Aufruf, bspw: magix(9, 3)
  
  function magic(word) {
    var result = true;
    const len = word.length;
    for (var i = 0; i < Math.floor(len/2);) {
      result &= word[i] == word[len - (++i)];
    }
    return result
  }
  //wenn die veränderung nicht inkre oder dekrementiert ist i++ i-- sondern nix, dann
  //steht es IN der schleife
  //in der for: 

  
  // Aufruf: magic("test")
  //&& = nimmt ziwe wahrheitswerte + verknüpft
  
  function magicII(input) {
    let inputSize = input.length;
    if (inputSize <= 1) return input;
  let tmp = [...input];
    return magicHelp(magicII(tmp.splice(Math.floor(inputSize / 2))), magicII(tmp));
  }
  
  // magicII([1, 6, 2, 9, 5, 1, 0, 9]);