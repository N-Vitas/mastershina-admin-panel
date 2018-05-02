import { OIL_LOAD_LIST, OIL_NEW_LOAD_LIST } from '../actions/oil';

const initialState = {
    list: [],
    newsite: [],
};
const oil = (state = initialState, action) => {
    switch(action.type) {
        case OIL_LOAD_LIST:
            return {
                ...state,
                list: action.list,
            };
        case OIL_NEW_LOAD_LIST:
            return {
                ...state,
                newsite: action.list,
            };
        default:
            return state;
    }
};

export default oil;