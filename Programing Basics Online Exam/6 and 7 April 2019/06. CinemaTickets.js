function cinemaTickets(input) {
     let index = 0;
     let value = input[index];
     let studenTickets = 0;
     let standardTickets = 0;
     let kidsTickets = 0;

     while (value !== "Finish") {
       let filmName = value;
       index++;
       let availableSpace = Number(input[index]);
       let leftCapacity = availableSpace;
       index++;
       let ticketsType = input[index];
       while (ticketsType !== "End") {
         switch (ticketsType) {
           case "standard":
             standardTickets++;
             break;
           case "student": 
             studenTickets++;
             break;
           case "kid": 
             kidsTickets++;
             break; 
         }
         leftCapacity--;
         if (leftCapacity === 0) {
           break;
         }
         index++;
         ticketsType = input[index];
       }
       let sellTickets = availableSpace - leftCapacity;
       let sellTicketsPercent = sellTickets / availableSpace * 100;
       console.log(`${filmName} - ${sellTicketsPercent.toFixed(2)}% full.`);
       index++;
       value = input[index];
      }
      let allTickets = kidsTickets + standardTickets + studenTickets;
    console.log(`Total tickets: ${allTickets}`);
    console.log(`${(studenTickets / allTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTickets / allTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidsTickets / allTickets * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi", "10", "standard", "kid", "student",
  "student","standard", "standard", "End", "Scary Movie", "6", "student",
  "student", "student", "student", "student", "student", "Finish"]);

cinemaTickets(["The Matrix", "20", "student", "standard", "kid", "kid", "student",
  "student", "standard", "student", "End", "The Green Mile", "17",
  "student", "standard", "standard", "student", "standard", "student",
  "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"]);
