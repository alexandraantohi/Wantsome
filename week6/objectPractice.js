// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name
var car = {
    name: "Tesla",
    wheels: 4,
  };
  car.name = "Mercedes";
  console.log(car);
  delete car.name;
  console.log(car);
  
  
  //Ex2
  // Creati un obiect cu 4 proprietati
  // Stocati "key"-urile intr-o variabila noua
  // intr-o alta variabila vreau sa am toate key-urile cu litere mari
  // Stocati valorile intr-o variabila noua
  // intr-o alta variabila vreau sa am toate valorile cu litere mici
  // vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"
  var user = {
    name: "Alexandra",
    age: 26,
    gender: "female",
    hobby: "running",
  }; 
  var userKeys = Object.keys(user);
  console.log(userKeys);
  var upperUserKeys = userKeys.toString().toUpperCase().split(",");
  console.log(upperUserKeys);
  var userValues = Object.values(user);
  console.log(userValues);
  var lowerCaseUserValues = userValues.toString().toLowerCase().split(",");
  console.log(lowerCaseUserValues);
  console.log(userKeys.toString()+ " " + "reprezinta ceva");
  console.log(user.name + " " + user.age + " " + user.gender + " " + user.hobby + " " + "reprezinta ceva ");
  
  
  //Ex3
  // Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
  // Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.
   var car = {
     brand: "BMW",
     model: "i3",
     saySomethingAboutCar: function() {
       console.log(this.brand + this.model);
     }
     
   };
   car.saySomethingAboutCar();
  
  
  //Ex4 
  // Creati un obiect cu cateva proprietati
  // "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil intr-o alta variabila
  // Pe obiectul nou adaugam 2 noi proprietati
  // Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.
  myHouse = { 
    rooms: 3,
    zone: "Bucium",
    animals: 1
  }
  
  var BnbHouse = {
    rooms : 2,
    zone : "Copou",
    parking : "Yes",
   
  };
  
  var newBnbHouse = {};
  Object.assign(newBnbHouse, BnbHouse);
  console.log(newBnbHouse);
  newBnbHouse.suitableFor = 2;
  newBnbHouse.coffeeMachine = "yes";
  console.log(newBnbHouse);
  var mergeHouses = Object.assign(myHouse,newBnbHouse);
  console.log(mergeHouses);
  
  
  // Ex5 
  // Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
  // Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
  // transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"
  var user = {
    name : "Oana",
    age : 35,
    child : {
    name: "Alex",
    age: 2
  }
  }
  var properties = Object.keys(user.child);
  console.log(properties);
  console.log(properties.toString() + " " + "apartin obiectului child")
  
  
  
  
  //Ex6
  // Avem obiectul : 
  myObject = {
  name: "John",
  surname: "Applegate",
  }
  //Adaugati o metoda care sa sorteze cele 2 valori ale numelui.
  var nameValues = Object.values(myObject);
  console.log(nameValues);
  nameValues.sort();
  console.log(nameValues);
  
  
  //Ex7 
  //Faceti o functie constructor
  // Cu functia constructor creati 3 obiecte cu valori diferite
  // Pentru toate valorile din acele obiecte transformatile in litere mari.
  function User(name,age,gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  
  var userInfo1 = new User("Alexandra", 26, "female");
  var userInfo2 = new User("George", 26, "male");
  var userInfo3 = new User("Gabi", 30, "male");
  console.log(Object.values(userInfo1).toString().toUpperCase());
  console.log(Object.values(userInfo2).toString().toUpperCase());
  console.log(Object.values(userInfo3).toString().toUpperCase());