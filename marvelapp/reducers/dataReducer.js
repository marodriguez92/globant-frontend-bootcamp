import types from '../actions/types';

const initialState = {
    isFetching: false,
    characterComics: [],
    characters: [],
    charactersSearch: [],
    isFetchingMoreCharacters: false,
    isFetchingSearch:false,
    searchResults:false,
    comic: {
        comicData: {},
        characters: [],
    },
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
        isFetchingSearch: true
      }
    case types.RECEIVE_CHARACTERS_SEARCH:
      const searchResults = action.payload.lenght!=0 ? true: false
      return {
        ...state,
        isFetchingSearch: false,
        searchResults,
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
      case types.COMIC_START_LOAD:
            return {
                    ...state,
                    isFetching: true,
                    comic: {
                        ...state.comic,
                    },
            }      
        case types.COMIC_FINISH_LOAD:
            return {
                ...state,
                comic: {
                    ...state.comic,
                    comicData: action.payload.data.results[0]
                },
                isFetching: false,
            }
        case types.COMIC_CHARACTERS_START:
            return {
                    ...state,
                    isFetchingMoreCharacters: true,
                    comic: {
                        ...state.comic,
                    },
            }      
        case types.COMIC_CHARACTERS_FINISH:
            return {
                ...state,
                comic: {
                    ...state.comic,
                    characters: action.payload.data.results
                },
                isFetchingMoreCharacters: false,
              }
    default:
      return state
  }
}

export default dataReducer;