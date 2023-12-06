import { createDeck, requestCard, npcTurn, accumulatePoints, createCard } from './use-cases/index.js';
import { btnRequest, btnNew, btnStop, htmlPoints, divPlayersCards } from './use-cases/helpers.js';

let playersPoints = [];
let deck = [];

const initGame = ( playersNumber = 2) => {

    deck = createDeck();
    playersPoints = [];

    for( let i = 0; i< playersNumber; i++ ) {
        playersPoints.push(0);
    }

    htmlPoints.forEach( elem => elem.innerText = 0 );
    divPlayersCards.forEach( elem => elem.innerHTML = '' );

    btnRequest.disabled   = false;
    btnStop.disabled = false;
}

initGame();


// Eventos
btnRequest.addEventListener('click', () => {

    const card = requestCard(deck);
    
    const playerPoints = accumulatePoints( card, 0 );
    playersPoints[0] = playerPoints;
        
    createCard( card, 0 );

    if ( playerPoints > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnRequest.disabled   = true;
        btnStop.disabled = true;
        npcTurn( playerPoints, deck, playersPoints );

    } else if ( playerPoints === 21 ) {
        console.warn('21, genial!');
        btnRequest.disabled   = true;
        btnStop.disabled = true;
        npcTurn( playerPoints, deck, playersPoints );
    }

});


btnStop.addEventListener('click', () => {
    btnRequest.disabled   = true;
    btnStop.disabled = true;

    npcTurn( playersPoints[0], deck, playersPoints );
});

btnNew.addEventListener('click', () => {
    initGame();
});

