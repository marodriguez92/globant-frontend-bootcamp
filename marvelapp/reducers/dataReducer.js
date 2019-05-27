import { REQUEST_COMICS, RECEIVE_COMICS } from '../actions/types';

const initialState = {
    isFetching: false, 
    characterComics: []
}

const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_COMICS:
            return {
                ...state,
                isFetching: true
            }
        case RECEIVE_COMICS:
            return {
                ...state, 
                characterComics: action.payload,
                isFetching: false
            }
        default:
            return state
    }
}

export default dataReducer;