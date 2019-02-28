function solve() {
    Array.from(document.getElementsByTagName('ímg')).forEach((img)=>{
        img.addEventListener('click',clickEvent);
    });

    function clickEvent(e) {
       let card = e.target;
       let parent = card.parentNode;

       console.log(parent)
    }
}