import { requestCard, determinateWinner, createCard } from "./index.js";
import { accumulatePoints, cleanPoints } from "./accumulate-points.js";

/**
 * This function simulate the turn of npc.
 * @param {String} minimumPoints - Minimum points to win. 
 * @param {Array<String>} deck - Deck of cards
 */

export const npcTurn = ( minimumPoints, deck, playerPoints ) => {

    if( !minimumPoints ) {
        throw new Error('Minimum points are required.');
    }

    if( !deck ) {
        throw new Error('Deck is required.');
    }

    let npcPoints = 0;

    do {
        const card = requestCard(deck);

        npcPoints = accumulatePoints( card, playerPoints.length - 1 );
        playerPoints[ playerPoints.length - 1 ] = npcPoints;
        
        createCard( card, playerPoints.length - 1 );

        if( minimumPoints > 21 ) {
            break;
        }

    } while(  (npcPoints < minimumPoints)  && (minimumPoints <= 21 ) );

    determinateWinner( playerPoints );
    cleanPoints();
}