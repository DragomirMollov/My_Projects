function workingHours(input) {
  const hours = Number(input[0]);
  const days = input[1];
  

//   if (hours >= 10 && hours <= 18) {
//     switch (days) {
//       case "Monday":
//       case "Tuesday":
//       case "Wednesday":
//       case "Thursday":
//       case "Friday":
//         case "Saturday":
//         console.log("open");
//         break;
      
//       case "Sunday":
//         console.log("closed");
//         break;
//     }
//   } else {
//     console.log("closed");
//   }

    if ( hours >= 10 && hours <= 18 && days !="Sunday" ) {
        console.log("open");
    } else {
        console.log("closed");
    }
}

workingHours(["11", "Monday"]);
workingHours(["19", "Friday"]);
workingHours(["11", "Sunday"]);
