//**********  This function has got no argument **********/

function sayMyName(){
    console.log('Mutinta');
}
//sayMyName()

//**********  This function has got one argument *********/

function greeting(name){
    console.log(`Hi ${name},nice to meet you`);
}

//greeting('Chabu')


//**********  This function has got two arguments and returns the sum *********/
function sum( a, b){
    return a + b
}

// let total = sum( 3, 7)

// console.log(total);

// function calculateTotal(food,tip){
//     tipPercentage = tip / 100
//     tipAmount = food * tipPercentage
//     total = sum(food,tipAmount)
//     // total = food + tipAmount

//     return total
// }

// let bill = calculateTotal(300,20)
// console.log(bill);

//************  Arrow functions ****************/

const  calculateTotal = (food,tip) => {
    tipPercentage = tip / 100
    tipAmount = food * tipPercentage
    total = sum(food,tipAmount)

    return total
}

let Amount = calculateTotal(100,20)
console.log(Amount);