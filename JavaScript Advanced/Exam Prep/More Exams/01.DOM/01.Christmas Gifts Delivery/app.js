function solution() {

    const giftName = Array(document.querySelector('input'))[0];
    const addGiftBtn = document.querySelector('button');
    const listOfGifts = document.querySelectorAll('ul')[0];
    const sentGifts = document.querySelectorAll('ul')[1];
    const discardedGifts = document.querySelectorAll('ul')[2];


        addGiftBtn.addEventListener('click', function (e) {
            if (giftName.value) {
                let arr = [giftName.value];
                const li = document.createElement('li');
                li.classList.add('gift');
                li.textContent = `${arr}`;
                const sendBtn = document.createElement('button');
                sendBtn.id = 'sendButton';
                sendBtn.textContent = 'Send';
                const discardBtn = document.createElement('button');
                discardBtn.id = 'discardButton';
                discardBtn.textContent = 'Discard';

                li.appendChild(sendBtn);
                li.appendChild(discardBtn);
                listOfGifts.appendChild(li);

                [arr].sort((a,b) => a.localCompare(b));


                sendBtn.addEventListener('click', () => {
                    sendBtn.remove();
                    discardBtn.remove();
                    sentGifts.appendChild(li);

                });

                discardBtn.addEventListener('click', () => {
                    sendBtn.remove();
                    discardBtn.remove();
                    discardedGifts.appendChild(li);
                });
            }
            giftName.value = ''
        });
}