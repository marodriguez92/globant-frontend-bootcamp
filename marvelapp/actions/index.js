import { REQUEST_COMICS, RECEIVE_COMICS } from './types';

const credentials = 'ts=thesoer&apikey=bc633c3098498c482c783ac62a84c855&hash=802bad3d59d5bdef698ed9e3da658526';

const fetchCharacterComics = (characterID) => (dispatch) => {
    // Start the request. 
    dispatch({type: REQUEST_COMICS});

    fetch(`https://gateway.marvel.com:443/v1/public/characters/${characterID}/comics?${credentials}`)
        .then((resp) => resp.json())
        // Receive a response
        .then((data) => {
            dispatch({
                type: RECEIVE_COMICS, 
                payload: data.data.results 
            })
        })
}

export default fetchCharacterComics;