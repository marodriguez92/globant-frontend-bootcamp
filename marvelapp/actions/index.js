import { REQUEST_COMICS, RECEIVE_COMICS } from './types';

const credentials = 'ts=thesoer&apikey=bc633c3098498c482c783ac62a84c855&hash=802bad3d59d5bdef698ed9e3da658526';

const requestCharacterComics = () => {
    return {
        type: REQUEST_COMICS
    }
}

const receiveCharacterComics = (characterComics) => {
    return {
        type: RECEIVE_COMICS, 
        payload: characterComics 
    }
}

const fetchCharacterComics = (characterID) => (dispatch) => {
    // Start the request. 
    dispatch(requestCharacterComics());

    fetch(`https://gateway.marvel.com:443/v1/public/characters/${characterID}/comics?${credentials}`)
        .then((resp) => resp.json())
        // Receive a response
        .then((data) => {
            dispatch(receiveCharacterComics(data.data.results))})
}

export default fetchCharacterComics;