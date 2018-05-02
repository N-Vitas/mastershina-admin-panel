import { connect } from 'react-redux';
import actions from '../../actions';
import Oil from '../../views/Oil';

const {
    images: { pushEdit },
    handlers: { setError },
    oil: { fetchNoImagesList, fetchNewNoImagesList },
} = actions;

export default connect(
    ({ oil, user }) => ({
        oil,
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
)(Oil);