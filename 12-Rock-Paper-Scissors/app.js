//select rnadom element from an array
const randomFruit = ( fruits) => {
 let randomNumber = Math.floor(Math.random() * fruits.length)
 return fruits[randomNumber]
}

let fruits = ['banana','tomato','peach','pear']
console.log(randomFruit(fruits));

//

const weatherScore = (weather) => {
    
    let temp
  
    if( weather === "rainy"){
     temp = `Carry your umbrealla is rainy with a temperature of: 1`
    }else if (weather === "sunny"){
        temp = `Its sunny!! woh woh!!! with a temperature of: 21`
    }else{
        temp = `Keep warm the  temperature is: 16`
    }

    return temp
}
const temperature = weatherScore("sunny");
console.log(temperature);



