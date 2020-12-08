//Ex1
//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"
function myFunction(myemail) {
    var emailSplit;
    emailSplit = myemail.split("@");
    var part1 = emailSplit[0];
    //nsole.log(part1)
    var avg = part1.length/2;
    //nsole.log(avg);
    part1 = part1.substring(0,part1.length - avg);
    var part2 = emailSplit[1];
    //nsole.log(part2)
    return part1 + "...@" + part2;
  }
  console.log(myFunction("ovidiu.grigoras@test.com"))
  
  //Ex2
  //Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
  // de ex: myFunction("i am superman") sa printeze "I Am Superman"
  function firtsLetterUpperCase(mystring) {
    var myArray = mystring.toLowerCase().split(" ");
    for(var i = 0; i < myArray.length; i++)
     {
     myArray[i] = myArray[i].charAt(0).toUpperCase() + myArray[i].substring(1);
     }
    console.log(myArray.join(" "));
  }
  firtsLetterUpperCase("i am superman");
  
  
  //Ex3
  // Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
  // ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"
  function changeLetter(string1){
    var result = "";
    for(var i= 0; i< string1.length; i++)
      {
        if(string1[i] === string1[i].toUpperCase())
            result = result + string1[i].toLowerCase();
         else  
            result = result + string1[i].toUpperCase();
        
        
      }
    console.log(result);
    
  }
  changeLetter("xxXyYzZZ");
  
  //Ex4
  // Scrieti o functie care sa concateneze un string de cate ori ii zicem
  // de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"
  function myFunctionStringConcat(string1, how_many) {
    var result = "";
    for(var i = 0; i < how_many; i++)
    {
      result = result + string1;
    }
    console.log(result);
  }
  myFunctionStringConcat("Wantsome",4);
  
  //Ex5
  // A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
  // Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante
  function palindrome(string1) {
    var stringLength = string1.length - 1;
    for(var i = 0; i <= string1.length/2; i++)
      {
        if(string1[i] !== string1[stringLength - i]) 
          return false;
        
      }
    return true;
  }
  console.log(palindrome("level"));
  
  //Ex6
  // Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care 
  //contine ca si elemente cele mai mari numere din fiecare array
  function greatestNumbers(myArray) {
    var maxNumbers = [];
    for(var i = 0; i< myArray.length; i++) 
      {
        var max = myArray[i][0];
      for(var j = 0; j<= myArray[i].length; j++)
        {
          if(myArray[i][j] > max) 
            max = myArray[i][j];
        }
      maxNumbers.push(max);
      }
      return maxNumbers;
  }
  console.log(greatestNumbers([[0,1,5],[10,0,20],[50,2,15]]));
  
  //Ex7
  // Implementati o functie care face reverse la un string
  function reverseMyString(string1) {
    var result = "";
    for(var i = string1.length-1; i >= 0; i--)
    {
      result = result + string1[i];
    }
    console.log(result);
  }
  reverseMyString("alex");
  
  //Ex8 
  // Implementati o functie care calculeaza factorialul unui numar
  function factorial(myNumber) {
    var fact = 1;
    for (var i = 1; i <= myNumber; i++)
     {
       fact = fact * i;
     }
    return fact;
  }
  console.log(factorial(5));
  
  
  //Ex9
  // Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma
  
  function checkStrings(string1,string2) {
    if(string1.slice(-string2.length) === string2) 
      return true;
  }
  console.log(checkStrings("klaus","us"));
  
  //Ex10
// Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care      
//trece testul specificat

function passTest(value) {
  if(value > 5) 
    return true;
  else 
    return false;
}
function firstElement (array1, passTest) {
  for(var i = 0; i < array1.length; i++)
    {
      if(passTest(array1[i]) === true) {console.log(array1[i]);
                                       break;
                                      }
    }
}
console.log("ex 10");
firstElement([1,4,7],passTest);

//Ex11
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea 
//string

function allLetters (string1,string2) {
  for(var i = 0; i < string2.length; i++)
    { var ok = 0;
      for(var j = 0; j < string1.length; j++)
        {
          if(string2[i] === string1[j]) 
              ok = 1;
        }
      if(ok === 0) break;
    }
  if(ok === 1) 
      return "contine toate literele";
    else
      return "nu contine toate literele ";
    
}
console.log("exercitiu 11");
console.log(allLetters("maaexx","xeaxaa"));
console.log(allLetters("aaaaax","bbbbbx"));




// Ex 12
// Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare element al array-ului pana 
//cand intalneste elementul cu valoarea specificata
function myArray(array1, value) {
  for(var i = 0; i < array1.length; i++)
    {
      if(array1[i] !== value) 
          console.log(array1[i]);
        else
          break;
      
    }
}

myArray([5,19,2,7,7,9],9);


// Ex 13
// Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN
function erase(array1) {
  var newArray = [];
  var falseArray = [false, null,0,"",undefined,NaN];
 /* for(var i = 0; i < array1.length; i++)
   { if(array1[i] !== false && array1[i] !== null && array1[i] !== 0 && array1[i] !== "" && array1[i] !== undefined && !isNaN(array1[i]))
       newArray.push(array1[i]); ;
   }*/
  for(var i = 0; i < array1.length; i++)
   { if(!falseArray.includes(array1[i]))
       newArray.push(array1[i]); ;
   }
  console.log("ex 13");
  console.log(newArray);
}
erase([null,0,0,1,57,undefined,false]);

// Ex 14
// Scrieti o functie care repeta un string de n ori specificate
function repeatString (string1, value) {
  for(var i = 0; i < value; i++)
    {
      console.log(string1);
    }
}

repeatString("klaus",5);

  
  