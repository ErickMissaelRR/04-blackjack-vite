import _ from "underscore";

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

//#region 2nd form to create a deck, all in a single file
// const types      = ['C','D','H','S'];
// const specials   = ['A','J','Q','K'];
// export const createDeck = () => {
//#endregion

const types      = ['C','D','H','S'];
const specials   = ['A','J','Q','K'];
let deck = [];

/**
 * This is a use case, it is a function that create a deck and returns the of cards
 * @returns {Array<String>} Return a new deck
 */

export const createDeck = () => {
  if (!types || types.length === 0) {
    throw new Error("You must pass an array of card types");
  }

  if (!specials || specials.length === 0) {
    throw new Error("You must pass an array of specials cards");
  }

  for (let i = 2; i <= 10; i++) {
    for (let type of types) {
      deck.push(i + type);
    }
  }

  for (let type of types) {
    for (let special of specials) {
      deck.push(special + type);
    }
  }
  deck = _.shuffle(deck);
  return deck;
};
