function isOddOrEven(string) {
    if (typeof(string) !== "string") {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }
    return "odd";
}

let expect = require('chai').expect;
let assert = require('chai').assert;

describe(`Even or Odd`,function (){
    it('should return undefiened if we pass a umber', function () {
        let number = 20;
        let expected = isOddOrEven(number);
        expect(expected).to.equal(undefined);
    });
});