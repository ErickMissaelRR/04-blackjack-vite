
/**
 * This function determinate the winner.
 * @param {Array<String>} playerPoints - Array with points of player and npc.
 */
export const determinateWinner = ( playerPoints ) => {

    if( !playerPoints ) {
        throw new Error('Player points are required.');
    }

    const [ minimumPoints, npcPoints ] = playerPoints;

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