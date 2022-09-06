// function solve(input) {
// let number = input[0];
// let sum = 0;

//  for (let i = 0; i < number.length; i++) {
//     sum += Number(number[i]);
//  }
//  console.log(`The sum ot the digits is: ${sum}`);
// }
// solve(["1234"]);
function taskOne(input){
   let money = Number(input[0])
   let yearsToLive = Number(input[1])
   let years = 18
   for (let i = 1800 ; i <= yearsToLive ; i++){
       
       if(i % 2 === 0 ){
           
         money -= 12000
       }else if (i % 2 != 0 ){
           
           money -= 12000 + (50 * years) 
       }
       years ++
   }
    if(money >= 0){
       console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`)
   }else {
       console.log(`He will need ${Math.abs(money).toFixed(2)} dollars to survive.`)
   }
}

taskOne(["1800", "18"]);