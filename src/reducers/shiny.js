import { SHINY_LOAD_LIST, SHINY_NEW_LOAD_LIST,SHINY_SEARCH_LIST,SHINY_START_LOAD,SHINY_STOP_LOAD, SHINY_SELECT_LOAD } from '../actions/shiny';

const initialState = {
    list: [],
    newsite: [],
    search:{},
    total: 0,
    page: 1, 
    sort: '-tire_name_new', 
    limit: 10,
    loading: true,
    model:{},
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

        case SHINY_START_LOAD:
            return {...state,
                loading: true,
            }
        case SHINY_STOP_LOAD:
            return {...state,
                loading: false,
            }
        case SHINY_SELECT_LOAD:
            return {...state,
                model: action.model,
            }
        case SHINY_SEARCH_LIST:
            return {...state, 
                list: action.list,
                total: action.total,
                page: action.page,
                search: action.search,
                sort: action.sort,
                limit: action.count,
                loading: false,
            }
        default:
            return state;
    }
};

export default shiny;