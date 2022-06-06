// Learning Variables
// Task 1: Days of the Week
let dayOfWeek = "Monday";
console.log(dayOfWeek);
dayOfWeek = "Friday";
console.log(`I can't wait for ${dayOfWeek}`);

// Task 2: User Input
let animalInput = prompt("What is your favorite animal? ");
let colorInput = prompt("What is your favorite color? ");
let favoriteColorAndAnimal = colorInput + " " + animalInput;
console.log(`I've never seen a ${favoriteColorAndAnimal}`);

// Learning Conditionals
// Task 3: Meals
// Veggie Egg Bites, Flautas, Ribs, Mashed Potatoes, and Roasted Veggies
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

//Task 4: Random Number
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

// Task 6: While Loop
