import {AsyncStorage} from 'react-native';

export const FLASHCARDS_STORAGE_KEY = 'FLASH-CARD-DECKS'
// return all of the decks along with their titles, questions, and answers.
export function  getDecks(){
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
                    .then((result));

}

//take in a single id argument and return the deck associated with that id
export function getDeck(id){
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
                    .then((result));
}

// take in a single title argument and add it to the decks.
export function saveDeckTitle(id, title){
    return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY,JSON.stringify({
        [id]:title
    }));             
}

// take in two arguments, title and card, 
// and will add the card to the list of questions for the deck with the associated title. 
export function addCardToDeck(title, card){
    return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY,JSON.stringify({
        [title]:card
    }));  
}