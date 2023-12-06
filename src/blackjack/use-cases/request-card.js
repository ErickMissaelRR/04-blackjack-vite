
/**
 * This function request a card from deck.
 * @param {Array<String>} deck - Deck of cards for request a card.
 * @returns {String} - Card requested.
 */


export const requestCard = (deck) => {
    if ( !deck || deck.length === 0 ) {
        throw new Error('There are not enough cards in deck.');
    }
    const card = deck.pop();
    return card;
}