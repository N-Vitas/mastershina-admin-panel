import { connect } from 'react-redux';
import actions from '../../actions';
import Shiny from '../../views/Shiny';

const {
    handlers: { setError },
    shiny: { fetchSearch, startLoad, deleteItem, pushEdit },
} = actions;

export default connect(
    ({ shiny, user }) => ({
        shiny,
        token: user.token,
    }),
    dispatch => ({
        deleteItem: (token,model,callback) => {
            dispatch(deleteItem(token,model,callback));
        },
        startLoad: () => {
            dispatch(startLoad());
        },
        fetchSearch: (token,page=1,search={},sort='',limit=10) => {
            dispatch(fetchSearch(token,page,search,sort,limit));
        },
        pushEdit: (edit) => dispatch(pushEdit(edit)),
        setError: (txt) => dispatch(setError(txt)),
    })
)(Shiny);