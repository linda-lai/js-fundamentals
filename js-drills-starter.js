// JS Drills
// Sometimes you learn how to do things before you fully understand how they work.
// Coding is like this a lot. There are many things that I learned how to do well before I asked how they function.
// There are still plenty more things where that is the case for me. You merely push back that barrier slowly, but the unknown remains.
// In that vein, these are exercises that are designed to get you familiar with the lingo of arrays, objects, and functions, and get you repeatedly using them.
// It’s not a test, or even a challenge - it’s practice. Consider it like doing a forehand drill in tennis, or scales in music.
// You wouldn’t be upset making some mistakes while you practice, because you know that this is the thing you need to work toward being competent, and you allow yourself to fail and learn.
// This is exactly the same.

// Learn and fail as you need here, because the bigger tests are to come.
// As you get more comfortable with the basic syntax, and getting your code to work, you will have more brain space to think about what it is it all means.
// (And we are more than happy to keep explaining that at the same time too!)

// Follow the instructions carefully. They will be repetitive and are not designed to be interesting, but rather build up ‘muscle memory’.
// *Each* line of code that you write, you *must* save the file and run the code. If there are *any* errors, you fix them then and there.
// If in doubt, puts out the structure you have made to make sure that it is what you hoped it was.
// I’m looking for accuracy - I want the instructions followed precisely.
// It will be your choice of class and variable names (etc), but the functioning and number of attributes called for are immutable.
// Ideally you’ll want the work to be checked, so copy and paste this text into a file and comment it out, so that I can check it easily - put the answer directly below the question.

// 1. Make a function that takes two arguments, and returns the result of them added together.

function addNumbers(num1, num2) {
    return num1 + num2
}

let result
result = addNumbers(5, 5)
console.log(result)

function addFullName (firstName, lastName) {
    return firstName + " " + lastName
}

result = addFullName("Linda", "Lai")
console.log(result)

// 2. Call the above function four times with different inputs each time. Make at least some of the inputs floats.

console.log(addNumbers(5, 7.5))
console.log(addNumbers(6.27, -0.1213))
console.log(addNumbers(-70, 167))
console.log(addNumbers(0.6877, 0.213293))

// 3. Define two integer and two float variables, and use them as arguments to this function you have made.

const int1 = 25
const int2 = 67
const float1 = 5.5
const float2 = -1.2345

console.log(addNumbers(int1, int2))
console.log(addNumbers(float1, float2))

// ---------------

// 4. Make an object (in ruby this would be a hash) with four keys, and have the keys be three different data types.

let studentDetails = {
    fullName: "Suzy Bishop",
    age: 16,
    hobbies: [
        "Sewing",
        "Painting",
        "Board Games"
    ],
    printName: function() {
        console.log(this.fullName)
    }
}

// 5. Access two of the values in your object, and log them to the screen.

console.log(studentDetails.hobbies)
console.log(`${studentDetails.fullName} is ${studentDetails.age} years old.`)
studentDetails.printName()

// 6. Define a function that takes an object as the input, and log out the value of one of the keys of the object.

function printStudentHobbies(studentDetails) {
    studentDetails.hobbies.forEach(function(hobby) {
        console.log(`One of my hobbies is: ${hobby}.`)
    })
}

printStudentHobbies(studentDetails)

// 7. Create an object with one key and value pair, and invoke the previous function with that object as the argument.

let newStudent = {
    name: "Sam Shakusky",
    hobbies: ["Sailing",
    "Video Games",
    "Hunting"
    ]
}

printStudentHobbies(newStudent)

// ---------------

// 8. Make an object with three keys and values, and assign it to a variable.

const blocParty = {
    name: "Bloc Party",
    albums: [
        "Silent Alarm",
        "A Weekend in the City",
        "Intimacy",
        "Four",
        "Hymns"
    ],
    yearFormed: 1999
} 

// 9. Make four more objects with the same keys.

const arcticMonkeys = {
    name: "Arctic Monkeys",
    albums: [
        "Whatever People Say I Am, That's What I'm Not",
        "Favourite Worst Nightmare",
        "Humbug",
        "Suck It and See",
        "AM",
        "Tranquility Base Hotel & Casino"
    ],
    yearFormed: 2002
}

const twoDoorCinemaClub = {
    name: "Two Door Cinema Club",
    albums: [
        "Tourist History",
        "Beacon",
        "Gameshow"
    ],
    yearFormed: 2007
}

const theStrokes = {
    name: "The Strokes",
    albums: [
        "Is This It",
        "Room on Fire",
        "First Impressions of Earth",
        "Angles",
        "Comedown Machine"
    ],
    yearFormed: 1998
}

const altJ = {
    name: "alt-J",
    albums: [
        "An Awesome Wave",
        "This Is All Yours",
        "3WW"
    ],
    yearFormed: 2007
}

// 10. Access a value from three of these objects.
console.log(`The first albumm from ${blocParty.name} was ${blocParty.albums[0]}.`)
console.log(`The first albumm from ${arcticMonkeys.name} was ${arcticMonkeys.albums[0]}.`)
console.log(`The first albumm from ${twoDoorCinemaClub.name} was ${twoDoorCinemaClub.albums[0]}.`)
console.log(`The first albumm from ${theStrokes.name} was ${theStrokes.albums[0]}.`)
console.log(`The first albumm from ${altJ.name} was ${altJ.albums[0]}.`)

