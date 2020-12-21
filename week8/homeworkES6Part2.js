//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare

/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
*/
let sumNumbers = param => {
    let sum = 0;
    for(let i = 1; i <= param; i++) {
      sum = sum + i;
    }
    return sum;
  }
  
  console.log(sumNumbers(5));
  
  /*
  2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
  */
  let longestWord = str => {
    let arr = str.split(" ");
    console.log(arr);
    let maxString = "";
    for(let i = 0; i < arr.length; i++) {
      if(arr[i].length > maxString.length) {
        maxString = arr[i];
      }
  }
    return maxString;
  }
  
  console.log(longestWord("Wantsome is Awsomeeee toda"));
  
  /*
  3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
  */
  
  let reverseString = str => {return str.split("").reverse().join("");} 
  
  
  
  console.log("ex 3");
  console.log(reverseString("Wantsome is Awsomeeee today"));
    
  
  
  /*
  4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet
  */
  let nextLetterFromAlphabet = str => {
    let newStrArray = str.split("");
    for(let i = 0; i < newStrArray.length; i++) {
      switch(newStrArray[i]) {
        case " ":
          break;
        case "z":
          newStrArray[i] = "a";
          break;
        case "Z":
          newStrArray[i] = "A";
          break;
        default:
          newStrArray[i] = String.fromCharCode(1 + newStrArray[i].charCodeAt(0));
      }
      
    }
    return newStrArray.join("");
    }
     
  console.log("ex 4");
  console.log(nextLetterFromAlphabet("Adcze"));
  
  /*
  5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
  Exemplu: input: 64  ->  output: 1:4
  */
  let convertToTime = numberValue => {
    
    const n = numberValue;
    const hour = parseInt(n/60);
    const min = n % 60;
    console.log(hour + ":" + min);
    
  }
  
  convertToTime(64);
  
  
  
  /*
  6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
  */
   
  let OrderAlphabetic = str => str.toLowerCase().split("").sort().join("");
  
  console.log(OrderAlphabetic("George"));
  
  /*
  7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
  Exemplu: input: "+a+b+c+"   ->   output: true
  Exemply: input: "+ab+c+d+"  ->   output: false 
  */
  
  let checkForPlus = str => {
   
    for(let i = 0; i < str.length; i++) {
      if((str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) || (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)) {
        if(str.charAt(i - 1) !== "+" || str.charAt(i + 1) !== "+") {
          return false;
        } 
      }
    }
    return true;
  }
  
  console.log(checkForPlus("+a+b+c+"));
  console.log(checkForPlus("+ab+c+"));