function main(input) {
    let result = input.reduce((acc,el,idx) => {
        if (el === `add`) {
            acc.push(idx + 1);
        }else if (el === `remove`) {
            acc.pop();
        }
        return acc;
    },[]);

    if (result.length > 0){
        console.log(result.join(`\n`))
    } else{
        console.log(`Empty`);
    }
}