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
