function validate() {
    let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    let sum = 0;
    document.querySelector(`button`).addEventListener(`click`,validNumber);

    function validNumber() {
        let input = document.querySelector(`input`).value;
        let lastDigit = input[input.length - 1];
        for (let i = 0; i < 9; i++){
            sum += input[i] * weights[i];
        }
        let reminder = sum % 11;
        if (reminder === 10){
            reminder = 0;
        }
        let result = document.querySelector(`#response`);
        if(+lastDigit === reminder){
            result.textContent = 'This number is Valid!';
        }else{
            result.textContent = 'This number is NOT Valid!';
        }
    }
}