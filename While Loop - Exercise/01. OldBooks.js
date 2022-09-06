function oldBooks(input) {
    let index = 0;
    let favoriteBook = input[index];
    index++;
    let nextBook = input[index];

    let bookIsFound = false;

    while ( nextBook !== "No More Books") {
        if ( nextBook === favoriteBook ) {
            bookIsFound = true;
            break;
        }
        index++;
        nextBook =  input[index];
    }
    if ( bookIsFound === false ) { // if ( bookIsFound !==true ) {   // if ( bookIsFound )  === true
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }
}

oldBooks(["Troy",
    "Stronger",
    "Life Style",
    "Troy"]);
oldBooks(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"]);
oldBooks(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"]);