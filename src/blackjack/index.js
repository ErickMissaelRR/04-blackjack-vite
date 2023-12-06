import { createDeck, requestCard, valueCard, npcTurn } from './use-cases/index.js';
import { btnRequest, btnNew, btnStop, divNpcCards, divPlayerCards, htmlPoints } from './use-cases/helpers.js';

const types      = ['C','D','H','S'];
const specials   = ['A','J','Q','K'];
let puntosJugador = 0;

let deck = createDeck(types, specials);

// Eventos
btnRequest.addEventListener('click', () => {

    const carta = requestCard(deck);
    
    puntosJugador = puntosJugador + valueCard( carta );
    htmlPoints[0].innerText = puntosJugador;
    
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    divPlayerCards.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnRequest.disabled   = true;
        btnStop.disabled = true;
        npcTurn( puntosJugador, deck );

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnRequest.disabled   = true;
        btnStop.disabled = true;
        npcTurn( puntosJugador, deck );
    }

});


btnStop.addEventListener('click', () => {
    btnRequest.disabled   = true;
    btnStop.disabled = true;

    npcTurn( puntosJugador, deck );
});

btnNew.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = createDeck( types, specials );

    puntosJugador     = 0;
    
    htmlPoints[0].innerText = 0;
    htmlPoints[1].innerText = 0;

    divNpcCards.innerHTML = '';
    divPlayerCards.innerHTML = '';

    btnRequest.disabled   = false;
    btnStop.disabled = false;

});

