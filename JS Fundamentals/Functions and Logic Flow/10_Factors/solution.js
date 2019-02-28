function solve() {
    let num = Number(document.getElementById('num').value);
    let factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    let result = document.getElementById(`result`);
    result.innerHTML = factors.join(' ');
}