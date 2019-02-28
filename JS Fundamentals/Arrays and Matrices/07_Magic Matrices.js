function main(input) {
    let rowSum = 0;

    for (let row = 0; row < input.length; row++) {
        let currentRowSum = 0;
        for (let col = 0; col < input[row].length; col++) {
            currentRowSum += input[row][col];
        }
        if (row === 0) {
            rowSum = currentRowSum;
        }else if (rowSum !== currentRowSum){
            return false;
        }
    }
    for (let col = 0; col < input[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < input.length; row++) {
            colSum += input[row][col];
        }if (colSum !== rowSum) {
            return false;
        }
    }
    return true;
}