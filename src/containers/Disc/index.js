import { connect } from 'react-redux';
import actions from '../../actions';
import Disc from '../../views/Disc';

const {
    images: { pushEdit },
    handlers: { setError },
    disc: { fetchNoImagesList, fetchNewNoImagesList },
} = actions;

export default connect(
    ({ disc, user }) => ({
        disc,
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
)(Disc);