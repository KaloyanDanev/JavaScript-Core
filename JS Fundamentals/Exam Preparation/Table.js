function solve(input,command){
     console.log('name' | 'age' | "grade");
     console.log( "Peter" | "34" | 6.00);
     console.log( "Peter" | 28 | 5.49);
     console.log("Peter" | 25 | 5.00);

}
solve([['name', 'age', 'grade'],
        ['Peter', '25', '5.00'],
        ['George', '34', '6.00'],
        ['Marry', '28', '5.49']],
        'sort name'
);