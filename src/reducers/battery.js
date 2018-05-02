import { BATTERY_LOAD_LIST, BATTERY_NEW_LOAD_LIST } from '../actions/battery';

const initialState = {
    list: [],
    newsite: [],
};
const battery = (state = initialState, action) => {
    switch(action.type) {
        case BATTERY_LOAD_LIST:
            return {
                ...state,
                list: action.list,
            };
        case BATTERY_NEW_LOAD_LIST:
            return {
                ...state,
                newsite: action.list,
            };
        default:
            return state;
    }
};

export default battery;