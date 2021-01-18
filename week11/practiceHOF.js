//verificati daca toate elementele unui array sunt numere pare folosind metoda every

const evenNumbers = (number) => number % 2 === 0;

const arrayNumbers = [1, 3, 4, 5, 9, 12, 20];

console.log(arrayNumbers.every(evenNumbers));

//folosind forEach, afisati toate elementele unui array

const array1 = [1, 4, 5, 10];

array1.forEach(element => console.log(element));

//folosind reduce, adunati toate numerele dintr-un array

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const array2 = [2, 0, 7, 7, 10];

console.log(array2.reduce(reducer));

//Practice Functional Programming in JS

function capitalizeNames(arr) {
    arr = arr.map(name => {
        name = name.toLowerCase();
        //name[0] = name[0].toUpperCase();
        return name[0].toUpperCase() + name.slice(1);
    })
    return arr;
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

//Scrieti codul corespunzator functiei care dubleaza fiecare element de tip valoare numerica dintr-un array specificat ca
//argument

function doubleEachNumber(arr) {
    arr = arr.map(element => {
        if (typeof element === "number") {
            return element * 2;
        } else {
            return element;
        }
    });
    return arr;
}

console.log(doubleEachNumber([2, "5", 100, "100", "blalblala"])); // [4, “5”, 200, “100”, “blalblala”]


//3.
function getPersonsNames(arr) {
    //arr = arr.map(element => element.name + " " + element.surname);
    arr = arr.map(element => `${element.name} ${element.surname}`);
    return arr;
}
console.log(getPersonsNames([
    {
        name: "Angelina",
        surname: "Jolie",
        age: 80
    },
    {
        name: "Eric",
        surname: "Jones",
        age: 27
    },
]));

// ["Angelina Jolie", "Eric Jones"]

//4.
function computeExamPass(arr) {
    arr = arr.map(element => {
        if (element.grade > 5) {
            return `${element.name} ${element.surname} has passed the exam`;
        } else {
            return `${element.name} ${element.surname} has not passed the exam`;
        }
    })
    return arr;
}
console.log(computeExamPass([
    {
        name: "Angelina",
        surname: "Jolie",
        grade: 7
    },
    {
        name: "Eric",
        surname: "Jones",
        grade: 3
    },
]));

[
    "Angelina Jolie has passed the exam",
    "Eric Jones has not passed the exam"
]


// Implementati functia de mai jos si utilizati
//rezultatul pentru a afisa elementele intr-o pagina


function getPersonsDomElements(arr) {
    arr = arr.map(element => {
        return `<h1>${element.name} ${element.surname}</h1><h2>${element.age}</h2>`;
    })

    arr = arr.forEach(element => {
        document.getElementById("ex5").innerHTML += element;
    })

}

getPersonsDomElements([
    {
        name: "Angelina",
        surname: "Jolie",
        age: 80
    },
    {
        name: "Eric",
        surname: "Jones",
        age: 27
    },
]);

// [
//    "<h1>Angelina Jolie"<h1><h2>80</h2>”,
//    “<h1>Eric Jones</h1><h2>27</h2>”
//    ]

//More Functional Programming Practice
/* Ex.1
Loop through the Array and remove all non-active users from the initial Array */

const myData = [{
    name: 'Iggy Turskis',
    active: false
}, {
    name: 'Geoff Newell',
    active: true
}, {
    name: 'Peter Newnham',
    active: true
}, {
    name: 'James Walker',
    active: false
}];

const removeNonActiveUsers = (arr) => {
    return arr.filter(user => user.active === true);

}

console.log(removeNonActiveUsers(myData));


/*Ex 2
Convertiti toate distantele in mile - 0.621371 * distance - folosind map
Returnati toate itemele cu distanta mai mica de 10000  - folosind filter
Returnati distanta totala - folosind reduce
*/

const distances = [
    { from: 'New York', to: 'Dhaka', distance: 12654 },
    { from: 'Sydney', to: 'chittagong', distance: 8858 },
    { from: 'Kolkata', to: 'Sylhet', distance: 670 }
]

const map1 = distances.map(road => road.distance * 0.621371);
console.log(map1);

const result = distances.filter(road => road.distance < 10000);
console.log(result);

const totalDistance = distances.reduce((accumulator, road) => accumulator + road.distance, 0);
console.log(totalDistance);


//3. Returnati un array de obiecte care sa contina doar id si titlul fiecarui item de mai jos 
const releases = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
];

const books = releases.map(item => {
    return {
        id: item.id,
        title: item.title
    }
});

console.log("Exercitiul 3");
console.log(books);



//4 Returnati id-urile videourilor care au rating 5.0
const newReleases = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
];

const video = newReleases.filter(item => item.rating === 5.0).map(item => item.id);
//const idVideo = video.map(item => item.id);

console.log(video);

