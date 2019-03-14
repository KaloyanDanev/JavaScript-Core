function dart(){
    const colorMapping = {
        firstLayer: 0,
        secondLayer : 1,
        thirdLayer : 2,
        fourthLayer : 3,
        fifthLayer : 4,
        sixthLayer : 5,
    };

    const maxScore = 100;

	$('#playBoard').click('div', onPlayBoardClick);

    function onPlayBoardClick(e) {
        let points = getScore(e.target.id);
        
        selectPlayer(points);
    }

    function getScore(id){
        return +$('#scoreBoard tbody tr')
            .eq(colorMapping[id])
            .children()
            .eq(1)
            .text()
            .split(' ')[0];
    }

    let isHome = true;
    function selectPlayer(score) {
       let selector = '';
        isHome
        ? selector = '#Home'
        : selector = '#Away';

        $pointsElement = $(selector).children().eq(0);
        $pointsElement.text((i, t) => Number(t) + score);

        let currentPoints = Number($pointsElement.text());
        if (currentPoints >= maxScore){

            if (isHome) {
                $('#Home').children().eq(1).css({
                    backgroundColor: 'green'
                });
                $('#Away').children().eq(1).css({
                    backgroundColor: 'red'
                });

            }else   {
                $('#Home').children().eq(1).css({
                    backgroundColor: 'red'
                });
                $('#Away').children().eq(1).css({
                    backgroundColor: 'green'
                });
            }

            $('#playBoard').off('click');
        }
        isHome =!isHome;
    }
}