function solve() {
    let chopBtn = document.querySelectorAll(`#operations button`)[0];
    let diceBtn = document.querySelectorAll(`#operations button`)[1];
    let spiceBtn = document.querySelectorAll(`#operations button`)[2];
    let bakeBtn = document.querySelectorAll(`#operations button`)[3];
    let filletBtn = document.querySelectorAll(`#operations button`)[4];

    let resultElement = document.querySelector('#output');

    function chop() {
        let number = Number(document.querySelector('#exercise input').value);
        if (resultElement.textContent) {
            resultElement.textContent /= 2;
        } else {
            resultElement.textContent = number / 2;
        }
    }

    function dice() {
        let number = Number(document.querySelector('#exercise input').value);
        if (resultElement.textContent) {
            resultElement.textContent = Math.sqrt(resultElement.textContent);
        } else {
            resultElement.textContent = Math.sqrt(number);
        }
    }

    function spice() {
        let number = Number(document.querySelector('#exercise input').value);
        if (resultElement.textContent) {
            resultElement.textContent = Number(resultElement.textContent) + 1;
        } else {
            resultElement.textContent = Number(number + 1);
        }
    }

    function bake() {
        let number = Number(document.querySelector('#exercise input').value);
        if (resultElement.textContent) {
            resultElement.textContent *= 3;
        } else {
            resultElement.textContent = number * 3;
        }
    }

    function fillet() {
        let number = Number(document.querySelector('#exercise input').value);
        if (resultElement.textContent) {
            resultElement.textContent = Number(resultElement.textContent) * 0.8;
        } else {
            resultElement.textContent = number * 0.8;
        }
    }

    chopBtn.addEventListener('click', chop);
    diceBtn.addEventListener('click', dice);
    spiceBtn.addEventListener('click', spice);
    bakeBtn.addEventListener('click', bake);
    filletBtn.addEventListener('click', fillet);
}