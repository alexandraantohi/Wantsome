
// Bonus 1.
//Vreau la final sa am o lista de video ids

const movieLists = [
    {
        name: "New Releases",
        videos: [
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
            }
        ]
    },
    {
        name: "Dramas",
        videos: [
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
        ]
    }
];



///////////////////////////////////////////
const test = {
    name: "New Releases",
    videos: [
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
        }
    ]
}

const testMaping = (p) => {
    return p.map(item => item["id"]);
}

//console.log(testMaping());

const videoListMaping = () => {
    return movieLists.map(item => testMaping(item.videos));
}
const idList = videoListMaping();
let newIdList = [];
console.log("----------------------------------------------");
idList.forEach(item => {
    console.log(item);
    item.forEach(item1 => newIdList.push(item1));
});
console.log(newIdList);



//Returnati id, title, si 150x200 box art url pentru fiecare video
//hint aveti de folosit map,filter

let movieLists1 = [
    {
        name: "Instant Queue",
        videos: [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxarts": [
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    },
    {
        name: "New Releases",
        videos: [
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxarts": [
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    }
];
console.log("Bonus Hard:")
const testMovie = () => {
    return movieLists1.map(item => {
        item.videos.map(item2 => {
            const url = item2["boxarts"].filter(item3 => item3.width === 150 && item3.height === 200)[0].url;
            console.log(`${item2["id"]} ${item2["title"]} ${url}`);

        })
    });

}

console.log(testMovie());



//Functional Programming
//ex.1.
// Scrieti o functie care sa mute literele cu o litera mai incolo folosind .map
// de exemplu moveLetters('hello') // => 'ifmmp'
// moveLetters('abcxy') // => "bcdyz"
//hint : String.fromCharCode() String.charCodeAt()
const moveLetters = function (word) {
    const wordArray = word.split('');
    //console.log(wordArray);
    return wordArray.map(letter => {
        return String.fromCharCode(letter.charCodeAt() + 1)
    }
    ).join("");
}

console.log(moveLetters("hello"));


// ex2
// Vreau sa am o functie care sa faca uppercase la cuvinte in functie ca in exemplu de mai jos
// changeWordCase('hey ppl, lets learn javascript together') // => "HEY ppl, LETS learn JAVASCRIPT together SOMETIME"
let changeWordCase = function (string) {
    const wordsArray = string.split(" ");
    //console.log(wordsArray);
    let uppercaseWords = wordsArray.map((word, index) => {
        if (index % 2 !== 0) {
            return word;
        } else {
            return word.toUpperCase();
        }
    }
    )
    return uppercaseWords.join(" ");
}

console.log(changeWordCase('hey ppl, lets learn javascript together'));


// ex3
// Faceti asftel incat toate variabilele de mai jois sa returneze ceea ce zice numele
const arr = [
    { name: 'sasha', sex: 'f', age: 7, species: 'cat' },
    { name: 'john', sex: 'm', age: 133, species: 'human' },
    { name: 'titus', sex: 'm', age: 62, species: 'human' },
    { name: 'kalifa', sex: 'f', age: 255, species: 'human' },
    { name: 'oreo', sex: 'm', age: 21, species: 'cat' },
];

let allCats = arr.filter(item => item.species === "cat");
console.log(allCats);

let allHumans = arr.filter(item => item.species === "human");
console.log(allHumans);

let allFemales = arr.filter(item => item.sex === "f");
console.log(allFemales);

let totalOfAllAges = arr.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0);
console.log(totalOfAllAges);

let averageAgeOfCats = allCats.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0) / allCats.length;
console.log(averageAgeOfCats);

let averageAgeOfHumans = allHumans.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0) / allHumans.length;
console.log(averageAgeOfHumans);

let avgLengthOfNames = arr.reduce((accumulator, currentValue) => accumulator + currentValue.name.length, 0) / arr.length;
console.log(avgLengthOfNames);


//Ex Function Composition

//ex 1.
// Faceti o functie numita composedValue care ia ca argumente 2 functii si returneaza valoarea lor - // f1(f2(value))
//ex composedValue(square, double, 5);  // 100
// functia square returneaza patratul numarului iar double - dublul numarului
const composedValue = (f1, f2) => value => {
    return f1(f2(value));
}


const square = (value) => value * value;

const double = (value) => value * 2;

console.log(composedValue(square, double)(5));


//ex.2
//faceti o functie 'compose' care atunci cand va fi apleata returneaza rezultatul altor 2 functii;
//exemplu const myFunction = compose(square, double) 
// myFunction(5)  --> 100
// myFunction(10) --> 400  ...etc

const compose = (f1, f2) => value => f1(f2(value));

const myFunction = compose(square, double);

console.log(myFunction(5));


//ex.3
//faceti o functie find care ia ca parametrii un array si o functie care testeaza arrayul si returneaza doar elementele care trec testele.
// find([1,2,3,4,5], isOdd); returneaza 1 3 5

const isOdd = (value) => {
    if (value % 2 !== 0) {
        return true;
    } else {
        return false;
    }

}

const find = (arr, isOdd) => arr.filter(item => isOdd(item));

console.log(find([1, 2, 3, 4, 5], isOdd));

