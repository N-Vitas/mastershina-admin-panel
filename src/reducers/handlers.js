import {
    HANDLERS_SUCCESS,
    HANDLERS_ERROR,
    HANDLERS_INFO,
    HANDLERS_WARNING,
    HANDLERS_MESSAGE,
    HANDLERS_LOADING_START,
    HANDLERS_LOADING_STOP,
} from '../actions/handlers';

const initialState = {
    message: null,
    level: "success",
    icon: "pe-7s-bell",
    position: "br",
    loading: false,
};
const handlers = (state = initialState, action) => {
    switch(action.type) {
        case HANDLERS_MESSAGE:
            return {...state, message: action.message};        
        case HANDLERS_SUCCESS:
            return {...state, message: action.message,level:"success"};
        case HANDLERS_ERROR:
            return {...state, message: action.message,level:"error"};
        case HANDLERS_INFO:
            return {...state, message: action.message,level:"info"};
        case HANDLERS_WARNING:
            return {...state, message: action.message,level:"warning"};
        case HANDLERS_LOADING_START:
            return {...state, loading: true};
        case HANDLERS_LOADING_STOP:
            return {...state, loading: false};
        default:
            return state;
    }
};

export default handlers;