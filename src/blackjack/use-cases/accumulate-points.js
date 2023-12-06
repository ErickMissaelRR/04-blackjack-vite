import { htmlPoints } from "./helpers";
import { valueCard } from "./";

/**
 * This function accumulate points of player and npc.
 * @param {String} card - Card to accumulate points.
 * @param {String} turn - 0 = player, 1 = npc 
 * @returns {Array<Number, Number>} - Array with points of player and npc.
 */

let playerPoints = [0, 0];

export const accumulatePoints = ( card, turn ) => {

    console.log(turn);

    if( !card ) {
        throw new Error('Card is required.');
    }

    if( turn === undefined ) {
        throw new Error('Turn is required.');
    }

    playerPoints[turn] = playerPoints[turn] + valueCard( card );
    htmlPoints[turn].innerText = playerPoints[turn];
    return playerPoints[turn];
}

export const cleanPoints = () => {
    playerPoints = [0, 0];
}