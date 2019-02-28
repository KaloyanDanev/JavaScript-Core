function solve(number) {
    let numberString = String(number).split('');
    console.log(same(numberString));

    let sum = 0;
    numberString.forEach(function (n) {
        sum += Number(n);
    })

    console.log(sum)

    function same(n) {
        for (let i = 1; i < n.length; i++) {
            if (n[0] !== n[i]) {
                return false;
            }
        }
        return true;
    }
}