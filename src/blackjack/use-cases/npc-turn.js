import { requestCard, valueCard } from "./index.js";
import { divNpcCards, htmlPoints } from './helpers.js';

/**
 * This function simulate the turn of npc.
 * @param {String} minimumPoints - Minimum points to win. 
 * @param {Array<String>} deck - Deck of cards
 */

export const npcTurn = ( minimumPoints, deck ) => {

    let npcPoints = 0;

    do {
        const card = requestCard(deck);

        npcPoints = npcPoints + valueCard( card );
        htmlPoints[1].innerText = npcPoints;
        
        const imgCard = document.createElement('img');
        imgCard.src = `assets/cartas/${ card }.png`; //3H, JD
        imgCard.classList.add('carta');
        divNpcCards.append( imgCard );

        if( minimumPoints > 21 ) {
            break;
        }

    } while(  (npcPoints < minimumPoints)  && (minimumPoints <= 21 ) );

    setTimeout(() => {
        if( npcPoints === minimumPoints ) {
            alert('Nadie gana :(');
        } else if ( minimumPoints > 21 ) {
            alert('Computadora gana')
        } else if( npcPoints > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}