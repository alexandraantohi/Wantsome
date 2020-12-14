
//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100

function myFunction(numberOne, numberTwo) {
  
    if(numberOne !== numberTwo) {
      return numberOne + numberTwo;
    } else {
        return ( numberOne + numberTwo) * 5;
       
      }
  }
  
  console.log(myFunction(10, 10));
  
  //Ex2
  //Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
  //ex testFunction(30, 30) - true 
  //testFunction(15,15) - true
  //testFunction(10, 15) - false
  
  function testNumbers(nrOne,nrTwo) {
    if(nrOne === 30 && nrTwo === 30 || nrOne + nrTwo === 30 ) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(testNumbers(30, 30));
  console.log(testNumbers(10, 15));
  console.log(testNumbers(15, 15));
  
  
  
  //Ex3
  //Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
  //checkString('JSisAwsome') - JSisAwsome
  //checkString('isEasy') - JSisEasy
  //checkString(null) - JS
  
  function checkString(str) {
    if(str.substring(0,1) === "JS") {
      return str;
    } else {
      return "JS".concat(str);
    }
    
  }
  
  console.log(checkString("JSisAwsome"));
  console.log(checkString("isEasy"));
  
  //Ex4
  //Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
  //removeDuplicates('aabcdeef') - 'abcdef'
  //removeDuplicates(122334) - 1234

  function removeDuplicates(value) {
    let num = ''; 
    if(typeof value === "number") {
      value = value.toString();
    }
    if(typeof value === "string") {
      let newStr = "";
      for(let i = 0; i < value.lenght; i++) {
        if(newStr.includes(value[i]) === false ) {
          newStr.concat(value[i]);
        }
      }
      if(typeof Number(newStr) === "number") {
        return Number(newStr);
      } else {
        return newStr;
      }
        
    }
  }
  console.log("ex 4");
   console.log(removeDuplicates('aabcdeef')); 
  
  //Ex5
  // Gasiti cel mai lung string intr-o fraza
  //findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'

  function findLongestString(str) {
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
  console.log(findLongestString("Wantsome is Awsomeeee toda"));
  //Ex6
  //Scrieti o functie care sa aiba output-ul asta
  // *  
  // * *  
  // * * *  
  // * * * *  
  // * * * * * 
  function starOutPut() {
    for(let i = 0; i <= 4; i++) {
     console.log("* ".repeat(i+1));
    }
  }
  
  starOutPut();
  
  //ex7
    const negativeNumbers = [];
  
    function extractNegativeNumbers(numbers) {
        // append any negative numbers found in the numbers array 
        // into the negativeNumbers array constant variable above
     for(let i = 0; i < numbers.length; i++) {
       if(numbers[i] < 0) {
         negativeNumbers.push(numbers[i]);
       }
     }
      console.log(negativeNumbers);
    }
    extractNegativeNumbers([1,2,-5,4,-6])
  
  //ex8
  //Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
  //ex calculate(2, 5, "add") => 7
  //calculate(10, 8, "substract") => 2

  function calculateWithOperator(nr1, nr2, str) {
    if(str === "add") {
      return nr1 + nr2;
    }
    
    if(str === "substract") {
      return nr1 - nr2;
    }
    
    if(str === "multiply") {
      return nr1 * nr2;
    }
    
    if(str === "divide") {
      return nr1 / nr2;
    }
    
  }
  
  console.log(calculateWithOperator(10, 8 , "substract"));
  console.log(calculateWithOperator(5, 10 , "divide"));
  
  //Ex9
  // Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
  // isDiv(15) => "BOTH"
  // isDiv(9)=> "THREE"
  // isDiv(7)=> 7

  function isDiv(value) {
    if(value % 3 === 0 && value % 5 === 0) {
      console.log("BOTH");
    } else if(value % 3 === 0) {
      console.log("THREE");
    } else if(value % 5 === 0) {
      console.log("FIVE");
    } else {
      return value;
    }
  
  }
  
  isDiv(15);
  isDiv(9);
  console.log(isDiv(7));
  
  //Master exercises
  //Ex9 
  // Vreau sa pot afisa data si ziua sub urmatorul format:
  // Azi este : Luni. 
  // Ora este : 20 PM : 30 : 38

  function currentDayAndHour() {
    const today = new Date();
    const currentDay = today.getDay();
    const dayList = ["Duminica","Luni","Marti","Miercuri","Joi","Vineri","Sambata"];          
    console.log("Azi este : " + dayList[currentDay] + ".");
    
    let currentHour = today.getHours();
    let currentMinute = today.getMinutes();
    let currentSecond = today.getSeconds();
    let amPm = "AM";
    
    if(currentHour >= 12) {
      amPm = "PM";
    } else {
      amPm = "AM";
    }
    
    currentHour = currentHour % 12;
    if(currentHour) {
      currentHour = currentHour;
    } else {
      currentHour = 12;
    }
    
    if(currentMinute < 10) {
      currentMinute = "0" + currentMinute;
    } else {
      currentMinute = currentMinute;
    }
    
    let myTime = currentHour + " " + amPm + " : " + currentMinute + " : " + currentSecond;
    console.log("Ora este: " + myTime);
  }
  
  console.log("ex 9");
  currentDayAndHour();
  
  
  //ex10
  // ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
  // validPin("1234") => true
  // validPin("12345") => false
  // validPin("z23f") => false
  
  function validPin(pin) {
    let nr = 0;
    if(pin.length === 4 || pin.length === 6) {
      for(let i = 0; i < pin.length; i++) {
        if(pin[i] >= 0 && pin[i] <= 9) {
           nr = i;
        }
        if(nr + 1 === pin.length) {
          return true;
        }
      }
    }
    
    return false;
  }
  
  console.log("ex.10")
  console.log(validPin("1234"));
  console.log(validPin("z23f"));
  console.log(validPin("123456"));
  
  //ex11 
  //Folosind regex vreau sa scot toate vocalele dintr-un string
  // removeVowels("Hey I am developer") => "Hy m dvlpr"
  
  function removeVowels(str) {
    const patternVowels = /[aeiou]/gi;
    return str.replace(patternVowels, "");
  }
  
  console.log(removeVowels("Hey I am developer"));
  
  //ex12
  //Vreau sa am o functie care sa verifice daca un numar este patrat
  // isSquareNumber(-1) => false
  // isSquareNumber(25) => true
  // isSquareNumber(3) => false
  
  function isSquareNumber(value) {
    if(value > 0 && Math.sqrt(value) % 1 === 0) return true;
    
    return false;
  }
  console.log(isSquareNumber(-1));
  console.log(isSquareNumber(25));
  console.log(isSquareNumber(3));
  
  //ex13
  // Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
  // isAnagram("School master", "The class room") => true
  // isAnagram("silent", "listen") => true

  function isAnagram(firstWord, secondWord) {
    const sortFirst = firstWord.toLowerCase().split("").sort().join("").trim();
    const sortSecond = secondWord.toLowerCase().split("").sort().join("").trim();
    console.log(sortFirst);
    console.log(sortSecond);
    if(sortFirst === sortSecond) {
      return true;
    } else {
      return false;
    }
  }
  console.log("ex 13");
  console.log(isAnagram("School master", "The class room"));
  //console.log(isAnagram("silent", "listen"));