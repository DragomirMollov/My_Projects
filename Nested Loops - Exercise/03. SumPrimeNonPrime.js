function sumPrimeNonPrime(input) {
    let index = 0;
    let primeSum = 0;
    let nonPrimeSum = 0;

    while (input[index] !== "stop") {
        let currNumber = Number(input[index]);

        if (currNumber < 0) {
            console.log(`Number is negative.`);
        } else {
            let isPrime = true;
            for ( let i = 2; i < currNumber; i++ ) {
                if (currNumber % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primeSum += currNumber;
            } else {
                nonPrimeSum += currNumber;
            }
        }
        index++;
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
