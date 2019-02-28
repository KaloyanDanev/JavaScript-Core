function solve(input) {
   let min = 0;
   let result = [];
    for (let i = 0; i <= input.length; i++) {
        if (input[i] >= min) {
            result.push(input[i]);
            min = input[i];
        }
    }
    console.log(result.join(`\n`));
}