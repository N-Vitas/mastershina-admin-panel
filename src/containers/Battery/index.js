import { connect } from 'react-redux';
import actions from '../../actions';
import Battery from '../../views/Battery';

const {
    images: { pushEdit },
    handlers: { setError },
    battery: { fetchNoImagesList, fetchNewNoImagesList },
} = actions;

export default connect(
    ({ battery, user }) => ({
        battery,
        token: user.token,
    }),
    dispatch => ({
        getImageList: (token) => {
            dispatch(fetchNoImagesList(token));
            dispatch(fetchNewNoImagesList(token))
        },
        pushEdit: (edit) => dispatch(pushEdit(edit)),
        setError: (txt) => dispatch(setError(txt)),
    })
)(Battery);