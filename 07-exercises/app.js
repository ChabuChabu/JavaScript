const fruits = ['banana','orange','apple','blueberry','strawberry']

//for loop example
// for (let i = 0; i < fruits.length; i++){
//     console.log(i,fruits[i]);
// }

// for (const fruit of fruits){
//     console.log(fruit);
// }

//const numbers = [1,2,3,4,5,6,7]

// const double = (numbers) => {
//    let result = []
//    for (const number of numbers){
//        result.push(number ** 2)
//    }
//    return result
// }

// console.log(double([1,2,3,4,5,5,6]));


/************* EXERCISES */

const HowManyLetters = (phrase) => {

    //counter
    let result = 0;


    for (index in phrase){
        console.log(Number(index) + 1);
        result = Number(index) + 1
    }

    return { result}
   
    //  The for of syntx get the value of the indexs
    // for (const letter of phrase){
    //     console.log(letter);
    // }
}

//const phrase = prompt("Write your phrase")

//console.log(HowManyLetters(phrase));

const sumArray = (numbers) => {

    let result = 0

    for (const number of numbers){

       result += number
    }

    return{ result }
}

// console.log(sumArray([1,2,3,4,5]));

const max = (numbers) => {
    let result = numbers[0]

    for(const number of numbers){
        if(number > result){
            result = number
        }
    }

    return {result}
}

// console.log(max([2,4,1,5,12,11,6,9]));

const letterfrequency = (phrase) => {

    //initlise an empty objetc
    let frequency = {}
    for (const letter  of phrase){
     //check if letter exists in frequency
      if(letter in frequency) {
        //increment the value by +1
        frequency[letter] ++
        //otherwise set the value to 1
      }else{
        frequency[letter] = 1
      }
    }
    return frequency
}

//console.log(letterfrequency('hahahahahahahahaha'))

const wordFrequency = (phrase) => {

    const words = phrase.split(' ')
    return letterfrequency(words)

}

// const userInput = prompt('Write your sentence')
// console.log(wordFrequency(userInput));

/************************** Higher order numbers ****************************/

//map

/****** Map returns an array *******/
const doubleMap = (numbers) => {
let mapped = numbers.map(number => number * 2)
console.log(mapped);
}
doubleMap([1,2,3]);

//filter
/*** filter returns sn array with mactching conditions */
const nums = [1,2,3,4,5,6]

let filtered = nums.filter(nums => nums > 4)
console.log(filtered);

const actors = [
    {name: 'johnny', netWorth: 20000000},
    {name: 'Ricky', netWorth: 100},
    {name: 'Wayne', netWorth: 50000000},
]

let wealth = actors.filter(actors => actors.netWorth > 100)
console.log(wealth);

//reduce