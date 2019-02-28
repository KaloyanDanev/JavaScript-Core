function leapYear() {
    let button = document.querySelector('#exercise button');
    button.addEventListener('click', event);

    function event() {
        let year = document.querySelector('#exercise input');
        let isLeap = checkYear(year.value);

        let h2 = document.querySelector('#year  h2');

        if(isLeap){
            h2.textContent = "Leap Year";
        }else{
            h2.textContent = "Not Leap Year";
        }
        let div = document.querySelector('#year  div');
        div.textContent = year.value;
        year.value = "";
    }

    function checkYear(year) {
        return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
    }
}