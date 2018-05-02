import {
    createStore,
    compose,
    applyMiddleware,
} from 'redux';
import ReduxThunk from 'redux-thunk'
import rootReducer from './reducers';
// if you're using redux-thunk or other middlewares, add them here
const createStoreWithMiddleware = compose(applyMiddleware(
    ReduxThunk,
))(createStore);

const configureStore = function(initialState = {}) {
    return createStoreWithMiddleware(rootReducer, initialState);
};

export default configureStore;