import { DISC_LOAD_LIST, DISC_NEW_LOAD_LIST } from '../actions/disc';

const initialState = {
    list: [],
    newsite: [],
};
const disc = (state = initialState, action) => {
    switch(action.type) {
        case DISC_LOAD_LIST:
            return {
                ...state,
                list: action.list,
            };
        case DISC_NEW_LOAD_LIST:
            return {
                ...state,
                newsite: action.list,
            };
        default:
            return state;
    }
};

export default disc;