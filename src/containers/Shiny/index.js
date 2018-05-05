import { connect } from 'react-redux';
import actions from '../../actions';
import Shiny from '../../views/Shiny';

const {
    images: { pushEdit },
    handlers: { setError },
    shiny: { fetchSearch, startLoad, fetchNoImagesList, fetchNewNoImagesList },
} = actions;

export default connect(
    ({ shiny, user }) => ({
        shiny,
        token: user.token,
    }),
    dispatch => ({
        getImageList: (token) => {
            // dispatch(fetchNoImagesList(token));
            // dispatch(fetchNewNoImagesList(token))
        },
        startLoad: () => {
            dispatch(startLoad());
        },
        fetchSearch: (token,page=1,search={},sort='',limit=10) => {
            dispatch(fetchSearch(token,page,search,sort,limit));
        },
        pushEdit: (edit) => dispatch(pushEdit(edit)),
        // selectedFileImage: (file, imagePreviewUrl) => dispatch(selectedFileImage(file, imagePreviewUrl)),
        // uploadFile: (file) => dispatch(uploadFile(file)),
        setError: (txt) => dispatch(setError(txt)),
    })
)(Shiny);