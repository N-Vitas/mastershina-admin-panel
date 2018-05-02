import { SHINY_LOAD_LIST, SHINY_NEW_LOAD_LIST } from '../actions/shiny';

const initialState = {
    list: [],
    newsite: [],
};
const shiny = (state = initialState, action) => {
    switch(action.type) {
        case SHINY_LOAD_LIST:
            return {
                ...state,
                list: action.list,
            };
        case SHINY_NEW_LOAD_LIST:
            return {
                ...state,
                newsite: action.list,
            };
        default:
            return state;
    }
};

export default shiny;