import { combineReducers } from 'redux';
import handlers from './handlers';
import dashboard from './dashboard';
import shiny from './shiny';
import disc from './disc';
import oil from './oil';
import battery from './battery';
import user from './user';
import images from './images';

const rootReducer = combineReducers({
    handlers,
    dashboard,
    shiny,
    disc,
    oil,
    battery,
    user,
    images,
});

export default rootReducer;