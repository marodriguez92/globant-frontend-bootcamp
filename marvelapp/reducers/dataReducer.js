import types from '../actions/types';

const initialState = {
    isFetching: false,
    characterComics: [],
    characters: []
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
        default:
            return state
    }
}

export default dataReducer;