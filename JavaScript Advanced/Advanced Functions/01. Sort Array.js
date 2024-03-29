function solve(input,command){
    let ascendingComparator = function (a, b) {
    return a - b;
};

    let descendingComparator = function (a, b) {
    return b - a;
};

let sortingStrategies = {
    'asc': ascendingComparator,
    'desc': descendingComparator
};
return input.sort(sortingStrategies[command]);
}