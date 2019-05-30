import types from '../actions/types';

const initialState = {
  isFetching: false,
  characterComics: [],
  characters: [],
  charactersSearch: [],
  isFetchingMoreCharacters: false
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_COMICS:
      return {
        ...state,
        isFetching: true
      }
    case types.RECEIVE_COMICS:
      return {
        ...state,
        characterComics: action.payload,
        isFetching: false
      }
    case types.REQUEST_CHARACTERS:
      return {
        ...state,
        isFetching: true
      }
    case types.RECEIVE_CHARACTERS:
      return {
        ...state,
        isFetching: false,
        characters: action.payload
      }
    case types.REQUEST_CHARACTERS_SEARCH:
      return {
        ...state,
        isFetching: true
      }
    case types.RECEIVE_CHARACTERS_SEARCH:
      return {
        ...state,
        isFetching: false,
        charactersSearch: action.payload
      }
    case types.REQUEST_MORE_CHARACTERS:
      return {
        ...state,
        isFetchingMoreCharacters: true
      }
    case types.RECEIVE_MORE_CHARACTERS:
      const results= state.characters.concat(action.payload)
      return {
        ...state,
        characters: results,
        isLoadingMorePost: false
      }
    case types.CLEAR_SEARCH:
      return{
        ...state,
        charactersSearch:[]
      }

    default:
      return state
  }
}

export default dataReducer;