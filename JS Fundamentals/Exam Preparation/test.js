function solution([input]){
    let towns = [];
    let prices = [];
    for (let i = 0; i <input.length; i++) {
        let town = input[i].town;
        towns.push(town);

        let price = input[i].price;
        prices.push(price)
    }



}
solution([[ { model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2},
    { model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8},
    { model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9},
    { model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3},
    { model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3} ]
]);