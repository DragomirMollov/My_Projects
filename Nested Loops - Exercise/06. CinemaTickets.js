function cinemaTickets(input) {
    let index = 0;
    let name = input[index];
    let countStudentTickets = 0;
    let countStandardTickets = 0;
    let countKidsTickets = 0;

    while (name !== "Finish") {
        let movieName = name;
        index++;
        let capacity = Number(input[index]);
        let leftSpace = capacity;
        index++;
        let ticketsType = input[index];
        while (ticketsType !== "End") {
            switch (ticketsType) {
                case "standard":
                    countStandardTickets++;
                    break;
                case "kid":
                    countKidsTickets++;
                    break;
                case "student":
                    countStudentTickets++;
                    break; 
            }
            leftSpace--;
            if (leftSpace === 0) {
                break;
            }
            index++;
            ticketsType = input[index];
        }
        let boughtTickets = capacity - leftSpace;
        let percentageFull = boughtTickets / capacity * 100;

        console.log(`${movieName} - ${percentageFull.toFixed(2)}% full.`);
        index++;
        name = input[index];
    }
    let allBoughtTickets = countStandardTickets + countStudentTickets + countKidsTickets; 
   
    console.log(`Total tickets: ${allBoughtTickets}`);
    console.log(`${(countStudentTickets / allBoughtTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(countStandardTickets / allBoughtTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(countKidsTickets / allBoughtTickets * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
