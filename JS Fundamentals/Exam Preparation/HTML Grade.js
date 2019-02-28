function solve(a, b, c){
    const maxPoints = 100;
    const examPoints = 400;
    let points = ((a / examPoints) * 0.9) * 100;
    if (a && b <= 0) {
        let x = 3 + 2 *(points - maxPoints / 5) / (maxPoints / 2);
        let y = (x).toFixed(2);
        console.log(y);
    }else{
        let bonus = b / c * 10;
        let final = points + bonus;
        let result = 3 + 2 * (final - maxPoints / 5) / (maxPoints / 2);
        let finalResult = (result).toFixed(2);

        if (finalResult < 3) {
            console.log("2.00");
        } else if (finalResult > 6) {
            console.log("6.00");
        } else
            console.log(finalResult);
    }
}
solve(300, 10, 10);