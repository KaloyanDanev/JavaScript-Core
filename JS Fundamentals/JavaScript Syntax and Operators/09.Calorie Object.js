function solve(input){
    let output = '{';

    input.forEach(function (value, index) {
        if (index % 2 == 0) {
            output += ' ' + value + ': ';
        }
        else {
            if (index == input.length - 1) {
                output += value;
            }
            else {
                output += value + ',';
            }
        }
    });

    output += ' }'
    console.log(output);
}