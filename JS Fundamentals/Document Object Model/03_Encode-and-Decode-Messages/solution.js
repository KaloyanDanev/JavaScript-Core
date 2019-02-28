function solve() {
	let button = document.getElementsByTagName('button');
    let textAreas = document.getElementsByTagName('textarea');

	button[0].addEventListener('click',encode);
    button[1].addEventListener('click',decode);

    function encode(){
    let encodeMessage = textAreas[0].value;
    let newMassage = '';

    encodeMessage.split('').forEach((char) => {
        let asciiValue = char.charCodeAt(0) + 1;
        newMassage += String.fromCharCode(asciiValue);
    });
    textAreas[0].value = "";
    textAreas[1].value = newMassage;
    }

    function decode(){
       let decodeMessage = textAreas[1].value;
       let originalMessage ="";

       decodeMessage.split('').forEach((char) =>{
           let asciiValue = char.charCodeAt(0) - 1;

           originalMessage += String.fromCharCode(asciiValue);
       });
       textAreas[1].value = originalMessage;
    }
}