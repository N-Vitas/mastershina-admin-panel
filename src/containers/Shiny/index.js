import { connect } from 'react-redux';
import actions from '../../actions';
import Shiny from '../../views/Shiny';

const {
    images: { pushEdit },
    handlers: { setError },
    shiny: { fetchNoImagesList, fetchNewNoImagesList },
} = actions;

export default connect(
    ({ shiny, user }) => ({
        shiny,
        token: user.token,
    }),
    dispatch => ({
        getImageList: (token) => {
            dispatch(fetchNoImagesList(token));
            dispatch(fetchNewNoImagesList(token))
        },
        pushEdit: (edit) => dispatch(pushEdit(edit)),
        // selectedFileImage: (file, imagePreviewUrl) => dispatch(selectedFileImage(file, imagePreviewUrl)),
        // uploadFile: (file) => dispatch(uploadFile(file)),
        setError: (txt) => dispatch(setError(txt)),
    })
)(Shiny);