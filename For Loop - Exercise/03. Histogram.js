function histogram(input) {
    const n = Number(input[0]);
    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);
        if ( num < 200) {
            p1Counter++;
        } else if ( num >= 200 && num <= 399 ) {
            p2Counter++;
        } else if ( num >= 400 && num <= 599) {
            p3Counter++;
        } else if ( num >= 600 && num <= 799 ) {
            p4Counter++;
        } else {
            p5Counter++;
        } 
    }

            // first calculate                                          second calculate
            //       ||                                                         ||
            //       \/                                                         \/     
  //  console.log(`${(p1Counter / n * 100).toFixed(2)}%`);   // let p1Procentage = p1Counter / n * 100;
  //  console.log(`${(p2Counter / n * 100).toFixed(2)}%`);   // let p2Procentage = p2Counter / n * 100;    
  //  console.log(`${(p3Counter / n * 100).toFixed(2)}%`);   // let p3Procentage = p3Counter / n * 100;
  //  console.log(`${(p4Counter / n * 100).toFixed(2)}%`);   // let p4Procentage = p4Counter / n * 100;
  //  console.log(`${(p5Counter / n * 100).toFixed(2)}%`);   // let p5Procentage = p5Counter / n * 100;

                                                             // console.log(`${p1Procentage.toFixed(2)}%`); 
                                                             // console.log(`${p2Procentage.toFixed(2)}%`);
                                                             // console.log(`${p3Procentage.toFixed(2)}%`);
                                                             // console.log(`${p4Procentage.toFixed(2)}%`); 
                                                             // console.log(`${p5Procentage.toFixed(2)}%`);

            //  third calculate
            //       ||
            //       \/
    const calcPercentage = (paragraph) => ( paragraph / n) * 100;
    let counters = [ p1Counter, p2Counter, p3Counter, p4Counter, p5Counter];
    for ( let i = 0; i < counters.length; i++) {
        console.log(`${calcPercentage(counters[i]).toFixed(2)}%`);
    }


                                                             
}





histogram(["20", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);