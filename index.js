//Building a vault that requires three mathematical calculations to generate the three codes in a combination. Use the JavaScript console or the script block within an HTML page to create three variables. Each variable will be the result of each calculation (three in total). The combination of the lock is 10 - 40 - 39. You must use three different arithmetic operators that will generate each individual number, then display the combination on the HTML page, or in an alert popup.

//STEPS
// 1. A message telling the user that they need to solve the combination to open the vault.
// 2. have them sole the first equation
// 3. pop up off the first number
// 4. have them sole the second equation
// 5. pop up off the second number
// 6. have them sole the third equation
// 7. pop up off the third number


// step 1
const message = "You need to solve the combination to open the vault.";
console.log(message);  // console off the message

// step 2 & 3
const firstNumber = 10;  // the first number
const firstEquation = 5 * 2;  // the first equation
if (firstNumber === firstEquation) {
    console.log(firstNumber);
} else {
    console.log("You have the wrong number.");
}

// step 4 & 5
const secondNumber = 40;  // the second number
const secondEquation = 20 + 20;  // the second equation
if (secondNumber === secondEquation) {
    console.log(secondNumber);
} else {
    console.log("You have the wrong number.");
}

// step 6 & 7
const thirdNumber = 39;  // the third number
const thirdEquation = 100 - 61;   // the third equation
if (thirdNumber === thirdEquation) {
    console.log(thirdNumber);
} else {    
    console.log("You have the wrong number.");
}

// step 8  
const combination = firstNumber + " - " + secondNumber + " - " + thirdNumber;  // the combination
