//1.Calculati media aritmetica a unui array de numere
function mediaAritmetica(array1) {
    var sum = 0;
    for(var i = 0; i < array1.length; i++)
      {
       sum = sum + array1[i]; 
      }
    console.log(sum/array1.length);
        
   }
mediaAritmetica([1,3,4,5,2]);

//2.avand un array cu numere, valori boolene, obiejcte si stringuri calculati suma tuturor
//numerelor. Ignorati toate valorile care nu sunt de tip numar.

function sumNumber(array2) {
  var sum = 0;
  for(var i = 0; i < array2.length; i++)
    {
      if (typeof array2[i] === "number") sum = sum + array2[i];
    }
  console.log(sum);
}

sumNumber([1,3,"aa",5,10])

//3.creati un program care afiseaza primele 20 numere din sirul lui Fibonacci
function numbersFibonacci() {
  var number1 = 0 ;
  console.log(number1);
  var number2 = 1;
  console.log(number2);
  var nr = 2;
  var number3;
  while( nr <= 20 )
    {
      number3 = number1 + number2;
      console.log(number3);
      number1 = number2;
      number2 = number3;
      nr++;
    }
}

numbersFibonacci();

/*Creati un program cu care tineti evidenta cartilor citite si cartilor pe care doriti sa le cititi in
viitor.
● creati un array cu mai multe obiecte. Fiecare obiect reprezinta o carte si are
proprietati pentru titlu, autor si daca aceasta carte este citita sau nu
● iterati prin aceasta colectie de carti si afisati la consola titlul si autorul fiecarei carti.
De exemplu pentru “The Hobbit” a lui J.R.R. Tolkien ar trebui sa afisati “The Hobbit by
J.R.R Tolkien”
● modificati programul astfel incat sa se afiseze si daca o carte a fost citita sau nu*/
var books = [
  {
    title: "The Hobbit",
    author: "J.R.R Tolkien",
    read: "No"
  },
  
  {
    title: "Harry Potter and the prisoner of Azkaban",
    author: "J.K Rowling",
    read: "Yes"
  },
  
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    read: "Yes"
  },
  
  {
    title: "How to stop time",
    author: "Matt Haig",
    read: "Yes"
  }
  
]

function booksRead(arrayBooks) {
  for(var i = 0; i < arrayBooks.length; i++)
    {
      console.log(arrayBooks[i].title + " " + "by" + " " + arrayBooks[i].author + " " + "read:" + arrayBooks[i].read);
    }
}

booksRead(books);