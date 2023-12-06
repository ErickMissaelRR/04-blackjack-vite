import { divPlayersCards } from "./helpers";

/**
 * This function create a card.
 * @param {String} card - Card to create.
 * @param {Number} turn - 0 = player, 1 = npc
 */


export const createCard = ( card, turn ) => {

    if( !card ) {
        throw new Error('Card is required.');
    }

    if( turn === undefined ) {
        throw new Error('Turn is required.');
    }

    const imgcard = document.createElement('img');
    imgcard.src = `assets/cartas/${ card }.png`; 
    imgcard.classList.add('carta');
    divPlayersCards[turn].append( imgcard );
}