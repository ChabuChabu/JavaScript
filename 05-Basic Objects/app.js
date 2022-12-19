const person = {
    name : 'Leonardo',
    shirt: 'white'
}

//accessing objects
console.log(person.name);
console.log(person['shirt']);

//assigning a property to an object

person.phone = '0000001122'

console.log(person.phone);
console.log(person);

person['email'] = 'chabu@dev.com'

console.log(person);

//Qazi object

const person2 = {
    name: 'qazi',
    shirt: 'black'
}

const introducer = (name, shirt) => {
  
    const person = {
        name : name,
        shirt: shirt,
        assets: 100000,
        liability: 50000,
        netWorth:function(){
            return this.assets - this.liability
        }
    }

    return intro = `Hi,my name is ${person.name} and the color of my shirt is ${person.shirt} and my networth is $${person.netWorth()} `
}

let greeting = introducer('Chabu','brown')

console.log(greeting);


