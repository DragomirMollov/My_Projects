function movieRatings(input) {
  let index = 0;
  let movieCount = Number(input[index]);
  index++;
  let largestRatings = 0;
  let smallestRatings = 0;
  let ratingsCounts = 0;
  let movieNameLarge = "";
  let movieNameSmall = "";

  for (let i = 1; i <= movieCount; i++) {
    let movieName = input[index];
    index++;
    let movieRatings = Number(input[index]);
    
    if (movieRatings > largestRatings) {
        largestRatings = movieRatings;
        movieNameLarge = movieName;
        
    } else {
        smallestRatings = movieRatings;
        movieNameSmall = movieName;
    }
    ratingsCounts += movieRatings;
    index++;
  }

    let avarageRatings = ratingsCounts / movieCount;
    console.log(`${movieNameLarge} is with highest rating: ${largestRatings.toFixed(1)}`);
    console.log(`${movieNameSmall} is with lowest rating: ${smallestRatings.toFixed(1)}`);
    console.log(`Average rating: ${avarageRatings.toFixed(1)}`);  
}
movieRatings(["5", "A Star is Born", "7.8", "Creed 2", "7.3", "Mary Poppins", "7.2", "Vice", "7.2", "Captain Marvel", "7.1"]);
movieRatings(["3", "Interstellar", "8.5", "Dangal", "8.3", "Green Book", "8.2"])



// function movieRatings(input) {
//     let index = 0
//     let movieCount = Number(input[index]);//Брой филми, които си е набелязала Деси
//     index++
//     let maxRate = Number.MIN_SAFE_INTEGER
//     let minRate = Number.MAX_SAFE_INTEGER
//     let maxRateMovie = ""
//     let minRateMovie = ""
//     let totalMovies = 0
//     let totalRate = 0
//     while (totalMovies < movieCount) {
//         let movie = input[index];
//         totalMovies++
//         index++
//         let rate = Number(input[index])
//         totalRate += rate
//         if (rate > maxRate) {
//             maxRate = rate;
//             maxRateMovie = movie
//         }
//         if (rate < minRate) {
//             minRate = rate;
//             minRateMovie = movie
//         }
//         index++
//     }
//     console.log(`${maxRateMovie} is with highest rating: ${maxRate.toFixed(1)}`);
//     console.log(`${minRateMovie} is with lowest rating: ${minRate.toFixed(1)}`);
//     let averageScore = totalRate / movieCount
//     console.log(`Average rating: ${averageScore.toFixed(1)}`)
  
//   }