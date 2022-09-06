function tradeCommissions(input) {
    const town = input[0];
    const sales = Number(input[1]);
    let commissions = 0;

    if (sales >=0 && sales <= 500) {
        switch (town) {
            case "Sofia": commissions = sales * 0.05; 
            console.log(commissions.toFixed(2)); break;
            case "Varna": commissions = sales * 0.045; 
            console.log(commissions.toFixed(2)); break;
            case "Plovdiv": commissions = sales * 0.055;
            console.log(commissions.toFixed(2)); break;
            default: console.log("error"); break;
        } 
    } else if (sales >500 && sales <= 1000) {
        switch (town) {
            case "Sofia": commissions = sales * 0.07;
            console.log(commissions.toFixed(2)); break;
            case "Varna": commissions = sales * 0.075;
            console.log(commissions.toFixed(2)); break;
            case "Plovdiv": commissions = sales * 0.08;
            console.log(commissions.toFixed(2)); break;
            default: console.log("error"); 
            break;
        } 
    } else if (sales > 100 && sales <= 10000) {
        switch (town) {
            case "Sofia": commissions = sales * 0.08;
            console.log(commissions.toFixed(2)); break;
            case "Varna": commissions = sales * 0.1;
            console.log(commissions.toFixed(2)); break;
            case "Plovdiv": commissions = sales * 0.12;
            console.log(commissions.toFixed(2)); break;
            default: console.log("error"); 
            break;
        } 
    } else if (sales > 10000) {
        switch (town) {
            case "Sofia": commissions = sales * 0.12;
            console.log(commissions.toFixed(2)); break;
            case "Varna": commissions = sales * 0.13;
            console.log(commissions.toFixed(2)); break;
            case "Plovdiv": commissions = sales * 0.145;
            console.log(commissions.toFixed(2)); break;
            default: console.log("error"); break;
        } 
    } else {
        console.log("error");
    }

}  

tradeCommissions(["Sofia", "1500"]);
tradeCommissions(["Plovdiv", "10000.01"]);
tradeCommissions(["Varna", "3874.50"]);
tradeCommissions(["Kaspichan", "-50"]);




// function tradeCommissions(input){
//     const city = input[0];
//     const sales = Number(input[1]);
//     let commission = 0;
 
//     switch(city){
//         case "Sofia":
//                 if(sales > 0 && sales <= 500){
//                     commission = sales * 0.05;
//                     }else if(sales > 500 && sales <= 1000){
//                         commission = sales * 0.07;
//                     }else if(sales > 1000 && sales <= 10000){
//                         commission = sales * 0.08;
//                     }else if(sales > 10000){
//                         commission = sales * 0.12;
//                     }else if(sales < 0){
//                         console.log(`error`);
//                     }
//         break;
//         case "Varna":
//                 if(sales > 0 && sales <= 500){
//                     commission = sales * 0.045;
//                     }else if(sales > 500 && sales <= 1000){
//                         commission = sales * 0.075;
//                     }else if(sales > 1000 && sales <= 10000){
//                         commission = sales * 0.1;
//                     }else if(sales > 10000){
//                         commission = sales * 0.13;
//                     }else if(sales < 0){
//                         console.log(`error`);
//                     }
//         break;
//         case "Plovdiv":
//                 if(sales > 0 && sales <= 500){
//                     commission = sales * 0.055;
//                     }else if(sales > 500 && sales <= 1000){
//                         commission = sales * 0.08;
//                     }else if(sales > 1000 && sales <= 10000){
//                         commission = sales * 0.12;
//                     }else if(sales > 10000){
//                         commission = sales * 0.145;
//                     }else if(sales < 0){
//                         console.log(`error`);
//                     }
//         break;
        
//         default: console.log(`error`);
//     }
//     if(commission != 0){
//     console.log(commission.toFixed(2));
//     }
//     }