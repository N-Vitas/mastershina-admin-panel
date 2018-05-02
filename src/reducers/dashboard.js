import { DASHBOARD_NO_IMAGES,DASHBOARD_NO_DESCRIPTION } from '../actions/dashboard';

const initialState = {
    images: {
        oldSite: { shiny: 0,disk: 0,oil: 0,battery: 0 },
        newSite: { shiny: 0,disk: 0,oil: 0,battery: 0 }
    },
    description: {
        oldSite: { shiny: 0,disk: 0,oil: 0,battery: 0 },
        newSite: { shiny: 0,disk: 0,oil: 0,battery: 0 }
    }
};
const dashboard = (state = initialState, action) => {
    switch(action.type) {
        case DASHBOARD_NO_IMAGES:
            return { ...state, images: action.images };
        case DASHBOARD_NO_DESCRIPTION:
            return { ...state, description: action.description };
        default:
            return state;
    }
};

export default dashboard;