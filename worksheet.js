// Task 8: Arrays
let desktopItems = ["monitor", "microphone", "keyboard"];
console.log(desktopItems[1]);

desktopItems.push("Infinity Gauntlet");

for (let index = 0; index < desktopItems.length; index++) {
    console.log(desktopItems[index]);
}

// Task 9: Boss Fight
function magicNum() {
    let magicNumber = Math.floor(Math.random() * 101);
    let guess = 0;
    do {
        guess = parseInt(prompt("What do you think the Magic Number is? "));
        if (guess === magicNumber) {
            console.log(`Congrats! ${guess} is the Magic Number!`);
        } else if (guess > magicNumber && guess <= magicNumber + 10) {
            console.log("Getting warmer! Too high!");
        } else if (guess < magicNumber && guess >= magicNumber - 10) {
            console.log("Getting warmer! Too low!");
        } else if (guess < magicNumber) {
            console.log("Too low!");
        } else if (guess > magicNumber) {
            console.log("Too high!");
        } else {
            console.log("I'm sorry we didn't get that.");
        }
    } while (guess !== magicNumber);
}
magicNum();
