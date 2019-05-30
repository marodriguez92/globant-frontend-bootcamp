import types from './types';

const credentials = 'ts=thesoer&apikey=bc633c3098498c482c783ac62a84c855&hash=802bad3d59d5bdef698ed9e3da658526';

export const fetchCharacterComics = (characterID) => (dispatch) => {
  // Start the request. 
  console.log(types)
  dispatch({ type: types.REQUEST_COMICS });
  fetch(`https://gateway.marvel.com:443/v1/public/characters/${characterID}/comics?${credentials}`)
    .then((resp) => resp.json())
    // Receive a response
    .then((data) => {
      dispatch({
        type: types.RECEIVE_COMICS,
        payload: data.data.results
      })
    })
}

export const fetchCharacters = () => (dispatch) => {
  // Start the request. 
  dispatch({ type: types.REQUEST_CHARACTERS })

  fetch(`https://gateway.marvel.com/v1/public/characters?${credentials}`)
    .then((resp) => resp.json())
    // Receive a response
    .then((data) => dispatch({
      type: types.RECEIVE_CHARACTERS,
      payload: data.data.results
    })).catch((error) => {
      console.log(error);
    });
}

export const fetchCharactersSearch = (string) => (dispatch) => {
  dispatch({ type: types.REQUEST_CHARACTERS_SEARCH })
  fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${string}&${credentials}`)
    .then((resp) => resp.json())
    // Receive a response
    .then((data) => dispatch({
      type: types.RECEIVE_CHARACTERS_SEARCH,
      payload: data.data.results
    })).catch((error) => {
      console.log(error);
    });
}


export const fetchMoreCharacters = (offset) => (dispatch) => {
  // Start the request. 

  dispatch({ type: types.REQUEST_MORE_CHARACTERS })

  fetch(`https://gateway.marvel.com/v1/public/characters?limit=20&offset=${offset}&${credentials}`)
    .then((resp) => resp.json())
    // Receive a response
    .then((data) => dispatch({
      type: types.RECEIVE_MORE_CHARACTERS,
      payload: data.data.results
    }
    
    )).catch((error) => {
      console.log(error);
    });
}

export const clearSearch = () => (dispatch) => {
  dispatch({ type: types.CLEAR_SEARCH })
}


