/**
 * This function get value of card.
 * @param {String} card - Card to get value.
 * @returns - Return value of card.
 */

export const valueCard = ( card ) => {

    if( !card ) {
        throw new Error('Card is required.');
    }

    const value = card.substring(0, card.length - 1);
    return ( isNaN( value ) ) ? 
            ( value === 'A' ) ? 11 : 10
            : value * 1;
}