// ---------------

// 11. Define a variable and assign to it an empty array.

myMusic = []

// 12. Define a function that takes an array and an object as arguments. The function will push the object into the given array.

function favouriteBands(array, object) {
    return array.push(object)
}

// 13. Using the function, the four objects, and the array that you have made in the previous steps, invoke the function four times to put those four objects into the array.

favouriteBands(myMusic, blocParty)
favouriteBands(myMusic, arcticMonkeys)
favouriteBands(myMusic, twoDoorCinemaClub)
favouriteBands(myMusic, theStrokes)

console.log(myMusic)

// 14. Make sure that the array contains four hashes (maybe log to the screen).

console.log(myMusic.length)

// 15. Access two elements of the array that you have created (via an index)

console.log(myMusic[0, 3])

// 16. For one of these, now access one of the values of the object at that is located at that index.
console.log(myMusic[0].albums)

// ---------------
// 17. Write a function that takes two arguments - one an object, and the other an array. Inside the function log out a value from the object, and an element from the array.

function printInfo(object, array) {
    console.log('SHOWING ALL OBJECT KEYS:')
    console.log(Object.keys(object))
    console.log('SHOWING ALL OBJECT VALUES:')
    console.log(Object.values(object))
    console.log('SHOWING AN INDEXED VALUE FROM ARRAY:')
    console.log(array[0])
    console.log('SHOWING EACH LOOP:')
    array.forEach(function(item) {
        console.log(item)
    })

    console.log('SEARCHING FOR A SINGLE OBJECT KEY & ARRAY VALUE')

    if (object.starSign === "Gemini") {
        console.log("We have a match! Age of 29 returned.")
    } else {
        console.log("Nope, undefined, ruh-roh!")
        console.log(object.age, array[1])
    }
}

// 18. Define four objects, one with one key, one with two keys, one with three keys, and one with four.

myStarSign = {
    starSign: "Gemini"
}

myBirthday = {
    inJune: true,
    date: 15
}

coderAcademy = {
    address: "120 Spencer Street",
    completion: null,
    teachers: [
        "Ruegen",
        "John",
        "Matt",
        "Harrison",
        "Gretch"
    ]
}


theItCrowd = {
    name: "The IT Crowd",
    seasons: 4,
    isAwesome: true,
    cast: {
        royTrenneman: "Chris O'Dowd",
        maruiceMoss: "Richard Ayoade",
        jenBarber: "Katherine Parkinson",
        douglasReynholm: "Matt Berry",
        denholmReynholm: "Chris Morris",
        richmondAvenal: "Noel Fielding"
    }
}

// 19. Define two different arrays, with two different datatypes.

const awesomeWords = [
    "facetious",
    "fluidity",
    "synchronicity",
    "tactile",
    "discombobulated",
    "circumnavigate",
    "sympatico",
    "repugnant",
    "irksome",
    "kerfuffle",
    "quibble",
    "flouncy"
]

const years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]

// 20. Call the function four times, once with each object, and use the arrays you made.

printInfo(myStarSign, awesomeWords)
printInfo(myBirthday, years)
printInfo(coderAcademy, awesomeWords)
printInfo(theItCrowd, years)

// 21. Write a function that takes five arguments: three strings, and two numbers.

function getDailySpend (greeting, name, mood, startingBalance, endingBalance) {
    console.log(`Good ${greeting} ${name}, today you're feelng ${mood}.`)
    let finalBalance = (startingBalance - endingBalance)
    console.log(`You spent $${finalBalance}.`)
}

// 22. Call that function twice.
const name = 'Linda'
getDailySpend('morning', name, 'happy', 100, 0)
getDailySpend('afternoon', name, 'hungry', 100, 75)
getDailySpend('evening', name, 'celebratory', 75, 0)

// 23. Write a function that takes two arguments - one an object, and the other an array. Inside the function log out a value from the object, and an element from the array.
let playlist = []

function mySonglist(songArr, songDetails) {
    songArr.push(songDetails)
    playlist.push(songArr)
}

mySonglist([], {title: "Here Comes the Sun", artist: "The Beatles"})
mySonglist([], {title: "DNA", artist: "Kendrick Lamar"})
mySonglist([], {title: "This Modern Love", artist: "Bloc Party"})
mySonglist([], {title: "Is This It?", artist: "The Strokes"})

console.log(playlist)

// 24. Define four objects, one with one key, one with two keys, one with three keys, and one with four.

let myMacbook = { name: "Macbook Pro"}
console.log(myMacbook)
myMacbook.size = 15
console.log(myMacbook)
myMacbook.apple = true
console.log(myMacbook)
myMacbook.rating = null
console.log(myMacbook)
myMacbook.users = ["Linda", "Guest"]
console.log(myMacbook)

// Below will not work, as myMacbook variable cannot be reassigned - only containing values can be edited.
// let myMacbook = { name: "Macbook Pro"}
// let myMacbook = { name: "Macbook Pro", size: 15}
// let myMacbook = { name: "Macbook Pro", size: 15, apple: true}
// let myMacbook = { name: "Macbook Pro", size: 15, apple: true, rating: null}
// let myMacbook = { name: "Macbook Pro", size: 15, apple: true, rating: null, users: ["Linda", "Guest"]}