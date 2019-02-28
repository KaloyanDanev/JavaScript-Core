function solve(fruit,weight,price){
let kgWeight = weight/1000;
let money = kgWeight * price;
console.log(`I need ${money.toFixed(2)} leva to buy ${kgWeight.toFixed(2)} kilograms ${fruit}.`)
}