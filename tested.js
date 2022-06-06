// // Learning Variables
// // Task 1: Days of the Week
let dayOfWeek = "Monday";
console.log(dayOfWeek);
dayOfWeek = "Friday";
console.log(`I can't wait for ${dayOfWeek}`);

// // Task 2: User Input
let animalInput = prompt("What is your favorite animal? ");
let colorInput = prompt("What is your favorite color? ");
let favoriteColorAndAnimal = colorInput + " " + animalInput;
console.log(`I've never seen a ${favoriteColorAndAnimal}`);

// // Learning Conditionals
// // Task 3: Meals
let timeOfDay = 1800;
let deliciousFood = "";
if (timeOfDay < 1200) {
    deliciousFood = "Veggie Egg Bites";
} else if (timeOfDay >= 1200 && timeOfDay < 1700) {
    deliciousFood = "Flautas";
} else if (timeOfDay >= 1700) {
    deliciousFood = "Ribs, Mashed Potatoes, and Roasted Veggies";
}
console.log(deliciousFood);

// //Task 4: Random Number
let randomNumber = Math.floor(Math.random() * 11);
if (randomNumber >= 0 && randomNumber <= 2) {
    console.log("Beatles");
} else if (randomNumber >= 3 && randomNumber <= 5) {
    console.log("Stones");
} else if (randomNumber >= 6 && randomNumber <= 8) {
    console.log("Floyd");
} else if (randomNumber === 9 || randomNumber === 10) {
    console.log("Hendrix");
}

// Learning Loops
// Task 5: For Loop
for (let index = 0; index < 7; index++) {
    console.log("JavaScript is cool!");
}

for (let counter = 0; counter < 11; counter++) {
    console.log(counter);
}

for (let index = 0; index < 5; index++) {
    console.log("hello");
    console.log("goodbye");
}

// I wanted to test out this boolean method of solving the above problem.
// Is more complex, but I think there could be uses where this might be useful.
// Mostly I just wanted to see if it was doable using booleans and conditionals
let greetingHello = "hello";
let greetingGoodbye = "goodbye";
let greetingSelection = true;
for (let index = 0; index < 10; index++) {
    if (greetingSelection) {
        console.log(greetingHello);
        greetingSelection = !greetingSelection;
    } else if (greetingSelection === false) {
        console.log(greetingGoodbye);
        greetingSelection = !greetingSelection;
    }
}

// Task 6: While Loop
let isInstructorAwesome = true;
while (isInstructorAwesome) {
    console.log(isInstructorAwesome);
    isInstructorAwesome = !isInstructorAwesome;
}

// Task 7: Functions
function printMovieName() {
    let favoriteMovie = "Pride and Prejudice";
    console.log(favoriteMovie);
}
printMovieName();

function userFavoriteBand() {
    result = prompt("Please enter your favorite band: ");
    return result;
}
let userFavBand = userFavoriteBand();
console.log(userFavBand);

function concertDisplay(musicalAct) {
    myStreet = prompt("Please enter the street you live on: ");
    console.log(
        `It would be great if ${musicalAct} played a show on ${myStreet}`
    );
}
concertDisplay(userFavBand);
